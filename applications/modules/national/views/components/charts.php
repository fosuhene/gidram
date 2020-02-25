<!-- .......................====Fetch Purcases for all year==== .......................-->
  <?php
    /* Mengambil query report*/
    foreach($reports as $result){
        // for ($i=0; $i < count($report); $i++) {
            # code...
        $tax_name[] =  $result->tax_name; //ambil bulan
        $tax_grade[] = (float)  $result->tax_grade;
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
                text: ' ',
                style: {
                        fontSize: '18px',
                        fontFamily: 'Verdana, sans-serif'
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
                categories:  <?php echo json_encode($tax_name);?>
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
                name: 'Values',
                data: <?php echo json_encode($tax_grade);?>,
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
        foreach($location as $result)
        {
        $locations =  $result->location;//ambil nilai
        $facility = $result->facility;//ambil nilai
        $tax_company =  $result->tax_company;//ambil nilai
        }

        ?>


        <script>
            Highcharts.chart('chartinfo', {
                chart: {
                    type: 'pie',
                    options3d: {
                        enabled: false,
                        alpha: 80
                    }
                },
                title: {
                    text: 'Chart Values'
                },
                subtitle: {
                    text: '3D Pie Chart'
                },
                plotOptions: {
                    pie: {
                        innerSize: 10,
                        depth: 95,
                        allowPointSelect: true,
                        cursor: 'pointer',
                        showInLegend: true,
                        size:'100%'
                    }
                },
                series: [{
                    name: 'Chart Values',
                    data: [
                        ['GRE Offices No', <?php echo ($locations);?>],
                        ['Total Facilities', <?php echo ($facility);?>],
                        ['Total Tax Companies', <?php echo ($tax_company);?>],
                        // ['Total Church Newconverts', <?php //echo ($newconvents);?>],
                    ]
                }]
            });
        </script>


    <script type="text/javascript">
Highcharts.chart('venndiagram', {
    series: [{
        type: 'venn',
        name: 'Level',
        data: [{
            sets: ['GRE offices'],
            value:2
        }, {
            sets: ['Facilities'],
            value: 2
        }, {
            sets: ['Tax companies'],
            value: 2
        }, {
            sets: ['GRE offices', 'Facilities'],
            value: 1,
            name: ' GRE connected to facilities '
        }, {
            sets: ['GRE offices', 'Tax companies'],
            value: 1,
            name: 'tax connected to facilities'
        }, {
            sets: ['Tax companies', 'Facilities'],
            value: 1,
            name: ''
        }, {
            sets: ['GRE offices', 'Tax companies', 'Facilities'],
            value: 1,
            name: 'Tax'
        }]
    }],
    title: {
        text: ''
    }
});

        </script>


<!-- ####################Pie Chart ##################################### -->


    <?php
        foreach($orglevel as $result)
        {
        $national =  $result->national;
        $regional = $result->regional;
        $district =  $result->district;
        $community =  $result->community;
        $facility =  $result->facility;
        $location =  $result->location;
        }

        ?>


<script type="text/javascript">

Highcharts.chart('levels', {
    series: [{
        type: "treemap",
        layoutAlgorithm: 'stripes',
        alternateStartingDirection: true,
        levels: [{
            level: 1,
            layoutAlgorithm: 'sliceAndDice',
            dataLabels: {
                enabled: true,
                align: 'left',
                verticalAlign: 'top',
                style: {
                    fontSize: '15px',
                    fontWeight: 'bold'
                }
            }
        }],
        data: [{
            id: 'A',
            name: 'GRE Office - National(<?php echo ($national);?>)',
            color: "#1ABB9C"
        }, {
            id: 'B',
            name: 'Regionals',
            color: "#ECE100"
        }, {
            id: 'C',
            name: 'Districts',
            color: '#EC9800'
        }, {
            id: 'D',
            name: 'Communities',
            color: '#000'
        }, {
            id: 'E',
            name: 'Facilities',
            color: '#ffc107'
        }, {
            name: 'Locations (<?php echo ($location);?>)',
            parent: 'A',
            value: 30
        }, {
            name: 'Regional  (<?php echo ($regional);?>)',
            parent: 'B',
            value:  18
        }, {
            name: 'District (<?php echo ($district);?>)',
            parent: 'C',
            value: 15
        }, {
             name: 'Community (<?php echo ($community);?>)',
            parent: 'D',
            value: 10
        }, {
            name: 'Facility (<?php echo ($facility);?>)',
            parent: 'E',
            value: 5

        }]
    }],
    title: {
        text: 'Organization Units'
    }
});
        </script>



   <!--      #############Line Graph########################################### -->

  <?php
    /* Mengambil query report*/
    foreach($transaction as $result){
        // for ($i=0; $i < count($report); $i++) {
            # code...
        $FacilityName[] =  $result->FacilityName; //ambil bulan
        $total_r[] = (float)  $result->TL_Total; //ambil nilai
        }
    // }
    /* end mengambil query*/

  ?>

<!-- Script untuk memanggil library Highcharts -->
<script type="text/javascript">
    $(function () {
        Highcharts.chart('transact', {
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
                categories:  <?php echo json_encode($FacilityName);?>
            },
            exporting: {
                enabled: true
            },
            yAxis: {
                title: {
                    text: 'Total Transaction'
                },
            },
            tooltip: {
                 formatter: function() {
                     return 'The value for <b>' + this.x + '</b> is <b>' + Highcharts.numberFormat(this.y,0) + '</b>, in '+ this.series.name;
                 }
              },
            series: [{
                name: 'Facility Name',
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
<!--
#################Graph############################################################################### -->

<!-- Script untuk memanggil library Highcharts -->
<script type="text/javascript">
    $(function () {
        Highcharts.chart('container', {
            chart: {
                type: 'area',
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
              showInLegend: {
                legend: true,
                style: {
                        fontSize: '18px',
                        fontFamily: 'Verdana, sans-serif'
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
                categories:  <?php echo json_encode($FacilityName);?>
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
                name: 'Facility Name',
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












