$(document).ready(function(){
        $.getJSON("ajaxjson.json", function(data){
            var items = [];
            var button = '<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg">Detail</button>';
            $.each(data, function(key, val){
                items.push("<tr>");
                items.push("<td id=''"+key+"''>"+val.id+"</td>");
                items.push("<td id=''"+key+"''>"+val.name+"</td>");
                items.push("<td id=''"+key+"''>"+val.telephone+"</td>");
                items.push("<td id=''"+key+"''>"+val.email+"</td>");
                items.push("<td >"+button+"</td>");
                items.push("</tr>");
            });
            $("<tbody/>", {html: items.join("")}).appendTo("table");
            
            $('#check').click(function() {
                    $.ajax({
                      type: 'GET',
                      url: 'ajaxjson.json',
                      data: {},
                      dataType: 'json',
                      success: function(res) {
                        $('#asd').append(
                          '<div id="myModal" class="modal fade" role="dialog">' +
                          '  <div class="modal-dialog">' +
                          '    <div class="modal-content">' +
                          '      <div class="modal-header">' +
                          '        <button type="button" class="close" data-dismiss="modal">&times;</button>' +
                          '        <h4 class="modal-title">Response Data</h4>' +
                          '      </div>' +
                          '      <div class="modal-body">' +
                          '        <p>' +
                          'transID: ' + res[0].id + ', ' +
                          'transdate: ' + res[0].name + ', ' +
                          //all fields here
                          '</p>' +
                          '      </div>' +
                          '      <div class="modal-footer">' +
                          '        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
                          '      </div>' +
                          '    </div>' +
                          '  </div>' +
                          '</div>');

                // $('#myModal').modal('show');  this  should be 


                $('body').find('#myModal').modal('show'); 
                        
                      }
                    });
                  });
            


        });

});