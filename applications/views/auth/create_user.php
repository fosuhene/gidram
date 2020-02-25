
 <?php $this->load->view('components/header2'); ?>

   <div class="app-main__outer" style="margin-left: 20%">
      <div class="app-main__inner">
          <div class="app-page-title">
              <div class="page-title-wrapper">
                  <div class="page-title-heading">
                      <div class="page-title-icon">
                          <i class="fa fa-server">
                          </i>
                      </div>
                      <div><h2><?php echo lang('create_user_heading');?></h2>
                          <div class="page-title-subheading">
                            <?php echo lang('create_user_subheading');?>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

        <!--   <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
              <li class="nav-item">
                  <button type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                      Add Profile Photo
                  </button>
              </li>
          </ul> -->

          <div class="tab-content">
              <div class="tab-pane tabs-animation fade show active" id="tab-content-0" role="tabpanel">
                  <div class="main-card mb-3 card">
                      <div class="card-body">
                             <div class="col-md-12">
                                <div id="infoMessage"><?php echo $message;?></div>
                                  <?php echo validation_errors(); ?>
                                  <?php echo form_open_multipart("auth/create_user");?>
                                    <div id="userinput" style="width: 50%">
                                      <table cellpadding="0" width="100%">
                                          <tr>
                                            <div class="col-md-12">
                                              <h5><strong> Admin Photo - Upload</strong></h5>
                                                <div class="borderline">
                                                  <img id="churchlogo" src="<?php echo base_url(); ?>/assets/images/user.png" style="width:160px; height: 120px;margin-left:10%;"/>
                                                    <input type="file"  name="userfile" size="40"  id="churchlogo" accept="image/*" onchange="loadchurchlogo(event)"/>
                                                </div>
                                            </div>
                                          </tr>
                                          <tr>
                                                <?php echo lang('create_user_fname_label', 'first_name');?> <br />
                                                <input name="first_name" id="first_name" type="text" class="form-control">
                                          </tr>

                                          <tr>
                                                <?php echo lang('create_user_lname_label', 'last_name');?> <br />
                                                <input name="last_name" id="last_name" type="text" class="form-control">
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
                                         <!--  <tr>
                                                <?php //echo lang('create_user_company_label', 'company');?> <br />
                                               <input name="company" id="company" type="text" class="form-control">
                                          </tr> -->

                                          <tr>
                                                <?php echo lang('create_user_company_label', 'company');?> <br />
                                                <select name="company" id="company" tabindex="1" class="form-control" data-show-subtext="true" data-live-search="true" selected="true" required="required">
                                                  <option>Select Account Type</option>
                                                  <option>Admin</option>
                                                  <option>Member</option>
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
                                                <?php echo lang('create_user_password_label', 'password');?> <br />
                                                <input name="password" id="password" type="password" class="form-control" required="required"/>
                                          </tr>
                                          <tr>
                                                <?php echo lang('create_user_password_confirm_label', 'password_confirm');?> <br />
                                               <input name="password_confirm" id="password_confirm" type="password" class="form-control" required="required" />
                                          </tr>
                                       </table>

                                      <button   class="btn mr-2 mb-2 btn-primary" style="margin-left:20%; margin-top:5%"><?php echo form_submit('submit', lang('create_user_submit_btn'));?></button>
                                    </div>
                                <?php echo form_close();?>
                            </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    <?php $this->load->view('components/footer'); ?>



<!-- Modal -->
<!-- <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Upload Photo</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                 <?php //echo form_open_multipart('churchinfo/churchinfo'); ?>
                       <div class="col-md-5" style="padding-left: 60px">
                      <div class="col-md-12">
                        <h5><strong> Church Photo - Upload</strong></h5>
                  <div class="borderline">
                    <img id="churchlogo" src="<?php //echo base_url(); ?>/assets/images/pholder.png" style="width:160px; height: 110px;margin-left:10%;"/>
                    <input type="file"  name="userfile" size="40"  id="churchlogo" accept="image/*" onchange="loadchurchlogo(event)"/>
                  </div>
                  </div>

                 </div>
                 <?php //echo form_close(); ?>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>
 -->
