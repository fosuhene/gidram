
       <script>
             $(document).ready(function(){
                  var dataTable = $('#churchloans_data').DataTable({
                      dom: 'Bfrtip',
                      buttons: [
                        { extend: 'copyHtml5'},
                        { extend: 'excelHtml5' },
                        { extend: 'pdfHtml5',orientation: 'landscape',pageSize: 'LEGAL'},
                        { extend: 'print',orientation: 'landscape',pageSize: 'LEGAL',
                        exportOptions: {
                        stripHtml: false,
                        }
                        }
                      ],
                      "processing" :true,
                      "serverside" : true,
                      "order" :[],
                       "ajax" :{
                       url: '<?php echo base_url()?>/Finance/fetch_churchloans',
                       type : 'POST',
                  },
                     initComplete: function () {
                      this.api().columns().every( function () {
                          var column = this;
                          var select = $('<select><option value=""></option></select>')
                              .appendTo( $(column.footer()).empty() )
                              .on( 'change', function () {
                                  var val = $.fn.dataTable.util.escapeRegex(
                                      $(this).val()
                                  );
                                  column
                                      .search( val ? '^'+val+'$' : '', true, false )
                                      .draw();
                              });
                          column.data().unique().sort().each( function ( d, j ) {
                              select.append( '<option value="'+d+'">'+d+'</option>' )
                          } );
                      });
                    }
              });


            $(document).on('click', '.update', function(){
                var user_id = $(this).attr('id');
                  $('#myModal').modal("show");
                  $('#myModal').find('.modal-title'). text(' Edit Church Loans Details');
                  $('churchloansform').attr('action', '<?php echo base_url()?>Finance/churchloans_edit');

                  $.ajax({
                  type : 'ajax',
                   method : 'POST',
                   url: '<?php echo base_url()?>/Finance/churchloans_edit',
                   data:{user_id:user_id},
                   async:false,
                   dataType: 'json',
                   success: function(data){
                      $('#recipient_name').val(data.recipient_name);
                      $('#re_tel').val(data.re_tel);
                      $('#re_email').val(data.re_email);
                      $('#re_address').val(data.re_address);
                      $('#organization').val(data.organization);
                      $('#purpose').val(data.purpose);
                      $('#issue_date').val(data.issue_date);
                      $('#expiry_date').val(data.expiry_date);
                      $('#principal_amt').val(data.principal_amt);
                      $('#loan_amt').val(data.loan_amt);
                      $('#interest_rate').val(data.interest_rate);
                      $('#loan_balance').val(data.loan_balance);
                      $('#created_at').val(data.created_at);
                      $('#user_id').val(data.id);
                      $('#save').val("Edit");
                   },
                   error:function(){
                      alert("Please refresh page");
                   }
                });
              });



            $(document).on('submit', '#churchloansform', function(event){
               event.preventDefault();
                 var user_id = $('#user_id').val();
                 var recipient_name = $('#recipient_name').val();
                 var organization = $('#organization').val();
                 var expiry_date = $('#expiry_date').val();
                 if( recipient_name!= '') {
                      $.ajax({
                       url: '<?php echo base_url()?>/Finance/churchloans_update',
                       method : 'POST',
                       data: new FormData(this),
                        contentType:false,
                        processData:false,
                       success:function(data){
                        var user= $('#user_id').val(data.user_id);
                         alert(data);
                         $('#churchloansform')[0].reset();
                         $('#myModal').modal('hide');
                         dataTable.ajax.reload();
                        }
                    });
              }
              else{
                alert("Please Refresh page");
              }

            });

        // ####################Delete Information##############################################
        $(document).on('click', '.delete', function(){
          var user_id = $(this).attr('id');
          $('#deleteModal').modal("show");
          $('#deleteModal').find('.modal-title'). text(' Delete Information');
           swal({
            title: "Are you sure?",
            text: " ",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel it!",
            closeOnConfirm: false,
            closeOnCancel: false
          },
          function(isConfirm) {
            if (isConfirm) {
              $.ajax({
                   url: '<?php echo base_url()?>/Finance/churchloans_delete',
                   method : 'POST',
                   data:{user_id:user_id},
                   success: function(data){
                     swal(data);
                     dataTable.ajax.reload();
                   },
                   error:function(){
                      alert("could not delete Data");
                   }
                });

            } else {
              swal("Cancelled", "Data not Deleted :)", "error");
             }
          });
        });
        // ###############End of Delete Button##########################

      });

  </script>




<script type="text/javascript">
    $(document).ready(function () {
        $("#interest").keyup(function () {
          var principal = $('#principal').val();
          var interest = $('#interest').val();
         var result =  parseInt(interest)/100 * parseInt(principal) +  parseInt(principal);
           $('#loan_total').val(result);
           // $('#loan_amt').val(result).formatCurrency({ symbol: '', roundToDecimalPlace: 2 });
        });
    });
</script>



<script type="text/javascript">
    $(document).ready(function () {
        $("#interest_rate").keyup(function () {
          var principal_amt = $('#principal_amt').val();
          var interest_rate = $('#interest_rate').val();
         var result =  parseInt(interest_rate)/100 * parseInt(principal_amt) +  parseInt(principal_amt);
           $('#loan_amt').val(result);
           // $('#loan_amt').val(result).formatCurrency({ symbol: '', roundToDecimalPlace: 2 });
        });
    });
</script>
