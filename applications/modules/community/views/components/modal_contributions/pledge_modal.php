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
                                   <!--  <h5 class="">Pledge Details</h5> -->
                                    <p> Please fill in the form. Thank you</p>
                                    <hr>
                                    <div class="row">
                                        <div class="col-sm-12 col-xs-12">
                                            <?php echo validation_errors(); ?>
                                              <form id="pledeform"  method="post">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail111">Full Name</label>
                                                    <input type="text" name="name" class="form-control" id="name" placeholder="" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputEmail12">Postal Address</label>
                                                    <input type="text" class="form-control" id="address" name="address" placeholder="">
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputPassword11">Telephone</label>
                                                    <input type="text" class="form-control" id="tel" name="tel" placeholder="">
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputPassword12">Pledge Date</label>
                                                    <input type="date" class="form-control" id="pledge_date" name="pledge_date" placeholder="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            <div class="col-lg-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="form-row">
                                                <div class="form-group col-md-6">
                                                     <label for="inputEmail4" class="col-form-label">Pledge Amount</label>
                                                    <input type="text" class="form-control" name="pledge_amt" id="pledge_amt" placeholder="&#x20b5;" required>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="inputEmail4" class="col-form-label">Amount Paid</label>
                                                    <input type="text" class="form-control" name="amt_paid" id="amt_paid" placeholder="&#x20b5;" required>
                                                </div>
                                            </div>

                                            <div class="form-group ">
                                                <label for="inputEmail4" class="col-form-label">Remaining Balance</label>
                                                <input type="text" class="form-control" name="balance" id="balance" value="" readonly="readonly" >
                                            </div>


                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label for="inputEmail4" class="col-form-label">Currency</label>
                                                     <select class="form-control" id="currency" name="currency">
                                                        <option value="">--Select Currency--</option>
                                                        <?php echo $currency ?>
                                                    </select>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="inputPassword4" class="col-form-label">Payment Date</label>
                                                    <input type="date" class="form-control" id="payment_date" name="payment_date" placeholder="">
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                 <textarea name="description" id="description" cols="35 " rows="6" placeholder="Description"></textarea>
                                            </div>

                                            <input type="hidden"  name="user_id" id="user_id"  value="" />
                                            <input class="contact100-form-btn" type="submit" name="save" id="save"  value="Send Now"/>
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