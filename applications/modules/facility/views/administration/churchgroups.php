
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
                                                    <h5 class="">Church Groups Details</h5>
                                                    <p> Please fill in the  form. Thank you.</p>
                                                    <hr>
                                                    <div class="row">
                                                        <div class="col-sm-12 col-xs-12">
                                                            <?php echo validation_errors(); ?>
                                                              <?php echo form_open('Administration/churchgroups'); ?>
                                                                <div class="form-group">
                                                                    <label for="inputPassword4" class="col-form-label">Group Name</label>
                                                                    <?php echo form_input('group_name',null,' class="form-control" placeholder="" id="" required');?>
                                                                </div>
                                                                <div class="form-group">
                                                                    <label for="inputEmail4" class="col-form-label">Meeting Time</label>

                                                                       <?php echo form_input(['type' => 'time', 'name' => 'meeting_time', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('year')]);?>
                                                                </div>

                                                                <div class="form-group">
                                                                    <label for="inputEmail4" class="col-form-label">Meeting  Day</label>

                                                                      <select name="meeting_day" id="" class="form-control">
                                                                          <option value="#">--Select--</option>
                                                                          <option value="monday">Monday</option>
                                                                          <option value="tuesday">Tuesday</option>
                                                                          <option value="wednesday">Wednesday</option>
                                                                          <option value="thursday">Thursday</option>
                                                                          <option value="friday">Friday</option>
                                                                          <option value="saturday">Saturday</option>
                                                                          <option value="sunday">Sunday</option>
                                                                      </select>
                                                                </div>
                                                                <div class="form-group">
                                                                    <label for="inputEmail4" class="col-form-label">Total Members</label>

                                                                       <?php echo form_input(['type' => 'number', 'name' => 'member_no', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('year')]);?>
                                                                </div>

                                                                <div class="form-group">
                                                                    <label for="inputEmail4" class="col-form-label">Found Date</label>

                                                                       <?php echo form_input(['type' => 'date', 'name' => 'found_date', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('year')]);?>
                                                                </div>

                                                                <div class="form-group">
                                                                    <label for="inputEmail4" class="col-form-label">Description</label>

                                                                    <?php echo form_input('description',null,' class="form-control" placeholder="" id="" required');?>
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
                                                     <table  id="churchgroups_data" class="table table-bordered table-striped">
                                                        <thead class="success-color successcolor" id="color" style="width:100%!important">
                                                         <tr >
                                                            <th >
                                                                #
                                                            </th>
                                                            <th >
                                                              Group Name
                                                            </th>
                                                            <th >
                                                                Meeting Time
                                                            </th>
                                                            <th>
                                                                Meeting Day
                                                            </th>
                                                            <th>
                                                                Total Members
                                                            </th>
                                                            <th>
                                                                Established Date
                                                            </th>
                                                            <th >
                                                                Description
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
<?php $this->load->view('components/ajax_administration/ajax_churchgroups'); ?>
<?php $this->load->view('components/modal_administration/modal_churchgroups'); ?>



