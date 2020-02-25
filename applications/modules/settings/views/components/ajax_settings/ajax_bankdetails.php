
       <script>
             $(document).ready(function(){
                  var dataTable = $('#bankdetails_data').DataTable({
                      dom: 'Bfrtip',
                      buttons: [
                        { extend: 'copyHtml5'},
                        { extend: 'excelHtml5' },
                        { extend: 'pdfHtml5' },
                        { extend: 'print' },
                      ],
                      "processing" :false,
                      "serverside" : true,
                      "order" :[],
                       "ajax" :{
                       url: '<?php echo base_url()?>/Settings/fetch_bankdetails',
                       type : 'POST',
                  },

              });


            $(document).on('click', '.update', function(){
                var user_id = $(this).attr('id');
                  $('#myModal').modal("show");
                  $('#myModal').find('.modal-title'). text(' Edit Bank Details Settings');
                  $('bankdetailsform').attr('action', '<?php echo base_url()?>Settings/bankdetails_edit');

                  $.ajax({
                  type : 'ajax',
                   method : 'POST',
                   url: '<?php echo base_url()?>/Settings/bankdetails_edit',
                   data:{user_id:user_id},
                   async:false,
                   dataType: 'json',
                   success: function(data){
                   //alert("test") ;
                      $('#bank_code').val(data.bank_code);
                      $('#bank_name').val(data.bank_name);
                      $('#bank_type').val(data.bank_type);
                      $('#user_id').val(data.id);
                      $('#save').val("Edit");
                   },
                   error:function(){
                      alert("Please refresh page. Thank you.");
                   }

                });

              });


          $(document).on('submit', '#bankdetailsform', function(event){
             event.preventDefault();
               var user_id = $('#user_id').val();
               var bank_code = $('#bank_code').val();
               var bank_name = $('#bank_name').val();
               var bank_type = $('#bank_type').val();

              if( bank_name!= '') {
                    $.ajax({
                     url: '<?php echo base_url()?>/Settings/bankdetails_update',
                     method : 'POST',
                     data: new FormData(this),
                      contentType:false,
                      processData:false,
                     success:function(data){
                      var user= $('#user_id').val(data.user_id);
                       alert(data);
                       $('#bankdetailsform')[0].reset();
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
                   url: '<?php echo base_url()?>/Settings/bankdetails_delete',
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