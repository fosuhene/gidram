
       <script>
             $(document).ready(function(){

                //alert("test");
                  var dataTable = $('#fundtype_data').DataTable({
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
                       url: '<?php echo base_url()?>/Settings/fetch_fundtype',
                       type : 'POST',
                  },

                  });





            $(document).on('click', '.update', function(){
                var user_id = $(this).attr('id');
                  $('#myModal').modal("show");
                  $('#myModal').find('.modal-title'). text(' Edit Fund Type Settings');
                  $('fundtypeform').attr('action', '<?php echo base_url()?>Settings/fundtype_edit');

                  $.ajax({
                  type : 'ajax',
                   method : 'POST',
                   url: '<?php echo base_url()?>/Settings/fundtype_edit',
                   data:{user_id:user_id},
                   async:false,
                   dataType: 'json',
                   success: function(data){
                   //alert("test") ;
                      $('#fund_type').val(data.fund_type);
                      $('#description').val(data.description);
                      $('#user_id').val(data.id);
                      $('#save').val("Edit");
                   },
                   error:function(){
                      alert("Please refresh page. Thank you.");
                   }

                });

              });



            $(document).on('submit', '#fundtypeform', function(event){
             event.preventDefault();
               var user_id = $('#user_id').val();
               var fund_type = $('#fund_type').val();
               var description = $('#description').val();

              if( fund_type!= '') {
                    $.ajax({
                     url: '<?php echo base_url()?>/Settings/fundtype_update',
                     method : 'POST',
                     data: new FormData(this),
                      contentType:false,
                      processData:false,
                     success:function(data){
                      var user= $('#user_id').val(data.user_id);
                       alert(data);
                       $('#fundtypeform')[0].reset();
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
                   url: '<?php echo base_url()?>/Settings/fundtype_delete',
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