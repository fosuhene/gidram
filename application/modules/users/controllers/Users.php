<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Users extends MY_Controller{

public function  __construct(){
      parent::__construct();


    $this->load->model('user_m');
    // $this->load->module('tableforms');

 }





public function index(){

  //fetch all users

  $data['users'] = $this->user_m->get();
  // dump_exit(  $data['users']);
  $data['subview'] = 'user/index';
  $this->load->view('_layout_index',  $data);
}



public function ForgotPassword()
{
    $email = $this->input->post('email');
    $findemail = $this->user_m->ForgotPassword($email);
    // dump_exit( $email);
    if ($findemail) {
        $this->user_m->sendpassword($findemail);
    } else {
        echo "<script>alert(' $email not found, please enter correct email id')</script>";
        redirect(base_url() . 'users/login', 'refresh');
    }
}



public function edit($id = NULL){

  //fetch a user or set a new one

  if($id){
    $data['user'] = $this->user_m->get($id);

    // dump_exit(    $data['user']);
    count($data['user']) || $data['errors'][] = 'User could not be found';
  }
  else{

      $data['user'] = $this->user_m->get_new();

  }

  //Set up the form
  $id == NULL || $data['user'] = $this->user_m->get($id);
      $rules =$this->user_m->rules_admin;
      // $id || $rules['password'] = '|required';
      $this->form_validation->set_rules($rules);


        //Process the form
       if($this->form_validation->run() == TRUE){

          $data = $this->user_m->array_from_post(array('email','password', 'name','levels'));
          $this->user_m->save($data, $id);

          redirect('users/login');

        }

        //Load the view
     // $this->data['subview'] = 'admin/user/edit';
     $this->load->view('user/edit',  $data);
}






public function delete($id){

  $this->user_m->delete($id);
   redirect('admin/user');
}




public function  login(){

    //Redirect a user if already logged in
    $dashboard ='Dashboard/index';
    $this->user_m->loggedin() == FALSE || redirect($dashboard);
    //Set form
    $rules = $this->user_m->rules;
    $this->form_validation->set_rules($rules);

    if($this->form_validation->run() == TRUE){

    if( $data =$this->user_m->login() == FALSE){

         $user = array(

        // 'name'=>$this->input->post('name'),
        'name'=>$this->input->post('name'),
        'email'=>$this->input->post('email'),
        'levels'=>$this->input->post('levels'),
        'password'=> md5($this->input->post('password'))
      );

           // print_r( $user);
           // exit;


      if(count($user)){
             //login user

          $name = $user['name'];
          $email = $user['email'];
          $password  = $user['password'];
          $levels = $user['levels'];
          // $id = $user['id'];

          // print_r( $user);
          //  exit;


      if($levels =='Father')
       {

         $data = array(
              'email' =>$email,
              'password' => $password,
              'levels'=>$levels,
              'id'=>$id,
              'loggedin' => TRUE
          );
            $this->session->set_userdata('user',$data); /*Here  setting the Admin datas in session */
            redirect('Dashboard/mainindex');

       }

        if($levels =='Societies')
       {

         $data = array(
              'email' =>$email,
              'password' => $password,
              'levels'=>$levels,
              'id'=>$id,
              'loggedin' => TRUE
          );
            $this->session->set_userdata($data); /*Here  setting the Admin datas in session */
            redirect($dashboard);

       }

         // dump_exit( $data);
      if($levels =='Administrator')
       {
          $data = array(
            'email' =>$email,
            'password' =>$password,
            'levels'=>$levels,
            'id'=>$id,
           'logged_in'  => TRUE
          );
            $this->session->set_userdata($data); /*Here  setting the  staff datas values in session */
              redirect('Dashboard/index');

       }

        if($levels =='Credit')
       {
          $data = array(
            'email' =>$email,
            'password' =>$password,
            'levels'=>$levels,
            'id'=>$id,
           '  logged_in'  => TRUE
          );
            $this->session->set_userdata($data); /*Here  setting the  staff datas values in session */
              redirect('admin/dashboard/finance');

       }
         // dump_exit( $data);


   }

    else{
      $this->session->set_flashdata('error', 'That email/password combination does not exist');
      redirect('users/login');
    }

       // print_r($datas);
       //      exit;
    }


    }
      $data['subview'] = 'user/login';
      $this->load->view('_layout_model', $data);


    }






public function logout(){
  $this->user_m->logout();
  redirect('admin/user/login');
 }



public function _unique_email($str){

  //Do not validate if email already exists
  //Unless it's the emailfor the current user
  $id = $this->uri->segment(4);
  $this->db->where('email', $this->input->post('email'));
  !$id || $this->db->where('id !=' . $id);
  $user = $this->user_m->get();

  if(count($user)){
    $this->form_validation->set_message('_unique_email', '%s should be unique');
    return FALSE;
  }

  return TRUE;
 }


}


    ?>