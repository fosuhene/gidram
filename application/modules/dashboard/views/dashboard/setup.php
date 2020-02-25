 <?php $this->load->view('components/header2'); ?>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">

    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-md-12">
             <div class="app-main__outer">
                <div class="app-main__inner">
                    <div class="app-page-title">
                        <div class="page-title-wrapper">
                            <div class="page-title-heading">
                                <div class="page-title-icon">
                                    <i class="fa fa-cog">
                                    </i>
                                </div>
                                <div>Setup Categories
                                    <div class="page-title-subheading">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="main-card mb-3 card">
                                <div class="card-body">
                                    <!-- Button trigger modal -->
                                   Main Category
                                    <button type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target=".bd-example1-modal-sm" style="float:right"><i class="fa fa-plus">Add New </i></button>
                                    <table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered" id="hidden_table_maincategory">
                                        <thead >
                                            <tr>
                                            <th width="70%">
                                              Title
                                            </th>
                                            <th>
                                              Edit
                                            </th>
                                            <th >
                                              Delete
                                            </th>
                                            </tr>
                                        </thead>
                                        <!--  -->
                                    </table>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6">
                            <div class="main-card mb-3 card">
                                <div class="card-body">
                                    <!-- Button trigger modal -->
                                     Subcategory  1
                                    <button type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target=".bd-example2-modal-sm" style="float:right"><i class="fa fa-plus">Add New </i></button>
                                    <table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered" id="hidden_table_subcategory1">
                                        <thead >
                                            <tr>
                                            <th width="70%">
                                              Title
                                            </th>
                                            <th >
                                             Edit
                                            </th>
                                            <th >
                                             Delete
                                            </th>
                                            </tr>
                                        </thead>
                                        <!--  -->
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-6">
                        <div class="main-card mb-3 card">
                            <div class="card-body">
                                <!-- Button trigger modal -->
                                 Subcategory  2
                                <button type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target=".bd-example3-modal-sm" style="float:right"><i class="fa fa-plus">Add New </i></button>
                                <table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered" id="hidden_table_subcategory2">
                                    <thead >
                                        <tr>
                                        <th width="70%">
                                          Title
                                        </th>
                                        <th >
                                         Edit
                                        </th>
                                        <th >
                                         Delete
                                        </th>
                                        </tr>
                                    </thead>
                                    <!--  -->
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.col-->
      </div>
      <!-- ./row -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
 <?php $this->load->view('components/footer2'); ?>


 <!-- Small modal -->
<div class="modal fade bd-example1-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Main Category</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
             <?php echo form_open('dashboard/maincategory_save'); ?>
                <div class="modal-body">
                    <p><input name="name" id="" placeholder=" Enter title" type="text" class="form-control"/></p>
                    <p><input name="type" id="" value="1" type="hidden" class="form-control"/></p>
                    <p><input name="user_id" id="" value="<?php echo $user_info->user_id?>" type="hidden" class="form-control"/></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button  type="submit" name="submit" class="btn btn-danger">Save</button>
                </div>
            <?php echo form_close(); ?>
        </div>
    </div>
</div>


<div class="modal fade bd-example2-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Subcategory 1</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
           <?php echo form_open('dashboard/maincategory_save'); ?>
                <div class="modal-body">
                    <p><input name="name" id="" placeholder=" Enter title" type="text" class="form-control"/></p>
                    <p><input name="type" id="" value="2" type="hidden" class="form-control"/></p>
                    <p><input name="user_id" id="" value="<?php echo $user_info->user_id?>" type="hidden" class="form-control"/></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button  type="submit" name="submit" class="btn btn-danger">Save</button>
                </div>
            <?php echo form_close(); ?>
        </div>
    </div>
</div>


<div class="modal fade bd-example3-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Subcategory 2</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
           <?php echo form_open('dashboard/maincategory_save'); ?>
                <div class="modal-body">
                    <p><input name="name" id="" placeholder=" Enter title" type="text" class="form-control"/></p>
                    <p><input name="type" id="" value="3" type="hidden" class="form-control"/></p>
                    <p><input name="user_id" id="" value="<?php echo $user_info->user_id?>" type="hidden" class="form-control"/></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button  type="submit" name="submit" class="btn btn-danger">Save</button>
                </div>
            <?php echo form_close(); ?>
        </div>
    </div>
</div>

 <div class="modal open" id="myModal" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Edit Clients</h4>
            </div>
               <h4><i class="fa fa-angle-right"></i><strong> Edit Clients Details </strong></h4>
               <form id="myFormsettings" action="" method="post">
                  <div class="col-lg-12">
                    <div class="form-panel">
                       <div class="card-body"><h5 class="card-title"></h5>
                            <p><input name="name" id="name" placeholder=" Enter title" type="text" class="form-control"/></p>
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