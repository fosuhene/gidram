<?php
defined('BASEPATH') OR exit('No direct script access allowed');

Class National extends MY_Controller{

public function  __construct(){

  parent::__construct();
      $this->load->model('National_m', 'national');
      $this->load->model('Tax_company', 'taxcompany');
      $this->load->model('Business_m', 'business');
      $this->load->model('Ion_auth_model');
      $this->load->library(['ion_auth', 'form_validation']);

 }


 public function index(){
    $data['user_info'] =$this->ion_auth->user()->row();
    $data['reports'] = $this->national->taxgrade_chart();
    $data['location'] = $this->national->location_chart();
    $data['venn'] = $this->national->location_chart();
    $data['orglevel'] = $this->national->levels_chart();
    $data['year'] = $this->national->get_year();
    $data['transaction'] = $this->national->get_transactions();
    // dump_exit($data['transaction']);
    $data['subview'] = 'nationalview/index';
    $this->load->view('nationalview/index', $data);
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
    $data['subview'] = 'nationalview/national';
    $this->load->view('nationalview/national', $data);
 }



  public function new_profile($id=Null){
    $data['user_info'] =$this->ion_auth->user()->row();
    $data['subview'] = 'dashboard/new_profile';
    $this->load->view('dashboard/new_profile', $data);
 }



///.................Fetch data from the database....................................///////////

      public function fetch_taxcompany()
      {
        $cdata = $this->taxcompany->make_datatables();
        $this->data = array();
        foreach($cdata as $row)
        {
          $sub_array = array();
          $sub_array[] = $row->id;
          $sub_array[] = $row->locationname;
          $sub_array[] = $row->name;
          $sub_array[] = $row->ghpost_code;
          $sub_array[] = $row->latitude;
          $sub_array[] = $row->longitude;
          $sub_array[] = $row->added_date;
           $sub_array[] = ' <a name="update" id="' . $row->id .'" class="update"><i class="fa fa-eye"></i></a>';
          $this->data[] = $sub_array;
         }
         $output = array(
           "recordsTotal"    =>  $this->taxcompany->get_all_data(),
           "recordsFiltered"  => $this->taxcompany->get_filtered_data(),
           "data"   => $this->data,
        );
        echo json_encode($output);
    }

///.................Fetch data from the database....................................///////////

      public function fetch_facility()
      {
        $cdata = $this->business->make_datatables();
        $this->data = array();
        foreach($cdata as $row)
        {
          $sub_array = array();
          $sub_array[] = $row->FacilityID;
          $sub_array[] = $row->FacilityTIN;
          $sub_array[] = $row->FacilityName;
          $sub_array[] = $row->TL_Total;
           $sub_array[] = ' <a name="update1" id="' . $row->FacilityID .'" class="update1"><i class="fa fa-eye"></i></a>';
          $this->data[] = $sub_array;
         }
         $output = array(
           "recordsTotal"    =>  $this->business->get_all_data(),
           "recordsFiltered"  => $this->business->get_filtered_data(),
           "data"   => $this->data,
        );
        echo json_encode($output);
    }


}




?>