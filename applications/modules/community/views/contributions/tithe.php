
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
                            <h3 class="text-center"><i class="fa fa-inbox"> &nbsp;</i>Contributions</h3>
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
                                                    <h5 class="">Tithe Details</h5>
                                                    <p> Please fill in the  form. Thank you.</p>
                                                    <hr>
                                                    <div class="row">
                                                        <div class="col-sm-12 col-xs-12">
                                                            <?php echo validation_errors(); ?>
                                                              <?php echo form_open('Contributions/tithe'); ?>
                                                                <div class="form-row">
                                                                <div class="form-group col-md-6">
                                                                    <label for="inputPassword4" class="col-form-label">Name</label>
                                                                 <?php echo form_input('name',null,' class="form-control" placeholder="" id="" required');?>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                <label for="inputEmail4" class="col-form-label">Register No.</label>

                                                                <?php echo form_input('register_no',null,' class="form-control" placeholder="" id="" required');?>
                                                                </div>
                                                            </div>
                                                            <div class="form-row">
                                                                <div class="form-group col-md-6">
                                                                    <label for="inputPassword4" class="col-form-label">Year</label>
                                                                   <?php echo form_input(['type' => 'date', 'name' => 'year', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('year')]);?>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="inputEmail4" class="col-form-label">Amount</label>

                                                                    <?php echo form_input('amount',null,' class="form-control" placeholder="" id="" required');?>
                                                                </div>
                                                                <button type="submit" name="submit" class="btn btn-primary"><i class="fa fa-save" style="font-size:18px"></i> Submit</button>
                                                            </div>
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
                                                     <table  id="tithe_data" class="table table-bordered table-striped">
                                                        <thead class="bg-purple" id="color" style="width:100%!important">
                                                         <tr >
                                                            <th >
                                                                #
                                                            </th>
                                                            <th >
                                                              Name
                                                            </th>
                                                            <th >
                                                                Register No.
                                                            </th>
                                                            <th >
                                                                Year
                                                            </th>
                                                            <th >
                                                               Amount
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
                                                              <td>Totals</td>
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
<?php $this->load->view('components/ajax_contributions/ajax_tithe'); ?>
<?php $this->load->view('components/modal_contributions/tithe_modal'); ?>



