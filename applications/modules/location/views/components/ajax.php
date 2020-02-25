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
         url: '<?php echo base_url()?>/Dashboard/profile_edit',
         data:{user_id:user_id},
         async:false,
         dataType: 'json',
         success: function(data){
        // alert("test") ;
            $('#id').val(data.id);
            $('#first_name').val(data.first_name);
            $('#last_name').val(data.last_name);
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
        var first_name = $('#first_name').val();
        var last_name = $('#last_name').val();
        var phone = $('#phone').val();
        var email = $('#email').val();
        var username = $('#username').val();
        var password1 = $('#password1').val();
        var password2 = $('#password2').val();
        var photo = $('#photo').val();
        if(phone != '' ) {
              $.ajax({
               url: '<?php echo base_url()?>/Dashboard/profile_update',
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




<!-- ###########3++++++++========Comments Info#################................................ -->

 <script>
   $(document).ready(function(){

  //alert("test");
    var oTable = $('#hidden_table_comment').DataTable({
        dom: 'Bfrtip',
          buttons: [
          { extend: 'copyHtml5'},
          { extend: 'excelHtml5' },
          { extend: 'pdfHtml5' },
          { extend: 'print' },
        ],
         "serverside" : true,
         "processing" :true,
          "order" :[],
         "ajax" :{
          // ajax :'data.json',
         url: '<?php echo base_url()?>/Dashboard/fetch_comments',
         type : 'POST',
     }

    });



 $(document).on('click', '.updatecomment', function(){
  var user_id = $(this).attr('id');

    $('#myModal').modal("show");
    $('#myModal').find('.modal-title'). text('Edit Note');
    $('myForm').attr('action', '<?php echo base_url()?>Dashboard/comments_edit');

    $.ajax({
    type : 'ajax',
     method : 'POST',
     url: '<?php echo base_url()?>/Dashboard/comments_edit',
     data:{user_id:user_id},
     async:false,
     dataType: 'json',
     success: function(data){
     //alert("test") ;
        $('#name').val(data.name);
        $('#comment').val(data.comment);
        $('#date').val(data.date);
        $('#user_id').val(data.id);
        $('#save').val("Edit");
     },
     error:function(){
        alert("Please Refresh the page. Thank you.");
     }

  });

});


$(document).on('submit', '#myForm2', function(event){
 event.preventDefault();
 var user_id = $('#user_id').val();
 var name = $('#name').val();
  var comment= $('#comment').val();
  var date= $('#date').val();
 if(name != '' && comment != '') {

      $.ajax({
       url: '<?php echo base_url()?>/Dashboard/comments_update',
       method : 'POST',
       data: new FormData(this),
        //async: false,
        contentType:false,
        processData:false,
       success:function(data){
        var user= $('#user_id').val(data.user_id);
         //console.log(JSON.stringify(user));
         alert(data);
         $('#myForm2')[0].reset();
         $('#myModal').modal('hide');
         oTable.ajax.reload();

        }
    });
}
else{
alert("Both  fields are required");
}

});


$(document).on('click', '.deletecomment', function(){
  var user_id = $(this).attr('id');
  //alert(user_id );
  $('#deleteModal').modal("show");
  $('#deleteModal').find('.modal-title'). text(' Delete Information');
   swal({

    title: "Are you sure?",

    text: "",

    type: "warning",

    showCancelButton: true,

    confirmButtonClass: "btn-danger",

    confirmButtonText: "Yes, delete it!",

    cancelButtonText: "No, cancel it!",

    closeOnConfirm: false,

    closeOnCancel: false

  },

  function(isConfirm) {
    if (isConfirm) {
      $.ajax({
           url: '<?php echo base_url()?>/Dashboard/comments_delete',
           method : 'POST',
           data:{user_id:user_id},
           success: function(data){
              // alert(data);
               swal(data);
             oTable.ajax.reload();
           },
           error:function(){
              alert("could not delete Data");
           }
        });

    } else {
      swal("Cancelled", "Data not Deleted :)", "error");
     }

  });
});

});

</script>


