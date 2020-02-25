
       <script>
             $(document).ready(function(){
                  var dataTable = $('#tithe_data').DataTable({
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
                       url: '<?php echo base_url()?>/Contributions/fetch_tithe',
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
                  $('#myModal').find('.modal-title'). text(' Edit Tithe Details');
                  $('titheform').attr('action', '<?php echo base_url()?>Contributions/tithe_edit');

                  $.ajax({
                  type : 'ajax',
                   method : 'POST',
                   url: '<?php echo base_url()?>/Contributions/tithe_edit',
                   data:{user_id:user_id},
                   async:false,
                   dataType: 'json',
                   success: function(data){
                      $('#name').val(data.name);
                      $('#amount').val(data.amount);
                      $('#year').val(data.year);
                      $('#register_no').val(data.register_no);
                      $('#created_at').val(data.created_at);
                      $('#user_id').val(data.id);
                      $('#save').val("Edit");
                   },
                   error:function(){
                      alert("Please refresh page");
                   }
                });
              });



              $(document).on('submit', '#titheform', function(event){
               event.preventDefault();
                 var user_id = $('#user_id').val();
                 var amount = $('#amount').val();
                 var register_no = $('#register_no').val();
                 var year = $('#year').val();
                 var name = $('#name').val();

                 if( name!= '') {
                      $.ajax({
                       url: '<?php echo base_url()?>/Contributions/tithe_update',
                       method : 'POST',
                       data: new FormData(this),
                        contentType:false,
                        processData:false,
                       success:function(data){
                        var user= $('#user_id').val(data.user_id);
                         alert(data);
                         $('#titheform')[0].reset();
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
                   url: '<?php echo base_url()?>/Contributions/tithe_delete',
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