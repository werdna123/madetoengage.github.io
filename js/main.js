$(".signup-option").click(function(){
    $("#signup-form").show();
    $("#login-form").hide();
    $("#forgot-password").hide();
    $(".signup-option").addClass("active");
    $(".login-option").removeClass("active");
});

$(".login-option").click(function(){
    $("#signup-form").hide();
    $("#login-form").show();
    $("#forgot-password").hide();
    $("button.login-option").addClass("active");
    $("button.signup-option").removeClass("active");
});

$(".password-reset").click(function(){
    $("#signup-form").hide();
    $("#login-form").hide();
    $("#forgot-password").show();
    $("button.login-option").addClass("active");
    $("button.signup-option").removeClass("active");
    $(".signup-option").removeClass("active");
    $(".login-option").removeClass("active");
});

$(document).ready(function() {
    $("#signup-submit").click(function(evt) {
        evt.preventDefault();
        if ($('#firstname').val() === '') {
            $("#firstname").addClass("highlight");
        }
        else if ($('#lastname').val() === '') {
            $("#lastname").addClass("highlight");
        }
        else if ($('#emailaddress').val() === '') {
            $("#emailaddress").addClass("highlight");
        }
        else if ($('#password').val() === '') {
            $("#password").addClass("highlight");
        }
         else {
            window.location.href = "signup-success.html";
        }
    });
    $("#login-submit").click(function(evt) {
        evt.preventDefault();
        if ($('#emailaddresslogin').val() === '') {
            $("#emailaddresslogin").addClass("highlight");
        }
        else if ($('#passwordlogin').val() === '') {
            $("#passwordlogin").addClass("highlight");
        }
         else {
            window.location.href = "login-success.html";
        }
    });
    $("#password-submit").click(function(evt) {
        evt.preventDefault();
        if ($('#forgot-password input').val() === '') {
            $("#forgot-password input").addClass("highlight");
        }
         else {
            window.location.href = "reset-success.html";
        }
    });
});

$("#firstname").bind("keyup", function(e) {
    $('.firstname').hide();
    $("#firstname").removeClass("highlight");
})
$("#lastname").bind("keyup", function(e) {
    $('.lastname').hide();
    $("#lastname").removeClass("highlight");
})
$("#emailaddress").bind("keydown", function(e) {
    $('.emailaddress').hide();
    $("#emailaddress").removeClass("highlight");
})
$("#password").bind("keyup", function(e) {
    $('.password').hide();
    $("#password").removeClass("highlight");
})

$("#emailaddresslogin").bind("keydown", function(e) {
    $('.emailaddresslogin').hide();
    $("#emailaddresslogin").removeClass("highlight");
})

$("#passwordlogin").bind("keyup", function(e) {
    $('.passwordlogin').hide();
    $("#passwordlogin").removeClass("highlight");
})

$("#emailaddressreset").bind("keydown", function(e) {
    $('.emailaddressreset').hide();
    $("#emailaddressreset").removeClass("highlight");
})