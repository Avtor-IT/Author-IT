!function(){"use strict";(function(){const e=document.querySelector(".mobile-nav-btn"),o=document.querySelector(".mobile-nav"),t=document.querySelector(".nav-icon");e.onclick=function(){o.classList.toggle("mobile-nav--open"),t.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll")}})(),document.addEventListener("DOMContentLoaded",(()=>{const e=new Swiper(".swiper__container__AboutUs",{initialSlide:0,spaceBetween:140,loop:!0,grabCursor:!0,slidesPerView:1,direction:"horizontal",navigation:{nextEl:".AboutUs-promo-arrow-next",prevEl:".AboutUs-promo-arrow-prev"},keyboard:!0}),o=document.querySelector(".swiper__wrapper__AboutUs").querySelectorAll(".slide__AboutUs");document.querySelector(".AboutUs-promo__slider-icons").querySelectorAll(".AboutUs-icons").forEach((t=>{t.addEventListener("click",(()=>{const n=t.dataset.filterabout;o.forEach(((o,t)=>{const r=o.dataset.filterabout;n===r&&e.slideTo(t,0,!1)}))}))}))}))}();