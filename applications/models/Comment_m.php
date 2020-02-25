<?php

class Comment_m extends My_Model{
	protected $_table_name ='comments';

	protected $_order_by = 'id';

	public $rules = array(


     'name' => array(
			'field'=>'name',
			 'label'=>'Name',
			 'rules'=> 'trim|required|xss_clean'
			),


     'date' => array(
			'field'=>'date',
			 'label'=>'Date',
			 'rules'=> 'trim|xss_clean'
			),


     'comment' => array(
			'field'=>'comment',
			 'label'=>'comment',
			 'rules'=> 'trim|required|xss_clean'
			)

 );

      public function get_new(){
       $comments= new stdClass();
       $comments->name = '';
       $comments->comment = '';

       return $comments;

   }


public function editpersonalinfo($user_id){


            $id= $this->db->select('comments.*');
  			$this->db->where('id',$user_id);
			$query = $this->db->get('comments');
		     //dump_exit($id);
			return $query->result();

}




public function select_comments($id){
	$this->db->select('*');
	$this->db->from('comments');
	$this->db->where('id',$id);
	$query=$this->db->get();
	return $query->result_array();
}


// public function select_comments($id=NULL){
//  $output = '';
//    if(isset($_POST["id"])){
//      if($_POST['id']  != '')
//      {
//       $sql = "SELECT * FROM comments WHERE "
//      }
//    }
// }




public function updatepersonalinfo($user_id , $data){
	// $this->db->select('comments.*');
	//$this->db->set("id", $user_id);
	$this->db->where("id", $user_id);
	$this->db->update("comments", $data);

}


public function post_comments(){
	    $data['price']        = $this->input->post('price');
        $data['date'] = $this->input->post('date');
        $data['quantity']   = $this->input->post('quantity');
        $data['sub_total']   = $this->input->post('sub_total');
        $data['discount']     = $this->input->post('discount');
        $data['gross']   = $this->input->post('gross');
        $data['received']     = $this->input->post('received');
        $query = $this->db->insert('comments', $data);

        return $query;
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
		  return $this->db->update('comments', $data);
}



public function delete_personalinfo($user_id){
	// $id = $this->input->get('id');
	$this->db->where('id', $user_id);
	$this->db->delete("comments");
}


//.....................Search......................................................
var $select_column = array("id","name","comment", "date",);
  var $order_column  = array(null,"name", "comment",null);


  function make_query(){
  	$this->db->select($this->select_column);
  	$this->db->from("comments");
  	if(isset($_POST["search"]["value"]))
  	{
  		$this->db->like("name", $_POST["search"]["value"]);
  		$this->db->or_like("comment", $_POST["search"]["value"]);

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
      $this->make_query();
      // if($_POST["length"] != -1)
      // {
      //   $this->db->limit($_POST["length"], $_POST["start"]);
      // }

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
      $this->db->from("comments");
     return  $this->db->count_all_results();
     }






public function hash($string){
    return hash('sha1', $string . config_item('encryption_key'));
  }

 public function logout(){
    $this->session->sess_destroy();
  }


  public function loggedin(){
     return (bool) $this->session->userdata('loggedin');
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



public function get_details ($rowno,$rowperpage) {

	$this->db->select('*');
    $this->db->from('tbl_view_personal_info');
    $this->db->limit($rowperpage, $rowno);
    $query = $this->db->get();

    return $query->result_array();
}



// Select total records
  public function getrecordCount() {

    $this->db->select('count(*) as allcount');
    $this->db->from('tbl_view_personal_info');
    $query = $this->db->get();
    $result = $query->result_array();

    return $result[0]['allcount'];
  }




public function details($id=NULL){


	$return= $this->db
			->select('*')
			->from('comments')
			->where('id
				', (int)$id)
			//->limit($rowperpage, $rowno)
			->get()
			->row_array();

			return $return ;

	// return parent::get($id,$single);


}





public function get_id($id = 0){
	$this->db->select('id');
	$this->db->from('comments');
	$this->db->where('id', $id);
	$this->db->limit(1);
	$query = $this->db->get();
	 //echo $query;
	return sizeof($query->result_array()) ? $query->row_array()['id'] : 0;


}




public function get_with_parents($id=NULL, $single=FALSE){
	// $this->db->select('comments .*');
    $info= ('CALL `proc_Getalldata`();');
   // dump_exit($info);
	return parent::get($id,$single);

}



public function is_password_strong($password)
{
   if(preg_match('#[0-9]#', $password) && preg_match('#[a-zA-Z]#', $password)) {
     return TRUE;
   }
   return FALSE;
}



}












?>