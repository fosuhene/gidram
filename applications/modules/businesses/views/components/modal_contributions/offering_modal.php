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
                               <!--  <h5 class="">Offering Details</h5> -->
                                <hr>
                                <div class="row">
                                    <div class="col-sm-12 col-xs-12">
                                          <form id="offeringform"  method="post">
                                            <div class="form-group">
                                             <label for="exampleInputEmail111">Offering Type</label>
                                             <?php  echo form_dropdown('offering_type', $offering, set_value('-Select Offering-'), 'id="offering_type" class="form-control"'); ?>
                                            </div>
                                            <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="inputPassword4" class="col-form-label">Amount</label>
                                                <?php echo form_input(['type' => 'number', 'name' => 'amount', 'id' => 'amount', 'class' => 'form-control', 'value' => set_value('amount')]);?>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail4" class="col-form-label">Currency</label>
                                               <?php  echo form_dropdown('currency', $currency, set_value('currency'), 'id="currency" class="form-control"'); ?>
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        <div class="col-lg-6">
                            <div class="card">
                                <div class="card-body" >
                                    <div class="form-group col-md-9">
                                         <label for="inputEmail4" class="col-form-label">Attendance(No.)</label>
                                        <?php echo form_input(['type' => 'text', 'name' => 'attendance', 'id' => 'attendance', 'class' => 'form-control','required' => 'required', 'value' => set_value('attendance')]);?>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail4" class="col-form-label">Remarks</label>
                                        <?php echo form_textarea([ 'name' => 'remarks', 'id' => 'remarks', 'class' => 'form-control','required' => 'required', 'value' => set_value('Remarks')]);?>
                                    </div>

                                     <?php echo form_input(['type' => 'hidden', 'name' => 'user_id', 'id' => 'user_id',  'value' => set_value('user_id')]);?>
                                       <?php echo form_input(['type' => 'submit', 'name' => 'save', 'id' => 'save', 'class' => 'contact100-form-btn','required' => 'required', 'value' => set_value('Send Now')]);?>
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