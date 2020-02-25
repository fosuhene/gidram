<?php
defined('BASEPATH') OR exit('No direct script access allowed');

Class Tree extends MY_Controller{

public function  __construct(){

  parent::__construct();
      $this->load->model('National_m', 'national');
      $this->load->model('Regional_m', 'regional');
      $this->load->model('Ion_auth_model');
      $this->load->model('loginimageupload', 'imageupload');
      $this->load->library(['ion_auth', 'form_validation']);

 }


 public function index(){
    // if ($this->ion_auth->logged_in()){
    $data['user_info'] =$this->ion_auth->user()->row();
    $data['subview'] = 'dashboard/index';
    $this->load->view('dashboard/index', $data);
   // }
 }




    public function membersTree($parent_key)
    {
      $row1 = [];
      $row = $this->db->query('SELECT nationalID, nationalName,regionalID,regionalName,districtID,districtName FROM vwtree_district WHERE nationalID="'.$parent_key.'"')->result_array();
      // print_r($row);
      foreach($row as $key => $value)
      {
        $id = $value['nationalID'];
        $row1[$key]['districtID'] = $value['districtID'];
        // $row1[$key]['districtName'] = $value['districtName'];
        $row1[$key]['regionalName'] = $value['regionalName'];
        $row1[$key]['nodes'] = array_values($this->membersTree($value['nationalID']));
      return $row1;
    }
  }




  public function getItem()
    {
          $data = [];
          $parent_key = 0;
          $row = $this->db->query('SELECT nationalID, nationalName,regionalID,regionalName,districtID,districtName from vwtree_district');
           if(is_array($row))
          {
              $data = $this->membersTree($parent_key);

          }else{
               $data=["nationalID"=>"0","nationalName"=>"No Members presnt in list","districtName"=>"No Members presnt in list","regionalName"=>"No Members is presnt in list","nodes"=>[]];
          }
          echo json_encode(array_values($data));
    }






// public function membersTree(  $parent_key=1)
//     {
//       // $parent_key = 1;
//       $row1 = [];
//       $row = $this->regional->membertree($parent_key);
//    // print_r($row);
//       foreach($row as $key => $value)
//       {
//         $id = $value['nationalID'];
//         $row1[$key]['districtID'] = $value['districtID'];
//         $row1[$key]['districtName'] = $value['districtName'];
//         $row1[$key]['regionalName'] = $value['regionalName'];
//         $row1[$key]['nodes'] = array_values($this->membersTree($value['nationalID']));

//       //$row1[$key]['nodes'] = array_values($this->membersTree($id));
//       }
//       return $row1;

//     }




//   public function getItem()
//     {
//           $data = [];
//           $parent_key = 0;

//           // $row = $this->db->query('SELECT nationalID, nationalName,regionalID,regionalName,districtID,districtName from vwtree_district');
//            // dump_exit($row);

//             $row = $this->regional->gettree();
//               // print_r($row);
//             // dump_exit($row);
//           if(is_array($row))
//           {

//             echo' God is great';
//               $data = $this->membersTree();
//               // dump_exit($data);

//           }else{
//               $data=["nationalID"=>"0","nationalName"=>"No Members presnt in list","districtName"=>"No Members presnt in list","regionalName"=>"No Members is presnt in list","nodes"=>[]];
//           }
//           echo json_encode(array_values($data));
//     }


    //   public function getItem()
    // {
    //       $data = [];
    //       $parent_key = '0';
    //       $row = $this->db->query('SELECT nationalID, nationalName,regionalID,regionalName,districtID,districtName from vwtree_district');
    //       if($row->num_rows() > 0)
    //       {
    //           $data = $this->membersTree($parent_key);

    //       }else{
    //           $data=["branch_id"=>"0","branchname"=>"No Members presnt in list","churchname"=>"No Members presnt in list","text"=>"No Members is presnt in list","nodes"=>[]];
    //       }
    //       echo json_encode(array_values($data));
    // }





}




?>