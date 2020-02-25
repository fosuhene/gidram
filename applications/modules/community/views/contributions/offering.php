
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
                                        <div class="row" >
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

                                            <div class="col-lg-6"  id = "DivIdToPrint">
                                                <div class="card card-body">
                                                    <h5 class="">Offering Details</h5>
                                                    <!-- <p> Please fill in the  form. Thank you.</p> -->
                                                    <p>Set up offering type in Settings</p>
                                                    <hr>
                                                    <div class="row">
                                                        <div class="col-sm-12 col-xs-12">
                                                            <?php echo validation_errors(); ?>
                                                              <?php echo form_open('Contributions/offering'); ?>
                                                                 <div class="form-group">
                                                                 <label for="exampleInputEmail111">Offering Type</label>
                                                                 <?php  echo form_dropdown('offering_type', $offering, set_value('-Select Offering-'), 'id="" class="form-control"'); ?>
                                                                </div>
                                                                <div class="form-row">
                                                                <div class="form-group col-md-6">
                                                                    <label for="inputPassword4" class="col-form-label">Amount</label>
                                                                 <?php echo form_input('amount',null,' class="form-control" placeholder="" id="" required');?>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                <label for="inputEmail4" class="col-form-label">Currency</label>

                                                                <?php echo form_dropdown('currency', $currency, '--Select Currency--', 'class="form-control"'); ?>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="col-lg-6">
                                                <div class="card">
                                                    <div class="card-body" >
                                                        <div class="form-group ">
                                                             <label for="inputEmail4" class="col-form-label">Attendance(No.)</label>
                                                            <?php echo form_input(['type' => 'text', 'name' => 'attendance', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('attendance')]);?>
                                                        </div>
                                                        <div class="form-group">
                                                             <label for="inputEmail4" class="col-form-label">Remarks</label>
                                                            <?php echo form_textarea([ 'name' => 'remarks', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('Remarks')]);?>
                                                        </div>

                                                         <button type="submit" name="submit" class="btn btn-success successcolor"><i class="fa fa-save" style="font-size:18px"></i> Submit</button>
                                                        <?php  echo form_close();?>
                                                    </div> <!-- end card-body -->
                                                </div> <!-- end card-->

                                            </div> <!-- end col -->
                                            <div class="table-responsive">
                                            <hr>
                                             <table  id="offering_data" class="table table-bordered table-striped">
                                                <thead class="success-color" id="color" style="width:100%!important">
                                                 <tr >
                                                    <th >
                                                        #
                                                    </th>
                                                    <th >
                                                       Offering Type
                                                    </th>
                                                    <th >
                                                        Amount
                                                    </th>
                                                    <th >
                                                        Currency
                                                    </th>
                                                    <th >
                                                        Attendance(No)
                                                    </th>
                                                    <th>
                                                       Remarks
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
                                                      <td>Totals</td>
                                                      <td></td>
                                                      <td></td>
                                                      <td></td>
                                                      <td></td>
                                                    </tr>
                                                  </tfoot>
                                            </table>
                                            </div>
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
<?php $this->load->view('components/ajax_contributions/ajax_offering'); ?>
<?php $this->load->view('components/modal_contributions/offering_modal'); ?>



