<?php
defined('BASEPATH') OR exit('No direct script access allowed');

Class Location extends MY_Controller{

public function  __construct(){

  parent::__construct();
      $this->load->model('Location_m', 'location');
      $this->load->model('Ion_auth_model');
      $this->load->library(['ion_auth', 'form_validation']);

 }


 public function index(){
    if ($this->ion_auth->logged_in()){
    $data['user_info'] =$this->ion_auth->user()->row();
    $data['subview'] = 'location/index';
    $this->load->view('location/index', $data);
   }
 }

 ///.................Fetch data from the database....................................///////////

      public function fetch_location()
      {
        $cdata = $this->location->make_datatables();
        $this->data = array();
        foreach($cdata as $row)
           {
          $sub_array = array();
          $sub_array[] = null;
          $sub_array[] = $row->locationID;
          $sub_array[] = $row->locationname;
          $sub_array[] = $row->locationcode;
          $sub_array[] = $row->office_phone;
          $sub_array[] = $row->locationlatitude;
          $sub_array[] = $row->locationlongitude;
          $sub_array[] = $row->added_date;
          $sub_array[] = $row->name;
          // $sub_array[] = $row->shortname;
          // $sub_array[] = $row->tin;
          $sub_array[] = $row->tax_company_identifier;
          $sub_array[] = $row->address;
          $sub_array[] = $row->email;
          $sub_array[] = $row->phone;
          $sub_array[] = $row->latitude;
          $sub_array[] = $row->longitude;

          // $sub_array[] = ' <a name="update" id="' . $row->id .'" class="update"><i class="fa fa-edit edit"></i></a>';
          // $sub_array[] = ' <a name="delete" id="' . $row->id .'" class="delete" ><i class="fa fa-trash delete"></i></a>';
          $this->data[] = $sub_array;
         }
         $output = array(
           "recordsTotal"    =>  $this->location->get_all_data(),
           "recordsFiltered"  => $this->location->get_filtered_data(),
           "data"   => $this->data,
        );
        echo json_encode($output);
    }



}




?>