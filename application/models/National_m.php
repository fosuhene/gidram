<?php

class National_m extends My_Model{
	protected $_table_name ='hierachy_national';

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


public function get_regionalbusiness($id=NULL){

	$return= $this->db
			->select_sum('amount')
			 ->select('YEAR(created_at) as year')
			->from('fn_churchfunds')
			->get()
			->row_array();

			return $return ;

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

//getting total transaction from view buniness transactions
function getSumTrans()
{
    $query = $this->db->select_sum('TL_Total');
    $query = $this->db->get('vw_transactionlines_tax');
    $result = $query->result();

    return $result[0]->TL_Total;
}


//getting total transaction from view buniness transactions
function getCountTrans(){		
	$query = $this->db->count_all_results('vw_transactionlines_tax');
	return $query;
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




public function update_password($id=NULL){
		$data = array(
	   'email' => $this->input->post('email'),
	   'username' => $this->input->post('username'),
      'password' => $this->input->post('password')
	    );

      $this->db->where('id', $id);
	  return $this->db->insert('users', $data);

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



public function gdetails ($id = NULL) {

	if ($id != NULL) {
		return $this->db
			->select('*')
			->from('tbl_view_personal_information')
			->where('
				', (int)$id)
			//->limit($rowperpage, $rowno)
			->get()
			->row_array();
 	}
 	else {
 		$query = $this->db->get('tbl_view_personal_information');
 	    //$this->db->limit($rowperpage, $rowno);
  		return $query->result_array();
	}
}


public function national_info ($id = NULL) {

	$this->db->select('*');
	$this->db->from('content_users');
	$this->db->limit(6);
	$query = $this->db-> get();
	return $query->result_array();


}


public function get_details ($rowno,$rowperpage) {

	$this->db->select('*');
    $this->db->from('tbl_view_personal_info');
    $this->db->limit($rowperpage, $rowno);
    $query = $this->db->get();

    return $query->result_array();
}



// Select total records
  public function getclientCount() {

    $this->db->select('count(*) as allcount');
    $this->db->from('content_users');
    $query = $this->db->get();
    $result = $query->result_array();

    return $result[0]['allcount'];
  }


  // Select total records for content
  public function getcontentCount() {

    $this->db->select('count(*) as allcount');
    $this->db->from('content');
    $query = $this->db->get();
    $result = $query->result_array();
    return $result[0]['allcount'];
  }


  // Select total records for Active Records for content
  public function getcontentactiveCount() {

    $this->db->select('count(*) as allcount');
    $this->db->from('content');
    $this->db->where('isActive',1);
    $query = $this->db->get();
    $result = $query->result_array();
    return $result[0]['allcount'];
  }



  // Select total records for InActive Records for content
  public function getcontentinactiveCount() {

    $this->db->select('count(*) as allcount');
    $this->db->from('content');
    $this->db->where('isActive',0);
    $query = $this->db->get();
    $result = $query->result_array();
    return $result[0]['allcount'];
  }


  // Select admin pictures to be displayed on dashboard
  public function getadminphotos() {

    $this->db->select('*');
    $this->db->from('users');
    $this->db->where('company','admin');
    $query = $this->db->get();
    return $query->result_array();
  }


  public function getdevicesCount() {

    $this->db->select('count(*) as allcount');
    $this->db->from('devices');
    $query = $this->db->get();
    $result = $query->result_array();

    return $result[0]['allcount'];
  }
 public function getusersCount() {

    $this->db->select('count(*) as allcount');
    $this->db->from('users');
    $query = $this->db->get();
    $result = $query->result_array();

    return $result[0]['allcount'];
  }


public function viewdetails($id=NULL){

	$this->db->select('*');
	$this->db->from('content_users');
	$this->db->where('id',$id);
	$query=$this->db->get();
	return $query->row_array();
}


public function profiledetails($id=NULL){
	$this->db->select('*');
	$this->db->from('tbl_view_profile_list');
	$this->db->where('id',$id);
	$query=$this->db->get();
	return $query->row_array();
}

public function getid($id=NULL){
	$this->db->select('id');
	$this->db->from('users');
	$query=$this->db->get();
	return $query->row_array();
}


public function viewimage($id){
	$this->db->select('*');
	$this->db->from('users');
	$this->db->where('id',$id);
	$query=$this->db->get();
	return $query->row_array();
}



public function details($id=NULL){


	$return= $this->db
			->select('*')
			->from('content_users')
			->where('id
				', (int)$id)
			//->limit($rowperpage, $rowno)
			->get()
			->row_array();

			return $return ;

	// return parent::get($id,$single);


}



	public function insert_code($id=10, $single=TRUE){

	$this->db->select('remember_code');
	$this->db->from('users');
	return parent::get($id,$single);


	}




public function get_id($id = 0){
	$this->db->select('id');
	$this->db->from('content_users');
	$this->db->where('id', $id);
	$this->db->limit(1);
	$query = $this->db->get();
	 //echo $query;
	return sizeof($query->result_array()) ? $query->row_array()['id'] : 0;

}

public function inserted($data1=NULL, $data2=NULL){
	$this->db->set('id', $value); //value that used to update column
	$this->db->where('id', $id); //which row want to upgrade
	$this->db->update('loginfront');
}


public function get_with_parent($id=NULL, $single=TRUE){
	//  $this->db->select('*')
	// ->from('content_users')
	// ->where('id',$id)
	// ->get();
	// dump_exit($q);
	return parent::get($id);
}









}








?>