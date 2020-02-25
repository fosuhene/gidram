
<?php $this->load->view('components/mainheader'); ?>

        <!-- page content -->
        <div class="right_col" role="main">
                 <div class="col-md-8">
                      <div class="main-card mb-3 card">
                          <div class="card-body"  ng-app="">
                             <!--  <h6><strong> Account Info</strong></h6> -->
                               <button id="<?php echo $user_info->user_id?>" class="updateprofile">>> Click here to edit profile</button>
                              <hr>
                              <form id="myFormprofile"  method="post" enctype="multipart/form-data">
                              <p><strong> Client Photo - Upload</strong></p>
                              <div class="col-md-12" style="margin-bottom: 4%;padding-left:8%">
                                  <div class="col-md-6">
                                    <div class="borderline">
                                        <!-- img id="churchlogo" src="" /> -->
                                        <span id="user_uploaded_image"></span>
                                        <input type="file"  name="userfile" size="40"  id="photo" accept="image/*"  onchange="loadchurchlogo(event)"/>
                                    </div>
                                  </div>
                              </div>
                              <br/>
                              <label for="">Account Name</label>
                              <div class="input-group">
                                 <input name="first_name" id="first_name" type="text" value="" class="form-control">
                              </div>
                              <br>

                              <label for="">Email</label>
                              <div class="input-group">
                                 <input id="email" name="email" type="text" value="" class="form-control" ng-model="email">
                              </div>

                              <div class="input-group">
                                 <input id="username" name="username" type="hidden" value="{{email}}" class="form-control"  >
                              </div>
                              <br>
                              <label for="">Phone</label>
                              <div class="input-group">
                                 <input id="phone"  name="phone" type="text" value="" class="form-control">
                              </div>
                              <br>
                               <label for="">Password</label>
                              <div class="input-group">
                                 <input id="password1"name="password"  type="password" value="" class="form-control">
                              </div>
                              <br>
                              <label for="">Confirm Password</label>
                              <div class="input-group">
                                 <input id="password2" name="password"  type="password" value="" class="form-control">
                              </div>
                              <br/>
                               <input type="hidden"  name="user_id" id="user_id"  value="" />
                               <input class="contact100-form-btn" type="submit" name="save" id="save"  value="Send Now"  style="width:120px;margin-left:30%">
                             </form>
                          </div>
                      </div>
                  </div>

                <!-- end of weather widget -->
              </div>
            </div>
          </div>
        </div>
        <!-- /page content -->
<?php $this->load->view('components/mainfooter'); ?>
 <?php $this->load->view('components/ajax'); ?>


















