<!-- ============================= Fetch Church Service===================================== -->


<script>
   $(document).ready(function(){

      var child_table = function child_table (data) {
        var
          tpl = $('#service_template').clone(),
          row_tpl = tpl.find('tr.row_tpl').hide();

        var
          names = data[8].split(','),
          // tins = data[10].split(','),
          tax_company_identifiers = data[9].split(',');
          addresss = data[10].split(',');
          emails = data[11].split(',');
          phones = data[12].split(',');
          latitudes = data[13].split(',');
          longitudes = data[14].split(',');


        for (var i=0; i<names.length; i++) {
          var tr = row_tpl.clone();
          tr.find('[data-key=name]').text(names[i]);
          // tr.find('[data-key=tin]').text(tins[i]);
          tr.find('[data-key=tax_company_identifier]').text(tax_company_identifiers[i]);
          tr.find('[data-key=address]').text(addresss[i]);
          tr.find('[data-key=email]').text(emails[i]);
          tr.find('[data-key=phone]').text(phones[i]);
          tr.find('[data-key=latitude]').text(latitudes[i]);
          tr.find('[data-key=longitude]').text(longitudes[i]);
          tpl.append(tr.show());
        }
        return tpl.show();
      };

      var dt_after_draw = function dt_after_draw () {
        $('#location tbody tr td:first-child()').each(function () {
        var btn = $('<button />').attr({
        type: 'button'
        });
        var fa = $('<i />').addClass('fa fa-list');
        btn.append(fa);
        $(this).append(btn);
      });


        $('#location tbody tr td').click(function (e) {
          var tr = $(this).closest('tr');
          var row = oTable.row(tr);

          if (row.child.isShown()) {
              row.child.hide();
              tr.removeClass('shown');
          }
          else {
              row.child(child_table(row.data())).show();
              tr.addClass('shown');
          }
        });
      };

      var oTable=  $('#location'). DataTable({
            drawCallback: dt_after_draw,
            dom: 'Bfrtip',
            columnDefs: [
              {
                targets: [8, 9 , 10,11,12,13,14],
                visible: false
              }
            ],
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
               url: '<?php echo base_url()?>/Location/fetch_location',
             type : 'POST',
         },

      });
  });

</script>

