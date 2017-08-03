$(document).ready(function () {
    enableSelectBoxes();
});

function enableSelectBoxes() {
    $('div.search-form__select').each(function () {
        $(this).children('span.selected').html($(this).children('div.selectOptions').children('span.selectOption:first').html());
        $(this).attr('value', $(this).children('div.selectOptions').children('span.selectOption:first').attr('value'));

        $(this).children('span.selected,span.selectArrow').click(function () {
            if ($(this).parent().children('div.selectOptions').css('display') == 'none') {
                $(this).parent().children('div.selectOptions').css('display', 'block');
            } else {
                $(this).parent().children('div.selectOptions').css('display', 'none');
            }
        });

        $(this).find('span.selectOption').click(function () {
            $(this).parent().css('display', 'none');
            $(this).closest('div.search-form__select').attr('value', $(this).attr('value'));
            $(this).parent().siblings('span.selected').html($(this).html());
        });
    });
}


$(document).ready(function () {
    var outputSpan = $('#spanOutput');
    var sliderDiv = $('#slider');
    sliderDiv.slider({
        range: true,
        min: 0,
        max: 1000000,
        values: [200000, 500000],
        slide: function (event, ui) {
            outputSpan.html(ui.values[0] + ' - ' + ui.values[1] + ' Years');
        },
        stop: function (event, ui) {
            $('#txtMinAge').val(ui.values[0]);
            $('#txtMaxAge').val(ui.values[1]);
        }
    });
    outputSpan.html(sliderDiv.slider('values', 0) + ' - ' + sliderDiv.slider('values', 1) + ' Years');
    $('#txtMinAge').val(sliderDiv.slider('values', 0));
    $('#txtMaxAge').val(sliderDiv.slider('values', 1));
});
