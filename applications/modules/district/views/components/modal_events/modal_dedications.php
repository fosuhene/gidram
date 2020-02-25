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
                                       <form id="dedicationsform"  method="post">
                                          <div class="form-row ">
                                             <div class="form-group col-md-6">
                                               <label for="">Child Name</label>
                                               <?php echo form_input(['type' => 'text', 'name' => 'child_name', 'id' => 'child_name', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                              </div>

                                              <div class="form-group col-md-6">
                                                <label for="" class="col-form-label">Gender</label>
                                                <select id="gender" name="gender" class="form-control">
                                                    <option value="#">--Select-----</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                            </div>
                                          </div>

                                            <div class="form-row">
                                              <div class="form-group col-md-6">
                                                 <label for="" class="col-form-label">Place of Birth</label>
                                               <?php echo form_input('pob',null,' class="form-control" placeholder="" id="pob" required');?>
                                              </div>
                                              <div class="form-group col-md-6">
                                               <label for="">Date of Birth</label>
                                               <?php echo form_input(['type' => 'date', 'name' => 'dob', 'id' => 'dob', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                              </div>
                                            </div>

                                              <div class="form-group">
                                                <label for="" class="col-form-label">Day of Birth</label>
                                                <?php echo form_input(['type' => 'text', 'name' => 'daybirth', 'id' => 'daybirth', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
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
                                            <label for="" class="col-form-label">Father's Name</label>
                                            <?php echo form_input(['type' => 'text', 'name' => 'fathers_name', 'id' => 'fathers_name', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                          </div>
                                          <div class="form-group col-md-6">
                                          <label for="" class="col-form-label">Mother's Name</label>
                                            <?php echo form_input(['type' => 'text', 'name' => 'mothers_name', 'id' => 'mothers_name', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                          </div>
                                        </div>
                                        <div class="form-row">
                                          <div class="form-group col-md-6">
                                            <label for="" class="col-form-label">Dedication Date</label>
                                            <?php echo form_input(['type' => 'date', 'name' => 'dedication_date', 'id' => 'dedication_date', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                          </div>
                                          <div class="form-group col-md-6">
                                          <label for="" class="col-form-label">Dedication Place</label>
                                            <?php echo form_input(['type' => 'text', 'name' => 'dedication_place', 'id' => 'dedication_place', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                          </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="" class="col-form-label">Church Name</label>
                                         <?php echo form_input('church_name',null,' class="form-control" placeholder="" id="church_name" required');?>
                                        </div>
                                        <div class="form-group">
                                            <label for="" class="col-form-label">Officiating Minister</label>
                                         <?php echo form_input('officiating_minister',null,' class="form-control" placeholder="" id="officiating_minister" required');?>
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