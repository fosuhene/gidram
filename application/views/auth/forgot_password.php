
<?php $this->load->view('components/login_header'); ?>

  <body style="background-color: #666666;">
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <?php echo form_open("auth/forgot_password");?>

              <div class="login100-form validate-form">
                  <img src="<?php echo base_url(); ?>/assets/login/images/logo.png"  style="width:100px; height:90px;margin-left:90px" alt=""/>
                  <span class="login100-form-title p-b-43">
                   Forgot Password?
                  </span>
                  <label for="identity"><?php echo (($type=='email') ? sprintf(lang('forgot_password_email_label'), $identity_label) : sprintf(lang('forgot_password_identity_label'), $identity_label));?>
                  </label> <br />

                  <input type="text" name="identity" placeholder="" autocomplete="off" class="form-control placeholder-no-fix">

                  <span class="login100-form-title p-b-43">
                    <a href="<?php echo base_url(); ?>/auth/login"><u> <<< Back </u></a>
                  </span>
              </div>
               <?php echo form_close();?>
             <div class="login100-more" style="background-image: url('<?php echo base_url(); ?>/assets/login/images/bigphoto1.jpg');">
            </div>
        </div>
      </div>

    </div>
    
<?php $this->load->view('components/login_footer'); ?>   


