<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/png" href="<?php echo base_url(); ?>/assets/images/icons/clogo1.png" />
    <title>Parishioner Church System</title>

    <!-- inject:css -->
    <link rel="stylesheet"  type="text/css"  href="<?php echo base_url(); ?>/assets/dashboard/bower_components/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>/assets/dashboard/bower_components/font-awesome/css/font-awesome.min.css">
    <!-- endinject -->

     <!-- Main Style  -->
     <link rel="stylesheet" href="<?php echo base_url(); ?>/assets/dashboard/dist/css/main.css">

      <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>/assets/vendor/animsition/css/animsition.min.css">

    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>/assets/vendor/select2/select2.min.css">

    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>/assets/css/util.css">

    <!-- Rickshaw Chart Depencencies -->
    <link rel="stylesheet" href="<?php echo base_url(); ?>/assets/dashboard/bower_components/rickshaw/rickshaw.min.css">


    <!--Data Table-->
    <link href="<?php echo base_url(); ?>/assets/dashboard/bower_components/datatables/media/css/jquery.dataTables.css" rel="stylesheet">
    <link href="<?php echo base_url(); ?>/assets/dashboard/bower_components/datatables-tabletools/css/dataTables.tableTools.css" rel="stylesheet">
    <link href="<?php echo base_url(); ?>/assets/dashboard/bower_components/datatables-colvis/css/dataTables.colVis.css" rel="stylesheet">
    <link href="<?php echo base_url(); ?>/assets/dashboard/bower_components/datatables-responsive/css/responsive.dataTables.scss" rel="stylesheet">
    <link href="<?php echo base_url(); ?>/assets/dashboard/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css" rel="stylesheet">

    <link href="  https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css" rel="stylesheet">
    <link href="  https://cdn.datatables.net/buttons/1.5.2/css/buttons.dataTables.min.css" rel="stylesheet">

     <link rel="stylesheet" href="<?php echo base_url(); ?>/assets/bower_components/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>/assets/bower_components/font-awesome/css/font-awesome.min.css">
        <!-- endinject -->

        <!-- Main Style  -->
    <link rel="stylesheet" href="<?php echo base_url(); ?>/assets/dist/css/main.css">

    <script src="<?php echo base_url(); ?>/assets/dashboard/bower_components/jquery/dist/jquery.min.js"></script>

    <script src="<?php echo base_url(); ?>/assets/dashboard/js/modernizr-custom.js"></script>

    <script src="<?php echo base_url(); ?>/assets/dashboard/assets/js/modernizr-custom.js"></script>





    </head>
    <body>

        <div id="ui" class="ui">

            <!--header start-->
            <header id="header" class="ui-header">

                <div class="navbar-header">
                    <!--logo start-->
                    <a href="<?php echo base_url(); ?>/Dashboard/index" class="navbar-brand">
                        <span class="logo"><img src="<?php echo base_url(); ?>/assets/dashboard/imgs/logo.png" alt=""/></span>
                        <span class="logo-compact"></span>
                    </a>
                    <!--logo end-->
                </div>

                <div class="search-dropdown dropdown pull-right visible-xs">
                    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-expanded="true"><i class="fa fa-search"></i></button>
                    <div class="dropdown-menu">
                        <form >
                            <input class="form-control" placeholder="Search here..." type="text">
                        </form>
                    </div>
                </div>

                <div class="navbar-collapse nav-responsive-disabled">

                    <!--toggle buttons start-->
                    <ul class="nav navbar-nav">
                        <li>
                            <a class="toggle-btn" data-toggle="ui-nav" href="#">
                                <i class="fa fa-bars"></i>
                            </a>
                        </li>
                    </ul>


                    <!-- toggle buttons end -->

                    <!--search start-->
                    <form class="search-content hidden-xs" >

                        <div class="clock" >
                          <i class="fa fa-clock-o" style="font-size:12px;margin-right:2%!important"></i>  <a id="Date"></a> |
                          <!-- <i class="fa fa-clock-o" style="font-size:12px" style="margin-left:2%!important"></i> -->
                            <a href=""   id="hours" style="margin-left:2%!important">: </a>
                            <a href=""  id="point">: </a>
                            <a href=""  id="min">: </a>
                            <a href="" id="point"></a>
                            <a href="" id="sec"> </a>
                        </div>

                    </form>


                    <!--search end-->



                    <!--notification start-->
                    <ul class="nav navbar-nav navbar-right">
                        <li> <a  href="https://www.facebook.com/stjamesosu/" target="_blank"> <i class="fa fa-facebook"></i> </a></li>
                        <li> <a href="https://www.youtube.com/results?search_query=st+james+catholic+church+osu" target="_blank"> <i class="fa fa-youtube"></i> </a> </li>
                        <li> <a href="http://www.stjamesosu.org" target="_blank"> <i class="fa fa-link"></i>Website </a></li>
                        <li class="dropdown">

                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-bell-o"></i>
                                <span class="badge">5</span>
                            </a>

                            <!--dropdown -->
                            <ul class="dropdown-menu dropdown-menu--responsive">
                                <div class="dropdown-header">Notifications (12)</div>
                                <ul class="Notification-list Notification-list--small niceScroll list-group">
                                    <li class="Notification list-group-item">
                                        <button class="Notification__status Notification__status--read" type="button" name="button"></button>
                                        <a href="#">
                                            <div class="Notification__avatar Notification__avatar--danger pull-left" href="#">
                                                <i class="Notification__avatar-icon fa fa-bolt"></i>
                                            </div>
                                            <div class="Notification__highlight">
                                                <p class="Notification__highlight-excerpt"><b>Server Error Report</b></p>
                                                <p class="Notification__highlight-time">1.2 hours ago</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="Notification list-group-item">
                                        <button class="Notification__status Notification__status--read" type="button" name="button"></button>
                                        <a href="#">
                                            <div class="Notification__avatar Notification__avatar--success pull-left" href="#">
                                                <i class="Notification__avatar-icon fa fa-user-plus"></i>
                                            </div>
                                            <div class="Notification__highlight">
                                                <p class="Notification__highlight-excerpt"><b>New Member Registration</b></p>
                                                <p class="Notification__highlight-time">2 hours ago</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="Notification list-group-item">
                                        <button class="Notification__status Notification__status--read" type="button" name="button"></button>
                                        <a href="#">
                                            <div class="Notification__avatar pull-left" href="#">
                                                <img src="imgs/a0.jpg" alt="...">
                                            </div>
                                            <div class="Notification__highlight">
                                                <p class="Notification__highlight-excerpt"><b>Tomas Edison</b> and 4 other people like your post “keep clam and watch the fizz”.</p>
                                                <p class="Notification__highlight-time">1 day ago</p>
                                            </div>
                                        </a>
                                    </li>

                                    <li class="Notification list-group-item">
                                        <button class="Notification__status Notification__status--unread" type="button" name="button"></button>
                                        <a href="#">
                                            <div class="Notification__avatar pull-left" href="#">
                                                <img src="imgs/a0.jpg" alt="...">
                                            </div>
                                            <div class="Notification__highlight">
                                                <p class="Notification__highlight-excerpt"><b>Luciad Extic</b> can join conference.</p>
                                                <p class="Notification__highlight-time">1 hour ago</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="Notification list-group-item">
                                        <button class="Notification__status Notification__status--unread" type="button" name="button"></button>
                                        <a href="#">
                                            <div class="Notification__avatar Notification__avatar--info pull-left" href="#">
                                                <i class="Notification__avatar-icon fa fa-database"></i>
                                            </div>
                                            <div class="Notification__highlight">
                                                <p class="Notification__highlight-excerpt"><b>Database Error</b></p>
                                                <p class="Notification__highlight-time">2 days ago</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="Notification list-group-item">
                                        <button class="Notification__status Notification__status--read" type="button" name="button"></button>
                                        <a href="#">
                                            <div class="Notification__avatar Notification__avatar--danger pull-left" href="#">
                                                <i class="Notification__avatar-icon fa fa-bolt"></i>
                                            </div>
                                            <div class="Notification__highlight">
                                                <p class="Notification__highlight-excerpt"><b>Server Error Report</b></p>
                                                <p class="Notification__highlight-time">1.2 hours ago</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="Notification list-group-item">
                                        <button class="Notification__status Notification__status--read" type="button" name="button"></button>
                                        <a href="#">
                                            <div class="Notification__avatar Notification__avatar--success pull-left" href="#">
                                                <i class="Notification__avatar-icon fa fa-user-plus"></i>
                                            </div>
                                            <div class="Notification__highlight">
                                                <p class="Notification__highlight-excerpt"><b>New Member Registration</b></p>
                                                <p class="Notification__highlight-time">2 hours ago</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <div class="dropdown-footer"><a href="#">View more</a></div>
                            </ul>
                            <!--/ dropdown -->
                        </li>

                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-envelope-o"></i>
                                <span class="badge">5</span>
                            </a>
                            <!--dropdown -->
                            <ul class="dropdown-menu dropdown-menu--responsive">
                                <div class="dropdown-header">Messages (12)</div>
                                <ul class="Message-list niceScroll list-group">
                                    <li class="Message list-group-item">
                                        <button class="Message__status Message__status--read" type="button" name="button"></button>
                                        <a href="#">
                                            <div class="Message__avatar Message__avatar--danger pull-left" href="#">
                                                <img src="imgs/a2.jpg" alt="...">
                                            </div>
                                            <div class="Message__highlight">
                                                <span class="Message__highlight-name">Lubida Teresa</span>
                                                <p class="Message__highlight-excerpt">Hello there! Can you send me a photo please?</p>
                                                <p class="Message__highlight-time">1 hour ago</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="Message list-group-item">
                                        <button class="Message__status Message__status--unread" type="button" name="button"></button>
                                        <a href="#">
                                            <div class="Message__avatar Message__avatar--danger pull-left" href="#">
                                                <img src="imgs/a1.jpg" alt="...">
                                            </div>
                                            <div class="Message__highlight">
                                                <span class="Message__highlight-name">Sara Souaidan</span>
                                                <p class="Message__highlight-excerpt">Hello there!</p>
                                                <p class="Message__highlight-time">1 hour ago</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="Message list-group-item">
                                        <button class="Message__status Message__status--read" type="button" name="button"></button>
                                        <a href="#">
                                            <div class="Message__avatar Message__avatar--danger pull-left" href="#">
                                                <img src="imgs/a0.jpg" alt="...">
                                            </div>
                                            <div class="Message__highlight">
                                                <span class="Message__highlight-name">Addy Osmany</span>
                                                <p class="Message__highlight-excerpt">Blah Blah Blah</p>
                                                <p class="Message__highlight-time">1 hour ago</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="Message list-group-item">
                                        <button class="Message__status Message__status--read" type="button" name="button"></button>
                                        <a href="#">
                                            <div class="Message__avatar Message__avatar--danger pull-left" href="#">
                                                <img src="imgs/a0.jpg" alt="...">
                                            </div>
                                            <div class="Message__highlight">
                                                <span class="Message__highlight-name">Picaso Patel</span>
                                                <p class="Message__highlight-excerpt">Bhai, are you there?</p>
                                                <p class="Message__highlight-time">2 years ago</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="Message list-group-item">
                                        <button class="Message__status Message__status--read" type="button" name="button"></button>
                                        <a href="#">
                                            <div class="Message__avatar Message__avatar--danger pull-left" href="#">
                                                <img src="imgs/a0.jpg" alt="...">
                                            </div>
                                            <div class="Message__highlight">
                                                <span class="Message__highlight-name">Bengali Tiger</span>
                                                <p class="Message__highlight-excerpt">Mu ha ha</p>
                                                <p class="Message__highlight-time">10 years ago</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <div class="dropdown-footer"><a href="#">View more</a></div>
                            </ul>
                            <!--/ dropdown -->
                        </li>

                        <li class="dropdown dropdown-usermenu">
                            <a href="#" class=" dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                <!-- <div class="user-avatar"><img src="imgs/a0.jpg" alt="..."></div> -->
                                <span class="hidden-sm hidden-xs"><strong>Administrator </strong></span>
                                <!--<i class="fa fa-angle-down"></i>-->
                                <span class="caret hidden-sm hidden-xs"></span>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-usermenu pull-right">
                                <li><a href="#"><i class="fa fa-cogs"></i>  Settings</a></li>
                              <!--   <li><a href="#"><i class="fa fa-user"></i>  Profile</a></li>
                                <li><a href="#"><i class="fa fa-commenting-o"></i>  Feedback</a></li> -->
                                <li><a href="#"><i class="fa fa-life-ring"></i>  Help</a></li>
                                <li class="divider"></li>
                                <li><a href="<?php echo base_url()?>auth/logout"><i class="fa fa-sign-out"></i> Log Out</a></li>
                            </ul>
                        </li>

                        <li>
                            <a data-toggle="ui-aside-right" href="#"><i class="glyphicon glyphicon-option-vertical"></i></a>
                        </li>
                    </ul>
                    <!--notification end-->

                </div>

            </header>
            <!--header end-->

            <!--sidebar start-->
            <aside id="aside" class="ui-aside">
                <ul class="nav" ui-nav id= "menu">
                    <li class="active">
                        <a href="<?php echo base_url(); ?>/Dashboard/index"><i class="fa fa-home"></i><span style="text-align: center">PARISHIONER CHURCH SYSYTEM </span></a>
                        <ul class="nav nav-sub">
                            <li class="nav-sub-header"><a href="index.php"><span>Dashboard</span></a></li>
                        </ul>
                    </li>

                    <li>

                          <i class="fa fa-search" style="font-size:12px"></i>
                         <input name="search" type="text" id="search" placeholder="Search " class="form-control" style="height:20px;background: #3a466c!important;color:#fff!important;text-align: center!important" />
                         <!--  <ul  class="list-group"  id="result"></ul> -->


                     </li>
                    <li>
                        <a href="#"><i class="fa fa-address-book"></i><span>Parishioner Details</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="nav nav-sub">
                             <li class="nav-sub-header"><a href="#"><span>Parishioner Details</span></a>

                                 <li ><a href="#"><i class="fa fa-users"></i><span>Membership Details</span><i class="fa fa-angle-right pull-right"></i></a>
                                  <ul class="detials">
                                      <li><a href="<?php echo base_url(); ?>/Dashboard/edit"><span>Add Membership Details</span></a></li>
                                      <li><a href="#"><span style="color:#fff"> Parishioners Personal Information</span><i class="fa fa-angle-right pull-right"></i></a>
                                           <ol>
                                                <li><a href="<?php echo base_url(); ?>/Dashboard/membership_list"><span><strong>Personal Details List</strong></span></a></li>
                                                <li><a href="<?php echo base_url(); ?>/Dashboard/nationality_list"><span> Nationality Details List</span></a></li>
                                                <li><a href="<?php echo base_url(); ?>/Dashboard/education_list"><span> Education Details List</span></a></li>
                                                <li><a href="<?php echo base_url(); ?>/Dashboard/emergency_list"><span> Emergency Details List</span></a></li>
                                                <li><a href="<?php echo base_url(); ?>/Dashboard/family_list"><span> Family Details List</span></a></li>
                                                <li><a href="<?php echo base_url(); ?>/Dashboard/occupation_list"><span> Occupation Details List</span></a></li>
                                                 <li><a href="<?php echo base_url(); ?>/Dashboard/search"><span> Parishioner Search</span></a></li>

                                          </ol>
                                      </li>

                                   </ul>
                                 </li>

                                 <li><a href="#"><i class="fa fa-user-circle"></i><span> Visitors Details</span><i class="fa fa-angle-right pull-right"></i></a>
                                    <ul>
                                        <li><a href="<?php echo base_url(); ?>/Dashboard/inviteedetails"><span> Add  Visitor Record</span></a></li>
                                         <li><a href="#"><span style="color:#fff"> Visitors Details List</span><i class="fa fa-angle-right pull-right"></i></a>
                                           <ol>
                                                <li><a href="<?php echo base_url(); ?>/Dashboard/invitee_list"><span> Invitee Details List</span></a></li>
                                                <li><a href="<?php echo base_url(); ?>/Dashboard/visitordetails_list"><span> Visitor Contact Details List</span></a></li>
                                                <li><a href="<?php echo base_url(); ?>/Dashboard/visitorotherdetails_list"><span> Visitor Other Details List</span></a></li>

                                            </ol>
                                      </li>
                                       <!--  <li><a href="<?php echo base_url(); ?>/Dashboard/visitor_list"><span>   </span></a></li> -->
                                    </ul>
                                 </li>

                                 <li><a href="#"><i class="fa fa-universal-access"></i><span> Sunday School</span><i class="fa fa-angle-right pull-right"></i></a>
                                    <ul>
                                        <li><a href="<?php echo base_url(); ?>/Dashboard/sschool"><span> Add Sunday School Register</span></a></li>
                                        <li><a href="<?php echo base_url(); ?>/Dashboard/sschool_list"><span> Sunday School Register List </span></a></li>
                                    </ul>
                                 </li>
                            </li>
                        </ul>
                    </li>
                       <li>
                        <a href="#"><i class="fa fa-bank"></i><span>Administration</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="nav nav-sub">
                             <li class="nav-sub-header"><a href="#"><span>Administration</span></a></li>
                             <li><a href="#"><i class="fa fa-suitcase"></i><span> Finance</span><i class="fa fa-angle-right pull-right"></i></a>
                                  <ul>
                                    <li><a href="<?php echo base_url(); ?>/Dashboard/bankdetails"><span> Add  Finance Record</span><i class="fa fa-angle-right pull-right"></i></a></li>
                                 <!--    <li><a href="<?php echo base_url(); ?>/Dashboard/bankdetails"><span> Add  Invoice</span><i class="fa fa-angle-right pull-right"></i></a></li> -->
                                    <li><a href="<?php echo base_url(); ?>/Dashboard/finance_list"><span>  Finance List </span></a>
                                        <ol>
                                                <li><a href="<?php echo base_url(); ?>/Dashboard/bankdetails_list"><span> Bank Details</span></a></li>
                                                <li><a href="<?php echo base_url(); ?>/Dashboard/churchfunds_list"><span> Church Funds </span></a></li>
                                                <li><a href="<?php echo base_url(); ?>/Dashboard/churchproject_list"><span> Church Project </span></a></li>
                                                <li><a href="<?php echo base_url(); ?>/Dashboard/emergency_list"><span> Church Expense </span></a></li>
                                                <li><a href="<?php echo base_url(); ?>/Dashboard/family_list"><span> Church Loans</span></a></li>
                                                <!-- <li><a href="<?php echo base_url(); ?>/Dashboard/invoice"><span> Invoice </span></a></li> -->


                                            </ol>
                                    </li>
                                  </ul>
                             </li>

                             <li><a href="#"><i class="fa fa-street-view"></i><span> Church Pledges </span><i class="fa fa-angle-right pull-right"></i></a>
                                <ul>
                                    <li><a href="<?php echo base_url(); ?>/Dashboard/pledge"><span> Add Church Pledges Record</span></a></li>
                                    <li><a href="<?php echo base_url(); ?>/Dashboard/pledge_list"><span> Church Pledges List </span></a></li>
                                </ul>
                             </li>

                             <li><a href="#"><i class="fa fa-shopping-basket"></i><span> Offering </span><i class="fa fa-angle-right pull-right"></i></a>
                                 <ul>
                                    <li><a href="<?php echo base_url(); ?>/Dashboard/offering"><span> Add  Offering Record</span></a></li>
                                    <li><a href="<?php echo base_url(); ?>/Dashboard/offering_list"><span>  Offering List</span></a></li>
                                </ul>
                             </li>

                              <li><a href="#"><i class="fa fa-heartbeat"></i><span> Counsellors </span><i class="fa fa-angle-right pull-right"></i></a>
                                  <ul>
                                    <li><a href="<?php echo base_url(); ?>/Dashboard/Counsellors"><span> Add  Counsellors  Record</span></a></li>
                                    <li><a href="<?php echo base_url(); ?>/Dashboard/counsellors_list"><span>  Counsellors  List </span></a></li>
                                </ul>
                             </li>

                               <li><a href="#"><i class="fa fa-handshake-o"></i><span> Counselling </span><i class="fa fa-angle-right pull-right"></i></a>
                                 <ul>
                                    <li><a href="<?php echo base_url(); ?>/Dashboard/Counselling"><span> Add Counselling Record</span></a></li>
                                    <li><a href="<?php echo base_url(); ?>/Dashboard/counselling_list"><span> Counselling List </span></a></li>
                                </ul>
                             </li>
                        </ul>
                    </li>

                    <li>
                        <a href="#"><i class="fa fa-birthday-cake"></i><span>Events</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="nav nav-sub">

                             <li><a href="#"><i class="fa fa-exchange"></i><span> Sacraments</span><i class="fa fa-angle-right pull-right"></i></a>
                                   <ul>
                                    <li><a href="<?php echo base_url(); ?>/Dashboard/baptism"><span> Add Sacrament Record</span></a></li>
                                    <li><a href="#"><span> Sacraments List </span></a>
                                        <ol>
                                            <li><a href="<?php echo base_url(); ?>/Dashboard/sacraments_baptism_list"><span>Baptism </span></a></li>
                                            <li><a href="<?php echo base_url(); ?>/Dashboard/sacraments_communion_list"><span> Communion </span></a></li>
                                            <li><a href="<?php echo base_url(); ?>/Dashboard/sacraments_confirmation_list"><span> Confirmation </span></a></li>
                                            <li><a href="<?php echo base_url(); ?>/Dashboard/sacraments_matrimony_list"><span> Holy Matrimony </span></a></li>
                                        </ol>
                                    </li>
                                </ul>
                              </li>
                             <li><a href="#"><i class="fa fa-hotel"></i><span> Reservations </span><i class="fa fa-angle-right pull-right"></i></a>
                                <ul>
                                    <li><a href="<?php echo base_url(); ?>/Dashboard/reservations"><span> Add Reservations</span></a></li>
                                    <li><a href="<?php echo base_url(); ?>/Dashboard/reservations_list"><span> Reservations List </span></a></li>
                                </ul>
                             </li>
                             <li><a href=""><i class="fa fa-id-badge"></i><span> Church Planner  </span><i class="fa fa-angle-right pull-right"></i></a>
                                <ul>
                                    <li><a href="<?php echo base_url(); ?>/Dashboard/planner"><span> Add Church Planner Record</span></a></li>
                                    <li><a href="<?php echo base_url(); ?>/Dashboard/planner_list"><span> Church Planner List </span></a></li>
                                </ul>
                             </li>
                              <li><a href="#"><i class="fa fa-heart"></i><span> Church Wedding </span><i class="fa fa-angle-right pull-right"></i></a>
                                <ul>
                                    <li><a href="<?php echo base_url(); ?>/Dashboard/churchwedding"><span> Add Church Wedding Record</span></a></li>
                                    <li><a href="<?php echo base_url(); ?>/Dashboard/churchwedding_list"><span> Church Wedding List </span></a></li>
                                </ul>
                               </li>
                        </ul>
                    </li>




                     <li>
                        <a href="#"><i class="fa fa-inbox"></i><span>Tithe</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="nav nav-sub">

                             <li><!-- a href="#"><i class="fa fa-exchange"></i><span> Tithe</span><i class="fa fa-angle-right pull-right"></i></a> -->
                                   <ul>
                                    <li><a href="<?php echo base_url(); ?>/Dashboard/tithe"><span style="font-size:13px!important"> Add Tithe </span></a></li>
                                    <li><a href="<?php echo base_url(); ?>/Dashboard/tithe_list"><span  style="font-size:13px!important"> Tithe List </span></a></li>
                                </ul>
                              </li>
                        </ul>
                    </li>


                     <li>
                        <a href="#"><i class="fa fa-child"></i><span>Mass Intentions</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="nav nav-sub">

                             <li><a href="#"><i class="fa fa-exchange"></i><span> Intentions</span><i class="fa fa-angle-right pull-right"></i></a>
                                   <ul>
                                    <li><a href="<?php echo base_url(); ?>/Dashboard/intentions"><span> Add Mass Intentions </span></a></li>
                                    <li><a href="<?php echo base_url(); ?>/Dashboard/intentions_list"><span> Mass Intentions List </span></a></li>
                                </ul>
                              </li>
                        </ul>
                    </li>





                    <li>
                      <a href=""><i class="fa fa-download"></i><span>Portal</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="nav nav-sub">
                            <li class="nav-sub-header"><a href="note.html"><span>Portal</span></a></li>
                                <ul style="font-size:11px">
                                    <li><a href="<?php echo base_url(); ?>/Dashboard/pledge"><span> Porting In <i class="fa fa-level-down"></i></span></a></li>
                                    <li><a href="<?php echo base_url(); ?>/admin/dashboard/loans"><span> Porting out <i class="fa fa-level-up"></i></span></a></li>
                                </ul>
                        </ul>
                    </li>


                    <li>
                      <a href="<?php echo base_url(); ?>/Dashboard/reports"><i class="fa fa-server"></i><span>Reports</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="nav nav-sub">
                            <li class="nav-sub-header"><a href="<?php echo base_url(); ?>/Dashboard/reports"><span>Reports</span></a></li>
                        </ul>
                    </li>



                    <li>
                        <a href="<?php echo base_url(); ?>/Dashboard/note"><i class="fa fa-file-text-o"></i><span> General Notes <small class="label label-warning">Info</small></span></a>
                        <ul class="nav nav-sub">
                            <li class="nav-sub-header"><a href="note.html"><span>Notes</span></a></li>
                        </ul>
                    </li>
                    <li>
                      <a href="<?php echo base_url(); ?>/admin/dashboard/counselling"><i class="fa fa-wrench"></i><span>Maintenance</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="nav nav-sub">
                            <li class="nav-sub-header"><a href="<?php echo base_url(); ?>/admin/dashboard/counselling"><span>Maintenance</span></a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-question-circle"></i><span>Help</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="nav nav-sub">
                            <li class="nav-sub-header"><a href="#"><span>Help</span></a></li>
                        </ul>
                    </li>
                        </ul>
                    </li>
                </ul>
            </aside>

              <script>
                $(document).ready(function(){
                    $('#search').keyup(function(){
                      search_table($(this).val());
                    });


                function search_table(value){
                    $('#menu  ul').each(function(){
                        var found ="false";
                        $(this).each(function(){

                            if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >=0)
                            {
                                found = "true";
                            }

                        });

                        if(found == 'true')
                        {
                            $(this).show();
                        }
                        else
                         {


                                $(this).hide();
                         }


                    });
                }

                });
            </script>