<?php
defined('BASEPATH') OR exit('No direct script access allowed');

Class Tax extends MY_Controller{

public function  __construct(){

  parent::__construct();
      $this->load->model('Tax_m', 'tax');
      $this->load->model('Ion_auth_model');
      $this->load->library(['ion_auth', 'form_validation']);

 }


 public function index(){
    if ($this->ion_auth->logged_in()){
    $data['user_info'] =$this->ion_auth->user()->row();
    $data['subview'] = 'tax/index';
    $this->load->view('tax/index', $data);
   }
 }


 public function detail(){
    if ($this->ion_auth->logged_in()){
    $data['user_info'] =$this->ion_auth->user()->row();
    $data['subview'] = 'tax/taxdetail';
    $this->load->view('tax/taxdetail', $data);
   }
 }

 ///.................Fetch data from the database....................................///////////

      public function fetch_tax()
      {
        $cdata = $this->tax->make_datatables();
        $this->data = array();
        foreach($cdata as $row)
        {
          $sub_array = array();
          $sub_array[] = $row->tax_id;
          $sub_array[] = $row->tax_name;
          $sub_array[] = $row->tax_startdate;
          $sub_array[] = $row->tax_enddate;
          $sub_array[] = $row->text_desc;
          $sub_array[] = $row->tax_factor;
          $sub_array[] = $row->tax_grade;
          $sub_array[] = ' <a name="update" id="' . $row->tax_id .'" class="update"><i class="fa fa-edit edit"></i></a>';
          $sub_array[] = ' <a name="delete" id="' . $row->tax_id .'" class="delete" ><i class="fa fa-trash delete"></i></a>';
          $this->data[] = $sub_array;
         }
         $output = array(
           "recordsTotal"    =>  $this->tax->get_all_data(),
           "recordsFiltered"  => $this->tax->get_filtered_data(),
           "data"   => $this->data,
        );
        echo json_encode($output);
    }





}




?>