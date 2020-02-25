

    <?php

    if(!$_GET['text']){
    	header("Location:generator.php");
    	die();
    }
    	require_once('vendor/vendor/picqer/php-barcode-generator/src/BarcodeGeneratorHTML.php');


    	$generator = new \Picqer\Barcode\BarcodeGeneratorPNG();
    	echo '<img src="data:image/png;base64,' . base64_encode($generator->getBarcode($_GET['text'], $generator::TYPE_EAN_13)) . '"><br/>';


  // echo ($_GET['text']);

  // $generator = new Picqer\Barcode\BarcodeGeneratorHTML();
     //  echo $generator->getBarcode($_GET['text'], $generator::TYPE_CODE_128);

    	// echo '<img src="data:image/png;base64,' . base64_encode($generator->getBarcode($_GET['text'], $generator::TYPE_CODE_128)) . '">';
    ?>


