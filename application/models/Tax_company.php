<?php

class Tax_company extends My_Model{
	protected $_table_name ='tbl_view_tax_company';

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
       $taxcompany= new stdClass();
       $taxcompany->name = '';
       $taxcompany->user_id = '';
       $taxcompany->shortname = '';
       $taxcompany->code = '';
       $taxcompany->description = '';
       $taxcompany->opening_date = '';
       $taxcompany->closed_date = '';
       $taxcompany->haddress = '';
       $taxcompany->comment = '';
       $taxcompany->url = '';
       $taxcompany->email = '';
       $taxcompany->phone = '';
       $taxcompany->latitude = '';
       $taxcompany->longitude = '';
       $taxcompany->added_date = '';
       $taxcompany->tin = '';
       $taxcompany->ghpost_code = '';
       $taxcompany->key_code = '';

       return $taxcompany;

   }


public function edittaxcompanyinfo($user_id){
    $id= $this->db->select('content_users.*');
	$this->db->where('id',$user_id);
	$query = $this->db->get('content_users');
	return $query->result();

}



public function select_taxcompany($id){
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

public function updatetaxcompanyinfo($user_id , $data){
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

public function delete_personalinfo($user_id){
	// $id = $this->input->get('id');
	$this->db->where('id', $user_id);
	$this->db->delete("content_users");
}


//.....................Search......................................................
var $select_column = array("id", "locationname","name","latitude","longitude ", "ghpost_code","added_date");
  var $order_column  = array("locationname", "name",null,null);


  function make_query(){
  	$this->db->select($this->select_column);
  	$this->db->from($this->_table_name);
  	if(isset($_POST["search"]["value"]))
  	{
  		$this->db->like("locationname", $_POST["search"]["value"]);
  		$this->db->or_like("name", $_POST["search"]["value"]);

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

  public function make_datatables()
    {
        $this->make_query();
        $query = $this->db->get();
        return $query->result();
    }



     function get_filtered_data(){
      $this->make_query();
      $query = $this->db->get();
      return $query->num_rows();
     }


     function get_all_data(){
      $this->db->select("*");
      $this->db->from($this->_table_name);
     return  $this->db->count_all_results();
     }












}








?>