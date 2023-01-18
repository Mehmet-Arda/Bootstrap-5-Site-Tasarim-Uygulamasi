window.addEventListener("DOMContentLoaded", event => {
    var navBarMobile = function () {
        const nCollapsible = document.body.querySelector("#mainNavbar");
        if (!nCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            nCollapsible.classList.remove("navbar-mobile");
        } else {
            nCollapsible.classList.add("navbar-mobile");
        }
    };
    navBarMobile();
    document.addEventListener("scroll", navBarMobile);


});


var BtnCanvas = document.querySelectorAll(".btn-close-canvas");
for (let i = 0; i < BtnCanvas.length; i++) {
    BtnCanvas[i].addEventListener("click", function () {
        document.querySelector('[data-bs-dismiss="offcanvas"]').click();
    });
}

var NavBarLink = document.querySelectorAll("#mainNavbar .navbar-nav .nav-item .nav-link");
for (let i = 0; i < NavBarLink.length; i++) {
    NavBarLink[i].addEventListener("click", function () {

        NavBarLink.forEach(element => {
            if (element != NavBarLink[i]) {
                element.classList.remove("active");
            }
        });
        NavBarLink[i].classList.add("active");

    });
}





(function () {
    'use strict'
    var myName = document.querySelector("#name");
    var myEmail = document.querySelector("#email");
    var myPhone = document.querySelector("#phone");
    var myMessage = document.querySelector("#message");
    var myBtn = document.querySelector("#BtnContact");


    if (myMessage.value.length == 0) {
        myBtn.disabled = true;
    }


    myName.addEventListener("blur", controlName);
    myEmail.addEventListener("blur", controlEmail);
    myPhone.addEventListener("blur", controlPhone);
    myMessage.addEventListener("blur", controlMessage);

    const SpacePattern = /^\S*$/;
    const NumericPattern = /^([^0-9]*)$/;
    const EmailPattern = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;
    const OnlyNumberPattern = /^[0-9]*$/;


    function controlName() {
        var myError = document.querySelector("#ErrName");
        if (myName.value.length == 0) {

            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            myError.textContent = "İsim alanı boş bırakılamaz";
            return false;

        }
        else if (myName.value.length < 3) {
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            myError.textContent = "3 karakterden az isim olamaz";
            return false;
        }
        else if (myName.value.length > 30) {
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            myError.textContent = "30 karakterden fazla isim olamaz";
            return false;
        }
        else if (!SpacePattern.test(myName.value)) {
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            myError.textContent = "İsimde boşluk bulunamaz";
            return false;
        }
        else if (!NumericPattern.test(myName.value)) {
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            myError.textContent = "İsim rakamlardan oluşamaz";
            return false;
        }
        else {

            myName.classList.remove("is-invalid");
            myName.classList.add("is-valid");

            return true;
        }
    }

    function controlEmail() {
        var myError = document.querySelector("#ErrEmail");
    }

    function controlPhone() {
        var myError = document.querySelector("#ErrPhone");
    }

    function controlMessage() {
        var myError = document.querySelector("#ErrMessage");
    }



    myMessage.addEventListener("keyup", function () {
        document.getElementById("current-character").textContent = myMessage.value.length;
        if (myMessage.value.length >= 10) {
            myBtn.disabled = false;
        } else {
            myBtn.disabled = true;
        }
    });


    var myForms = document.querySelector(".needs-validation");
    myForms.addEventListener("submit", function (e) {
        if (!myForms.checkValidity() ||
            !controlName() ||
            !controlEmail() ||
            !controlPhone() ||
            !controlMessage()

        ) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, false);
})();