<?php $this->load->view('components/login_header'); ?>

  <body>
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">


          <body class="hold-transition login-page">
            <div class="login-box">
                <div class="login-logo">
                  <a href="../../index2.html"> <img src="<?php echo base_url(); ?>/assets/newskin/dist/img/gra.jpg" alt="" width="50px" height="50px"><b>GIDRAM</b></a>
                </div>
                <!-- /.login-logo -->
                <div class="card">
                  <div class="card-body login-card-body">
                    <p class="login-box-msg">Sign in to start your session</p>

                    <?php echo form_open("auth/login");?>
                      <div class="input-group mb-3">
                        <input type="text" name="identity" id="identity" class="form-control" placeholder="Email">
                        <div class="input-group-append">
                          <div class="input-group-text">
                            <span class="fas fa-envelope"></span>
                          </div>
                        </div>
                      </div>
                      <div class="input-group mb-3">
                        <input type="password" name="password"  id="password" class="form-control" placeholder="Password">
                        <div class="input-group-append">
                          <div class="input-group-text">
                            <span class="fas fa-lock"></span>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-8">
                          <div class="icheck-primary">
                            <input type="checkbox" id="remember">
                            <label for="remember">
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-4">
                          <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                        </div>
                        <!-- /.col -->
                      </div>
                    <?php echo form_close();?>

                    <div class="social-auth-links text-center mb-3">
                      <a href="#" class="">
                        <u> Forgot Password</u>
                      </a>
                  </div>
                  <!-- /.login-card-body -->
                </div>
              </div>
              <!-- /.login-box -->


          </div>
        </div>
      </div>
    </div>

 <?php $this->load->view('components/login_footer'); ?>
