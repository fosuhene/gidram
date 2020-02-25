<?php
defined('BASEPATH') OR exit('No direct script access allowed');

Class District extends MY_Controller{

  public function  __construct(){
    parent::__construct();
      $this->load->model("Ion_auth_model");
      $this->load->model('Regional_m', 'district');
   }


  public function districtindex($id=Null){
    $data['user_info'] =$this->ion_auth->user()->row();
    $data['reports'] = $this->district->taxgrade_chart();
    $data['location'] = $this->district->location_chart();
    $data['venn'] = $this->district->location_chart();
    $data['orglevel'] = $this->district->levels_chart();
    $data['year'] = $this->district->get_year();
    $data['transaction'] = $this->district->get_transactions();
    // dump_exit($data['transaction']);
    $data['subview'] = 'districtview/index';
    $this->load->view('districtview/index', $data);
 }



}


?>