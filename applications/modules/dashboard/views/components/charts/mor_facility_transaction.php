<?php
						$char_data = '';
						 foreach($reports as $result){
								$char_data .= "{ name:'".$result->FacilityName."', quantity:'".$result->TLQuantity."',
									unitprice:'".$result->TLUPrice."', tl_total:'".$result->TL_Total."'}, ";
									
									//print_r($char_data);
							
							}
						$char_data = substr($char_data, 0, -2);
					  ?>  
					  <br/>
					  
					  <script>
						$(document).ready(function(){
						Morris.Bar({
							element :'moriFTrans',
							data :[<?php echo $char_data; ?>],
							xkey:'name',
							ykeys :['tl_total'],
							labels :['TL_Total'],
							barRation:0.2,
							barColor:['#00f94b'],
							xLabelAngle:30,
							hideHover :'auto',
							resize:true
						});
					  });
					  </script>
					  
					  
					   <script>
						$(document).ready(function(){
						Morris.Bar({
							element :'moriFTrans2',
							data :[<?php echo $char_data; ?>],
							xkey:'name',
							ykeys :['quantity','unitprice','tl_total'],
							labels :['Qty','UnitPrice','TL_Total'],
							barRation:0.2,
							barColors:['#29CBA9','#2A3F54'],
							xLabelAngle:60,
							hideHover :'auto',
							resize:true
						});
					  });
					  </script>
					  
					  