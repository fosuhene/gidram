
 <?php $this->load->view('components/header2'); ?>

  <!-- page content -->
        <div class="right_col" role="main">
             <div><h2><?php echo lang('create_user_heading');?></h2>
                        <div class="page-title-subheading">
                          <?php echo lang('create_user_subheading');?>
                        </div>
                    </div>
                   <div class="col-md-12">
                      <div id="infoMessage"><?php echo $message;?></div>
                        <?php echo validation_errors(); ?>
                          <div class="col-md-12">
                              <h1><?php echo lang('create_group_heading');?></h1>
                              <hr/>
                              <p><?php echo lang('create_group_subheading');?></p>
                              <div id="infoMessage"><?php echo $message;?></div>

                              <?php echo form_open("auth/create_group");?>
                              <div id ="userinput">
                                  <p>
                                    <?php echo lang('create_group_name_label', 'group_name');?> <br />
                                    <?php echo form_input($group_name);?>
                                  </p>

                                  <p>
                                    <?php echo lang('create_group_desc_label', 'description');?> <br />
                                    <?php echo form_input($description);?>
                                  </p>

                                  <p><?php echo form_submit('submit', lang('create_group_submit_btn'));?></p>
                              </div>
                              <?php echo form_close();?>
                          </div>
                      </div>
          <!-- end of weather widget -->
              </div>




    <?php $this->load->view('components/footer2'); ?>

























