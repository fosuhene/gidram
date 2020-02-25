<?php $this->load->view('components/login_header'); ?>

 <!--body style="background:#002C59" <img src="./assets/img/gh_rev_aut.png">-->



  <body class="login" style="background:#002C59">
    <div>
      <!--a class="hiddenanchor" id="signup"></a>
      <a class="hiddenanchor" id="signin"></a-->

      <div class="login_wrapper">
        <div class="animate form login_form">
          <section class="login_content">
		  <img src="<?php echo base_url(); ?>/assets/img/gh_rev_aut.png">

             <label for="remember">&nbsp;Sign in to start your session</label>
			 <!--p class="login-box-msg">Sign in to start your session</p-->
			   <?php echo form_open("auth/login");?>
              <div>
                <input type="text" name="identity" id="identity" class="form-control" placeholder="Email" />
              </div>
              <div>
                <input type="password" name="password"  id="password" class="form-control" placeholder="Password">
              </div>
              <div>

                <input type="checkbox" id="remember"><label for="remember">&nbsp;Remember Me</label>
				<button type="submit" class="btn btn-default submit" style="color:#fff">Sign In</button>
              </div>
				<?php echo form_close();?>
              <div class="clearfix"></div>

              <div class="separator">
                <p class="change_link">
				  <a class="reset_pass" href="forgot-password.html">Lost your password?</a>
                </p>

                <div class="clearfix"></div>
                <br />

                <div>
                  <h1><i class="fa fa-paw"></i> GIDRAMS</h1>
                  <p>©2020 All Rights Reserved. Ghana Revenue Service. Privacy and Terms</p>
                </div>
              </div>

          </section>
        </div>

      </div>
    </div>
  </body>

  <?php $this->load->view('components/login_footer'); ?>
