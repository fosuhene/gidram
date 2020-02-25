<?php $this->load->view('dashboard/components/mainheader'); ?>

        <!-- page content -->
        <div class="right_col" role="main">
          <div class="">
            <div class="page-title">
              <div class="title_left">
                <h3><small>Registered Locations</small></h3>
              </div>

           <!--    <div class="title_right">
                <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search for...">
                    <span class="input-group-btn">
                      <button class="btn btn-secondary" type="button">Go!</button>
                    </span>
                  </div>
                </div>
              </div> -->
            </div>

            <div class="clearfix"></div>

            <div class="row">

              <div class="col-md-12 col-sm-12 ">
                <div class="x_panel">
                  <div class="x_title">
                    <!--h2>Button Example <small>Users</small></h2-->
                    <ul class="nav navbar-right panel_toolbox">
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                      <li><a class="close-link"><i class="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="card-box table-responsive">
                            <table id="service_template"
                              cellpadding="0" cellspacing="0" border="0"
                              class="table table-bordered table-striped" style="display: none;">
                              <thead>
                                  <tr>
                                    <th>Name</th>
                                    <th>TIN</th>
                                    <th>Tax Company Identifier</th>
                                    <th>Address</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Latitude</th>
                                    <th>Longitude</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr class="row_tpl">
                                    <th data-key="name"></th>
                                    <th data-key="tin"></th>
                                    <th data-key="tax_company_identifier"></th>
                                    <th data-key="address"></th>
                                    <th data-key="email"></th>
                                    <th data-key="phone"></th>
                                    <th data-key="latitude"></th>
                                    <th data-key="longitude"></th>
                                  </tr>
                              </tbody>
                              <tfoot>
                                  <tr><th colspan="4"></th></tr>
                              </tfoot>
                            </table>
                           <table  class="table table-striped table-bordered" id="location" style="width:100%">
                              <thead style="background:#F9DC00;color:#000">
                                <tr class="headings">
                                  <th class="column-title">#</th>
                                  <th class="column-title">Location ID </th>
                                  <th class="column-title">GRE Office(s)</th>
                                  <th class="column-title">Location Code </th>
                                  <th class="column-title">Office Phone</th>
                                  <th class="column-title">Longitude</th>
                                  <th class="column-title">Latitude</th>
                                  <th class="column-title">Updated Date</th>
                                <!--   <th class="column-title">View </th> -->
                                </tr>
                              </thead>
                              <tbody></tbody>
                              <tfoot>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                              </tfoot>
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
        <!-- /page content -->

<?php $this->load->view('dashboard/components/mainfooter'); ?>
<?php $this->load->view('components/ajax_location'); ?>