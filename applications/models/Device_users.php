<?php

class Device_users extends My_Model{
	protected $_table_name ='device_users';
	protected $_order_by = 'id';
	public $rules = array(

     'firstname' => array(
			'field'=>'firstname',
			 'label'=>'First Name',
			 'rules'=> 'trim|required|xss_clean'
			),


     'lastname' => array(
			'field'=>'lastname',
			 'label'=>'Last Name',
			 'rules'=> 'trim|required|xss_clean'
			),

     'birthdate' => array(
			'field'=>'birthdate',
			 'label'=>'Date of Birth',
			 'rules'=> 'trim|xss_clean'
			),
     'gender' => array(
			'field'=>'gender',
			 'label'=>'Gender',
			 'rules'=> 'trim|xss_clean'
			),
     'location' => array(
			'field'=>'location',
			 'label'=>'Location',
			 'rules'=> 'trim|xss_clean'
			),
      'region' => array(
      'field'=>'region',
       'label'=>'Region',
       'rules'=> 'trim|xss_clean'
      ),
      'username' => array(
      'field'=>'username',
       'label'=>'Username',
       'rules'=> 'trim|xss_clean'
      ),
      'accountType' => array(
      'field'=>'accountType',
       'label'=>'Account Type',
       'rules'=> 'trim|xss_clean'
      ),

  );

  public function get_new(){
   $deviceusers= new stdClass();
   $deviceusers->firstname = '';
   $deviceusers->lastname = '';
   $deviceusers->birthdate = '';
   $deviceusers->gender = '';
   $deviceusers->location = '';
   $deviceusers->region = '';
   $deviceusers->username = '';
   $deviceusers->accountType = '';
   return $deviceusers;
   }


public function editdeviceusersinfo($user_id){
    $id= $this->db->select('devices.*');
	$this->db->where('id',$user_id);
	$query = $this->db->get('device_users');
	return $query->result();

}


public function updatedeviceusersinfo($user_id , $data){
	$this->db->where("id", $user_id);
	$this->db->update("device_users", $data);

}

public function delete_personalinfo($user_id){
	// $id = $this->input->get('id');
	$this->db->where('id', $user_id);
	$this->db->delete("device_users");
}


//.....................Search......................................................
  var $select_column = array("id", "firstname","lastname ", "birthdate","gender","grade","location","region","username","accountType");
  var $order_column  = array("firstname", "lastname",null,null);


  function make_query(){
  	$this->db->select($this->select_column);
  	$this->db->from("device_users");
  	if(isset($_POST["search"]["value"]))
  	{
  		$this->db->like("firstname", $_POST["search"]["value"]);
  		$this->db->or_like("lastname", $_POST["search"]["value"]);
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
        // dump_exit($user_id);
      $this->make_query();
        if($session['user_id'] == 1)
        {
            $query = $this->db->get();
            return $query->result(); 
        }else{
          // $query = $this->db->where('content_id', $session['user_id'])->get();
      	  // $query = $this->db->where('user_id',$session['user_id'])->get();
           $query = $this->db->get();
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
      $this->db->from("device_users");
     return  $this->db->count_all_results();
     }





}








?>