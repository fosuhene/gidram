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
                          <!--   <h5 class="">Offering Type Settings</h5> -->
                            <hr>
                            <div class="row">
                                <div class="col-sm-12 col-xs-12">
                                       <form id="offeringtypeform"  method="post">
                                         <div class="form-group">
                                          <label for="">Offering Type</label>
                                            <?php echo form_input('offering_type',null,' class="form-control" placeholder="" id="offering_type" required');?>
                                        </div>
                                        <div class="form-group">
                                        <label for="">Description</label>
                                         <?php echo form_textarea([ 'name' => 'description', 'id' => 'description', 'class' => 'form-control','required' => 'required', 'value' => set_value(' Description')]);?>
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