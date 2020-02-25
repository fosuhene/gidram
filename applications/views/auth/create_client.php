   
   <?php $this->load->view('components/header'); ?>

    <div class="app-main__outer">
        <div class="app-main__inner">
            <div class="app-page-title">
                <div class="page-title-wrapper">
                    <div class="page-title-heading">
                        <div class="page-title-icon">
                            <i class="fa fa-server">
                            </i>
                        </div>
                        <div>Clients Details
                            <div class="page-title-subheading">
                              Add and fetch all clients information.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-card mb-3 card">
              <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
                <li class="nav-item">
                  <button type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                  Add Client
                  </button>
                </li>
              </ul>
                <div class="card-body">
                    <table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered" id="hidden-table-clients">
                  <thead >
                      <tr>
                        <th>
                          ID
                        </th>
                        <th >
                            Client Name
                        </th>
                        <th >
                            Account Type
                        </th>
                        <th >
                           Account Manager
                        </th>
                        <th >
                            Address
                        </th>
                        <th>
                          City
                        </th>
                        <th>
                          Country
                        </th>
                        <th>
                          Last Login
                        </th>
                        <th >
                            View
                        </th>
                         <th >
                            Edit
                        </th>
                        <th>
                          Delete
                        </th>
                     </tr>
                  </thead>
             <!--  -->
              </table>
              <a href="<?php echo base_url(); ?>/Dashboard/clients"><<<<u>Back</u></a>
            </div>
        </div>
    </div>
<!--   </div> -->
 

  <?php $this->load->view('components/footer'); ?> 

    
      <div class="container" >
         <div class="modal open" id="myModal" role="dialog">
            <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Edit Clients</h4>
                    </div>
                    <div class="modal-body">
                <!--       <section class=""   style="margin-top:3%!important"> -->
                        <h4><i class="fa fa-angle-right"></i><strong> Edit Clients Details </strong></h4>
                        <?php echo validation_errors(); ?>
                       <form id="myForm" action="" method="post">
                          <div class="col-lg-12">
                            <div class="form-panel">
                               <div class="card-body"><h5 class="card-title"></h5>
                                    <tr>
                                          <?php echo lang('create_user_company_label', 'company');?> <br />
                                         <input name="account_name" id="account_name" type="text" class="form-control" required="required" />
                                    </tr>
                                     <tr>
                                          <?php echo lang('create_user_manager_label', 'manager');?> <br />
                                         <input name="manager" id="manager" type="text" class="form-control" required="required" />
                                    </tr>
                                    <tr>
                                          <?php echo lang('create_user_city_label', 'city');?> <br />
                                         <input name="city" id="city" type="text" class="form-control" required="required" />
                                    </tr>
                                     <tr>
                                          <?php echo lang('create_user_address_label', 'address');?> <br />
                                         <input name="address" id="address" type="text" class="form-control" required="required" />
                                    </tr>
                                     <tr>
                                          <?php echo lang('create_user_country_label', 'country');?> <br />
                                         <input name="country" id="country" type="text" class="form-control" required="required" />
                                    </tr>
                                    <br>
                                    <input type="hidden"  name="user_id" id="user_id"  value="" />
                                    <input class="contact100-form-btn" type="submit" name="save" id="save"  value="Send Now"  style="margin-left:25%;width: 150px;background: #3f6ad8;color:#fff"/>
                                </div>
                            </div>
                            <!-- /form-panel -->
                          </div>
                        <!-- row -->
                      </form>
                        <!-- row -->
                     <!--  </section> -->
                      <!-- /wrapper -->
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
              </div>

            </div>
        </div>
    </div>


 <!-- Modal -->
 <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Register Client</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                  <div class="main-card mb-3 card">
                      <div class="card-body"><h5 class="card-title"></h5>
                              <div class="col-md-12">
                                <div id="infoMessage"><?php echo $message;?></div>
                                  <?php echo validation_errors(); ?>
                                  <?php echo form_open_multipart("auth/create_client");?>
                                    <div id="userinput" style="width: 100%">
                                      <table cellpadding="0" width="100%">
                                          <tr>
                                            <div class="col-md-12">
                                              <h5><strong> Client Photo - Upload</strong></h5>
                                                <div class="borderline">
                                                    <img id="churchlogo" src="<?php echo base_url(); ?>/assets/images/user.png" style="width:160px; height: 120px;margin-left:10%;"/>
                                                    <input type="file"  name="userfile" size="40"  id="churchlogo" accept="image/*" onchange="loadchurchlogo(event)"/>
                                                </div>
                                            </div>
                                          </tr>
                                          <br/>
                                          <tr>
                                                <?php echo lang('create_user_client_label', 'first_name');?> <br />
                                                <input name="first_name" id="first_name" type="text" class="form-control">
                                          </tr>

                                          <tr>
                                               <!--  <-?php// echo lang('create_user_lname_label', 'last_name');?> --> <br />
                                                <input name="last_name" id="last_name" type="hidden" class="form-control">
                                          </tr>
                                          <?php
                                          if($identity_column!=='email') {
                                              echo '<p>';
                                              echo lang('create_user_identity_label', 'identity');
                                              echo '<br />';
                                              echo form_error('identity');
                                              echo form_input($identity);
                                              echo '</p>';
                                          }
                                          ?>
                                        <!--   <tr>
                                                <?php //echo lang('create_user_company_label', 'company');?> <br />
                                               <input name="company" id="company" type="text" class="form-control">
                                          </tr> -->
                                          <tr>
                                                <?php echo lang('create_user_manager_label', 'manager');?> <br />
                                               <input name="manager" id="manager" type="text" class="form-control" required="required" />
                                          </tr>

                                          <tr>
                                                <?php echo lang('create_user_company_label', 'first_name');?> <br />
                                                <select name="first_name" id="company" tabindex="1" class="form-control" data-show-subtext="true" data-live-search="true" selected="true" required="required">
                                                  <option>Client</option>
                                                 <!--  <-?php// echo $branchname;?> -->
                                                </select>
                                          </tr>

                                          <tr>
                                                <?php echo lang('create_user_email_label', 'email');?> <br />
                                                <input name="email" id="email" type="text" class="form-control"></
                                          </tr>

                                          <tr>
                                                <?php echo lang('create_user_phone_label', 'phone');?> <br />
                                                <input name="phone" id="phone" type="text" class="form-control"></
                                          </tr>
                                       
                                          <tr>
                                                <?php echo lang('create_user_city_label', 'city');?> <br />
                                               <input name="city" id="city" type="text" class="form-control" required="required" />
                                          </tr>
                                           <tr>
                                                <?php echo lang('create_user_address_label', 'address');?> <br />
                                               <input name="address" id="address" type="text" class="form-control" required="required" />
                                          </tr>
                                           <tr>
                                                <?php echo lang('create_user_country_label', 'country');?> <br />
                                               <input name="country" id="country" type="text" class="form-control" required="required" />
                                          </tr>
                                          <tr>
                                                <?php echo lang('create_user_password_label', 'password');?> <br />
                                                <input name="password" id="password" type="password" class="form-control" required="required"/>
                                          </tr>
                                          <tr>
                                                <?php echo lang('create_user_password_confirm_label', 'password_confirm');?> <br />
                                               <input name="password_confirm" id="password_confirm" type="password" class="form-control" required="required" />
                                          </tr> 

                                       </table>

                                      <button   class="btn mr-2 mb-2 btn-primary" style="margin-left:20%; margin-top:5%"><?php echo form_submit('submit', lang('create_client_submit_btn'));?></button>
                                    </div>
                                <?php echo form_close();?>
                            </div>
                          </div>
                      </div>
                  </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <!--   <button type="button" type="submit" name="submit" id="submit" class="btn btn-primary">Save changes</button> -->
            </div>
      </div>
  </div>


