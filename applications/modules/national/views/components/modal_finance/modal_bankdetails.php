<div class="container" >
     <div class="modal fade" id="myModal" role="dialog">
       <div class="modal-dialog modal-lg" style="margin-top:10%">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Registration Form (Add  A New Member) </h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="row">
                            <div class="col-lg-6">
                                         <div class="card card-body">
                                              <!--   <h5 class="">Bank Details</h5> -->
                                                <p>Set up Bank name and Bank type in Settings</p>
                                                <hr>
                                                <div class="row">
                                                    <div class="col-sm-12 col-xs-12">
                                                          <form id="bankdetailsform"  method="post">
                                                             <div class="form-row">
                                                                <div class="form-group col-md-6">
                                                                     <label for="inputEmail4" class="col-form-label">Bank Code</label>
                                                                    <?php echo form_dropdown('bankcode_id', $bankcode, '--Select Bankcode--', 'id="bankcode_id" class="form-control"'); ?>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                     <label for="inputEmail4" class="col-form-label">Bank Name</label>
                                                                    <?php echo form_dropdown('bankname_id', $bankname, '--Select Bank Name--', 'id="bankname_id" class="form-control"'); ?>
                                                                </div>

                                                            </div>
                                                            <div class="form-group">
                                                                 <label for="inputEmail4" class="col-form-label">Branch Name</label>
                                                                <?php echo form_input(['type' => 'text', 'name' => 'branchname', 'id' => 'branchname', 'class' => 'form-control','required' => 'required', 'value' => set_value('branchname')]);?>
                                                            </div>
                                                            <div class="form-row">
                                                                <div class="form-group col-md-6">
                                                                <label for="" class="col-form-label">Account #</label>
                                                                 <?php echo form_input(['type' => 'number', 'name' => 'accnt_no', 'id' => 'accnt_no', 'class' => 'form-control','required' => 'required', 'value' => set_value('accnt_no')]);?>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                <label for="inputEmail4" class="col-form-label">Accounts Type</label>
                                                                  <?php echo form_dropdown('accnttype_id', $banktype, '--Select Bank Type--', 'id="accnttype_id"
                                                                  class="form-control"'); ?>
                                                                </div>
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                            <div class="col-lg-6">
                                <div class="card">
                                    <div class="card-body">
                                       <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputEmail4" class="col-form-label">Currency</label>

                                                            <?php echo form_dropdown('currency', $currency, '--Select Currency--', 'id="currency"
                                                            class="form-control"'); ?>
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                                <label for="" class="col-form-label">Balance</label>
                                                             <?php echo form_input('balance',null,' class="form-control" placeholder="" id="balance"');?>
                                                        </div>

                                                        </div>
                                                         <div class="form-row">
                                                           <div class="form-group col-md-6">
                                                                <label for="" class="col-form-label">Email</label>
                                                             <?php echo form_input('email',null,' class="form-control" placeholder="" id="email" ');?>
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                            <label for="" class="col-form-label">Telephone</label>

                                                        <?php echo form_input(['type' => 'number', 'name' => 'tel', 'id' => 'tel', 'class' => 'form-control', 'value' => set_value('tel')]);?>
                                                        </div>
                                                    </div>
                                                   <div class="form-group ">
                                                     <label for="" class="col-form-label">Address</label>
                                                     <?php echo form_input('postal_address',null,' class="form-control" placeholder="" id="postal_address" ');?>
                                                </div>

                                            <input type="hidden"  name="user_id" id="user_id"  value="" />
                                            <input class="contact100-form-btn" type="submit" name="save" id="save"  value="Send Now"/>
                                                </div>
                                            </div>
                                        </div>

                                      </form>
                                    </div> <!-- end card-body -->
                                </div> <!-- end card-->

                            </div> <!-- end col -->
                    </div> <!-- end card-body -->
                </div> <!-- end card-->


                <div class="modal-footer">
                     <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>