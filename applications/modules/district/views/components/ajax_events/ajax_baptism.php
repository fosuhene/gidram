

<!-- ==============#########Church Visitor=====###================================ -->

<script>
   $(document).ready(function(){
      var oTable=  $('#baptism_data'). DataTable({
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
             url: '<?php echo base_url()?>/Events/fetch_baptism',
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
        $('baptismform').attr('action', '<?php echo base_url()?>Events/baptism_edit');

        $.ajax({
        type : 'ajax',
         method : 'POST',
         url: '<?php echo base_url()?>/Events/baptism_edit',
         data:{user_id:user_id},
         async:false,
         dataType: 'json',
         success: function(data){
         // alert(  $(user_id); ;
            $('#name').val(data.name);
            $('#gender').val(data.gender);
            $('#dob').val(data.dob);
            $('#daybirth').val(data.daybirth);
            $('#fathers_name').val(data.fathers_name);
            $('#mothers_name').val(data.mothers_name);
            $('#pob').val(data.pob);
            $('#hometown').val(data.hometown);
            $('#fathers_nationality').val(data.fathers_nationality);
            $('#mothers_nationality').val(data.mothers_nationality);
            $('#baptism_date').val(data.baptism_date);
            $('#baptism_place').val(data.baptism_place);
            $('#church_name').val(data.church_name);
            $('#officiating_minister').val(data.officiating_minister);
            $('#user_id').val(data.id);
            $('#save').val("Edit");
         },
         error:function(){
            alert("Please Refresh the page. Thank you.");
         }

      });

    });


    $(document).on('submit', '#baptismform', function(event){
          event.preventDefault();
          var user_id = $('#user_id').val();
          var gender = $('#gender').val();
          var name = $('#name').val();
          var dob = $('#dob').val();
          var daybirth = $('#daybirth').val();
          var fathers_name = $('#fathers_name').val();
          var mothers_name = $('#mothers_name').val();
         if(name != '') {
          $.ajax({
           url: '<?php echo base_url()?>/Events/baptism_update',
           method : 'POST',
           data: new FormData(this) ,
            //async: false,
            contentType:false,
            processData:false,
            success:function(data){
            var user= $('#user_id').val(data.user_id);
             alert(data);
             $('#baptismform')[0].reset();
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
               url: '<?php echo base_url()?>/Events/baptism_delete',
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
