

   <?php $this->load->view('components/header'); ?>

          <div class="app-main__outer">
                    <div class="app-main__inner">
                        <div class="app-page-title">
                            <div class="page-title-wrapper">
                                <div class="page-title-heading">
                                    <div class="page-title-icon">
                                        <i class="fa fa-user">
                                        </i>
                                    </div>
                                    <div>Edit Profile
                                        <div class="page-title-subheading">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">

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
                        

                            <div class="col-md-8">
                                <div class="main-card mb-3 card">
                                    <div class="card-body">
                                         <button id="<?php echo $user_info->user_id?>" class="updatedetails">>> Click here to edit other details</button>
                                        <hr>
                                        <form id="myFormotherprofile"  method="post" >
                                        <label for="">Account Manager</label>
                                        <div class="input-group">
                                           <input name="manager" id="manager" type="text" value="" class="form-control">
                                        </div>
                                        <label for="">City</label>
                                        <div class="input-group">
                                           <input name="city" id="city" type="text" value="" class="form-control">
                                        </div>
                                        <br> 
                                        <label for="">Address</label>
                                        <div class="input-group">
                                           <input name="address" id="address" type="text" value="" class="form-control">
                                        </div>

                                        <br>
                                         <label for="">Country</label>
                                        <div class="input-group">
                                           <input name="country" id="country" type="text" value="" class="form-control">
                                        </div>
                                        <br>
                                         <input type="hidden"  name="user_id" id="user_id"  value=" <?php echo $user_info->user_id?>" />
                                         <input class="contact100-form-btn" type="submit" name="save" id="save"  value="Send Now"  style="width:120px;margin-left:30%">
                                        </form>
                                    </div>
                                </div>
                            </div>


                        <div class="col-md-12">
                            <div class="main-card mb-3 card">
                                <div class="card-body">
                                    <!-- Button trigger modal -->
                                    <h6><strong> Registered Devices</strong></h6>
                                    <hr>
                                     <table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered" id="hidden-table-deviceinfo">
                                    <thead >
                                        <tr>
                                          <th>
                                            ID
                                          </th>
                                          <th >
                                              Device Name
                                          </th>
                                          <th >
                                             Device Location
                                          </th>

                                          <th>
                                             MAC Address
                                          </th> 
                                          <th>
                                            SD Card Serial
                                          </th>
                                          <th>
                                           Device Serial Number
                                          </th>
                                      <!--      <th >
                                              Last Sync Date
                                          </th> -->
                                       </tr>
                                    </thead>                               
                                </table>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                 <?php $this->load->view('components/footer'); ?> 
            </div>
        </div>
    </div>



