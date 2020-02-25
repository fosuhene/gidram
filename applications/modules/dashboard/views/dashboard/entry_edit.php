     <?php $this->load->view('components/header'); ?>

      <div class="app-main">
                <div class="app-main__outer">
                    <div class="app-main__inner">
                        <div class="app-page-title">
                            <div class="page-title-wrapper">
                                <div class="page-title-heading">
                                    <div class="page-title-icon">
                                        <i class="fa fa-plus">
                                        </i>
                                    </div>
                                    <div>Update Content
                                        <div class="page-title-subheading">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   <!--     <table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered" id="hidden-table-content">
                              <thead >
                                  <tr>
                                    <th>
                                      ID
                                    </th>
                                    <th>
                                      Date Added
                                    </th>
                                    <th >
                                        Title
                                    </th> 
                                    <th >
                                        Attachments
                                    </th>
                                    <th>
                                       Categories
                                    </th>
                                    <th>
                                       Edit
                                    </th>
                                     <th>
                                       Delete
                                    </th>
                                    <th>
                                      Actions
                                    </th>
                                 </tr>
                              </thead>
                         <! -->
                       <!--   </table>  -->
                        <div class="tab-content">
                            <div class="tab-pane tabs-animation fade show active" id="tab-content-0" role="tabpanel">
                               <form id="myformupdate" method="post" action="">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="main-card mb-3 card">
                                            <div class="card-body">
                                                <div class="position-relative form-group">
                                                    <input name="title" id="title" value=" <?php echo $content['title']?>" type="text" class="form-control">
                                                </div>
                                                <div class="position-relative form-group">
                                                    <textarea name="body" id="editor1" rows="10" cols="80"><?php echo $content['body']?> </textarea>
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
                                                    <select name="cat1" id="cat1" class="mb-2 form-control">
                                                        <option><?php echo $content['cat1']?></option>
                                                        <?php echo $maincategory ;?>
                                                    </select>
                                                    <select name="cat2" id="cat2" class="mb-2 form-control">
                                                        <option><?php echo $content['cat2']?></option>
                                                        <?php echo $subcategory1 ;?>
                                                    </select>
                                                    <select name="cat3" id="cat3" class="mb-2 form-control">
                                                        <option><?php echo $content['cat3']?></option>
                                                        <?php echo $subcategory2 ;?>
                                                    </select>
                                            </div>
                                        </div>
                                        <div class="main-card mb-3 card">
                                            <div class="card-body">
                                                <div class="position-relative form-group">
                                                    <h5><strong>Attachments</strong></h5>
                                                    <input name="userfile" id="image" type="file" value="<?php echo $content['image']?>" class="form-control-file">
                                                </div>
                                                <p><input name="id" id="user_id" value="<?php echo $idinfo?>" type="hidden" class="form-control"/></p>
                                                  <input class="contact100-form-btn" type="submit" name="save" id="save"  value="Send Now"  />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               </form>
                            </div>
                        </div>
                    </div>
               <?php $this->load->view('components/footer'); ?>