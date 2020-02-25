<?php

class Useractivity_m extends My_Model{
	protected $_table_name ='stats';
	protected $_order_by = 'id';


//.....................Search......................................................
  var $select_column = array("id", "activityDate","fullname ", "username","section","grade","activity");
  var $order_column  = array("activityDate", "fullname",null,null);


  function make_query(){
  	$this->db->select($this->select_column);
  	$this->db->from($this->_table_name);
  	if(isset($_POST["search"]["value"]))
  	{
  		$this->db->like("fullname", $_POST["search"]["value"]);
  		$this->db->or_like("activityDate", $_POST["search"]["value"]);
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
      $this->db->from($this->_table_name);
     return  $this->db->count_all_results();
     }





//.....................Search......................................................
  var $select_column1 = array("id", "breakdown","access_count ", "activityDate","section");
  var $order_column1  = array("activityDate", "access_count",null,null);


  function make_queryinfo(){
    $this->db->select($this->select_column1);
    $this->db->from("tbl_view_statsinfo");
    if(isset($_POST["search"]["value"]))
    {
      $this->db->like("accesscount", $_POST["search"]["value"]);
      $this->db->or_like("activityDate", $_POST["search"]["value"]);
    }

    if(isset($_POST["order"]))
    {
      $this->db->order_by($this->order_column1[$_POST['order']['0']['column']],
       $_POST['order']['0']['dir']);

    }
    else{
      $this->db->order_by("id", "DESC");
    }
  }


  function make_datatablesinfo(){
      $session = $this->ion_auth->session->userdata();
        // dump_exit($user_id);
      $this->make_queryinfo();
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


     function get_filtered_datainfo(){
      $this->make_queryinfo();
      $query = $this->db->get();
      return $query->num_rows();
     }


     function get_all_datainfo(){
      $this->db->select("*");
      $this->db->from("tbl_view_statsinfo");
     return  $this->db->count_all_results();
     }





}








?>