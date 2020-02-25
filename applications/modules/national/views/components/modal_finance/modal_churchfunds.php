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
                               <!--  <h5 class="">Church Funds Details</h5> -->
                                <hr>
                                <div class="row">
                                    <div class="col-sm-12 col-xs-12">
                                          <form id="churchfundsform"  method="post">
                                              <div class="form-group">
                                             <label for="">Operational Date</label>
                                            <?php echo form_input(['type' => 'date', 'name' => 'operational_year', 'id' => 'operational_year', 'class' => 'form-control','required' => 'required', 'value' => set_value('year')]);?>
                                            </div>
                                            <div class="form-group">
                                             <label for="">Fund Typye</label>
                                             <?php  echo form_dropdown('fund_type_id', $fundtype, set_value('fund type'), 'id="fund_type_id" class="form-control"'); ?>
                                            </div>
                                             <div class="form-group">
                                                 <label for="">Member Name</label>
                                                <?php echo form_input('member_name',null,' class="form-control" placeholder="" id="member_name" required');?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        <div class="col-lg-6">
                            <div class="card">
                                <div class="card-body" >
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="" class="col-form-label">Amount</label>
                                          <?php echo form_input('amount',null,' class="form-control" placeholder="" id="amount" required');?>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="" class="col-form-label">Currency</label>
                                            <?php  echo form_dropdown('currency', $currency, set_value('currency'), 'id="currency" class="form-control"'); ?>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                     <label for="">Fund Description</label>
                                       <?php echo form_textarea([ 'name' => 'fund_description', 'id' => 'fund_description', 'class' => 'form-control','required' => 'required', 'value' => set_value('Fund Description')]);?>
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