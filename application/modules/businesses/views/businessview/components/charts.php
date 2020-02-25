<!-- .......................====Fetch Purcases for all year==== .......................-->
  <?php
    /* Mengambil query report*/
    foreach($barchart as $result){
        // for ($i=0; $i < count($report); $i++) {
            # code...
        $TL_Entry[] =  $result->TL_Entry; //ambil bulan
        $TL_Total[] = (float)  $result->TL_Total;
        }
    // }
    /* end mengambil query*/
  ?>

<!-- Script untuk memanggil library Highcharts -->
<script type="text/javascript">
    $(function () {
        Highcharts.chart('infochart', {
            chart: {
                type: 'bar',
                margin: 75,
                options3d: {
                    enabled: false,
                    alpha: 10,
                    beta: 25,
                    depth: 70
                }
            },
            title: {
                text: ' <?php echo $business['FacilityName']?>  Transaction Total Entered on a Particular Day and Time',
                style: {
                        fontSize: '12px',
                        fontFamily: 'Verdana, sans-serif',
                        transform :'uppercase'
                }
            },
            subtitle: {
               text: ' ',
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
                categories:  <?php echo json_encode($TL_Entry);?>
            },
            exporting: {
                enabled: true
            },
            yAxis: {
                title: {
                    text: ' '
                },
            },
            tooltip: {
                 formatter: function() {
                     return 'The value for <b>' + this.x + '</b> is <b>' + Highcharts.numberFormat(this.y,0) + '</b>, in '+ this.series.name;
                 }
              },
            series: [{
                name: 'Total Transaction(s)',
                data: <?php echo json_encode($TL_Total);?>,
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




<!-- ####################Pie Chart ##################################### -->


    <?php
        foreach($barchart as $result)
        {
        $TLQuantity =  $result->TLQuantity;//ambil nilai
        $TLUPrice = $result->TLUPrice;//ambil nilai
        $TL_Total =  $result->TL_Total;//ambil nilai
        $Factor =   $result->TL_Total * $result->TaxComponentFactor/100;//ambil nilai
        }

        ?>



    <script type="text/javascript">
        Highcharts.chart('pieinfo', {
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 45
                }
            },
            title: {
                text: 'Business Tax Component and Trasaction Lines'
            },
            subtitle: {
                text: ' '
            },
            plotOptions: {
                pie: {
                    innerSize: 100,
                    depth: 45
                }
            },
            series: [{
                name: '',
                data: [
                    ['Trasaction Lines Total Amount', <?php echo ($TL_Total);?>],
                    ['Tax Component', <?php echo ($Factor);?>],
                ]
            }]
        });
        </script>
















