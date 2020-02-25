<?php $this->load->view('dashboard/components/mainheader'); ?>

        <!-- page content -->
        <div class="right_col" role="main">
          <div class="">
            <div class="page-title">
              <div class="title_left">
                <h3><small> Business Transaction(s)</small></h3>
              </div>

              <div class="title_right">
                <div class="col-md-5 col-sm-5   form-group pull-right top_search">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search for...">
                    <span class="input-group-btn">
                      <button class="btn btn-secondary" type="button">Go!</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="clearfix"></div>

            <div class="row">
              <div class="col-md-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2><strong style="color:#12034c">Location :</strong><?php echo $business['FacilityName']?>   <>>   TIN: <?php echo $business['FacilityTIN']?> </h2>
                    <ul class="nav navbar-right panel_toolbox">
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                      <li><a class="close-link"><i class="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>

                  <div class="x_content">

                    <div class="col-md-9 col-sm-9  ">

                      <ul class="stats-overview">
                        <li>
                          <span class="name"> Estimated budget </span>
                          <span class="value text-success"> 2300 </span>
                        </li>
                        <li>
                          <span class="name"> Total amount spent </span>
                          <span class="value text-success"> 2000 </span>
                        </li>
                        <li class="hidden-phone">
                          <span class="name"> Estimated project duration </span>
                          <span class="value text-success"> 20 </span>
                        </li>
                      </ul>
                      <br />

                      <div id="infochart" style="height:350px;"></div>
                      <hr>
                      <div>
                        <!-- <h4>Recent Activity</h4> -->
                           <div id="pieinfo" style="height:350px;"></div>
                      </div>


                    </div>

                    <!-- start project-detail sidebar -->
                    <div class="col-md-3 col-sm-3  ">

                      <section class="panel">

                        <div class="x_title">
                          <h2>Business Brief</h2>
                          <div class="clearfix"></div>
                        </div>
                        <div class="panel-body">
                          <!--h3 class="green"><i class="fa fa-paint-brush"></i> Gentelella</h3-->

                          <p><?php echo $business['TaxCompanyTypeDesc']?> </p>
                          <br />

                          <div class="project_detail">

                            <p class="title">Tax Company Type Name</p>
                            <p><?php echo $business['TaxCompanyTypeName']?> </p>
                            <p class="title">Tax Company Type Identifier</p>
                            <p><?php echo $business['TaxCompanyTypeIdentifier']?> </p>
                          </div>

                          <br />
                          <h5>Other Information</h5>
                          <ul class="list-unstyled project_files">
                            <li><a href=""><i class=""></i><strong>Community Name: </strong><?php echo $business['FC_CommunityName']?> </a>
                            </li>
                            <li><a href=""><i class=""></i> <strong>Tax Component Start Date: </strong><?php echo $business['TaxComponentStartDate']?> </a>
                            </li>
                            <li><a href=""><i class=""></i><strong> Tax Component End Date: </strong><?php echo $business['TaxComponentEndDate']?> </a>
                            </li>
                            <li><a href=""><i class=""></i><strong>Tax Component Desc:</strong>  <?php echo $business['TaxComponentDesc']?> </a>
                            </li>
                            <li><a href=""><i class=""></i><strong>Tax Component Factor </strong> <?php echo $business['TaxComponentFactor']?> </a>
                            <li><a href=""><i class=""></i> <strong>Tax Component Grade </strong><?php echo $business['TaxComponentGrade']?> </a>
                            <li><a href=""><i class=""></i> <strong>Transaction Lines Quantity</strong> <?php echo $business['TLQuantity']?> </a>
                            <li><a href=""><i class=""></i>  <strong>Transaction Lines Unit Price:</strong> <?php echo $business['TLUPrice']?> </a>
                            <li><a href=""><i class=""></i> <strong>Transaction Lines Facility ID:</strong>  <?php echo $business['TLFacilityID']?> </a>
                            </li>
                          </ul>
                          <br />

                        <!--   <div class="text-center mtop20">
                            <a href="#" class="btn btn-sm btn-primary">Add files</a>
                            <a href="#" class="btn btn-sm btn-warning">Report contact</a>
                          </div> -->
                        </div>

                      </section>

                    </div>
                    <!-- end project-detail sidebar -->

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /page content -->

<?php $this->load->view('dashboard/components/mainfooter'); ?>

<!-- <script src="<?php //echo base_url(); ?>/assets/highcharts/highmap.js"></script> -->
<!-- <script src="<?php //echo base_url(); ?>/assets/highcharts/highcharts.js"></script>
<script src="<?php //echo base_url(); ?>/assets/highcharts/highcharts-3d.js"></script>
<script src="<?php //echo base_url(); ?>/assets/highcharts/modules/exporting.js"></script> -->
<script src="<?php echo base_url(); ?>/assets/highcharts/highcharts.js"></script>
<script src="<?php echo base_url(); ?>/assets/highcharts/highcharts-3d.js"></script>
<script src="<?php echo base_url(); ?>/assets/highcharts/modules/exporting.js"></script>
<script src="<?php echo base_url(); ?>/assets/highcharts/modules/export-data.js"></script>




<?php $this->load->view('components/charts'); ?>