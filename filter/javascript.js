$(document).ready(function (i){
    var table = $('#datatable').dataTable({
       dom: 'lrtip'
    });   
    //$('#table-filter').on('change', function(){
    //   table.search(this.value).draw();   
    //});
    $("#inputSearch").on('keyup change', function(){
    	table.fnFilter($(this).val(),i)
    })
});