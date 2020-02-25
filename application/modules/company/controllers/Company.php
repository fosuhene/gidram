<?php
defined('BASEPATH') OR exit('No direct script access allowed');

Class Company extends MY_Controller{

public function  __construct(){

  parent::__construct();
      // $this->load->model('Company_m', 'company');
      $this->load->model('Ion_auth_model');
      $this->load->model('Company_m','company');
      $this->load->model('loginimageupload', 'imageupload');
      $this->load->library(['ion_auth', 'form_validation']);

 }


 public function index(){
    if ($this->ion_auth->logged_in()){
    $data['user_info'] =$this->ion_auth->user()->row();
    $data['subview'] = 'company/index';
    $this->load->view('company/index', $data);
   }
 }

  public function company_detail(){
    if ($this->ion_auth->logged_in()){
    $data['user_info'] =$this->ion_auth->user()->row();
    $data['subview'] = 'company/company_detail';
    $this->load->view('company/company_detail', $data);
   }
 }

 ///.................Fetch data from the database....................................///////////

      public function fetch_company()
      {
        $cdata = $this->company->make_datatables();
        $this->data = array();
        foreach($cdata as $row)
        {
          $sub_array = array();
          $sub_array[] = $row->id;
          $sub_array[] = $row->name;
          $sub_array[] = $row->shortname;
          $sub_array[] = $row->tin;
          $sub_array[] = $row->tax_company_identifier;
          $sub_array[] = $row->ghpost_code;
          $sub_array[] = $row->code;
          $sub_array[] = $row->email;
          $sub_array[] = $row->phone;
          $sub_array[] = $row->address;
          $sub_array[] = $row->latitude;
          $sub_array[] = $row->longitude;
          $sub_array[] = $row->opening_date;
          $sub_array[] = $row->closed_date;
          $sub_array[] = $row->added_date;
          $sub_array[] = ' <a name="update" id="' . $row->id .'" class="update"><i class="fa fa-edit edit"></i></a>';
          $sub_array[] = ' <a name="delete" id="' . $row->id .'" class="delete" ><i class="fa fa-trash delete"></i></a>';
          $this->data[] = $sub_array;
         }
         $output = array(
           "recordsTotal"    =>  $this->company->get_all_data(),
           "recordsFiltered"  => $this->company->get_filtered_data(),
           "data"   => $this->data,
        );
        echo json_encode($output);
    }



}




?>