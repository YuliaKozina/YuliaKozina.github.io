$(function() {
    var html = $("#test").html();

    var test =JSON.parse(localStorage.getItem('test'));


    var content = tmpl(html, {
        data:test
    });

    $('body').append(content);
});