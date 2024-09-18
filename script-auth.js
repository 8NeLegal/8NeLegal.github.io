var subtitle = document.getElementById("subtitle-auth");
var iconName1 = document.getElementById("auth-ico-name-one");
var iconEmail1 = document.getElementById("auth-ico-email-one");
var iconPassword1 = document.getElementById("auth-ico-password-one");
var inputNameLogin = document.getElementById("inputNameLogin");
var inputEmailLogin = document.getElementById("inputEmailLogin");
var inputPasswordLogin = document.getElementById("inputPasswordLogin");
var buttonNext = document.getElementById("input-btn-next");
var buttonBack = document.getElementById("input-btn-back");



inputNameLogin.addEventListener('focus', function() {
    inputNameLogin.style.border = "2px solid white";
    iconName1.style.color = "white";
  });
  
inputNameLogin.addEventListener('blur', function() {
    inputNameLogin.style.border = "2px solid #303030";
    iconName1.style.color = "#303030";
});

inputEmailLogin.addEventListener('focus', function() {
    inputEmailLogin.style.border = "2px solid white";
    iconEmail1.style.color = "white";
  });
  
inputEmailLogin.addEventListener('blur', function() {
    inputEmailLogin.style.border = "2px solid #303030";
    iconEmail1.style.color = "#303030";
});

inputPasswordLogin.addEventListener('focus', function() {
    inputPasswordLogin.style.border = "2px solid white";
    iconPassword1.style.color = "white";
  });
  
inputPasswordLogin.addEventListener('blur', function() {
    inputPasswordLogin.style.border = "2px solid #303030";
    iconPassword1.style.color = "#303030";
});

iconPassword1.addEventListener('click', function() {
    if (inputPasswordLogin.type === 'password') {
        inputPasswordLogin.type = 'text';
    } else {
        inputPasswordLogin.type = 'password';
    }
});


var activeAuth = document.getElementById("active-auth");
var loginAuth = document.getElementById("login-auth");

var linkEmail = document.getElementById("link-email");

linkEmail.addEventListener('click', function() {
    activeAuth.style.display = "none";
    loginAuth.style.display = "block";
    subtitle.innerText = "Вход";
});


