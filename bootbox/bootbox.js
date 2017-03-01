$(document).ready(function() {

	$.getJSON("http://jsonplaceholder.typicode.com/users/", function(data){
    var items = [];           
        $.each(data, function(key, val){
            var button = '<button  id="'+val.id+'"type="button"  class="btn btn-primary details" data-toggle="modal" data-target=".bs-example-modal-lg" >Detail</button>';
                items.push("<tr>");
                items.push("<td id=''"+key+"''>"+val.id+"</td>");
                items.push("<td id=''"+key+"''>"+val.name+"</td>");
                items.push("<td id=''"+key+"''>"+val.email+"</td>");
                items.push("<td id=''"+key+"''>"+val.website+"</td>");
                items.push("<td >"+button+"</td>");
                items.push("</tr>");
            });
            $("<tbody/>", {html: items.join("")}).appendTo("table");


            $('.details').on('click', function(){
				console.log('test');
				//bootbox.alert("This is the default alert!");
			
			// Get the record's ID via attribute
        var id = $(this).attr("id");

        $.ajax({
            url: 'http://jsonplaceholder.typicode.com/users/' + id,
            method: 'GET'
        }).success(function(response) {
            // Populate the form fields with the data returned from server
            $('#userForm')
                .find('[name="id"]').val(response.id).end()
                .find('[name="name"]').val(response.name).end()
                .find('[name="email"]').val(response.email).end()
                .find('[name="website"]').val(response.website).end();

            // Show the dialog
            bootbox
                .dialog({
                    title: 'Edit the user profile',
                    message: $('#userForm'),
                    show: false // We will show it manually later
                })
                .on('shown.bs.modal', function() {
                    $('#userForm')
                        .show()                             // Show the login form
                        
                })
                .on('hide.bs.modal', function(e) {
                    // Bootbox will remove the modal (including the body which contains the login form)
                    // after hiding the modal
                    // Therefor, we need to backup the form
                    $('#userForm').hide().appendTo('body');
                })
                .modal('show');
        });

        });
  	});
});