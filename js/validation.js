document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            alert("Thank you! This demo form has been submitted successfully.");

            form.reset();

        });

    }

});