$(document).ready(function(){
	$.ajax({ 
	        type: 'GET', 
	        url: 'pagination.json', 
	        data: { get_param: 'value' }, 
	        dataType:'json',
	        success: function (data) { 
		        var names = data
		        console.log(data);

				$(function() {
				  test = "{"+"\"aaData\":" + JSON.stringify(data)+"}";
				  json = test;
				  document.getElementById("demo").innerHTML = test;
				  console.log(test);
				  parsedJson= JSON.parse(json);
				  var otable = $("#datatable").dataTable();

				  otable.fnClearTable();
				  
				  $.each(parsedJson.aaData, function(key, value) {
				    otable.dataTable().fnAddData([
				      value.id,
				      value.name
				    ]);
				  })

				});
	    	}
	});
});