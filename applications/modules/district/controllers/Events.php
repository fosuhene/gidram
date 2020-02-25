<?php
defined('BASEPATH') OR exit('No direct script access allowed');

Class Events extends MY_Controller{

  public function  __construct(){
    parent::__construct();
      $this->load->model("Ion_auth_model");
      $this->load->model("Baptism_m","baptism");
      $this->load->model("Dedications_m","dedications");
      $this->load->model("Churchplanner_m","planner");
      $this->load->model("Churchwedding_m","wedding");
   }

  //..............View Main Baptism Page ..............................................

  public function baptism()
   {
      $data['user_info'] =$this->ion_auth->user()->row();
      $data['logo'] =  $this->ion_auth->get_logo();
      ################Process the Form##########################################
      //Process the form
      $id= null;
      $this->baptism->get_new();
      $rules = $this->baptism->rules;
      $this->form_validation->set_rules($rules);
      if($this->form_validation->run() == TRUE){
        $data = $this->baptism->array_from_post(array('name','gender','dob','daybirth','fathers_name','mothers_name','pob','hometown','fathers_nationality','mothers_nationality','baptism_date','baptism_place','church_name','officiating_minister'));
        $this->baptism->save($data, $id);
        redirect('Events/baptism');
      }
      $data['subview'] = 'events/baptism';
      $this->load->view('events/baptism', $data);
  }
###########################################################################################
############################## Baptism ################################################
  public function fetch_baptism()
   {
        $data['session'] =  $this->ion_auth->session->userdata();
        $cdata = $this->baptism->make_datatables();
        $this->data = array();
        foreach($cdata as $row)
        {
          $sub_array = array();
          $sub_array[] = $row->id;
          $sub_array[] = $row->name;
          $sub_array[] = $row->gender;
          $sub_array[] = $row->dob;
          $sub_array[] = $row->daybirth;
          $sub_array[] = $row->fathers_name;
          $sub_array[] = $row->mothers_name;
          $sub_array[] = $row->pob;
          $sub_array[] = $row->hometown;
          $sub_array[] = $row->fathers_nationality;
          $sub_array[] = $row->mothers_nationality;
          $sub_array[] = $row->baptism_date;
          $sub_array[] = $row->baptism_place;
          $sub_array[] = $row->church_name;
          $sub_array[] = $row->officiating_minister;
          $sub_array[] = $row->created_at;
          $sub_array[] = ' <a name="updatebaptism" id="' . $row->id .'" class="update"><i class="fa fa-edit "></i></a>';
          $sub_array[] = ' <a name="deletebaptism" id="' . $row->id .'" class="delete" ><i class="fa fa-trash"></i></a>';
          $this->data[] = $sub_array;
         }
         $output = array(
           "recordsTotal"    =>  $this->baptism->get_all_data(),
           "recordsFiltered"  => $this->baptism->get_filtered_data(),
           "data"   => $this->data,
        );
        echo json_encode($output);
    }
################## Church Group Edit#############################################
   public function baptism_edit()
    {
       $output = array();
       $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "not found" ;
       $result =$this->baptism->editbaptisminfo($user);
       foreach ($result as $row)
       {
          $output = array
          (
           'name'=> $row->name,
           'gender'=> $row->gender,
           'daybirth'=> $row->daybirth,
           'fathers_name'=> $row->fathers_name,
           'mothers_name'=> $row->mothers_name,
           'pob'=> $row->pob,
           'dob'=> $row->dob,
           'hometown'=> $row->hometown,
           'fathers_nationality'=> $row->fathers_nationality,
           'mothers_nationality'=> $row->mothers_nationality,
           'baptism_date'=> $row->baptism_date,
           'baptism_place'=> $row->baptism_place,
           'church_name'=> $row->church_name,
           'officiating_minister'=> $row->officiating_minister,
           'id'=> $row->id,
          );
       }
       echo json_encode($output);
    }
#######################Group Update##################################################
  public function baptism_update()
   {
       $user_info = isset($_POST["save"] ) ? $_POST["save"] == 'Edit' : "Not found" ;
        if ($user_info)
        {
        $updated_data =array(
            'name' => $this->input->post('name'),
            'gender' => $this->input->post('gender'),
            'dob' => $this->input->post('dob'),
            'daybirth' => $this->input->post('daybirth'),
            'fathers_name' => $this->input->post('fathers_name'),
            'mothers_name' => $this->input->post('mothers_name'),
            'hometown' => $this->input->post('hometown'),
            'pob' => $this->input->post('pob'),
            'fathers_nationality' => $this->input->post('fathers_nationality'),
            'mothers_nationality' => $this->input->post('mothers_nationality'),
            'baptism_date' => $this->input->post('baptism_date'),
            'baptism_place' => $this->input->post('baptism_place'),
            'church_name' => $this->input->post('church_name'),
            'officiating_minister' => $this->input->post('officiating_minister')
        );
         $user = $this->input->post("user_id");
         $result = $this->baptism->updatebaptisminfo($user, $updated_data);
         echo  'Row ID - '.'  '. $user.' ' .'Updated';
      }
      else
      {
        echo "save not found";
      }
   }
###################Group Delete#################################################
   public function baptism_delete(){
      $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "not found" ;
      $result =$this->baptism->delete_baptisminfo($user);
      echo 'Data Deleted';
   }

#########################################################################################
   //..............View Main Dedications Page ..............................................

  public function dedications()
   {
      $data['user_info'] =$this->ion_auth->user()->row();
      $data['logo'] =  $this->ion_auth->get_logo();
      ################Process the Form##########################################
      //Process the form
      $id= null;
      $this->dedications->get_new();
      $rules = $this->dedications->rules;
      $this->form_validation->set_rules($rules);
      if($this->form_validation->run() == TRUE){
        $data = $this->dedications->array_from_post(array('child_name','gender','dob','daybirth','fathers_name','mothers_name','pob','dedication_date','dedication_place','church_name','officiating_minister'));
        $this->dedications->save($data, $id);
        redirect('Events/dedications');
      }
      $data['subview'] = 'events/dedications';
      $this->load->view('events/dedications', $data);
  }

  ###########################################################################################
############################## Dedications ################################################
  public function fetch_dedications()
   {
        $data['session'] =  $this->ion_auth->session->userdata();
        $cdata = $this->dedications->make_datatables();
        $this->data = array();
        foreach($cdata as $row)
        {
          $sub_array = array();
          $sub_array[] = $row->id;
          $sub_array[] = $row->child_name;
          $sub_array[] = $row->gender;
          $sub_array[] = $row->dob;
          $sub_array[] = $row->daybirth;
          $sub_array[] = $row->fathers_name;
          $sub_array[] = $row->mothers_name;
          $sub_array[] = $row->pob;
          $sub_array[] = $row->dedication_date;
          $sub_array[] = $row->dedication_place;
          $sub_array[] = $row->church_name;
          $sub_array[] = $row->officiating_minister;
          $sub_array[] = $row->created_at;
          $sub_array[] = ' <a name="updatededications" id="' . $row->id .'" class="update"><i class="fa fa-edit "></i></a>';
          $sub_array[] = ' <a name="deletededications" id="' . $row->id .'" class="delete" ><i class="fa fa-trash"></i></a>';
          $this->data[] = $sub_array;
         }
         $output = array(
           "recordsTotal"    =>  $this->dedications->get_all_data(),
           "recordsFiltered"  => $this->dedications->get_filtered_data(),
           "data"   => $this->data,
        );
        echo json_encode($output);
    }
################## Church Group Edit#############################################
   public function dedications_edit()
    {
       $output = array();
       $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "not found" ;
       $result =$this->dedications->editdedications($user);
       foreach ($result as $row)
       {
          $output = array
          (
           'child_name'=> $row->child_name,
           'gender'=> $row->gender,
           'daybirth'=> $row->daybirth,
           'fathers_name'=> $row->fathers_name,
           'mothers_name'=> $row->mothers_name,
           'pob'=> $row->pob,
           'dob'=> $row->dob,
           'dedication_date'=> $row->dedication_date,
           'dedication_place'=> $row->dedication_place,
           'church_name'=> $row->church_name,
           'officiating_minister'=> $row->officiating_minister,
           'id'=> $row->id,
          );
       }
       echo json_encode($output);
    }
#######################Group Update##################################################
  public function dedications_update()
   {
       $user_info = isset($_POST["save"] ) ? $_POST["save"] == 'Edit' : "Not found" ;
        if ($user_info)
        {
        $updated_data =array(
            'child_name' => $this->input->post('child_name'),
            'gender' => $this->input->post('gender'),
            'dob' => $this->input->post('dob'),
            'daybirth' => $this->input->post('daybirth'),
            'fathers_name' => $this->input->post('fathers_name'),
            'mothers_name' => $this->input->post('mothers_name'),
            'pob' => $this->input->post('pob'),
            'dedication_date' => $this->input->post('dedication_date'),
            'dedication_place' => $this->input->post('dedication_place'),
            'church_name' => $this->input->post('church_name'),
            'officiating_minister' => $this->input->post('officiating_minister')
        );
         $user = $this->input->post("user_id");
         $result = $this->dedications->updatededications($user, $updated_data);
         echo  'Row ID - '.'  '. $user.' ' .'Updated';
      }
      else
      {
        echo "save not found";
      }
   }
###################Group Delete#################################################
   public function dedications_delete(){
      $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "not found" ;
      $result =$this->dedications->delete_dedications($user);
      echo 'Data Deleted';
   }
##########################################################################################333
  //..............View Main Church Planner Page ..............................................

  public function churchplanner()
   {
      $data['user_info'] =$this->ion_auth->user()->row();
      $data['logo'] =  $this->ion_auth->get_logo();
      ################Process the Form##########################################
      //Process the form
      $id= null;
      $this->planner->get_new();
      $rules = $this->planner->rules;
      $this->form_validation->set_rules($rules);
      if($this->form_validation->run() == TRUE){
        $data = $this->planner->array_from_post(array('pgrm_leader','pgrm_title','description','venue','duration','pgrm_date'));
        $this->planner->save($data, $id);
        redirect('Events/churchplanner');
      }
      $data['subview'] = 'events/churchplanner';
      $this->load->view('events/churchplanner', $data);
  }


###########################################################################################
############################## church Planner ################################################
  public function fetch_churchplanner()
   {
        $data['session'] =  $this->ion_auth->session->userdata();
        $cdata = $this->planner->make_datatables();
        $this->data = array();
        foreach($cdata as $row)
        {
          $sub_array = array();
          $sub_array[] = $row->id;
          $sub_array[] = $row->pgrm_leader;
          $sub_array[] = $row->pgrm_title;
          $sub_array[] = $row->description;
          $sub_array[] = $row->venue;
          $sub_array[] = $row->duration;
          $sub_array[] = $row->pgrm_date;
          $sub_array[] = $row->created_at;
          $sub_array[] = ' <a name="updatechurchplanner" id="' . $row->id .'" class="update"><i class="fa fa-edit "></i></a>';
          $sub_array[] = ' <a name="deletechurchplanner" id="' . $row->id .'" class="delete" ><i class="fa fa-trash"></i></a>';
          $this->data[] = $sub_array;
         }
         $output = array(
           "recordsTotal"    =>  $this->planner->get_all_data(),
           "recordsFiltered"  => $this->planner->get_filtered_data(),
           "data"   => $this->data,
        );
        echo json_encode($output);
    }
################## Church Planner Edit#############################################
   public function churchplanner_edit()
    {
       $output = array();
       $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "not found" ;
       $result =$this->planner->editchurchplanner($user);
       foreach ($result as $row)
       {
          $output = array
          (
           'pgrm_leader'=> $row->pgrm_leader,
           'pgrm_title'=> $row->pgrm_title,
           'description'=> $row->description,
           'venue'=> $row->venue,
           'duration'=> $row->duration,
           'pgrm_date'=> $row->pgrm_date,
           'id'=> $row->id,
          );
       }
       echo json_encode($output);
    }
#######################Church Planner Update##################################################
  public function churchplanner_update()
   {
       $user_info = isset($_POST["save"] ) ? $_POST["save"] == 'Edit' : "Not found" ;
        if ($user_info)
        {
        $updated_data =array(
            'pgrm_leader' => $this->input->post('pgrm_leader'),
            'pgrm_title' => $this->input->post('pgrm_title'),
            'description' => $this->input->post('description'),
            'venue' => $this->input->post('venue'),
            'duration' => $this->input->post('duration'),
            'pgrm_date' => $this->input->post('pgrm_date'),
        );
         $user = $this->input->post("user_id");
         $result = $this->planner->updatechurchplanner($user, $updated_data);
         echo  'Row ID - '.'  '. $user.' ' .'Updated';
      }
      else
      {
        echo "save not found";
      }
   }
###################Church Planner Delete#################################################
   public function churchplanner_delete(){
      $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "not found" ;
      $result =$this->planner->delete_churchplanner($user);
      echo 'Data Deleted';
   }


  ##########################################################################################333
  //..............View Main Church Planner Page ..............................................

  public function churchwedding()
   {
      $data['user_info'] =$this->ion_auth->user()->row();
      $data['logo'] =  $this->ion_auth->get_logo();
      ################Process the Form##########################################
      //Process the form
      $id= null;
      $this->wedding->get_new();
      $rules = $this->wedding->rules;
      $this->form_validation->set_rules($rules);
      if($this->form_validation->run() == TRUE){
        $data = $this->wedding->array_from_post(array('licence_no','wedding_time','wedding_date','bride_name','bride_father','bride_mother','bride_witness','groom_name','groom_father','groom_mother','groom_witness','officiating_pastor','church'));
        $this->wedding->save($data, $id);
        redirect('Events/churchwedding');
      }
      $data['subview'] = 'events/churchwedding';
      $this->load->view('events/churchwedding', $data);
  }

    ###########################################################################################
############################## Church Wedding ################################################
  public function fetch_churchwedding()
   {
        $data['session'] =  $this->ion_auth->session->userdata();
        $cdata = $this->wedding->make_datatables();
        $this->data = array();
        foreach($cdata as $row)
        {
          $sub_array = array();
          $sub_array[] = $row->id;
          $sub_array[] = $row->licence_no;
          $sub_array[] = $row->wedding_date;
          $sub_array[] = $row->wedding_time;
          $sub_array[] = $row->bride_name;
          $sub_array[] = $row->bride_father;
          $sub_array[] = $row->bride_mother;
          $sub_array[] = $row->bride_witness;
          $sub_array[] = $row->groom_name;
          $sub_array[] = $row->groom_father;
          $sub_array[] = $row->groom_mother;
          $sub_array[] = $row->groom_witness;
          $sub_array[] = $row->church;
          $sub_array[] = $row->officiating_pastor;
          $sub_array[] = $row->created_at;
          $sub_array[] = ' <a name="updatewedding" id="' . $row->id .'" class="update"><i class="fa fa-edit "></i></a>';
          $sub_array[] = ' <a name="deletewedding" id="' . $row->id .'" class="delete" ><i class="fa fa-trash"></i></a>';
          $this->data[] = $sub_array;
         }
         $output = array(
           "recordsTotal"    =>  $this->wedding->get_all_data(),
           "recordsFiltered"  => $this->wedding->get_filtered_data(),
           "data"   => $this->data,
        );
        echo json_encode($output);
    }
################## Church Group Edit#############################################
   public function churchwedding_edit()
    {
       $output = array();
       $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "not found" ;
       $result =$this->wedding->editwedding($user);
       foreach ($result as $row)
       {
          $output = array
          (
           'licence_no'=> $row->licence_no,
           'wedding_date'=> $row->wedding_date,
           'bride_name'=> $row->bride_name,
           'bride_father'=> $row->bride_father,
           'bride_mother'=> $row->bride_mother,
           'wedding_time'=> $row->wedding_time,
           'bride_witness'=> $row->bride_witness,
           'groom_name'=> $row->groom_name,
           'groom_father'=> $row->groom_father,
           'groom_mother'=> $row->groom_mother,
           'groom_witness'=> $row->groom_witness,
           'church'=> $row->church,
           'officiating_pastor'=> $row->officiating_pastor,
           'id'=> $row->id,
          );
       }
       echo json_encode($output);
    }
#######################Group Update##################################################
  public function churchwedding_update()
   {
       $user_info = isset($_POST["save"] ) ? $_POST["save"] == 'Edit' : "Not found" ;
        if ($user_info)
        {
        $updated_data =array(
            'licence_no' => $this->input->post('licence_no'),
            'wedding_date' => $this->input->post('wedding_date'),
            'wedding_time' => $this->input->post('wedding_time'),
            'bride_name' => $this->input->post('bride_name'),
            'bride_father' => $this->input->post('bride_father'),
            'bride_mother' => $this->input->post('bride_mother'),
            'bride_witness' => $this->input->post('bride_witness'),
            'groom_name' => $this->input->post('groom_name'),
            'groom_father' => $this->input->post('groom_father'),
            'groom_mother' => $this->input->post('groom_mother'),
            'groom_witness' => $this->input->post('groom_witness'),
            'church' => $this->input->post('church'),
            'officiating_pastor' => $this->input->post('officiating_pastor')
        );
         $user = $this->input->post("user_id");
         $result = $this->wedding->updatewedding($user, $updated_data);
         echo  'Row ID - '.'  '. $user.' ' .'Updated';
      }
      else
      {
        echo "save not found";
      }
   }
###################Group Delete#################################################
   public function churchwedding_delete(){
      $user = isset($_POST["user_id"] ) ? $_POST["user_id"] : "not found" ;
      $result =$this->wedding->delete_wedding($user);
      echo 'Data Deleted';
   }



}


?>