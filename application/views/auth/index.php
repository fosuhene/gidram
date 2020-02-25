
 <?php $this->load->view('components/header2'); ?>

  <!-- page content -->
        <div class="right_col" role="main">
                 <div class="col-md-12">
                      <div class="card">
                          <div class="card-body">
                             <!--  <h6><strong> Account Info</strong></h6> -->
                              <div class="col-md-12" style="margin-bottom: 4%">
                                  <div class="col-md-6">
                                      <div class="page-title-heading">
                                        <div class="page-title-icon">
                                            <i class="fa fa-server">
                                            </i>
                                        </div>
                                      <!--   <div> <h2><?php //echo lang('index_heading');?></h2>
                                            <div class="page-title-subheading">
                                              <p><?php //echo lang('index_subheading');?></p>
                                            </div>
                                        </div> -->
                                    </div>
                                  </div>
                              </div>

                              <div class="col-md-12" >
                                 <h1><?php echo lang('index_heading');?></h1>
                                  <p><?php echo lang('index_subheading');?></p>

                                  <div id="infoMessage"><?php echo $message;?></div>

                                  <table cellpadding=0 cellspacing=10 class="table table-bordered table-striped">
                                    <tr>
                                      <th><?php echo lang('index_fname_th');?></th>
                                      <th><?php echo lang('index_lname_th');?></th>
                                      <th><?php echo lang('index_email_th');?></th>
                                      <th><?php echo lang('index_groups_th');?></th>
                                      <th><?php echo lang('index_status_th');?></th>
                                      <th><?php echo lang('index_action_th');?></th>
                                    </tr>
                                    <?php foreach ($users as $user):?>
                                      <tr>
                                              <td><?php echo htmlspecialchars($user->first_name,ENT_QUOTES,'UTF-8');?></td>
                                              <td><?php echo htmlspecialchars($user->last_name,ENT_QUOTES,'UTF-8');?></td>
                                              <td><?php echo htmlspecialchars($user->email,ENT_QUOTES,'UTF-8');?></td>
                                        <td>
                                          <?php foreach ($user->groups as $group):?>
                                            <?php echo anchor("auth/edit_group/".$group->id, htmlspecialchars($group->name,ENT_QUOTES,'UTF-8')) ;?><br />
                                                  <?php endforeach?>
                                        </td>
                                        <td><?php echo ($user->active) ? anchor("auth/deactivate/".$user->id, lang('index_active_link')) : anchor("auth/activate/". $user->id, lang('index_inactive_link'));?></td>
                                        <td><?php echo anchor("auth/edit_user/".$user->id, 'Edit') ;?></td>
                                      </tr>
                                    <?php endforeach;?>
                                  </table>

                                  <p><?php echo anchor('auth/create_user', lang('index_create_user_link'))?> | <?php echo anchor('auth/create_group', lang('index_create_group_link'))?></p>
                            </div>
                          </div>
                      </div>
                  </div>
                <!-- end of weather widget -->
              </div>




    <?php $this->load->view('components/footer2'); ?>

