
<?php $this->load->view('components/header'); ?>

   <div class="app-main__outer" style="margin-left: 20%">
      <div class="app-main__inner">
          <div class="app-page-title">
              <div class="page-title-wrapper">
                  <div class="page-title-heading">
                      <div class="page-title-icon">
                           <i class="fa fa-server">
                          </i>
                      </div>
                      <div> <h2><?php echo lang('edit_group_heading');?></h2>
                          <div class="page-title-subheading">
                             <?php echo lang('edit_group_subheading');?>
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
                                  <?php echo validation_errors(); ?>
                                    <div class="col-md-12" >
                                        <div id="infoMessage"><?php echo $message;?></div>
                                        <?php echo form_open(current_url());?>
                                        <div id="userinput">
                                            <p>
                                              <?php echo lang('edit_group_name_label', 'group_name');?> <br />
                                              <?php echo form_input($group_name);?>
                                            </p>

                                            <p>
                                              <?php echo lang('edit_group_desc_label', 'description');?> <br />
                                              <?php echo form_input($group_description);?>
                                            </p>

                                            <p><?php echo form_submit('submit', lang('edit_group_submit_btn'));?></p>
                                        </div>
                                        <?php echo form_close();?>
                                    </div>
                                </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    <?php $this->load->view('components/footer'); ?>










