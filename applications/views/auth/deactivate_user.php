

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
                      <div> <h2><?php echo lang('deactivate_heading');?></h2>
                        <!--   <div class="page-title-subheading">
                              <?php //echo sprintf(lang('deactivate_subheading'), $user->username);?>
                          </div> -->
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
                                    <?php echo sprintf(lang('deactivate_subheading'), $user->username);?>
                                    <div class="col-md-12" >
                                            <?php echo form_open("auth/deactivate/".$user->id);?>
                                            <div id="user">
                                                <p>
                                                  <?php echo lang('deactivate_confirm_y_label', 'confirm');?>
                                                  <input type="radio" name="confirm" value="yes" checked="checked" />
                                                  <?php echo lang('deactivate_confirm_n_label', 'confirm');?>
                                                  <input type="radio" name="confirm" value="no" />
                                                </p>

                                                <?php echo form_hidden($csrf); ?>
                                                <?php echo form_hidden(['id' => $user->id]); ?>
                                                <p><?php echo form_submit('submit', lang('deactivate_submit_btn'));?></p>
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




