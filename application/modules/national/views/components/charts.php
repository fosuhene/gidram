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
                    enabled: true,
                    alpha: 18,
                    beta: 3,
                    depth: 76
                }
            },
            title: {
                text: ' ',
                style: {
                        fontSize: '14px',
                        fontFamily: 'sans-serif, Verdana'
                }
            },
            subtitle: {
               text: ' ',
               style: {
                        fontSize: '12px',
                        fontFamily: 'sans-serif, Verdana'
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
                    color: '#FFDD00',
                    align: 'center',
                    formatter: function() {
                         return Highcharts.numberFormat(this.y, 0);
                    }, // one decimal
                    y: 0, // 10 pixels down from the top
                    style: {
                        fontSize: '12px',
                        fontFamily: 'sans-serif, Verdana'
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
                        ['GRA Offices No', <?php echo ($locations);?>],
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
            sets: ['GRA offices'],
            value:2
        }, {
            sets: ['Facilities'],
            value: 2
        }, {
            sets: ['Tax companies'],
            value: 2
        }, {
            sets: ['GRA offices', 'Facilities'],
            value: 1,
            name: ' GRA connected to facilities '
        }, {
            sets: ['GRA offices', 'Tax companies'],
            value: 1,
            name: 'tax connected to facilities'
        }, {
            sets: ['Tax companies', 'Facilities'],
            value: 1,
            name: ''
        }, {
            sets: ['GRA offices', 'Tax companies', 'Facilities'],
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
            name: 'GRA Office - National(<?php echo ($national);?>)',
            color: "#12034C"
        }, {
            id: 'B',
            name: 'Regionals',
            color: "#1a0377"
        }, {
            id: 'C',
            name: 'Districts',
            color: '#435d7d'
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
                    color: '#435d7d',
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



       <!--  ###############################Map######################################## -->

    <script>
        // Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['gh-ah', 0],
    ['gh-ep', 1],
    ['gh-wp', 2],
    ['gh-aa', 3],
    ['gh-tv', 4],
    ['gh-np', 5],
    ['gh-ue', 6],
    ['gh-uw', 7],
    ['gh-ba', 8],
    ['gh-cp', 9]
];

// Create the chart
Highcharts.mapChart('ghanamap', {
    chart: {
        map: 'countries/gh/gh-all'
    },

    title: {
        text: 'GRA Locations'
    },

    subtitle: {
        text: 'Source map: <a href="<?php echo base_url(); ?>/assets/highcharts/gh_all.js">Ghana</a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: data,
        name: 'Random data',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});
</script>












