<?php

class Category_m extends My_Model{
	protected $_table_name ='categories';

	protected $_order_by = 'id';

	public $rules = array(

     
    'name' => array(
    'field'=>'name',
    'label'=>'Name',
    'rules'=> 'trim|xss_clean|required'
      ),

    'user_id' => array(
    'field'=>'user_id',
    'label'=>'user_id',
    'rules'=> 'required|xss_clean'
	 ), 
   'type' => array(
    'field'=>'type',
    'label'=>'type',
    'rules'=> 'required|xss_clean'
   ),

  );


       public function get_new(){
       $Category= new stdClass();
       $Category->id = '';
       $Category->user_id = '';
       $Category->type = '';
       return $Category;
   }


  public function editcategory($user_id){
        $id= $this->db->select('*');
        $this->db->where('id',$user_id);
        $query = $this->db->get($this->_table_name);
        return $query->result();

  }


  public function updatecategory($user_id , $data){
    $this->db->where("id", $user_id);
    $this->db->update($this->_table_name, $data);

  }


  public function delete_category($user_id){
    $this->db->where('id', $user_id);
    $this->db->delete($this->_table_name);
  }

   public function get_maincategory(){
    $return= $this->db
        ->select('*')
        ->from('categories')
        ->where('type',1)
        ->get()
        ->result_array();

        return $return ;

  }
  public function get_subcategory1(){
    $return= $this->db
        ->select('*')
        ->from('categories')
        ->where('type',2)
        ->get()
        ->result_array();

        return $return ;

  }

public function get_subcategory2(){
    $return= $this->db
        ->select('*')
        ->from('categories')
        ->where('type',3)
        ->get()
        ->result_array();

        return $return ;
  }


//.....................Search......................................................
    var $select_column = array("id","name","user_id","created_at");
    var $order_column  = array(null, "created_at","name",null);


    function make_query(){
      $this->db->select($this->select_column);
      $this->db->from($this->_table_name);
      if(isset($_POST["search"]["value"]))
      {
        $this->db->like("name", $_POST["search"]["value"]);
        $this->db->or_like("created_at", $_POST["search"]["value"]);
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
        $this->db->where('type',1);
        $query = $this->db->get();
        return $query->result(); 
    }


    public function make_datatables1()
    {
        $this->make_query();
        $this->db->where('type',2);
        $query = $this->db->get();
        return $query->result(); 
    }



    public function make_datatables2()
    {
        $this->make_query();
        $this->db->where('type',3);
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