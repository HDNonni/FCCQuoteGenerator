let forismaticAPI = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';
$(document).ready(function () {
    do {
        $('#quote').on("click", function () {
            $.getJSON(forismaticAPI, function (data) {
                $('#quote-box').empty();
                $('#quote-box').append('<blockquote>' + data.quoteText + '</blockquote>' + '<p id="author"> —  ' + data.quoteAuthor + '</p>');
            });
        });
    }
    while (data.quoteText.length > 140); //Repeat the process if the quote is bigger than 140 characters
});