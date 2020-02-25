<?php

class Business_m extends My_Model{
	protected $_table_name ='vwtransactionlines';

	protected $_order_by = 'FacilityID';

	public $rules = array(


    'FacilityID' => array(
    'field'=>'FacilityID',
    'label'=>'FacilityID',
    'rules'=> 'trim|xss_clean|required'
      ),

    'FacilityTIN' => array(
    'field'=>'FacilityTIN',
    'label'=>'FacilityTIN',
    'rules'=> 'required|xss_clean'
	 ),
   'FacilityName' => array(
    'field'=>'FacilityName',
    'label'=>'FacilityName',
    'rules'=> 'required|xss_clean'
   ),

     'TLID' => array(
    'field'=>'TLID',
    'label'=>'TLID',
    'rules'=> 'required|xss_clean'
   ),

    'TLID' => array(
    'field'=>'TLID',
    'label'=>'TLID',
    'rules'=> 'required|xss_clean'
   ),

    'TL_Entry' => array(
    'field'=>'TL_Entry',
    'label'=>'TL_Entry',
    'rules'=> 'required|xss_clean'
   ),
    'TL_Quantity' => array(
    'field'=>'TL_Quantity',
    'label'=>'TL_Quantity',
    'rules'=> 'required|xss_clean'
   ),
    'TL_Price' => array(
    'field'=>'TL_Price',
    'label'=>'TL_Price',
    'rules'=> 'required|xss_clean'
   ),
    'TL_FacilityID' => array(
    'field'=>'TL_FacilityID',
    'label'=>'TL_FacilityID',
    'rules'=> 'required|xss_clean'
   ),
    'TL_Total' => array(
    'field'=>'TL_Total',
    'label'=>'TL_Total',
    'rules'=> 'required|xss_clean'
   )

  );


       public function get_new(){
       $business= new stdClass();
       $business->FacilityID = '';
       $business->FacilityName = '';
       $business->FacilityTIN = '';
       $business->TLID = '';
       $business->TL_Total = '';
       $business->TL_Price = '';
       $business->TL_Quantity = '';
       $business->TL_FacilityID = '';
       return $business;
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


  public function viewdetails($id=NULL){

  $this->db->select('*');
  $this->db->from('vw_transactionlines_tax');
  $this->db->where('FacilityID',$id);
  $query=$this->db->get();
  return $query->row_array();
}

    public  function get_transactions($id = NULL){
      $query = $this->db->query("SELECT * from vw_transactionlines_tax where FacilityID = $id");

      if($query->num_rows() > 0){
          foreach($query->result() as $data){
              $chart[] = $data;
          }
          return $chart;
      }
  }

//.....................Search......................................................
    var $select_column = array("FacilityID","FacilityName","FacilityTIN","TLID","TLUPrice","TL_Entry","TLQuantity","TLFacilityID","TL_Total");
    var $order_column  = array(null, "FacilityName","FacilityID",null);


    function make_query(){
      $this->db->select($this->select_column);
      $this->db->from($this->_table_name);
      if(isset($_POST["search"]["value"]))
      {
        $this->db->like("FacilityID", $_POST["search"]["value"]);
        $this->db->or_like("FacilityName", $_POST["search"]["value"]);
      }

      if(isset($_POST["order"]))
      {
        $this->db->order_by($this->order_column[$_POST['order']['0']['column']],
         $_POST['order']['0']['dir']);
      }

      else{

        $this->db->order_by("FacilityID", "DESC");
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