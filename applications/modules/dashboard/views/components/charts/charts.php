
  <?php
    /* Mengambil query report*/
    foreach($report as $result){
        // for ($i=0; $i < count($report); $i++) {
            # code...
        $month[] =  $result->id; //TIN number
        $total_r[] = (float)  $result->unit_price; //product Unit price
        }
    // }
    /* end mengambil query*/

  ?>

<!-- Script untuk memanggil library Highcharts -->
<script type="text/javascript">
    $(function () {
        Highcharts.chart('report', {
            chart: {
                type: 'line',
                margin: 75,
                options3d: {
                    enabled: false,
                    alpha: 10,
                    beta: 25,
                    depth: 70
                }
            },
            title: {
                text: ' ',
                style: {
                        fontSize: '18px',
                        fontFamily: 'Verdana, sans-serif'
                }
            },
            subtitle: {
               // text: 'Penjualan',
                text: '',
               style: {
                        fontSize: '15px',
                        fontFamily: 'Verdana, sans-serif'
                }
            },
            plotOptions: {
                column: {
                    depth: 25
                }
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories:  <?php echo json_encode($month);?>
            },
            exporting: {
                enabled: true
            },
            yAxis: {
                title: {
                    text: 'Total Number'
                },
            },
            tooltip: {
                 formatter: function() {
                     return 'The value for <b>' + this.x + '</b> is <b>' + Highcharts.numberFormat(this.y,0) + '</b>, in '+ this.series.name;
                 }
              },
            series: [{
                name: 'Unit Sales',
                data: <?php echo json_encode($total_r);?>,
                shadow : true,
                dataLabels: {
                    enabled: true,
                    color: '#045396',
                    align: 'center',
                    formatter: function() {
                         return Highcharts.numberFormat(this.y, 0);
                    }, // one decimal
                    y: 0, // 10 pixels down from the top
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            }]
        });
    });
  </script>

 