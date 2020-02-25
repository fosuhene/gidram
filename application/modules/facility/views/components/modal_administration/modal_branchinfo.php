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
                                          <form id="branchinfoform"  method="post">
                                        <div class="form-row ">
                                          <div class="form-row ">
                                             <div class="form-group col-md-6">
                                                  <label for="" class="col-form-label">Branch Name</label>
                                                <?php echo form_input('branchname',null,' class="form-control" placeholder="" id="branchname" required');?>
                                              </div>
                                             <div class="form-group col-md-6">
                                               <label for="">Church Level</label>
                                               <?php  echo form_dropdown('churchlevel_id', $level, set_value('-Select Church Level-'), 'id="churchlevel_id" class="form-control"'); ?>
                                              </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                  <label for="inputPassword4" class="col-form-label">Country</label>
                                                <?php  echo form_dropdown('country_id', $country, set_value('-Select Church Country-'), 'id="country_id" class="form-control"'); ?>
                                                </div>
                                                <div class="form-group col-md-6">
                                                <label for="inputEmail4" class="col-form-label">Region</label>
                                                 <?php  echo form_dropdown('region_id', $region, set_value('-Select Church Level-'), 'id="region_id" class="form-control"'); ?>
                                                </div>
                                              </div>
                                              <div class="form-group">
                                                  <label for="" class="col-form-label">City</label>
                                               <?php echo form_input('city',null,' class="form-control" placeholder="" id="city" required');?>
                                              </div>
                                              <div class="form-group">
                                                  <label for="" class="col-form-label">Phone</label>
                                               <?php echo form_input('contact',null,' class="form-control" placeholder="" id="contact"');?>
                                              </div>
                                              <div class="form-group">
                                              <label for="" class="col-form-label">Email</label>
                                              <?php echo form_input('email',null,' class="form-control" placeholder="email:someone@****.com" id="email" required');?>
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
                                          <label for="" class="col-form-label">Pastor's Name</label>
                                       <?php echo form_input('pastor_name',null,' class="form-control" placeholder="" id="pastor_name" required');?>
                                      </div>
                                      <div class="form-group">
                                          <label for="" class="col-form-label">Address</label>
                                       <?php echo form_input('address',null,' class="form-control" placeholder="" id="address" required');?>
                                      </div>
                                       <div class="form-row">
                                          <div class="form-group col-md-4">
                                             <label for="" class="col-form-label">Found Date</label>
                                          <?php echo form_input(['type' => 'date', 'name' => 'found_date', 'id' => 'found_date', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                          </div>
                                          <div class="form-group col-md-4">
                                            <label for="" class="col-form-label">Associate Pastors No.</label>
                                           <?php echo form_input(['type' => 'number', 'name' => 'pastors_no', 'id' => 'pastors_no', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                          </div>
                                          <div class="form-group col-md-4">
                                            <label for="" class="col-form-label">Members Total</label>
                                             <?php echo form_input(['type' => 'number', 'name' => 'members', 'id' => 'members', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
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