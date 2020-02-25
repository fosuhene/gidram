
    
    <div class="limiter">
        <div class="container-login100" style="background-image: url('<?php echo base_url(); ?>/assets/images/build.jpg');">
            <div class="wrap-login100">           

               <?php echo validation_errors(); ?>

                <?php echo form_open();?>


               <!--  <?php echo '<pre>' .  print_r($this->session->userdata, TRUE) . '</pre>' ;   ?>
                <?php var_dump($this->session->userdata, TRUE); ?>
 -->
                <div  class="login100-form validate-form">
                    <span class="login100-form-logo">
                       <!--  <i class="zmdi zmdi-landscape"></i> -->
                       <i class="zmdi zmdi-balance"></i>
                    </span>

                    <span class="login100-form-title p-b-34 p-t-27">
                        PA_Asoriba <br/>
                        Church Manager
                    </span>

                    <div class="wrap-input100 validate-input">
                        <input class="input100"  id="email" type="text" name="email" placeholder="Email">
                        <span class="focus-input100" data-placeholder="&#xf207;"></span>
                    </div>

                    <div class="wrap-input100 validate-input" >
                        <input class="input100" id="password" type="password" name="password" placeholder="Password">
                        <span class="focus-input100" data-placeholder="&#xf191;"></span>
                    </div>

                    <div class="wrap-input100 validate-input">  
                       <select id="levels" class="input100"  name="levels"  style="height:50px">
                           <option value="#">--Choose Level--</option> 
                           <option value="Societies">Societies</option> 
                           <option value="Father">Father</option>
                           <option value="Administrator">Administrator</option> 
                           <option value="Credit">Credit</option> 
                           <option value="Dues">Dues</option>    
                           <option value="Insurance">Insurance</option>         
                       </select>                   
                       <span class="focus-input100" data-placeholder="&#xf207;"></span>
                    </div>
     

                    <div class="contact100-form-checkbox"  style="margin-left:30% !important;">
                        <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
                        <label class="label-checkbox100" for="ckb1">
                          Remember me
                        </label>
                    </div>
                   
                    <div class="container-login100-form-btn">
                          <input class="contact100-form-btn" type="submit"  value="Login" style="border:1px solid #fff; width:200px; height:40px" />
                    </div>

                    <div class="account">
                      <br/>
                        <p><u><a href="<?php echo base_url()?>/users/ForgotPassword" style="color:#fff">Forget Password</a></u></p>

                    <!--     <p>Do not have an Account? </p>
                      <br/>
                        <div class="container-login100-form-btn">
                            <a href="<?php echo base_url()?>users/edit"><button class="contact100-form-btn" type="button"  style="border:1px solid #fff; width:200px; height:40px" >Create An Account</button></a>
                      </div> -->

                    </div>

<!-- 
                    <div class="text-center p-t-90">
                        <a class="txt1" href="#">
                            Forgot Password?
                        </a>
                    </div> -->
                </div>
                <?php  echo form_close();   ?>
            </div>
        </div>
    </div>
    

    