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
                      <div class="col-lg-8">
                        <div class="card card-body">
                            <!-- <h5 class="">Fund Type Settings</h5> -->
                            <hr>
                            <div class="row">
                                <div class="col-sm-12 col-xs-12">
                                       <form id="churchlevelform"  method="post">
                                        <div class="form-group ">
                                            <label for="" class="col-form-label">Church Level</label>
                                         <?php echo form_input('level',null,' class="form-control" placeholder="" id="level" required');?>
                                        </div>
                                        <div class="form-group ">
                                            <label for="" class="col-form-label">Description</label>
                                              <?php echo form_input('description',null,' class="form-control" placeholder="" id="description" required');?>
                                        </div>
                                        <?php echo form_input(['type' => 'hidden', 'name' => 'user_id', 'id' => 'user_id',  'value' => set_value('user_id')]);?>
                                       <?php echo form_input(['type' => 'submit', 'name' => 'save', 'id' => 'save', 'class' => 'contact100-form-btn','required' => 'required', 'value' => set_value('Send Now')]);?>
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