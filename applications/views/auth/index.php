
 <?php $this->load->view('components/header2'); ?>


  <div class="app-main__outer" style="margin-left: 20%">
      <div class="app-main__inner">
          <div class="app-page-title" >
              <div class="page-title-wrapper">
                  <div class="page-title-heading">
                      <div class="page-title-icon">
                          <i class="fa fa-server">
                          </i>
                      </div>
                      <div> <h2><?php echo lang('index_heading');?></h2>
                          <div class="page-title-subheading">
                            <p><?php echo lang('index_subheading');?></p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
         <!--   <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
              <li class="nav-item">
                  <a role="tab" class="nav-link active" id="tab-0" data-toggle="tab" href="#tab-content-0">
                      <span>Layout</span>
                  </a>
              </li>
              <li class="nav-item">
                  <a role="tab" class="nav-link" id="tab-1" data-toggle="tab" href="#tab-content-1">
                      <span>Grid</span>
                  </a>
              </li>
          </ul> -->
          <div class="tab-content" >
              <div class="tab-pane tabs-animation fade show active" id="tab-content-0" role="tabpanel">
                  <div class="main-card mb-3 card">
                      <div class="card-body">
                             <div class="row">
                              <div class="col-md-12" style="margin-left:2%!important">
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
              </div>
          </div>
      </div>
   <!--  </div> -->

    <?php $this->load->view('components/footer2'); ?>

