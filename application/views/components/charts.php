
 <!-- .......................====Fetch Purcases for all year==== .......................-->
  <?php
    foreach($reports as $result){
        // for ($i=0; $i < count($report); $i++) {
            # code...
        $year[] =  $result->year; //ambil bulan
        $pledge[] = (float)  $result->pledge_amt;
        $offering[] = (float)  $result->offering;//ambil nilai
        $tithe[] = (float)  $result->tithe;//ambil nilai
        }
    // }

  ?>

<script type="text/javascript">

Highcharts.chart('infocharts', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'All Church Contributions'
    },
    xAxis: {
        categories: <?php echo json_encode($year);?>
    },
    yAxis: {
        min: 0,
        title: {
            text: 'All Church Contributions'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Tithe',
        data:<?php echo json_encode($tithe);?>
    }, {
        name: 'Pledge',
        data:<?php echo json_encode($pledge);?>
    }, {
        name: 'Offering',
        data: <?php echo json_encode($offering);?>
    }]
});
</script>



<!-- ####################Pie Chart ##################################### -->


    <?php
        foreach($chart as $result)
        {
        $group_no =  $result->group_no;//ambil nilai
        $visitors = $result->visitors;//ambil nilai
        $sunday_school =  $result->sunday_school;//ambil nilai
        $newconvents= $result->newconvents;//ambil nilai
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
                    text: 'Church  Administration'
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
                    name: 'Church Administration',
                    data: [
                        ['Total Church Group No', <?php echo ($group_no);?>],
                        ['Total Users', <?php echo ($visitors);?>],
                        ['Total Visitors', <?php echo ($sunday_school);?>],
                        ['Total Church Newconverts', <?php echo ($newconvents);?>],
                    ]
                }]
            });
        </script>







