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
                             <!--    <h5 class="">Tithes Details</h5> -->
                                <hr>
                                <div class="row">
                                       <div class="col-sm-12 col-xs-12">
                                              <form id="churchvisitorform"  method="post">
                                                 <div class="form-group">
                                                   <label for="" class="col-form-label">Service Name</label>
                                                   <?php  echo form_dropdown('serviceRecords_id', $service, set_value('-Select Church Service-'), 'id="serviceRecords_id" class="form-control"'); ?>
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputEmail4" class="col-form-label">Full Name</label>
                                                    <?php echo form_input(['type' => 'text', 'name' => 'name', 'id' => 'name', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputEmail4" class="col-form-label">Contact</label>
                                                    <?php echo form_input('contact',null,' class="form-control" placeholder="" id="contact" required');?>
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputEmail4" class="col-form-label">Address</label>
                                                    <?php echo form_input('address',null,' class="form-control" placeholder="" id="address" required');?>
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputEmail4" class="col-form-label">Purpose</label>
                                                    <?php echo form_input('purpose',null,' class="form-control" placeholder="" id="purpose" required');?>
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputEmail4" class="col-form-label">Official</label>
                                                    <?php echo form_input('official',null,' class="form-control" placeholder="" id="official" required');?>
                                                </div>
                                                <?php echo form_input(['type' => 'hidden', 'name' => 'user_id', 'id' => 'user_id',  'value' => set_value('user_id')]);?>
                                                <?php echo form_input(['type' => 'submit', 'name' => 'save', 'id' => 'save', 'class' => 'contact100-form-btn','required' => 'required', 'value' => set_value('Send Now')]);?>
                                           </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                     </div> <!-- end card-body -->
                 </div> <!-- end card-->


                <div class="modal-footer">
                     <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>


