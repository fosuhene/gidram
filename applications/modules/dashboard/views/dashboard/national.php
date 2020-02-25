

 <?php $this->load->view('components/header2'); ?>

  <section class="content-header">

  </section>

   <!-- Main content -->
    <section class="content-wrapper">
      <div class="row">
        <div class="col-md-12">
                     <div class="app-main__outer">
                    <div class="app-main__inner">
                        <div class="app-page-title">
                            <div class="page-title-wrapper">
                                <div class="page-title-heading">
                                    <div class="page-title-icon">
                                        <i class="fa fa-user">
                                        </i>
                                    </div>
                                    <div>National Facility
                                        <div class="page-title-subheading">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-md-6">
                                <div class="main-card mb-3 card">
                                    <div class="card-body"  ng-app="">
                                       <!--  <h6><strong> Account Info</strong></h6> -->
                                        <hr>
                                        <?php echo validation_errors(); ?>
                                        <?php echo form_open('Dashboard/national'); ?>
                                        <label for=""> Name</label>
                                        <?php echo form_input(['type' => 'text', 'name' => 'name', 'id' => '', 'class' => 'form-control','required' => 'required']);?>
                                        <br>

                                        <label for="">Short Name</label>
                                        <div class="input-group">
                                            <?php echo form_input(['type' => 'text', 'name' => 'shortname', 'id' => '', 'class' => 'form-control','required' => 'required']);?>
                                        </div>
                                        <br>
                                        <label for="">Code</label>
                                        <div class="input-group">
                                            <?php echo form_input(['type' => 'text', 'name' => 'code', 'id' => '', 'class' => 'form-control','required' => 'required']);?>
                                        </div>
                                        <br>
                                         <label for="">Description</label>
                                        <div class="input-group">
                                            <?php echo form_input(['type' => 'text', 'name' => 'description', 'id' => '', 'class' => 'form-control','required' => 'required']);?>
                                        </div>
                                        <br>
                                        <label for="">Opening Date</label>
                                        <div class="input-group">
                                             <?php echo form_input(['type' => 'date', 'name' => 'opening_date', 'id' => '', 'class' => 'form-control','required' => 'required']);?>
                                        </div>
                                        <br/>
                                        <label for="">Closed Date</label>
                                        <div class="input-group">
                                             <?php echo form_input(['type' => 'date', 'name' => 'closed_date', 'id' => '', 'class' => 'form-control','required' => 'required']);?>
                                        </div>
                                        <br/>
                                        <label for="">Contact Person</label>
                                        <div class="input-group">
                                             <?php echo form_input(['type' => 'text', 'name' => 'contact_person', 'id' => '', 'class' => 'form-control','required' => 'required']);?>
                                        </div>
                                        <br/>
                                        <label for="">House Address</label>
                                        <div class="input-group">
                                             <?php echo form_input(['type' => 'text', 'name' => 'haddress', 'id' => '', 'class' => 'form-control','required' => 'required']);?>
                                        </div>
                                        <br/>
                                        <label for="">Email</label>
                                        <div class="input-group">
                                             <?php echo form_input(['type' => 'email', 'name' => 'email', 'id' => '', 'class' => 'form-control','required' => 'required']);?>
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                    </div>
                                </div>
                            </div>


                             <div class="col-md-6">
                                <div class="main-card mb-3 card">
                                    <div class="card-body"  ng-app="">
                                       <!--  <h6><strong> Account Info</strong></h6> -->
                                        <hr>
                                        <form id="myFormprofile"  method="post" enctype="multipart/form-data">
                                        <label for="">Phone</label>
                                        <?php echo form_input(['type' => 'number', 'name' => 'phone', 'id' => '', 'class' => 'form-control','required' => 'required']);?>
                                        <br>

                                        <label for="">Latitude</label>
                                        <div class="input-group">
                                          <?php echo form_input(['type' => 'text', 'name' => 'latitude', 'id' => '', 'class' => 'form-control','required' => 'required']);?>
                                        </div>
                                        <br/>

                                        <label for="">Longitude</label>
                                        <div class="input-group">
                                          <?php echo form_input(['type' => 'text', 'name' => 'longitude', 'id' => '', 'class' => 'form-control','required' => 'required']);?>
                                        </div>
                                        <br>
                                        <label for="">Date Added</label>
                                        <div class="input-group">
                                           <?php echo form_input(['type' => 'date', 'name' => 'added_date', 'id' => '', 'class' => 'form-control','required' => 'required']);?>
                                        </div>
                                        <br>
                                         <label for="">Tin</label>
                                        <div class="input-group">
                                            <?php echo form_input(['type' => 'text', 'name' => 'tin', 'id' => '', 'class' => 'form-control','required' => 'required']);?>
                                        </div>
                                        <br>
                                        <label for="">GH Post Code</label>
                                          <?php echo form_input(['type' => 'text', 'name' => 'ghpost_code', 'id' => '', 'class' => 'form-control','required' => 'required']);?>

                                        <br/>
                                        <label for="">Key Code</label>
                                          <?php echo form_input(['type' => 'text', 'name' => 'key_code', 'id' => '', 'class' => 'form-control','required' => 'required']);?>

                                        <br/>
                                         <label for="">URL</label>
                                          <?php echo form_input(['type' => 'text', 'name' => 'url', 'id' => '', 'class' => 'form-control','required' => 'required']);?>

                                        <br/>
                                        <label for="">Comment</label>
                                          <?php echo form_input(['type' => 'text', 'name' => 'comment', 'id' => '', 'class' => 'form-control','required' => 'required']);?>
                                        </div>
                                        <br/>

                                        <input type="hidden" class="form-control" value=" <?php echo $user_info->user_id?>
">

                                        <button type="submit" class="btn btn-primary" style="width:150px;margin-left:3%">Submit</button>
                                      <?php form_close()  ?>
                                    </div>
                                   </div>
                                </div>
                            </div>
                         </div>

                      </div>
                    </div>
                  </div>

            </div>
        </div>
        <!-- /.col-->
      </div>
      <!-- ./row -->
    </section>
    <!-- /.content -->

   <?php $this->load->view('components/footer2'); ?>








