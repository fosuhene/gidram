
  <?php
    /* Mengambil query report*/
    foreach($echartpie as $echartpie){
        // for ($i=0; $i < count($report); $i++) {
            # code...
        $tname[] =  $echartpie->tax_name; //TIN number
        $tfactor[] = (float)  $echartpie->tax_factor; //product Unit price
        }
    // }
    /* end mengambil query*/

  ?>

<!-- Script untuk memanggil library Highcharts -->
<script type="text/javascript">
/*
 $(function () {
  Highcharts.chart('hchartArea', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Historic and Estimated Worldwide Population Growth by Region'
    },
    subtitle: {
        text: 'Source: Wikipedia.org'
    },
    xAxis: {
        categories: <?php echo json_encode($tname);?>,
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: 'Billions'
        },
        labels: {
            formatter: function () {
                return this.value / 1000;
            }
        }
    },
    tooltip: {
        split: true,
        valueSuffix: ' millions'
    },
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
	series: [{
                name: 'Unit Sales',
                data: <?php echo json_encode($factor);?>,
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
			/*
    series: [{
        name: 'Asia',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
        name: 'Africa',
        data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
        name: 'Europe',
        data: [163, 203, 276, 408, 547, 729, 628]
    }, {
        name: 'America',
        data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
        name: 'Oceania',
        data: [2, 2, 2, 6, 13, 30, 46]
    }]
}); 

});
*/


   $(function () {
        Highcharts.chart('echartpie', {
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
                categories:  <?php echo json_encode($tname);?>
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
                data: <?php echo json_encode($factor);?>,
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

 