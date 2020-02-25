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
                                       <form id="churchweddingform"  method="post">
                                        <div class="form-group">
                                           <label for="">Licence No.</label>
                                           <?php echo form_input(['type' => 'number', 'name' => 'licence_no', 'id' => 'licence_no', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                      </div>
                                      <div class="form-row ">
                                         <div class="form-group col-md-6">
                                           <label for="">Wedding Time</label>
                                           <?php echo form_input(['type' => 'time', 'name' => 'wedding_time', 'id' => 'wedding_time', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                          </div>

                                          <div class="form-group col-md-6">
                                            <label for="" class="col-form-label">Wedding Date</label>
                                           <?php echo form_input(['type' => 'date', 'name' => 'wedding_date', 'id' => 'wedding_date', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                        </div>
                                      </div>

                                      <hr>
                                      <h6>Bride Details</h6>

                                      <div class="form-group">
                                           <label for="">Bride Name</label>
                                           <?php echo form_input(['type' => 'text', 'name' => 'bride_name', 'id' => 'bride_name', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                      </div>

                                        <div class="form-row">
                                          <div class="form-group col-md-6">
                                             <label for="" class="col-form-label">Bride Father's Name</label>
                                           <?php echo form_input('bride_father',null,' class="form-control" placeholder="" id="bride_father" required');?>
                                          </div>
                                          <div class="form-group col-md-6">
                                           <label for="">Bride Mother's Name</label>
                                           <?php echo form_input(['type' => 'text', 'name' => 'bride_mother', 'id' => 'bride_mother', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                          </div>
                                        </div>

                                          <div class="form-group">
                                            <label for="" class="col-form-label">Bride Witness(es)</label>
                                            <?php echo form_input(['type' => 'text', 'name' => 'bride_witness', 'id' => 'bride_witness', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        <div class="col-lg-6">
                            <div class="card">
                                <div class="card-body" >
                                       <h6>Groom Details</h6>
                                        <div class="form-group">
                                            <label for="" class="col-form-label">Groom Name</label>
                                         <?php echo form_input('groom_name',null,' class="form-control" placeholder="" id="groom_name" required');?>
                                        </div>
                                      <div class="form-row">
                                          <div class="form-group col-md-6">
                                            <label for="" class="col-form-label">Groom Father's Name</label>
                                            <?php echo form_input(['type' => 'text', 'name' => 'groom_father', 'id' => 'groom_father', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                          </div>
                                          <div class="form-group col-md-6">
                                          <label for="" class="col-form-label">Groom Mother's Name</label>
                                            <?php echo form_input(['type' => 'text', 'name' => 'groom_mother', 'id' => 'groom_mother', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                          </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="" class="col-form-label">Church Name</label>
                                         <?php echo form_input('church',null,' class="form-control" placeholder="" id="church" required');?>
                                        </div>
                                        <div class="form-group">
                                            <label for="" class="col-form-label">Officiating Pastor</label>
                                         <?php echo form_input('officiating_pastor',null,' class="form-control" placeholder="" id="officiating_pastor" required');?>
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