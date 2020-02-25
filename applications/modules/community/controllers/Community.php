<?php
defined('BASEPATH') OR exit('No direct script access allowed');

Class Community extends MY_Controller{

  public function  __construct(){
    parent::__construct();
      $this->load->model("Ion_auth_model");
   }

  public function communityindex($id=Null){
    $data['user_info'] =$this->ion_auth->user()->row();
    $data['subview'] = 'communityview/index';
    $this->load->view('communityview/index', $data);
 }

}
 ?>