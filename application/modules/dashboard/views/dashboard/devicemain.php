   
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
                        <div>Customer Devices
                            <div class="page-title-subheading">
                              Add and fetch all device information.
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
			
			
            <div class="main-card mb-3 card">
			
			
				<div class="row">                   
					 <div class="col-sm-2">
                  <button type="button" class="btn mr-2 mb-2 btn-primary btn-block" data-toggle="modal" data-target="#exampleModalLong">
                  Add Device Info
                  </button>			
				</div>
					 <div class="col-sm-10">
					  <ul class="tabs">
							<li rel="tab4">Remote Wiped</li>
							<li rel="tab3">Locked</li>
							<li rel="tab2">Active</li>
							 <li class="active" rel="tab1"> All </li>
						</ul>
					</div>
			 </div>
			 
                <div class="tab_container">
                    <h3 class="d_active tab_drawer_heading" rel="tab1">Tab 1</h3>
                    <div id="tab1" class="tab_content">
                    <div class="card-body">
                    <table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered" id="hidden-table-device">
                        <thead >
                            <tr>
                              <th>
                                ID
                              </th>
                              <th >
                                  Device Name
                              </th>
                              <th >
                                 Device Location
                              </th>

                              <th>
                                 MAC Address
                              </th> 
                              <th>
                                SD Card Serial
                              </th>
                              <th>
                               Device Serial Number
                              </th>
                               <th >
                                  Actions
                              </th>
                           </tr>
                        </thead>
                   <!--  -->
                    </table>
              <a href="<?php echo base_url(); ?>/Dashboard/device"><<<<u>Back</u></a>
              </div>
              </div>
              <!-- #tab1 -->
              <h3 class="tab_drawer_heading" rel="tab2">Tab 2</h3>
              <div id="tab2" class="tab_content">
                 <!--  <h2>Tab 2 content</h2>
                  <p>Nunc dui velit, scelerisque eu placerat volutpat, dapibus eu nisi. Vivamus eleifend vestibulum odio non vulputate.</p> -->
              </div>
              <!-- #tab2 -->
              <h3 class="tab_drawer_heading" rel="tab3">Tab 3</h3>
              <div id="tab3" class="tab_content">
                  <!-- <h2>Tab 3 content</h2>
                  <p>Nulla eleifend felis vitae velit tristique imperdiet. Etiam nec imperdiet elit. Pellentesque sem lorem, scelerisque sed facilisis sed, vestibulum sit amet eros.</p> -->
              </div>
              <!-- #tab3 -->
              <div id="tab4" class="tab_content">
                  <!-- <h2>Tab 3 content</h2>
                  <p>Nulla eleifend felis vitae velit tristique imperdiet. Etiam nec imperdiet elit. Pellentesque sem lorem, scelerisque sed facilisis sed, vestibulum sit amet eros.</p> -->
              </div>
              <!-- #tab4 -->
          </div>
        
        </div>
    </div>
<!--   </div> -->





 

  <?php $this->load->view('components/footer'); ?> 



    
      <div class="container" >
         <div class="modal open" id="myModal" role="dialog">
            <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Edit Clients</h4>
                    </div>
                    <div class="modal-body">
                <!--       <section class=""   style="margin-top:3%!important"> -->
                        <h4><i class="fa fa-angle-right"></i><strong> Edit Clients Details </strong></h4>
                        <?php echo validation_errors(); ?>
                       <form id="myForm" action="" method="post">
                          <div class="col-lg-12">
                            <div class="form-panel">
                               <div class="card-body"><h5 class="card-title"></h5>
                                  <div class="input-group">
                                    <div class="input-group-prepend"><span class="input-group-text"></span></div>
                                    <input placeholder="device_name" name="device_name" type="text" class="form-control">
                                  </div>
                                  <br>
                                  <div class="input-group">
                                      <div class="input-group-prepend"><span class="input-group-text"></span></div>
                                      <input placeholder="device_location" name="device_location" type="text" class="form-control"></div>
                                  <br>
                                  <div class="input-group"><input placeholder="mac_address"  name="mac_address" type="text" class="form-control">
                                      <div class="input-group-append"><span class="input-group-text"></span></div>
                                  </div>
                                  <br>
                                  <div class="input-group">
                                      <input placeholder="0000000" name="sdcard_id" type="text" class="form-control">
                                  </div>
                                  <br>
                                   <div class="input-group">
                                      <input placeholder="Device Serial" name="serial" type="text" class="form-control">
                                  </div>
                                  <br>
                                    <input type="hidden"  name="user_id" id="user_id"  value="" />
                                    <input class="contact100-form-btn" type="submit" name="save" id="save"  value="Send Now"  style="margin-left:25%;width: 150px;background: #3f6ad8;color:#fff"/>
                                </div>
                            </div>
                            <!-- /form-panel -->
                          </div>
                        <!-- row -->
                      </form>
                        <!-- row -->
                     <!--  </section> -->
                      <!-- /wrapper -->
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
              </div>

            </div>
        </div>
    </div>


 <!-- Modal -->
 <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Device Info</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                  <div class="main-card mb-3 card">
                      <div class="card-body"><h5 class="card-title">Add Device</h5>
                             <?php echo validation_errors(); ?>
                             <?php echo form_open('dashboard/device_record'); ?>
                              <div class="input-group">
                                  <div class="input-group-prepend"><span class="input-group-text"></span></div>
                                  <input placeholder="device_name" name="device_name" type="text" class="form-control">
                                </div>
                              <br>
                              <div class="input-group">
                                  <div class="input-group-prepend"><span class="input-group-text"></span></div>
                                  <input placeholder="device_location" name="device_location" type="text" class="form-control"></div>
                              <br>
                              <div class="input-group"><input placeholder="mac_address"  name="mac_address" type="text" class="form-control">
                                  <div class="input-group-append"><span class="input-group-text"></span></div>
                              </div>
                              <br>
                              <div class="input-group">
                                  <input placeholder="0000000" name="sdcard_id" type="text" class="form-control">
                              </div>
                              <br>
                               <div class="input-group">
                                  <input placeholder="Device Serial" name="serial" type="text" class="form-control">
                              </div>
                              <input type="hidden" name="user_id"  id="id" class="form-control sp"  value="<?php echo ($session['user_id'])?>"/>
                              <br>
                               <input class="btn btn-primary" type="submit" name="submit" id="submit"  style="margin-left:25%;width:150px" value="Submit"/>
                             <?php echo form_close(); ?>
                          </div>
                      </div>
                  </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <!--   <button type="button" type="submit" name="submit" id="submit" class="btn btn-primary">Save changes</button> -->
            </div>
      </div>


