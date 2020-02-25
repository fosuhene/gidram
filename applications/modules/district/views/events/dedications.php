
 <?php $this->load->view('dashboard/components/dash_head'); ?>
<!-- ############### Add Membership Details Page ################################################ -->
 <!-- Main Content Area -->
     <div class="ecaps-page-content">
        <div class="main-content">
            <div class="container-fluid">
              <div class="row">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="text-center"><i class="fa fa-sitemap"> &nbsp;</i>Events</h3>
                            <hr>
                            <div class="tab-content">
                               <!--  ################ Personal Information################## -->
                                <div class="tab-pane show active" id="home1">
                                <p class="mb-0">
                                  <div class="row">
                                      <div class="col-lg-12"  style="float:right!important">
                                            <form action="<?php echo base_url();?>visitornewconvent/uploadchurchnewconvent" method="post" enctype="multipart/form-data" >
                                                <a><strong>UPLOAD EXCEL FILE:</strong></a>
                                                <a> <input type="file" name="uploadFile" value=""   />
                                                <button class ="btn btn-success successcolor" type="submit" name="submit"><i class="ti-import"></i> Import</button>
                                                </a>
                                                <a href="#" class="">
                                                <button class="btn btn-success successcolor"  id='btn' value='Print' onclick='printDiv();' ><i class="fa fa-print"></i> Print </button>
                                                </a>
                                                <hr/>
                                            </form>
                                        </div>

                                      <div class="col-lg-6">
                                          <div class="card card-body">
                                            <h5 class="">Dedications Details</h5>
                                            <p>Kindly fill in the form.Thank you.</p>
                                            <hr>
                                            <div class="row">
                                               <div class="col-sm-12 col-xs-12">
                                                    <?php echo validation_errors(); ?>
                                                     <?php echo form_open('Events/dedications'); ?>
                                                      <div class="form-row ">
                                                         <div class="form-group col-md-6">
                                                           <label for="">Child Name</label>
                                                           <?php echo form_input(['type' => 'text', 'name' => 'child_name', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                                          </div>

                                                          <div class="form-group col-md-6">
                                                            <label for="" class="col-form-label">Gender</label>
                                                            <select id="" name="gender" class="form-control">
                                                                <option value="#">--Select-----</option>
                                                                <option value="male">Male</option>
                                                                <option value="female">Female</option>
                                                            </select>
                                                        </div>
                                                      </div>

                                                        <div class="form-row">
                                                          <div class="form-group col-md-6">
                                                             <label for="" class="col-form-label">Place of Birth</label>
                                                           <?php echo form_input('pob',null,' class="form-control" placeholder="" id="" required');?>
                                                          </div>
                                                          <div class="form-group col-md-6">
                                                           <label for="">Date of Birth</label>
                                                           <?php echo form_input(['type' => 'date', 'name' => 'dob', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                                          </div>
                                                        </div>

                                                          <div class="form-group">
                                                            <label for="" class="col-form-label">Day of Birth</label>
                                                            <?php echo form_input(['type' => 'text', 'name' => 'daybirth', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                                          </div>
                                                     </div>
                                                </div>
                                            </div>
                                        </div>

                                         <div class="col-lg-6" style="margin-top:">
                                            <div class="card card-body">
                                              <hr>
                                              <div class="row">
                                                 <div class="col-sm-12 col-xs-12">
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                          <label for="" class="col-form-label">Father's Name</label>
                                                          <?php echo form_input(['type' => 'text', 'name' => 'fathers_name', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                        <label for="" class="col-form-label">Mother's Name</label>
                                                          <?php echo form_input(['type' => 'text', 'name' => 'mothers_name', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                                        </div>
                                                      </div>
                                                      <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                          <label for="" class="col-form-label">Dedication Date</label>
                                                          <?php echo form_input(['type' => 'date', 'name' => 'dedication_date', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                        <label for="" class="col-form-label">Dedication Place</label>
                                                          <?php echo form_input(['type' => 'text', 'name' => 'dedication_place', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                                        </div>
                                                      </div>

                                                      <div class="form-group">
                                                          <label for="" class="col-form-label">Church Name</label>
                                                       <?php echo form_input('church_name',null,' class="form-control" placeholder="" id="" required');?>
                                                      </div>
                                                      <div class="form-group">
                                                          <label for="" class="col-form-label">Officiating Minister</label>
                                                       <?php echo form_input('officiating_minister',null,' class="form-control" placeholder="" id="" required');?>
                                                      </div>
                                                      <button type="submit" name="submit" class="btn btn-success successcolor"><i class="fa fa-save" style="font-size:18px"></i> Submit</button>
                                                        <?php  echo form_close();?>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>

                                            <div class="col-lg-12">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="table-responsive">
                                                            <hr>
                                                             <table  id="dedications_data" class="table table-bordered table-striped">
                                                                <thead class="success-color" id="color" style="width:100%!important">
                                                                 <tr >
                                                                    <th>
                                                                        #
                                                                    </th>
                                                                    <th>
                                                                     Name
                                                                    </th>
                                                                    <th>
                                                                      Gender
                                                                    </th>
                                                                    <th >
                                                                     Place of Birth
                                                                    </th>
                                                                    <th >
                                                                      Date of Birth
                                                                    </th>
                                                                    <th>
                                                                      Day of Birth
                                                                    </th>
                                                                    <th >
                                                                      Father's Name
                                                                    </th>
                                                                     <th>
                                                                       Mother's Name
                                                                    </th>
                                                                    <th>
                                                                     Dedication Date
                                                                    </th>
                                                                     <th>
                                                                      Dedication Place
                                                                    </th>
                                                                    <th>
                                                                      Church Name
                                                                    </th>
                                                                    <th>
                                                                      Officiating Priest
                                                                    </th>

                                                                    <th>
                                                                      Created At
                                                                    </th>
                                                                    <th>
                                                                       Edit
                                                                    </th>
                                                                    <th>
                                                                      Delete
                                                                    </th>
                                                                </tr>
                                                                </thead>
                                                                <tfoot>
                                                                  <tr>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                </tfoot>
                                                            </table>
                                                            </div>
                                                     </div> <!-- end card-body -->
                                                </div> <!-- end card-->

                                            </div> <!-- end col -->
                                        </div>
                                     <!-- end row -->
                                </div>
                          </div>
                      </div> <!-- end card-->
                  </div> <!-- end col -->
              </div>
              <!-- end row -->
          </div>
      </div>
  <!--  </div> -->

  <?php $this->load->view('dashboard/components/dash_foot'); ?>s
  <?php $this->load->view('components/ajax_events/ajax_dedications'); ?>
  <?php $this->load->view('components/modal_events/modal_dedications'); ?>






