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
                      <div><h2><?php echo lang('edit_user_heading');?></h2>
                          <div class="page-title-subheading">
                             <?php echo lang('edit_user_subheading');?>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="tab-content">
              <div class="tab-pane tabs-animation fade show active" id="tab-content-0" role="tabpanel">
                  <div class="main-card mb-3 card">
                      <div class="card-body">
                             <div class="col-md-12">
                                <div id="infoMessage"><?php echo $message;?></div>
                                  <?php echo validation_errors(); ?>
                                    <div class="col-md-12">
                                       <button class="btn btn-primary updateimage" id="<?php echo $user->user_id?>" data-toggle="modal" data-target="#exampleModal">Update Photo</button>
                                              <hr/>
                                              <?php echo form_open(uri_string());?>
                                              <div id ="userinput">
                                                  <!-- <p>
                                                    <h5><strong> Update Photo - Upload</strong></h5>
                                                    <div class="borderline">
                                                      <img id="churchlogo" src="<-?php //echo base_url(); ?>/assets/images/post/<-?php// echo $user->photo?>" style="width:160px; height: 120px"/>
                                                      <input type="file"  name="userfile" size="40"  id="churchlogo" accept="image/*" onchange="loadchurchlogo(event)"/>
                                                    </div>
                                                  </p> -->

                                                  <p>
                                                        <?php echo lang('edit_user_fname_label', 'first_name');?> <br />
                                                        <?php echo form_input($first_name);?>
                                                  </p>

                                                  <p>
                                                        <?php echo lang('edit_user_lname_label', 'last_name');?> <br />
                                                        <?php echo form_input($last_name);?>
                                                  </p>

                                                  <p>
                                                        <?php echo lang('edit_user_company_label', 'company');?> <br />
                                                        <?php echo form_input($company);?>
                                                  </p>

                                                  <p>
                                                        <?php echo lang('edit_user_phone_label', 'phone');?> <br />
                                                        <?php echo form_input($phone);?>
                                                  </p>

                                                  <p>
                                                        <?php echo lang('edit_user_password_label', 'password');?> <br />
                                                        <?php echo form_input($password);?>
                                                  </p>

                                                  <p>
                                                        <?php echo lang('edit_user_password_confirm_label', 'password_confirm');?><br />
                                                        <?php echo form_input($password_confirm);?>
                                                  </p>
                                              </div>

                                              <?php if ($this->ion_auth->is_admin()): ?>

                                                  <h3><?php echo lang('edit_user_groups_heading');?></h3>
                                                  <?php foreach ($groups as $group):?>
                                                      <label class="checkbox">
                                                      <?php
                                                          $gID=$group['id'];
                                                          $checked = null;
                                                          $item = null;
                                                          foreach($currentGroups as $grp) {
                                                              if ($gID == $grp->id) {
                                                                  $checked= ' checked="checked"';
                                                              break;
                                                              }
                                                          }
                                                      ?>
                                                      <input type="checkbox" name="groups[]" value="<?php echo $group['id'];?>"<?php echo $checked;?>>
                                                      <?php echo htmlspecialchars($group['name'],ENT_QUOTES,'UTF-8');?>
                                                      </label>
                                                  <?php endforeach?>

                                              <?php endif ?>

                                              <?php echo form_hidden('id', $user->id);?>
                                              <?php echo form_hidden($csrf); ?>

                                              <p><?php echo form_submit('submit', lang('edit_user_submit_btn'));?></p>
                                        <?php echo form_close();?>
                                    </div>
                                </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    <!-- </div> -->


    <?php $this->load->view('components/footer2'); ?>

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Update Photo</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
            <form id="myFormimage"  method="post" enctype="multipart/form-data">
                <div class="container">
                    <div class="col-md-12" style="margin-bottom: 4%;padding-left:8%">
                        <div class="col-md-6">
                          <!--   <h5><strong> Upload Church Logo</strong></h5> -->
                            <div class="borderline">
                                <!-- img id="churchlogo" src="" /> -->
                                <span id="user_uploaded_image"></span>
                                <input type="file"  name="userfile" size="40"  id="photo" accept="image/*"  onchange="loadchurchlogo(event)"/>
                            </div>
                        </div>
                          <input type="hidden"  name="user_id" id="user_id"  value="" />
                    </div>
                </div>
              <div class="modal-footer">
                  <input class="contact100-form-btn" type="submit" name="save" id="save"  value="Send Now"  style="width:80px">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <!--     <button type="button" class="btn btn-primary">Save changes</button> -->
              </div>
            </form>
          </div>
        </div>
    </div>







