var iconName1 = document.getElementById("auth-ico-name-one");
var iconEmail1 = document.getElementById("auth-ico-email-one");
var iconPassword1 = document.getElementById("auth-ico-password-one");
var inputNameLogin = document.getElementById("inputNameLogin");
var inputEmailLogin = document.getElementById("inputEmailLogin");
var inputPasswordLogin = document.getElementById("inputPasswordLogin");
var buttonNext = document.getElementById("input-btn-next");
var buttonBack = document.getElementById("input-btn-back");


inputNameLogin.addEventListener('focus', function() {
    iconName1.style.color = "white";
  });
  
inputNameLogin.addEventListener('blur', function() {
    iconName1.style.color = "#303030";
});

inputEmailLogin.addEventListener('focus', function() {
    iconEmail1.style.color = "white";
  });
  
inputEmailLogin.addEventListener('blur', function() {
    iconEmail1.style.color = "#303030";
});

inputPasswordLogin.addEventListener('focus', function() {
    iconPassword1.style.color = "white";
  });
  
inputPasswordLogin.addEventListener('blur', function() {
    iconPassword1.style.color = "#303030";
});

iconPassword1.addEventListener('click', function() {
    if (inputPasswordLogin.type === 'password') {
        inputPasswordLogin.type = 'text';
    } else {
        inputPasswordLogin.type = 'password';
    }
});

buttonNext.addEventListener('click', function() {
    if (inputEmailLogin.value.trim() !== '') {
        inputPasswordLogin.style.display = 'block';
        iconPassword1.style.display = 'block'; 
    }
});

buttonBack.addEventListener('click', function() {
    activeAuth.style.display = "grid";
    loginAuth.style.display = "none";
});


var activeAuth = document.getElementById("active-auth");
var loginAuth = document.getElementById("login-auth");

var linkEmail = document.getElementById("link-email");

linkEmail.addEventListener('click', function() {
    activeAuth.style.display = "none";
    loginAuth.style.display = "block";
});


