

<!-- ===============================Church New Convent===================================== -->

<script>
   $(document).ready(function(){

      var oTable=  $('#churchnewconvert_data'). DataTable({
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
             "serverside" : true,
             "processing" :true,
              "order" :[],
             "ajax" :{
             url: '<?php echo base_url()?>/Administration/fetch_churchnewconvent',
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

  /* =================Edit, update and Delete data (CRUD)======================= */


      $(document).on('click', '.update', function(){
      var user_id = $(this).attr('id');

        $('#myModal').modal("show");
        $('#myModal').find('.modal-title'). text(' Edit Church New Convert Details');
        $('churchnewconvertform').attr('action', '<?php echo base_url()?>Administration/churchnewconvent_edit');

        $.ajax({
        type : 'ajax',
         method : 'POST',
         url: '<?php echo base_url()?>/Administration/churchnewconvent_edit',
         data:{user_id:user_id},
         async:false,
         dataType: 'json',
         success: function(data){
         //alert("test") ;
            $('#serviceRecords_id').val(data.serviceRecords_id);
            $('#NCname').val(data.NCname);
            $('#NCcontact').val(data.NCcontact);
            $('#NCaddress').val(data.NCaddress);
            // $('#NCpurpose').val(data.NCpurpose);
            $('#NCofficial').val(data.NCofficial);
            $('#NCcaretaker').val(data.NCcaretaker);
            $('#user_id').val(data.newConvent_id);
            $('#save').val("Edit");
         },
         error:function(){
            alert("Please Refresh the page. Thank you.");
         }

      });

    });



    $(document).on('submit', '#churchnewconvertform', function(event){
          event.preventDefault();
          var user_id = $('#user_id').val();
          var serviceRecords_id = $('#serviceRecords_id').val();
          var NCname = $('#NCname').val();
          var NCcontact = $('#NCcontact').val();
          var NCaddress = $('#NCaddress').val();
          var NCpurpose = $('#NCpurpose').val();
          var NCofficial = $('#NCofficial').val();
          var NCcaretaker = $('#NCcaretaker').val();
         if(NCname != '' && NCcontact != '') {
          $.ajax({
           url: '<?php echo base_url()?>/Administration/churchnewconvent_update',
           method : 'POST',
           data: new FormData(this) ,
            //async: false,
            contentType:false,
            processData:false,
            success:function(data){

            var user= $('#user_id').val(data.user_id);
             //console.log(JSON.stringify(user));
             alert(data);
             $('#churchnewconvertform')[0].reset();
             $('#myModal').modal('hide');
             oTable.ajax.reload();
            }
        });
       }
      else{
        alert("Both  fields are required");
      }
   });



  $(document).on('click', '.delete', function(){

      var user_id = $(this).attr('id');
      //alert("test");
      $('#deleteModal').modal("show");
      $('#deleteModal').find('.modal-title'). text(' Delete Information');

       swal({
        title: "Are you sure?",
        text: "",
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
               url: '<?php echo base_url()?>/Administration/churchnewconvent_delete',
               method : 'POST',
               data:{user_id:user_id},
               success: function(data){
                  // alert(data);
                   swal(data);
                 oTable.ajax.reload();
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
 });

</script>