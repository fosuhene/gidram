
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
                            <h3 class="text-center"><i class="fa fa-bank"> &nbsp;</i>Administration</h3>
                            <hr>
                            <div class="tab-content">
                               <!--  ################ Personal Information################## -->
                                <div class="tab-pane show active" id="home1">
                                    <p class="mb-0">
                                        <div class="row">
                                            <div class="col-lg-12">
                                            <p style="float:right"><a href="#" class="btn"><i class="ti-import"></i> Import  <input type="file"></a>
                                            <a href="#" class="btn"><i class="fa fa-print"></i> Print</a>
                                            </p>
                                            </div>

                                            <div class="col-lg-4">
                                                <div class="card card-body">
                                                    <h5 class="">Sunday School Attendance</h5>
                                                    <p> Please fill in the  form. Thank you.</p>
                                                    <hr>
                                                    <div class="row">
                                                        <div class="col-sm-12 col-xs-12">
                                                            <?php echo validation_errors(); ?>
                                                              <?php echo form_open('Administration/sschool'); ?>
                                                            <div class="form-group">
                                                                <label for="inputEmail4" class="col-form-label">Date</label>
                                                                <?php echo form_input(['type' => 'date', 'name' => 'date', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="inputPassword4" class="col-form-label">Group Name</label>
                                                                <?php echo form_input(['type' => 'text', 'name' => 'group_name', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="inputEmail4" class="col-form-label">Officer in Charge</label>
                                                                <?php echo form_input(['type' => 'text', 'name' => 'officer', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="inputEmail4" class="col-form-label">Assistant Officer</label>
                                                                <?php echo form_input('officer_assistant',null,' class="form-control" placeholder="" id="" required');?>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="inputEmail4" class="col-form-label">Attendance</label>
                                                                <?php echo form_input(['type' => 'number', 'name' => 'attendance', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                                            </div>

                                                            <button type="submit" name="submit" class="btn btn-success successcolor"><i class="fa fa-save" style="font-size:18px"></i> Submit</button>
                                                           <?php  echo form_close();?>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="col-lg-8">
                                                <div class="card">
                                                  <div class="card-body" >
                                                    <div class="table-responsive">
                                                    <hr>
                                                     <table  id="sschool_data" class="table table-bordered table-striped">
                                                        <thead class="success-color" id="color" style="width:100%!important">
                                                         <tr >
                                                            <th>
                                                                #
                                                            </th>
                                                            <th >
                                                             Group Name
                                                            </th>
                                                            <th >
                                                               Officer
                                                            </th>
                                                            <th >
                                                               Officer Assistant
                                                            </th>
                                                            <th>
                                                               Attendance
                                                            </th>
                                                            <th>
                                                                Date Created
                                                            </th>
                                                            <th>
                                                                Date Updated
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

    <?php $this->load->view('dashboard/components/dash_foot'); ?>
    <?php $this->load->view('components/ajax_administration/ajax_sschool'); ?>
    <?php $this->load->view('components/modal_administration/modal_sschool'); ?>



