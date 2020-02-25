<!DOCTYPE html>
<html lang="en">
<head>
    <title>Create User</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->  
    <link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
<!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>/assets/vendor_m/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>/assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>/assets/fonts/iconic/css/material-design-iconic-font.min.css">
<!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>/assets/vendor_m/animate/animate.css">
<!--===============================================================================================-->  
    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>/assets/vendor_m/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>/assets/vendor_m/animsition/css/animsition.min.css">
<!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>/assets/vendor_m/select2/select2.min.css">
<!--===============================================================================================-->  
    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>/assets/vendor_m/daterangepicker/daterangepicker.css">
<!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>/assets/css/css/util.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>/assets/css/css/main.css">
<!--===============================================================================================-->
</head>
<body>
    
    <div class="limiter">
        <div class="container-login100" style="background-image: url('<?php echo base_url(); ?>/assets/images/build.jpg');">
            <div class="wrap-login100">

                <?php echo validation_errors(); ?>

                <?php echo form_open();?>
                    <span class="login100-form-logo">
                        <i class="zmdi zmdi-landscape"></i>
                    </span>

                    <span class="login100-form-title p-b-34 p-t-27">
                      Create User
                    </span>
                  <div class="wrap-input100 validate-input" ">
                        <input class="input100" id="name" type="text" name="name" placeholder="Name">
                        <span class="focus-input100" data-placeholder="&#xf207;"></span>
                    </div>

                  <div class="wrap-input100 validate-input" ">
                        <input class="input100" id="emails" type="text" name="email" placeholder="Email">
                        <span class="focus-input100" data-placeholder="&#xf207;"></span>
                    </div>

                    <div class="wrap-input100 validate-input">
                        <input class="input100" id="password" type="text" name="password" placeholder="Password">
                        <span class="focus-input100" data-placeholder="&#xf191;"></span>
                    </div>

                       <div class="wrap-input100 validate-input" data-validate="Choose Levels">  
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
     

                    <div class="contact100-form-checkbox" style="margin-left:25% !important;">
                        <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
                        <label class="label-checkbox100" for="ckb1" >
                           Agree with Terms and Policy
                        </label>
                    </div>

                    <div class="container-login100-form-btn">
                          <input class="contact100-form-btn" type="submit"  value="Register"  style="border:1px solid #fff; width:200px; height:40px" />
                    </div>

                    <div class="account">
                      <br/>                      

                        <p>Already have an Account? </p>
                      <br/>
                        <div class="container-login100-form-btn">
                          <a href="<?php echo base_url()?>users/login"><button class="contact100-form-btn" type="button"  style="border:1px solid #fff; width:200px; height:40px" >Login</button></a>
                      </div>

                    </div>
<!-- 
                    <div class="text-center p-t-90">
                        <a class="txt1" href="#">
                            Forgot Password?
                        </a>
                    </div> -->
               <?php  echo form_close();   ?>
            </div>
        </div>
    </div>
    

    <div id="dropDownSelect1"></div>
    
<!--===============================================================================================-->
    <script src="<?php echo base_url(); ?>/assets/vendor_m/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
    <script src="<?php echo base_url(); ?>/assets/vendor_m/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
    <script src="<?php echo base_url(); ?>/assets/vendor_m/bootstrap/js/popper.js"></script>
    <script src="<?php echo base_url(); ?>/assets/vendor_m/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
    <script src="<?php echo base_url(); ?>/assets/vendor_mr/select2/select2.min.js"></script>
<!--===============================================================================================-->
    <script src="<?php echo base_url(); ?>/assets/vendor_mr/daterangepicker/moment.min.js"></script>
    <script src="<?php echo base_url(); ?>/assets/vendor_m/daterangepicker/daterangepicker.js"></script>
<!--===============================================================================================-->
    <script src="<?php echo base_url(); ?>/assets/vendor_m/countdowntime/countdowntime.js"></script>
<!--===============================================================================================-->
    <script src="<?php echo base_url(); ?>/assets/js_m/main.js"></script>

</body>
</html>