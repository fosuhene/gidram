
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

                                    <div class="col-lg-6">
                                          <div class="card card-body">
                                            <h5 class=""> Branch Information</h5>
                                            <p> Please fill in the form. Thank you</p>
                                            <hr>
                                            <div class="row">
                                               <div class="col-sm-12 col-xs-12">
                                                    <?php echo validation_errors(); ?>
                                                      <?php echo form_open('Administration/churchbranch'); ?>
                                                      <div class="form-row ">
                                                       <div class="form-group col-md-6">
                                                            <label for="" class="col-form-label">Branch Name</label>
                                                          <?php echo form_input('branchname',null,' class="form-control" placeholder="" id="" required');?>
                                                        </div>
                                                       <div class="form-group col-md-6">
                                                         <label for="">Church Level</label>
                                                         <?php  echo form_dropdown('churchlevel_id', $level, set_value('-Select Church Level-'), 'id="" class="form-control"'); ?>
                                                        </div>
                                                      </div>
                                                      <div class="form-row">
                                                          <div class="form-group col-md-6">
                                                            <label for="inputPassword4" class="col-form-label">Country</label>
                                                          <?php  echo form_dropdown('country_id', $country, set_value('-Select Church Country-'), 'id="" class="form-control"'); ?>
                                                          </div>
                                                          <div class="form-group col-md-6">
                                                          <label for="inputEmail4" class="col-form-label">Region</label>
                                                           <?php  echo form_dropdown('region_id', $region, set_value('-Select Church Level-'), 'id="" class="form-control"'); ?>
                                                          </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="" class="col-form-label">City</label>
                                                         <?php echo form_input('city',null,' class="form-control" placeholder="" id="" required');?>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="" class="col-form-label">Phone</label>
                                                         <?php echo form_input('contact',null,' class="form-control" placeholder="" id="" required');?>
                                                        </div>
                                                        <div class="form-group">
                                                        <label for="" class="col-form-label">Email</label>
                                                        <?php echo form_input('email',null,' class="form-control" placeholder="email:someone@****.com" id="" required');?>
                                                        </div>
                                                     </div>
                                                </div>
                                            </div>
                                        </div>

                                         <div class="col-lg-6" style="margin-top: 6%">
                                            <div class="card card-body">
                                              <hr>
                                              <div class="">
                                                  <div class="form-group">
                                                        <label for="" class="col-form-label">Pastor's Name</label>
                                                     <?php echo form_input('pastor_name',null,' class="form-control" placeholder="" id="" required');?>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="" class="col-form-label">Address</label>
                                                     <?php echo form_input('address',null,' class="form-control" placeholder="" id="" required');?>
                                                    </div>
                                                     <div class="form-row">
                                                        <div class="form-group col-md-4">
                                                           <label for="" class="col-form-label">Found Date</label>
                                                        <?php echo form_input(['type' => 'date', 'name' => 'found_date', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                                        </div>
                                                        <div class="form-group col-md-4">
                                                          <label for="" class="col-form-label">Associate Pastors No.</label>
                                                         <?php echo form_input(['type' => 'number', 'name' => 'pastors_no', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                                        </div>
                                                        <div class="form-group col-md-4">
                                                          <label for="" class="col-form-label">Members Total</label>
                                                           <?php echo form_input(['type' => 'number', 'name' => 'members', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                                        </div>
                                                        <button type="submit" name="submit" class="btn btn-success successcolor"><i class="fa fa-save" style="font-size:18px"></i> Submit</button>
                                                      </div>
                                                      <?php  echo form_close();?>
                                                  </div>
                                              </div>
                                          </div>


                                            <div class="col-lg-12">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="table-responsive">
                                                            <hr>
                                                             <table  id="branchtable" class="table table-bordered table-striped">
                                                                <thead class="success-color successcolor" id="color" style="width:100%!important">
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

<?php $this->load->view('dashboard/components/dash_foot'); ?>\
<?php $this->load->view('components/ajax_administration/ajax_branchinfo'); ?>
<?php $this->load->view('components/modal_administration/modal_branchinfo'); ?>






