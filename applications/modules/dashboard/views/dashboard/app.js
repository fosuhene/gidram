$document.ready(function(){
	$.ajax({
		url:"http://localhost/gidram/Dashboard/testjsdata",
		method: "GET",
		success: function(data){
			console.log(data);
		},
		error: function(data){
			console.response;
		}
	});
});