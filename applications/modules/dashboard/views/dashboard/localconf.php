<?php

header('Content-Type: application/json');

define('DBhost', 'localhost');
define('DBuser', 'root');
define('DBpass', '');
define('DBname', 'gidram');


$mysqli = new mysqli(DBhost, DBuser, DBpass, DBname);
	
	if(!$mysqli){
		die("Broken connection: " .$mysqli->error);
	}

	$query = sprintf("SELECT id, entry_date, quantity, unit_price FROM local_sales_invoice_line order by id");

	$result = $mysqli->query($query);
	
	$data = array();
	foreach($result as $row){
		$data[] = $row;
	}
	
	$result->close();
	$mysqli->close();
	
	print json_encode($data);
?>