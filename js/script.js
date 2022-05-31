/* SWIPPER */

const swiper = new Swiper('.home-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    loop: true,
    grabCursor: true,
});

/* SEARCH */

const search = document.querySelector('.search-form');
const body = document.querySelector('body');

search.addEventListener('click', function (e) {
    e.stopPropagation();
    this.classList.add('search-form_active');
})

body.addEventListener('click', function () {
    search.classList.remove('search-form_active');
})

/* SCROLL */

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1200);
        return false;
    });

});

/* LOGIN/REGISTER */

const navbar = document.querySelector('header .navbar');
const layout = document.querySelector('#close-navbar');

// #account-btn - добавляет класс active
// #close-form - удаляет класс active

document.querySelector('#account-btn').onclick = () => {
    navbar.classList.add('active');

}

document.querySelector('#close-form').onclick = () => {
    navbar.classList.remove('active');
    console.log(layout);
}

const registerBtn = document.querySelector('.account-form .register-btn');

const loginBtn = document.querySelector('.account-form .login-btn');

const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');

registerBtn.onclick = () => {
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
}

loginBtn.onclick = () => {
    registerBtn.classList.remove('active');
    loginBtn.classList.add('active');
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
}

const accountForm = document.querySelector('.account-form');

document.querySelector('#account-btn').onclick = () => {
    accountForm.classList.add('active');
    layout.style.display = "block";
}

document.querySelector('#close-form').onclick = () => {
    accountForm.classList.remove('active');
    layout.style.display = "none";
}

const boxes = document.querySelectorAll('.account-form .boxes');

let boxText = '';
for (let a = 0; a < boxes.length; a++) {
    boxes[a].addEventListener('click', function () {
        boxText = this.placeholder;
        this.placeholder = '';
    });

    boxes[a].addEventListener('blur', function () {
        if (this.placeholder == '') this.placeholder = boxText;
    });
}