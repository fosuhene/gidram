<?php
defined('BASEPATH') OR exit('No direct script access allowed');

Class Businesses extends MY_Controller{

  public function  __construct(){
    parent::__construct();
      $this->load->model("Ion_auth_model");
      $this->load->model("Business_m","business");
   }

  public function businessindex($id=Null){
    $data['user_info'] =$this->ion_auth->user()->row();
    $this->load->view('businessview/index', $data);
 }

  public function index($id){
    if ($this->ion_auth->logged_in()){
    $data['user_info'] =$this->ion_auth->user()->row();
     $data['business'] =  $this->business->viewdetails($id);
     $data['barchart'] =  $this->business->get_transactions($id);
     // dump_exit($data['barchart']);
    $data['subview'] = 'businessview/registered_business';
    $this->load->view('businessview/registered_business', $data);
   }
 }




    ///.................Fetch data from the database....................................///////////

      public function fetch_business()
      {
        $data['user_info'] =$this->ion_auth->user()->row();
        $cdata = $this->business->make_datatables();
        $this->data = array();
        foreach($cdata as $row)
        {
          $sub_array = array();
          // $sub_array[] = null;
          $sub_array[] = $row->FacilityID;
          $sub_array[] = $row->FacilityTIN;
          $sub_array[] = $row->FacilityName;
          $sub_array[] = $row->TLID;
          $sub_array[] = $row->TL_Entry;
          $sub_array[] = $row->TLQuantity;
          $sub_array[] = $row->TLUPrice;
          $sub_array[] = $row->TLFacilityID;
          $sub_array[] = $row->TL_Total;
          $sub_array[] = '<span name="view" id="' .$row->FacilityID .'"
          class="view"><a href=' . base_url().'Businesses/index/'. $row->FacilityID .'
          ><i class="fa fa-eye" style="color:gray"></i></a></span>   <a name="update" id="' . $row->FacilityID .'" class="update"><i class="fa fa-edit edit"></i></a>  <a name="delete" id="' . $row->FacilityID .'" class="delete" ><i class="fa fa-trash delete"></i></a>'  ;
          // $sub_array[] = ' <a name="update" id="' . $row->FacilityID .'" class="update"><i class="fa fa-edit edit"></i></a>';
          // $sub_array[] = ' <a name="delete" id="' . $row->FacilityID .'" class="delete" ><i class="fa fa-trash delete"></i></a>';
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