<?php $this->load->view('dashboard/components/mainheader'); ?>
        <!-- page content -->
        <div class="right_col" role="main">
          <div class="">
            <div class="page-title">
              <div class="title_left">
                <h3><small>Registered Tax Components</small></h3>
              </div>

           <div class="title_right">
                <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                  <div class="input-group">
					<!--?php echo anchor("tax/taxRegister","Add New",['class'=>'btn btn-primary btn-xs']);?-->
                    <a href="<?php echo base_url(); ?>Tax/taxRegister" type="button" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#exampleModal" value="Add New" data-toggle="tooltip" data-placement="top" title="Add New Tax Component" style="background:#12034c;color:#fff">
					<i class="fa fa-plus-circle"></i> Add New
					</a>
                    <!--span class="input-group-btn">
                      <button class="btn btn-secondary" type="button">Go!</button>
                    </span-->
                  </div>
                </div>
              </div> 
            </div>

            <!--div class="clearfix"></div>
			<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button-->
			
			
            <div class="row">

              <div class="col-md-12 col-sm-12 ">
                <div class="x_panel">
                  <div class="x_title">
                    <!--h2>Button Example <small>Users</small></h2-->
                    <ul class="nav navbar-right panel_toolbox">
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                      <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Settings 1</a>
                            <a class="dropdown-item" href="#">Settings 2</a>
                          </div>
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
                    <!--p class="text-muted font-13 m-b-30">
                      The Buttons extension for DataTables provides a common set of options, API methods and styling to display buttons on a page that will interact with a DataTable. The core library provides the based framework upon which plug-ins can built.
                    </p-->
                    <table  class="table table-striped table-bordered" id="taxcomponent" style="width:100%">
                      <thead style="background:#F9DC00;color:#000">
                        <tr class="headings">
                          <th class="column-title">Tax ID</th>
                          <th class="column-title">Tax Name </th>
                          <th class="column-title">Tax Start Date</th>
                          <th class="column-title">Tax End Date </th>
                          <th class="column-title">Descripition</th>
                          <th class="column-title">Tax Factor </th>
                          <th class="column-title">Tax Grade </th>
                          <th class="column-title">Edit </th>
                          <th class="column-title">View </th>
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
		
		
		
		
		<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add New Tax Component</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
	   <div class="row">
        <div class="x_content">
				
					<?php echo form_open("tax/taxAdd",['class' => 'form-horizontal']); ?>
								
					<div class="row">
						<!--div class='col-sm-2'> </div-->	
						<div class='col-sm-12'>
							Tax Component
							<div class="form-group">
								<div class='input-group date'>
									<!--input type="text" class="form-control has-feedback-left" id="single_cal2" placeholder="Select Tax Start Date" aria-describedby="inputSuccess2Status2"-->
									 <?php echo form_input(['type'=>'text','name' => 'taxName', 'class' => 'form-control has-feedback-left', 'placeholder' => '']); ?>
									<span class="input-group-addon">
									   <span class="fa fa-pencil form-control-feedback left" aria-hidden="true"></span>
									</span>
								</div>
							</div>
						</div>
						<!--div class='col-sm-2'> </div-->						
					</div>
					
					<div class="row">
						<!--div class='col-sm-2'> </div-->	
						<div class='col-sm-6'>
							Start Date
							<div class="form-group">
								<div class='input-group date' id='myStDatepicker'>
									 <!--input type="text" class="form-control has-feedback-left" id="single_cal2" placeholder="Select Tax Start Date" aria-describedby="inputSuccess2Status2"-->
									 <?php echo form_input(['type'=>'textarea','name' => 'taxStartDate', 'id'=>'single_cal2', 'class' => 'form-control has-feedback-left', 'placeholder'=>'Select Tax Start Date', 'aria-describedby'=>'inputSuccess2Status2']); ?>
									<span class="input-group-addon">
									   <span class="fa fa-calendar-o form-control-feedback left" aria-hidden="true"></span>
									</span>
								</div>
							</div>
						</div>
						
						<div class='col-sm-6'>
							End Date
							<div class="form-group">
								<div class='input-group date' id='myEndDatepicker'>
									<!--input type="text" class="form-control has-feedback-left" id="single_cal4" placeholder="Select Tax End Date" aria-describedby="inputSuccess2Status2"-->
									<?php echo form_input(['type'=>'textarea','name' => 'taxEndDate', 'id'=>'single_cal4', 'class' => 'form-control has-feedback-left', 'placeholder'=>'Select Tax End Date', 'aria-describedby'=>'inputSuccess2Status2']); ?>
									<span class="input-group-addon">
									   <span class="fa fa-calendar-o form-control-feedback left" aria-hidden="true"></span>
									</span>
								</div>
							</div>
						</div>
						<!--div class='col-sm-2'> </div-->						
					</div>
					
					<div class="row">
						<!--div class='col-sm-2'> </div-->	
						<div class='col-sm-12'>
							Tax Description
							<div class="form-group">
								<div class='input-group date' id='taxStartDatepicker'>
									<!--input type="text" class="form-control has-feedback-left" id="single_cal2" placeholder="Select Tax Start Date" aria-describedby="inputSuccess2Status2"-->
									<?php echo form_input(['type'=>'textarea','name' => 'taxDesc', 'class' => 'form-control has-feedback-left']); ?>
									<span class="input-group-addon">
									   <span class="fa fa-pencil form-control-feedback left" aria-hidden="true"></span>
									</span>
								</div>
							</div>
						</div>
						<!--div class='col-sm-2'> </div-->						
					</div>
					
					<div class="row">
						<!--div class='col-sm-2'> </div-->	
						<div class='col-sm-6'>
							Tax Factor
							<div class="form-group">
								<div class='input-group date' id='taxStartDatepicker'>
									 <?php echo form_input(['type'=>'text','name' => 'taxFactor', 'class' => 'form-control has-feedback-left', 'placeholder' => '']); ?>
									<span class="input-group-addon">
									   <span class="fa fa-pencil form-control-feedback left" aria-hidden="true"></span>
									</span>
								</div>
							</div>
						</div>
						
						<div class='col-sm-6'>
							Tax Grade
							<div class="form-group">
								<div class='input-group date' id='taxStartDatepicker'>
									<?php echo form_input(['type'=>'text','name' => 'taxGrade', 'class' => 'form-control has-feedback-left', 'placeholder' => '']); ?>
									<span class="input-group-addon">
									   <span class="fa fa-pencil form-control-feedback left" aria-hidden="true"></span>
									</span>
								</div>
							</div>
						</div>
						<!--div class='col-sm-2'> </div-->						
					</div>
					
					<div class="row">
						<!--div class='col-sm-2'> </div-->	
							<div class="col-sm-4 checkbox">
								<label><input type="checkbox" class="flat" checked="checked" style="background:#12034c; color:#fff"> Activate Tax </label>
							</div>
							<div class='col-sm-8'></div>														
					</div>
					<div class="row">
						<div class='col-sm-7'></div>
						<div class='col-sm-5'>
						<button type='submit' class="btn btn-primary" style="background:#12034c; color:#fff"><i class="fa fa-plus-circle"></i> Save</button>
						<button type='reset' class="btn btn-warning"><i class="fa fa-times" aria-hidden="true"></i> Reset</button> 
						</div>							
					</div>
                  <?php echo form_close(); ?>
                
            </div>
			</div>
      </div>
      <!--div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div-->
    </div>
  </div>
</div>

<?php $this->load->view('dashboard/components/mainfooter'); ?>
<?php $this->load->view('components/ajax_tax/tax'); ?>