
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

                                            <div class="col-lg-6">
                                                <div class="card card-body">
                                                    <h5 class="">Pledge Details</h5>
                                                    <p> Please fill in the form. Thank you</p>
                                                    <hr>
                                                    <div class="row">
                                                        <div class="col-sm-12 col-xs-12">
                                                            <?php echo validation_errors(); ?>
                                                              <?php echo form_open('Contributions/pledge_insert'); ?>
                                                                <div class="form-group">
                                                                    <label for="exampleInputEmail111">Full Name</label>
                                                                    <input type="text" name="name" class="form-control" id="exampleInputEmail111" placeholder="" required>
                                                                </div>
                                                                <div class="form-group">
                                                                    <label for="exampleInputEmail12">Postal Address</label>
                                                                    <input type="text" class="form-control" id="exampleInputEmail12" name="address" placeholder="">
                                                                </div>
                                                                <div class="form-group">
                                                                    <label for="exampleInputPassword11">Telephone</label>
                                                                    <input type="text" class="form-control" id="exampleInputPassword11" name="tel" placeholder="">
                                                                </div>
                                                                <div class="form-group">
                                                                    <label for="exampleInputPassword12">Pledge Date</label>
                                                                    <input type="date" class="form-control" id="exampleInputPassword12" name="pledge_date" placeholder="">
                                                                </div>
                                                                 <div class="form-row">
                                                                    <div class="form-group col-md-6">
                                                                         <label for="inputEmail4" class="col-form-label">Pledge Amount</label>
                                                                        <input type="text" class="form-control" name="pledge_amt" id="pledgeamt" placeholder="" required>
                                                                    </div>
                                                                    <div class="form-group col-md-6">
                                                                        <label for="inputEmail4" class="col-form-label">Amount Paid</label>
                                                                        <input type="text" class="form-control" name="amt_paid" id="amountpaid" placeholder="" required>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            <div class="col-lg-6">
                                                <div class="card">
                                                    <div class="card-body">
                                                            <div class="form-group ">
                                                                <label for="inputEmail4" class="col-form-label">Remaining Balance</label>
                                                                <input type="text" class="form-control" name="balance" id="bal" value="" readonly="readonly" >
                                                            </div>


                                                            <div class="form-row">
                                                                <div class="form-group col-md-6">
                                                                    <label for="inputEmail4" class="col-form-label">Currency</label>
                                                                     <select class="form-control" id="exampleInputEmail12" name="currency">
                                                                        <option value="">--Select Currency--</option>
                                                                        <?php echo $currency ?>
                                                                    </select>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="inputPassword4" class="col-form-label">Payment Date</label>
                                                                    <input type="date" class="form-control" id="inputPassword4" name="payment_date" placeholder="">
                                                                </div>
                                                            </div>

                                                            <div class="form-group">
                                                                <label for="">Description</label>
                                                                 <?php echo form_textarea([ 'name' => 'description', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('Description')]);?>
                                                            </div>

                                                            <button type="submit" name="submit" class="btn btn-primary"><i class="fa fa-save" style="font-size:18px"></i> Submit</button>
                                                        <?php  echo form_close();?>
                                                    </div> <!-- end card-body -->
                                                </div> <!-- end card-->

                                            </div> <!-- end col -->
                                            <div class="table-responsive">
                                            <hr>
                                             <table  id="pledge_data" class="table table-bordered table-striped">
                                                <thead class="bg-purple" id="color" style="width:100%!important">
                                                 <tr >
                                                    <th >
                                                        #
                                                    </th>
                                                    <th >
                                                       Full Name
                                                    </th>
                                                    <th >
                                                        Address
                                                    </th>
                                                    <th >
                                                        Telephone
                                                    </th>
                                                    <th>
                                                        Description
                                                    </th>
                                                      <th >
                                                       Pledge Amount
                                                    </th>
                                                    <th >
                                                        Amount Paid
                                                    </th>
                                                    <th >
                                                        Pledge Date
                                                    </th>
                                                    <th>
                                                        Payment Date
                                                    </th>
                                                      <th >
                                                        Balance
                                                    </th>
                                                    <th>
                                                        Currency
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
<?php $this->load->view('components/ajax_contributions/ajax_pledge'); ?>
<?php $this->load->view('components/modal_contributions/pledge_modal'); ?>
<?php $this->load->view('components/ajax_contributions/ajax_cal'); ?>



