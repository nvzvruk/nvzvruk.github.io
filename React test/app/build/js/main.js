    $('#birthday').datepicker({dateFormat: 'mm/dd/yy', maxDate: new Date()});
    $('#country').selectmenu();

    var jVal = {

        'firstName' : function() {

            var inputElem = $('#first-name');
            var wrapper = inputElem.parent();
            var errorElem = $('.error-first-name');


            if(!inputElem.val().length) {
                jVal.errors = true;
                errorElem.html('required field');
                wrapper.removeClass('correct').addClass('error');
            }

            else if((inputElem.val().indexOf("\'") != -1) || (inputElem.val().indexOf("\"") != -1)) {
                jVal.errors = true;
                wrapper.removeClass('correct').addClass('error');
                errorElem.html("you can't use symbols \' and \"");
            }

            else {
                wrapper.removeClass('error').addClass('correct');
            }
        },

        'lastName' : function() {

            var inputElem = $('#last-name');
            var wrapper = inputElem.parent();
            var errorElem = $('.error-last-name');


            if(!inputElem.val().length) {
                jVal.errors = true;
                errorElem.html('required field');
                wrapper.removeClass('correct').addClass('error');
            }

            else if((inputElem.val().indexOf("\'") != -1) || (inputElem.val().indexOf("\"") != -1)) {
                jVal.errors = true;
                wrapper.removeClass('correct').addClass('error');
                errorElem.html("you can't use symbols \' and \"");
            }

            else {
                wrapper.removeClass('error').addClass('correct');
            }
        },

        'sex' : function() {
            var male = $('#male');
            var female = $('#female');
            var wrapper = $('.form-radio');
            var errorElem = $('.error-sex');

            if(!(male.is(':checked')) && !(female.is(':checked'))) {
                jVal.errors = true;
                errorElem.html('choose your sex');
                wrapper.removeClass('correct').addClass('error');
            }

            else {
                wrapper.removeClass('error').addClass('correct');
            }
        },

        'birthday' : function() {
            
            var inputElem = $('#birthday');
            var wrapper = inputElem.parent();
            var patt = /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/;
            var errorElem = $('.error-birthday');


            if(!inputElem.val().length) {
                jVal.errors = true;
                errorElem.html('required field');
                wrapper.removeClass('correct').addClass('error');
            }

            else if(!patt.test(inputElem.val())) {
                jVal.errors = true;
                wrapper.removeClass('correct').addClass('error');
                errorElem.html("enter valid date, see placeholder");
            }

            else {
                wrapper.removeClass('error').addClass('correct');
            }
        },

        'email' : function() {

            var inputElem = $('#email');
            var wrapper = inputElem.parent();
            var errorElem = $('.error-email');
            var patt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if(!inputElem.val().length) {
                jVal.errors = true;
                wrapper.removeClass('correct').addClass('error');
                errorElem.html('required field');
            }

            else if(!patt.test(inputElem.val())) {
                jVal.errors = true;
                wrapper.removeClass('correct').addClass('error');
                errorElem.html('enter valid email');
            }

            else {
                wrapper.removeClass('error').addClass('correct');
            }
        },

        'password' : function() {
            var inputElem = $('#password');
            var wrapper = inputElem.parent();
            var patt = /^[a-z0-9_-]{6,18}$/;
            var errorElem = $('.error-password');

            if(!inputElem.val().length) {
                jVal.errors = true;
                wrapper.removeClass('correct').addClass('error');
                errorElem.html('required field');
            }

            else if(!patt.test(inputElem.val())) {
                jVal.errors = true;
                wrapper.removeClass('correct').addClass('error');
                errorElem.html('enter valid password (6-18 symbols)');
            }

            else {
                wrapper.removeClass('error').addClass('correct');
            }
        },

        'address' : function() {
            var inputElem = $('#address');
            var wrapper = inputElem.parent();
            var errorElem = $('.error-address');

            if(!inputElem.val().length) {
                jVal.errors = true;
                wrapper.removeClass('correct').addClass('error');
                errorElem.html('required field');
            }

            else if((inputElem.val().indexOf("\'") != -1) || (inputElem.val().indexOf("\"") != -1)) {
                jVal.errors = true;
                wrapper.removeClass('correct').addClass('error');
                errorElem.html("you can't use symbols \' and \"");
            }

            else {
                wrapper.removeClass('error').addClass('correct');
            }
        },

        'sendIt' : function() {
            if(!jVal.errors) {
                $('.modal').addClass('is-active');

                $('.modal__button').click(function() {
                    $('.modal').removeClass('is-active');
                });
            }
        }
    };

    $('#submit').click(function (e){
        jVal.errors = false;
        jVal.firstName();
        jVal.lastName();
        jVal.sex();
        jVal.birthday();
        jVal.email();
        jVal.password();
        jVal.address();
        jVal.sendIt();

        return false;
    });