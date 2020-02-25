<!DOCTYPE html>

<html>

<head>

  <title>PHP Codeigniter 3 - Create Dynamic Treeview Example - ItSolutionStuff.com</title>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-treeview/1.2.0/bootstrap-treeview.min.css" />

  <script type="text/javascript" charset="utf8" src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.9.1.min.js"></script>

  <script type="text/javascript" charset="utf8" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-treeview/1.2.0/bootstrap-treeview.min.js"></script>

</head>

<body>



<div class="container">

  <div class="panel panel-default">

    <div class="panel-heading">

      <h1> Sub Branch Report</h1>

    </div>

    <div class="panel-body">

      <div class="col-md-8" id="treeview_json">

      </div>

    </div>

  </div>

</div>



<script type="text/javascript">

$(document).ready(function(){

   var treeData;
   $.ajax({

        type: "GET",

        url: "<?php echo base_url()?>/Dashboard/getItem",

        dataType: "json",

        success: function(response)

        {
         alert('yes');
           initTree(response)
            $('#treeview_json').treeview({data: treeData});
        }

  });



  function initTree(treeData) {

      $('#treeview_json').treeview({data: treeData});
     // $('#treeview_json').append('<div  class="form-group" style=""><label class="col-sm-2 col-sm-2 control-label">  </label><div class="col-sm-10"><textarea type="text"  name="total" id="row" class="form-control"  cols="30" rows="1" readonly></textarea></div></div><br /><button class="btn btn-danger btn_remove" name="remove"  id="''" style="margin-left: 10%;">X</button>')';

  }



});

</script>


</body>

</html>