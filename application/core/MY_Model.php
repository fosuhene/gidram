<?php

class My_Model  extends CI_Model{

	protected $_table_name ='';

	protected $_primary_key ='id';
    protected $_national_key ='nationality_id';

	protected $_primary_filter ='intval';

	protected $_order_by = '';

	public  $_rules = array();

    protected $_timestamps = FALSE;

    private $_relationships = array();
    public $has_one = array();
    public $has_many = array();






    function  __construct(){
    	parent::__construct();


}




public function array_from_post($fields){
	$data = array();
	foreach($fields as $field){
		$data[$field] = $this->input->post($field);
	}

	return $data;
}



public function get($id = NULL, $single = FALSE){
 if ($id !=NULL){
 	$filter = $this->_primary_filter;
 	$id = $filter($id);
 	$this->db->where($this->_primary_key, $id);
 	$method = 'row';

}elseif($single == TRUE){
  $method = 'row';
}
else{
	$method = 'result';
}
// if (!count($this->db->ar_orderby)){
// 	$this->db->order_by($this->_order_by);

// }
return $this->db->get($this->_table_name)->$method();

}

public function get_by($where, $single = FALSE){
  $this->db->where($where);
  return $this->get(NULL, $single);

}

public function save($data, $id= NULL){
	if($this->_timestamps == TRUE){
		$num = date('Y-m-d H:m:s');
		$id || $data['created'] = $row;
		$data['modified'] = $row;
	}

	if($id  === NULL){

		!isset($data[$this->_primary_key]) ||
		$data[$this->_primary_key] = NULL;
		$this->db->set($data);
			$this->db->insert($this->_table_name);
			$id = $this->db->insert_id();
	}
	else{
		$filter = $this->_primary_filter;
		$id = $filter($id);
		$this->db->set($data);
		$this->db->where($this->_primary_key, $id);
		$this->db->update($this->_table_name);

	}
	return $id;
}
public function delete($id){

		$filter = $this->_primary_filter;
		$id = $filter($id);

		if(!$id){
			return  FALSE;
		}
		$this->db->where($this->_primary_key, $id);
		$this->db->limit(1);
		$this->db->delete($this->_table_name);
}



 private function _has_one($request)
    {
        $relation = $this->_relationships[$request];
        $this->_database->join($relation['foreign_table'], $relation['foreign_table'].'.'.$relation['foreign_key'].' = '.$this->table.'.'.$relation['local_key'], 'left');
        return TRUE;
    }


   /* private function _set_relationships()
     *
     * Called by the public method with() it will set the relationships between the current model and other models
     */
    private function _set_relationships()
    {
        if(empty($this->_relationships))
        {
            $options = array('has_one','has_many','has_many_pivot');
            foreach($options as $option)
            {
                if(isset($this->{$option}) && !empty($this->{$option}))
                {
                    foreach($this->{$option} as $key => $relation)
                    {
                        if(!is_array($relation))
                        {
                            $foreign_model = $relation;
                            $foreign_model_name = strtolower($foreign_model);
                            $this->load->model($foreign_model_name);
                            $foreign_table = $this->{$foreign_model_name}->table;
                            $foreign_key = $this->{$foreign_model_name}->primary_key;
                            $local_key = $this->primary_key;
                            $pivot_local_key = $this->table.'_'.$local_key;
                            $pivot_foreign_key = $foreign_table.'_'.$foreign_key;
                            $get_relate = FALSE;

                        }
                        else
                        {
                            if($this->_is_assoc($relation))
                            {
                                $foreign_model = $relation['foreign_model'];
                                if(array_key_exists('foreign_table',$relation))
                                {
                                    $foreign_table = $relation['foreign_table'];
                                }
                                else
                                {
                                    $foreign_model_name = strtolower($foreign_model);
                                    $this->load->model($foreign_model_name);
                                    $foreign_table = $this->{$foreign_model_name}->table;
                                }
                                $foreign_key = $relation['foreign_key'];
                                $local_key = $relation['local_key'];
                                if($option=='has_many_pivot')
                                {
                                    $pivot_table = $relation['pivot_table'];
                                    $pivot_local_key = (array_key_exists('pivot_local_key',$relation)) ? $relation['pivot_local_key'] : $this->table.'_'.$this->primary_key;
                                    $pivot_foreign_key = (array_key_exists('pivot_foreign_key',$relation)) ? $relation['pivot_foreign_key'] : $foreign_table.'_'.$foreign_key;
                                    $get_relate = (array_key_exists('get_relate',$relation) && ($relation['get_relate']===TRUE)) ? TRUE : FALSE;
                                }
                            }
                            else
                            {
                                $foreign_model = $relation[0];
                                $foreign_model_name = strtolower($foreign_model);
                                $this->load->model($foreign_model_name);
                                $foreign_table = $this->{$foreign_model_name}->table;
                                $foreign_key = $relation[1];
                                $local_key = $relation[2];
                                if($option=='has_many_pivot')
                                {
                                    $pivot_local_key = $this->table.'_'.$this->primary_key;
                                    $pivot_foreign_key = $foreign_table.'_'.$foreign_key;
                                    $get_relate = (isset($relation[3]) && ($relation[3]===TRUE())) ? TRUE : FALSE;
                                }
                            }

                        }

                        if($option=='has_many_pivot' && !isset($pivot_table))
                        {
                            $tables = array($this->table, $foreign_table);
                            sort($tables);
                            $pivot_table = $tables[0].'_'.$tables[1];
                        }

                        $this->_relationships[$key] = array('relation' => $option, 'relation_key' => $key, 'foreign_model' => strtolower($foreign_model), 'foreign_table' => $foreign_table, 'foreign_key' => $foreign_key, 'local_key' => $local_key);
                        if($option == 'has_many_pivot')
                        {
                            $this->_relationships[$key]['pivot_table'] = $pivot_table;
                            $this->_relationships[$key]['pivot_local_key'] = $pivot_local_key;
                            $this->_relationships[$key]['pivot_foreign_key'] = $pivot_foreign_key;
                            $this->_relationships[$key]['get_relate'] = $get_relate;
                        }
                    }
                }
            }
        }
    }

    /** END RELATIONSHIPS */





    /**
     * public function with($requests)
     * allows the user to retrieve records from other interconnected tables depending on the relations defined before the constructor
     * @param string $request
     * @param array $arguments
     * @return $this
     */
    public function with($request,$arguments = array())
    {
        $this->_set_relationships();
        if (array_key_exists($request, $this->_relationships))
        {
            $this->_requested[$request] = array('request'=>$request);
            $parameters = array();

            if(isset($arguments))
            {
                foreach($arguments as $argument)
                {
                    if(is_array($argument))
                    {
                        foreach($argument as $k => $v)
                        {
                            $parameters[$k] = $v;
                        }
                    }
                    else
                    {
                        $requested_operations = explode('|',$argument);
                        foreach($requested_operations as $operation)
                        {
                            $elements = explode(':', $operation, 2);
                            if (sizeof($elements) == 2) {
                                $parameters[$elements[0]] = $elements[1];
                            } else {
                                show_error('MY_Model: Parameters for with_*() method must be of the form: "...->with_*(\'where:...|fields:...\')"');
                            }
                        }
                    }
                }
            }
            $this->_requested[$request]['parameters'] = $parameters;
        }


        return $this;
    }


}

?>