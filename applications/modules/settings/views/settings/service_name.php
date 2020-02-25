
 <?php $this->load->view('dashboard/components/dash_head'); ?><!-- ############### Add Membership Details Page ################################################ -->
 <!-- Main Content Area -->
     <div class="ecaps-page-content">
        <div class="main-content">
            <div class="container-fluid">
              <div class="row">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="text-center"><i class="fa fa-cog"> &nbsp;</i>Settings</h3>
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
                                                    <h5 class="">Service Name Settings</h5>
                                                    <p> Please fill in the form. Thank you</p>
                                                    <hr>
                                                    <div class="row">
                                                        <div class="col-sm-12 col-xs-12">
                                                            <?php echo validation_errors(); ?>
                                                              <?php echo form_open('Settings/service_name'); ?>
                                                                 <div class="form-group ">
                                                                    <label for="" class="col-form-label">Service Name</label>
                                                                 <?php echo form_input('service_name',null,' class="form-control" placeholder="" id="" required');?>
                                                                </div>
                                                                <div class="form-group ">
                                                                    <label for="" class="col-form-label">Description</label>
                                                                    <?php echo form_textarea([ 'name' => 'description', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('description')]);?>
                                                                </div>
                                                               <button type="submit" name="submit" class="btn btn-success"style="background: #1dc9b7!important"><i class="fa fa-save" style="font-size:18px"></i>&nbsp;Submit</button>
                                                               <?php echo form_close() ?>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            <div class="col-lg-8">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="table-responsive">
                                                            <hr>
                                                             <table  id="servicename_data" class="table table-bordered table-striped">
                                                                <thead class="success-color" id="color" style="width:100%!important">
                                                                 <tr >
                                                                    <th>
                                                                        #
                                                                    </th>
                                                                    <th >
                                                                       Service Name
                                                                    </th>
                                                                    <th >
                                                                      Description
                                                                    </th>
                                                                    <th>
                                                                       Date Created
                                                                    </th>
                                                                    <th>
                                                                       Edit
                                                                    </th>
                                                                    <th>
                                                                      Delete
                                                                    </th>
                                                                </tr>
                                                                </thead>
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
<?php $this->load->view('components/ajax_settings/ajax_servicename'); ?>
<?php $this->load->view('components/modal_settings/modal_servicename'); ?>



