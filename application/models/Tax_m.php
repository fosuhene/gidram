<?php

class Tax_m extends My_Model{
	protected $_table_name ='tax_table';

	protected $_order_by = 'tax_id';

	public $rules = array(


    'tax_id' => array(
    'field'=>'tax_id',
    'label'=>'tax_id',
    'rules'=> 'trim|xss_clean|required'
      ),
    'tax_name'=>array(
    'field'=>'tax_name',
    'label'=>'tax_name',
    'rules'=> 'required|xss_clean'
	 ),
   'tax_startdate' => array(
    'field'=>'tax_startdate',
    'label'=>'tax_startdate',
    'rules'=> 'required|xss_clean'
   ),

     'tax_enddate' => array(
    'field'=>'tax_enddate',
    'label'=>'tax_enddate',
    'rules'=> 'required|xss_clean'
   ),

    'tax_desc' => array(
    'field'=>'tax_desc',
    'label'=>'tax_desc',
    'rules'=> 'required|xss_clean'
   ),

    'tax_factor' => array(
    'field'=>'tax_factor',
    'label'=>'tax_factor',
    'rules'=> 'required|xss_clean'
   ),
    'tax_grade' => array(
    'field'=>'tax_grade',
    'label'=>'tax_grade',
    'rules'=> 'required|xss_clean'
   )

  );


       public function get_new(){
       $tax= new stdClass();
       $tax->tax_id = '';
       $tax->tax_name = '';
       $tax->tax_startdate = '';
       $tax->tax_enddate = '';
       $tax->text_desc = '';
       $tax->tax_factor = '';
       $tax->tax_grade = '';
       return $tax;
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
    var $select_column = array("tax_id","tax_name","tax_startdate","tax_enddate","tax_factor","tax_grade","tax_desc");
    var $order_column  = array(null, "tax_name","tax_id",null);


    function make_query(){
      $this->db->select($this->select_column);
      $this->db->from($this->_table_name);
      if(isset($_POST["search"]["value"]))
      {
        $this->db->like("tax_id", $_POST["search"]["value"]);
        $this->db->or_like("tax_name", $_POST["search"]["value"]);
      }

      if(isset($_POST["order"]))
      {
        $this->db->order_by($this->order_column[$_POST['order']['0']['column']],
         $_POST['order']['0']['dir']);
      }

      else{

        $this->db->order_by("tax_id", "DESC");
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