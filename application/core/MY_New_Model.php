<?php defined('BASEPATH') OR exit('No direct script access allowed');

/** how to extend MY_Model:
 *	class User_model extends MY_Model
 *	{
 * 		public function __construct()
 * 		{
 *          $this->_database_connection  = group_name or array() | OPTIONAL
 *              Sets the connection preferences (group name) set up in the database.php. If not set, it will use the
 *              'default' (the $active_group) database connection.
 *          $this->table = table name | OPTIONAL (default: plural of model name)
 *              Sets the name of the table. If nothing none is passed, the table name will be the plural of the model name
 *              without the "_model" string (model name: User_model; table: users).
 *          $this->primary = unique key | OPTIONAL (default: 'id')
 *          $this->timestamps = TRUE | array('made_at','modified_at','removed_at')
 *              If set to TRUE tells MY_Model that the table has 'created_at','updated_at' (and 'deleted_at' if $this->soft_delete is set to TRUE)
 *              If given an array as parameter, it tells MY_Model, that the first element is a created_at field type, the second element is a updated_at field type (and the third element is a deleted_at field type)
 *          $this->soft_deletes = FALSE
 *              Enables (TRUE) or disables (FALSE) the "soft delete" on records. Default is FALSE
 *          $this->return_as = 'object' | 'array'
 *              Allows the model to return the results as object or as array
 *          $this->has_one['phone'] = 'Phone_model' or $this->has_one['phone'] = array('Phone_model','foreign_key','local_key');
 *          $this->has_one['address'] = 'Address_model' or $this->has_one['address'] = array('Address_model','foreign_key','another_local_key');
 *          $this->has_many['posts'] = 'Post_model' or $this->has_many['posts'] = array('Posts_model','foreign_key','another_local_key');
 *              Allows establishing one or more one on one relationship(s) between models/tables
 *
 *
 * 			parent::__construct();
 * 		}
 * 	}
 *
 **/

class MY_Model extends CI_Model
{

    /**
     * Select the database connection from the group names defined inside the database.php configuration file or an
     * array.
     */
    protected $_database_connection = NULL;

    /** @var
     * This one will hold the database connection object
     */
    protected $_database;

    /** @var null
     * Sets table name
     */
    public $table = NULL;
    protected $_fields;

    /** @var string
     * Sets default id column
     */
    protected $primary = 'id';

    /** @var bool | array
     * Enables created_at and updated_at fields
     */
    protected $timestamps = TRUE;

    protected $_created_at_field;
    protected $_updated_at_field;
    protected $_deleted_at_field;

    /** @var bool
     * Enables soft_deletes
     */
    protected $soft_deletes = FALSE;

    /** relationships variables */
    private $_relationships = array();
    public $has_one = array();
    public $has_many = array();
    public $separate_subqueries = TRUE;
    private $_requested = array();
    /** end relationships variables */


    /**
     * The various callbacks available to the model. Each are
     * simple lists of method names (methods will be run on $this).
     */
    protected $before_create = array();
    protected $after_create = array();
    protected $before_update = array();
    protected $after_update = array();
    protected $before_get = array();
    protected $after_get = array();
    protected $before_delete = array();
    protected $after_delete = array();
    protected $before_soft_delete = array();
    protected $after_soft_delete = array();

    protected $callback_parameters = array();

    protected $return_as = 'object';

    private $_trashed = 'without';


    public function __construct()
    {
        parent::__construct();
        $this->_set_connection();
        $this->_fetch_table();
        $this->_set_timestamps();
        $this->before_create[] = 'add_created';
        $this->before_update[] = 'add_updated';
        $this->before_soft_delete[] = 'add_deleted';
    }

    /**
     * public function insert($data)
     * Inserts data into table. Can receive an array or a multidimensional array depending on what kind of insert we're talking about.
     * @param $data
     * @return str/array Returns id/ids of inserted rows
     */
    public function insert($data)
    {
        // First of all let's make sure we receive an array...
        $data_as_array = (is_object($data)) ? (array)$data : $data;

        //now let's see if the array is a multidimensional one (multiple rows insert)
        $multi = FALSE;
        foreach($data_as_array as $element)
        {
            $multi = (is_array($element)) ? TRUE : FALSE;
        }

        // if the array is not a multidimensional one...
        if($multi === FALSE)
        {
            $data = $this->trigger('before_create',$data);
            if($this->_database->insert($this->table, $data))
            {
                $id = $this->_database->insert_id();
                $return = $this->trigger('after_create',$id);
                return $return;
            }
            return FALSE;
        }
        // else...
        else
        {
            foreach($data as $row)
            {
                $row = $this->trigger('before_create',$row);
                if($this->_database->insert($this->table,$row))
                {
                    $id[] = $this->_database->insert_id();
                }
            }
            $return = $this->trigger('after_create',$id);
            return $return;
        }
        return FALSE;
    }


    /**
     * public function update($data)
     * Updates data into table. Can receive an array or a multidimensional array depending on what kind of update we're talking about.
     * @param $data
     * @param $column_name_where
     * @return str/array Returns id/ids of inserted rows
     */
    public function update($data, $column_name_where = NULL)
    {
        // First of all let's make sure we receive an array...
        $data_as_array = (is_object($data)) ? (array)$data : $data;

        //now let's see if the array is a multidimensional one (multiple rows insert)
        $multi = FALSE;
        foreach($data_as_array as $element)
        {
            $multi = (is_array($element)) ? TRUE : FALSE;
        }

        // if the array is not a multidimensional one...
        if($multi === FALSE)
        {
            $data = $this->trigger('before_update',$data);
            if(isset($column_name_where))
            {
                if (is_array($column_name_where))
                {
                    $this->where($column_name_where[0], $column_name_where[1]);
                } elseif (is_numeric($column_name_where)) {
                    $this->_database->where($this->primary, $column_name_where);
                } else {
                    $column_value = (is_object($data)) ? $data->{$column_name_where} : $data[$column_name_where];
                    $this->_database->where($column_name_where, $column_value);
                }
            }
            if($this->_database->update($this->table, $data))
            {
                $affected = $this->_database->affected_rows();
                $return = $this->trigger('after_update',$affected);
                return $return;
            }
            return FALSE;
        }
        // else...
        else
        {
            $rows = 0;
            foreach($data as $row)
            {
                $row = $this->trigger('before_update',$row);
                if(is_array($column_name_where))
                {
                    $this->_database->where($column_name_where[0], $column_name_where[1]);
                }
                else
                {
                    $column_value = (is_object($row)) ? $row->{$column_name_where} : $row[$column_name_where];
                    $this->_database->where($column_name_where, $column_value);
                }
                if($this->_database->update($this->table,$row))
                {
                    $rows++;
                }
            }
            $affected = $rows;
            $return = $this->trigger('after_update',$affected);
            return $return;
        }
        return FALSE;
    }

    /**
     * public function where($where)
     * Sets a where method for the $this object
     * @param $where_col_array
     * @param $value = NULL a $value is needed if the first parameter is a column name.
     * @return Returns $this object
     */
    public function where($where_col_array = NULL, $value = NULL)
    {
        if(isset($where_col_array))
        {
            if (!is_array($where_col_array) && is_null($value)) {
                $this->_database->where($this->primary, $where_col_array);
            } elseif (isset($value) && !is_array($value)) {
                $this->_database->where($where_col_array, $value);
            }
            elseif (isset($value) && is_array($value))
            {
                $this->_database->where_in($where_col_array,$value);
            }
            elseif (is_array($where_col_array)) {
                $this->_database->where($where_col_array);
            }
        }
        if($this->_trashed!='without')
        {
            $this->_where_trashed();
        }
        return $this;
    }

    /**
     * public function limit($limit, $offset = 0)
     * Sets a rows limit to the query
     * @param $limit
     * @param int $offset
     * @return $this
     */
    public function limit($limit, $offset = 0)
    {
        $this->_database->limit($limit, $offset);
        return $this;
    }

    /**
     * public function delete($where)
     * Deletes data from table.
     * @param $where
     * @return Returns affected rows or false on failure
     */
    public function delete($where = NULL)
    {
        $this->where($where);
        $affected_rows = 0;
        if($this->soft_deletes === TRUE)
        {
            $query = $this->_database->get($this->table);

            foreach($query->result() as $row)
            {
                $to_update[] = array($this->primary => $row->{$this->primary});
            }
            if(isset($to_update))
            {
                foreach($to_update as &$row)
                {
                    $row = $this->trigger('before_soft_delete',$row);
                }
                $affected_rows = $this->update($to_update, $this->primary);

                $this->trigger('after_soft_delete',$to_update);
            }
            return $affected_rows;
        }
        else
        {
            if($this->_database->delete($this->table))
            {
                return $this->_database->affected_rows();
            }
        }
        return FALSE;
    }

    /**
     * public function force_delete($where = NULL)
     * Forces the delete of a row if soft_deletes is enabled
     * @param null $where
     * @return bool
     */
    public function force_delete($where = NULL)
    {
        $this->where($where);
        if($this->_database->delete($this->table))
        {
            return $this->_database->affected_rows();
        }
        return FALSE;
    }

    /**
     * public function restore($where = NULL)
     * "Un-deletes" a row
     * @param null $where
     * @return bool
     */
    public function restore($where = NULL)
    {
        $this->with_trashed();
        $this->where($where);
        if($affected_rows = $this->_database->update($this->table,array($this->_deleted_at_field=>NULL)))
        {
            return $affected_rows;
        }
        return FALSE;
    }

    /**
     * public function trashed($where = NULL)
     * Verifies if a record (row) is soft_deleted or not
     * @param null $where
     * @return bool
     */
    public function trashed($where = NULL)
    {
        $this->only_trashed();
        $this->where($where);
        $this->limit(1);
        $query = $this->_database->get($this->table);
        if($query->num_rows() == 1)
        {
            return TRUE;
        }
        return FALSE;
    }

    /**
     * public function get()
     * Retrieves one row from table.
     * @param null $where
     * @return bool
     */
    public function get($where = NULL)
    {
        $this->trigger('before_get');
        $this->where($where);
        $this->limit(1);
        $query = $this->_database->get($this->table);
        if($query->num_rows() == 1)
        {
            $row = $query->{$this->_return_type(FALSE)}();
            $row = $this->trigger('after_get',$row);
            return $row;
        }
        return FALSE;
    }

    /**
     * public function get_all()
     * Retrieves one row from table.
     * @param null $where
     * @return bool
     */
    public function get_all($where = NULL)
    {
        $this->trigger('before_get');
        $this->where($where);
        $query = $this->_database->get($this->table);
        if($query->num_rows() > 0)
        {
            $data = $query->{$this->_return_type(TRUE)}();
            $data = $this->trigger('after_get',$data);
            return $data;
        }
        return FALSE;
    }

    /** RELATIONSHIPS */

    /**
     * public function with($requests)
     * allows the user to retrieve records from other interconnected tables depending on the relations defined before the constructor
     * @param string $requests
     * @param bool $separate_subqueries
     * @return $this
     */
    public function with($requests,$separate_subqueries = TRUE)
    {
        $this->_set_relationships();
        $requests = explode('|', $requests);
        if(!is_array($requests)) $requests[0] = $requests;
        foreach($requests as $request)
        {
            if (array_key_exists($request, $this->_relationships))
            {
                $this->_requested[$request] = $request;
            }
        }
        if($separate_subqueries === FALSE)
        {
            $this->separate_subqueries = FALSE;
            foreach($this->_requested as $request)
            {
                if($this->_relationships[$request]['relation'] == 'has_one') $this->_has_one($request);
            }
        }
        else
        {
            $this->after_get[] = 'join_temporary_results';
        }
        return $this;
    }

    /**
     * protected function join_temporary_results($data)
     * Joins the subquery results to the main $data
     * @param $data
     * @return mixed
     */
    protected function join_temporary_results($data)
    {
        $data = (sizeof($data)==1) ? array([0]=>$data) : $data;
        $data = json_decode(json_encode($data), TRUE);
        foreach($this->_requested as $requested_key => $request)
        {
            $relation = $this->_relationships[$request];
            $this->load->model($relation['foreign_model']);
            $foreign_key = $relation['foreign_key'];
            $local_key = $relation['local_key'];
            $type = $relation['relation'];
            $relation_key = $relation['relation_key'];
            $local_key_values = array();
            foreach($data as $key => $element)
            {
                $local_key_values[$key] = $element[$local_key];
            }

            $sub_results = $this->{$relation['foreign_model']}->as_array()->where($foreign_key, $local_key_values)->get_all();


            foreach($sub_results as $result)
            {
                if(in_array($result[$foreign_key], $local_key_values))
                {
                    $reverse_values = array_flip($local_key_values);
                    if($type=='has_one') {
                        $data[$reverse_values[$result[$foreign_key]]][$relation_key] = $result;
                    }
                    else
                    {
                        $data[$reverse_values[$result[$foreign_key]]][$relation_key][] = $result;
                    }
                }
            }
            unset($this->_requested[$requested_key]);
        }
        return ($this->return_as == 'object') ? json_decode(json_encode($data), FALSE) : $data;
    }


    /**
     * private function _has_one($request)
     *
     * returns a joining of two tables depending on the $request relationship established in the constructor
     * @param $request
     * @return $this
     */
    private function _has_one($request)
    {
        $relation = $this->_relationships[$request];
        $this->_database->join($relation['foreign_table'], $relation['foreign_table'].'.'.$relation['foreign_key'].' = '.$this->table.'.'.$relation['local_key'], 'left');
        return TRUE;
    }

    /**
     * private function _set_relationships()
     *
     * Called by the public method with() it will set the relationships between the current model and other models
     */
    private function _set_relationships()
    {
        if(empty($this->_relationships))
        {
            $options = array('has_one','has_many');
            foreach($options as $option)
            {
                if(isset($this->{$option}) && !empty($this->{$option}))
                {
                    $this->load->helper('inflector');
                    foreach($this->{$option} as $key => $relation)
                    {
                        $foreign_model = (is_array($relation)) ? $relation[0] : $relation;
                        $foreign_model_name = strtolower($foreign_model);
                        $this->load->model($foreign_model_name);
                        $foreign_table = $this->{$foreign_model_name}->table;
                        $foreign_key = (is_array($relation)) ? $relation[1] : singular($this->table) . '_id';
                        $local_key = (is_array($relation) && isset($relation[2])) ? $relation[2] : $this->primary;
                        $this->_relationships[$key] = array('relation' => $option, 'relation_key' => $key, 'foreign_model' => $foreign_model_name, 'foreign_table' => $foreign_table, 'foreign_key' => $foreign_key, 'local_key' => $local_key);
                    }
                }
            }
        }
    }

    /** END RELATIONSHIPS */

    /**
     * public function on($connection_group = NULL)
     * Sets a different connection to use for a query
     * @param $connection_group = NULL - connection group in database setup
     * @return obj
     */
    public function on($connection_group = NULL)
    {
        if(isset($connection_group))
        {
            $this->_database->close();
            $this->load->database($connection_group);
            $this->_database = $this->db;
        }
        return $this;
    }

    /**
     * public function reset($connection_group = NULL)
     * Resets the connection to the default used for all the model
     * @return obj
     */
    public function reset()
    {
        if(isset($connection_group))
        {
            $this->_database->close();
            $this->_set_connection();
        }
        return $this;
    }

    /**
     * Trigger an event and call its observers. Pass through the event name
     * (which looks for an instance variable $this->event_name), an array of
     * parameters to pass through and an optional 'last in interation' boolean
     */
    public function trigger($event, $data = array(), $last = TRUE)
    {
        if (isset($this->$event) && is_array($this->$event))
        {
            foreach ($this->$event as $method)
            {
                if (strpos($method, '('))
                {
                    preg_match('/([a-zA-Z0-9\_\-]+)(\(([a-zA-Z0-9\_\-\., ]+)\))?/', $method, $matches);
                    $method = $matches[1];
                    $this->callback_parameters = explode(',', $matches[3]);
                }
                $data = call_user_func_array(array($this, $method), array($data, $last));
            }
        }
        return $data;
    }


    /**
     * public function with_trashed()
     * Sets $_trashed to TRUE
     */
    public function with_trashed()
    {
        $this->_trashed = 'with';
        return $this;
    }

    /**
     * public function with_trashed()
     * Sets $_trashed to TRUE
     */
    public function only_trashed()
    {
        $this->_trashed = 'only';
        return $this;
    }

    private function _where_trashed()
    {
        switch($this->_trashed)
        {
            case 'only' :
                $this->_database->where($this->_deleted_at_field.' IS NOT NULL', NULL, FALSE);
                break;
            case 'without' :
                $this->_database->where($this->_deleted_at_field, NULL);
                break;
            case 'with' :
                break;
        }
        $this->_trashed = 'without';
        return $this;
    }

    /**
     * public funciton fields($fields)
     * does a select() of the $fields
     * @param $fields the fields needed
     * @return $this
     */
    public function fields($fields = NULL)
    {
        if(isset($fields))
        {
            $fields = (is_array($fields)) ? implode(',',$fields) : $fields;
            $this->_database->select($fields);
        }
        return $this;
    }

    /**
     * public function order_by($criteria, $order = 'ASC'
     * A wrapper to $this->_database->order_by()
     * @param $criteria
     * @param string $order
     * @return $this
     */
    public function order_by($criteria, $order = 'ASC')
    {
        if(is_array($criteria))
        {
            foreach ($criteria as $key=>$value)
            {
                $this->_database->order_by($key, $value);
            }
        }
        else
        {
            $this->_database->order_by($criteria, $order);
        }
        return $this;
    }

    /**
     * Return the next call as an array rather than an object
     */
    public function as_array()
    {
        $this->return_as = 'array';
        return $this;
    }
    /**
     * Return the next call as an object rather than an array
     */
    public function as_object()
    {
        $this->return_as = 'object';
        return $this;
    }

    /**
     * private function _return_type($multi = FALSE)
     * returns the result either as array or as object depending on $this->return_as value. Also if $multi is set to TRUE returns more than one result
     * @param bool $multi
     * @return string
     */
    private function _return_type($multi = FALSE)
    {
        $method = ($multi) ? 'result' : 'row';
        return ($this->return_as == 'array') ? $method . '_array' : $method;
    }

    /**
     * private function _set_timestamps()
     *
     * Sets the fields for the created_at, updated_at and deleted_at timestamps
     * @return bool
     */
    private function _set_timestamps()
    {
        if($this->timestamps === TRUE || is_array($this->timestamps))
        {
            $this->_created_at_field = (is_array($this->timestamps) && isset($this->timestamps[0])) ? $this->timestamps[0] : 'created_at';
            $this->_updated_at_field = (is_array($this->timestamps) && isset($this->timestamps[1])) ? $this->timestamps[1] : 'updated_at';
            $this->_deleted_at_field = (is_array($this->timestamps) && isset($this->timestamps[2])) ? $this->timestamps[2] : 'deleted_at';
        }
        return TRUE;
    }

    /**
     *
     * protected function add_created($row)
     *
     * Receives a row of data and appends to it a created_at field type returning the row
     *
     * @param $row
     * @return mixed
     */
    protected function add_created($row)
    {
        if($this->timestamps === TRUE || is_array($this->timestamps))
        {
            if(is_object($row) && !isset($row->{$this->_created_at_field}))
            {
                $row->{$this->_created_at_field} = date('Y-m-d H:i:s');
            }
            elseif(!isset($row[$this->_created_at_field]))
            {
                $row[$this->_created_at_field] = date('Y-m-d H:i:s');
            }
        }
        return $row;
    }

    /**
     *
     * protected function add_updated($row)
     *
     * Receives a row of data and appends to it a updated_at field type returning the row
     *
     * @param $row
     * @return mixed
     */
    protected function add_updated($row)
    {
        if($this->timestamps === TRUE || is_array($this->timestamps))
        {
            if(is_object($row) && !isset($row->{$this->_updated_at_field}))
            {
                $row->{$this->_updated_at_field} = date('Y-m-d H:i:s');
            }
            elseif(!isset($row[$this->_updated_at_field]))
            {
                $row[$this->_updated_at_field] = date('Y-m-d H:i:s');
            }
        }
        return $row;
    }

    /**
     *
     * protected function add_deleted($row)
     *
     * Receives a row of data and appends to it a deleted_at field type returning the row
     *
     * @param $row
     * @return mixed
     */
    protected function add_deleted($row)
    {
        if($this->timestamps === TRUE || is_array($this->timestamps))
        {
            if(is_object($row) && !isset($row->{$this->_deleted_at_field}))
            {
                $row->{$this->_deleted_at_field} = date('Y-m-d H:i:s');
            }
            elseif(!isset($row[$this->_deleted_at_field]))
            {
                $row[$this->_deleted_at_field] = date('Y-m-d H:i:s');
            }
        }
        return $row;
    }

    /**
     * private function _fetch_table()
     *
     * Sets the table name when called by the constructor
     *
     */
    private function _fetch_table()
    {
        if (!isset($this->table))
        {
            $this->table = $this->_get_table_name(get_class($this));
        }
    }
    private function _get_table_name($model_name)
    {
        $this->load->helper('inflector');
        $table_name = plural(preg_replace('/(_m|_model)?$/', '', strtolower($model_name)));
        return $table_name;
    }

    /**
     * private function _set_connection()
     *
     * Sets the connection to database
     */
    private function _set_connection()
    {
        isset($this->_database_connection) ? $this->load->database($this->_database_connection) : $this->load->database();
        $this->_database = $this->db;
    }


}