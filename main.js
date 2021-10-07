const featuresNav = document.querySelector(".features-nav");
const featuresContent = document.querySelectorAll(".features__content");
const navLinks = document.querySelectorAll(".features-nav__item");
const header = document.querySelector('.header');
const hamburgerMenu = document.querySelector('.js-hamburger__menu');
const menuLinks = document.querySelector('.header__list');
const navLogo = document.querySelector('.header__logo');
const submitBtn = document.querySelector('.js-submit-mail');
const inputWrapper = document.querySelector('.contact__form');
const email = document.getElementById("email");
featuresNav.addEventListener("click", function (e) {
    const clickedTarget = e.target.dataset.target;
    const clickedFeature = e.target;
    if (e.target.tagName === "LI") {
        featuresContent.forEach(function (contentPane) {
            if (contentPane.id === clickedTarget) {
                clickedFeature.classList.add('active');
                contentPane.classList.add('active');
                navLinks.forEach(function (navItem) {
                    if (navItem.dataset.target !== clickedTarget) {
                        navItem.classList.remove('active');
                    }
                });
            } else {
                contentPane.classList.remove('active');
            }
        });
    }
});
const accordionItemHeaders = document.querySelectorAll('.js-accord-header');
accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', () => {
        const currentlyActiveAccordionItemHeader = document.querySelector('.js-accord-header.active');
        if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle('active');
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }
        accordionItemHeader.classList.toggle('active');
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains('active')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});
submitBtn.addEventListener('click', validateForm);
function validateForm(e) {
    e.preventDefault()
    if (isEmpty(email.value) || !validEmail(email.value)) {
        inputWrapper.classList.add("error");
    }
}
email.addEventListener("focus", () => {
    inputWrapper.classList.remove("error");
});
function isEmpty(value) {
    return value.length == 0;
}
function validEmail(email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}
email.addEventListener("keydown", function (e) {
    if (!e) {
        var e = window.event;
    }
    if (e.key == "Enter") {
        validateForm(e);
    }
}, false);
hamburgerMenu.addEventListener('click', function () {
    header.classList.toggle('open-menu');
    document.body.classList.toggle('lock-scroll');
})
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.open-menu');
    if (window.innerWidth <= 1023 && menuBars) {
        menuBars.classList.toggle('open-menu');
        document.body.classList.toggle('lock-scroll');
    }
}
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);