          <div class="app-wrapper-footer">
            <div class="app-footer">
                <div class="app-footer__inner">
                    <div class="app-footer-left">
                        <ul class="nav">
                            <li class="nav-item">
                                <a href="javascript:void(0);" class="nav-link">
                                 Copyright © 2020 &nbsp; <strong style="color:red">GHANA REVENUE AUTHORITY </strong>. All rights reserved.
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    <script src="<?php echo base_url(); ?>/assets/jquery.min.js" ></script>
    <script type="text/javascript" src="<?php echo base_url(); ?>/assets/scripts/main.js"></script>
    <script src="<?php echo base_url(); ?>/assets/bootstrap/dist/js/bootstrap.min.js" ></script>
    <script src=" <?php echo base_url(); ?>/assets/advanced-datatable/datatable/jquery.dataTables.min.js"></script>
    <script src=" <?php echo base_url(); ?>/assets/buttons/buttons.datatable.min.js"></script>
    <script src=" <?php echo base_url(); ?>/assets/buttons/button.flash.min.js"></script>
    <script  src="<?php echo base_url(); ?>/assets/buttons/jszip.min.js"></script>
    <script src="  <?php echo base_url(); ?>/assets/buttons/pdfmake.min.js"></script>
    <script src="<?php echo base_url(); ?>/assets/buttons/vfs_fonts.js"></script>
    <script src="<?php echo base_url(); ?>/assets/buttons/buttons.html5.min.js"></script>
    <script src=" <?php echo base_url(); ?>/assets/buttons/buttons.print.min.js"></script>
    <script src=" <?php echo base_url(); ?>/assets/dataTables.editor.min.js"></script>
   <!--  <script src="http://maps.google.com/maps/api/js?sensor=true"></script> -->

</div>
</div>

<script>
   var loadchurchlogo = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var churchlogo = document.getElementById('churchlogo');
      churchlogo.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };
</script>
<script>
    $(document).ready(function() {
      // Create two variables with names of months and days of the week in the array
      var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

      // Create an object newDate()
      var newDate = new Date();
      // Retrieve the current date from the Date object
      newDate.setDate(newDate.getDate());
      // At the output of the day, date, month and year
      $('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

      setInterval( function() {
          // Create an object newDate () and extract the second of the current time
          var seconds = new Date().getSeconds();
          // Add a leading zero to the value of seconds
          $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
          },1000);

      setInterval( function() {
          // Create an object newDate () and extract the minutes of the current time
          var minutes = new Date().getMinutes();
          // Add a leading zero to the minutes
          $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
          },1000);

      setInterval( function() {
          // Create an object newDate () and extract the clock from the current time
          var hours = new Date().getHours();
          // Add a leading zero to the value of hours
          $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
          }, 1000);

      });
</script>


<!--  <?php //$this->load->view('components/ajax'); ?>
  -->






 <!-- REQUIRED SCRIPTS -->
<!--script src="<-?php echo base_url(); ?>/assets/newskin/plugins/jquery/jquery.min.js"></script>
<script src="<-?php echo base_url(); ?>/assets/newskin/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="<-?php echo base_url(); ?>/assets/newskin/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
<script src="<-?php echo base_url(); ?>/assets/newskin/dist/js/adminlte.js"></script>
<script src="<-?php echo base_url(); ?>/assets/newskin/dist/js/demo.js"></script>
<script src="<-?php echo base_url(); ?>/assets/newskin/plugins/jquery-mousewheel/jquery.mousewheel.js"></script>
<script src="<-?php echo base_url(); ?>/assets/newskin/plugins/raphael/raphael.min.js"></script>
<script src="<-?php echo base_url(); ?>/assets/newskin/plugins/jquery-mapael/jquery.mapael.min.js"></script>
<script src="<-?php echo base_url(); ?>/assets/newskin/plugins/jquery-mapael/maps/usa_states.min.js"></script>
<script src="<-?php echo base_url(); ?>/assets/newskin/plugins/chart.js/Chart.min.js"></script>
<script src="<-?php echo base_url(); ?>/assets/newskin/dist/js/pages/dashboard2.js"></script-->


</body>
</html>