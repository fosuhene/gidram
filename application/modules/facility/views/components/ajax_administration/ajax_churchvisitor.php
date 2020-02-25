

<!-- ==============#########Church Visitor=====###================================ -->

<script>
   $(document).ready(function(){
      var oTable=  $('#churchvisitor_data'). DataTable({
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
              // ajax :'data.json',
             url: '<?php echo base_url()?>/Administration/fetch_churchvisitor',
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
        $('#myModal').find('.modal-title'). text(' Edit Church Visitor Details');
        $('churchvisitorform').attr('action', '<?php echo base_url()?>Administration/churchvisitor_edit');

        $.ajax({
        type : 'ajax',
         method : 'POST',
         url: '<?php echo base_url()?>/Administration/churchvisitor_edit',
         data:{user_id:user_id},
         async:false,
         dataType: 'json',
         success: function(data){
         // alert(  $(user_id); ;
            $('#serviceRecords_id').val(data.serviceRecords_id);
            $('#name').val(data.name);
            $('#contact').val(data.contact);
            $('#address').val(data.address);
            $('#purpose').val(data.purpose);
            $('#official').val(data.official);
            $('#user_id').val(data.visitor_id);
            $('#save').val("Edit");
         },
         error:function(){
            alert("Please Refresh the page. Thank you.");
         }

      });

    });


    $(document).on('submit', '#churchvisitorform', function(event){
          event.preventDefault();
          var user_id = $('#user_id').val();
          var serviceRecords_id = $('#serviceRecords_id').val();
          var name = $('#name').val();
          var contact = $('#contact').val();
          var address = $('#address').val();
          var purpose = $('#purpose').val();
          var official = $('#official').val();
         if(name != '' && contact != '') {
          $.ajax({
           url: '<?php echo base_url()?>/Administration/churchvisitor_update',
           method : 'POST',
           data: new FormData(this) ,
            //async: false,
            contentType:false,
            processData:false,
            success:function(data){
            var user= $('#user_id').val(data.user_id);
             alert(data);
             $('#churchvisitorform')[0].reset();
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
               url: '<?php echo base_url()?>/Administration/churchvisitor_delete',
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
