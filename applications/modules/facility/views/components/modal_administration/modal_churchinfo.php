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
                                          <form id="churchinfoform"  method="post" enctype="multipart/form-data">
                                        <div class="form-row ">
                                           <div class="form-group col-md-6">
                                                <label for="" class="col-form-label">Church Name</label>
                                              <?php echo form_input('churchname',null,' class="form-control" placeholder="" id="churchname" required');?>
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
                                              <label for="" class="col-form-label">Region</label>
                                               <?php  echo form_dropdown('region_id', $region, set_value('-Select Church Level-'), 'id="region_id" class="form-control"'); ?>
                                              </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="" class="col-form-label">City</label>
                                             <?php echo form_input('city',null,' class="form-control" placeholder="" id="city" required');?>
                                            </div>
                                            <div class="form-group">
                                                <label for="" class="col-form-label">Phone</label>
                                             <?php echo form_input('contact',null,' class="form-control" placeholder="" id="contact" required');?>
                                            </div>
                                            <div class="form-group">
                                                <label for="" class="col-form-label">Address</label>
                                             <?php echo form_input('address',null,' class="form-control" placeholder="" id="address" required');?>
                                            </div>
                                            <div class="form-group">
                                                <label for="" class="col-form-label">Email</label>
                                             <?php echo form_input('email',null,' class="form-control" placeholder="email:someone@****.com" id="email" required');?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        <div class="col-lg-6">
                            <div class="card">
                                <div class="card-body" >
                                  <div class="form-group">
                                    <h5><strong>Upload Church Photo</strong></h5>
                                    <div class="borderline">
                                          <div class="form-group">
                                             <input type="file"  name="userfile" size="50" id="userfile"  accept="image/*" onchange="loadFile(event)"/>
                                              <span id="user_uploaded_pic"></span>
                                          </div>
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