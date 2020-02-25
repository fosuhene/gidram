
       <script>
             $(document).ready(function(){
                  var dataTable = $('#taxcompany').DataTable({
                      "scrollY": "150px",
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
                       url: '<?php echo base_url()?>/National/fetch_taxcompany',
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
                  $('#myModal').find('.modal-title'). text(' Edit Offering Details');
                  $('offeringform').attr('action', '<?php echo base_url()?>Contributions/offering_edit');

                  $.ajax({
                  type : 'ajax',
                   method : 'POST',
                   url: '<?php echo base_url()?>/Contributions/offering_edit',
                   data:{user_id:user_id},
                   async:false,
                   dataType: 'json',
                   success: function(data){
                   //alert("test") ;
                      $('#offering_type').val(data.offering_type);
                      $('#amount').val(data.amount);
                      $('#currency').val(data.currency);
                      $('#attendance').val(data.attendance);
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
          });

      </script>


      <script>
         $(document).ready(function(){
              var dataTable = $('#facility').DataTable({
                  "scrollY": "150px",
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
                   url: '<?php echo base_url()?>/National/fetch_facility',
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



            $(document).on('click', '.update1', function(){
                var user_id = $(this).attr('id');
                  $('#myModal').modal("show");
                  $('#myModal').find('.modal-title'). text(' Edit Offering Details');
                  $('offeringform').attr('action', '<?php echo base_url()?>Contributions/offering_edit');

                  $.ajax({
                  type : 'ajax',
                   method : 'POST',
                   url: '<?php echo base_url()?>/Contributions/offering_edit',
                   data:{user_id:user_id},
                   async:false,
                   dataType: 'json',
                   success: function(data){
                   //alert("test") ;
                      $('#offering_type').val(data.offering_type);
                      $('#amount').val(data.amount);
                      $('#currency').val(data.currency);
                      $('#attendance').val(data.attendance);
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
       });
   </script>