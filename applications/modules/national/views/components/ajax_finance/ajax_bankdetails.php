
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
                      "processing" :true,
                      "serverside" : true,
                      "order" :[],
                       "ajax" :{
                       url: '<?php echo base_url()?>/Finance/fetch_bankdetails',
                       type : 'POST',
                  },
              });



            $(document).on('click', '.update', function(){
                var user_id = $(this).attr('id');
                  $('#myModal').modal("show");
                  $('#myModal').find('.modal-title'). text(' Edit Bank Details');
                  $('bankdetailsform').attr('action', '<?php echo base_url()?>Finance/bankdetails_edit');

                  $.ajax({
                  type : 'ajax',
                   method : 'POST',
                   url: '<?php echo base_url()?>/Finance/bankdetails_edit',
                   data:{user_id:user_id},
                   async:false,
                   dataType: 'json',
                   success: function(data){
                   //alert("test") ;
                      $('#bankcode_id').val(data.bankcode_id);
                      $('#bankname_id').val(data.bankname_id);
                      $('#accnttype_id').val(data.accnttype_id);
                      $('#branchname').val(data.branchname);
                      $('#accnt_no').val(data.accnt_no);
                      $('#postal_address').val(data.postal_address);
                      $('#currency').val(data.currency);
                      $('#balance').val(data.balance);
                      $('#tel').val(data.tel);
                      $('#email').val(data.email);
                      $('#created_at').val(data.created_at);
                      $('#user_id').val(data.id);
                      $('#save').val("Edit");
                   },
                   error:function(){
                      alert("Please refresh page");
                   }
                });
              });



              $(document).on('submit', '#bankdetailsform', function(event){
               event.preventDefault();
                 var user_id = $('#user_id').val();
                 var bankcode_id = $('#bankcode_id').val();
                 var bankname_id = $('#bankname_id').val();
                 var accnttype_id = $('#accnttype_id').val();
                 var branchname = $('#branchname').val();
                 var postal_address= $('#postal_address').val();
                 var email= $('#email').val();
                 var balance= $('#balance').val();
                 var tel= $('#tel').val();
                 var accnt_no= $('#accnt_no').val();
                 var currency= $('#currency').val();
                 if( branchname!= '') {
                      $.ajax({
                       url: '<?php echo base_url()?>/Finance/bankdetails_update',
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
                   url: '<?php echo base_url()?>/Finance/bankdetails_delete',
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