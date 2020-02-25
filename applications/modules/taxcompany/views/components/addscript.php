<!--  <script>
    $(document).ready(function(){
        $('#search').keyup(function(){
            alert('yes');
          search_table($(this).val());
     });

     function search_table(value){
        $('#menu  ul').each(function(){
            var found ="false";
            $(this).each(function(){

                if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >=0)
                {
                    found = "true";
                }
            });
            if(found == 'true')
            {
                $(this).show();
            }
            else
             {
               $(this).hide();
             }
        });
      }

    });
</script> -->



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







