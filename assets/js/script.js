$(document).ready(() => {

    $("#login-form").validate({
        errorClass: "validation-message",
        errorElement: "p",
        rules: {
            userId: "required",
            password: "required"
        },
        messages: {
            userId: {
                required: "Please enter user ID"
            },
            password: {
                required: "Please enter password"
            }
        }
    });


    $("#quick-pay-form").validate({
        errorClass: "validation-message",
        errorElement: "p",
        rules: {
            consumer_number: {
                required: true,
                minlength: 13,
                maxlength: 13
            },
            mobile_number: {
                required: true,
                minlength: 10,
                maxlength: 10,
            },
            verification_code: "required"

        },
        messages: {
            consumer_number: {
                required: "Please enter consumer number",
                maxlength: "Please enter valid consumer number",
                minlength: "Please enter 13 digits consumer number"
            },
            mobile_number: {
                required: "Please enter phone number",
                minlength: "Please enter 10 digits phone number"
            },
            verification_code: "Please enter verification code"
        }
    })


    $("#complaint-form").validate({
        errorClass: "validation-message",
        errorElement: "p",
        rules: {
            consumer_number: {
                required: true,
                minlength: 13,
                maxlength: 13
            },
            mobile_number: {
                required: true,
                minlength: 10,
                maxlength: 10,
            },
            contact_person: "required",
            problem_description: "required",
            address: "required",
            verification_code: "required"

        },
        messages: {
            consumer_number: {
                required: "Please enter consumer number",
                maxlength: "Please enter valid consumer number",
                minlength: "Please enter 13 digits consumer number"
            },
            mobile_number: {
                required: "Please enter mobile number",
                minlength: "Please enter 10 digits phone number"
            },
            contact_person: "Please enter name of person to contact",
            problem_description: "Please enter problem description",
            address: "Please enter address",
            verification_code: "Please enter verification code"
        }
    })


    $("#consumer_number").keypress(function () {
        if ($(this).val().length > 12) {
            return false;
        }
    });


    $("#mobile_number").keypress(function () {
        if ($(this).val().length > 9) {
            return false;
        }
    });

    $("#complaint_service_type_selection").change(function (e) {

        let options;
        let selected = $(this).val();

        $("#category").html(" ");

        if (selected == "Street light")
            options = ["Street light - Switched off", "Street light - Not working", "Street light - Loose contact / flickering"];
        else if (selected == "Billing")
            options = ["Billing - Advanced payment", "Billing - installment", "Billing - No reading taken", "Billing - Wrong meter reading"];
        else if (selected == "Meter")
            options = ["Meter - Meter burnt", "Meter - Meter faulty", "Meter - Meter display faulty", "Meter - Old meter / mechanical / static replacement"];
        else if (selected == "Voltage")
            options = ["Voltage - Low", "Voltage - High", "Dim supply"];
        else
            options = ["No Supply - Conductor snapping", "Overheadline / Cable breakdown", "No supply - pole damaged", "No supply - One or two phase"];

        $.each(options, function (index, option) {
            $('#category').append(new Option(option, index + 1));
        });

    });


    $("#change-captcha").click(function (e) {
        e.preventDefault();
        let images = ["captcha1", "captcha2", "captcha3", "captcha4", "captcha5"];
        const random = Math.floor(Math.random() * images.length);
        $('#captcha-image').attr('src', 'assets/img/' + images[random] + '.image');
    });


    var myCarousel = document.querySelector('#kseb-ads-carousel')
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 1500,
        wrap: false
    })


})





