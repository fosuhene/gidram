

<!-- ==============#########Church Visitor=====###================================ -->

<script>
   $(document).ready(function(){
      var oTable=  $('#churchwedding_data'). DataTable({
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
             url: '<?php echo base_url()?>/Events/fetch_churchwedding',
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
        $('#myModal').find('.modal-title'). text(' Edit Church Wedding  Details');
        $('churchweddingform').attr('action', '<?php echo base_url()?>Events/churchwedding_edit');

        $.ajax({
        type : 'ajax',
         method : 'POST',
         url: '<?php echo base_url()?>/Events/churchwedding_edit',
         data:{user_id:user_id},
         async:false,
         dataType: 'json',
         success: function(data){
         // alert(  $(user_id); ;
            $('#licence_no').val(data.licence_no);
            $('#wedding_date').val(data.wedding_date);
            $('#wedding_time').val(data.wedding_time);
            $('#bride_name').val(data.bride_name);
            $('#bride_father').val(data.bride_father);
            $('#bride_mother').val(data.bride_mother);
            $('#bride_witness').val(data.bride_witness);
            $('#groom_name').val(data.groom_name);
            $('#groom_father').val(data.groom_father);
            $('#groom_mother').val(data.groom_mother);
            $('#groom_witness').val(data.groom_witness);
            $('#church').val(data.church);
            $('#officiating_pastor').val(data.officiating_pastor);
            $('#user_id').val(data.id);
            $('#save').val("Edit");
         },
         error:function(){
            alert("Please Refresh the page. Thank you.");
         }

      });

    });


    $(document).on('submit', '#churchweddingform', function(event){
          event.preventDefault();
          var user_id = $('#user_id').val();
          var licence_no = $('#licence_no').val();
          var wedding_time = $('#wedding_time').val();
          var bride_name = $('#bride_name').val();
          var bride_father = $('#bride_father').val();
          var bride_mother = $('#bride_mother').val();
         if(licence_no != '') {
          $.ajax({
           url: '<?php echo base_url()?>/Events/churchwedding_update',
           method : 'POST',
           data: new FormData(this) ,
            //async: false,
            contentType:false,
            processData:false,
            success:function(data){
            var user= $('#user_id').val(data.user_id);
             alert(data);
             $('#churchweddingform')[0].reset();
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
               url: '<?php echo base_url()?>/Events/churchwedding_delete',
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
