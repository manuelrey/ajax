$(document).ready(function(){
	$.ajax({ 
	        type: 'GET', 
	        url: 'pagination.json', 
	        data: {}, 
	        dataType:'json',
	        success: function (data) { 
		        var names = data
				$(function() {
				  test = "{"+"\"aaData\":" + JSON.stringify(data)+"}";
				  json = test;
				  parsedJson= JSON.parse(json);
				  var otable = $("#datatable").dataTable({
				  	"dom": 'lrtip',
				  	"pageLength": 5,
                	"pagingType": "full_numbers"
 

				  });

				  $('#datatable').removeClass( 'display' ).addClass('table table-striped table-bordered');


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