

<?php $this->load->view('components/header'); ?>
     <div class="app-main__outer">
            <div class="app-main__inner">
                <div class="app-page-title">
                    <div class="page-title-wrapper">
                        <div class="page-title-heading">
                            <div class="page-title-icon">
                                <i class="fa fa-server">
                                </i>
                            </div>
                            <div>Charts
                                <div class="page-title-subheading">
                                    Account Name and Device Name chart for different schools
                                </div>
                            </div>
                        </div>
                        <div class="page-title-actions">
                            <div class="d-inline-block dropdown">
                                <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a href="javascript:void(0);" class="nav-link">
                                                <i class="nav-link-icon lnr-inbox"></i>
                                                <span>
                                                    Inbox
                                                </span>
                                                <div class="ml-auto badge badge-pill badge-secondary">86</div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void(0);" class="nav-link">
                                                <i class="nav-link-icon lnr-book"></i>
                                                <span>
                                                    Book
                                                </span>
                                                <div class="ml-auto badge badge-pill badge-danger">5</div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void(0);" class="nav-link">
                                                <i class="nav-link-icon lnr-picture"></i>
                                                <span>
                                                    Picture
                                                </span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a disabled href="javascript:void(0);" class="nav-link disabled">
                                                <i class="nav-link-icon lnr-file-empty"></i>
                                                <span>
                                                    File Disabled
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>    </div>
                </div>
            <!--     <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
                    <li class="nav-item">
                        <a role="tab" class="nav-link active" id="tab-0" data-toggle="tab" href="#tab-content-0">
                            <span>Circular Charts</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a role="tab" class="nav-link" id="tab-1" data-toggle="tab" href="#tab-content-1">
                            <span>Lines & Bars Charts</span>
                        </a>
                    </li>
                </ul> -->
                <div class="tab-content">
                    <div class="tab-pane tabs-animation fade show active" id="tab-content-0" role="tabpanel">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="main-card mb-3 card">
                                    <div class="card-body">
                                       <!--  <h5 class="card-title">ASANKA_AB_Library (Dansoman) - Analytics: Last 30 Days User Activity</h5> -->
                                         <div class="col-md-12 col-lg-12">
                                            <div class="mb-3 card">
                                                <div class="card-header-tab card-header-tab-animation card-header">
                                                    <div class="card-header-title">
                                                        <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                                                          <?php echo $title['account_name']; ?> - Analytics: Last 30 Days User Activity
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <div class="tab-content">
                                                        <div class="tab-pane fade show active" id="tabs-eg-77">
                                                          <script src="<?php echo base_url('assets/jquery/jquery-2.2.3.min.js')?>"></script>
                                                          <script src="<?php echo base_url(); ?>/assets/highcharts/highcharts.js"></script>
                                                          <script src="<?php echo base_url(); ?>/assets/highcharts/highcharts-3d.js"></script>
                                                          <script src="<?php echo base_url(); ?>/assets/highcharts/modules/exporting.js"></script>
                                                          <script src="<?php echo base_url(); ?>/assets/highcharts/modules/export-data.js"></script>

                                                                <div class="row mb">

                                                                <div class="container">
                                                                    <table class="table" cellspacing="0" style="width:100%!important" >
                                                                         <tbody>
                                                                            <tr>
                                                                              <td> <div id="infocharts" style="height: 400px"></div></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                  </div>
                                                              </div>
                                                            <?php $this->load->view('components/charts/charts2'); ?>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="main-card mb-3 card">
                                    <div class="card-body">
                                       <ul class="tabs">
                                            <li class="active" rel="tab1" style="float: left!important"> Usage Stats </li>
                                            <li rel="tab2" style="float: left!important">Device Users</li>
                                            <li rel="tab3" style="float: left!important">User Activities</li>
                                        </ul>
                                        <div class="tab_container">
                                            <h3 class="d_active tab_drawer_heading" rel="tab1">Tab 1</h3>
                                            <div id="tab1" class="tab_content">
                                              <div class="card-body">
                                                 <table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered" id="hidden-table-statsinfo">
                                                    <thead >
                                                        <tr>
                                                          <th>
                                                            ID
                                                          </th>
                                                          <th >
                                                              Section
                                                          </th>
                                                          <th >
                                                             Access Count
                                                          </th>

                                                          <th>
                                                             Breakdown
                                                          </th>
                                                       </tr>
                                                    </thead>
                                                   <!--  -->
                                                    </table>
                                                </div>
                                              </div>
                                              <!-- #tab1 -->
                                              <h3 class="tab_drawer_heading" rel="tab2">Tab 2</h3>
                                              <!-- <div id="tab2" class="tab_content" ng-app='myapp'> -->
                                              <div id="tab2" class="tab_content">
                                                  <table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered"  style="width:100%!important"  id="hidden-table-deviceusers">
                                                    <thead >
                                                        <tr>
                                                          <th>
                                                            ID
                                                          </th>
                                                          <th >
                                                              First Name
                                                          </th>
                                                          <th >
                                                             Last Name
                                                          </th>

                                                          <th>
                                                             Date of Birth
                                                          </th>
                                                          <th>
                                                             Gender
                                                          </th>
                                                           <th>
                                                             Grade
                                                          </th>
                                                           <th>
                                                              Location
                                                          </th>
                                                           <th>
                                                              Region
                                                          </th>
                                                           <th>
                                                             Username
                                                          </th>
                                                           <th>
                                                             Account Type
                                                          </th>
                                                         <!--   <th>
                                                             Activity
                                                          </th>  -->
                                                       </tr>
                                                    </thead>
                                                </table>
                                              </div>
                                              <!-- #tab2 -->
                                              <h3 class="tab_drawer_heading" rel="tab3">Tab 3</h3>
                                              <div id="tab3" class="tab_content">
                                                <table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered" style="width:100%!important" id="hidden-table-useractivity">
                                                    <thead >
                                                        <tr>
                                                          <th>
                                                             #
                                                          </th>
                                                          <th >
                                                              Sync Date
                                                          </th>
                                                          <th >
                                                              Full Name
                                                          </th>

                                                          <th>
                                                             Username
                                                          </th>
                                                          <th>
                                                             Grade
                                                          </th>
                                                           <th>
                                                             Section
                                                          </th>
                                                           <th>
                                                              Activity
                                                          </th>
                                                       </tr>
                                                    </thead>
                                                </table>
                                              </div>
                                          </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
   <?php $this->load->view('components/footer'); ?>
