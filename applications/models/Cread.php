

<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Cread extends MY_Model{
    function report(){
        $query = $this->db->query("SELECT * from  clientstotalforeachmonth_info");

        if($query->num_rows() > 0){
            foreach($query->result() as $data){
                $info[] = $data;
            }
            return $info;
        }
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