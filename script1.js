$(document).ready(function() {
    $('#myButton').click(function() {
        $.ajax({
            type: 'POST',
            url: '/perform_action',
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify({ key: 'value' }), // data to be sent to the server
            success: function(response) {
                $('#result').text(response.result);
            },
            error: function(request, status, error) {
                $('#result').text('Error: ' + error);
            }
        });
    });
});
