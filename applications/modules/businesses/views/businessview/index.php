<?php $this->load->view('dashboard/components/mainheader'); ?>

        <!-- page content -->
        <div class="right_col" role="main">
          <div class="">
            <div class="page-title">
              <div class="title_left">
                <h3>Businesses Transactions</h3>
              </div>

             <!--  <div class="title_right">
                <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search for...">
                    <span class="input-group-btn">
                      <button class="btn btn-secondary" type="button"></button>
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
                   <!--  <h2>Button Example <small>Users</small></h2> -->
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
                            <table  class="table table-striped table-bordered" id="business" style="width:100%">
                              <thead style="background:#F9DC00;color:#000">
                                <tr class="headings">
                                  <th class="column-title">Facility ID </th>
                                  <th class="column-title">Facility TIN </th>
                                  <th class="column-title">Facility Name</th>
                                  <th class="column-title">TLID </th>
                                  <th class="column-title">TL Entry </th>
                                  <th class="column-title">TL Quantity </th>
                                  <th class="column-title">TLU Price </th>
                                  <th class="column-title">TL Facility ID</th>
                                  <th class="column-title">TL Total</th>
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
<?php $this->load->view('components/ajax_business/business_ajax'); ?>