
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <meta name="author" content="Dashboard">
  <meta name="keyword" content="Point of Sales">
  <title>St. James Mini Mart </title>
  <link href="bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="jquery/jquery.min.js"></script>
</head>

  <body>

        <div class="row mt">
          <!--  DATE PICKERS -->
          <div class="col-lg-12">
            <div class="form-panel">
               <div class="form-horizontal style-form" id="info">
                <form action="index.php" method="get">
                <div class="form-group" >
                  <label class="control-label col-md-3">Product Category</label>
                  <div class="col-md-3 col-xs-11">
                    <input class="form-control form-control-inline input-medium default-date-picker" size="16" type="text" name="text" id="text"  placeholder="">
                  </div>
                </div>


                <div class="form-group">
                  <input class="contact100-form-btn" type="submit" name="submit" id="submit"  style="margin-left:26%;width:200px" value="Submit"/>
                </div>

               </form>
               <button class="btn btn-primary" id="generate" style="width: 200px;height: 20px">Generate </button>
              </div>
            </div>
            <!-- /form-panel -->
          </div>
          <!-- /col-lg-12 -->
        </div>


<script>
 $(document).ready(function(){
  //alert("yes");
   var i=1;
   $('#generate').click(function(e){
     e.preventDefault();
    e.stopPropagation();
     i++;

       $('#info').append('<div   id="row'+i+'" class=" <table  class="table table-bordered" id="dynamic_field"><tr><td> <input class="form-control form-control-inline input-medium default-date-picker" size="16" type="text" name="e_name" id="e_name"  placeholder="Expenses"></td><td> <input type="text"  name="values" id="values"  placeholder="Value" size="16" class="form-control"></td><td><button class="btn btn-danger remove" name="remove"  type="button" id="'+i+'" >X</button></td></tr></table>')
   });
   $(document).on('click','.remove',function(e){
      e.preventDefault();
      e.stopPropagation();
    var button_id = $(this).attr('id');
    $('#row'+button_id+'').remove();
    // $('.btn_remove').hide();
   });

});

</script>

      </body>
      </html>