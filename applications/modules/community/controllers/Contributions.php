<?php
defined('BASEPATH') OR exit('No direct script access allowed');

Class Contributions extends MY_Controller{

  public function  __construct(){
    parent::__construct();
      $this->load->model("Ion_auth_model");
      $this->load->model("Personal_m","personal");
      $this->load->model("Pledge_m","pledge");
      $this->load->model("Offering_m","offering");
      $this->load->model("Tithe_m","tithe");
   }


  public function pledges($id=NULL)
   {
        $data['user_info'] =$this->ion_auth->user()->row();
        $data['logo'] =  $this->ion_auth->get_logo();
        $currency = $this->pledge->get_currency();
        $output = '';
        if(is_array($currency) || is_object($currency))
        {
        foreach ($currency as $row  )        {
        $output .= '<option value= '. $row['name'].'>' . $row['name']. '</option>' ;
        }
        $data['currency'] = ($output);
        }
        $data['subview'] = 'contributions/pledges';
        $this->load->view('contributions/pledges', $data);
  }

   ########################################################################################
   //..........................Church Pledge.............................


  public function pledge_insert($id = NULL){
    $data['session'] =  $this->ion_auth->session->userdata();
    $data['user_info'] =$this->ion_auth->user()->row();
    $data['logo'] =  $this->ion_auth->get_logo();
    ##################Get Currency#########################
    $currency = $this->pledge->get_currency();
    $output = '';
    if(is_array($currency) || is_object($currency))
    {
    foreach ($currency as $row  )        {
    $output .= '<option value= '. $row['name'].'>' . $row['name']. '</option>' ;
    }
    $data['currency'] = ($output);
    }
    ###########################################
   //Process the form
    $id= null;
    $this->pledge->get_new();
    $rules = $this->pledge->rules;
    $this->form_validation->set_rules($rules);
    //Process the form
    if($this->form_validation->run() == TRUE){
      $data = $this->pledge->array_from_post(array('name','address', 'tel', 'description','amt_paid','currency','pledge_amt','pledge_date','payment_date','balance'));
      $this->pledge->save($data, $id);

        redirect('Contributions/pledges');
    }
    $data['subview'] = 'pledges';
    $info =  $this->load->view('contributions/pledges', $data);
   }


  ###########################Fetch Pledge###########################################
   public function fetch_pledge(){
      $fetch_data = $this->pledge->make_datatables();
      $data = array();
      foreach($fetch_data as $row)
      {
        $sub_array = array();
        $sub_array[] = $row->id;
        $sub_array[] = $row->name;
        $sub_array[] = $row->address;
        $sub_array[] = $row->tel;
        $sub_array[] = $row->description;
        $sub_array[] = $row->pledge_amt;
        $sub_array[] = $row->amt_paid;
        $sub_array[] = $row->pledge_date;
        $sub_array[] = $row->payment_date;
        $sub_array[] = $row->balance;
        $sub_array[] = $row->currency;
        $sub_array[] = $row->created_at;
        $sub_array[] = '<a type="button"  name="update" id="' . $row->id .'"
        class="fa fa-edit update"></i> </a>';
        $sub_array[] = '<a type="button"  name="delete" id="' . $row->id .'"
        class="fa fa-trash delete"></i> </a> ';
        $data[] = $sub_array;
        $output = array(
          // "draw" => intval($_POST["draw"]),
           "recordsTotal"    =>  $this->pledge->get_all_data(),
           "recordsFiltered"  => $this->pledge->get_filtered_data(),
           "data"   => $data,
        );

       }

        echo json_encode($output);
   }



   ####################Edit##################################################
      #####################Pledge Edit(View Pledg Information)#######################
  public function pledge_edit(){
    $output = array();
    $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "Not found" ;
    $result =$this->pledge->editpledgeinfo($user);
    foreach ($result as $row)
    {
      $output['name'] = $row->name;
      $output['address'] = $row->address;
      $output['tel'] = $row->tel;
      $output['description'] = $row->description;
      $output['pledge_amt'] = $row->pledge_amt;
      $output['amt_paid'] = $row->amt_paid;
      $output['pledge_date'] = $row->pledge_date;
      $output['payment_date'] = $row->payment_date;
      $output['currency'] = $row->currency;
      $output['balance'] = $row->balance;
      $output['id'] = $row->id;
    }
    echo json_encode($output);
 }


 #######################Pledge Update################################################
  #############################################################################
   public function pledge_update(){
      $user_info = isset($_POST["save"] ) ? $_POST["save"] == 'Edit' : "Not found" ;
      if ($user_info)
      {
      $updated_data =array(
          'name' => $this->input->post('name'),
          'address' => $this->input->post('address'),
          'tel' => $this->input->post('tel'),
          'description' => $this->input->post('description'),
          'pledge_amt' => $this->input->post('pledge_amt'),
          'amt_paid' => $this->input->post('amt_paid'),
          'pledge_date' => $this->input->post('pledge_date'),
          'payment_date' => $this->input->post('payment_date'),
          'currency' => $this->input->post('currency'),
          'balance' => $this->input->post('balance')
      );
       $user = $this->input->post("user_id");
       $result = $this->pledge->updatepledgeinfo($user, $updated_data);
       echo  'Row ID - '.'  '. $user.' ' .'Updated';
    }
    else
    {
      echo "save not found";
    }
  }


 ########################Pledge Details Delete##################################
    public function pledge_delete(){
      $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "visitordelete" ;
      $result =$this->pledge->delete_pledgeinfo($user);
      echo 'Data Deleted';
    }

#####################################################################################################
#######################Offering Setup###############################################################
  public function offering($id=NULL)
   {
        $data['user_info'] =$this->ion_auth->user()->row();
        $data['logo'] =  $this->ion_auth->get_logo();
        ##################Get Offering#########################
        $offering = $this->offering->get_offeringtype();
        $output = '';
        if(is_array($offering) || is_object($offering))
        {
        foreach ($offering as $row  )        {
        $output .= '<option value= '. $row['offering_type'].'>' . $row['offering_type']. '</option>' ;
        }
        $data['offering'] = ($output);
        }
        ###########################################
         ##################Get Currency#########################
        $currency = $this->pledge->get_currency();
        $output = '';
        if(is_array($currency) || is_object($currency))
        {
        foreach ($currency as $row  )        {
        $output .= '<option value= '. $row['name'].'>' . $row['name']. '</option>' ;
        }
        $data['currency'] = ($output);
        }
        ##########################################
         //Process the form
        $id= null;
        $this->offering->get_new();
        $rules = $this->offering->rules;
        $this->form_validation->set_rules($rules);
        //Process the form
        if($this->form_validation->run() == TRUE){
          $data = $this->offering->array_from_post(array('offering_type','amount', 'attendance','currency', 'remarks'));
          $this->offering->save($data, $id);

            redirect('Contributions/offering');
        }
        ###########################################
        $data['subview'] = 'contributions/offering';
        $this->load->view('contributions/offering', $data);
  }



  ###########################Fetch Pledge###########################################
   public function fetch_offering(){
      $fetch_data = $this->offering->make_datatables();
      $data = array();
      foreach($fetch_data as $row)
      {
        $sub_array = array();
        $sub_array[] = $row->id;
        $sub_array[] = $row->offering_type;
        $sub_array[] = $row->amount;
        $sub_array[] = $row->currency;
        $sub_array[] = $row->attendance;
        $sub_array[] = $row->remarks;
        $sub_array[] = $row->created_at;
        $sub_array[] = '<a type="button"  name="update" id="' . $row->id .'"
        class="fa fa-edit update"></i> </a>';
        $sub_array[] = '<a type="button"  name="delete" id="' . $row->id .'"
        class="fa fa-trash delete"></i> </a> ';
        $data[] = $sub_array;
        $output = array(
           "recordsTotal"    =>  $this->offering->get_all_data(),
           "recordsFiltered"  => $this->offering->get_filtered_data(),
           "data"   => $data,
        );
       }

        echo json_encode($output);
   }

 ####################Edit##################################################
 #####################Offering Edit(ViewInformation)#######################
  public function offering_edit(){
    ##################Get Offering#########################
    $offering = $this->offering->get_offeringtype();
    $output = '';
    if(is_array($offering) || is_object($offering))
    {
    foreach ($offering as $row  )        {
    $output .= '<option value= '. $row['offering_type'].'>' . $row['offering_type']. '</option>' ;
    }
    $data['offering'] = ($output);
    }
    ###########################################
     ##################Get Currency#########################
    $currency = $this->pledge->get_currency();
    $output = '';
    if(is_array($currency) || is_object($currency))
    {
    foreach ($currency as $row  )        {
    $output .= '<option value= '. $row['name'].'>' . $row['name']. '</option>' ;
    }
    $data['currency'] = ($output);
    }
    ##########################################
    $output = array();
    $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "Not found" ;
    $result =$this->offering->editofferinginfo($user);
    foreach ($result as $row)
    {
      $output['offering_type'] = $row->offering_type;
      $output['amount'] = $row->amount;
      $output['currency'] = $row->currency;
      $output['attendance'] = $row->attendance;
      $output['remarks'] = $row->remarks;
      $output['id'] = $row->id;
    }
    echo json_encode($output);
 }

 #######################Update################################################
  #############################################################################
   public function offering_update(){
      $user_info = isset($_POST["save"] ) ? $_POST["save"] == 'Edit' : "Not found" ;
      if ($user_info)
      {
      $updated_data =array(
          'offering_type' => $this->input->post('offering_type'),
          'amount' => $this->input->post('amount'),
          'currency' => $this->input->post('currency'),
          'attendance' => $this->input->post('attendance'),
          'remarks' => $this->input->post('remarks'),
          'created_at' => $this->input->post('created_at'),
      );
       $user = $this->input->post("user_id");
       $result = $this->offering->updateofferingdetails($user, $updated_data);
       echo  'Row ID - '.'  '. $user.' ' .'Updated';
    }
    else
    {
      echo "save not found";
    }
  }


 ########################Pledge Details Delete##################################
    public function offering_delete(){
      $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "visitordelete" ;
      $result =$this->offering->delete_offeringinfo($user);
      echo 'Data Deleted';
    }
#######################################################################################
#######################################################################################
#######################Tithe Details #################################################

    public function tithe($id=NULL)
     {
          $data['user_info'] =$this->ion_auth->user()->row();
          $data['logo'] =  $this->ion_auth->get_logo();
           //Process the form
          $id= null;
          $this->tithe->get_new();
          $rules = $this->tithe->rules;
          $this->form_validation->set_rules($rules);
          //Process the form
          if($this->form_validation->run() == TRUE){
            $data = $this->tithe->array_from_post(array('name','register_no', 'year','amount'));
            $this->tithe->save($data, $id);
            redirect('Contributions/tithe');
          }
          ###########################################
          $data['subview'] = 'contributions/tithe';
          $this->load->view('contributions/tithe', $data);
    }

  ###########################Fetch Tithe###########################################
   public function fetch_tithe(){
      $fetch_data = $this->tithe->make_datatables();
      $data = array();
      foreach($fetch_data as $row)
      {
        $sub_array = array();
        $sub_array[] = $row->id;
        $sub_array[] = $row->name;
        $sub_array[] = $row->register_no;
        $sub_array[] = $row->year;
        $sub_array[] = $row->amount;
        $sub_array[] = $row->created_at;
        $sub_array[] = '<a type="button"  name="update" id="' . $row->id .'"
        class="fa fa-edit update"></i> </a>';
        $sub_array[] = '<a type="button"  name="delete" id="' . $row->id .'"
        class="fa fa-trash delete"></i> </a> ';
        $data[] = $sub_array;
        $output = array(
           "recordsTotal"    =>  $this->tithe->get_all_data(),
           "recordsFiltered"  => $this->tithe->get_filtered_data(),
           "data"   => $data,
        );
       }
        echo json_encode($output);
   }

    ####################Edit##################################################
 #####################Tithe Edit(ViewInformation)#######################
    public function tithe_edit(){
      $output = array();
      $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "Not found" ;
      $result =$this->tithe->edittitheinfo($user);
      foreach ($result as $row)
      {
        $output['name'] = $row->name;
        $output['register_no'] = $row->register_no;
        $output['year'] = $row->year;
        $output['amount'] = $row->amount;
        $output['id'] = $row->id;
      }
      echo json_encode($output);
   }

   ####################### Tithe Update################################################
  #############################################################################
   public function tithe_update(){
      $user_info = isset($_POST["save"] ) ? $_POST["save"] == 'Edit' : "Not found" ;
      if ($user_info)
      {
      $updated_data =array(
          'name' => $this->input->post('name'),
          'register_no' => $this->input->post('register_no'),
          'year' => $this->input->post('year'),
          'amount' => $this->input->post('amount'),
          'created_at' => $this->input->post('created_at'),
      );
       $user = $this->input->post("user_id");
       $result = $this->tithe->updatetithedetails($user, $updated_data);
       echo  'Row ID - '.'  '. $user.' ' .'Updated';
    }
    else
    {
      echo "save not found";
    }
  }

   ########################Tithe Details Delete##################################
    public function tithe_delete(){
      $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "visitordelete" ;
      $result =$this->tithe->delete_titheinfo($user);
      echo 'Data Deleted';
    }

  }

 ?>