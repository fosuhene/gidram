
 <?php $this->load->view('components/header2'); ?>

  <!-- page content -->
        <div class="right_col" role="main">
             <div><h2><?php echo lang('create_user_heading');?></h2>
                        <div class="page-title-subheading">
                          <?php echo lang('create_user_subheading');?>
                        </div>
                    </div>
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


    <?php $this->load->view('components/footer2'); ?>











