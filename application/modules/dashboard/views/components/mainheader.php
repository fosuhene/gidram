<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>GIDRAMS - Ghana Revenue Authority </title>
	<link rel="icon" href="<?php echo base_url(); ?>/assets/img/fav.png" type="image/png" />
    <!-- Bootstrap -->
    <link href="<?php echo base_url(); ?>/assets/vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="<?php echo base_url(); ?>/assets/vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="<?php echo base_url(); ?>/assets/vendors/nprogress/nprogress.css" rel="stylesheet">
    <!-- iCheck -->
    <link href="<?php echo base_url(); ?>/assets/vendors/iCheck/skins/flat/green.css" rel="stylesheet">

    <!-- bootstrap-progressbar -->
    <link href="<?php echo base_url(); ?>/assets/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css" rel="stylesheet">
    <!-- JQVMap -->
    <link href="<?php echo base_url(); ?>/assets/vendors/jqvmap/dist/jqvmap.min.css" rel="stylesheet"/>
    <!-- bootstrap-daterangepicker -->
    <link href="<?php echo base_url(); ?>/assets/vendors/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet">
	<!-- NProgress -->
     <link href="<?php echo base_url(); ?>/assets/vendors/nprogress/nprogress.css" rel="stylesheet">
    <!-- Custom Theme Style -->
    <link href="<?php echo base_url(); ?>/assets/build/css/custom.min.css" rel="stylesheet">

	 <link href="cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css">

    <link href="<?php echo base_url(); ?>/assets/vendors/datatables.net-bs/css/dataTables.bootstrap.min.css" rel="stylesheet">
    <link href="<?php echo base_url(); ?>/assets/vendors/datatables.net-buttons-bs/css/buttons.bootstrap.min.css" rel="stylesheet">
    <link href="<?php echo base_url(); ?>/assets/vendors/datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.min.css" rel="stylesheet">
    <link href="<?php echo base_url(); ?>/assets/vendors/datatables.net-responsive-bs/css/responsive.bootstrap.min.css" rel="stylesheet">
    <link href="<?php echo base_url(); ?>/assets/vendors/datatables.net-scroller-bs/css/scroller.bootstrap.min.css" rel="stylesheet">
	
  </head>

  <body class="nav-md">
    <div class="container body">
      <div class="main_container">
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view">
            <div class="navbar nav_title" style="border: 0;">
              <a href="#" class="site_title"><!--i class="fa fa-paw"></i-->
			       <img src="<?php echo base_url(); ?>/assets/img/fav.png"/>
			       <span>GIDRAMS</span></a>
            </div>

            <div class="clearfix"></div>

            <!-- menu profile quick info -->
            <!--div class="profile clearfix">
              <div class="profile_pic">
                <img src="<-?php echo base_url(); ?>assets/images/post/<-?php echo  $user_info->photo;?>" alt="..." class="img-circle profile_img">
              </div>
              <div class="profile_info">
                <span>Welcome,</span>
                <h2><-?php echo $user_info->last_name; ?> <-?php echo $user_info->first_name; ?></h2>

              </div>
            </div-->
            <!-- /menu profile quick info -->

            <br />

            <!-- sidebar menu -->
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
              <div class="menu_section">
                <h3>General</h3>
                <ul class="nav side-menu">

                  <!-- <li><a><i class="fa fa-home"></i> Dashboards </a> -->
				  <?php  if($this->ion_auth->in_group('admin') || $this->ion_auth->in_group('national')){ ?>

					<li><a href="<?php echo base_url(); ?>/National/index"><i class="fa fa-institution"></i> GRA HQ<!-- <span class="fa fa-chevron-down"></span> --></a>
						<ul class="nav child_menu">
						</li>
						</ul>
				<!-- 	</li> -->

          <li><a href="<?php echo base_url(); ?>/Regional/regionalindex"><i class="fa fa-cubes"></i> Regionals <!-- <span class="fa fa-chevron-down"></span> --></a>
          </li>
				  <li><a href="<?php echo base_url(); ?>/District/districtindex"><i class="fa fa-binoculars"></i> District<!--  <span class="fa fa-chevron-down"></span> --></a>
          </li>
				  <li><a href="<?php echo base_url(); ?>/Community/communityindex"><i class="fa fa-building"></i> Communities<!--  <span class="fa fa-chevron-down"></span> --></a>
           </li>
				  <!-- <li><a href="<?php //echo base_url(); ?>/Facility/facilityindex"><i class="fa fa-book"></i> Facilities</a> -->
           </li>
          <li><a href="<?php echo base_url(); ?>/Businesses/businessindex/<?php echo $user_info->user_id?>"><i class="fa fa-book"></i> Businesses<!--  <span class="fa fa-chevron-down"></span> --></a>
             </li>
          <!-- ################### Bottom Menus###################################################################### -->
           </ul>
              </div>
              <div class="menu_section">
                <h3></h3>EXTRAS
                <ul class="nav side-menu">
                  <li><a><i class="fa fa-cog"></i> SETUPS <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                 <!--      <li><a href="e_commerce.html">Regional</a></li>
                      <li><a href="projects.html">District</a></li>
                      <li><a href="project_detail.html">Communities</a></li>
                      <li><a href="contacts.html">Facilities</a></li> -->
                      <li><a href="<?php echo base_url(); ?>Tax/index">Tax</a></li>
                      <li><a href="<?php echo base_url(); ?>Company/index">Company</a></li>
                      <li><a href="<?php echo base_url(); ?>TaxCompany/index">Tax Company</a></li>
                      <li><a href="<?php echo base_url(); ?>Location/index">Location</a></li>
                    </ul>
                  </li>
               <li><a href="<?php echo base_url(); ?>/Dashboard/new_profile"><i class="fa fa-user"></i>PROFILE</a>
            </li>
    					<li><a  href="<?php echo base_url(); ?>/Auth/index"><i class="fa fa-user"></i>USER <!-- <span class="fa fa-chevron-down"></span> --></a>
    					</li>


              </ul>
            </div>

          </div>
         <!--   ###################Regional View############################################ -->
          <?php } elseif($this->ion_auth->in_group('regional')){?>
             <li><a href="<?php echo base_url(); ?>/Regional/regionalindex"><i class="fa fa-cubes"></i> Regionals <!-- <span class="fa fa-chevron-down"></span> --></a>
          </li>
          <li><a href="<?php echo base_url(); ?>/District/districtindex"><i class="fa fa-binoculars"></i> District<!--  <span class="fa fa-chevron-down"></span> --></a>
          </li>
          <li><a href="<?php echo base_url(); ?>/Community/communityindex"><i class="fa fa-building"></i> Communities<!--  <span class="fa fa-chevron-down"></span> --></a>
           </li>
          <!-- <li><a href="<?php //echo base_url(); ?>/Facility/facilityindex"><i class="fa fa-book"></i> Facilities</a> -->
           </li>
             <li><a href="<?php echo base_url(); ?>/Businesses/businessindex/<?php echo $user_info->user_id?>"><i class="fa fa-book"></i> Businesses<!--  <span class="fa fa-chevron-down"></span> --></a>
             </li>
          <!-- ################### Bottom Menus###################################################################### -->
           </ul>
              </div>
              <div class="menu_section">
                <h3></h3>EXTRAS
                <ul class="nav side-menu">
                  <li><a><i class="fa fa-cog"></i> SETUPS <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="<?php echo base_url(); ?>Tax/index">Tax</a></li>
                      <li><a href="<?php echo base_url(); ?>Company/index">Company</a></li>
                      <li><a href="<?php echo base_url(); ?>TaxCompany/index">Tax Company</a></li>
                      <li><a href="<?php echo base_url(); ?>Location/index">Location</a></li>
                    </ul>
                  </li>
               <li><a href="<?php echo base_url(); ?>/Dashboard/new_profile"><i class="fa fa-user"></i>PROFILE</a>
            </li>



              </ul>
            </div>

          </div>
<!--
       #################Fech District########################################################### -->

        <?php } elseif($this->ion_auth->in_group('district')){?>
          <li><a href="<?php echo base_url(); ?>/District/districtindex"><i class="fa fa-binoculars"></i> District<!--  <span class="fa fa-chevron-down"></span> --></a>
          </li>
          <li><a href="<?php echo base_url(); ?>/Community/communityindex"><i class="fa fa-building"></i> Communities<!--  <span class="fa fa-chevron-down"></span> --></a>
           </li>
          <!-- <li><a href="<?php //echo base_url(); ?>/Facility/facilityindex"><i class="fa fa-book"></i> Facilities</a> -->
           </li>
            <li><a href="<?php echo base_url(); ?>/Businesses/businessindex/<?php echo $user_info->user_id?>"><i class="fa fa-book"></i> Businesses<!--  <span class="fa fa-chevron-down"></span> --></a>
             </li>
          <!-- ################### Bottom Menus###################################################################### -->
           </ul>
              </div>
              <div class="menu_section">
                <h3></h3>EXTRAS
                <ul class="nav side-menu">
                  <li><a><i class="fa fa-cog"></i> SETUPS <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                       <li><a href="<?php echo base_url(); ?>Tax/index">Tax</a></li>
                      <li><a href="<?php echo base_url(); ?>Company/index">Company</a></li>
                      <li><a href="<?php echo base_url(); ?>TaxCompany/index">Tax Company</a></li>
                      <li><a href="<?php echo base_url(); ?>Location/index">Location</a></li>
                    </ul>
                  </li>
               <li><a href="<?php echo base_url(); ?>/Dashboard/new_profile"><i class="fa fa-user"></i>PROFILE</a>
            </li>



              </ul>
            </div>

          </div>
          <?php } elseif($this->ion_auth->in_group('community')){?>
          <li><a href="<?php echo base_url(); ?>/Community/communityindex"><i class="fa fa-building"></i> Communities<!--  <span class="fa fa-chevron-down"></span> --></a>
           </li>s
          <!-- <li><a href="<?php //echo base_url(); ?>/Facility/facilityindex"><i class="fa fa-book"></i> Facilities</a> -->
           </li>
             <li><a href="<?php echo base_url(); ?>/Businesses/businessindex/<?php echo $user_info->user_id?>"><i class="fa fa-book"></i> Businesses<!--  <span class="fa fa-chevron-down"></span> --></a>
             </li>
          <!-- ################### Bottom Menus###################################################################### -->
           </ul>
              </div>
              <div class="menu_section">
                <h3></h3>EXTRAS
                <ul class="nav side-menu">
                  <li><a><i class="fa fa-cog"></i> SETUPS <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                       <li><a href="<?php echo base_url(); ?>Tax/index">Tax</a></li>
                      <li><a href="<?php echo base_url(); ?>Company/index">Company</a></li>
                      <li><a href="<?php echo base_url(); ?>TaxCompany/index">Tax Company</a></li>
                      <li><a href="<?php echo base_url(); ?>Location/index">Location</a></li>
                    </ul>
                  </li>
               <li><a href="<?php echo base_url(); ?>/Dashboard/new_profile"><i class="fa fa-user"></i>PROFILE</a>
            </li>

              </ul>
            </div>

         <!--  </div> -->

          <?php } elseif($this->ion_auth->in_group('facility')){?>
            <!-- <li><a href="<?php //echo base_url(); ?>/Facility/facilityindex"><i class="fa fa-book"></i> Facilities</a> -->
           </li>
             <li><a href="<?php echo base_url(); ?>/Businesses/businessindex/<?php echo $user_info->user_id?>"><i class="fa fa-book"></i> Businesses<!--  <span class="fa fa-chevron-down"></span> --></a>
          <!-- ################### Bottom Menus###################################################################### -->
           </ul>
              </div>
              <div class="menu_section">
                <h3></h3>EXTRAS
                <ul class="nav side-menu">
                  <li><a><i class="fa fa-cog"></i> SETUPS <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                       <li><a href="<?php echo base_url(); ?>Tax/index">Tax</a></li>
                      <li><a href="<?php echo base_url(); ?>Company/index">Company</a></li>
                      <li><a href="<?php echo base_url(); ?>TaxCompany/index">Tax Company</a></li>
                      <li><a href="<?php echo base_url(); ?>Location/index">Location</a></li>
                    </ul>
                  </li>
               <li><a href="<?php echo base_url(); ?>/Dashboard/new_profile"><i class="fa fa-user"></i>PROFILE</a>
            </li>



              </ul>
            </div>

          </div>

          <?php } else  {?>
         <li><a href="<?php echo base_url(); ?>/Regional/regionalindex"><i class="fa fa-cubes"></i> Regionals <!-- <span class="fa fa-chevron-down"></span> --></a>
          </li>
          <li><a href="<?php echo base_url(); ?>/District/districtindex"><i class="fa fa-binoculars"></i> District<!--  <span class="fa fa-chevron-down"></span> --></a>
          </li>
          <li><a href="<?php echo base_url(); ?>/Community/communityindex"><i class="fa fa-building"></i> Communities<!--  <span class="fa fa-chevron-down"></span> --></a>
           </li>
          <!-- <li><a href="<?php //echo base_url(); ?>/Facility/facilityindex"><i class="fa fa-book"></i> Facilities</a> -->
           </li>
           <li><a href="<?php echo base_url(); ?>/Businesses/businessindex/<?php echo $user_info->user_id?>"><i class="fa fa-book"></i> Businesses<!--  <span class="fa fa-chevron-down"></span> --></a>
             </li>
          <!-- ################### Bottom Menus###################################################################### -->
           </ul>
              </div>
              <div class="menu_section">
                <h3></h3>EXTRAS
                <ul class="nav side-menu">
                  <li><a><i class="fa fa-cog"></i> SETUPS <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="#">SetUps</a></li>
                      <li><a href="<?php echo base_url(); ?>Tax/index">Tax</a></li>
                      <li><a href="<?php echo base_url(); ?>Company/index">Company</a></li>
                      <li><a href="<?php echo base_url(); ?>TaxCompany/index">Tax Company</a></li>
                      <li><a href="<?php echo base_url(); ?>Location/index">Location</a></li>
                    </ul>
                  </li>
               <li><a href="<?php echo base_url(); ?>/Dashboard/new_profile"><i class="fa fa-user"></i>PROFILE</a>
            </li>

              </ul>
            </div>

          </div>

           <?php } ?>
          <!-- /sidebar menu -->

            <!-- /menu footer buttons -->
            <div class="sidebar-footer hidden-small">
              <a data-toggle="tooltip" data-placement="top" title="Settings">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Lock">
                <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Logout" href="<?php echo base_url(); ?>/Auth/logout">
                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
              </a>
            </div>
            <!-- /menu footer buttons -->
          </div>
        </div>

        <!-- top navigation -->
        <div class="top_nav">
          <div class="nav_menu">
              <div class="nav toggle">
                <a id="menu_toggle"><i class="fa fa-bars" style="color:#12034c!important"></i></a>
              </div>
              <nav class="nav navbar-nav">
              <ul class=" navbar-right">
                <li class="nav-item dropdown open" style="padding-left: 15px;">
                  <a href="javascript:;" class="user-profile dropdown-toggle" aria-haspopup="true" id="navbarDropdown" data-toggle="dropdown" aria-expanded="false">
                    <img src="<?php echo base_url(); ?>assets/images/post/<?php echo  $user_info->photo;?>" alt="..."><?php echo $user_info->last_name; ?>
                  </a>
                  <div class="dropdown-menu dropdown-usermenu pull-right" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item"  href="<?php echo base_url(); ?>/Dashboard/new_profile"> Profile</a>
                      <a class="dropdown-item"  href="javascript:;">
                        <span class="badge bg-red pull-right">50%</span>
                        <span>Settings</span>
                      </a>
                  <a class="dropdown-item"  href="javascript:;">Help</a>
                    <a class="dropdown-item"  href="<?php echo base_url(); ?>/auth/logout"><i class="fa fa-sign-out pull-right"></i> Log Out</a>
                  </div>
                </li>

                <li role="presentation" class="nav-item dropdown open">
                  <a href="javascript:;" class="dropdown-toggle info-number" id="navbarDropdown1" data-toggle="dropdown" aria-expanded="false">
                    <i class="fa fa-envelope-o"></i>
                    <span class="badge bg-green">6</span>
                  </a>
                  <ul class="dropdown-menu list-unstyled msg_list" role="menu" aria-labelledby="navbarDropdown1">
                    <li class="nav-item">
                      <a class="dropdown-item">
                        <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                        <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="dropdown-item">
                        <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                        <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="dropdown-item">
                        <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                        <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="dropdown-item">
                        <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                        <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <div class="text-center">
                        <a class="dropdown-item">
                          <strong>See All Alerts</strong>
                          <i class="fa fa-angle-right"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <!-- /top navigation -->