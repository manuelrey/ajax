$(document).ready(function(){ 
       $.ajax({
	       url: 'ajaxjson.json',
	       dataType: 'json',
	       success: function(data) {
	          var items = [];
	          $.each(data, function(key, val) {
	                            items.push("<tr>");
                items.push("<td id=''"+key+"''>"+val.id+"</td>");
                items.push("<td id=''"+key+"''>"+val.name+"</td>");
                items.push("<td id=''"+key+"''>"+val.telephone+"</td>");
                items.push("<td id=''"+key+"''>"+val.email+"</td>");
                items.push("</tr>");
            });
            $("<tbody/>", {html: items.join("")}).appendTo("table");
       		},
		    statusCode: {
		         404: function() {
		         alert('There was a problem with the server.  Try again soon!');
		         }
		    }
    	});
 });