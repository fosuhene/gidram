<?php
defined('BASEPATH') OR exit('No direct script access allowed');

Class Settings extends MY_Controller{

  public function  __construct(){
    parent::__construct();
      $this->load->model("Ion_auth_model");
      $this->load->model('Setting_m', 'settings');
      $this->load->model('Bankdetails_settings', 'bankdetails');
      $this->load->model('Fundtype_settings', 'fund');
      $this->load->model('Servicename_settings', 'service');
      $this->load->model('Churchlevel_settings', 'level');
   }

  //..............View Main Settings Page ..............................................


  public function index()
   {
      $data['user_info'] =$this->ion_auth->user()->row();
      $data['logo'] =  $this->ion_auth->get_logo();
      ################Process the Form##########################################
      //Process the form
      $id= null;
      $this->settings->get_new();
      $rules = $this->settings->rules;
      $this->form_validation->set_rules($rules);
      if($this->form_validation->run() == TRUE){
        $data = $this->settings->array_from_post(array('offering_type','description'));
        $this->settings->save($data, $id);
        redirect('Settings/index');
      }
      $data['subview'] = 'settings/settings';
      $this->load->view('settings/settings', $data);
  }


 ###########################Fetch Offeringtype Settings###########################################
   public function fetch_offeringtpe(){
      $fetch_data = $this->settings->make_datatables();
      $data = array();
      foreach($fetch_data as $row)
      {
        $sub_array = array();
        $sub_array[] = $row->id;
        $sub_array[] = $row->offering_type;
        $sub_array[] = $row->description;
        $sub_array[] = $row->created_at;
        $sub_array[] = '<a type="button"  name="update" id="' . $row->id .'"
        class="fa fa-edit update"></i> </a>';
        $sub_array[] = '<a type="button"  name="delete" id="' . $row->id .'"
        class="fa fa-trash delete"></i> </a> ';
        $data[] = $sub_array;
        $output = array(
          // "draw" => intval($_POST["draw"]),
           "recordsTotal"    =>  $this->settings->get_all_data(),
           "recordsFiltered"  => $this->settings->get_filtered_data(),
           "data"   => $data,
        );

       }

        echo json_encode($output);
   }

   ####################Edit##################################################
      #####################Offering Type Edit(View  Information)#######################
  public function offeringtype_edit(){
    $output = array();
    $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "Not found" ;
    $result =$this->settings->editsettingsinfo($user);
    foreach ($result as $row)
    {
      $output['offering_type'] = $row->offering_type;
      $output['description'] = $row->description;
      $output['id'] = $row->id;
    }
    echo json_encode($output);
 }


 #######################Offering Type Update################################################
  ########################################################################################
   public function offeringtype_update(){
      $user_info = isset($_POST["save"] ) ? $_POST["save"] == 'Edit' : "Not found" ;
      if ($user_info)
      {
      $updated_data =array(
          'offering_type' => $this->input->post('offering_type'),
          'description' => $this->input->post('description'),
      );
       $user = $this->input->post("user_id");
       $result = $this->settings->updateofferingtypeinfo($user, $updated_data);
       echo  'Row ID - '.'  '. $user.' ' .'Updated';
    }
    else
    {
      echo "save not found";
    }
  }

 ########################Offering Type Delete##################################
    public function offeringtype_delete(){
      $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "visitordelete" ;
      $result =$this->settings->delete_offeringtypeinfo($user);
      echo 'Data Deleted';
    }

############################Bank Details Setup#####################################################
    public function bank_details()
     {
        $data['user_info'] =$this->ion_auth->user()->row();
        $data['logo'] =  $this->ion_auth->get_logo();
        ################Process the Form##########################################
        //Process the form
        $id= null;
        $this->bankdetails->get_new();
        $rules = $this->bankdetails->rules;
        $this->form_validation->set_rules($rules);
        if($this->form_validation->run() == TRUE){
          $data = $this->bankdetails->array_from_post(array('bank_name','bank_code','bank_type'));
          $this->bankdetails->save($data, $id);
          redirect('Settings/bank_details');
        }
        $data['subview'] = 'settings/bank_details';
        $this->load->view('settings/bank_details', $data);
    }



 ###########################Fetch Offeringtype Settings###########################################
   public function fetch_bankdetails(){
      $fetch_data = $this->bankdetails->make_datatables();
      $data = array();
      foreach($fetch_data as $row)
      {
        $sub_array = array();
        $sub_array[] = $row->id;
        $sub_array[] = $row->bank_code;
        $sub_array[] = $row->bank_name;
        $sub_array[] = $row->bank_type;
        $sub_array[] = $row->created_at;
        $sub_array[] = '<a type="button"  name="update" id="' . $row->id .'"
        class="fa fa-edit update"></i> </a>';
        $sub_array[] = '<a type="button"  name="delete" id="' . $row->id .'"
        class="fa fa-trash delete"></i> </a> ';
        $data[] = $sub_array;
        $output = array(
          // "draw" => intval($_POST["draw"]),
           "recordsTotal"    =>  $this->bankdetails->get_all_data(),
           "recordsFiltered"  => $this->bankdetails->get_filtered_data(),
           "data"   => $data,
        );

       }

        echo json_encode($output);
   }

    ####################Edit##################################################
    #####################Offering Type Edit(View  Information)#######################
  public function bankdetails_edit(){
    $output = array();
    $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "Not found" ;
    $result =$this->bankdetails->editsettingsinfo($user);
    foreach ($result as $row)
    {
      $output['bank_code'] = $row->bank_code;
      $output['bank_name'] = $row->bank_name;
      $output['bank_type'] = $row->bank_type;
      $output['id'] = $row->id;
    }
    echo json_encode($output);
 }


  #######################Offering Type Update################################################
  ########################################################################################
   public function bankdetails_update(){
      $user_info = isset($_POST["save"] ) ? $_POST["save"] == 'Edit' : "Not found" ;
      if ($user_info)
      {
      $updated_data =array(
          'bank_code' => $this->input->post('bank_code'),
          'bank_name' => $this->input->post('bank_name'),
          'bank_type' => $this->input->post('bank_type'),
      );
       $user = $this->input->post("user_id");
       $result = $this->bankdetails->updatesettingsinfo($user, $updated_data);
       echo  'Row ID - '.'  '. $user.' ' .'Updated';
    }
    else
    {
      echo "save not found";
    }
  }

 ########################Offering Type Delete##################################
    public function bankdetails_delete(){
      $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "visitordelete" ;
      $result =$this->bankdetails->delete_settingsinfo($user);
      echo 'Data Deleted';
    }


##############################################################################################
    ################################# Fund Type ############################################
      public function fund_type()
     {
        $data['user_info'] =$this->ion_auth->user()->row();
        $data['logo'] =  $this->ion_auth->get_logo();
        ################Process the Form##########################################
        $id= null;
        $this->fund->get_new();
        $rules = $this->fund->rules;
        $this->form_validation->set_rules($rules);
        if($this->form_validation->run() == TRUE){
          $data = $this->fund->array_from_post(array('fund_type','description'));
          $this->fund->save($data, $id);
          redirect('Settings/fund_type');
        }
        $data['subview'] = 'settings/fund_type';
        $this->load->view('settings/fund_type', $data);
    }


 ###########################Fetch Fundtype Settings###########################################
   public function fetch_fundtype(){
      $fetch_data = $this->fund->make_datatables();
      $data = array();
      foreach($fetch_data as $row)
      {
        $sub_array = array();
        $sub_array[] = $row->id;
        $sub_array[] = $row->fund_type;
        $sub_array[] = $row->description;
        $sub_array[] = $row->created_at;
        $sub_array[] = '<a type="button"  name="update" id="' . $row->id .'"
        class="fa fa-edit update"></i> </a>';
        $sub_array[] = '<a type="button"  name="delete" id="' . $row->id .'"
        class="fa fa-trash delete"></i> </a> ';
        $data[] = $sub_array;
        $output = array(
           "recordsTotal"    =>  $this->fund->get_all_data(),
           "recordsFiltered"  => $this->fund->get_filtered_data(),
           "data"   => $data,
        );

       }

        echo json_encode($output);
   }

    ####################Edit##################################################
    #####################Fund Type Edit(View  Information)#######################
  public function fundtype_edit(){
    $output = array();
    $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "Not found" ;
    $result =$this->fund->editsettingsinfo($user);
    foreach ($result as $row)
    {
      $output['fund_type'] = $row->fund_type;
      $output['description'] = $row->description;
      $output['id'] = $row->id;
    }
    echo json_encode($output);
 }


  #######################Fund Type Update################################################
  ########################################################################################
   public function fundtype_update(){
      $user_info = isset($_POST["save"] ) ? $_POST["save"] == 'Edit' : "Not found" ;
      if ($user_info)
      {
      $updated_data =array(
          'fund_type' => $this->input->post('fund_type'),
          'description' => $this->input->post('description'),
      );
       $user = $this->input->post("user_id");
       $result = $this->fund->updatesettingsinfo($user, $updated_data);
       echo  'Row ID - '.'  '. $user.' ' .'Updated';
    }
    else
    {
      echo "save not found";
    }
  }

 ########################Fund Type Delete##################################
    public function fundtype_delete(){
      $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "visitordelete" ;
      $result =$this->fund->delete_settingsinfo($user);
      echo 'Data Deleted';
    }


##############################################################################################
    ################################# Service Name ############################################
      public function service_name()
     {
        $data['user_info'] =$this->ion_auth->user()->row();
        $data['logo'] =  $this->ion_auth->get_logo();
        ################Process the Form##########################################
        $id= null;
        $this->service->get_new();
        $rules = $this->service->rules;
        $this->form_validation->set_rules($rules);
        if($this->form_validation->run() == TRUE){
          $data = $this->service->array_from_post(array('service_name','description'));
          $this->service->save($data, $id);
          redirect('Settings/service_name');
        }
        $data['subview'] = 'settings/service_name';
        $this->load->view('settings/service_name', $data);
    }

   #########################Fetch Service Name settings###########################################
   public function fetch_servicename(){
      $fetch_data = $this->service->make_datatables();
      $data = array();
      foreach($fetch_data as $row)
      {
        $sub_array = array();
        $sub_array[] = $row->id;
        $sub_array[] = $row->service_name;
        $sub_array[] = $row->description;
        $sub_array[] = $row->created_at;
        $sub_array[] = '<a type="button"  name="update" id="' . $row->id .'"
        class="fa fa-edit update"></i> </a>';
        $sub_array[] = '<a type="button"  name="delete" id="' . $row->id .'"
        class="fa fa-trash delete"></i> </a> ';
        $data[] = $sub_array;
        $output = array(
           "recordsTotal"    =>  $this->service->get_all_data(),
           "recordsFiltered"  => $this->service->get_filtered_data(),
           "data"   => $data,
        );

       }

        echo json_encode($output);
   }

        ####################Edit##################################################
    #####################Service Name Edit(View  Information)#######################
  public function servicename_edit(){
    $output = array();
    $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "Not found" ;
    $result =$this->service->editsettingsinfo($user);
    foreach ($result as $row)
    {
      $output['service_name'] = $row->service_name;
      $output['description'] = $row->description;
      $output['id'] = $row->id;
    }
    echo json_encode($output);
 }


  #######################Service Name Update################################################
  ########################################################################################
   public function servicename_update(){
      $user_info = isset($_POST["save"] ) ? $_POST["save"] == 'Edit' : "Not found" ;
      if ($user_info)
      {
      $updated_data =array(
          'service_name' => $this->input->post('service_name'),
          'description' => $this->input->post('description'),
      );
       $user = $this->input->post("user_id");
       $result = $this->service->updatesettingsinfo($user, $updated_data);
       echo  'Row ID - '.'  '. $user.' ' .'Updated';
    }
    else
    {
      echo "save not found";
    }
  }

 ########################Service Name Delete##################################
    public function servicename_delete(){
      $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "visitordelete" ;
      $result =$this->service->delete_settingsinfo($user);
      echo 'Data Deleted';
    }

#############################################################################################
    ###############################Church Level Settings#####################################
    public function church_level()
   {
      $data['user_info'] =$this->ion_auth->user()->row();
      $data['logo'] =  $this->ion_auth->get_logo();
      ################Process the Form##########################################
      //Process the form
      $id= null;
      $this->level->get_new();
      $rules = $this->level->rules;
      $this->form_validation->set_rules($rules);
      if($this->form_validation->run() == TRUE){
        $data = $this->level->array_from_post(array('level','description'));
        $this->level->save($data, $id);
        redirect('Settings/church_level');
      }
      $data['subview'] = 'settings/church_level';
      $this->load->view('settings/church_level', $data);
  }



 ###########################Fetch Church Level Settings###########################################
   public function fetch_churchlevel(){
      $fetch_data = $this->level->make_datatables();
      $data = array();
      foreach($fetch_data as $row)
      {
        $sub_array = array();
        $sub_array[] = $row->id;
        $sub_array[] = $row->level;
        $sub_array[] = $row->description;
        $sub_array[] = $row->created_at;
        $sub_array[] = '<a type="button"  name="update" id="' . $row->id .'"
        class="fa fa-edit update"></i> </a>';
        $sub_array[] = '<a type="button"  name="delete" id="' . $row->id .'"
        class="fa fa-trash delete"></i> </a> ';
        $data[] = $sub_array;
        $output = array(
           "recordsTotal"    =>  $this->level->get_all_data(),
           "recordsFiltered"  => $this->level->get_filtered_data(),
           "data"   => $data,
        );

       }

        echo json_encode($output);
   }

    ####################Edit##################################################
    #####################Church Level  Edit(View  Information)#######################
  public function churchlevel_edit(){
    $output = array();
    $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "Not found" ;
    $result =$this->level->editsettingsinfo($user);
    foreach ($result as $row)
    {
      $output['level'] = $row->level;
      $output['description'] = $row->description;
      $output['id'] = $row->id;
    }
    echo json_encode($output);
 }


  #######################Church Level  Update################################################
  ########################################################################################
   public function churchlevel_update(){
      $user_info = isset($_POST["save"] ) ? $_POST["save"] == 'Edit' : "Not found" ;
      if ($user_info)
      {
      $updated_data =array(
          'level' => $this->input->post('level'),
          'description' => $this->input->post('description'),
      );
       $user = $this->input->post("user_id");
       $result = $this->level->updatesettingsinfo($user, $updated_data);
       echo  'Row ID - '.'  '. $user.' ' .'Updated';
    }
    else
    {
      echo "save not found";
    }
  }

 ########################Church Level  Delete##################################
    public function churchlevel_delete(){
      $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "visitordelete" ;
      $result =$this->level->delete_settingsinfo($user);
      echo 'Data Deleted';
    }





}


?>