$(document).ready(function(){
	$.ajax({
		url:"http://localhost/gidram/Dashboard/localconf",
		method: "GET",
		success: function(data){
			console.log(data);
		},
		error: function(data){
			console.log(data);
		}
	});
});