 <script type="text/javascript">
        $(document).ready(function () {
            $("#amountpaid").keyup(function () {
                // alert('test');
                var pledgeamt = $('#pledgeamt').val();
                var amt = $(this).val();
                var result =  parseInt(pledgeamt) -  parseInt(amt) ;
                  $("#bal").val(result).formatCurrency({ symbol: '', roundToDecimalPlace: 2 });
            });
        });
  </script>


   <script type="text/javascript">
        $(document).ready(function () {
            $("#amt_paid").keyup(function () {
                var pledgeamt = $('#pledge_amt').val();
                var amt = $(this).val();
                var result =  parseInt(pledgeamt) -  parseInt(amt) ;
                  $("#balance").val(result).formatCurrency({ symbol: '', roundToDecimalPlace: 2 });
            });
        });
  </script>

