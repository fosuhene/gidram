<?php
defined('BASEPATH') OR exit('No direct script access allowed');

Class Dashboard extends MY_Controller{

public function  __construct(){

  parent::__construct();
      $this->load->model('National_m', 'national');
      $this->load->model('Regional_m', 'regional');
      $this->load->model('Cread', 'cread');
      $this->load->model('Ion_auth_model');
      $this->load->model('loginimageupload', 'imageupload');
      $this->load->library(['ion_auth', 'form_validation']);

 }


 public function index(){
    // if ($this->ion_auth->logged_in()){
    $data['user_info'] =$this->ion_auth->user()->row();
	//get sum of all TL Lines
	$data['sTL'] = $this->national->getSumTrans();
	//get count TL Lines
	$data['cTL'] = $this->national->getCountTrans();
    // $data['echartpie'] = $this->cread->echart_report();
    // $data['rwRow'] = $this->cread->rwRow();
    // $data['countTrans'] = $this->cread->count_trans();
    // $data['num_results_national'] = $this->cread->count_national();
    // $data['num_results_regional'] = $this->cread->count_regional();
    // $data['num_results_district'] = $this->cread->count_district();
    // $data['num_results_community'] = $this->cread->count_community();
    // $data['num_results_facility'] = $this->cread->count_facility();
    $data['subview'] = 'dashboard/index';
    $this->load->view('dashboard/index', $data);
   // }
 }


 public function newindex(){
    $data['user_info'] =$this->ion_auth->user()->row();
    $data['subview'] = 'dashboard/index';
    $this->load->view('dashboard/index', $data);
 }



public function national(){
    $data['user_info'] =$this->ion_auth->user()->row();
    $this->ion_auth->set_hook('user', 'join_person_users', $this, 'prepare_user_list', array());
    $data['usersmain'] = $this->ion_auth->user()->row();
    ##############//Process the form######################################################
    $id= null;
    $this->national->get_new();
    $rules = $this->national->rules;
    $this->form_validation->set_rules($rules);
    //Process the form
    if($this->form_validation->run() == TRUE){
      $data = $this->national->array_from_post(array('name','user_id','shortname', 'code', 'description','opening_date','closed_date','comment','url','contact_person','haddress','email','phone','latitude','longitude','added_date','tin','ghpost_code'));
      $this->national->save($data, $id);

        redirect('Dashboard/national','refresh');
    }
    $data['subview'] = 'dashboard/national';
    $this->load->view('dashboard/national', $data);
 }



public function regional(){
    $data['user_info'] =$this->ion_auth->user()->row();
    $this->ion_auth->set_hook('user', 'join_person_users', $this, 'prepare_user_list', array());
    $data['usersmain'] = $this->ion_auth->user()->row();
    ##############//Process the form######################################################
    $id= null;
    $this->regional->get_new();
    $rules = $this->regional->rules;
    $this->form_validation->set_rules($rules);
    //Process the form
    if($this->form_validation->run() == TRUE){
      $data = $this->regional->array_from_post(array('name','hierachyNationalID','shortname', 'code', 'description','opening_date','closed_date','comment','url','contact_person','haddress','email','phone','latitude','longitude','added_date','tin','ghpost_code'));
      $this->regional->save($data, $id);

        redirect('Dashboard/regional','refresh');
    }
    $data['subview'] = 'dashboard/regional';
    $this->load->view('dashboard/regional', $data);
 }



  public function new_profile($id=Null){
    $data['user_info'] =$this->ion_auth->user()->row();
    $data['subview'] = 'dashboard/new_profile';
    $this->load->view('dashboard/new_profile', $data);
 }



  public function subtree($id=Null){
    $data['user_info'] =$this->ion_auth->user()->row();
    $data['subview'] = 'dashboard/subtree';
    $this->load->view('dashboard/subtree', $data);
 }


//####################### Edit user profile image for users#################################################

  public function user_edit()
   {
       $output = array();
       $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "not found" ;
       $result =$this->national->edituserimage($user);
       //dump_exit($user);
       foreach ($result as $row)
       {
          //echo '<img src="'.base_url(). 'assets/images/post/'.$row->photo.'" class="img-thumpnail"  width="180" height="110"/>';
          $output['id'] = $row->id;
          $output['password'] = $row->password;

         if($row->photo !='')
          {
            $output['photo'] = '<img src="'.base_url(). 'assets/images/post/' . $row->photo .'" class="img-thumpnail"  width="180" height="110"/>
            <input type="hidden" name="hidden_user_image" value="'. $row->photo.'" />';
          }
          else
          {
            $output['photo']=  '<input type="hidden" name="hidden_user_image" value=""/>';
          }

       }

       echo json_encode($output);
    }



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


 public function user_update()
      {
            $user_info = isset($_POST["save"] ) ? $_POST["save"] == 'Edit' : "visitor" ;
            if ($user_info)
              {
                  $updated_data =array(
                      // 'id' => $this->input->post('id'),
                      'photo' => $this->input->post('photo'),
                  );

                  if (isset($_FILES["userfile"]["name"]))
                  {
                     $logo = $this->upload_image_photo('userfile', $this->input->post('hidden_user_image'));
                     if ($logo) $updated_data['photo'] = $logo;
                  }
                   $user_id = $this->input->post("user_id");
                   $result = $this->national->updateuserimage($user_id, $updated_data);
                   echo 'Data Updated';
             }
            else
            {
              echo "Data not saved";
            }
        }
 //####################### Edit user profile image for each Client #################################################

  public function profile_edit()
   {
       $output = array();
       $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "not found" ;
       $result =$this->national->edituserimage($user);
       //dump_exit($user);
       foreach ($result as $row)
       {
          $output['id'] = $row->id;
          $output['password'] = $row->password;
          $output['first_name'] = $row->first_name;
          $output['email'] = $row->email;
          $output['phone'] = $row->phone;
          $output['username'] = $row->username;

         if($row->photo !='')
          {
            $output['photo'] = '<img src="'.base_url(). 'assets/images/post/' . $row->photo .'" class="img-thumpnail"  width="180" height="110"/>
            <input type="hidden" name="hidden_user_image" value="'. $row->photo.'" />';
          }
          else
          {
            $output['photo']=  '<input type="hidden" name="hidden_user_image" value=""/>';
          }

       }

       echo json_encode($output);
    }



 public function profile_update()
      {
            $user_info = isset($_POST["save"] ) ? $_POST["save"] == 'Edit' : "Not found" ;
            // $password = $this->ion_auth->hash_password('password');
            // dump_exit($password);
            if ($user_info)
              {
                  $updated_data =array(
                      // 'id' => $this->input->post('id'),
                      'first_name' => $this->input->post('first_name'),
                      'email' => $this->input->post('email'),
                      'phone' => $this->input->post('phone'),
                      'username' => $this->input->post('username'),
                      'password' => $this->ion_auth->hash_password($this->input->post('password')),
                  );

                  if (isset($_FILES["userfile"]["name"]))
                  {
                     $photo = $this->upload_image_photo('userfile', $this->input->post('hidden_user_image'));
                     if ($photo) $updated_data['photo'] = $photo;
                  }
                   $user_id = $this->input->post("user_id");
                   $result = $this->national->updateprofiledata($user_id, $updated_data);
                   echo 'Data Updated';
             }
            else
            {
              echo "Data not saved";
            }
        }

//#################### Edit user profile image for Other Profile Details #################################################

  public function profileother_edit()
   {
       $output = array();
       $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "not found" ;
       $result =$this->national->editnationalinfo($user);
       //dump_exit($user);
       foreach ($result as $row)
       {
          $output['id'] = $row->id;
          $output['manager'] = $row->manager;
          $output['city'] = $row->city;
          $output['address'] = $row->address;
          $output['country'] = $row->country;
       }

       echo json_encode($output);
    }



 public function profileother_update()
      {
            $user_info = isset($_POST["save"] ) ? $_POST["save"] == 'Edit' : "Not found" ;
            // dump_exit( $user_info);
            if ($user_info)
              {
                  $updated_data =array(
                      // 'id' => $this->input->post('id'),
                      'manager' => $this->input->post('manager'),
                      'city' => $this->input->post('city'),
                      'address' => $this->input->post('address'),
                      'country' => $this->input->post('country'),
                  );
                   $user_id = $this->input->post("user_id");
                   $result = $this->national->updatenationalinfo($user_id, $updated_data);
                   echo 'Data Updated';
             }
            else
            {
              echo "Data not saved";
            }
        }

/*================Clients Edit===========================*/

public function national_edit(){
  $output = array();
  $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "Not Found" ;
  $result =$this->national->editnationalinfo($user);
  //dump_exit($result);
   foreach ($result as $row)
   {
    $output['account_name'] = $row->account_name;
    $output['manager'] = $row->manager;
    $output['address'] = $row->address;
    $output['city'] = $row->city;
    $output['country'] = $row->country;
    $output['login_date'] = $row->login_date;
    $output['id'] = $row->id;
    $output['user_id'] = $row->user_id;
   }

 echo json_encode($output);
}



 public function national_update(){
   $user_info = isset($_POST["save"] ) ? $_POST["save"] == 'Edit' : "Not found" ;
    if ($user_info)
    {

    $updated_data =array(
        'account_name' => $this->input->post('account_name'),
        'manager' => $this->input->post('manager'),
        'address' => $this->input->post('address'),
        'city' => $this->input->post('city'),
        'country' => $this->input->post('country'),
        'login_date' => $this->input->post('login_date')
    );
     $user = $this->input->post("user_id");
     $result = $this->national->updatenationalinfo($user, $updated_data);

     echo  'Row ID - '.'  '. $user.' ' .'Updated';
    // echo $user;
  }
  else
  {
    echo "save not found";
  }

 }


public function membersTree(  $parent_key=1)
    {
      // $parent_key = 1;
      $row1 = [];
      $row = $this->regional->membertree($parent_key);
   // print_r($row);
      foreach($row as $key => $value)
      {
        $id = $value['facilityID'];
        $row1[$key]['facilityID'] = $value['facilityID'];
        $row1[$key]['regionalName'] = $value['regionalName'];
        $row1[$key]['regionalName'] = $value['regionalName'];
        $row1[$key]['nodes'] = array_values($this->membersTree($value['facilityID']));

      //$row1[$key]['nodes'] = array_values($this->membersTree($id));
      }
      return $row1;

    }




  public function getItem()
    {
          $data = [];
          $parent_key = 0;

          // $row = $this->db->query('SELECT nationalID, nationalName,regionalID,regionalName,districtID,districtName from vwtree_district');
           // dump_exit($row);

            $row = $this->regional->gettree();
              // print_r($row);
            // dump_exit($row);
          if(is_array($row))
          {

            echo' God is great';
              $data = $this->membersTree();
              // dump_exit($data);

          }else{
              $data=["nationalID"=>"0","nationalName"=>"No Members presnt in list","districtName"=>"No Members presnt in list","regionalName"=>"No Members is presnt in list","nodes"=>[]];
          }
          echo json_encode(array_values($data));
    }


    //   public function getItem()
    // {
    //       $data = [];
    //       $parent_key = '0';
    //       $row = $this->db->query('SELECT nationalID, nationalName,regionalID,regionalName,districtID,districtName from vwtree_district');
    //       if($row->num_rows() > 0)
    //       {
    //           $data = $this->membersTree($parent_key);

    //       }else{
    //           $data=["branch_id"=>"0","branchname"=>"No Members presnt in list","churchname"=>"No Members presnt in list","text"=>"No Members is presnt in list","nodes"=>[]];
    //       }
    //       echo json_encode(array_values($data));
    // }





}




?>