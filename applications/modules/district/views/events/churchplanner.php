
 <?php $this->load->view('dashboard/components/dash_head'); ?>
<!-- ############### Add Membership Details Page ################################################ -->
 <!-- Main Content Area -->
     <div class="ecaps-page-content">
        <div class="main-content">
            <div class="container-fluid">
              <div class="row">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="text-center"><i class="fa fa-sitemap"> &nbsp;</i>Events</h3>
                            <hr>
                            <div class="tab-content">
                               <!--  ################ Personal Information################## -->
                                <div class="tab-pane show active" id="home1">
                                    <p class="mb-0">
                                        <div class="row">
                                              <div class="col-lg-12"  style="float:right!important">
                                                <form action="<?php echo base_url();?>visitornewconvent/uploadchurchnewconvent" method="post" enctype="multipart/form-data" >
                                                    <a><strong>UPLOAD EXCEL FILE:</strong></a>
                                                    <a> <input type="file" name="uploadFile" value=""   />
                                                    <button class ="btn btn-primary " type="submit" name="submit"><i class="ti-import"></i> Import</button>
                                                    </a>
                                                    <a href="#" class="">
                                                    <button class="btn btn-primary "  id='btn' value='Print' onclick='printDiv();' ><i class="fa fa-print"></i> Print </button>
                                                    </a>
                                                    <hr/>
                                                </form>
                                             </div>

                                            <div class="col-lg-4">
                                                <div class="card card-body">
                                                    <h5 class="">Church Planner Details</h5>
                                                    <p> Please fill in the  form. Thank you.</p>
                                                    <hr>
                                                    <div class="row">
                                                        <div class="col-sm-12 col-xs-12">
                                                            <?php echo validation_errors(); ?>
                                                              <?php echo form_open('Events/churchplanner'); ?>
                                                            <div class="form-group">
                                                                <label for="inputEmail4" class="col-form-label">Program Date</label>
                                                                <?php echo form_input(['type' => 'date', 'name' => 'pgrm_date', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="inputPassword4" class="col-form-label">Program Leader</label>
                                                                <?php echo form_input(['type' => 'text', 'name' => 'pgrm_leader', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="inputEmail4" class="col-form-label">Program Title</label>
                                                                <?php echo form_input(['type' => 'text', 'name' => 'pgrm_title', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                                            </div>

                                                            <div class="form-group">
                                                                <label for="inputEmail4" class="col-form-label">Venue</label>
                                                                <?php echo form_input('venue',null,' class="form-control" placeholder="" id="" required');?>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="inputEmail4" class="col-form-label">Duration</label>
                                                                <?php echo form_input(['type' => 'time', 'name' => 'duration', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('')]);?>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="inputEmail4" class="col-form-label">Description</label>
                                                                <?php echo form_textarea([ 'name' => 'description', 'id' => '', 'class' => 'form-control','required' => 'required', 'value' => set_value('Description')]);?>
                                                            </div>

                                                            <button type="submit" name="submit" class="btn btn-primary"><i class="fa fa-save" style="font-size:18px"></i> Submit</button>
                                                           <?php  echo form_close();?>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="col-lg-8">
                                                <div class="card">
                                                  <div class="card-body" >
                                                    <div class="table-responsive">
                                                    <hr>
                                                     <table  id="churchplanner_data" class="table table-bordered table-striped">
                                                        <thead class="bg-purple" id="color" style="width:100%!important">
                                                         <tr >
                                                            <th>
                                                                #
                                                            </th>
                                                            <th >
                                                            Program Date
                                                            </th>
                                                            <th >
                                                                Program Leader
                                                            </th>
                                                            <th >
                                                                Program Title
                                                            </th>
                                                            <th>
                                                                Venue
                                                            </th>
                                                            <th>
                                                               Duration
                                                            </th>
                                                            <th>
                                                                Description
                                                            </th>
                                                            <th>
                                                                Date Updated
                                                            </th>
                                                            <th>
                                                               Edit
                                                            </th>
                                                            <th>
                                                              Delete
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                         <tfoot>
                                                              <tr>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                    </div>
                                                  </div> <!-- end card-body -->
                                                </div> <!-- end card-->

                                            </div> <!-- end col -->

                                        </div>
                                     <!-- end row -->
                                </div>
                            </div>
                        </div> <!-- end card-->
                    </div> <!-- end col -->
                </div>
                <!-- end row -->
            </div>
        </div>
    <!--  </div> -->

    <?php $this->load->view('dashboard/components/dash_foot'); ?>
    <?php $this->load->view('components/ajax_events/ajax_churchplanner'); ?>
    <?php $this->load->view('components/modal_events/modal_churchplanner'); ?>



