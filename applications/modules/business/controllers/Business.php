<?php
defined('BASEPATH') OR exit('No direct script access allowed');

Class Business extends MY_Controller{

public function  __construct(){

  parent::__construct();
      $this->load->model('National_m', 'national');
      $this->load->model('Regional_m', 'regional');
      $this->load->model('Ion_auth_model');
      $this->load->model('loginimageupload', 'imageupload');
      $this->load->library(['ion_auth', 'form_validation']);

 }


 public function index(){
    if ($this->ion_auth->logged_in()){
    $data['user_info'] =$this->ion_auth->user()->row();
    $data['subview'] = 'business/index';
    $this->load->view('business/index', $data);
   }
 }


 public function detail(){
    if ($this->ion_auth->logged_in()){
    $data['user_info'] =$this->ion_auth->user()->row();
    $data['subview'] = 'business/business_detail';
    $this->load->view('business/business_detail', $data);
   }
 }



public function national(){
    $data['user_info'] =$this->ion_auth->user()->row();
    $this->ion_auth->set_hook('user', 'join_person_users', $this, 'prepare_user_list', array());
    $data['usersmain'] = $this->ion_auth->user()->row();
    ##############//Process the form######################################################
    $id= null;
    $this->national->get_new();
    $rules = $this->national->rules;
    $this->form_validation->set_rules($rules);
    //Process the form
    if($this->form_validation->run() == TRUE){
      $data = $this->national->array_from_post(array('name','user_id','shortname', 'code', 'description','opening_date','closed_date','comment','url','contact_person','haddress','email','phone','latitude','longitude','added_date','tin','ghpost_code'));
      $this->national->save($data, $id);

        redirect('Dashboard/national','refresh');
    }
    $data['subview'] = 'dashboard/national';
    $this->load->view('dashboard/national', $data);
 }



public function regional(){
    $data['user_info'] =$this->ion_auth->user()->row();
    $this->ion_auth->set_hook('user', 'join_person_users', $this, 'prepare_user_list', array());
    $data['usersmain'] = $this->ion_auth->user()->row();
    ##############//Process the form######################################################
    $id= null;
    $this->regional->get_new();
    $rules = $this->regional->rules;
    $this->form_validation->set_rules($rules);
    //Process the form
    if($this->form_validation->run() == TRUE){
      $data = $this->regional->array_from_post(array('name','hierachyNationalID','shortname', 'code', 'description','opening_date','closed_date','comment','url','contact_person','haddress','email','phone','latitude','longitude','added_date','tin','ghpost_code'));
      $this->regional->save($data, $id);

        redirect('Business/regional','refresh');
    }
    $data['subview'] = 'business/regional';
    $this->load->view('business/regional', $data);
 }



  public function new_profile($id=Null){
    $data['user_info'] =$this->ion_auth->user()->row();
    $data['subview'] = 'business/new_profile';
    $this->load->view('business/new_profile', $data);
 }


//####################### Edit user profile image for users#################################################

  public function user_edit()
   {
       $output = array();
       $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "not found" ;
       $result =$this->national->edituserimage($user);
       //dump_exit($user);
       foreach ($result as $row)
       {
          //echo '<img src="'.base_url(). 'assets/images/post/'.$row->photo.'" class="img-thumpnail"  width="180" height="110"/>';
          $output['id'] = $row->id;
          $output['password'] = $row->password;

         if($row->photo !='')
          {
            $output['photo'] = '<img src="'.base_url(). 'assets/images/post/' . $row->photo .'" class="img-thumpnail"  width="180" height="110"/>
            <input type="hidden" name="hidden_user_image" value="'. $row->photo.'" />';
          }
          else
          {
            $output['photo']=  '<input type="hidden" name="hidden_user_image" value=""/>';
          }

       }

       echo json_encode($output);
    }



public function upload_image_photo($userfile, $old_src)
    {
      $new_name = $_FILES[$userfile]['name'];
      $destination = './assets/images/post/'.$new_name;
      $old_file = './assets/images/post/'.$old_src;

      if (move_uploaded_file($_FILES[$userfile]['tmp_name'], $destination)) {
        if (is_readable($old_file)) {
          @unlink($old_file);
        }
      }
      return $new_name;
    }


 public function user_update()
      {
            $user_info = isset($_POST["save"] ) ? $_POST["save"] == 'Edit' : "visitor" ;
            if ($user_info)
              {
                  $updated_data =array(
                      // 'id' => $this->input->post('id'),
                      'photo' => $this->input->post('photo'),
                  );

                  if (isset($_FILES["userfile"]["name"]))
                  {
                     $logo = $this->upload_image_photo('userfile', $this->input->post('hidden_user_image'));
                     if ($logo) $updated_data['photo'] = $logo;
                  }
                   $user_id = $this->input->post("user_id");
                   $result = $this->national->updateuserimage($user_id, $updated_data);
                   echo 'Data Updated';
             }
            else
            {
              echo "Data not saved";
            }
        }
 //####################### Edit user profile image for each Client #################################################

  public function profile_edit()
   {
       $output = array();
       $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "not found" ;
       $result =$this->national->edituserimage($user);
       //dump_exit($user);
       foreach ($result as $row)
       {
          $output['id'] = $row->id;
          $output['password'] = $row->password;
          $output['first_name'] = $row->first_name;
          $output['email'] = $row->email;
          $output['phone'] = $row->phone;
          $output['username'] = $row->username;

         if($row->photo !='')
          {
            $output['photo'] = '<img src="'.base_url(). 'assets/images/post/' . $row->photo .'" class="img-thumpnail"  width="180" height="110"/>
            <input type="hidden" name="hidden_user_image" value="'. $row->photo.'" />';
          }
          else
          {
            $output['photo']=  '<input type="hidden" name="hidden_user_image" value=""/>';
          }

       }

       echo json_encode($output);
    }



 public function profile_update()
      {
            $user_info = isset($_POST["save"] ) ? $_POST["save"] == 'Edit' : "Not found" ;
            // $password = $this->ion_auth->hash_password('password');
            // dump_exit($password);
            if ($user_info)
              {
                  $updated_data =array(
                      // 'id' => $this->input->post('id'),
                      'first_name' => $this->input->post('first_name'),
                      'email' => $this->input->post('email'),
                      'phone' => $this->input->post('phone'),
                      'username' => $this->input->post('username'),
                      'password' => $this->ion_auth->hash_password($this->input->post('password')),
                  );

                  if (isset($_FILES["userfile"]["name"]))
                  {
                     $photo = $this->upload_image_photo('userfile', $this->input->post('hidden_user_image'));
                     if ($photo) $updated_data['photo'] = $photo;
                  }
                   $user_id = $this->input->post("user_id");
                   $result = $this->national->updateprofiledata($user_id, $updated_data);
                   echo 'Data Updated';
             }
            else
            {
              echo "Data not saved";
            }
        }

//#################### Edit user profile image for Other Profile Details #################################################

  public function profileother_edit()
   {
       $output = array();
       $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "not found" ;
       $result =$this->national->editnationalinfo($user);
       //dump_exit($user);
       foreach ($result as $row)
       {
          $output['id'] = $row->id;
          $output['manager'] = $row->manager;
          $output['city'] = $row->city;
          $output['address'] = $row->address;
          $output['country'] = $row->country;
       }

       echo json_encode($output);
    }



 public function profileother_update()
      {
            $user_info = isset($_POST["save"] ) ? $_POST["save"] == 'Edit' : "Not found" ;
            // dump_exit( $user_info);
            if ($user_info)
              {
                  $updated_data =array(
                      // 'id' => $this->input->post('id'),
                      'manager' => $this->input->post('manager'),
                      'city' => $this->input->post('city'),
                      'address' => $this->input->post('address'),
                      'country' => $this->input->post('country'),
                  );
                   $user_id = $this->input->post("user_id");
                   $result = $this->national->updatenationalinfo($user_id, $updated_data);
                   echo 'Data Updated';
             }
            else
            {
              echo "Data not saved";
            }
        }

/*================Clients Edit===========================*/

public function national_edit(){
  $output = array();
  $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "Not Found" ;
  $result =$this->national->editnationalinfo($user);
  //dump_exit($result);
   foreach ($result as $row)
   {
    $output['account_name'] = $row->account_name;
    $output['manager'] = $row->manager;
    $output['address'] = $row->address;
    $output['city'] = $row->city;
    $output['country'] = $row->country;
    $output['login_date'] = $row->login_date;
    $output['id'] = $row->id;
    $output['user_id'] = $row->user_id;
   }

 echo json_encode($output);
}



 public function national_update(){
   $user_info = isset($_POST["save"] ) ? $_POST["save"] == 'Edit' : "Not found" ;
    if ($user_info)
    {

    $updated_data =array(
        'account_name' => $this->input->post('account_name'),
        'manager' => $this->input->post('manager'),
        'address' => $this->input->post('address'),
        'city' => $this->input->post('city'),
        'country' => $this->input->post('country'),
        'login_date' => $this->input->post('login_date')
    );
     $user = $this->input->post("user_id");
     $result = $this->national->updatenationalinfo($user, $updated_data);

     echo  'Row ID - '.'  '. $user.' ' .'Updated';
    // echo $user;
  }
  else
  {
    echo "save not found";
  }

 }




}




?>