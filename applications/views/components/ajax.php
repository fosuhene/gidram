
  <script>
       $(document).ready(function(){

    //    alert("test");
        var oTable = $('#hidden-table-clients').DataTable({

            dom: 'Bfrtip',
              buttons: [
              { extend: 'copyHtml5'},
              { extend: 'excelHtml5' },
              { extend: 'pdfHtml5' },

            ],
             "serverside" : true,
             "processing" :true,
              "order" :[],
             "ajax" :{
              // ajax :'data.json',
             url: '<?php echo base_url()?>/Dashboard/fetch_data',
             type : 'POST'
          },
        });


      $(document).on('click', '.update', function(){
         var user_id = $(this).attr('id');
      // alert(user_id)

        $('#myModal').modal("show");
        $('#myModal').find('.modal-title'). text(' ');
        $('myForm').attr('action', '<?php echo base_url()?>Dashboard/clients_edit');

        $.ajax({
        type : 'ajax',
         method : 'POST',
         url: '<?php echo base_url()?>/dashboard/clients_edit',
         data:{user_id:user_id},
         async:false,
         dataType: 'json',
         success: function(data){
        // alert("test") ;
            // $('#id').val(data.id);
            $('#account_name').val(data.account_name);
            $('#manager').val(data.manager);
            $('#city').val(data.city);
            $('#address').val(data.address);
            $('#country').val(data.country);
            $('#login_date').val(data.login_date);
            $('#user_id').val(data.id);
            $('#save').val("Edit");
         },
         error:function(){
            alert("Please Refresh the page. Thank you.");
         }

      });

    });


    $(document).on('submit', '#myForm', function(event){

        event.preventDefault();
         // alert('yes');
        var user_id = $('#user_id').val();
        var account_name = $('#account_name').val();
        var manager= $('#manager').val();
        var address= $('#address').val();
        var city= $('#city').val();
        var country= $('#country').val();
        var login_date= $('#login_date').val();


         if(email != '' && phone != '') {

              $.ajax({

               url: '<?php echo base_url()?>/Dashboard/clients_update',
               method : 'POST',
               data: new FormData(this) ,
                //async: false,
                contentType:false,
                processData:false,
                success:function(data){

                var user= $('#user_id').val(data.user_id);
                 //console.log(JSON.stringify(user));
                 alert(data);
                 $('#myForm')[0].reset();
                 $('#myModal').modal('hide');
                 oTable.ajax.reload();

                }

            });

      }
      else{
        alert("Both  fields are required");
      }

    });


  $(document).on('click', '.delete', function(){
      var user_id = $(this).attr('id');
      //alert("test");
      $('#deleteModal').modal("show");
      $('#deleteModal').find('.modal-title'). text(' Delete Information');
        if(confirm("Are you sure you want to delete this?"))
        {
          $.ajax({

           url: '<?php echo base_url()?>/Dashboard/clients_delete',
           method : 'POST',
           data:{user_id:user_id},
           success: function(data){

             alert(data);
             oTable.ajax.reload();

           },
           error:function(){
              alert("could not get data from Database");
           }

      });
     }

    });


    });

</script>


<script>
    // tabbed content
      // http://www.entheosweb.com/tutorials/css/tabs.asp
      $(".tab_content").hide();
      $(".tab_content:first").show();

    /* if in tab mode */
      $("ul.tabs li").click(function() {

        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#"+activeTab).fadeIn();

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");

      $(".tab_drawer_heading").removeClass("d_active");
      $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

      });
    /* if in drawer mode */
    $(".tab_drawer_heading").click(function() {

        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#"+d_activeTab).fadeIn();

      $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");

      $("ul.tabs li").removeClass("active");
      $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
      });


    /* Extra class "tab_last"
       to add border to right side
       of last tab */
    $('ul.tabs li').last().addClass("tab_last");

</script>


<!-- ###############Fetch Device Info######################## -->

  <script>
       $(document).ready(function(){

    //    alert("test");
        var oTable = $('#hidden-table-device').DataTable({

            dom: 'Bfrtip',
              buttons: [
              { extend: 'copyHtml5'},
              { extend: 'excelHtml5' },
              { extend: 'pdfHtml5' },

            ],
             "serverside" : true,
             "processing" :true,
              "order" :[],
             "ajax" :{
              // ajax :'data.json',
             url: '<?php echo base_url()?>/Dashboard/device_data',
             type : 'POST'
          },
        });



         var oTable = $('#hidden-table-deviceinfo').DataTable({
            dom: 'Bfrtip',
              buttons: [
              { extend: 'copyHtml5'},
              { extend: 'excelHtml5' },
              { extend: 'pdfHtml5' },

            ],
             "serverside" : true,
             "processing" :true,
              "order" :[],
             "ajax" :{
              // ajax :'data.json',
             url: '<?php echo base_url()?>/Dashboard/deviceinfo_data',
             type : 'POST'
          },
        });


    });

</script>



<!-- ///////////====Fetch category CMS//////////////====================== -->
<script>
   $(document).ready(function(){
      var oTable=  $('#hidden_table_maincategory'). DataTable({
             "serverside" : true,
             "processing" :true,
              "order" :[],
             "ajax" :{
              // ajax :'data.json',
             url: '<?php echo base_url()?>/dashboard/fetch_maincategory',
             type : 'POST',
         },

      });

    var oTable1 =  $('#hidden_table_subcategory1'). DataTable({
             "serverside" : true,
             "processing" :true,
              "order" :[],
             "ajax" :{
              // ajax :'data.json',
             url: '<?php echo base_url()?>/dashboard/fetch_subcategory1',
             type : 'POST',
         },

      });


     var oTable2 =  $('#hidden_table_subcategory2'). DataTable({
             "serverside" : true,
             "processing" :true,
              "order" :[],
             "ajax" :{
              // ajax :'data.json',
             url: '<?php echo base_url()?>/dashboard/fetch_subcategory2',
             type : 'POST',
         },

      });


  /* =================Edit, update and Delete data (CRUD)======================= */


      $(document).on('click', '.update', function(){
      var user_id = $(this).attr('id');
      // alert(user_id);

        $('#myModal').modal("show");
        $('#myModal').find('.modal-title'). text(' ');
        $('myFormsettings').attr('action', '<?php echo base_url()?>dashboard/category_edit');
        $.ajax({
        type : 'ajax',
         method : 'POST',
         url: '<?php echo base_url()?>/dashboard/category_edit',
         data:{user_id:user_id},
         async:false,
         dataType: 'json',
         success: function(data){
         //alert("test") ;
            $('#name').val(data.name);
            $('#user_id').val(data.id);
            $('#save').val("Edit");
         },
         error:function(){
            alert("Please Refresh the page. Thank you.");
         }

      });

    });



    $(document).on('submit', '#myFormsettings', function(event){
        event.preventDefault();
        var user_id = $('#user_id').val();
        // alert(user_id);
        var name = $('#name').val();
       if(name) {
          $.ajax({
              url: '<?php echo base_url()?>/dashboard/category_update',
              method : 'POST',
              data: new FormData(this) ,
              //async: false,
              contentType:false,
              processData:false,
              success:function(data)
              {
                var user= $('#user_id').val(data.user_id);
                alert(data);
                $('#myFormsettings')[0].reset();
                $('#myModal').modal('hide');
                oTable.ajax.reload();
              }
          });
      }
      else{
        alert("Both  fields are required");
      }

    });


 $(document).on('click', '.delete', function(){
      var user_id = $(this).attr('id');
      //alert("test");
      $('#deleteModal').modal("show");
      $('#deleteModal').find('.modal-title'). text(' Delete Information');
        if(confirm("Are you sure you want to delete this?"))
        {
          $.ajax({

           url: '<?php echo base_url()?>/dashboard/category_delete',
           method : 'POST',
           data:{user_id:user_id},
           success: function(data){

             alert(data);
             oTable.ajax.reload();

           },
           error:function(){
              alert("could not get data from Database");
           }

      });
     }

    });
 });

</script>



<!-- Fetch all Content Information -->

  <script>
       $(document).ready(function(){

    //    alert("test");
        var oTable = $('#hidden-table-content').DataTable({

            dom: 'Bfrtip',
              buttons: [
              { extend: 'copyHtml5'},
              { extend: 'excelHtml5' },
              { extend: 'pdfHtml5' },

            ],
             "serverside" : true,
             "processing" :true,
              "order" :[],
             "ajax" :{
              // ajax :'data.json',
             url: '<?php echo base_url()?>/Dashboard/fetch_content',
             type : 'POST'
          },
        });



      $(document).on('click', '.updatecontent', function(){
         var user_id = $(this).attr('id');
        // alert(user_id)
        // $('#myModal').modal("show");
        // // $('#myModal').find('.modal-title'). text(' ');
        // $('myForm').attr('action', '<-?php// echo base_url()?>Dashboard/clients_edit');

        $.ajax({
        type : 'ajax',
         method : 'POST',
         url: '<?php echo base_url()?>/dashboard/content_edit',
         data:{user_id:user_id},
         async:false,
         dataType: 'json',
         success: function(data){
        // alert("test") ;
            // $('#id').val(data.id);
            $('#title').val(data.title);
            $('#editor1').val(data.editor1);
            $('#cat1').val(data.cat1);
            $('#cat2').val(data.cat2);
            $('#cat3').val(data.cat3);
            $('#image').val(data.image);
            $('#user_id').val(data.id);
            $('#save').val("Edit");
         },
         error:function(){
            // alert("Please Refresh the page. Thank you.");
         }

      });

    });


    $(document).on('submit', '#myformupdate', function(event){

        event.preventDefault();
         // alert('yes');
        var user_id = $('#user_id').val();
        // alert(user_id );
        var title = $('#title').val();
        var editor1= $('#editor1').val();
        var cat1= $('#cat1').val();
        var cat2= $('#cat2').val();
        var cat3= $('#cat3').val();
        // var image= $('#image').val();


         if(title != '' && image != '') {

              $.ajax({

               url: '<?php echo base_url()?>/Dashboard/content_update',
               method : 'POST',
               data: new FormData(this) ,
                //async: false,
                contentType:false,
                processData:false,
                success:function(data){

                var user= $('#user_id').val(data.user_id);
                 //console.log(JSON.stringify(user));
                 alert(data);
                  $('#myformupdate')[0].reset();
                 // $('#myModal').modal('hide');
                 // oTable.ajax.reload();

                }

            });

      }
      else{
        alert("Both  fields are required");
      }

    });


  $(document).on('click', '.deletecontent', function(){
      var user_id = $(this).attr('id');
      // alert("user_id");
      $('#deleteModal').modal("show");
      $('#deleteModal').find('.modal-title'). text(' Delete Information');
        if(confirm("Are you sure you want to delete this?"))
        {
          $.ajax({

           url: '<?php echo base_url()?>/dashboard/content_delete',
           method : 'POST',
           data:{user_id:user_id},
           success: function(data){
             alert(data);
             oTable.ajax.reload();

           },
           error:function(){
              alert("could not get data from Database");
           }

      });
     }

    });



      $(document).ready(function() {
        $("#bactive").click(function() {          // e.preventDefault();
          alert('yes');
          // $.ajax({
          //   type: "POST",
          //   url: "/pages/test/",
          //   data: {
          //     id: $("#button_1").val(),
          //     access_token: $("#access_token").val()
          //   },
          //   success: function(result) {
          //     alert('ok');
          //   },
          //   error: function(result) {
          //     alert('error');
          //   }
          // });
        });
      });



    });

</script>



<script>
    $(document).on('click', '.updateimage', function(){
         var user_id = $(this).attr('id');
       //alert(user_id)
        $('#myModal').modal("show");
        $('#myModal').find('.modal-title'). text(' ');
        $('myFormimage').attr('action', '<?php echo base_url()?>Dashboard/user_edit');

        $.ajax({
        type : 'ajax',
         method : 'POST',
         url: '<?php echo base_url()?>/dashboard/user_edit',
         data:{user_id:user_id},
         async:false,
         dataType: 'json',
         success: function(data){
        // alert("test") ;
           $('#id').val(data.id);

           // alert(info);
            $('#user_uploaded_image').html(data.photo);
            $('#user_id').val(data.id);
            $('#save').val("Edit");
         },
         error:function(){
            alert("Please Refresh the page. Thank you.");
         }

      });



      $(document).on('submit', '#myFormimage', function(event){
        event.preventDefault();
        var user_id = $('#user_id').val();
        // alert(user_id );
        var logo = $('#logo').val();
        if(logo != '' ) {
              $.ajax({
               url: '<?php echo base_url()?>/dashboard/user_update',
               method : 'POST',
               data: new FormData(this) ,
                contentType:false,
                processData:false,
                success:function(data){

                var user= $('#user_id').val(data.user_id);
                 alert(data);
                  $('#myFormimage')[0].reset();
                  $('#myModal').modal('hide');
                  location.reload(); ;
                }
            });
          }
          else{
            alert("Some fields are required");
          }

        });
    });
</script>


<!-- ###################Update Profile Information for Each customer/client##############################
 -->

<script>
    $(document).on('click', '.updateprofile', function(){
         var user_id = $(this).attr('id');
         // alert(user_id)
        // $('#myModal').modal("show");
        // $('#myModal').find('.modal-title'). text(' ');
        // $('myFormimage').attr('action', '<?php //echo base_url()?>Dashboard/user_edit');

        $.ajax({
        type : 'ajax',
         method : 'POST',
         url: '<?php echo base_url()?>/dashboard/profile_edit',
         data:{user_id:user_id},
         async:false,
         dataType: 'json',
         success: function(data){
        // alert("test") ;
            $('#id').val(data.id);
            $('#first_name').val(data.first_name);
            $('#phone').val(data.phone);
            $('#email').val(data.email);
            $('#username').val(data.username);
            $('#password1').val(data.password);
            $('#password2').val(data.password);
            $('#user_uploaded_image').html(data.photo);
            $('#user_id').val(data.id);
            $('#save').val("Edit");
         },
         error:function(){
            alert("Please Refresh the page. Thank you.");
         }

      });


    $(document).on('submit', '#myFormprofile', function(event){
        event.preventDefault();
        var user_id = $('#user_id').val();
        // alert(user_id );
        var first_name = $('#first_name').val();
        var phone = $('#phone').val();
        var email = $('#email').val();
        var username = $('#username').val();
        var password1 = $('#password1').val();
        var password2 = $('#password2').val();
        var photo = $('#photo').val();
        if(phone != '' ) {
              $.ajax({
               url: '<?php echo base_url()?>/dashboard/profile_update',
               method : 'POST',
               data: new FormData(this) ,
                contentType:false,
                processData:false,
                success:function(data){

                var user= $('#user_id').val(data.user_id);
                 alert(data);
                  $('#myFormprofile')[0].reset();
                //  $('#myModal').modal('hide');
                   location.reload(); ;
                }
            });
          }
          else{
            alert("Some fields are required");
          }

        });
    });
</script>



<!-- ###################Update Profile other  Information for Each customer/client##############################
 -->

<script>
    $(document).on('click', '.updatedetails', function(){
        var user_id = $(this).attr('id');
       // alert(user_id);
        $.ajax({
        type : 'ajax',
         method : 'POST',
         url: '<?php echo base_url()?>/dashboard/profileother_edit',
         data:{user_id:user_id},
         async:false,
         dataType: 'json',
         success: function(data){
        // alert("test") ;
            $('#id').val(data.id);
            $('#manager').val(data.manager);
            $('#city').val(data.city);
            $('#address').val(data.address);
            $('#country').val(data.country);
            $('#user_id').val(data.id);
            $('#save').val("Edit");
         },
         error:function(){
            alert("Please Refresh the page. Thank you.");
         }

      });


    $(document).on('submit', '#myFormotherprofile', function(event){
        event.preventDefault();
        var user_id = $('#user_id').val();
         alert(user_id );
        var manager = $('#manager').val();
        var city = $('#city').val();
        var address = $('#address').val();
        var country = $('#country').val();
        if(manager != '' ) {
              $.ajax({
               url: '<?php echo base_url()?>/dashboard/profileother_update',
               method : 'POST',
               data: new FormData(this) ,
                contentType:false,
                processData:false,
                success:function(data){

                var user= $('#user_id').val(data.user_id);
                 alert(data);
                  $('#myFormotherprofile')[0].reset();
                //  $('#myModal').modal('hide');
                   location.reload(); ;
                }
            });
          }
          else{
            alert("Some fields are required");
          }

        });
    });
</script>


<!--################# Fetch all Device Users from the database ############################################ -->

  <script>
       $(document).ready(function(){
        var oTable = $('#hidden-table-deviceusers').DataTable({
            dom: 'Bfrtip',
              buttons: [
              { extend: 'copyHtml5'},
              { extend: 'excelHtml5' },
              { extend: 'pdfHtml5' },

            ],
             "serverside" : true,
             "processing" :true,
              "order" :[],
             "ajax" :{
              // ajax :'data.json',
             url: '<?php echo base_url()?>/Dashboard/fetch_deviceusers',
             type : 'POST'
          },
        });
    });

    $(document).ready(function(){
        var oTable = $('#hidden-table-useractivity').DataTable({
             dom: 'Bfrtip',
              buttons: [
              { extend: 'copyHtml5'},
              { extend: 'excelHtml5' },
              { extend: 'pdfHtml5' },

            ],
             "serverside" : true,
             "processing" :true,
              "order" :[],
             "ajax" :{
              // ajax :'data.json',
             url: '<?php echo base_url()?>/Dashboard/fetch_useractivity',
             type : 'POST'
          },
        });
    });


    $(document).ready(function(){
        var oTable = $('#hidden-table-statsinfo').DataTable({
            dom: 'Bfrtip',
              buttons: [
              { extend: 'copyHtml5'},
              { extend: 'excelHtml5' },
              { extend: 'pdfHtml5' },

            ],
             "serverside" : true,
             "processing" :true,
              "order" :[],
             "ajax" :{
              // ajax :'data.json',
             url: '<?php echo base_url()?>/Dashboard/fetch_statsinfo',
             type : 'POST'
          },
        });
    });

</script>


<script>
 $(document).on('submit', '#myFormotherprofile', function(event){
      event.preventDefault();
      var user_id = $('#user_id').val();
       alert(user_id );
      var manager = $('#manager').val();
      var city = $('#city').val();
      var address = $('#address').val();
      var country = $('#country').val();
      if(manager != '' ) {
            $.ajax({
             url: '<?php echo base_url()?>/dashboard/profileother_update',
             method : 'POST',
             data: new FormData(this) ,
              contentType:false,
              processData:false,
              success:function(data){

              var user= $('#user_id').val(data.user_id);
               alert(data);
                $('#myFormotherprofile')[0].reset();
              //  $('#myModal').modal('hide');
                 location.reload(); ;
              }
          });
        }
        else{
          alert("Some fields are required");
        }

      });

    $(document).ready(function() {
      $("#bactive").click(function(e) {
        e.preventDefault();
        alert('yes');
        $.ajax({
          type: "POST",
          url: "/pages/test/",
          data: {
            id: $("#button_1").val(),
            access_token: $("#access_token").val()
          },
          success: function(result) {
            alert('ok');
          },
          error: function(result) {
            alert('error');
          }
        });
      });
   });
</script>
