
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
                                    <p style="float:right"><a href="#" class="btn"><i class="ti-import"></i><button class="btn btn-default">Import </button> <input type="file"></a>
                                    <a href="#" class="btn"><i class="fa fa-print"></i> Print</a>
                                    </p>
                                    </div>

                                    <div class="col-lg-9">
                                          <div class="card card-body">
                                            <h5 class=""> Church Service</h5>
                                            <p> Please fill in the form. Thank you</p>
                                            <hr>
                                            <div class="row">
                                               <div class="col-sm-12 col-xs-12">
                                                    <?php echo validation_errors(); ?>
                                                      <?php echo form_open('Administration/churchservice'); ?>
                                                      <div class="form-row ">
                                                       <div class="form-group col-md-6">
                                                          <label for=""><strong>OFFICIATING</strong></label>
                                                           <hr>
                                                            <label for="" class="col-form-label">MC</label>
                                                          <?php echo form_input('mc',null,' class="form-control" placeholder="" id="" ');?>

                                                           <label for="" class="col-form-label">Minister Present</label>
                                                          <?php echo form_input('minister',null,' class="form-control" placeholder="" id="" ');?>

                                                           <label for="" class="col-form-label">Hymn No.</label>
                                                          <?php echo form_input('hymn_no',null,' class="form-control" placeholder="" id="" ');?>
                                                        </div>
                                                       <div class="form-group col-md-6">
                                                          <label for="">Bible Readers / Lessons</label>
                                                          <?php echo form_textarea([ 'name' => 'bible_lessons', 'id' => 'cost_areas','data-key' => 'cost_areas', 'data-label' => 'Cost Areas','class' => 'form-control']);?>
                                                        </div>
                                                      </div>
                                                    <!--   ##############Sermon####################### -->
                                                       <label for=""><strong>SERMON</strong></label>
                                                            <hr>
                                                      <div class="form-row">
                                                          <div class="form-group col-md-6">
                                                            <label for="" class="col-form-label">Sermon/ Preacher</label>
                                                          <?php echo form_input('sermon',null,' class="form-control" placeholder="" id=""');?>

                                                           <label for="" class="col-form-label">Theme</label>
                                                          <?php echo form_input('theme',null,' class="form-control" placeholder="" id="" ');?>
                                                          </div>
                                                          <div class="form-group col-md-6">
                                                            <label for=""> Bible References </label>
                                                          <?php echo form_textarea([ 'name' => 'bible_ref', 'id' => 'cost_areas','data-key' => 'cost_areas','height' => '60', 'data-label' => 'Cost Areas','class' => 'form-control']);?>
                                                          </div>
                                                        </div>

                                                         <hr>
                                                      <!--  ################All offerings for a particular church service################ -->
                                                      <div class="form-row">
                                                          <div class="form-group col-md-3">
                                                            <label for="" class="col-form-label">Thanksgiving/ Offering</label>
                                                          <?php echo form_input('thanksgiving',null,' class="form-control" placeholder="0" id="" null');?>

                                                           <label for="" class="col-form-label">Silver Offering</label>
                                                          <?php echo form_input('silver_offering',null,' class="form-control" placeholder="0" id="" null');?>
                                                          </div>

                                                           <div class="form-group col-md-3">
                                                            <label for="" class="col-form-label">Tithe</label>
                                                          <?php echo form_input('tithe',null,' class="form-control" placeholder="0" id="" null');?>

                                                           <label for="" class="col-form-label">Other Funds</label>
                                                          <?php echo form_input('branchname',null,' class="form-control" placeholder="0" id="" null');?>
                                                          </div>


                                                          <div class="form-group col-md-3">
                                                            <label for="" class="col-form-label">other Days</label>
                                                          <?php echo form_input('other_days',null,' class="form-control" placeholder="0" id="" null');?>

                                                           <label for="" class="col-form-label">Donation</label>
                                                          <?php echo form_input('donation',null,' class="form-control" placeholder="0" id="" null');?>
                                                          </div>

                                                           <div class="form-group col-md-3">
                                                            <label for="" class="col-form-label">Sunday School</label>
                                                          <?php echo form_input('sschool',null,' class="form-control" placeholder="0" id="" null');?>

                                                           <label for="" class="col-form-label">Total</label>
                                                           <?php echo form_input('total',null,' class="form-control" placeholder="0" id="" style="background: " null');?>
                                                          </div>
                                                        </div>

                                                        <hr>

                                                   <!-- #############Member Count Total###########
                                                        ########################################### -->
                                                       <div class="form-row">
                                                          <div class="form-group col-md-3">
                                                            <label for="" class="col-form-label"><strong>MEMBERS </strong></label>
                                                            <br>
                                                            <label for="" class="col-form-label">Male</label>
                                                           <?php echo form_input('member_male',null,' class="form-control" placeholder="0" id="0" null');?>

                                                           <label for="" class="col-form-label">Female</label>
                                                           <?php echo form_input('member_female',null,' class="form-control" placeholder="0" id="0" null');?>

                                                          <label for="" class="col-form-label">Children</label>
                                                          <?php echo form_input('member_children',null,' class="form-control" placeholder="0" id="0" null');?>

                                                          <label for="" class="col-form-label">Total</label>
                                                          <?php echo form_input('branchname',null,' class="form-control" placeholder="0" id="" null');?>
                                                          </div>

                                                           <div class="form-group col-md-3">
                                                              <label for="" class="col-form-label"><strong>VISITORS </strong></label>
                                                              <br>
                                                              <label for="" class="col-form-label">Male</label>
                                                              <?php echo form_input('visitor_male',null,' class="form-control" placeholder="0" id="" null');?>

                                                              <label for="" class="col-form-label">Female</label>
                                                              <?php echo form_input('visitor_female',null,' class="form-control" placeholder="0" id="" null');?>

                                                              <label for="" class="col-form-label">Children</label>
                                                              <?php echo form_input('visitor_children',null,' class="form-control" placeholder="0" id="" null');?>

                                                              <label for="" class="col-form-label">total</label>
                                                              <?php echo form_input('visitor_total',null,' class="form-control" placeholder="0" id="" null');?>
                                                          </div>


                                                          <div class="form-group col-md-3" style="margin-top:4%">
                                                              <label for="" class="col-form-label">C_Total</label>
                                                            <?php echo form_input('c_total',null,' class="form-control" placeholder="0" id="" null');?>

                                                             <label for="" class="col-form-label">T_Adults</label>
                                                            <?php echo form_input('t_adults',null,' class="form-control" placeholder="0" id="" null');?>

                                                            <label for="" class="col-form-label">Attendance</label>
                                                            <?php echo form_input('attendance',null,' class="form-control" placeholder="0" id="" null');?>
                                                          </div>

                                                           <div class="form-group col-md-3" style="margin-top:4%">
                                                              <div class="form-group">
                                                                <label for=""> Remarks </label>
                                                              <?php echo form_textarea([ 'name' => 'remarks', 'id' => 'cost_areas','data-key' => 'cost_areas','height' => '50', 'data-label' => 'Cost Areas','class' => 'form-control']);?>
                                                               </div>
                                                          </div>
                                                        </div>
                                                     </div>
                                                </div>
                                            </div>
                                        </div>

                                         <div class="col-lg-3" >
                                            <div class="card card-body">
                                              <hr>
                                              <div class="">
                                                  <div class="form-group">
                                                      <label for="" class="col-form-label">Service Date</label>
                                                       <?php echo form_input(['type' => 'date', 'name' => 'service_date', 'id' => '', 'class' => 'form-control','null' => 'null', 'value' => set_value('')]);?>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="" class="col-form-label">Assembly</label>
                                                       <?php echo form_input(['type' => 'date', 'name' => 'assembly', 'id' => '', 'class' => 'form-control','null' => 'null', 'value' => set_value('')]);?>
                                                    </div>
                                                    <hr>
                                                    <label for="" class="col-form-label"><label><strong>SERVICE SETTING</strong></label>
                                                    <div class="form-group">
                                                        <label for="" class="col-form-label">Service</label>
                                                     <?php echo form_input('address',null,' class="form-control" placeholder="" id="" null');?>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="" class="col-form-label">Purpose</label>
                                                     <?php echo form_input('purpose',null,' class="form-control" placeholder="" id="" null');?>
                                                    </div>
                                                     <div class="form-group">
                                                        <label for="" class="col-form-label">Communion(No. of Attendance)</label>
                                                     <?php echo form_input('communion',null,' class="form-control" placeholder="" id="" null');?>
                                                    </div>
                                                     <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                           <label for="" class="col-form-label">Start Date</label>
                                                        <?php echo form_input(['type' => 'date', 'name' => 'start_date', 'id' => '', 'class' => 'form-control','null' => 'null', 'value' => set_value('')]);?>
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                          <label for="" class="col-form-label">End Date</label>
                                                         <?php echo form_input(['type' => 'date', 'name' => 'end_start', 'id' => '', 'class' => 'form-control','null' => 'null', 'value' => set_value('')]);?>
                                                        </div>
                                                        <button type="submit" name="submit" class="btn btn-primary" style="font-size:18px;width:180px"><i class="fa fa-save"></i> Submit</button>
                                                      </div>
                                                      <?php  echo form_close();?>
                                                  </div>
                                              </div>
                                          </div>


                                      <div class="col-lg-12">
                                        <div class="card">
                                          <div class="card-body">
                                             <div class="main-card mb-3 card">
                                                <h2>View Details</h2>
                                                <div class="tab">
                                                    <button class="tablinks" onclick="openCity(event, 'London')">Church Service</button>
                                                    <button class="tablinks" onclick="openCity(event, 'Paris')">Service Offering</button>
                                                    <button class="tablinks" onclick="openCity(event, 'Tokyo')">Service Member Count</button>
                                                </div>

                                          <!-- Tab content -->
                                          <div id="London" class="tabcontent">
                                            <h3>Church Service</h3>
                                              <table  id="branchtable" class="table table-bordered table-striped">
                                            <thead class="bg-purple" id="color" style="width:100%!important">
                                             <tr >
                                                <th>
                                                    #
                                                </th>
                                                <th>
                                                  Branch Name
                                                </th>
                                                <th >
                                                 Church Level
                                                </th>
                                                <th >
                                                    Country
                                                </th>
                                                <th >
                                                    Region
                                                </th>
                                                 <th>
                                                   City
                                                </th>
                                                <th>
                                                   Phone
                                                </th>
                                                 <th>
                                                   Address
                                                </th>
                                                <th>
                                                  Email
                                                </th>
                                                <th>
                                                  Found Date
                                                </th>
                                                <th>
                                                  Pastor Name
                                                </th>
                                                <th>
                                                  Pastor's No.
                                                </th>
                                                 <th>
                                                  Members No.
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
                                            </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                    <div id="Paris" class="tabcontent">
                                      <h3>Service Offering</h3>
                                      <p>Service details</p>
                                    </div>

                                    <div id="Tokyo" class="tabcontent">
                                      <h3>Service Member Count</h3>
                                      <p>Service member details.</p>
                                    </div>
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
<?php $this->load->view('components/ajax_administration/ajax_churchservice'); ?>
<?php $this->load->view('components/modal_administration/modal_branchinfo'); ?>






