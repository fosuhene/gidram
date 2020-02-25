
 <?php $this->load->view('components/header'); ?>

    <div class="app-main__outer">
        <?php  if($this->ion_auth->in_group('admin') || $this->ion_auth->in_group('members')){ ?>
        <div class="app-main__inner">
            <div class="app-page-title">
                <div class="page-title-wrapper">
                    <div class="page-title-heading">
                        <div class="page-title-icon">
                            <i class="fa fa-server ">
                            </i>
                        </div>
                        <div>Asanka Dashboard
                            <div class="page-title-subheading">Analytic dashboard for Asanka.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-xl-4">
                    <div class="card mb-3 widget-content bg-midnight-bloom">
                        <div class="widget-content-wrapper text-white">
                            <div class="widget-content-left">
                                <div class="widget-heading">Total Clients</div>
                                <div class="widget-subheading"> </div>
                            </div>
                            <div class="widget-content-right">
                                <div class="widget-numbers text-white"><span> <?php echo $clients?></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-4">
                    <div class="card mb-3 widget-content bg-arielle-smile">
                        <div class="widget-content-wrapper text-white">
                            <div class="widget-content-left">
                                <div class="widget-heading">Total Devices</div>
                                <div class="widget-subheading"> </div>
                            </div>
                            <div class="widget-content-right">
                                <div class="widget-numbers text-white"><span><?php echo $devices?></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-4">
                    <div class="card mb-3 widget-content bg-grow-early">
                        <div class="widget-content-wrapper text-white">
                            <div class="widget-content-left">
                                <div class="widget-heading">Total Users</div>
                                <div class="widget-subheading"> </div>
                            </div>
                            <div class="widget-content-right">
                                <div class="widget-numbers text-white"><span><?php echo $users?></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-xl-none d-lg-block col-md-6 col-xl-4">
                    <div class="card mb-3 widget-content bg-premium-dark">
                        <div class="widget-content-wrapper text-white">
                            <div class="widget-content-left">
                                <div class="widget-heading">Products Sold</div>
                                <div class="widget-subheading">Revenue streams</div>
                            </div>
                            <div class="widget-content-right">
                                <div class="widget-numbers text-warning"><span>$14M</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="row">
                <div class="col-md-12 col-lg-6">
                    <div class="mb-3 card">
                        <div class="card-header-tab card-header-tab-animation card-header">
                            <div class="card-header-title">
                                <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                                  Total Clients Report Group by Month
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
                                                      <td> <div id="report" style="height: 400px"></div></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                          </div>
                                      </div>
                                    <!--?php $this->load->view('components/charts/charts'); ?>
                                    <h6 class="text-muted text-uppercase font-size-md opacity-5 font-weight-normal">Administrators</h6>
                                    <div class="scroll-area-sm">
                                        <div class="scrollbar-container">
                                            <ul class="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                                                <-?php foreach ( $photo as $photos):?>
                                                <li class="list-group-item">
                                                    <div class="widget-content p-0">
                                                        <div class="widget-content-wrapper">
                                                            <div class="widget-content-left mr-3">
                                                                <img width="42" class="rounded-circle" src="<-?php echo base_url(); ?>/assets/images/post/<?php echo $photos['photo']?>" alt="">
                                                            </div>
                                                            <div class="widget-content-left">
                                                                <div class="widget-heading"> <-?php echo $photos['first_name'];?> &nbsp; <-?php echo $photos['last_name'];?></div>
                                                                <div class="widget-subheading"><-?php echo $photos['email'];?></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <-?php endforeach; ?>
                                            </ul>
                                        </div>
                                    </div-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div class="col-md-12 col-lg-6">
                    <div class="mb-3 card">
                        <div class="card-header-tab card-header">
                            <div class="card-header-title">
                                <i class="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
                                Devices Reports Grouped by Month
                            </div>
                        </div>
                        <div class="tab-content">
                            <div class="tab-pane fade active show" id="tab-eg-55">
                                <div class="widget-chart p-3">
                                    <tr>
                                      <td> <div id="infocharts" style="height: 400px"></div></td>
                                    </tr>
                                    <script src="<?php echo base_url('assets/jquery/jquery-2.2.3.min.js')?>"></script>
                                    <script src="<?php echo base_url(); ?>/assets/highcharts/highcharts.js"></script>
                                    <script src="<?php echo base_url(); ?>/assets/highcharts/highcharts-3d.js"></script>
                                    <script src="<?php echo base_url(); ?>/assets/highcharts/modules/exporting.js"></script>
                                    <script src="<?php echo base_url(); ?>/assets/highcharts/modules/export-data.js"></script>
                                    <?php $this->load->view('components/charts/charts1'); ?>
                                    <div class="widget-chart-content text-center mt-5">
                                    </div>
                                </div>
                                <div class="pt-2 card-body">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="row">
                <div class="col-md-12">
                    <div class="main-card mb-3 card">
                        <div class="card-header">Active Clients
                            <div class="btn-actions-pane-right">
                               <!--  <div role="group" class="btn-group-sm btn-group">
                                    <button class="active btn btn-focus">Last Week</button>
                                    <button class="btn btn-focus">All Month</button>
                                </div> -->
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered" id="hidden-table-clients">
                                  <thead >
                                      <tr>
                                        <th>
                                          ID
                                        </th>
                                        <th >
                                            Account Name
                                        </th>
                                        <th >
                                            Account Type
                                        </th>
                                        <th >
                                            Manager
                                        </th>
                                        <th >
                                            Address
                                        </th>
                                        <th>
                                          City
                                        </th>
                                        <th>
                                          Country
                                        </th>
                                        <th>
                                          Last Login
                                        </th>
                                        <th >
                                            View
                                        </th>
                                     </tr>
                                  </thead>
                             <!--  -->
                              </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <?php  } else{?>
           <div class="app-main__inner">
            <div class="app-page-title">
                <div class="page-title-wrapper">
                    <div class="page-title-heading">
                        <div class="page-title-icon">
                            <i class="fa fa-server ">
                            </i>
                        </div>
                        <div>Content Management
                            <div class="page-title-subheading">Content Dashboard for Clients.
                            </div>
                        </div>
                    </div>
                      </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-xl-4">
                    <div class="card mb-3 widget-content bg-midnight-bloom">
                        <div class="widget-content-wrapper text-white">
                            <i class="fa fa-file"></i>&nbsp;
                            <div class="widget-content-left">
                                <div class="widget-heading">TOTAL ENTRIES</div>
                                <div class="widget-subheading"> </div>
                            </div>
                            <div class="widget-content-right">
                                <div class="widget-numbers text-white"><span> <?php echo $content?></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-4">
                    <div class="card mb-3 widget-content bg-arielle-smile">
                        <div class="widget-content-wrapper text-white">
                            <i class="fa fa-check-circle"></i>&nbsp;
                            <div class="widget-content-left">
                                <div class="widget-heading">ACTIVE ENTRIES</div>
                                <div class="widget-subheading"> </div>
                            </div>
                            <div class="widget-content-right">
                                <div class="widget-numbers text-white"><span><?php echo $activecontent?></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-4">
                    <div class="card mb-3 widget-content bg-grow-early">
                        <div class="widget-content-wrapper text-white">
                            <i class="fa fa-exclamation-circle"></i>&nbsp;
                            <div class="widget-content-left">
                                <div class="widget-heading">INACTIVE ENTRIES</div>
                                <div class="widget-subheading"> </div>
                            </div>
                            <div class="widget-content-right">
                                <div class="widget-numbers text-white"><span><?php echo $inactivecontent?></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-xl-none d-lg-block col-md-6 col-xl-4">
                    <div class="card mb-3 widget-content bg-premium-dark">
                        <div class="widget-content-wrapper text-white">
                            <div class="widget-content-left">
                                <div class="widget-heading">Products Sold</div>
                                <div class="widget-subheading">Revenue streams</div>
                            </div>
                            <div class="widget-content-right">
                                <div class="widget-numbers text-warning"><span>$14M</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="row">
                <div class="col-md-12">
                    <div class="main-card mb-3 card">
                        <div class="card-header">
                            <a href="<?php echo base_url(); ?>/dashboard/new_entry"><button class="btn btn-danger"><i class="fa fa-plus"></i> &nbsp; Add New</button></a>
                            <div class="btn-actions-pane-right">
                               <!--  <div role="group" class="btn-group-sm btn-group">
                                    <button class="active btn btn-focus">Last Week</button>
                                    <button class="btn btn-focus">All Month</button>
                                </div> -->
                            </div>
                        </div>

                        <ul class="tabs">
                            <li rel="tab3">Inactive</li>
                            <li rel="tab2">Active</li>
                             <li class="active" rel="tab1"> All </li>

                        </ul>
                        <div class="tab_container">
                            <h3 class="d_active tab_drawer_heading" rel="tab1">Tab 1</h3>
                            <div id="tab1" class="tab_content">
                            <div class="table-responsive">
                                <table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered" id="hidden-table-content">
                                      <thead >
                                          <tr>
                                            <th>
                                              ID
                                            </th>
                                            <th>
                                              Date Added
                                            </th>
                                            <th >
                                                Title
                                            </th>
                                            <th >
                                                Attachments
                                            </th>
                                            <th>
                                               Categories
                                            </th>
                                            <th>
                                               Edit
                                            </th>
                                             <th>
                                               Delete
                                            </th>
                                            <th >
                                              Actions
                                            </th>
                                         </tr>
                                      </thead>
                                 <!--  -->
                                  </table>
                            </div>
                            </div>
                            <!-- #tab1 -->
                            <h3 class="tab_drawer_heading" rel="tab2">Tab 2</h3>
                            <div id="tab2" class="tab_content">
                                   <?php foreach($active as $actives):?>
                                       <table style="width:100%"  class="display table table-bordered">
                                          <tr>
                                            <th>Date Added</th>
                                            <th>Title</th>
                                            <th>Attachment</th>
                                            <th>Categories</th>
                                          </tr>
                                          <tr>
                                            <td> <?php echo $actives['dateAdded']; ?></td>
                                            <td> <?php echo $actives['title']; ?></td>
                                            <td> <?php echo $actives['image']; ?></td>
                                            <td><?php echo $actives['cat1']; ?> > <?php echo $actives['cat2']; ?> > <?php echo $actives['cat3']; ?></td>
                                          </tr>
                                        </table>
                                   <?php endforeach; ?>
                            </div>
                            <!-- #tab2 -->
                            <h3 class="tab_drawer_heading" rel="tab3">Tab 3</h3>
                            <div id="tab3" class="tab_content">
                                <?php foreach($inactive as $inactives):?>
                                       <table style="width:100%"  class="display table table-bordered">
                                          <tr>
                                            <th>Date Added</th>
                                            <th>Title</th>
                                            <th>Attachment</th>
                                            <th>Categories</th>
                                          </tr>
                                          <tr>
                                            <td> <?php echo $inactives['dateAdded']; ?></td>
                                            <td> <?php echo $inactives['title']; ?></td>
                                            <td> <?php echo $inactives['image']; ?></td>
                                            <td><?php echo $inactives['cat1']; ?> > <?php echo $inactives['cat2']; ?> > <?php echo $inactives['cat3']; ?></td>
                                          </tr>
                                        </table>
                                   <?php endforeach; ?>
                            </div>
                            <!-- #tab3 -->
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <?php } ?>

    <?php $this->load->view('components/footer'); ?>

