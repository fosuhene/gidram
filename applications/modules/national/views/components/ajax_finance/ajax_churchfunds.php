
       <script>
             $(document).ready(function(){
                  var dataTable = $('#churchfunds_data').DataTable({
                      dom: 'Bfrtip',
                      buttons: [
                        { extend: 'copyHtml5'},
                        { extend: 'excelHtml5' },
                        { extend: 'pdfHtml5',orientation: 'landscape',pageSize: 'LEGAL'},
                        { extend: 'print' },
                      ],
                      "processing" :true,
                      "serverside" : true,
                      "order" :[],
                       "ajax" :{
                       url: '<?php echo base_url()?>/Finance/fetch_churchfunds',
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
                  $('#myModal').find('.modal-title'). text(' Edit Church Funds Details');
                  $('churchfundsform').attr('action', '<?php echo base_url()?>Finance/churchfunds_edit');

                  $.ajax({
                  type : 'ajax',
                   method : 'POST',
                   url: '<?php echo base_url()?>/Finance/churchfunds_edit',
                   data:{user_id:user_id},
                   async:false,
                   dataType: 'json',
                   success: function(data){
                   //alert("test") ;
                      $('#operational_year').val(data.operational_year);
                      $('#fund_type_id').val(data.fund_type_id);
                      $('#member_name').val(data.member_name);
                      $('#amount').val(data.amount);
                      $('#currency').val(data.currency);
                      $('#fund_description').val(data.fund_description);
                      $('#created_at').val(data.created_at);
                      $('#user_id').val(data.id);
                      $('#save').val("Edit");
                   },
                   error:function(){
                      alert("Please refresh page");
                   }
                });
              });



            $(document).on('submit', '#churchfundsform', function(event){
               event.preventDefault();
                 var user_id = $('#user_id').val();
                 var operational_year = $('#operational_year').val();
                 var fund_type_id = $('#fund_type_id').val();
                 var member_name = $('#member_name').val();
                 var amount = $('#amount').val();
                 var currency= $('#currency').val();
                 var fund_description= $('#fund_description').val();
                 if( member_name!= '') {
                      $.ajax({
                       url: '<?php echo base_url()?>/Finance/churchfunds_update',
                       method : 'POST',
                       data: new FormData(this),
                        contentType:false,
                        processData:false,
                       success:function(data){
                        var user= $('#user_id').val(data.user_id);
                         alert(data);
                         $('#churchfundsform')[0].reset();
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
                   url: '<?php echo base_url()?>/Finance/churchfunds_delete',
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