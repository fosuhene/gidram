<?php
defined('BASEPATH') OR exit('No direct script access allowed');

Class Administration extends MY_Controller{

  public function  __construct(){
    parent::__construct();
      $this->load->model("Ion_auth_model");
      $this->load->model("Pledge_m","pledge");
      $this->load->model("Personal_m","personal");
      $this->load->model("Churchlevel_settings","level");
      $this->load->model("Churchinfo_m","cinfo");
      $this->load->model("Branchinfo_m","cbranch");
      $this->load->model("Churchservice_m","service");
      $this->load->model("Serviceinfo_m","serviceinfo");
      $this->load->model("Churchgroup_m","group");
      $this->load->model("Churchvisitor_m","cvisitor");
      $this->load->model("Churchnewconvert_m","nconvert");
      $this->load->model("Sschool_m","sschool");
   }

  public function churchinfo($id=NULL)
   {
        $data['user_info'] =$this->ion_auth->user()->row();
        $data['logo'] =  $this->ion_auth->get_logo();
        ###############################################
        $country = $this->personal->get_country();
        $output = '';
        if(is_array($country) || is_object($country))
        {
        foreach ($country as $row  )        {
        $output .= '<option value= '. $row['countryid'].'>' . $row['countryname']. '</option>' ;
        }
        $data['country'] = ($output);
        }
         #####################Church Level##########################
        $level = $this->level->get_churchlevel();
        $output = '';
        if(is_array($level) || is_object($level))
        {
        foreach ($level as $row  )        {
        $output .= '<option value= '. $row['id'].'>' . $row['level']. '</option>' ;
        }
        $data['level'] = ($output);
        }

        #####################Church Region##########################
        $region = $this->level->get_region();
        $output = '';
        if(is_array($region) || is_object($region))
        {
        foreach ($region as $row  )        {
        $output .= '<option value= '. $row['regionid'].'>' . $row['regionname']. '</option>' ;
        }
        $data['region'] = ($output);
        }
        //Process the form
        $id= null;
        $this->cinfo->get_new();
        $rules = $this->cinfo->rules;
        $this->form_validation->set_rules($rules);
        if($this->form_validation->run() == TRUE)
        {
            $config['upload_path'] = './assets/images/post/';
            $config['allowed_types'] = 'gif|jpg|png';
            $config['max_size'] = '2004800';
            $config['max_width'] = '5920';
            $config['max_height'] = '3280';

            $this->load->library('upload', $config);

            if ($this->upload->do_upload()){
              $data = array('upload_data' => $this->upload->data());
              $post_image = $_FILES['userfile']['name'];
            }

             $post_image = $_FILES['userfile']['name'];

             $data = array(
                  'id'=>$this->input->post('id'),
                  'churchname'=>$this->input->post('churchname'),
                  'churchlevel_id'=>$this->input->post('churchlevel_id'),
                  'country_id'=>$this->input->post('country_id'),
                  'region_id'=> $this->input->post('region_id'),
                  'city'=> $this->input->post('city'),
                  'address'=>$this->input->post('address'),
                  'contact'=>$this->input->post('contact'),
                  'email'=>$this->input->post('email'),
                  'photo' => $post_image
            );
             $result = $this->cinfo->save($data, $id);
            if($result)
            {
            redirect('Contributions/tithe', 'refresh');
            }else{
              echo "<script>alert('This data was not approved, Thanks.');</script>";
            }
        }
        $data['subview'] = 'administration/churchinfo';
        $this->load->view('administration/churchinfo', $data);

   }



###########################################################################################
##########################################################################################
################### Churchinfo Ajax Operation###########################################
######====================Fetch Church Information =====================########

 public function fetch_churchinfo(){
      $fetch_data = $this->cinfo->make_datatables();
      $data = array();
      foreach($fetch_data as $row)
      {
        $sub_array = array();
        $sub_array[] = $row->id;
        $sub_array[] = '<img src="' . base_url().'assets/images/post/'. $row->photo.'"
        class="img-thumpnail" width="50" height="35" />';
        $sub_array[] = $row->churchname;
        $sub_array[] = $row->level;
        $sub_array[] = $row->countryname;
        $sub_array[] = $row->regionname;
        $sub_array[] = $row->city;
        $sub_array[] = $row->address;
        $sub_array[] = $row->contact;
        $sub_array[] = $row->email;
        $sub_array[] = '<a type="button"  name="update" id="' . $row->id .'"
        class="fa fa-edit update"></i> </a>';
        $sub_array[] = '<a type="button"  name="delete" id="' . $row->id .'"
        class="fa fa-trash delete"></i></a>';
        $data[] = $sub_array;
        $output = array(
          // "draw" => intval($_POST["draw"]),
           "recordsTotal"    =>  $this->cinfo->get_all_data(),
           "recordsFiltered"  => $this->cinfo->get_filtered_data(),
           "data"   => $data,
        );

       }
        echo json_encode($output);
   }


 ###################Edit Church Information##############################
 public function churchinfo_edit(){
  $output = array();
  $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "visitor" ;
  $result =$this->cinfo->editchurchinfo($user);
  //dump_exit($result);
   foreach ($result as $row)
   {
    $output['churchname'] = $row->churchname;
    $output['churchlevel_id'] = $row->churchlevel_id;
    $output['region_id'] = $row->region_id;
    $output['country_id'] = $row->country_id;
    $output['city'] = $row->city;
    $output['address'] = $row->address;
    $output['contact'] = $row->contact;
    $output['email'] = $row->email;
    $output['id'] = $row->id;
    if($row->photo !='')
    {
      $output['userfile'] = '<img src="'.base_url(). 'assets/images/post/' .$row->photo.'" class="img-thumpnail"  width="250" height="120"/>
      <input type="hidden" name="hidden_user_image" value="'. $row->photo.'" />';
    }
     else
    {
      $output['userfile']=  '<input type="hidden" name="hidden_user_image" value=""/>';
     }
   }
   echo json_encode($output);
 }


############################################################################
 public function upload_image_photo($userfile, $old_src)
  {
    $new_name = $_FILES[$userfile]['name'];
    $destination = './assets/images/post/'.$new_name;
    $old_file = './assets/images/post/'.$old_src;
    if (move_uploaded_file($_FILES[$userfile]['tmp_name'], $destination)) {
      if (is_readable($old_file)) {
        @unlink($old_file);
      }
    }
    return $new_name;
  }
###############################################################################

 public function churchinfo_update()
      {
        $user_info = isset($_POST["save"] ) ? $_POST["save"] == 'Edit' : "Not found" ;
        if ($user_info)
          {
              $updated_data =array(
                  'churchname' => $this->input->post('churchname'),
                  'churchlevel_id' => $this->input->post('churchlevel_id'),
                  'region_id' => $this->input->post('region_id'),
                  'country_id' => $this->input->post('country_id'),
                  'city' => $this->input->post('city'),
                  'address' => $this->input->post('address'),
                  'contact' => $this->input->post('contact'),
                  'email' => $this->input->post('email'),
              );
              if (isset($_FILES["userfile"]["name"]))
              {
                 $photo = $this->upload_image_photo('userfile', $this->input->post('hidden_user_image'));
                 if ($photo) $updated_data['photo'] = $photo;
              }
               $user_id = $this->input->post("user_id");
               $result = $this->cinfo->updatechurchinfo($user_id, $updated_data);
               echo 'Data Updated';
         }
        else
        {
          echo "Data not saved";
        }
    }

    ########################Church Informationlete##################################
      public function churchinfo_delete(){
        $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "Not found" ;
        $result =$this->cinfo->delete_personalinfo($user);
        echo 'Data Deleted';
      }


    ####################################################################################
    #########################Church Branch ###########################################

      public function churchbranch($id=NULL)
         {
              $data['user_info'] =$this->ion_auth->user()->row();
              $data['logo'] =  $this->ion_auth->get_logo();
              ###############################################
              $country = $this->personal->get_country();
              $output = '';
              if(is_array($country) || is_object($country))
              {
              foreach ($country as $row  )        {
              $output .= '<option value= '. $row['countryid'].'>' . $row['countryname']. '</option>' ;
              }
              $data['country'] = ($output);
              }
               #####################Church Level##########################
              $level = $this->level->get_churchlevel();
              $output = '';
              if(is_array($level) || is_object($level))
              {
              foreach ($level as $row  )        {
              $output .= '<option value= '. $row['id'].'>' . $row['level']. '</option>' ;
              }
              $data['level'] = ($output);
              }

              #####################Church Region##########################
              $region = $this->level->get_region();
              $output = '';
              if(is_array($region) || is_object($region))
              {
              foreach ($region as $row  )        {
              $output .= '<option value= '. $row['regionid'].'>' . $row['regionname']. '</option>' ;
              }
              $data['region'] = ($output);
              }
                ###########################################
             //Process the form
              $id= null;
              $this->cbranch->get_new();
              $rules = $this->cbranch->rules;
              $this->form_validation->set_rules($rules);
              //Process the form
              if($this->form_validation->run() == TRUE){
                $data = $this->cbranch->array_from_post(array('branchname','churchlevel_id', 'country_id', 'region_id','city','email','contact','pastor_name','address','found_date','pastors_no','members'));
                $this->cbranch->save($data, $id);

                  redirect('Administration/churchbranch');
              }

              $data['subview'] = 'administration/churchbranch';
              $this->load->view('administration/churchbranch', $data);
        }

  ###########################Fetch Church Branch###########################################
   public function fetch_branchinfo(){
      $fetch_data = $this->cbranch->make_datatables();
      $data = array();
      foreach($fetch_data as $row)
      {
        $sub_array = array();
        $sub_array[] = $row->id;
        $sub_array[] = $row->branchname;
        $sub_array[] = $row->level;
        $sub_array[] = $row->countryname;
        $sub_array[] = $row->regionname;
        $sub_array[] = $row->city;
        $sub_array[] = $row->contact;
        $sub_array[] = $row->address;
        $sub_array[] = $row->email;
        $sub_array[] = $row->found_date;
        $sub_array[] = $row->pastor_name;
        $sub_array[] = $row->pastors_no;
        $sub_array[] = $row->members;
        $sub_array[] = $row->created_at;
        $sub_array[] = '<a type="button"  name="update" id="' . $row->id .'"
        class="fa fa-edit update"></i> </a>';
        $sub_array[] = '<a type="button"  name="delete" id="' . $row->id .'"
        class="fa fa-trash delete"></i> </a> ';
        $data[] = $sub_array;
        $output = array(
          // "draw" => intval($_POST["draw"]),
           "recordsTotal"    =>  $this->cbranch->get_all_data(),
           "recordsFiltered"  => $this->cbranch->get_filtered_data(),
           "data"   => $data,
        );

       }

        echo json_encode($output);
   }



   ####################Edit##################################################
      #####################Church Branch Edit(View Pledg Information)#######################
  public function branchinfo_edit(){
    $output = array();
    $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "Not found" ;
    $result =$this->cbranch->editbranchinfo($user);
    foreach ($result as $row)
    {
      $output['branchname'] = $row->branchname;
      $output['churchlevel_id'] = $row->churchlevel_id;
      $output['country_id'] = $row->country_id;
      $output['region_id'] = $row->region_id;
      $output['city'] = $row->city;
      $output['contact'] = $row->contact;
      $output['address'] = $row->address;
      $output['email'] = $row->email;
      $output['found_date'] = $row->found_date;
      $output['pastor_name'] = $row->pastor_name;
      $output['pastors_no'] = $row->pastors_no;
      $output['members'] = $row->members;
      $output['id'] = $row->id;
    }
    echo json_encode($output);
 }


 #######################Church Branch Update################################################
  #############################################################################
   public function  branchinfo_update(){
      $user_info = isset($_POST["save"] ) ? $_POST["save"] == 'Edit' : "Not found" ;
      if ($user_info)
      {
      $updated_data =array(
          'branchname' => $this->input->post('branchname'),
          'churchlevel_id' => $this->input->post('churchlevel_id'),
          'region_id' => $this->input->post('region_id'),
          'country_id' => $this->input->post('country_id'),
          'city' => $this->input->post('city'),
          'address' => $this->input->post('amt_paid'),
          'contact' => $this->input->post('contact'),
          'email' => $this->input->post('email'),
          'pastor_name' => $this->input->post('pastor_name'),
          'pastors_no' => $this->input->post('pastors_no'),
          'found_date' => $this->input->post('found_date'),
          'members' => $this->input->post('members')
      );
       $user = $this->input->post("user_id");
       $result = $this->cbranch->updatebranchinfo($user, $updated_data);
       echo  'Row ID - '.'  '. $user.' ' .'Updated';
    }
    else
    {
      echo "save not found";
    }
  }

 ########################Pledge Details Delete##################################
    public function  branchinfo_delete(){
      $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "Not found" ;
      $result =$this->cbranch->delete_branchinfo($user);
      echo 'Data Deleted';
    }

    ####################################################################################
    #########################Insert Church Service Details ###########################################

      public function churchservice($id=NULL)
         {
              $data['user_info'] =$this->ion_auth->user()->row();
              $data['logo'] =  $this->ion_auth->get_logo();
              // $data['serviceid'] = $this->service->get_serviceid($user_id);
              // dump_exit($data['serviceid']);
              ###############################################
              $country = $this->personal->get_country();
              $output = '';
              if(is_array($country) || is_object($country))
              {
              foreach ($country as $row  )        {
              $output .= '<option value= '. $row['countryid'].'>' . $row['countryname']. '</option>' ;
              }
              $data['country'] = ($output);
              }
              ############################################################
              //Process the form
              $rules = $this->service->rules;
              // $rules = $this->user_m->rules;

              $rules = $this->form_validation->set_rules($rules);

              //Process the form
              if($this->form_validation->run() == TRUE){
              $data = array(
                      // 'id'=>$this->input->post('id'),
                      'mc'=>$this->input->post('mc'),
                      'minister'=>$this->input->post('minister'),
                       'hymn_no'=> $this->input->post('hymn_no'),
                      'bible_lessons'=>$this->input->post('bible_lessons'),
                      'sermon'=>$this->input->post('sermon'),
                      'theme'=>$this->input->post('theme'),
                      'bible_ref'=>$this->input->post('bible_ref'),
                      'service_date'=>$this->input->post('service_date'),
                      'assembly'=>$this->input->post('assembly'),
                      'service_name'=>$this->input->post('service_name'),
                      'purpose'=>$this->input->post('purpose'),
                      'communion'=>$this->input->post('communion'),
                      'start_date'=>$this->input->post('start_date'),
                      'end_date'=>$this->input->post('end_date'),
                  );


              $data1 = array(
                       'service_id'=>$this->input->post('service_id'),
                      'thanksgiving'=>$this->input->post('thanksgiving'),
                      'tithe'=>$this->input->post('tithe'),
                      'other_days'=>$this->input->post('other_days'),
                      'sschool'=> $this->input->post('sschool'),
                      'silver_offering'=>$this->input->post('silver_offering'),
                      'other_funds'=>$this->input->post('other_funds'),
                      'donation'=>$this->input->post('donation'),
                      'total'=>$this->input->post('total'),
                  );

               $data2 = array(
                      'service_id'=>$this->input->post('service_id'),
                      'member_male'=>$this->input->post('member_male'),
                      'member_female'=>$this->input->post('member_female'),
                      'member_children'=>$this->input->post('member_children'),
                      'visitor_male'=>$this->input->post('visitor_male'),
                      'visitor_female'=>$this->input->post('visitor_female'),
                      'visitor_children'=>$this->input->post('visitor_children'),
                      'c_total'=>$this->input->post('c_total'),
                      't_adults'=>$this->input->post('t_adults'),
                      'attendance'=>$this->input->post('attendance'),
                      'remarks'=>$this->input->post('remarks'),
                  );

                $datainfo = $this->service->create($data , $data1, $data2);
                redirect('Administration/churchgroups');
              }
              $data['subview'] = 'administration/churchservice';
              $this->load->view('administration/churchservice', $data);
        }
##################################################################################################
###########################Church Groups#######################################################

      public function churchgroups($id=NULL)
         {
              $data['user_info'] =$this->ion_auth->user()->row();
              $data['logo'] =  $this->ion_auth->get_logo();
              ###########################################
             //Process the form
              $id= null;
              $this->group->get_new();
              $rules = $this->group->rules;
              $this->form_validation->set_rules($rules);
              //Process the form
              if($this->form_validation->run() == TRUE){
                $data = $this->group->array_from_post(array('group_name','meeting_time','meeting_day','member_no','found_date', 'description'));
                $this->group->save($data, $id);

                  redirect('Administration/churchgroups');
              }

              $data['subview'] = 'administration/churchgroups';
              $this->load->view('administration/churchgroups', $data);
        }

//========####################### Upload Church Brach Creation  Excel############################## ==========================================================================================
     public function uploadchurchgroup(){
        if ($this->input->post('submit')) {
            $path = 'assets/images/upload/';
            require_once APPPATH . "/third_party/PHPExcel.php";
            $config['upload_path'] = $path;
            $config['allowed_types'] = 'xlsx|xls';
            $config['remove_spaces'] = TRUE;
            $this->load->library('upload', $config);
            $this->upload->initialize($config);
            if (!$this->upload->do_upload('uploadFile')) {
                $error = array('error' => $this->upload->display_errors());
            } else {
                $data = array('upload_data' => $this->upload->data());
            }
            if(empty($error)){
              if (!empty($data['upload_data']['file_name'])) {
                $import_xls_file = $data['upload_data']['file_name'];
            } else {
                $import_xls_file = 0;
            }
            $inputFileName = $path . $import_xls_file;

            try {
                $inputFileType = PHPExcel_IOFactory::identify($inputFileName);
                $objReader = PHPExcel_IOFactory::createReader($inputFileType);
                $objPHPExcel = $objReader->load($inputFileName);
                $allDataInSheet = $objPHPExcel->getActiveSheet()->toArray(null, true, true, true);
                $flag = true;
                $i=0;
                foreach ($allDataInSheet as $value) {
                  if($flag){
                    $flag =false;
                    continue;
                  }
                  $inserdata[$i]['church_id'] = $value['A'];
                  $inserdata[$i]['group_name'] = $value['B'];
                  $inserdata[$i]['description'] = $value['C'];
                  $inserdata[$i]['meeting_time'] = $value['D'];
                  $i++;
                }
                $result = $this->group->importdata($inserdata);
                if($result){
                   echo "<script>alert('Data is uploaded, Thanks.');</script>";
                }else{
                    echo "<script>alert('ERROR !.');</script>";
                  // echo "ERROR !";
                }

          } catch (Exception $e) {
               die('Error loading file "' . pathinfo($inputFileName, PATHINFO_BASENAME)
                        . '": ' .$e->getMessage());
            }
          }else{
              echo "<script>alert('You have not uploaded a file');</script>";
              echo $error['error'];
            }
        }
         redirect('churchinfo/branchregister', 'refresh');
    }

#################### Church Group################################################
  public function fetch_group()
   {
        $data['session'] =  $this->ion_auth->session->userdata();
        $cdata = $this->group->make_datatables();
        $this->data = array();
        foreach($cdata as $row)
        {
          $sub_array = array();
          $sub_array[] = $row->id;
          $sub_array[] = $row->group_name;
          $sub_array[] = $row->meeting_time;
          $sub_array[] = $row->meeting_day;
          $sub_array[] = $row->member_no;
          $sub_array[] = $row->found_date;
          $sub_array[] = $row->description;
          $sub_array[] = $row->created_at;
          $sub_array[] = ' <a name="updategroup" id="' . $row->id .'" class="update"><i class="fa fa-edit "></i></a>';
          $sub_array[] = ' <a name="deletegroup" id="' . $row->id .'" class="delete" ><i class="fa fa-trash"></i></a>';
          $this->data[] = $sub_array;
         }
         $output = array(
           "recordsTotal"    =>  $this->group->get_all_data(),
           "recordsFiltered"  => $this->group->get_filtered_data(),
           "data"   => $this->data,
        );
        echo json_encode($output);
    }
################## Church Group Edit#############################################
   public function group_edit()
    {
       $output = array();
       $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "not found" ;
       $result =$this->group->editchurchgroup($user);
       foreach ($result as $row)
       {
          $output = array
          (
           'group_name'=> $row->group_name,
           'meeting_time'=> $row->meeting_time,
           'meeting_day'=> $row->meeting_day,
           'member_no'=> $row->member_no,
           'found_date'=> $row->found_date,
           'description'=> $row->description,
           'id'=> $row->id,
          );
       }
       echo json_encode($output);
    }
#######################Group Update##################################################
  public function group_update()
   {
       $user_info = isset($_POST["save"] ) ? $_POST["save"] == 'Edit' : "Not found" ;
        if ($user_info)
        {
        $updated_data =array(
            'group_name' => $this->input->post('group_name'),
            'meeting_time' => $this->input->post('meeting_time'),
            'meeting_day' => $this->input->post('meeting_day'),
            'member_no' => $this->input->post('member_no'),
            'found_date' => $this->input->post('found_date'),
            'description' => $this->input->post('description')
        );
         $user = $this->input->post("user_id");
         $result = $this->group->updatechurchgroup($user, $updated_data);
         echo  'Row ID - '.'  '. $user.' ' .'Updated';
      }
      else
      {
        echo "save not found";
      }
   }
###################Group Delete#################################################
   public function group_delete(){
      $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "not found" ;
      $result =$this->group->delete_churchgroup($user);
      echo 'Data Deleted';
   }

################################################################################
###################################################################################
  public function churchvisitor($id=Null)
     {
        $data['user_info'] =$this->ion_auth->user()->row();
        $data['logo'] =  $this->ion_auth->get_logo();
        ###############################################
        $service = $this->group->get_servicename();
        $output = '';
        if(is_array($service) || is_object($service))
        {
        foreach ($service as $row  ){
        $output .= '<option value= '. $row['id'].'>' . $row['service_name']. '</option>' ;
        }
        $data['service'] = ($output);
        }
      //=============Save Churchvisitor Data to Database ===================================
        $id= null;
        $this->cvisitor->get_new();
        //Set up the form
        $rules = $this->cvisitor->rules;
        $this->form_validation->set_rules($rules);
        //Process the form
        if($this->form_validation->run() == TRUE){
        //upload images
         $this->data = array(
             'serviceRecords_id' => $this->input->post('serviceRecords_id'),
             'name' => $this->input->post('name'),
             'contact' => $this->input->post('contact'),
             'address' => $this->input->post('address'),
             'purpose' => $this->input->post('purpose'),
             'official' => $this->input->post('official'),
        );
        $this->cvisitor->save($this->data, $id);
        if($this->data){
        redirect('Administration/churchvisitor', 'refresh');

      }else{
        echo "<script>alert('Info not saved, Thanks.');</script>";
      }
     }
     $this->data['subview'] = 'administration/churchvisitor';
     $this->load->view('administration/churchvisitor', $data);
  }


  //======================== Upload Church Brach Creation  Excel File=======================================================
     public function uploadchurchvisitor(){
        if ($this->input->post('submit')) {
            $path = 'assets/images/upload/';
            require_once APPPATH . "/third_party/PHPExcel.php";
            $config['upload_path'] = $path;
            $config['allowed_types'] = 'xlsx|xls';
            $config['remove_spaces'] = TRUE;
            $this->load->library('upload', $config);
            $this->upload->initialize($config);
            if (!$this->upload->do_upload('uploadFile')) {
                $error = array('error' => $this->upload->display_errors());
            } else {
                $data = array('upload_data' => $this->upload->data());
            }
            if(empty($error)){
              if (!empty($data['upload_data']['file_name'])) {
                $import_xls_file = $data['upload_data']['file_name'];
            } else {
                $import_xls_file = 0;
            }
            $inputFileName = $path . $import_xls_file;

            try {
                $inputFileType = PHPExcel_IOFactory::identify($inputFileName);
                $objReader = PHPExcel_IOFactory::createReader($inputFileType);
                $objPHPExcel = $objReader->load($inputFileName);
                $allDataInSheet = $objPHPExcel->getActiveSheet()->toArray(null, true, true, true);
                $flag = true;
                $i=0;
                foreach ($allDataInSheet as $value) {
                  if($flag){
                    $flag =false;
                    continue;
                  }
                  $inserdata[$i]['serviceRecords_id'] = $value['A'];
                  $inserdata[$i]['church_id'] = $value['B'];
                  $inserdata[$i]['name'] = $value['C'];
                  $inserdata[$i]['contact'] = $value['D'];
                  $inserdata[$i]['address'] = $value['E'];
                  $inserdata[$i]['purpose'] = $value['F'];
                  $inserdata[$i]['official'] = $value['G'];
                  $i++;
                }
                $result = $this->cvisitor->importdata($inserdata);
                if($result){
                   echo "<script>alert('Data is uploaded, Thanks.');</script>";
                }else{
                    echo "<script>alert('ERROR !.');</script>";
                  // echo "ERROR !";
                }

          } catch (Exception $e) {
               die('Error loading file "' . pathinfo($inputFileName, PATHINFO_BASENAME)
                        . '": ' .$e->getMessage());
            }
          }else{
              echo "<script>alert('You have not uploaded a file');</script>";
              echo $error['error'];
            }
        }
         redirect('visitornewconvent/churchvisitor', 'refresh');
    }


    ///....################....Fetch data from the database............######.......................
 public function fetch_churchvisitor()
    {
      $data['session'] =  $this->ion_auth->session->userdata();
      $cdata = $this->cvisitor->make_datatables();
      $this->data = array();
      foreach($cdata as $row)
      {
        $sub_array = array();
        $sub_array[] = $row->visitor_id;
        $sub_array[] = $row->service_name;
        $sub_array[] = $row->name;
        $sub_array[] = $row->contact;
        $sub_array[] = $row->address;
        $sub_array[] = $row->purpose;
        $sub_array[] = $row->official;
        $sub_array[] = $row->created_at;
       $sub_array[] = ' <a name="updateChurchvisitor" id="' . $row->visitor_id .'" class="update"><i class="fa fa-edit"></i></a>';
       $sub_array[] = ' <a name="deleteChurchvisitor" id="' . $row->visitor_id .'" class="delete" ><i class="fa fa-trash"></i></a>';
        $this->data[] = $sub_array;
       }
       $output = array(
         "recordsTotal"    =>  $this->cvisitor->get_all_data(),
         "recordsFiltered"  => $this->cvisitor->get_filtered_data(),
         "data"   => $this->data,
      );
      echo json_encode($output);
  }


 public function churchvisitor_edit()
  {
     $output = array();
     $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "not found" ;
     $result =$this->cvisitor->editchurchvisitor($user);
     foreach ($result as $row)
        $output = array
            (
             'serviceRecords_id'=> $row->serviceRecords_id,
             'name'=> $row->name,
             'contact'=> $row->contact,
             'address'=> $row->address,
             'purpose'=> $row->purpose,
             'official'=> $row->official,
             'visitor_id'=> $row->visitor_id,
            );
       echo json_encode($output);
  }


########################Update Church visitor###############################
 public function churchvisitor_update()
 {
     $user_info = isset($_POST["save"] ) ? $_POST["save"] == 'Edit' : "Not found" ;
      if ($user_info)
      {
        $updated_data =array(
            'serviceRecords_id' => $this->input->post('serviceRecords_id'),
            'name' => $this->input->post('name'),
            'contact' => $this->input->post('contact'),
            'address' => $this->input->post('address'),
            'purpose' => $this->input->post('purpose'),
            'official' => $this->input->post('official'),
        );
         $user = $this->input->post("user_id");
         $result = $this->cvisitor->updatechurchvisitor($user, $updated_data);

         echo  'Row ID - '.'  '. $user.' ' .'Updated';
     }
     else
     {
        echo "save not found";
     }
  }
//####################Delete################################################

  public function churchvisitor_delete()
  {
      $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "visitordelete" ;
      $result =$this->cvisitor->delete_churchvisitor($user);
      echo 'Data Deleted';
   }





//======================= Church new COnvent Info=======================================


  public function churchnewconvert($id=Null)
     {
      $data['user_info'] =$this->ion_auth->user()->row();
      $data['logo'] =  $this->ion_auth->get_logo();
      ###############################################
      $service = $this->group->get_servicename();
      $output = '';
      if(is_array($service) || is_object($service))
      {
        foreach ($service as $row  ){
        $output .= '<option value= '. $row['id'].'>' . $row['service_name']. '</option>' ;
        }
        $data['service'] = ($output);
      }
   //=============Save Churchinfo Data to Database ===================================
        $id= null;
        $this->nconvert->get_new();
        //Set up the form
        $rules = $this->nconvert->rules;
        $this->form_validation->set_rules($rules);
        //Process the form
        if($this->form_validation->run() == TRUE)
        {
             $this->data = array(
                 'serviceRecords_id' => $this->input->post('serviceRecords_id'),
                 'NCname' => $this->input->post('NCname'),
                 'NCcontact' => $this->input->post('NCcontact'),
                 'NCaddress' => $this->input->post('NCaddress'),
                 // 'NCpurpose' => $this->input->post('NCpurpose'),
                 'NCofficial' => $this->input->post('NCofficial'),
                 'NCcaretaker' => $this->input->post('NCcaretaker'),
            );
            $this->nconvert->save($this->data, $id);
            if($this->data)
            {
              redirect('Administration/churchvisitor', 'refresh');
            }
            else
            {
              echo "<script>alert('This product was not approved, Thanks.');</script>";
            }
         }
           $this->data['subview'] = 'administration/churchnewconvert';
           $this->load->view('administration/churchnewconvert', $data);
      }


//======================== Upload Church Brach Creation  Excel File=======================================================
   public function uploadchurchnewconvent(){
      if ($this->input->post('submit')) {
          $path = 'assets/images/upload/';
          require_once APPPATH . "/third_party/PHPExcel.php";
          $config['upload_path'] = $path;
          $config['allowed_types'] = 'xlsx|xls';
          $config['remove_spaces'] = TRUE;
          $this->load->library('upload', $config);
          $this->upload->initialize($config);
          if (!$this->upload->do_upload('uploadFile')) {
              $error = array('error' => $this->upload->display_errors());
          } else {
              $data = array('upload_data' => $this->upload->data());
          }
          if(empty($error)){
            if (!empty($data['upload_data']['file_name'])) {
              $import_xls_file = $data['upload_data']['file_name'];
          } else {
              $import_xls_file = 0;
          }
          $inputFileName = $path . $import_xls_file;

          try {
              $inputFileType = PHPExcel_IOFactory::identify($inputFileName);
              $objReader = PHPExcel_IOFactory::createReader($inputFileType);
              $objPHPExcel = $objReader->load($inputFileName);
              $allDataInSheet = $objPHPExcel->getActiveSheet()->toArray(null, true, true, true);
              $flag = true;
              $i=0;
              foreach ($allDataInSheet as $value) {
                if($flag){
                  $flag =false;
                  continue;
                }
                $inserdata[$i]['church_id'] = $value['A'];
                $inserdata[$i]['serviceRecords_id'] = $value['B'];
                $inserdata[$i]['NCname'] = $value['C'];
                $inserdata[$i]['NCcontact'] = $value['D'];
                $inserdata[$i]['NCaddress'] = $value['E'];
                $inserdata[$i]['NCpurpose'] = $value['F'];
                $inserdata[$i]['NCofficial'] = $value['G'];
                $inserdata[$i]['NCcaretaker'] = $value['H'];
                $i++;
              }
              $result = $this->nconvert->importdata($inserdata);
              if($result){
                 echo "<script>alert('Data is uploaded, Thanks.');</script>";
              }else{
                  echo "<script>alert('ERROR !.');</script>";
                // echo "ERROR !";
              }

        } catch (Exception $e) {
             die('Error loading file "' . pathinfo($inputFileName, PATHINFO_BASENAME)
                      . '": ' .$e->getMessage());
          }
        }else{
            echo "<script>alert('You have not uploaded a file');</script>";
            echo $error['error'];
          }
      }
       redirect('visitornewconvent/churchnewconvent', 'refresh');
  }


 public function fetch_churchnewconvent()
   {
        $data['session'] =  $this->ion_auth->session->userdata();
        $cdata = $this->nconvert->make_datatables();
        $this->data = array();
        foreach($cdata as $row)
        {
          $sub_array = array();
          $sub_array[] = $row->newConvent_id;
          //======= Display this if is headquarters=========================
          $sub_array[] = $row->service_name;
          $sub_array[] = $row->NCname;
          $sub_array[] = $row->NCcontact;
          $sub_array[] = $row->NCaddress;
          // $sub_array[] = $row->NCpurpose;
          $sub_array[] = $row->NCcaretaker;
          $sub_array[] = $row->NCofficial;
          $sub_array[] = $row->created_at;
          // if(($this->ion_auth->in_group('admin'))  != null){
         $sub_array[] = ' <a name="updateChurchnewconvent" id="' . $row->newConvent_id .'" class="update"><i class="fa fa-edit"></i></a>';
         $sub_array[] = ' <a name="delete" id="' . $row->newConvent_id .'" class="delete" ><i class="fa fa-trash"></i></a>';
        // }
          $this->data[] = $sub_array;
        }
         $output = array(
           "recordsTotal"    =>  $this->nconvert->get_all_data(),
           "recordsFiltered"  => $this->nconvert->get_filtered_data(),
           "data"   => $this->data,

        );

        echo json_encode($output);
    }


   public function churchnewconvent_edit()
   {
     $output = array();
     $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "not found" ;
     $result =$this->nconvert->editchurchnewconvent($user);
     foreach ($result as $row)
     {
        $output['serviceRecords_id'] = $row->serviceRecords_id;
        $output['NCname'] = $row->NCname;
        $output['NCcontact'] = $row->NCcontact;
        $output['NCaddress'] = $row->NCaddress;
        $output['NCpurpose'] = $row->NCpurpose;
        $output['NCofficial'] = $row->NCofficial;
        $output['NCcaretaker'] = $row->NCcaretaker;
        $output['newConvent_id'] = $row->newConvent_id;
     }

     echo json_encode($output);
    }


 public function churchnewconvent_update()
 {
     $user_info = isset($_POST["save"] ) ? $_POST["save"] == 'Edit' : "Not found" ;
      if ($user_info)
      {
      $updated_data =array(
          'serviceRecords_id' => $this->input->post('serviceRecords_id'),
          'NCname' => $this->input->post('NCname'),
          'NCcontact' => $this->input->post('NCcontact'),
          'NCaddress' => $this->input->post('NCaddress'),
          'NCpurpose' => $this->input->post('NCpurpose'),
          'NCofficial' => $this->input->post('NCofficial'),
          'NCcaretaker' => $this->input->post('NCcaretaker'),
      );

       $user = $this->input->post("user_id");
       $result = $this->nconvert->updatechurchnewconvent($user, $updated_data);

       echo  'Row ID - '.'  '. $user.' ' .'Updated';
      // echo $user;
     }
    else
    {
      echo "save not found";
    }
  }


  public function churchnewconvent_delete()
  {
    $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "Not found" ;
    $result =$this->nconvert->delete_churchnewconvent($user);
    echo 'Data Deleted';
  }


########################################################################################
################################Sunday School ########################################

  public function sschool($id=Null)
     {
      $data['user_info'] =$this->ion_auth->user()->row();
      $data['logo'] =  $this->ion_auth->get_logo();
   //=============Save Sunday School Data to Database ===================================
        $id= null;
        $this->sschool->get_new();
        //Set up the form
        $rules = $this->sschool->rules;
        $this->form_validation->set_rules($rules);
        //Process the form
        if($this->form_validation->run() == TRUE)
        {
             $this->data = array(
                 'group_name' => $this->input->post('group_name'),
                 'officer' => $this->input->post('officer'),
                 'officer_assistant' => $this->input->post('officer_assistant'),
                 'attendance' => $this->input->post('attendance'),
                 'date' => $this->input->post('date'),
            );
            $this->sschool->save($this->data, $id);
            if($this->data)
            {
              redirect('Administration/churchvisitor', 'refresh');
            }
            else
            {
              echo "<script>alert('This product was not approved, Thanks.');</script>";
            }
         }
           $this->data['subview'] = 'administration/sschool';
           $this->load->view('administration/sschool', $data);
      }

#################################################################################
###################### Sunday School############################################
   public function fetch_sschool()
    {
      $data['session'] =  $this->ion_auth->session->userdata();
      $cdata = $this->sschool->make_datatables();
      $this->data = array();
      foreach($cdata as $row)
      {
        $sub_array = array();
        $sub_array[] = $row->id;
        $sub_array[] = $row->group_name;
        $sub_array[] = $row->officer;
        $sub_array[] = $row->officer_assistant;
        $sub_array[] = $row->attendance;
        $sub_array[] = $row->date;
        $sub_array[] = $row->created_at;
       $sub_array[] = ' <a name="update" id="' . $row->id .'" class="update"><i class="fa fa-edit"></i></a>';
       $sub_array[] = ' <a name="delete" id="' . $row->id .'" class="delete" ><i class="fa fa-trash"></i></a>';
        $this->data[] = $sub_array;
       }
       $output = array(
         "recordsTotal"    =>  $this->sschool->get_all_data(),
         "recordsFiltered"  => $this->sschool->get_filtered_data(),
         "data"   => $this->data,
      );
      echo json_encode($output);
  }


 public function sschool_edit()
  {
     $output = array();
     $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "not found" ;
     $result =$this->sschool->editsschool($user);
     foreach ($result as $row)
        $output = array
            (
             'group_name'=> $row->group_name,
             'officer'=> $row->officer,
             'officer_assistant'=> $row->officer_assistant,
             'attendance'=> $row->attendance,
             'date'=> $row->date,
             'id'=> $row->id,
            );
       echo json_encode($output);
  }


########################Update Church visitor###############################
 public function sschool_update()
 {
     $user_info = isset($_POST["save"] ) ? $_POST["save"] == 'Edit' : "Not found" ;
      if ($user_info)
      {
        $updated_data =array(
            'group_name' => $this->input->post('group_name'),
            'officer' => $this->input->post('officer'),
            'officer_assistant' => $this->input->post('officer_assistant'),
            'date' => $this->input->post('date'),
            'attendance' => $this->input->post('attendance'),
        );
         $user = $this->input->post("user_id");
         $result = $this->sschool->updatesschool($user, $updated_data);

         echo  'Row ID - '.'  '. $user.' ' .'Updated';
     }
     else
     {
        echo "save not found";
     }
  }
//####################Delete################################################

  public function sschool_delete()
  {
      $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "visitordelete" ;
      $result =$this->sschool->delete_sschool($user);
      echo 'Data Deleted';
   }

  }

 ?>