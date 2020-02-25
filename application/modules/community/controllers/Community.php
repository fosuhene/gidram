<?php
defined('BASEPATH') OR exit('No direct script access allowed');

Class Community extends MY_Controller{

  public function  __construct(){
    parent::__construct();
      $this->load->model("Ion_auth_model");
      $this->load->model('Community_m', 'community');
   }

  public function communityindex($id=Null){
    $data['user_info'] =$this->ion_auth->user()->row();
    $data['reports'] = $this->community->taxgrade_chart();
    $data['location'] = $this->community->location_chart();
    $data['venn'] = $this->community->location_chart();
    $data['orglevel'] = $this->community->levels_chart();
    $data['year'] = $this->community->get_year();
    $data['transaction'] = $this->community->get_transactions();
    $data['subview'] = 'communityview/index';
    $this->load->view('communityview/index', $data);
 }

}
 ?>