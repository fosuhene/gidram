<script>
   $(document).ready(function(){

      var oTable=  $('#sschool_data'). DataTable({
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
             url: '<?php echo base_url()?>/Administration/fetch_sschool',
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
        $('#myModal').find('.modal-title'). text(' Edit Sunday School Details');
        $('sschoolsform').attr('action', '<?php echo base_url()?>Administration/sschool_edit');

        $.ajax({
        type : 'ajax',
         method : 'POST',
         url: '<?php echo base_url()?>/Administration/sschool_edit',
         data:{user_id:user_id},
         async:false,
         dataType: 'json',
         success: function(data){
            $('#group_name').val(data.group_name);
            $('#attendance').val(data.attendance);
            $('#officer').val(data.officer);
            $('#officer_assistant').val(data.officer_assistant);
            $('#attendance').val(data.attendance);
            $('#date').val(data.date);
            $('#user_id').val(data.id);
            $('#save').val("Edit");
         },
         error:function(){
            alert("Please Refresh the page. Thank you.");
         }

      });

    });


    $(document).on('submit', '#sschoolsform', function(event){
        event.preventDefault();
        var user_id = $('#user_id').val();
        var group_name = $('#group_name').val();
        var attendance = $('#attendance').val();
        var officer = $('#officer').val();
       if(group_name != '') {
            $.ajax({
              url: '<?php echo base_url()?>/Administration/sschool_update',
              method : 'POST',
              data: new FormData(this) ,
              contentType:false,
              processData:false,
              success:function(data)
              {
                var user= $('#user_id').val(data.user_id);
                alert(data);
                $('#sschoolsform')[0].reset();
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
               url: '<?php echo base_url()?>/Administration/sschool_delete',
               method : 'POST',
               data:{user_id:user_id},
               success: function(data){
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
