alert("validation.js loaded");

$(document).ready(function () {

    $("#contact-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 10
            }
        },

        messages: {
            name: {
                required: "Please enter your name.",
                minlength: "Your name must be at least 2 characters."
            },
            email: {
                required: "Please enter your email address.",
                email: "Please enter a valid email address."
            },
            message: {
                required: "Please enter a message.",
                minlength: "Your message must be at least 10 characters."
            }
        },

        submitHandler: function (form) {
            alert("Thank you! This demo form has been validated successfully.");
            form.reset();
            return false;
        }
    });

});