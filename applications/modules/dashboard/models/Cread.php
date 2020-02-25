<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Cread extends MY_Model{
	
	//function to read all transaction to be use on chart
	function report(){
        $query = $this->db->query("SELECT id, entry_date, quantity, unit_price FROM local_sales_invoice_line order by id");

        if($query->num_rows() > 0){
            foreach($query->result() as $data){
                $info[] = $data;
            }
            return $info;
        }
    }
	
	
	function reports(){
        $query = $this->db->query("SELECT FacilityID, FacilityTIN, FacilityName, TLQuantity, TLUPrice, TLID, TL_Entry, TL_Total FROM vwtransactionlines order by FacilityName ASC");

        if($query->num_rows() > 0){
            foreach($query->result() as $data){
                $info[] = $data;
            }
            return $info;
        }
    }
	//function to read all pie chart right home
	function echart_report(){
        $query = $this->db->query("SELECT tax_id as tid, tax_name, tax_startdate, tax_enddate, tax_factor FROM tax_table order by tax_id");

        if($query->num_rows() > 0){
            foreach($query->result() as $data){
                $info[] = $data;
            }
            return $info;
        }
    }
	/*
	//function to read all pie chart right home
	
	public function business_transactionChart()
	{
		$this->db->select('SELECT FacilityID, FacilityTIN, FacilityName,TL_Total FROM vwtransactionlines order by FacilityName ASC');
		$query = $this->db->get();
		return $query->result_array();
	} 
		
	function count_trans() {
		
		$query = $this->db->query("SELECT * FROM vwtransactionlines");
			if ($query->num_rows() > 0)
			{
				$row = $query->row(); 
				return $row;
			}
			//$query = $this->db->query("SELECT * FROM vwtransactionlines");
			//$query = $this->db->query("YOUR QUERY");			
				//$this->db->from('vwtransactionlines');
		  //return $query->num_rows();
		}
	
	function rwRow(){
		$sql = $this->db->get_compiled_select('vwtransactionlines');
		return $sql;
	}
*/
	//function to count all national
	function count_national() {	
			$this->db->from('hierachy_national');
		  return $num_rows = $this->db->count_all_results();
		}
	//function to count all regional	
	function count_regional() {	
				$this->db->from('hierachy_regional');
		  return $num_rows = $this->db->count_all_results();
		}
	//function to count all district	
	function count_district() {	
				$this->db->from('hierachy_district');
		  return $num_rows = $this->db->count_all_results();
		}
	//function to count all community	
	function count_community() {	
				$this->db->from('hierachy_community');
		  return $num_rows = $this->db->count_all_results();
		}
		
	//function to count all facilities
		function count_facility() {	
				$this->db->from('hierachy_facility');
		  return $num_rows = $this->db->count_all_results();
		}

	
  function reportstats(){
       // $query = $this->db->query("SELECT *,( activityDate >= 2019-03-31) AS activity from  tbl_view_statsinfo WHERE activityDate >= '2019-03-31'");
        $query = $this->db->query("SELECT  DISTINCT *, ( activityDate >= 2019-03-31) AS activity from  tbl_view_statsinfo LIMIT 6 ");

        if($query->num_rows() > 0){
            foreach($query->result() as $data){
                $info[] = $data;
            }
            return $info;
        }
    }




     function devices_year(){
        $query = $this->db->query("SELECT * from  tbl_view_devicestotalforeachmonth_info order by id desc");

        if($query->num_rows() > 0){
            foreach($query->result() as $data){
                $info[] = $data;
            }
            return $info;
        }
    }
}