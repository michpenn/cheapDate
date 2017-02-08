/**
 * Created by michpenn on 1/5/17.
 */



$(document).ready(function(){
    // $('#eventData').on("submit",getEventInfo);
    $('#eventData button').on("click",getEventInfo);
});





function getEventInfo(event){
    //var $form = $(event.target);
    //var formData = $form.serialize();
    //console.log('form:', $form);
    //456093A21B0045C0E0540010E056A2AC
    //console.log('form data:',  formData);
    //console.log('serialize:', $(event.target).serialize());
    //console.log('this:', $(this).serializeArray());
    var accessToken;


    $.get("http://www.stubhub.com/listingCatalog/select?q=stubhubDocumentType%3Aevent%20AND%20description%3Ahamilton%20AND%20city%3A%22New%20York%22%20AND%20ancestorPerformerPath%3A1500227&start=0&rows=50&wt=json&indent=on&fl=event_id%20description%20event_date%20maxPrice%20minPrice",
        function(res){
        console.log('res:', res);
            var ticketData = res.response.docs;
            $('#tableData').DataTable({
                data: ticketData,
                columns: [{title: 'Name', 'data': 'description'},
                    {title: 'Date', 'data': 'event_date'},
                    {title: 'Min Price', data: 'minPrice'},
                    {title: 'Max Price', data: 'maxPrice'},
                    {title: 'id', data: 'event_id'}]
            });
        });

    event.preventDefault();
}