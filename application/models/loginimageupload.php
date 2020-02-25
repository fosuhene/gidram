<?php

class Loginimageupload extends My_Model{
	protected $_table_name ='loginimage';

	protected $_order_by = 'id';

	public $rules = array(

     
    'image' => array(
    'field'=>'image',
    'label'=>'Church Image',
    'rules'=> 'trim|xss_clean'
      ),

    'description' => array(
    'field'=>'description',
    'label'=>'Description',
    'rules'=> 'required|xss_clean'
	 )

  );


       public function get_new(){
       $Loginimageupload= new stdClass();
       $Loginimageupload->loginimage_id = '';
       $Loginimageupload->image = '';
       $Loginimageupload->description = '';
       return $Loginimageupload;

   }


  public function editloginimage($user_id){
        $id= $this->db->select('*');
        $this->db->where('loginimage_id',$user_id);
        $query = $this->db->get($this->_table_name);
        return $query->result();

  }


  public function updateloginimage($user_id , $data){
    $this->db->where("loginimage_id", $user_id);
    $this->db->update($this->_table_name, $data);

  }


  public function delete_loginimage($user_id){
    $this->db->where('loginimage_id', $user_id);
    $this->db->delete($this->_table_name);
  }


//.....................Search......................................................
    var $select_column = array("loginimage_id","description","image","created_at");
    var $order_column  = array(null, "created_at",null,null);


    function make_query(){
      $this->db->select($this->select_column);
      $this->db->from($this->_table_name);
      if(isset($_POST["search"]["value"]))
      {
        $this->db->like("created_at", $_POST["search"]["value"]);
        $this->db->or_like("created_at", $_POST["search"]["value"]);
      }

      if(isset($_POST["order"]))
      {
        $this->db->order_by($this->order_column[$_POST['order']['0']['column']],
         $_POST['order']['0']['dir']);
      }

      else{

        $this->db->order_by("loginimage_id", "DESC");
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
      $this->db->from("$this->_table_name");
     return  $this->db->count_all_results();
     }


 


}


?>