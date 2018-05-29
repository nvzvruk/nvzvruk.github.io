$formFiles = $("#form-files");
$fileInput = $('#input-file');
$uploadedFiles = [];
$shownList = $(".form-files__item-box");

function attachFile() {

    function getShortName(string) {
        var stringArr = string.split('');
        var charNum = window.innerWidth <= 480  ? 11 : window.innerWidth > 480 && window.innerWidth <= 1024 ? 8 : 13;

        if(stringArr.length > charNum) {
            stringArr.length = charNum + 1;
            stringArr[charNum] = "...";
            return stringArr.join('');
        }
        else return string;
    }

    function showList(arr) {
        $shownList.empty();

        if(arr.length !== 0) {
            $formFiles.css("display", "flex");
        }

        else {
            $formFiles.css("display", "none");
        }

        arr.forEach(function(item, i) {

            var file = $('<div />', {
                'class': 'form-files__item',
                appendTo: $shownList,
                'meta-index': i
            });

            file.append('<span class="name">'+ getShortName(item.name) +'<span/>');

            var fileIcon = $('<span/>', {
                'class': 'close',
                'meta-index': i,
                appendTo: file
            })
        });

        var displayedFiles = document.querySelectorAll(".form-files__item");

        displayedFiles.forEach(function (item) {

            item.addEventListener('click', function (e) {
                var index = item.getAttribute("meta-index");

                if(e.target.className === "close") {
                    $uploadedFiles.splice(index, 1);
                    showList($uploadedFiles);
                    removeError();
                }
            });
        });
    }

    function displayError(message) {
        $(".form-files__condition").addClass("error")
            .text(message);
    }

    function removeError() {
        $(".form-files__condition").removeClass("error")
            .text("Up to 5 attachments. Less than 5 Mb each.");
    }

    $fileInput.change(function() {

        for (var i = 0; i < $fileInput.prop('files').length; i++) {

            if($uploadedFiles.length < 5 && $fileInput.prop('files')[i].size <= 5000000) {
                $uploadedFiles.push($fileInput.prop('files')[i]);
                removeError();
            }

            else {
                displayError("You can upload up to 5 attachments. Less than 5 Mb each.");
            }
        }

        showList($uploadedFiles);
    });
}

var jVal = {

    'fullName' : function() {

        var inputElem = $('#input-name');
        var errorElem = $('#input-name__error');
        var patt = /^([A-Z]+[a-zA-Z]*)(\s|\-)?([A-Z]+[a-zA-Z]*)?(\s|\-)?([A-Z]+[a-zA-Z]*)?$/;

        if(!inputElem.val().length) {
            jVal.errors = true;
            inputElem.removeClass('correct').addClass('error');
            errorElem.html('required field');
        }

        else if(!patt.test(inputElem.val())) {
            jVal.errors = true;
            inputElem.removeClass('correct').addClass('error');
            errorElem.html('enter valid name');
        }

        else {
            inputElem.removeClass('error').addClass('correct');
        }
    },

    'email' : function() {

        var inputElem = $('#input-email');
        var errorElem = $('#input-email__error');
        var patt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!inputElem.val().length) {
            jVal.errors = true;
            inputElem.removeClass('correct').addClass('error');
            errorElem.html('required field');
        }

        else if(!patt.test(inputElem.val())) {
            jVal.errors = true;
            inputElem.removeClass('correct').addClass('error');
            errorElem.html('enter valid email');
        }

        else {
            inputElem.removeClass('error').addClass('correct');
        }
    },

    'phone' : function() {

        var inputElem = $('#input-phone');
        var errorElem = $('#input-phone__error');
        var patt = /^\+\d{3}-\d{2}-\d{3}-\d{2}-\d{2}$/;

        if(!inputElem.val().length) {
            jVal.errors = true;
            inputElem.removeClass('correct').addClass('error');
            errorElem.html('required field');
        }

        else if(!patt.test(inputElem.val())) {
            jVal.errors = true;
            inputElem.removeClass('correct').addClass('error');
            errorElem.html('enter valid phone number');
        }

        else {
            inputElem.removeClass('error').addClass('correct');
        }
    },

    'company' : function() {

        var inputElem = $('#input-company');
        var errorElem = $('#input-company__error');

        if(!inputElem.val().length) {
            jVal.errors = true;
            inputElem.removeClass('correct').addClass('error');
            errorElem.html('required field');
        }

        else {
            inputElem.removeClass('error').addClass('correct');
        }
    },

    'sendIt' : function (){

        if(!jVal.errors) {
            $('#form').submit();
        }
    }
};





$('#get-started-form__submit').click(function (e){
    jVal.errors = false;
    jVal.fullName();
    jVal.email();
    jVal.phone();
    jVal.company();
    jVal.sendIt();
    return false;
});

$('#input-name').change(jVal.fullName);
$('#input-email').change(jVal.email);
$('#input-phone').change(jVal.phone);
$('#input-company').change(jVal.company);
attachFile();