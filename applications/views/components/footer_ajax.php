<script type="text/javascript">
  var date = new Date();

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  var today = year + "-" + month + "-" + day;

  document.getElementById('date').value = today;


  // Webcam module
  Webcam.set({
      width: 266,
      height: 162,
      image_format: 'jpeg',
      jpeg_quality: 90
  });
  Webcam.attach('#my_camera');


  function take_snapshot () {
      Webcam.snap(function (data_uri) {
          $(".image-tag").val(data_uri);
          document.getElementById('results').innerHTML = '<img src="'+data_uri+'"/>';
      } );
  }



  $(document).ready(function() {
    var unique_id = $.gritter.add({
      // (string | mandatory) the heading of the notification
      title: 'Welcome to St. James Point of Sale Dashboard',
      // (string | mandatory) the text inside the notification
      text: ' This application assist the Mini Mat to operate successfully.',
      // (string | optional) the image to display on the left
      image: '<?php echo base_url(); ?>/assets/img/clogo1.png',
      // (bool | optional) if you want it to fade out on its own or just sit there
      sticky: false,
      // (int | optional) the time you want it to be alive for before fading out
      time: 4000,
      // (string | optional) the class name you want to apply to that specific message
      class_name: 'my-sticky-class'
    });

    return false;
  });



  function myNavFunction(id) {
    $("#date-popover").hide();
    var nav = $("#" + id).data("navigation");
    var to = $("#" + id).data("to");
    console.log('nav ' + nav + ' to: ' + to.month + '/' + to.year);
  }



  var loadFile = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('output');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };
</script>


<script type="application/javascript">
  $(document).ready(function() {
    $("#date-popover").popover({
      html: true,
      trigger: "manual"
    });
    $("#date-popover").hide();
    $("#date-popover").click(function(e) {
      $(this).hide();
    });

    $("#my-calendar").zabuto_calendar({
      action: function() {
        return myDateFunction(this.id, false);
      },
      action_nav: function() {
        return myNavFunction(this.id);
      },
      ajax: {
        url: "show_data.php?action=1",
        modal: true
      },
      legend: [{
          type: "text",
          label: "Special event",
          badge: "00"
        },
        {
          type: "block",
          label: "Regular event",
        }
      ]
    });
  });

  function myNavFunction(id) {
    $("#date-popover").hide();
    var nav = $("#" + id).data("navigation");
    var to = $("#" + id).data("to");
    console.log('nav ' + nav + ' to: ' + to.month + '/' + to.year);
  }
</script>


<script>
    $(document).ready(function(){
      $('#category').change(function(){
        var id = $(this).val();

         $.ajax({
            type : 'ajax',
             method : 'POST',
             url: '<?php echo base_url()?>/Dashboard/fetch_category',
             data:{id:id},
             //async:false,
             // dataType: 'json',
             success: function(data){
             //alert("test") ;
               $('#showdata').html(data);
             },
             error:function(){
                alert("could not get data from Database");
             }

          });
      })

   });


</script>

<!-- Format number to spaces -->


<!-- Select Product Name -->
<!-- <script>
 $(document).ready(function(){
    $('#product_names').change(function(){
    event.preventDefault();
    var meals = $(this).val();
     var selectedmeals = meals.join(", "); // there is a break after comm
     info = $('#city').val(selectedmeals);
      // var meals = $(this).find('option:selected').val();

       var yes=  $(this).find('option:selected').text() + ',';
         $('#name').each(function() {
            yes += String($(this).text());
            });

     infocom = $('#name').html(yes);


     var selling=  $(this).find('option:selected').val() + ',';
   $('#sell').each(function() {
      selling += $(this).val();
      });

      $('#sell').html(selling);

  alert ("Selling Price:" + selling); // just for testing what will be printed
  });

});

</script> -->





<script>
 $(document).ready(function(){
    $('#hamper_id').change(function(){
    event.preventDefault();
    var hamper = $(this).val();
    // var selectedmeals = meals.join(", "); // there is a break after comm
    $('#price').val(hamper);
    //alert ("Selling Price:" + hamper); // just for testing what will be printed
  });

});

</script>




<script>
 $(document).ready(function() {

  var add_product = function add_product (sel) {
    var
      container = $('#item_selectors'),
      hidden = $('#name'),
      data = hidden.data() || {},
      option = $(sel).find('option:selected'),
      text = option.data('name'),
      picked = data.picked || {},
      items = [];

    add_sub_total_block(option);

    var set_active_product = function set_active_product (tag) {
      container.find('dd').removeClass('active');
      tag = $(tag), name = tag.data('name');
      tag.addClass('active');
      var qty = $('#selected_products dl dd[data-id="'+tag.data('id')+'"]').data('quantity') || 1;
      $('#amount').val(qty);
    };

    var delete_product = function delete_product (tag) {
      var txt = $(tag).data('name');

      if (el.length) {

        for (var i in picked) {
          if (i == txt) {
            delete(picked[i]);
          }
        }

        el.remove();
        remove_sub_total_block(tag);
      }
    };

    var el = container.find('dd[data-id="'+option.data('id')+'"]');
    if (!el.length) {
      picked[text] = option.val();

      el = $('<dd />').attr('data-id', option.data('id')).data({
        'name': text,
        'price': option.val(),
        'quantity': 1
      }).text(text);

      var sup = $('<sup />');
      var a = $('<a />').attr({
        'data-id': option.data('id'),
        'data-name': text,
        // 'data-price': option.val()
      }).html('&times;');

      el.click(function (e) {
        e.preventDefault();
        set_active_product(this);
      });

      a.click(function (e) {
        e.preventDefault();
        delete_product(this);
      });

      sup.append(a);
      el.append(sup);

      container.append(el);
      set_active_product(el);
    }
  };

  var calculate_sub_total = function calculate_sub_total () {
    var el = $('#item_selectors dd.active');
    if (0 == el.length) el = $('#item_selectors dd:last-child');

    var
      id = el.data('id'),
      price = parseFloat(el.data('price')),
      quantity = parseInt($('#amount').val()) || 1,
      sub_total = (price * quantity),
      name = el.data('name');

    sub_total = isNaN(sub_total) ? 0 : sub_total;

    var dd = $('#selected_products dl dd[data-id="'+id+'"]').data({
      id: id,
      price: price,
      quantity: quantity
    });

    dd.find('.subtotal_quantity').text(quantity);
    dd.find('.subtotal_total').text(sub_total);

    var grand_total = 0;
    $('#selected_products dl dd.product_row').each(function () {
      var q = $(this).data('quantity'), p = $(this).data('price'), v = (q * p);

      if (isNaN(v)) v = 0;
      grand_total += v;
    });

    $('#received_total').text(grand_total).formatCurrency({symbol: '', roundToDecimalPlace: 2});
  };


  var add_sub_total_block = function add_sub_total_block (option) {
    var
      id = option.data('id'),
      name = option.data('name'),
      price = option.val();

    var
      selected_products = $('#selected_products'),
      header = selected_products.find('dl dt'),
      tpl = selected_products.find('dl dd.row_template');

    var row = selected_products.find('dl dd[data-id="'+id+'"]');

    if (row.length) return;

    row = tpl.clone();
    row.attr('data-id', id).removeClass('hidden row_template').addClass('product_row');

    row.find('.subtotal_quantity').text(1);
    row.find('.subtotal_price').text(price);
    row.find('.subtotal_total').text(price);
    row.find('.subtotal_name').text(name);

    var btn_remove = row.find('.remove a').attr('data-id', id);

    selected_products.find('dl').append(row);

    if (0 < selected_products.find('dl dd').length) {
      header.removeClass('hidden');
    }
    else {
      header.addClass('hidden');
    }

    btn_remove.click(function (e) {
      e.preventDefault();
      remove_sub_total_block(this);
    });
  };

  var remove_sub_total_block = function remove_sub_total_block (el) {
    var id = $(el).data('id');
    $('#selected_products dl dd[data-id="'+id+'"]').remove();
    $('#item_selectors').find('dd[data-id="'+id+'"] a').trigger('click');
    $('#amount, #cash').trigger('keyup');
  };

  var check_product_quantity = function check_product_quantity () {
    var product_selector = $('#product_names')[0];
    var option = product_selector[product_selector.options.selectedIndex];
    var max_quantity = $(option).data('quantity');
    if ($('#amount').val() > max_quantity) {
      $('#amount').val(max_quantity);
    }
  };

  $('#amount').keyup(function (e) {
    check_product_quantity();
    calculate_sub_total();
  })
  .change(function (e) {
    check_product_quantity();
    calculate_sub_total();
  });

  $('#product_names').change( function (e) {
    add_product(this);
    $('#amount, #cash').trigger('keyup');
  });

});

var init_barcode_scan = function init_barcode_scan () {
  // 1. Highlight display region
  $('#code_display').text('Ready to capture').addClass('ready');

  // 2. Set focus on #code
  $('#code, #product_names').val('').focus();

  // 3. Scroll to top
  $('html, body').animate({scrollTop: 0}, 'slow');
};

init_barcode_scan();
$('#code, #product_names').change(function () {
  var code = $(this).val();
  $('#code_display').text(code).removeClass('ready');
}).focus();

/*$(document).focusout(function (e) {
  console.log(e.target);
});*/

$(document).keyup(function (e) {
  if (81 == e.keyCode && e.ctrlKey) {
    init_barcode_scan();
  }
});

$('#cash').keyup(function () {
  var
    cash = parseFloat($(this).val()),
    total = parseFloat($('#received_total').text()),
    value = (cash - total);

  // value = (0 > value) ? 0 : value;
  value = isNaN(value) ? 0 : value;

  $('#change_total').text(value).formatCurrency({symbol: '', roundToDecimalPlace: 2});
  if (0 > value) {
    $('#change_extra').show('slow');
  }
  else {
    $('#change_extra').hide('slow');
  }
});

var collect_selected_products = function collect_selected_products () {
  var
    cash_received = parseFloat($('#cash').val()),
    name = $('#customer_name').val(),
    phone = $('#phone').val();

  var rows = $('#selected_products dl dd:gt(0)');
  var values = {};

  rows.each(function () {
    var row = $(this),
      product_id = row.data('id'),
      quantity = parseFloat(row.find('.subtotal_quantity').text());

    values[product_id] = quantity;
  });

  // console.log(cash_received, values);
  return {
    cash: cash_received,
    name: name,
    phone, phone,
    products: values
  };
};

var decimal = function decimal (num, precision) {
  return parseFloat(num).toFixed(precision);
};

$('#action').click(function (e) {
  e.preventDefault();
  var url = '<?php echo base_url()?>/Dashboard/post_sales';

  $.post(url, collect_selected_products(), function (data) {
    if (data) {
      var products = data.products;
      var tbody = $('.receipt table tbody');
      var tpl = tbody.find('.receipt_row');

      for (var i=0; i<products.length; i++) {
        var row = tpl.clone().show();
        var subtotal = parseInt(products[i].quantity) * parseFloat(products[i].price);

        row.find('[data-key=name]').text(products[i].name);
        row.find('[data-key=price]').text(decimal(products[i].price, 2));
        row.find('[data-key=quantity]').text(products[i].quantity);
        row.find('[data-key=subtotal]').text(decimal(subtotal, 2));

        tbody.append(row);
      }

      var tfoot = $('.receipt table tfoot');
      tfoot.find('[data-key=total]').text(decimal(data.total, 2));
      tfoot.find('[data-key=cash]').text(decimal(data.cash, 2));
      tfoot.find('[data-key=change]').text(decimal(data.balance, 2));

      var date = data.saledate.split(/\s/)[0];
      $('.receipt [data-key=date]').text(date);

      $('#myModal').modal({
        show: true,
        backdrop: 'static',
        keyboard: false
      })
      .find('[data-action=close]')
      .click(function (e) {
        e.preventDefault();
        $('#myModal').modal('hide');
        var url = '<?php echo base_url()?>/Dashboard/double_sale';
        window.location = url;
      });
    }
  }/*, function () {
    alert('Unable to post sale');
  }*/, 'json');
});

</script>









<!-- Get sub total values-->

<script>
 /*$(document).ready(function(){
   var i=1;
   $('#add').click(function(e){
     e.preventDefault();
    e.stopPropagation();
     i++;
     $('#tabadd').append('<div  class="form-group" style=""><label class="col-sm-2 col-sm-2 control-label">  </label><div class="col-sm-10"><textarea type="text"  name="total" id="row'+i+'" class="form-control"  cols="30" rows="1" readonly></textarea></div></div><br /><button class="btn btn-danger btn_remove" name="remove"  id="'+i+'" style="margin-left: 10%;">X</button>')
   });
   $(document).on('click','.btn_remove',function(e){
      e.preventDefault();
      e.stopPropagation();
    var button_id = $(this).attr('id');
    $('#row'+button_id+'').remove();
    // $('#received').val('');

   });
 });*/
</script>





<!-- <script>
 $(document).ready(function(){
   var i=1;
   $('#product_names').click(function(e){
     e.preventDefault();
     sel = $("#name").val();
     alert(sel);
   });

 });
</script> -->

<!-- Button Delete -->

<script>
 /*$(document).ready(function(){
   var i=1;
   //var value=0;
   $(document).on('click','.btn_remove',function(e){
      e.preventDefault();
      e.stopPropagation();
        i++;
          $('#row' + i +'').each(function() {
              value -= Number($(this).val());
               $(this).val('');

            });

       // $('#row' + i +'').val('');
       // $('#sub_total').val('');
       // $('#sub_hide').val('');

  // $('#received').val(value).formatCurrency({ symbol: '', roundToDecimalPlace: 2 });
  var num = $('#received').val(value);
  var comma = Math.pow(10, 2) * num;
  num = num.toFixed(2);

  console.log()
 // alert(value);
   });
});*/
</script>


<!-- .Prdoucts Add Barcode Focus to scan products................................................. -->

   <script type="text/javascript">
    $(document).ready(function() {
      $('#text').focus();
     });
  </script>


  <script type="text/javascript">
    $(document).ready(function() {
      $('#product_names').focus();
     });
  </script>


<!--   <script type="text/javascript">
    $(document).ready(function() {
      $('select[name="product_name"]').first().val(10);
     });
  </script> -->



<!-- Expenses table ..............................................................................................-->

<script>
 $(document).ready(function(){
   /*var i=1;
   $('#add_btn').click(function(e){
     e.preventDefault();
    e.stopPropagation();
     i++;

       $('#dynamic_field').append('<div id="row'+i+'" class=""><table class="table table-bordered" id="dynamic_field"><tr><td><input class="form-control form-control-inline " size="16" type="text" name="e_name[]" id="e_name"  placeholder="Expenses"/></td><td> <input type="text"  name="values[]" id="values" placeholder="Value" size="16" class="form-control"></td><td><button class="btn btn-danger remove" name="remove"  type="button" id="'+i+'" >X</button></td></tr></table></div>')
   });*/

   /*$(document).on('click','.remove',function(e){
      e.preventDefault();
      e.stopPropagation();
    var button_id = $(this).attr('id');
    $('#row'+button_id+'').remove();
    // $('.btn_remove').hide();
   });*/

});

</script>





<script>

    function getinfo(){
     $info = document.getElementById("showdata").value

      alert($info);
    }


  </script>


  <!-- Get Expense main  value  and  multiply to  display in sub_total -->


<script type="text/javascript">
    $(document).ready(function () {
        $(".form-group").keyup(function () {
          var value = $('#salary').val();
          var elect = $('#electricity').val();
          var transport = $('#transport').val();
          var cards = $('#cards').val();
          var station = $('#stationery').val();
          var other = $("#other").val();

            var result =  Number((value))+Number((elect))+ Number((transport))+ Number((cards))+ Number((station))+ Number((other));
           $('#totalmain').val(result);
           $('#totalhide').val(result).formatCurrency({ symbol: '', roundToDecimalPlace: 2 });


       //alert(other);

        });
    });
</script>

<!--............ ................................................................................ -->


<!-- Get Products main  value  and  multiply to  display in sub_total -->

<script type="text/javascript">
        $(document).ready(function () {
            $(".bal").keyup(function () {
                var value = $('#amount_received').val();
                var user = $('#purchases').val();
                var result =  parseInt(value) -  parseInt(user) ;
                  $("#balance").val(result);
                  $("#balance_total").val(result).formatCurrency({ symbol: '', roundToDecimalPlace: 2 });
            });
        });
</script>



<!-- ..............Get Products Purchase Summary........................ -->

<script type="text/javascript">
        $(document).ready(function () {
            $("#cost").keyup(function () {
                var value = $('#purchasing_price').val();
                var user = $('#quantity').val();
                var result =  parseInt(value) *  parseInt(user) ;
                 info = $("#stock").val(result);

            });



        // $('.dateselect').click(function (e) {
        //     e.preventDefault();

        //     $.getJSON('<?php //echo base_url()?>/Dashboard/get_purchase_item', function (data) {
        //        console.log(data);
        //       if (true == data) {
        //        alert('Unable to post sale');
        //       }
        //     }, function () {
        //       alert('Unable to post sale');
        //     }, 'json');
        //   });

        });
</script>

<!--............ ................................................................................ -->

<!-- Get Products main  value  and  multiply to  display in sub_total -->

<script type="text/javascript">
        $(document).ready(function () {
            $(".expense").keyup(function () {
                var value = $('#quantity').val();
                var user = $('#price').val();
                var result =  parseInt(value) *  parseInt(user) ;
                 $("#total").val(result);
                  $("#total_exp").val(result).formatCurrency({ symbol: '', roundToDecimalPlace: 2 });
            });
        });
</script>




<!--............ ................................................................................ -->


<!--Hidden field --- Get Products main  value  and  multiply to  display in sub_total -->

<script type="text/javascript">
        /*$(document).ready(function () {
            $("#cash").keyup(function () {
                var value = $(this).val();
                var user = $('#received').val();
                var result =  parseInt(value) - parseInt(user) ;
                 info = $("#change").val(result);
                 $("#change_total").val(result).formatCurrency({ symbol: '', roundToDecimalPlace: 2   });
            });
        });*/
</script>
<!-- Get Products main  value  and  multiply to  display in sub_total -->

<!-- <script type="text/javascript">
        $(document).ready(function () {
            $("#cash").keyup(function () {
                var value = $(this).val();
                var user = $('#received_total').val();
                var result =  parseInt(value) - parseInt(user) ;
                 info = $("#change_total").val(result).formatCurrency({ symbol: '', roundToDecimalPlace: 2   });
            });
        });
</script>
 -->



<!--............ ................................................................................ -->


<!-- Get Register  value  and  multiply to  display in sub_total -->

<script type="text/javascript">
        $(document).ready(function () {
            // $(".expire").keyup(function () {
                var value = $('#salesadd').val();
                var user = $('#balance').val();
                var result =  parseInt(value) +  parseInt(user) ;
                $("#totalsales").val(result).formatCurrency({ symbol: '', roundToDecimalPlace: 2  });
                $("#totalsale").val(result);
                 //alert(result);
            });
        // });
</script>

<!--............ ................................................................................ -->

<script type="text/javascript">
        /*$(document).ready(function () {
            $("#amount").keyup(function () {
                var value = $(this).val();
                var user = $('#showdata').val();

                var result =  parseInt(value) *  parseInt(user) ;
                 info = $("#sub").val(result);

                  $("#gross").val(result);


            });
        });*/
</script>
<!-- Get quantity -->

<script type="text/javascript">
        /*$(document).ready(function () {
            $("#amount").change(function () {
                var value = $(this).val();
              var quand=  value + ',';
             $('#quant').each(function() {
                quand +=  $(this).val();
                });

                $('#quant').val(quand);

                // alert(quand);

            // $('#amount').reset();


            });
        });*/
</script>


<!-- Get quantity value  and  multiply to  display in sub_total -->

<script type="text/javascript">
    /*$(document).ready(function () {
        $("#amount").change(function () {
           var value = $(this).val();
            var user = $('#city').val();
             // $('#city').each(function() {
             // });
            var result =  parseInt(value) *  parseInt(user) ;
             info = $("#sub_total").val(result);


            var sub =  parseInt(value) *  parseInt(user) + ',';
             $('#sub_hide').each(function() {
                sub +=  $(this).val();
                });

                $('#sub_hide').val(sub);

           //  alert(sub);
        });
    });*/
</script>


<!-- Get sub total values to be added to display in total field -->


<script type="text/javascript">
    $(document).ready(function () {
       var i=1;
        $("#add").click(function (e) {
          var value = $('#sub_total').val();
           i++;
            // var result =  parseInt(value) *  parseInt(user) ;
             info = $('#row' + i +'').html(value);

             $('#amount').val('');
        });
    });

</script>





<!--........ Calculate Total  for hidden field total.........-->

<script type="text/javascript">
  $(document).ready(function () {
        var i=1;
        var value=0;
        $("#add").click(function () {
          i++;
            $('#row' + i +'').each(function() {
              value += Number($(this).val());
            });

              info = $('#received').val(value);
           // alert('Total Value is =' + value);
        });


    // Calculate Total  for display formatted field total
    var i=1;
    var value=0;

    $("#add").click(function () {
      i++;

      $('#row' + i +'').each(function() {
        value += Number($(this).val());
      });

      info = $('#received_total').val(value).formatCurrency({ symbol: '', roundToDecimalPlace: 2 });
      // alert('Total Value is =' + value);

      var quantity = $('#quantity').val();
      var price = $('#price').val();
      var result =  parseFloat(quantity) *  parseFloat(price) ;

      $("#total").val(result);
      $("#total_exp").val(result).formatCurrency({ symbol: '', roundToDecimalPlace: 2 });

    });

    $('#hamper_id').change(function () {
      var option_id = $(this).val();
      var price = $(this).find('option[value='+option_id+']').data('price');
      $('#price').val(price);
    });

  });

</script>




<script>
  $(document).ready(function() {
    // Create two variables with names of months and days of the week in the array
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    // Create an object newDate()
    var newDate = new Date();
    // Retrieve the current date from the Date object
    newDate.setDate(newDate.getDate());
    // At the output of the day, date, month and year
    $('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

    setInterval( function() {
        // Create an object newDate () and extract the second of the current time
        var seconds = new Date().getSeconds();
        // Add a leading zero to the value of seconds
        $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
        },1000);

    setInterval( function() {
        // Create an object newDate () and extract the minutes of the current time
        var minutes = new Date().getMinutes();
        // Add a leading zero to the minutes
        $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
        },1000);

    setInterval( function() {
        // Create an object newDate () and extract the clock from the current time
        var hours = new Date().getHours();
        // Add a leading zero to the value of hours
        $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
        }, 1000);

    });



function printDiv ()
{
   var divToPrint = document.getElementById('DivIdToPrint');
  //var divToPrint = $('#DivIdToPrint');
  var newWin = window.open('', 'Print-Window');

  newWin.document.open();
  newWin.document.write('<html><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');
  newWin.document.close();

  setTimeout(function(){
    newWin.close();
  }, 10);
}



// $(document).ready(function(){
//   $('#product_names').multiselect({
//     nonSelectedText: "Select Product",
//     enableFiltering: true,
//     enableCaseInsensitiveFiltering: true,
//     buttonWidth: '450px',
//     maxHeight: '350'
//   });
// });



  $('#purchase_id').multiselect({
        nonSelectedText: "Select Product",
        enableFiltering: true,
        enableCaseInsensitiveFiltering: true,
        buttonWidth: '450px',
        maxHeight: '350'
  });


 $('#category, #supplier_id , #hamper_id').multiselect({
        nonSelectedText: "Select Product",
        enableFiltering: true,
        enableCaseInsensitiveFiltering: true,
        buttonWidth: '300px',
        maxHeight: '350'
  });




$('#category').selectstyle({
  width  : 150,
  height : 350,
  onchange : function(val){}
});



$('#supplier_id').selectstyle({
  width  : 150,
  height : 350,
  onchange : function(val){}
});



$(document).ready(function(){
    $('#searchinfo').keyup(function(){
        $('#result').html('');

        var searchField = $('#searchinfo').val();
        var expression  = new RegExp(searchField,"i");

        $.getJSON('<?php echo base_url()?>/Dashboard/fetch_jsondata',function(data){
            $.each(data,function(key,value){
                if(value.product_name.search(expression) !=-1 || value.id.search(expression) != -1)
                {
                    $('#result').append('<li class="list-group-item link-class"> ' + value.product_name + ' | <span class="text-muted">' + value.id +'</span></li>');
                }
            });
        })
    });


    $('#result').on('click','li',function(){
        var click_text = $(this).text().split('|');
        // alert(click_text);
        $('#searchinfo').val($.trim(click_text[0]));
        $('#result').html('');
    });
});


</script>








<!-- <script>

$(document).ready(function () {
$("#submit").on('click', function (e) {
  e.preventDefault();

  alert('test');
  $.ajax({
    url: '<?php //echo base_url()?>/Dashboard/push_data',
    data: {
      showdata: $("#showdata").val(),
      date: $("#date").val(),
      quantity: $("#quantity").val(),
      sub_total: $("#sub_total").val(),
      discount: $("#discount").val(),
       gross: $("#gross").val(),
      received: $("#received").val()
    },
    async: 'true',
    cache: 'false',
    type: 'post',
    success: function (data) {
      //jQuery("#attendence_report_holder").html(response);
      alert("Data successfully added");
    },
    error:function(data){
      alert("error happend");
    }
  });
});
});
</script> -->


<script type="text/javascript">
  $(document).ready(function () {

    var dnt = $('#main-container').dynamicTable('#dn-form', '#dn-table');
    dnt.init({
      post_callback: function (status) {
        if (true == status) {
          location.reload();
        }
      }
    });

    $('#dn-spend').dynamicTable().init({
      post_callback: function (status) {
        if (true == status) {
          location.reload();
        }
      }
    });


    var hmt = $('#hamper').dynamicTable('#hm-form', '#hm-table');
    hmt.init({
      post_callback: function (status) {
        console.log(status);
        if (true == status) {
          location.reload();
        }
      }
    });

  });
</script>