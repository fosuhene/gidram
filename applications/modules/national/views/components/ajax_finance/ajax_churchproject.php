
       <script>
             $(document).ready(function(){
                  var dataTable = $('#churchproject_data').DataTable({
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
                       url: '<?php echo base_url()?>/Finance/fetch_churchproject',
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
                  $('#myModal').find('.modal-title'). text(' Edit Church Project Details');
                  $('churchprojectform').attr('action', '<?php echo base_url()?>Finance/churchproject_edit');

                  $.ajax({
                  type : 'ajax',
                   method : 'POST',
                   url: '<?php echo base_url()?>/Finance/churchproject_edit',
                   data:{user_id:user_id},
                   async:false,
                   dataType: 'json',
                   success: function(data){
                   //alert("test") ;
                      $('#proj_description').val(data.proj_description);
                      $('#actual_cost').val(data.actual_cost);
                      $('#estimate_cost').val(data.estimate_cost);
                      $('#commence_date').val(data.commence_date);
                      $('#completion_date').val(data.completion_date);
                      $('#leader').val(data.leader);
                      $('#address').val(data.address);
                      $('#tel').val(data.tel);
                      $('#remarks').val(data.remarks);
                      $('#created_at').val(data.created_at);
                      $('#user_id').val(data.id);
                      $('#save').val("Edit");
                   },
                   error:function(){
                      alert("Please refresh page");
                   }
                });
              });



            $(document).on('submit', '#churchprojectform', function(event){
               event.preventDefault();
                 var user_id = $('#user_id').val();
                 var proj_description = $('#proj_description').val();
                 var actual_cost = $('#actual_cost').val();
                 var estimate_cost = $('#estimate_cost').val();
                 if( proj_description!= '') {
                      $.ajax({
                       url: '<?php echo base_url()?>/Finance/churchproject_update',
                       method : 'POST',
                       data: new FormData(this),
                        contentType:false,
                        processData:false,
                       success:function(data){
                        var user= $('#user_id').val(data.user_id);
                         alert(data);
                         $('#churchprojectform')[0].reset();
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
                   url: '<?php echo base_url()?>/Finance/churchproject_delete',
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