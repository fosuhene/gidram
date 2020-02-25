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
                                              <form id="sschoolsform"  method="post">
                                                 <div class="form-group">
                                                        <label for="inputEmail4" class="col-form-label">Date</label>
                                                        <?php echo form_input(['type' => 'date', 'name' => 'date', 'id' => 'date', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="inputPassword4" class="col-form-label">Group Name</label>
                                                        <?php echo form_input(['type' => 'text', 'name' => 'group_name', 'id' => 'group_name', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="inputEmail4" class="col-form-label">Officer in Charge</label>
                                                        <?php echo form_input(['type' => 'text', 'name' => 'officer', 'id' => 'officer', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="inputEmail4" class="col-form-label">Assistant Officer</label>
                                                        <?php echo form_input('officer_assistant',null,' class="form-control" placeholder="" id="officer_assistant" required');?>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="inputEmail4" class="col-form-label">Attendance</label>
                                                        <?php echo form_input(['type' => 'number', 'name' => 'attendance', 'id' => 'attendance', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
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