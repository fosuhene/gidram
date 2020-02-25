<?php
defined('BASEPATH') OR exit('No direct script access allowed');

Class District extends MY_Controller{

  public function  __construct(){
    parent::__construct();
      $this->load->model("Ion_auth_model");
   }


  public function districtindex($id=Null){
    $data['user_info'] =$this->ion_auth->user()->row();
    $data['subview'] = 'districtview/index';
    $this->load->view('districtview/index', $data);
 }



}


?>