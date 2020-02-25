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
                           <!--  <h5 class="">Bank Details Settings</h5> -->
                            <hr>
                            <div class="row">
                                <div class="col-sm-12 col-xs-12">
                                       <form id="bankdetailsform"  method="post">
                                        <div class="form-group ">
                                            <label for="" class="col-form-label">Bank Code</label>
                                         <?php echo form_input('bank_code',null,' class="form-control" placeholder="" id="bank_code" required');?>
                                        </div>
                                        <div class="form-group ">
                                            <label for="" class="col-form-label">Bank Name</label>
                                         <?php echo form_input('bank_name',null,' class="form-control" placeholder="" id="bank_name" required');?>
                                        </div>
                                        <div class="form-group ">
                                            <label for="" class="col-form-label">Bank Type</label>
                                         <?php echo form_input('bank_type',null,' class="form-control" placeholder="" id="bank_type" required');?>
                                        </div>
                                        <input type="hidden"  name="user_id" id="user_id"  value="" />
                                        <input class="contact100-form-btn" type="submit" name="save" id="save"  value="Send Now"/>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>

                <div class="modal-footer">
                     <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>