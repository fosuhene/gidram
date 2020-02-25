  <!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags -->

    <!-- Title -->
    <title>Churchsuite</title>

    <!-- Favicon -->
    <link rel="icon" href="<?php echo base_url(); ?>/assets/main/img/core-img/icon.png">
    <!-- These plugins only need for the run this page -->
    <link rel="stylesheet" href="<?php echo base_url(); ?>/assets/main/css/default-assets/datatables.bootstrap4.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>/assets/main/css/default-assets/responsive.bootstrap4.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>/assets/main/js/default-assets/vector-map/jquery-jvectormap-2.0.2.css">
    <!-- Master Stylesheet [If you remove this CSS file, your file will be broken undoubtedly.] -->
    <link rel="stylesheet" href="<?php echo base_url(); ?>/assets/main/style.css">
     <link href="<?php echo base_url(); ?>/assets/advanced-datatable/datatable/jquery.dataTables.min.css" rel="stylesheet" />

    <link href="<?php echo base_url(); ?>/assets/advanced-datatable/datatable/buttons.dataTables.min.css" rel="stylesheet" />

    <link href="<?php echo base_url(); ?>/assets/sweetalert/sweetalert.min.css" rel="stylesheet" />
    <!--    <link href=" https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.4.0/fullcalendar.min.css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta.2/css/bootstrap.css" rel="stylesheet" />
    <link href=" https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" /> -->
</head>

<body>
    <!-- Preloader -->
       <!--   <div id="droba-loader">
        <div class="loader"></div>
        </div> -->
    <!--Preloader-->

    <!-- ======================================
    ******* Page Wrapper Area Start **********
    ======================================= -->
    <div class="ecaps-page-wrapper">
        <!-- Sidemenu Area -->
        <div class="ecaps-sidemenu-area">
            <!-- Desktop Logo -->
            <div class="ecaps-logo">
                <a href="<?php echo base_url(); ?>/Dashboard/index">
                    <img class="desktop-logo" src="<?php echo base_url(); ?>/assets/login/images/<?php echo $logo->image;?>" alt="Desktop Logo" style="width:160px!important;height:90px!important">
                    <img class="small-logo" src="<?php echo base_url(); ?>/assets/main/img/core-img/smallA.png" alt="Mobile Logo" style="width:120px!important;height:50px!important">
                </a>
            </div>

            <!-- Side Nav -->
            <div class="ecaps-sidenav" id="ecapsSideNav">
                <!-- Side Menu Area -->
                <div class="side-menu-area">
                    <!-- Sidebar Menu -->
                    <nav>
                        <ul class="sidebar-menu" data-widget="tree">
                            <li class="active" style="font-size: 38px!important"><a href="<?php echo base_url(); ?>/Dashboard/index"><i class="fa fa-dashboard"></i> <span>DASHBOARD</span></a></li>
                            <li class="treeview">
                                <a href="javascript:void(0)"><i class="fa fa-users"></i> <span>Membership</span> <i class="fa fa-angle-right"></i></a>
                                <ul class="treeview-menu">
                                    <li><a href="<?php echo base_url(); ?>/Membership/register_member"><i class="fa fa-arrow-circle-o-right"></i>Register Member</a></li>
                                    <li><a href="<?php echo base_url(); ?>/Membership/member_details">Personal Details</a></li>
                                    <li><a href="<?php echo base_url(); ?>/Membership/nationality_details">Nationality Details</a></li>
                                    <li><a href="<?php echo base_url(); ?>/Membership/education_details">Education Details</a></li>
                                    <li><a href="<?php echo base_url(); ?>/Membership/emergency_details">Emergency Details</a></li>
                                    <li><a href="<?php echo base_url(); ?>/Membership/family_details">Family Details</a></li>
                                    <li><a href="<?php echo base_url(); ?>/Membership/occupation_details">Occupation Details</a></li>
                                </ul>
                            </li>

                            <li class="treeview">
                                <a href="javascript:void(0)"><i class="fa fa-inbox"></i> <span>Contributions</span> <i class="fa fa-angle-right"></i></a>
                                <ul class="treeview-menu">
                                    <li><a href="<?php echo base_url(); ?>/Contributions/pledges">Pledges</a></li>
                                    <li><a href="<?php echo base_url(); ?>/Contributions/offering">Offering</a></li>
                                    <li><a href="<?php echo base_url(); ?>/Contributions/tithe">Tithe</a></li>
                                  <!--   <li><a href="project-list.html">Other</a></li> -->
                                </ul>
                            </li>
                            <li class="treeview">
                                <a href="javascript:void(0)"><i class="fa fa-suitcase"></i> <span>Finance</span> <i class="fa fa-angle-right"></i></a>
                                <ul class="treeview-menu">
                                    <li><a href="<?php echo base_url(); ?>/Finance/index">Bank Details</a></li>
                                    <li><a href="<?php echo base_url(); ?>/Finance/church_funds">Church Funds</a></li>
                                    <li><a href="<?php echo base_url(); ?>/Finance/church_project">Church Projects</a></li>
                                    <li><a href="<?php echo base_url(); ?>/Finance/church_expenses">Church Expenses</a></li>
                                    <li><a href="<?php echo base_url(); ?>/Finance/church_loans">Church Loans</a></li>
                                </ul>
                            </li>

                            <li class="treeview">
                                <a href="javascript:void(0)"><i class="fa fa-bank"></i> <span>Administration</span> <i class="fa fa-angle-right"></i></a>
                                <ul class="treeview-menu">
                                    <li><a href="<?php echo base_url(); ?>/Administration/churchinfo">Church Information</a></li>
                                    <li><a href="<?php echo base_url(); ?>/Administration/churchbranch">Create Branch</a></li>
                                    <li><a href="<?php echo base_url(); ?>/Administration/churchservice">Church Service</a></li>
                                    <li><a href="<?php echo base_url(); ?>/Administration/churchgroups">Church Groups</a></li>
                                    <li><a href="<?php echo base_url(); ?>/Administration/churchvisitor">Visitors</a></li>
                                    <li><a href="<?php echo base_url(); ?>/Administration/churchnewconvert">New Converts</a></li>
                                    <li><a href="<?php echo base_url(); ?>/Administration/sschool">Sunday School</a></li>
                                    <!-- <li><a href="<?php echo base_url(); ?>/Administration/counselling">Counselling</a></li> -->
                                </ul>
                            </li>

                            <li class="treeview">
                                <a href="javascript:void(0)"><i class="fa fa-exchange"></i> <span>Communication</span> <i class="fa fa-angle-right"></i></a>
                                <ul class="treeview-menu">
                                    <li><a href="<?php echo base_url(); ?>/Administration/messages">Messages</a></li>
                                    <li><a href="<?php echo base_url(); ?>/Administration/notification">Notification</a></li>
                                </ul>
                            </li>

                            <li class="treeview">
                                <a href="javascript:void(0)"><i class="fa fa-sitemap"></i> <span>Events</span> <i class="fa fa-angle-right"></i></a>
                                <ul class="treeview-menu">
                                    <li><a href="<?php echo base_url(); ?>/Events/baptism">Baptism</a></li>
                                    <li><a href="<?php echo base_url(); ?>/Events/dedications">Dedications</a></li>
                                   <!--  <li><a href="<?php //echo base_url(); ?>/Events/inaugurations">Inaugurations</a></li> -->
                                    <li><a href="<?php echo base_url(); ?>/Events/churchplanner">Church Planner</a></li>
                                    <li><a href="<?php echo base_url(); ?>/Events/churchwedding">Church Wedding</a></li>
                                </ul>
                            </li>

                            <li class="">
                                <a href="<?php echo base_url(); ?>/Dashboard/comment_insert"><i class="fa fa-pencil-square-o"></i> <span> General Notes </span> <!-- <i class="fa fa-angle-right"></i> --></a>
                            </li>
                            <!-- <li class="">
                                <a href="<?php //echo base_url(); ?>/Dashboard/calendar"><i class="fa fa-calendar"></i> <span> Calendar </span></a>
                            </li> -->
                             <li class="">
                                <a href="<?php echo base_url(); ?>/Reports/index"><i class="fa fa-area-chart"></i> <span> Reports <!-- </span> <i class="fa fa-angle-right"></i> --></a>
                            </li>
                            <li class="">
                                <a href="<?php echo base_url(); ?>/Dashboard/profile"><i class="ti-user text-default"></i> <span> Profile</span> <i class=""></i></a>
                            </li>

                           <?php  if($this->ion_auth->in_group('admin')){ ?>
                            <li class="">
                                <a href="<?php echo base_url(); ?>/auth/index"><i class="fa fa-address-card-o"></i> <span>Users</span> <i class="fa fa-address-right"></i></a>
                            </li>
                            <?php  } else{ ?>
                            <?php } ?>

                            <?php  if($this->ion_auth->in_group('admin')){ ?>

                            <li class="treeview">
                                <a href="javascript:void(0)"><i class="fa fa-cog"></i> <span>Settings</span> <i class="fa fa-angle-right"></i></a>
                                <ul class="treeview-menu">
                                    <li><a href="<?php echo base_url(); ?>/Settings/church_level">Church Level Setup</a></li>
                                    <li><a href="<?php echo base_url(); ?>/Settings/index">Offering Type Setup</a></li>
                                    <li><a href="<?php echo base_url(); ?>/Settings/bank_details">Bank Details Setup</a></li>
                                    <li><a href="<?php echo base_url(); ?>/Settings/fund_type">Fund Type Setup</a></li>
                                    <li><a href="<?php echo base_url(); ?>/Settings/service_name">Service Name Setup</a></li>
                                </ul>
                            <?php  } else{ ?>
                            <?php } ?>

                            <li class="">
                                <a href="#"><i class="fa fa-question-circle"></i> <span>Help</span> <i class=""></i></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

         <!-- Top Header Area -->
        <header class="top-header-area d-flex align-items-center justify-content-between">
            <div class="left-side-content-area d-flex align-items-center">
                <!-- Mobile Logo -->
                <div class="mobile-logo mr-3 mr-sm-4">
                    <a href="<?php echo base_url(); ?>/Dashboard/index"><img src="<?php echo base_url(); ?>/assets/main/img/core-img/small-logo.png" alt="Mobile Logo"></a>
                </div>

                <!-- Triggers -->
                <div class="ecaps-triggers mr-1 mr-sm-3">
                    <div class="menu-collasped" id="menuCollasped">
                        <i class="zmdi zmdi-menu"></i>
                    </div>
                    <div class="mobile-menu-open" id="mobileMenuOpen">
                        <i class="zmdi zmdi-menu"></i>
                    </div>
                </div>

                <!-- Left Side Nav -->
                <ul class="left-side-navbar d-flex align-items-center">
                    <li class="nav-item dropdown ml-1 ml-sm-3">
                        <ul class="header-menu nav">
                            <li class="nav-item">
                                <div class="clock" style="font-weight: bold">
                                    <i class="fa fa-clock-o" style="font-size:12px;"></i>  <a id="Date"></a> |
                                    <a href=""   id="hours" >: </a>
                                    <a href=""  id="point">: </a>
                                    <a href=""  id="min">: </a>
                                    <a href="" id="point"></a>
                                    <a href="" id="sec"> </a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="right-side-navbar d-flex align-items-center justify-content-end">
                <!-- Mobile Trigger -->
                <div class="right-side-trigger" id="rightSideTrigger">
                    <i class="ti-align-left"></i>
                </div>

                <!-- Top Bar Nav -->
                <ul class="right-side-content d-flex align-items-center">
                    <li class="hide-phone app-search mr-15">
                        <form role="search" class=""><input type="text" placeholder="Search..." class="form-control"> <button type="submit" class="mr-0"><i class="fa fa-search"></i></button></form>
                    </li>
                    <li class="nav-item dropdown">
                        <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icon_globe-2" aria-hidden="true"></i></button>

                        <div class="dropdown-menu dropdown-menu-right">
                            <!-- Top Message Area -->
                            <div class="top-message-area">
                                <!-- Heading -->
                                <div class="top-message-heading">
                                    <div class="heading-title">
                                        <h6>Messages</h6>
                                    </div>
                                    <span>5 New</span>
                                </div>
                                <div class="message-box" id="messageBox">
                                    <a href="#" class="dropdown-item">
                                        <i class="zmdi zmdi-email-open"></i>
                                        <span class="message-text">
                                            <span>6-hour video course on Angular</span>
                                            <span>3 min ago</span>
                                        </span>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                        <i class="zmdi zmdi-email-open"></i>
                                        <span class="message-text">
                                            <span>Google Ads: You'll get a refund soon</span>
                                            <span>27 min ago</span>
                                        </span>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                        <i class="zmdi zmdi-email-open"></i>
                                        <span class="message-text">
                                            <span>New Feature: HTTP Method Selection</span>
                                            <span>56 min ago</span>
                                        </span>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                        <i class="zmdi zmdi-email-open"></i>
                                        <span class="message-text">
                                            <span>The Complete JavaScript Handbook</span>
                                            <span>1 hour ago</span>
                                        </span>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                        <i class="zmdi zmdi-email-open"></i>
                                        <span class="message-text">
                                            <span>New comment: ecaps Template</span>
                                            <span>2 days ago</span>
                                        </span>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                        <i class="zmdi zmdi-email-open"></i>
                                        <span class="message-text">
                                            <span>6-hour video course on Angular</span>
                                            <span>3 min ago</span>
                                        </span>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                        <i class="zmdi zmdi-email-open"></i>
                                        <span class="message-text">
                                            <span>Google Ads: You'll get a refund soon</span>
                                            <span>27 min ago</span>
                                        </span>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                        <i class="zmdi zmdi-email-open"></i>
                                        <span class="message-text">
                                            <span>New Feature: HTTP Method Selection</span>
                                            <span>56 min ago</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item dropdown">
                        <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icon_lightbulb_alt" aria-hidden="true"></i> <span class="active-status"></span></button>
                        <div class="dropdown-menu dropdown-menu-right">
                            <!-- Top Notifications Area -->
                            <div class="top-notifications-area">
                                <!-- Heading -->
                                <div class="notifications-heading">
                                    <div class="heading-title">
                                        <h6>Notifications</h6>
                                    </div>
                                    <span>5 New</span>
                                </div>

                                <div class="notifications-box" id="notificationsBox">
                                    <a href="#" class="dropdown-item"><i class="ti-face-smile bg-success"></i><span>We've got something for you!</span></a>
                                    <a href="#" class="dropdown-item"><i class="zmdi zmdi-notifications-active bg-danger"></i><span>Domain names expiring on Tuesday</span></a>
                                    <a href="#" class="dropdown-item"><i class="ti-check"></i><span>Your commissions has been sent</span></a>
                                    <a href="#" class="dropdown-item"><i class="ti-heart bg-success"></i><span>You sold an item!</span></a>
                                    <a href="#" class="dropdown-item"><i class="ti-bolt bg-warning"></i><span>Security alert for your linked Google account</span></a>
                                    <a href="#" class="dropdown-item"><i class="ti-face-smile bg-success"></i><span>We've got something for you!</span></a>
                                    <a href="#" class="dropdown-item"><i class="zmdi zmdi-notifications-active bg-danger"></i><span>Domain names expiring on Tuesday</span></a>
                                    <a href="#" class="dropdown-item"><i class="ti-check"></i><span>Your commissions has been sent</span></a>
                                    <a href="#" class="dropdown-item"><i class="ti-heart bg-success"></i><span>You sold an item!</span></a>
                                    <a href="#" class="dropdown-item"><i class="ti-bolt bg-warning"></i><span>Security alert for your linked Google account</span></a>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item dropdown">
                        <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="<?php echo base_url(); ?>/assets/images/post/<?php echo $user_info->photo?>" alt=""></button>
                        <div class="dropdown-menu dropdown-menu-right">
                            <!-- User Profile Area -->
                            <div class="user-profile-area">
                                <div class="user-profile-heading">
                                    <!-- Thumb -->
                                    <div class="profile-thumbnail">
                                        <img src="<?php echo base_url(); ?>/assets/images/post/<?php echo $user_info->photo?>" alt="">
                                    </div>
                                    <!-- Profile Text -->
                                    <div class="profile-text">
                                        <h6><?php echo $user_info->first_name?>  <?php echo $user_info->last_name?></h6>
                                        <span><?php echo $user_info->email?></span>
                                    </div>
                                </div>
                                <a href="<?php echo base_url(); ?>/Dashboard/profile" class="dropdown-item"><i class="ti-user text-default" aria-hidden="true"></i> My profile</a>
                                <a href="#" class="dropdown-item"><i class="zmdi zmdi-email-open text-success" aria-hidden="true"></i> Messages</a>
                                <a href="#" class="dropdown-item"><i class="ti-settings text-default" aria-hidden="true"></i> Account settings</a>
                                <a href="#" class="dropdown-item"><i class="ti-heart text-purple" aria-hidden="true"></i> Support</a>
                                <a href="<?php echo base_url(); ?>/auth/logout" class="dropdown-item"><i class="fa fa-sign-in" aria-hidden="true"></i> Sign-out</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </header>

