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
                             <!--    <h5 class="">Offering Details</h5> -->
                                <hr>
                                <div class="row">
                                    <div class="col-sm-12 col-xs-12">
                                      <form id="churchprojectform"  method="post">
                                         <div class="form-group">
                                           <label for="">Project Description</label>
                                           <?php echo form_textarea([ 'name' => 'proj_description', 'id' => 'proj_description', 'class' => 'form-control','required' => 'required', 'value' => set_value('Project Description')]);?>
                                          </div>
                                           <div class="form-row">
                                              <div class="form-group col-md-6">
                                                  <label for="" class="col-form-label">Actual Cost(&#x20b5;)</label>
                                                 <?php echo form_input(['type' => 'number', 'name' => 'actual_cost', 'id' => 'actual_cost', 'class' => 'form-control','required' => 'required', 'value' => set_value('actual cost')]);?>
                                              </div>
                                              <div class="form-group col-md-6">
                                                  <label for="" class="col-form-label">Estimated Cost(&#x20b5;)</label>
                                                  <?php echo form_input(['type' => 'number', 'name' => 'estimate_cost', 'id' => 'estimate_cost', 'class' => 'form-control','required' => 'required', 'value' => set_value('year')]);?>
                                              </div>
                                           </div>
                                            <div class="form-row">
                                              <div class="form-group col-md-6">
                                                  <label for="" class="col-form-label">Commence Date</label>
                                                 <?php echo form_input(['type' => 'date', 'name' => 'commence_date', 'id' => 'commence_date', 'class' => 'form-control','required' => 'required', 'value' => set_value('year')]);?>
                                              </div>
                                              <div class="form-group col-md-6">
                                                  <label for="" class="col-form-label">Completion Date</label>
                                                  <?php echo form_input(['type' => 'date', 'name' => 'completion_date', 'id' => 'completion_date', 'class' => 'form-control','required' => 'required', 'value' => set_value('year')]);?>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                </div>



                        <div class="col-lg-6">
                            <div class="card">
                                <div class="card-body" >
                                  <div class="form-group">
                                   <label for="" class="col-form-label">Project Leader</label>
                                   <?php echo form_input('leader',null,' class="form-control" placeholder="" id="leader" required');?>
                                </div>
                                <div class="form-group ">
                                    <label for="" class="col-form-label">Leader Address</label>
                                   <?php echo form_input('address',null,' class="form-control" placeholder="" id="address" required');?>
                                </div>
                                 <div class="form-group ">
                                    <label for="" class="col-form-label">Leader Telephone No.</label>
                                   <?php echo form_input('tel',null,' class="form-control" placeholder="" id="tel" required');?>
                                </div>
                                <div class="form-group">
                                 <label for="">Remarks</label>
                                <?php echo form_textarea([ 'name' => 'remarks', 'id' => 'remarks', 'class' => 'form-control','required' => 'required', 'value' => set_value('remarks')]);?>
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