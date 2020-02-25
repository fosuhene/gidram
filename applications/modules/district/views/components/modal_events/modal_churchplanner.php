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
                       <div class="col-lg-10">
                            <div class="card card-body">
                               <!--  <h5 class="">Offering Details</h5> -->
                                <hr>
                                <div class="row">
                                    <div class="col-sm-12 col-xs-12">
                                        <form id="churchplannerform"  method="post">
                                          <div class="form-group">
                                            <label for="inputEmail4" class="col-form-label">Program Date</label>
                                            <?php echo form_input(['type' => 'date', 'name' => 'pgrm_date', 'id' => 'pgrm_date', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                          </div>
                                          <div class="form-group">
                                              <label for="inputPassword4" class="col-form-label">Program Leader</label>
                                              <?php echo form_input(['type' => 'text', 'name' => 'pgrm_leader', 'id' => 'pgrm_leader', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                          </div>
                                          <div class="form-group">
                                              <label for="inputEmail4" class="col-form-label">Program Title</label>
                                              <?php echo form_input(['type' => 'text', 'name' => 'pgrm_title', 'id' => 'pgrm_title', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                          </div>

                                          <div class="form-group">
                                              <label for="inputEmail4" class="col-form-label">Venue</label>
                                              <?php echo form_input('venue',null,' class="form-control" placeholder="" id="venue" required');?>
                                          </div>
                                          <div class="form-group">
                                              <label for="inputEmail4" class="col-form-label">Duration</label>
                                              <?php echo form_input('duration',null,' class="form-control" placeholder="" id="duration" required');?>
                                          </div>
                                          <div class="form-group">
                                              <label for="inputEmail4" class="col-form-label">Description</label>
                                              <?php echo form_textarea([ 'name' => 'description', 'id' => 'description', 'class' => 'form-control','required' => 'required', 'value' => set_value('Description')]);?>
                                          </div>
                                          <?php echo form_input(['type' => 'hidden', 'name' => 'user_id', 'id' => 'user_id',  'value' => set_value('user_id')]);?>
                                          <?php echo form_input(['type' => 'submit', 'name' => 'save', 'id' => 'save', 'class' => 'contact100-form-btn','required' => 'required', 'value' => set_value('Send Now')]);?>
                                        </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                         </form>
                    </div> <!-- end card-body -->
                </div> <!-- end card-->


                <div class="modal-footer">
                     <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>