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
           <div class="app-main__inner">
              <div class="app-page-title">
                  <div class="page-title-wrapper">
                      <div class="page-title-heading">
                          <div class="page-title-icon">
                              <i class="fa fa-plus">
                              </i>
                          </div>
                          <div>Add New Content
                              <div class="page-title-subheading">
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="tab-content">
                  <div class="tab-pane tabs-animation fade show active" id="tab-content-0" role="tabpanel">
                      <?php echo form_open_multipart("dashboard/content_save");?>
                      <div class="row">
                          <div class="col-md-8">
                              <div class="main-card mb-3 card">
                                  <div class="card-body">
                                      <div class="position-relative form-group">
                                          <input name="title" id="exampleEmail" placeholder=" Enter title" type="text" class="form-control">
                                      </div>
                                      <div class="position-relative form-group">
                                          <textarea name="body" id="editor1" rows="10" cols="80"> </textarea>
                                          <script>
                                           CKEDITOR.replace( 'editor1' );
                                          </script>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-4">
                              <div class="main-card mb-3 card">
                                  <div class="card-body">
                                      <h5 class="card-title">Assign Category</h5>
                                          <div class="divider"></div>
                                          <select name="cat1" class="mb-2 form-control">
                                              <option>Main Category</option>
                                              <?php echo $maincategory ;?>
                                          </select>
                                          <select name="cat2" class="mb-2 form-control">
                                              <option>Subcategory 1</option>
                                              <?php echo $subcategory1 ;?>
                                          </select>
                                          <select name="cat3" class="mb-2 form-control">
                                              <option>Subcategory 2</option>
                                              <?php echo $subcategory2 ;?>
                                          </select>
                                  </div>
                              </div>
                              <div class="main-card mb-3 card">
                                  <div class="card-body">
                                      <div class="position-relative form-group">
                                          <h5><strong>Attachments</strong></h5>
                                          <input name="userfile" id="image" type="file" class="form-control-file">
                                      </div>
                                      <p><input name="user_id" id="" value="<?php echo $user_info->user_id?>" type="hidden" class="form-control"/></p>
                                      <button class="btn btn-primary" type="submit" name="submit" style="float:right;">Save Content</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <?php echo form_close(); ?>
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