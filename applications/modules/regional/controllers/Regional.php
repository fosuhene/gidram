<?php
defined('BASEPATH') OR exit('No direct script access allowed');

Class Regional extends MY_Controller{

public function  __construct(){

  parent::__construct();
      $this->load->model('National_m', 'national');
      $this->load->model('Regional_m', 'regional');
      $this->load->model('Ion_auth_model');
      $this->load->library(['ion_auth', 'form_validation']);

 }


  public function regionalindex($id=Null){
    $data['user_info'] =$this->ion_auth->user()->row();
    $data['subview'] = 'regionalview/regional';
    $this->load->view('regionalview/regional', $data);
 }


public function index(){
    $data['user_info'] =$this->ion_auth->user()->row();
    $this->ion_auth->set_hook('user', 'join_person_users', $this, 'prepare_user_list', array());
    $data['usersmain'] = $this->ion_auth->user()->row();
    ##############//Process the form######################################################
    $id= null;
    $this->regional->get_new();
    $rules = $this->regional->rules;
    $this->form_validation->set_rules($rules);
    //Process the form
    if($this->form_validation->run() == TRUE){
      $data = $this->regional->array_from_post(array('name','hierachyNationalID','shortname', 'code', 'description','opening_date','closed_date','comment','url','contact_person','haddress','email','phone','latitude','longitude','added_date','tin','ghpost_code'));
      $this->regional->save($data, $id);

        redirect('Dashboard/national','refresh');
    }
    $data['subview'] = 'dashboard/index';
    $this->load->view('dashboard/index', $data);
 }


  public function new_profile($id=Null){
    $data['user_info'] =$this->ion_auth->user()->row();
    $data['subview'] = 'dashboard/new_profile';
    $this->load->view('dashboard/new_profile', $data);
 }






}




?>