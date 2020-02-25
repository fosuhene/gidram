<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <meta name="author" content="Dashboard">
  <meta name="keyword" content="Point of Sales">
  <title>St. James Mini Mart </title>

  <!-- Favicons -->
  <link href="<?php echo base_url(); ?>/assets/img/clogo1.png" rel="icon">
  <link href="<?php echo base_url(); ?>/assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Bootstrap core CSS -->
  <link rel="stylesheet" href="<?php echo base_url(); ?>/assets/lib/multiselect/bootstrap-multiselect.css" />
  <link href="<?php echo base_url(); ?>/assets/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!--external css-->
  <link href="<?php echo base_url(); ?>/assets/lib/font-awesome/css/font-awesome.css" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>/assets/css/zabuto_calendar.css">
  <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>/assets/lib/gritter/css/jquery.gritter.css" />
  <!-- Custom styles for this template -->
  <link href="<?php echo base_url(); ?>/assets/css/style.css" rel="stylesheet">
  <link href="<?php echo base_url(); ?>/assets/css/style-responsive.css" rel="stylesheet">
  <link rel="stylesheet" href="<?php echo base_url(); ?>/assets/lib/multiselect/selectstyle.css" />


  <script src="<?php echo base_url(); ?>/assets/lib/ckeditor/ckeditor.js"></script>

<!--   <script src="https://cdn.ckeditor.com/4.11.4/standard/ckeditor.js"></script> -->
<!--  <link rel="stylesheet" href="<?php echo base_url(); ?>/assets/lib/jquery.iwMultiSelect.css" /> -->
  <script src="<?php echo base_url(); ?>/assets/lib/chart-master/Chart.js"></script>


  <!-- =======================================================

  ======================================================= -->
</head>

<body>
  <section id="container">
    <!-- **********************************************************************************************************************************************************
        TOP BAR CONTENT & NOTIFICATIONS
        *********************************************************************************************************************************************************** -->
    <!--header start-->
    <header class="header black-bg">
      <div class="sidebar-toggle-box">
        <div class="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
      </div>
      <!--logo start-->
      <a href="" class="logo"><b> ST<span> JAMES</span></b></a>
      <!--logo end-->
      <div class="nav notify-row" id="top_menu">
        <!--  notification start -->
        <ul class="nav top-menu">
          <!-- settings start -->

          <!-- settings end -->
          <!-- inbox dropdown start-->

            <div class="clock" >
              <i class="fa fa-clock-o" style="font-size:12px;"></i>  <a id="Date"></a> |
              <!-- <i class="fa fa-clock-o" style="font-size:12px" style="margin-left:2%!important"></i> -->
                <a href=""   id="hours" >: </a>
                <a href=""  id="point">: </a>
                <a href=""  id="min">: </a>
                <a href="" id="point"></a>
                <a href="" id="sec"> </a>
            </div>



        </ul>
        <!--  notification end -->
      </div>
      <div class="top-menu">
        <ul class="nav pull-right top-menu">
          <li><a class="logout" href="" style="background: transparent;font-size: 15px;border:1px solid #393d46!important"><img src="<?php echo base_url(); ?>/assets/img/default-profile.png" width="15px" height="15px" />  Welcome <?php echo $user_info->first_name?></a></li>
          <li><a class="logout" href="<?php echo base_url(); ?>/auth/logout">Logout</a></li>
        </ul>
      </div>
    </header>
    <!--header end-->
    <!-- **********************************************************************************************************************************************************
        MAIN SIDEBAR MENU
        *********************************************************************************************************************************************************** -->
    <!--sidebar start-->
     <aside>
      <div id="sidebar" class="nav-collapse ">
        <!-- sidebar menu start-->
        <ul class="sidebar-menu" id="nav-accordion">
       <!--    <p class="centered"><a href="profile.html"><img src="<?php echo base_url(); ?>/assets/img/dprofile.jpg" class="img-circle" width="80"></a></p> -->
          <h5 class="centered" style="color:#fff;margin-top:2%!important">ST. JAMES MINI MART</h5>
          <li class="mt">
           <!--  <a class="active" href="<?php echo base_url(); ?>/dashboard/index"> -->
             <a  href="<?php echo base_url(); ?>/dashboard/index">
              <i class="fa fa-dashboard"></i>
              <span><strong style="font-weight: 700;font-size:15px ">DASHBOARD</strong></span>
              </a>
          </li>
         <li class="sub-menu">
            <a href="#">
              <i class="fa fa-money"></i>
              <span>Sales</span>
              </a>
            <ul class="sub">
              <li><a href="<?php echo base_url(); ?>/Dashboard/double_sale">Sales</a></li>
              <li><a href="<?php echo base_url(); ?>/Dashboard/all_sales">All Sales</a></li>
            </ul>
          </li>
          <li class="sub-menu">
            <a href="javascript:;">
              <i class="fa fa-shopping-cart"></i>
              <span>Products</span>
              </a>
            <ul class="sub">
              <li><a href="<?php echo base_url(); ?>/Dashboard/products_category"> Add  Product Category </a></li>
              <li><a href="<?php echo base_url(); ?>/Dashboard/products_add">Add Products</a></li>
              <li><a href="<?php echo base_url(); ?>/Dashboard/products_list">List All Products</a></li>
              <li><a href="<?php echo base_url(); ?>/Dashboard/expenses">Add Purchases</a></li>
              <li><a href="<?php echo base_url(); ?>/Dashboard/responsive_table"> List All Purchases</a></li>
              <li><a href="<?php echo base_url(); ?>/Barcode/generate">Print Barcode</a></li>
               <li><a href="<?php echo base_url(); ?>/Dashboard/expired_goods">Expiry Goods</a></li>
              <li><a href="<?php echo base_url(); ?>/Dashboard/tax">VAT</a></li>
            </ul>
          </li>

          <li class="sub-menu">
            <a href="#">
              <i class="  fa fa-cc-diners-club"></i>
              <span>Expenses</span>
              </a>
             <ul class="sub">
              <li><a href="<?php echo base_url(); ?>/Dashboard/expense_main">Add Expenses</a></li>
              <li><a href="<?php echo base_url(); ?>/Dashboard/expense_list">Show List Expenses</a></li>
            </ul>
          </li>

          <li class="sub-menu">
            <a href="#">
              <i class=" fa fa-calculator"></i>
              <span> Register</span>
              </a>
            <ul class="sub">
              <li><a href="<?php echo base_url(); ?>/Dashboard/register"> Close Register </a></li>
              <li><a href="<?php echo base_url(); ?>/Dashboard/register_list"> Closed Register Details</a></li>
            </ul>
          </li>

           <li>
            <a href="<?php echo base_url(); ?>/Dashboard/reports">
              <i class="fa fa-area-chart"></i>
              <span>Reports</span>
              </a>
          </li>
          <li class="sub-menu">
           <a href="<?php echo base_url(); ?>/Dashboard/comment_insert">
              <i class=" fa fa-book"></i>
              <span>General Notes</span>
              </a>
          </li>
          <li>
            <a href="<?php echo base_url(); ?>/Auth/index">
              <i class="fa fa-user-circle"></i>
              <span>Users </span>
              </a>
          </li>
          <li class="sub-menu">
            <a href="javascript:;">
              <i class="fa fa-cogs"></i>
              <span>Settings</span>
              </a>
          </li>
        </ul>
        <!-- sidebar menu end-->
      </div>
    </aside>
    <!--sidebar end-->