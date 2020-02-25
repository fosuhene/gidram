<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

// require APPPATH."third_party/MX/Controller.php";
class MY_Controller extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        if (!$this->ion_auth->logged_in())
         {
            $this->session->set_flashdata('message', $this->ion_auth->messages());
           redirect('Auth/login', 'refresh');
         }
         //$this->output->enable_profiler(ENVIRONMENT == 'development');
    }


   private function prepare_params ($params)
    {
        foreach ($params as $key => $value) {
            if ('null' == $value) $params[$key] = null;
        }

        return $params;
    }

    /*public function __call ($method, $params)
    {
        return $this->callCustomMethodFromDatabase($method, $params);
    }*/

  public function send_json_response ($data)
    {
        header('Content-Type: application/json');
        header('Accept: application/json');
        echo json_encode($data);
        exit;
    }



  public function prepare_user_list()
  {
     $this->db->select('hierachy_national.*');
     $this->db->join('hierachy_national','hierachy_national.user_id = users.id','inner');
   }


    protected function render_page($the_view = NULL, $page_title=NULL ,$template = 'default_layout', $returnhtml = FALSE)
    {
        $data['page_title']=$page_title;
        if ($returnhtml)
        {
            return $view_html;
        }

        if($template == 'json' || $this->input->is_ajax_request())
        {
            header('Content-Type: application/json');
            echo json_encode($data);
        }
        elseif(is_null($template))
        {
            $this->load->view($the_view,$data);
        }
        else
        {
            $data['content'] = (is_null($the_view)) ? '' : $this->load->view($the_view, $data, TRUE);
            $this->load->view('layout/'. $template, $data);
        }
    }

}



class Dashboard_Controller extends CI_Controller
 {

        function __construct()
        {
                parent::__construct();
                $this->load->library('ion_auth');
                   if (!$this->ion_auth->logged_in())
             {

                $this->session->set_flashdata('message', $this->ion_auth->messages());
               redirect('Auth/loginmain', 'refresh');

             }
        }
 }

 class Public_Controller extends MY_Controller
 {

        function __construct()
        {
                parent::__construct();
        }


 }


