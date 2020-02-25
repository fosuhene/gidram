            <!-- Footer Area -->
                <footer class="footer-area d-flex align-items-center flex-wrap">
                    <!-- Copywrite Text -->
                    <div class="copywrite-text">
                        <p>Churchsuite &copy; 2020 created by <a href="#">AO Holdings Ltd.</a></p>
                    </div>
                    <!-- Footer Nav -->
                    <ul class="footer-nav d-flex align-items-center">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </footer>
            </div>
        </div>
    </div>
    <!-- ======================================
    ********* Page Wrapper Area End ***********
    ======================================= -->


    <!-- Must needed plugins to the run this Template -->
    <script src="<?php echo base_url(); ?>/assets/main/js/jquery.min.js"></script>
    <script src="<?php echo base_url(); ?>/assets/main/js/popper.min.js"></script>
    <script src="<?php echo base_url(); ?>/assets/main/js/bootstrap.min.js"></script>
    <script src="<?php echo base_url(); ?>/assets/main/js/bundle.js"></script>
    <script src="<?php echo base_url(); ?>/assets/main/js/default-assets/date-time.js"></script>

    <!-- Active JS -->
    <script src="<?php echo base_url(); ?>/assets/main/js/default-assets/active.js"></script>
    <script src="<?php echo base_url(); ?>/assets/sweetalert/sweetalert.min.js" ></script>

    <script src=" <?php echo base_url(); ?>/assets/advanced-datatable/datatable/jquery.dataTables.min.js"></script>
    <script src="<?php echo base_url(); ?>/assets/buttons//jquery.dataTables.min.js"></script>
    <script src="<?php echo base_url(); ?>/assets/buttons/dataTables.buttons.min.js"></script>
    <script src=" <?php  echo base_url(); ?>/assets/buttons/button.flash.min.js"></script>
    <script  src="<?php echo base_url(); ?>/assets/buttons/jszip.min.js"></script>
    <script src="  <?php echo base_url(); ?>/assets/buttons/pdfmake.min.js"></script>
    <script src="<?php echo base_url(); ?>/assets/buttons/vfs_fonts.js"></script>
    <script src="<?php echo base_url(); ?>/assets/buttons/buttons.html5.min.js"></script>
    <script src=" <?php echo base_url(); ?>/assets/buttons/buttons.print.min.js"></script>
    <script src=" <?php echo base_url(); ?>/assets/script.js"></script>
    <script src=" <?php echo base_url(); ?>/assets/FormCache.js"></script>
    <script src=" <?php echo base_url(); ?>/assets/jquery.numberformatter.js"></script>

    <!-- These plugins only need for the run this page -->
    <script src="<?php echo base_url(); ?>/assets/main/js/default-assets/chart.bundle.min.js"></script>
    <script src="<?php echo base_url(); ?>/assets/main/js/default-assets/chart.js"></script>
    <script src="<?php echo base_url(); ?>/assets/main/js/default-assets/line-chart-custom.js"></script>
    <script src="<?php echo base_url(); ?>/assets/main/js/default-assets/am-chart.js"></script>
    <script src="<?php echo base_url(); ?>/assets/main/js/default-assets/gauge.js"></script>
    <script src="<?php echo base_url(); ?>/assets/main/js/default-assets/serial.js"></script>
    <script src="<?php echo base_url(); ?>/assets/main/js/default-assets/light.js"></script>
    <script src="<?php echo base_url(); ?>/assets/main/js/default-assets/ammap.min.js"></script>
    <script src="<?php echo base_url(); ?>/assets/main/js/default-assets/worldlow.js"></script>
    <script src="<?php echo base_url(); ?>/assets/main/js/default-assets/radar.js"></script>
    <script src="<?php echo base_url(); ?>/assets/main/js/default-assets/widget-page-chart-active.js"></script>


    <script src="<?php echo base_url(); ?>/assets/main/js/default-assets/vector-map/jquery-jvectormap-2.0.2.min.js"></script>
    <script src="<?php echo base_url(); ?>/assets/main/js/default-assets/vector-map/jquery-jvectormap-world-mill-en.js"></script>
    <script src="<?php echo base_url(); ?>/assets/main/js/default-assets/vector-map/jquery-jvectormap-in-mill.js"></script>
    <script src="<?php echo base_url(); ?>/assets/main/js/default-assets/vector-map/jquery-jvectormap-us-aea-en.js"></script>
    <script src="<?php echo base_url(); ?>/assets/main/js/default-assets/vector-map/jquery-jvectormap-uk-mill-en.js"></script>
    <script src="<?php echo base_url(); ?>/assets/main/js/default-assets/vector-map/jquery-jvectormap-au-mill.js"></script>
    <script src="<?php echo base_url(); ?>/assets/main/js/default-assets/vector-map/jvectormap.custom.js"></script>


    <?php $this->load->view('components/ajax'); ?>
    <?php $this->load->view('auth/components/addscript'); ?>
    <?php $this->load->view('membership/components/ajax_member/ajax_personaldata'); ?>
    <?php $this->load->view('membership/components/ajax_member/ajax_occupationdata'); ?>
    <?php $this->load->view('membership/components/ajax_member/ajax_nationality'); ?>
    <?php $this->load->view('membership/components/ajax_member/ajax_education'); ?>
    <?php $this->load->view('membership/components/ajax_member/ajax_familydata'); ?>
    <?php $this->load->view('membership/components/ajax_member/ajax_emergency'); ?>
 <!--    <script>
        $(document).ready(function () {
        $('form').FormCache();
        });
    </script> -->

</body>


</html>
