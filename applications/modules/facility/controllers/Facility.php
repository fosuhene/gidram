<?php
defined('BASEPATH') OR exit('No direct script access allowed');

Class Facility extends MY_Controller{

  public function  __construct(){
    parent::__construct();
      $this->load->model("Ion_auth_model");
   }

 public function facilityindex($id=Null){
    $data['user_info'] =$this->ion_auth->user()->row();
    $data['subview'] = 'facilityview/index';
    $this->load->view('facilityview/index', $data);
 }





  }

 ?>