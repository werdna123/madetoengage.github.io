$('form').each(function() { this.reset() });

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

$("#signup-submit").click(function(evt) {
    evt.preventDefault();
    if ($('#firstname').val() === '') {
        $("#firstname").addClass("highlight");
        $(".error-firstname").show();
    }
    else if ($('#lastname').val() === '') {
        $("#lastname").addClass("highlight");
        $(".error-lastname").show();
    }
    else if ($('#emailaddress').val() === '') {
        $("#emailaddress").addClass("highlight");
        $(".error-emailaddress").show();
    }
    else if ($('#password').val() === '') {
        $("#password").addClass("highlight");
        $(".error-password").show();
    }
        else {
        window.location.href = "signup-success.html";
    }
});

$("#login-submit").click(function(evt) {
    evt.preventDefault();
    if ($('#emailaddresslogin').val() === '') {
        $("#emailaddresslogin").addClass("highlight");
        $(".error-emailaddresslogin").show();
    }
    else if ($('#passwordlogin').val() === '') {
        $("#passwordlogin").addClass("highlight");
        $(".error-passwordlogin").show();
    }
        else {
        window.location.href = "login-success.html";
    }
});

$("#password-submit").click(function(evt) {
    evt.preventDefault();
    if ($('#forgot-password input').val() === '') {
        $("#forgot-password input").addClass("highlight");
        $(".error-reset").show();
    }
        else {
        window.location.href = "reset-success.html";
    }
});

$("#firstname").bind("keyup", function(e) {
    $('.firstname').hide();
    $("#firstname").removeClass("highlight");
    $(".error-firstname").hide();
})
$("#lastname").bind("keyup", function(e) {
    $('.lastname').hide();
    $("#lastname").removeClass("highlight");
    $(".error-lastname").hide();
})
$("#emailaddress").bind("keydown", function(e) {
    $('.emailaddress').hide();
    $("#emailaddress").removeClass("highlight");
    $(".error-emailaddress").hide();
})
$("#password").bind("keyup", function(e) {
    $('.password').hide();
    $("#password").removeClass("highlight");
    $(".error-password").hide();
})
$("#emailaddresslogin").bind("keydown", function(e) {
    $('.emailaddresslogin').hide();
    $("#emailaddresslogin").removeClass("highlight");
    $(".error-emailaddresslogin").hide();
})
$("#passwordlogin").bind("keyup", function(e) {
    $('.passwordlogin').hide();
    $("#passwordlogin").removeClass("highlight");
    $(".error-passwordlogin").hide(); 
})
$("#emailaddressreset").bind("keydown", function(e) {
    $('.emailaddressreset').hide();
    $("#emailaddressreset").removeClass("highlight");
    $(".error-reset").hide(); 
})