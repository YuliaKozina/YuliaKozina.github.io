$(function () {

    var html = $("#rightAnswers").html();
    var rightAnswers = JSON.parse(localStorage.getItem('rightAnswers'));
    var radios = document.getElementsByTagName('input');
    var userAnswers = [];
    var result_field = document.getElementById('result_field');
    var j = 0;
    var point = 0;

    $('button').on('click', function () {

        for (var i = 0; i < radios.length; i++) {
            if (radios[i].type === 'radio' && radios[i].checked) {

                userAnswers[j] = radios[i].value;
                j++;
            };
        };

        if (rightAnswers.length === userAnswers.length) {

            for (var i = 0; i < rightAnswers.length; i++) {

                if (rightAnswers[i] === userAnswers[i]) {
                    point++;
                };

                result_field.innerHTML = point + " correct answers";
            };
        };
    });

    $('#reset_btn').click(function() {
        $('input:checked').prop('checked', false);
    });

});


