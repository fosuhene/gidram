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
                                              <form id="titheform"  method="post">
                                              <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label for="inputPassword4" class="col-form-label">Name</label>
                                                 <?php echo form_input('name',null,' class="form-control" placeholder="" id="name" required');?>
                                                </div>
                                                <div class="form-group col-md-6">
                                                <label for="inputEmail4" class="col-form-label">Register No.</label>

                                                <?php echo form_input('register_no',null,' class="form-control" placeholder="" id="register_no" required');?>
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label for="inputPassword4" class="col-form-label">Year</label>
                                                   <?php echo form_input(['type' => 'text', 'name' => 'year', 'id' => 'year', 'class' => 'form-control','required' => 'required', 'value' => set_value('year')]);?>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="inputEmail4" class="col-form-label">Amount</label>
                                                    <?php echo form_input('amount',null,' class="form-control" placeholder="" id="amount" required');?>
                                                </div>
                                               <?php echo form_input(['type' => 'hidden', 'name' => 'user_id', 'id' => 'user_id',  'value' => set_value('user_id')]);?>
                                              <?php echo form_input(['type' => 'submit', 'name' => 'save', 'id' => 'save', 'class' => 'contact100-form-btn','required' => 'required', 'value' => set_value('Send Now')]);?>
                                            </div>
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