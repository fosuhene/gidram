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
                                <hr>
                                <div class="row">
                                    <div class="col-sm-12 col-xs-12">
                                      <form id="churchloansform"  method="post">
                                         <div class="form-group ">
                                            <label for="" class="col-form-label">Recipient Name</label>
                                           <?php echo form_input('recipient_name',null,' class="form-control" placeholder="" id="recipient_name" required');?>
                                        </div>
                                        <div class="form-group ">
                                            <label for="" class="col-form-label">Recipient Organization</label>
                                           <?php echo form_input('organization',null,' class="form-control" placeholder="" id="organization" ');?>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="" class="col-form-label">Recipient Tel. No</label>
                                               <?php echo form_input(['type' => 'text', 'name' => 're_tel', 'id' => 're_tel', 'class' => 'form-control','required' => 'required', 'value' => set_value('actual cost')]);?>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="" class="col-form-label">Recipient Email</label>
                                                <?php echo form_input(['type' => 'email', 'name' => 're_email', 'id' => 're_email', 'class' => 'form-control','required' => 'required', 'value' => set_value('year')]);?>
                                            </div>
                                         </div>
                                        <div class="form-group ">
                                            <label for="" class="col-form-label">Recipient Address</label>
                                           <?php echo form_input('re_address',null,' class="form-control" placeholder="" id="re_address" required');?>
                                        </div>
                                        <div class="form-group">
                                         <label for="">Purpose</label>
                                         <?php echo form_textarea([ 'name' => 'purpose', 'id' => 'purpose', 'class' => 'form-control','required' => 'required', 'value' => set_value('Project Description')]);?>
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
                                            <label for="" class="col-form-label">Issue Date</label>
                                           <?php echo form_input(['type' => 'date', 'name' => 'issue_date', 'id' => 'issue_date', 'class' => 'form-control','required' => 'required', 'value' => set_value('actual cost')]);?>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="" class="col-form-label">Expiry Date</label>
                                            <?php echo form_input(['type' => 'date', 'name' => 'expiry_date', 'id' => 'expiry_date', 'class' => 'form-control','required' => 'required', 'value' => set_value('year')]);?>
                                        </div>
                                     </div>
                                      <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="" class="col-form-label">Principal Amount(&#x20b5;)</label>
                                           <?php echo form_input(['type' => 'text', 'name' => 'principal_amt', 'id' => 'principal_amt', 'class' => 'form-control','required' => 'required', 'value' => set_value('year')]);?>
                                        </div>
                                        <div class="form-group col-md-6">
                                              <label for="" class="col-form-label">Interest Rate(%)</label>
                                             <?php echo form_input(['type' => 'text', 'name' => 'interest_rate', 'id' => 'interest_rate', 'class' => 'form-control','required' => 'required', 'value' => set_value('actual cost')]);?>
                                          </div>
                                      </div>
                                      <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="" class="col-form-label">Total Loan Amount(&#x20b5;)</label>
                                            <?php echo form_input(['type' => 'text', 'name' => 'loan_amt', 'id' => 'loan_amt', 'class' => 'form-control','readonly' => 'readonly','required' => 'required', 'value' => set_value('year')]);?>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="" class="col-form-label">Loan Balance(&#x20b5;)</label>
                                            <?php echo form_input(['type' => 'text', 'name' => 'loan_balance', 'id' => 'loan_balance', 'class' => 'form-control','required' => 'required', 'value' => set_value('year')]);?>
                                        </div>
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