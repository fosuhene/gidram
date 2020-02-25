

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <meta name="author" content="Dashboard">
  <meta name="keyword" content="Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">
  <title>St. James Mini Mart</title>

  <!-- Favicons -->
  <link href="<?php echo base_url(); ?>/assets/img/clogo1.png" rel="icon">
  <link href="<?php echo base_url(); ?>/assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Bootstrap core CSS -->
  <link href="<?php echo base_url(); ?>/assets/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!--external css-->
  <link href="<?php echo base_url(); ?>/assets/lib/font-awesome/css/font-awesome.css" rel="stylesheet" />
  <!-- Custom styles for this template -->
  <link href="<?php echo base_url(); ?>/assets/css/style.css" rel="stylesheet">
  <link href="<?php echo base_url(); ?>/assets/css/style-responsive.css" rel="stylesheet">
</head>

<body>
  <!-- **********************************************************************************************************************************************************
      MAIN CONTENT
      *********************************************************************************************************************************************************** -->
  <div id="login-page">
    <div class="container">
      <div class="form-login" >
        <h2 class="form-login-heading">st james - point of sale (pos) system</h2>
        <div class="login-wrap">
          <div id="infoMessage"><?php echo $message;?></div>
    			 <?php echo form_open('auth/reset_password/' . $code);?>
               <h2><?php echo lang('reset_password_heading');?></h2>
               <div id="userinput">
          				<p>
          					<label for="new_password"><?php echo sprintf(lang('reset_password_new_password_label'), $min_password_length);?></label> <br />
          					<?php echo form_input($new_password);?>
          				</p>

          				<p>
          					<?php echo lang('reset_password_new_password_confirm_label', 'new_password_confirm');?> <br />
          					<?php echo form_input($new_password_confirm);?>
          				</p>

          				<?php echo form_input($user_id);?>
          				<?php echo form_hidden($csrf); ?>

          				<p><?php echo form_submit('submit', lang('reset_password_submit_btn'));?></p>
              </div>
    			<?php echo form_close();?>

	          <hr>
	          <div class="login-social-link centered"></div>
	          <div class="registration">
  	            Don't have an account yet?<br/>
  	            <a class="" href="#">
  	             Get in touch with Administrator to create an account
  	            </a>
	          </div>
	        </div>
	      </div>
	    </div>
	  </div>
  <!-- js placed at the end of the document so the pages load faster -->
  <script src="<?php echo base_url(); ?>/assets/lib/jquery/jquery.min.js"></script>
  <script src="<?php echo base_url(); ?>/assets/lib/bootstrap/js/bootstrap.min.js"></script>
  <!--BACKSTRETCH-->
  <!-- You can use an image of whatever size. This script will stretch to fit in any screen size.-->
  <script type="text/javascript" src="<?php echo base_url(); ?>/assets/lib/jquery.backstretch.min.js"></script>
  <script>
    $.backstretch("<?php echo base_url(); ?>/assets/img/build1.jpg", {
      speed: 500
    });
  </script>
</body>

</html>

