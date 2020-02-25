<?php $this->load->view('dashboard/components/mainheader'); ?>
        <!-- page content -->
        <div class="right_col" role="main">
          <div class="">
            <div class="page-title">
              <div class="title_left">
                <h5><small>Register New Tax Components</small></h5>
              </div>

           <!--div class="title_right">
                <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                  <div class="input-group">
                    <a href="tax/taxRegister" type="button" class="btn btn-primary btn-xs" value="Add New" data-toggle="tooltip" data-placement="top" title="Add New Tax Component" style="background:#12034c;color:#fff">
					<i class="fa fa-plus-circle"></i> Add New
					</a>
                  </div>
                </div>
              </div--> 
            </div>

            <div class="clearfix"></div>

            <div class="row">
       
                <div class="x_content">
				
					<?php echo form_open("tax/taxAdd",['class' => 'form-horizontal']); ?>
								
					<div class="row">
						<div class='col-sm-2'> </div>
						<div class='col-sm-8'>
							Tax Component
							<div class="form-group">
								<div class='input-group date'>
									<!--input type="text" class="form-control has-feedback-left" id="single_cal2" placeholder="Select Tax Start Date" aria-describedby="inputSuccess2Status2"-->
									 <?php echo form_input(['type'=>'text','name' => 'taxName', 'class' => 'form-control has-feedback-left', 'placeholder' => 'Tax Component']); ?>
									<span class="input-group-addon">
									   <span class="fa fa-pencil form-control-feedback left" aria-hidden="true"></span>
									</span>
								</div>
							</div>
						</div>
						<div class='col-sm-2'> </div>						
					</div>
					
					<div class="row">
						<div class='col-sm-2'> </div>
						<div class='col-sm-4'>
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
						
						<div class='col-sm-4'>
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
						<div class='col-sm-2'> </div>						
					</div>
					
					<div class="row">
						<div class='col-sm-2'> </div>
						<div class='col-sm-8'>
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
						<div class='col-sm-2'> </div>						
					</div>
					
					<div class="row">
						<div class='col-sm-2'> </div>
						<div class='col-sm-4'>
							Tax Factor
							<div class="form-group">
								<div class='input-group date' id='taxStartDatepicker'>
									 <?php echo form_input(['type'=>'text','name' => 'taxFactor', 'class' => 'form-control has-feedback-left', 'placeholder' => 'Tax Factor']); ?>
									<span class="input-group-addon">
									   <span class="fa fa-pencil form-control-feedback left" aria-hidden="true"></span>
									</span>
								</div>
							</div>
						</div>
						
						<div class='col-sm-4'>
							Tax Grade
							<div class="form-group">
								<div class='input-group date' id='taxStartDatepicker'>
									<?php echo form_input(['type'=>'text','name' => 'taxGrade', 'class' => 'form-control has-feedback-left', 'placeholder' => 'Tax Grade']); ?>
									<span class="input-group-addon">
									   <span class="fa fa-pencil form-control-feedback left" aria-hidden="true"></span>
									</span>
								</div>
							</div>
						</div>
						<div class='col-sm-2'> </div>						
					</div>
					
					<div class="row">
						<div class='col-sm-2'> </div>
							<div class="col-sm-4 checkbox">
								<label><input type="checkbox" class="flat" checked="checked"> Activate Tax </label>
							</div>
							<div class='col-sm-2'></div>
								<div class='col-sm-3'>
									<button type='submit' class="btn btn-primary" style="background:#12034c; color:#fff"><i class="fa fa-plus-circle"></i> Save</button> 
									<button type='reset' class="btn btn-warning">Reset</button> 
								</div>	
														
					</div>
                  <?php echo form_close(); ?>
                
            </div>
            </div>
			
			
			
			
			
          </div>
        </div>
        <!-- /page content -->

<?php $this->load->view('dashboard/components/mainfooter'); ?>
<!--?php $this->load->view('components/ajax_tax/tax'); ?-->
