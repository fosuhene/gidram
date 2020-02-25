<?php

class Content_m extends My_Model{
	protected $_table_name ='content';
	protected $_order_by = 'id';
	public $rules = array(


     'title' => array(
			'field'=>'title',
			 'label'=>'Title',
			 'rules'=> 'trim|required|xss_clean'
			),


     'body' => array(
			'field'=>'body',
			 'label'=>'Body',
			 'rules'=> 'trim|required|xss_clean'
			),

     'cat1' => array(
			'field'=>'cat1',
			 'label'=>'Category 1',
			 'rules'=> 'trim|xss_clean'
			),
     'cat2' => array(
			'field'=>'cat2',
			 'label'=>'Category 2',
			 'rules'=> 'trim|xss_clean'
			),
     'cat3' => array(
			'field'=>'cat3',
			 'label'=>'category 3',
			 'rules'=> 'trim|xss_clean'
			),
      'image' => array(
			'field'=>'image',
			 'label'=>'Image',
			 'rules'=> 'trim|xss_clean'
			),
     'user_id' => array(
			'field'=>'user_id',
			 'label'=>'user id',
			 'rules'=> 'trim|xss_clean'
			)

  );

      public function get_new(){
       $content= new stdClass();
       $content->title = '';
       $content->body = '';
       $content->cat1 = '';
       $content->cat2 = '';
       $content->cat3 = '';

       return $content;

   }


public function editcontentinfo($user_id){
    $id= $this->db->select('content.*');
	$this->db->where('id',$user_id);
	$query = $this->db->get('content');
	return $query->result();

}



public function contentdetails($id=NULL){

	$this->db->select('*');
	$this->db->from('content');
	$this->db->where('id',$id);
	$query=$this->db->get();
	return $query->row_array();
}


public function select_content($id){
	$this->db->select('*');
	$this->db->from('content');
	$this->db->where('id',$id);
	$query=$this->db->get();
	return $query->result_array();
}


public function update_content($id,$data){
$this->db->where('id', $id);
$this->db->update('content', $data);
}


public function updatecontentinfo($user_id , $data){
	$this->db->where("id", $user_id);
	$this->db->update("content", $data);

}


public function get_categories(){
	$this->db->select('*');
	$this->db->from('content');
	$this->db->group_by('id');
	$query=$this->db->get();
	return $query->result_array();
}

public function get_content($content){
	$this->db->select('content');
	$this->db->from('content');
	// $this->db->where('content','$content');
	$query=$this->db->get();
	return $query->result_array();
}

 public function update_personalinfo($user_id=NULL){

 	       $id = $this->input->post('id');
			$data = array(
          'surname' => $this->input->post('surname'),
          //'id' => $this->input->post('id')
		    );

	      $this->db->where('id',$user_id);
		  return $this->db->update('content', $data);
}



public function delete_content($user_id){
	// $id = $this->input->get('id');
	$this->db->where('id', $user_id);
	$this->db->delete("content");
}



 public function getcontent_userid(){
      $this->db->select("id");
      $this->db->from("content_users");
      $query = $this->db->get();
      return $query->row_array();
     }



//.....................Search......................................................
  var $select_column = array("id", "title","body ", "categories","user_id","image","dateAdded");
  var $order_column  = array("title", "dateAdded",null,null);


  function make_query(){
  	$this->db->select($this->select_column);
  	$this->db->from("tbl_view_content_info");
  	if(isset($_POST["search"]["value"]))
  	{
  		$this->db->like("title", $_POST["search"]["value"]);
  		$this->db->or_like("dateAdded", $_POST["search"]["value"]);
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
      $this->db->from("tbl_view_content_info");
     return  $this->db->count_all_results();
     }






 public function delete($id){
 	//Delete a page
 	parent::delete($id);
 	//Reset parent id for it children
 	$this->db->set(array('parent_id'=>0))-> where('parent_id', $id)->update($this->_table_name);
 	 }


public function insert_code($id=10, $single=TRUE){

	$this->db->select('remember_code');
	$this->db->from('users');
	return parent::get($id,$single);
	}

public function get_id($id = 0){
	$this->db->select('id');
	$this->db->from('content');
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
	// ->from('content')
	// ->where('id',$id)
	// ->get();
	// dump_exit($q);
	return parent::get($id);
}









}








?>