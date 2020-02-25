<script>
   $(document).ready(function(){
      var oTable=  $('#churchtable'). DataTable({
          // "scrollY": "500px",
          // "paging": false,
            dom: 'Bfrtip',
              buttons: [
                { extend: 'copyHtml5'},
                { extend: 'excelHtml5' },
                { extend: 'csvHtml5' },
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
             url: '<?php echo base_url()?>/Administration/fetch_churchinfo',
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
        $('#myModal').find('.modal-title'). text(' Edit Church Information Details');
        $('churchinfoform').attr('action', '<?php echo base_url()?>Administration/churchinfo_edit');

        $.ajax({
        type : 'ajax',
         method : 'POST',
         url: '<?php echo base_url()?>/Administration/churchinfo_edit',
         data:{user_id:user_id},
         async:false,
         dataType: 'json',
         success: function(data){
            $('#churchname').val(data.churchname);
            $('#churchlevel_id').val(data.churchlevel_id);
            $('#country_id').val(data.country_id);
            $('#region_id').val(data.region_id);
            $('#city').val(data.city);
            $('#contact').val(data.contact);
            $('#email').val(data.email);
            $('#address').val(data.address);
            $('#user_id').val(data.id);
            $('#user_uploaded_pic') .html(data.userfile);
            $('#save').val("Edit");
         },
         error:function(){
            alert("Please Refresh the page. Thank you.");
         }
      });
    });

    $(document).on('submit', '#churchinfoform', function(event){
        event.preventDefault();
        var user_id = $('#user_id').val();
        var churchname = $('#churchname').val();
        var churchlevel_id = $('#churchlevel_id').val();
        var country_id = $('#country_id').val();
        var region_id = $('#region_id ').val();
        var city = $('#city').val();
        var address = $('#address').val();
        var contact = $('#contact').val();
        var email = $('#email').val();
        var photo = $('#photo').val();
       if(churchlevel_id != '' && region_id != '') {
            $.ajax({
              url: '<?php echo base_url()?>/Administration/churchinfo_update',
              method : 'POST',
              data: new FormData(this) ,
              //async: false,
              contentType:false,
              processData:false,
              success:function(data)
              {
                var user= $('#user_id').val(data.user_id);
                alert(data);
                $('#churchinfoform')[0].reset();
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
               url: '<?php echo base_url()?>/Administration/churchinfo_delete',
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
