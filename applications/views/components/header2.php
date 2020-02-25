
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Ghana Revenue Authority  </title>
<!-- Font Awesome Icons -->
  <link rel="stylesheet" href="<?php echo base_url(); ?>/assets/newskin/plugins/fontawesome-free/css/all.min.css">
  <!-- overlayScrollbars -->
  <link rel="stylesheet" href="<?php echo base_url(); ?>/assets/newskin/plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="<?php echo base_url(); ?>/assets/newskin/dist/css/adminlte.min.css">
  <link href="<?php echo base_url(); ?>/assets/css/main.css" rel="stylesheet">
  <!-- Google Font: Source Sans Pro -->
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
  <link href="<?php echo base_url(); ?>/assets/font-awesome/css/font-awesome.css" rel="stylesheet">
  <link href="<?php echo base_url(); ?>/assets/advanced-datatable/datatable/jquery.dataTables.min.css" rel="stylesheet" />
  <link href="<?php echo base_url(); ?>/assets/advanced-datatable/datatable/buttons.dataTables.min.css" rel="stylesheet" />
  <script src="<?php echo base_url(); ?>/assets/ckeditor/ckeditor.js"></script>
  <script src="<?php echo base_url(); ?>/assets/angular/angular.min.js"></script>
  <script src="<?php echo base_url(); ?>/assets/angular/angular-charts.js"></script>
  <script src="<?php echo base_url(); ?>/assets/jquery.min.js" ></script>
</head>
<body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
<div class="wrapper">
  <!-- Navbar -->  
  
  
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="index3.html" class="nav-link">Home</a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">Contact</a>
      </li>
    </ul>

    <!-- SEARCH FORM -->
    <form class="form-inline ml-3">
      <div class="col-md-3">
        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
        <div class="input-group-append">
        <!--   <button class="btn btn-navbar" type="submit">
            <i class="fas fa-search"></i>
          </button> -->
        </div>
      </div>
    </form>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <a class="nav-link" data-toggle="" href="<?php echo base_url(); ?>/auth/logout">
          <i class="far fa-comments"></i>
          <span class="badge badge-danger navbar-badge">Logout</span>
        </a>
      <!-- Messages Dropdown Menu -->
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-comments"></i>
          <span class="badge badge-danger navbar-badge">3</span>
        </a>

        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <a href="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="">
              <h6>
                <a href="<?php echo base_url(); ?>/auth/logout">  Logout </a>
                </h6>
            </div>
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <img src="<?php echo base_url(); ?>/assets/dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  John Pierce
                  <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">I got your message bro</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <img src="<?php echo base_url(); ?>/assets/newskin/dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Nora Silvester
                  <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">The subject goes here</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
        </div>
      </li>
      <!-- Notifications Dropdown Menu -->
      <div class="widget-content-left  ml-3 header-user-info">
      <div class="widget-heading">
      <?php echo $user_info->username?>

      </div>
      <div class="widget-subheading">
      <?php echo $user_info->email?>
      </div>
      </div>
      <li class="nav-item dropdown">

        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-bell"></i>
          <span class="badge badge-warning navbar-badge">15</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span class="dropdown-item dropdown-header">15 Notifications</span>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-envelope mr-2"></i> 4 new messages
            <span class="float-right text-muted text-sm">3 mins</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-users mr-2"></i> 8 friend requests
            <span class="float-right text-muted text-sm">12 hours</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-file mr-2"></i> 3 new reports
            <span class="float-right text-muted text-sm">2 days</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
        </div>
      </li>
      <!-- <li class="nav-item">
        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#">
          <i class="fas fa-th-large"></i>
        </a>
      </li> -->
    </ul>
  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="<?php echo base_url(); ?>/Dashboard/newindex" class="brand-link">
      <img src="<?php echo base_url(); ?>/assets/newskin/dist/img/gra.jpg" alt="GRA Logo" class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight-light">GIDRAM</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="<?php echo base_url(); ?>assets/images/post/<?php echo $user_info->photo?>" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="<?php echo base_url(); ?>/Dashboard/newindex" class="d-block">National</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item has-treeview menu-open">
            <a href="#" class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>Dashboard</p>
            </a>
          </li>

       <!--    ##################Admin & National Admin################################# -->
            <?php  if($this->ion_auth->in_group('admin') || $this->ion_auth->in_group('national')){ ?>
          <li class="nav-item">
            <a href="<?php echo base_url(); ?>/Dashboard/national" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>National</p>
            </a>
          </li>
          <li class="nav-item has-treeview">
             <a href="<?php echo base_url(); ?>/Regional/index" class="nav-link">
              <i class="nav-icon fas fa-copy"></i>
              <p> Regional<i class="fas fa-angle-left right"></i>
              </p>
            </a>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>District <i class="right fas fa-angle-left"></i>
              </p>
            </a>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-tree"></i>
              <p> Community<i class="fas fa-angle-left right"></i>
              </p>
            </a>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-edit"></i>
              <p>
               Facility
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
          </li>
          <li class="nav-header">USERS</li>
          <li class="nav-item">
            <a href="<?php echo base_url(); ?>/Dashboard/new_profile/<?php echo $user_info->user_id?>" class="nav-link">
              <i class="nav-icon far fa-calendar-alt"></i>
              <p>
              Profile
               <!--  <span class="badge badge-info right">2</span> -->
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="<?php echo base_url(); ?>/Auth/index" class="nav-link">
              <i class="nav-icon far fa-image"></i>
              <p>
              Users
              </p>
            </a>
          </li>

   <!--        ###################Regional View############################################ -->
           <?php } elseif($this->ion_auth->in_group('regional')){?>
          <li class="nav-item has-treeview">
            <a href="<?php echo base_url(); ?>/Regional/index" class="nav-link">
              <i class="nav-icon fas fa-copy"></i>
              <p>
              Regional
                <i class="fas fa-angle-left right"></i>
               <!--  <span class="badge badge-info right">6</span> -->
              </p>
            </a>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                District
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-tree"></i>
              <p>
              Community
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-edit"></i>
              <p>
               Facility
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
          </li>
          <li class="nav-header">USERS</li>
          <li class="nav-item">
            <a href="<?php echo base_url(); ?>/Dashboard/new_profile/<?php echo $user_info->user_id?>" class="nav-link">
              <i class="nav-icon far fa-calendar-alt"></i>
              <p>
              Profile
               <!--  <span class="badge badge-info right">2</span> -->
              </p>
            </a>
          </li>
<!--
          #############District View###################################
           -->
           <?php } elseif($this->ion_auth->in_group('district')){?>
            <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                District
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-tree"></i>
              <p>
              Community
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-edit"></i>
              <p>
               Facility
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
          </li>
          <li class="nav-header">USERS</li>
          <li class="nav-item">
            <a href="<?php echo base_url(); ?>/Dashboard/new_profile/<?php echo $user_info->user_id?>" class="nav-link">
              <i class="nav-icon far fa-calendar-alt"></i>
              <p>
              Profile
               <!--  <span class="badge badge-info right">2</span> -->
              </p>
            </a>
          </li>

          <!--
          #############Community View###################################
           -->
            <?php } elseif($this->ion_auth->in_group('community')){?>
            <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-tree"></i>
              <p>
              Community
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-edit"></i>
              <p>
               Facility
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
          </li>
          <li class="nav-header">USERS</li>
          <li class="nav-item">
            <a href="<?php echo base_url(); ?>/Dashboard/new_profile/<?php echo $user_info->user_id?>" class="nav-link">
              <i class="nav-icon far fa-calendar-alt"></i>
              <p>
              Profile
               <!--  <span class="badge badge-info right">2</span> -->
              </p>
            </a>
          </li>
         <!--  ################Faclity################################################ -->
           <?php } elseif($this->ion_auth->in_group('facility')){?>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-edit"></i>
              <p>
               Facility
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
          </li>
          <li class="nav-header">USERS</li>
          <li class="nav-item">
            <a href="<?php echo base_url(); ?>/Dashboard/new_profile/<?php echo $user_info->user_id?>" class="nav-link">
              <i class="nav-icon far fa-calendar-alt"></i>
              <p>
              Profile
               <!--  <span class="badge badge-info right">2</span> -->
              </p>
            </a>
          </li>

          <?php } ?>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>