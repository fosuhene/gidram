<!-- ============================= Fetch Church Service===================================== -->


<script>
   $(document).ready(function(){

      var child_table = function child_table (data) {
        var
          tpl = $('#service_template').clone(),
          row_tpl = tpl.find('tr.row_tpl').hide();

        var
          qtys = data[3].split(','),
          incomes = data[4].split(','),
          cost_areass = data[5].split(',');
          expenditures = data[6].split(',');


        for (var i=0; i<qtys.length; i++) {
          var tr = row_tpl.clone();
          tr.find('[data-key=qty]').text(qtys[i]);
          tr.find('[data-key=income]').text(incomes[i]);
          tr.find('[data-key=cost_areas]').text(cost_areass[i]);
          tr.find('[data-key=expenditure]').text(expenditures[i]);
          tpl.append(tr.show());
        }
        return tpl.show();
      };

      var dt_after_draw = function dt_after_draw () {
        $('#churchexpenses_data tbody tr td:first-child()').each(function () {
        var btn = $('<button />').attr({
        type: 'button'
        });
        var fa = $('<i />').addClass('fa fa-list');
        btn.append(fa);
        $(this).append(btn);
      });


        $('#churchexpenses_data tbody tr td').click(function (e) {
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

      var oTable=  $('#churchexpenses_data'). DataTable({
            drawCallback: dt_after_draw,
            dom: 'Bfrtip',
            columnDefs: [
              {
                targets: [3, 4, 5 , 6],
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
               url: '<?php echo base_url()?>/Finance/fetch_churchexpenses',
             type : 'POST',
         },

      });
  });

</script>

