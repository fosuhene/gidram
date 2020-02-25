   <!--footer start-->

            <div id="footer" class="ui-footer">
                 2018 &copy; St. James Catholic Church.

            </div>
            <!--footer end-->

        </div>

        <?php $this->load->view('components/date'); ?>

        <!-- inject:js -->
        <script src="<?php echo base_url(); ?>/assets/dashboard/bower_components/jquery/dist/jquery.min.js"></script>
        <script src="<?php echo base_url(); ?>/assets/dashboard/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
        <script src="<?php echo base_url(); ?>/assets/dashboard/bower_components/jquery.nicescroll/dist/jquery.nicescroll.min.js"></script>
        <script src="<?php echo base_url(); ?>/assets/dashboard/bower_components/autosize/dist/autosize.min.js"></script>
        <!-- endinject -->

        <script src="<?php echo base_url(); ?>/assets/dashboard/dist/js/main.js"></script>

        <!--From validation  -->
        <script src="<?php echo base_url(); ?>/assets/dashboard/bower_components/jquery-validation/dist/jquery.validate.min.js"></script>
        <script src="<?php echo base_url(); ?>/assets/dashboard/assets/js/init-validation.js"></script>
            <script>
        jQuery('option').mousedown(function(e) {
        e.preventDefault();
        jQuery(this).toggleClass('selected');

        jQuery(this).prop('selected', !jQuery(this).prop('selected'));
        return false;
        });
    </script>




    <script>
        function openCity(evt, cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
        }

 </script>


 <script type="text/javascript">
   $( document ).ready(function() {
    $('#lnkPrint').click(function()
     {
         window.print();
     });
})
</script>


 <script type="text/javascript">
   $( document ).ready(function() {
  $('.print').on('click', function() { // select print button with class "print," then on click run callback function
  $.print(".tabcontent"); // inside callback function the section with class "content" will be printed
});
})
</script>



<script>
function printDiv()
{

  var divToPrint=document.getElementById('DivIdToPrint');

  var newWin=window.open('','Print-Window');

  newWin.document.open();

  newWin.document.write('<html><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');

  newWin.document.close();

  setTimeout(function(){newWin.close();},10);

}
</script>


<!-- <script>
 function printData()
{
   var divToPrint=document.getElementById("printTable");
   newWin= window.open("");
   newWin.document.write(divToPrint.outerHTML);
   newWin.print();
   newWin.close();
}

$('button').on('click',function(){
printData();
})
</script> -->


<script>
  var loadFile = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('output');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };
</script>



    </body>

</html>