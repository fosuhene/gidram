
 <?php $this->load->view('components/header1'); ?>




  <script src="<?php echo base_url('assets/jquery/jquery-2.2.3.min.js')?>"></script>
  <script src="<?php echo base_url(); ?>/assets/highcharts/highcharts.js"></script>
  <script src="<?php echo base_url(); ?>/assets/highcharts/highcharts-3d.js"></script>
  <script src="<?php echo base_url(); ?>/assets/highcharts/modules/exporting.js"></script>
  <script src="<?php echo base_url(); ?>/assets/highcharts/modules/export-data.js"></script>

 <section id="main-content">
      <section class="wrapper">
        <h3><i class="fa fa-angle-right"></i> Charts  Report</h3>
        <div class="row mb">

		<div class="container">
		    <table class="table" cellspacing="0" style="width:100%!important" >
	         <tbody>
				<tr>
				  <td> <div id="report" style="height: 400px"></div></td>

				</tr>
	           <tr>
				  <td> <div id="infocharts" style="height: 400px"></div></td>
			   </tr>
			    <tr>
				  <td> <div id="info" style="height: 400px"></div></td>
			   </tr>
			</tbody>
		  </div>
	    </table>
	  </div>
	 </section>
	</section>


  <script src="<?php echo base_url('assets/jquery/jquery-2.2.3.min.js')?>"></script>
  <script src="<?php echo base_url(); ?>/assets/highcharts/highcharts.js"></script>
  <script src="<?php echo base_url(); ?>/assets/highcharts/highcharts-3d.js"></script>
  <script src="<?php echo base_url(); ?>/assets/highcharts/modules/exporting.js"></script>
  <script src="<?php echo base_url(); ?>/assets/highcharts/modules/export-data.js"></script>
<?php $this->load->view('components/charts'); ?>

 <?php $this->load->view('components/footer1'); ?>






<!-- <div id="container" style="height: 400px"></div> -->










