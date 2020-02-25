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
                                              <form id="churchgroupsform"  method="post">
                                                 <div class="form-group">
                                                    <label for="inputPassword4" class="col-form-label">Group Name</label>
                                                    <?php echo form_input('group_name',null,' class="form-control" placeholder="" id="group_name" required');?>
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputEmail4" class="col-form-label">Meeting Time</label>

                                                       <?php echo form_input(['type' => 'time', 'name' => 'meeting_time', 'id' => 'meeting_time', 'class' => 'form-control','required' => 'required', 'value' => set_value('year')]);?>
                                                </div>

                                                <div class="form-group">
                                                    <label for="inputEmail4" class="col-form-label">Meeting  Day</label>

                                                      <select name="meeting_day" id="meeting_day" class="form-control">
                                                          <option value="#">--Select--</option>
                                                          <option value="monday">Monday</option>
                                                          <option value="tuesday">Tuesday</option>
                                                          <option value="wednesday">Wednesday</option>
                                                          <option value="thursday">Thursday</option>
                                                          <option value="friday">Friday</option>
                                                          <option value="saturday">Saturday</option>
                                                          <option value="sunday">Sunday</option>
                                                      </select>
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputEmail4" class="col-form-label">Total Members</label>

                                                       <?php echo form_input(['type' => 'number', 'name' => 'member_no', 'id' => 'member_no', 'class' => 'form-control','required' => 'required', 'value' => set_value('year')]);?>
                                                </div>

                                                <div class="form-group">
                                                    <label for="inputEmail4" class="col-form-label">Found Date</label>

                                                       <?php echo form_input(['type' => 'date', 'name' => 'found_date', 'id' => 'found_date', 'class' => 'form-control','required' => 'required', 'value' => set_value('year')]);?>
                                                </div>

                                                <div class="form-group">
                                                    <label for="inputEmail4" class="col-form-label">Description</label>

                                                    <?php echo form_input('description',null,' class="form-control" placeholder="" id="description" required');?>
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