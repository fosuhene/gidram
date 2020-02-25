<?php

class Regional_m extends My_Model{
  protected $_table_name ='hierachy_regional';

  protected $_order_by = 'id';

  public $rules = array(


     'name' => array(
      'field'=>'name',
       'label'=>' Name',
       'rules'=> 'trim|required|xss_clean'
      ),


     'shortname' => array(
      'field'=>'shortname',
       'label'=>'Short Name',
       'rules'=> 'trim|required|xss_clean'
      ),

     'code' => array(
      'field'=>'code',
       'label'=>'Code',
       'rules'=> 'trim|xss_clean'
      ),
     'description' => array(
      'field'=>'description',
       'label'=>'Description',
       'rules'=> 'trim|xss_clean'
      ),
     'opening_date' => array(
      'field'=>'opening_date',
       'label'=>'Opening Date',
       'rules'=> 'trim|xss_clean'
      ),
      'closed_date' => array(
      'field'=>'closed_date',
       'label'=>'Closed Date',
       'rules'=> 'trim|xss_clean'
      ),
      'comment' => array(
      'field'=>'comment',
       'label'=>'Comment',
       'rules'=> 'trim|xss_clean|required'
      ),
      'url' => array(
      'field'=>'url',
       'label'=>'URL',
       'rules'=> 'trim|xss_clean|required'
      ),
       'contact_person' => array(
      'field'=>'contact_person',
       'label'=>'contact Person',
       'rules'=> 'trim|xss_clean'
      ),
     'email' => array(
      'field'=>'email',
       'label'=>'Email',
       'rules'=> 'trim|xss_clean'
      ),
       'user_id' => array(
      'field'=>'user_id',
       'label'=>'User ID',
       'rules'=> 'trim|xss_clean'
      ),
       'Phone' => array(
      'field'=>'Phone',
       'label'=>'Phone',
       'rules'=> 'trim|xss_clean'
      ),
         'latitude' => array(
      'field'=>'latitude',
       'label'=>'Latitude',
       'rules'=> 'trim|xss_clean'
      ),
           'logitude' => array(
      'field'=>'logitude',
       'label'=>'Longitude',
       'rules'=> 'trim|xss_clean'
      ),
             'added_date' => array(
      'field'=>'added_date',
       'label'=>'Added Date',
       'rules'=> 'trim|xss_clean'
      ),
         'tin' => array(
      'field'=>'tin',
       'label'=>'Tin',
       'rules'=> 'trim|xss_clean'
      ),
        'key_code' => array(
      'field'=>'key_code',
       'label'=>'Key Code',
       'rules'=> 'trim|xss_clean'
      ),

  );

      public function get_new(){
       $national= new stdClass();
       $national->name = '';
       $national->user_id = '';
       $national->shortname = '';
       $national->code = '';
       $national->description = '';
       $national->opening_date = '';
       $national->closed_date = '';
       $national->haddress = '';
       $national->comment = '';
       $national->url = '';
       $national->email = '';
       $national->phone = '';
       $national->latitude = '';
       $national->longitude = '';
       $national->added_date = '';
       $national->tin = '';
       $national->ghpost_code = '';
       $national->key_code = '';

       return $national;

   }


public function get_year(){

  $this->db->select('YEAR(CURDATE())  AS year');
  $this->db->from('location');
  $query=$this->db->get();
  return $query->row_array();
}



#########################Dashboard Charts#################################################
     function taxgrade_chart(){
        $query = $this->db->query("SELECT * from tax_table ");
        if($query->num_rows() > 0){
            foreach($query->result() as $data){
                $info[] = $data;
            }
            return $info;
        }
    }


     public  function location_chart(){
        $query = $this->db->query("SELECT * from tbl_view_totalvalues");

        if($query->num_rows() > 0){
            foreach($query->result() as $data){
                $chart[] = $data;
            }
            return $chart;
        }
    }
    public  function levels_chart(){
        $query = $this->db->query("SELECT * from tbl_view_levels");

        if($query->num_rows() > 0){
            foreach($query->result() as $data){
                $chart[] = $data;
            }
            return $chart;
        }
    }
      public  function get_transactions(){
        $query = $this->db->query("SELECT * from vwtransactionlines");

        if($query->num_rows() > 0){
            foreach($query->result() as $data){
                $chart[] = $data;
            }
            return $chart;
        }
    }
 ###################################################################################

public function editnationalinfo($user_id){
    $id= $this->db->select('content_users.*');
  $this->db->where('id',$user_id);
  $query = $this->db->get('content_users');
  return $query->result();

}


public function edituserimage($user_id){
    $id= $this->db->select('*');
  $this->db->where('id',$user_id);
  $query = $this->db->get('users');
  return $query->result();

}


public function select_national($id){
  $this->db->select('*');
  $this->db->from('content_users');
  $this->db->where('id',$id);
  $query=$this->db->get();
  return $query->result_array();
}




public function updatenationalinfo($user_id , $data){
  $this->db->where("id", $user_id);
  $this->db->update("content_users", $data);

}


public function updateuserimage($user_id , $data){
  $this->db->where("id", $user_id);
  $this->db->update("users", $data);

}

public function updateprofiledata($user_id , $data){
  $this->db->where("id", $user_id);
  $this->db->update("users", $data);

}

public function get_categories(){

  $this->db->select('account_name,id');
  $this->db->distinct();
  $this->db->from('tbl_view_menu_list');
  // $this->db->group_by('id');
  $query=$this->db->get();
  return $query->result_array();
}



public function get_clienttitle($id=Null){

  $this->db->select('*');
  $this->db->from('tbl_view_menu_list');
  $this->db->where('id',$id);
  $query=$this->db->get();
  return $query->row_array();
}


public function datactive(){

  $this->db->select('*');
  $this->db->from('content');
    $this->db->where('isActive', 1);
  $query=$this->db->get();
  return $query->result_array();
}

public function datainactive(){

  $this->db->select('*');
  $this->db->from('content');
    $this->db->where('isActive', 0);
  $query=$this->db->get();
  return $query->result_array();
}

public function gettree(){

  $this->db->select('*');
  $this->db->from('vwtree_facility');
  $query = $this->db->get();
  return $query->result_object();
}


public function membertree($parent_key){

  $this->db->select('*');
  $this->db->from('vwtree_facility');
  $this->db->where('regionalID', $parent_key);
  $query = $this->db->get();
  return $query->result_array();
}





###############Tree#########################
 public function get_treelevel(){

        $this->db->select('*');
        $this->db->from('vwtree_facility');
        $this->db->where('nationalID', 2);

        $parent = $this->db->get();

        $categories = $parent->result();
        $i=0;
        foreach($categories as $p_cat){

            $categories[$i]->sub = $this->sub_categories($p_cat->regionalID);
            $i++;
        }
        return $categories;
    }

    public function sub_categories($id){

        $this->db->select('*');
        $this->db->from('vwtree_facility');
        $this->db->where('nationalID', $id);

        $child = $this->db->get();
        $categories = $child->result();
        $i=0;
        foreach($categories as $p_cat){

            $categories[$i]->sub = $this->sub_categories($p_cat->regionalID);
            $i++;
        }
        return $categories;
    }



// public function get_submenu(){

//  $this->db->select('device_name');
//  $this->db->distinct();
//  $this->db->from('tbl_view_menu_list as  di');
//  $this->db->join('content_users as  cu',' cu.account_name = di.account_name  ');
//  //$this->db->where('cu.id','di.content_idS');
//  $query=$this->db->get();
//  return $query->result_array();
// }
public function get_content_users($content_users){
  $this->db->select('content_users');
  $this->db->from('content_users');
  $this->db->where('content_users','$content_users');
  $query=$this->db->get();
  return $query->result_array();
}


 function fetch_city($state_id)
 {
  $this->db->where('id', $state_id);
  $this->db->order_by('product_name', 'ASC');
  $query = $this->db->get('content_users');
  $output = '<option value="">Select national</option>';
  foreach($query->result() as $row)
  {
   $output .= '<option value="'.$row->ifd.'">'.$row->product_name.'</option>';
  }
  return $output;
 }






  public function update_password($id=NULL){
      $data = array(
       'email' => $this->input->post('email'),
       'username' => $this->input->post('username'),
          'password' => $this->input->post('password')
        );

        $this->db->where('id', $id);
      return $this->db->insert('users', $data);

        }



 public function update_personalinfo($user_id=NULL){

         $id = $this->input->post('id');
      $data = array(
          'surname' => $this->input->post('surname'),
          //'id' => $this->input->post('id')
        );

        $this->db->where('id',$user_id);
      return $this->db->update('content_users', $data);
}



public function delete_personalinfo($user_id){
  // $id = $this->input->get('id');
  $this->db->where('id', $user_id);
  $this->db->delete("content_users");
}


//.....................Search......................................................
var $select_column = array("id", "user_id","account_name","account_type","manager ", "address","city","country","password", "password1","entry_date","login_date");
  var $order_column  = array("account_name", "entry_date",null,null);


  function make_query(){
    $this->db->select($this->select_column);
    $this->db->from("content_users");
    if(isset($_POST["search"]["value"]))
    {
      $this->db->like("account_name", $_POST["search"]["value"]);
      $this->db->or_like("entry_date", $_POST["search"]["value"]);

    }

    if(isset($_POST["order"]))
    {
      $this->db->order_by($this->order_column[$_POST['order']['0']['column']],
       $_POST['order']['0']['dir']);


    }

    else{

      $this->db->order_by("id", "DESC");
    }



  }


function make_datatables(){
    $session = $this->ion_auth->session->userdata();
    $this->make_query();
      if($session['user_id'] == 1)
      {
          $query = $this->db->get();
          return $query->result();
      }else{
          $query = $this->db->where('user_id',$session['user_id'])->get();
          return $query->result();
      }
}



     function get_filtered_data(){
      $this->make_query();
      $query = $this->db->get();
      return $query->num_rows();
     }


     function get_all_data(){
      $this->db->select("*");
      $this->db->from("content_users");
     return  $this->db->count_all_results();
     }






 public function delete($id){
  //Delete a page
  parent::delete($id);
  //Reset parent id for it children
  $this->db->set(array('parent_id'=>0))-> where('parent_id', $id)->update($this->_table_name);
   }












}








?>