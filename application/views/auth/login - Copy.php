<?php $this->load->view('components/login_header'); ?>

  <body style="background-color: #666666;">
  	<div class="limiter">
  		<div class="container-login100">
  			<div class="wrap-login100">

          <?php echo form_open("auth/login");?>
  				<div class="login100-form validate-form">
            <img src="<?php echo base_url(); ?>/assets/login/images/logo.png"  style="width:100px; height:90px;margin-left:90px" alt=""/>
  					<span class="login100-form-title p-b-43">
  						Login to continue
  					</span>
            <?php echo validation_errors(); ?>
  					
					
				<div class="card-body">
                  <div class="form-group row" data-validate = "Valid email is required: me@asanka.com">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control" name="identity" id="identity" placeholder="Email">
                    </div>
                  </div>
                  <div class="form-group row" data-validate="Password is required">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                      <input type="password" class="form-control" name="password" id="password" placeholder="Password">
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="offset-sm-2 col-sm-10">
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="ckb1" type="checkbox" name="remember-me">
                        <label class="form-check-label" for="exampleCheck2" for="ckb1">Remember me</label>
                      </div>
                    </div>
                  </div>
                </div>
					
				<div class="card-footer">
                  <button type="submit" class="btn btn-info">Sign in</button>
				  <a href="<?php echo base_url(); ?>/auth/forgot_password" class="btn btn-default float-right">
  								Forgot Password?
  				 </a>
                </div>	
					
					
					
					
					
					<!--div class="wrap-input100 validate-input" data-validate = "Valid email is required: me@asanka.com">
  						<input class="input100" type="text" name="identity" id="identity">
  						<span class="focus-input100"></span>
  						<span class="label-input100">Email</span>
  					</div>

  					<div class="wrap-input100 validate-input" data-validate="Password is required">
  						<input class="input100" type="password" name="password" id="password">
  						<span class="focus-input100"></span>
  						<span class="label-input100">Password</span>
  					</div-->

  					<!--div class="flex-sb-m w-full p-t-3 p-b-32">
  						<div class="contact100-form-checkbox">
  							<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
  							<label class="label-checkbox100" for="ckb1">
  								Remember me
  							</label>
  						</div>

  						<div>
  							<a href="<-?php echo base_url(); ?>/auth/forgot_password" class="txt1">
  								Forgot Password?
  							</a>
  						</div>
  					</div-->
  			

  					<!--div class="container-login100-form-btn">
  						<button class="btn btn-info">
  							Login
  						</button>
  					</div>
  					
  					<div class="text-center p-t-46 p-b-20">
  						<span class="txt2">
  							or sign up using
  						</span>
  					</div>

  					<div class="login100-form-social flex-c-m">
  						<a href="#" class="login100-form-social-item flex-c-m bg1 m-r-5">
  							<i class="fa fa-facebook-f" aria-hidden="true"></i>
  						</a>

  						<a href="#" class="login100-form-social-item flex-c-m bg2 m-r-5">
  							<i class="fa fa-twitter" aria-hidden="true"></i>
  						</a>
  					</div-->
          </div>
  				 <?php echo form_close();?>

  				<div class="login100-more" style="background-image: url('<?php echo base_url(); ?>/assets/login/images/bigphoto2.jpg');">
  				</div>
				
				
				
				
				
				
				
				<!-- Horizontal Form -->
            <!--div class="card card-info">
              <div class="card-header">
                <h3 class="card-title">Horizontal Form</h3>
              </div>
              <form class="form-horizontal">
                <div class="card-body">
                  <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                      <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="offset-sm-2 col-sm-10">
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck2">
                        <label class="form-check-label" for="exampleCheck2">Remember me</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <button type="submit" class="btn btn-info">Sign in</button>
                  <button type="submit" class="btn btn-default float-right">Cancel</button>
                </div>
              </form>
            </div-->
				
				
				
				
				
				
				
				
  			</div>
  		</div>
  	</div>
  	
 <?php $this->load->view('components/login_footer'); ?> 	
