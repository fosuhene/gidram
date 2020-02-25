   
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
                        <div>Customer Device
                            <div class="page-title-subheading">
                              Add and fetch all device information.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-card mb-3 card">
                  <form id="myForm" action="" method="post">
                      <div class="col-lg-12">
                        <div class="form-panel">
                           <div class="card-body"><h5 class="card-title"></h5>
                              <table border="1" cellspacing="0" border="0"  class="display table table-bordered">
                                <tr>
                                  <td> <label for=""><strong>Image:</strong></label></td>
                                  <td><img class="thumpnail" src="<?php echo base_url(); ?>assets/images/post/<?php echo $users['photo']; ?>" style="width:200px; height:100px"/></td>
                                </tr>
                                <tr>
                                  <td> <label for=""><strong>Account Type:</strong></label></td>
                                  <td><?php echo $clients['account_name']?></td>
                                </tr>
                                <tr>
                                  <td> <label for=""><strong> Account Manager:</strong></label></td>
                                  <td><?php echo $clients['manager']?></td>
                                </tr>
                                 <tr>
                                  <td> <label for=""><strong>City:</strong></label></td>
                                  <td><?php echo $clients['city']?></td>
                                </tr>
                                 <tr>
                                  <td> <label for=""><strong>Country:</strong></label></td>
                                  <td><?php echo $clients['country']?></td>
                                </tr>
                                <tr>
                                  <td> <label for=""><strong>Address:</strong></label></td>
                                  <td><?php echo $clients['address']?></td>
                                </tr>
                                <tr>
                                  <td> <label for=""><strong>Login date:</strong></label></td>
                                  <td><?php echo $clients['login_date']?></td>
                                </tr>
                              </table> 
                            </div>
                        </div>
                        <!-- /form-panel -->
                      </div>
                    <!-- row -->
                  </form>
               
              <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"  style="margin-left:2%">
                <li class="nav-item">
                  <button type="button" class="btn mr-2 mb-2 btn-warning" data-toggle="modal" data-target="#exampleModalLong">
                   <i class="fa fa-angle-pencil"></i>Add Device Info
                  </button>
                </li>
              </ul>
			  
              <ul class="tabs">
                  <li rel="tab4" class="tabs-animated tabs-danger">Remote Wiped</li>
                  <li rel="tab3">Locked</li>
                  <li rel="tab2">Active</li>
                   <li class="active" rel="tab1"> All </li>
              </ul>

                <div class="tab_container">
                    <h3 class="d_active tab_drawer_heading" rel="tab1">Tab 1</h3>
                    <div id="tab1" class="tab_content">
                      <div class="card-body">
                     <table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered" id="hidden-table-deviceinfo">
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
              <div id="tab2" class="tab_content" ng-app='myapp'>
                  <div ng-controller='userCtrl'>
                    <!-- User Records -->
                    <table border='1' class="display table table-bordered">
                      <thead>
                       <tr>
                        <th>Device Name</th>
                        <th>Device Location</th>
                        <th>Mac Address</th>
                        <th>SD Card</th>
                        <th>Serial</th>
                      </tr>
                    </thead>
                    <tbody>
                     <tr ng-repeat='device in devices'>
                       <td>{{ device.device_name }}</td>
                       <td>{{ device.device_location}}</td>
                       <td>{{ device.mac_address }}</td>
                       <td>{{ device.sdcard_id }}</td>
                       <td>{{ device.serial }}</td>
                     </tr>
                    </tbody>
                  </table>
                 </div>
                 <!-- Script -->
                 <script>
                 var fetch = angular.module('myapp', []);
                 fetch.controller('userCtrl', ['$scope', '$http', function ($scope, $http){                 
                   $scope.getdevices = function(){
                    $http({
                     method: 'get',
                     url: '<?php echo base_url()?>/Dashboard/getdevices'
                    }).then(function successCallback(response) {
                      // Assign response to users object
                      $scope.devices = response.data;
                    }); 
                   }
                   $scope.getdevices();
                 }]);
                 </script>
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
                                    <input type="text"  name="user_id" id="user_id"  value="" />
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
                              <input type="hidden" name="content_id"  id="id" class="form-control sp"  value="<?php echo ($content)?>"/>
                              <input type="hidden"  name="user_id" id="user_id"  value=" <?php echo $user_info->user_id?>" />
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


