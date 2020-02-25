<?php $this->load->view('dashboard/components/mainheader'); ?>

        <!-- page content -->
        <div class="right_col" role="main">
          <div class="">
            <div class="page-title">
              <div class="title_left">
                <h3><small>Companies</small></h3>
              </div>
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
                   <!--    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Settings 1</a>
                            <a class="dropdown-item" href="#">Settings 2</a>
                          </div>
                      </li> -->
                      <li><a class="close-link"><i class="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                      <div class="row">
                          <div class="col-sm-12">
                            <div class="card-box table-responsive">
                    <!--p class="text-muted font-13 m-b-30">
                      The Buttons extension for DataTables provides a common set of options, API methods and styling to display buttons on a page that will interact with a DataTable. The core library provides the based framework upon which plug-ins can built.
                    </p-->
                    <table  class="table table-striped table-bordered" id="company" style="width:100%">
                        <thead style="background:#F9DC00;color:#000">
                          <tr class="headings">
                          <th class="column-title">ID</th>
                          <th class="column-title">Company Name </th>
                          <th class="column-title">Short Name</th>
                          <th class="column-title">TIN </th>
                          <th class="column-title">Tax Identifier</th>
                          <th class="column-title">Gh Post Code</th>
                          <th class="column-title">Code</th>
                          <th class="column-title">Email</th>
                          <th class="column-title">Phone</th>
                          <th class="column-title">Address</th>
                          <th class="column-title">Longitude</th>
                          <th class="column-title">Latitude</th>
                          <th class="column-title">Opening Date</th>
                          <th class="column-title">Closed Date</th>
                          <th class="column-title">Added Date</th>
                          <th class="column-title">Edit</th>
                          <th class="column-title">Delete</th>
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
<?php $this->load->view('components/ajax_company/company'); ?>