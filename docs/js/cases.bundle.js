!function(){"use strict";(function(){const e=new URL(document.location).pathname,t=document.querySelector(".header").querySelectorAll(".nav__list-item__link");if("/"===e)t[0].classList.add("tabs__item--active");else{const n=e.split(".")[0];t.forEach((e=>{new URL(e.href).pathname.split(".")[0]==n&&e.classList.add("tabs__item--active")}))}})(),function(){const e=document.querySelector(".mobile-nav-btn"),t=document.querySelector(".mobile-nav"),n=document.querySelector(".nav-icon");e.onclick=function(){t.classList.toggle("mobile-nav--open"),n.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll")}}(),document.querySelector(".arrow-up-btn").addEventListener("click",(function(){window.scrollTo({top:0,left:0,behavior:"smooth"})})),console.log(window.matchMedia("(min-width: 768px)").matches),window.matchMedia("(min-width: 768px)").matches&&document.addEventListener("DOMContentLoaded",(()=>{new Swiper(".Cases__swiper__container",{initialSlide:0,spaceBetween:20,grabCursor:!0,direction:"horizontal",slidesPerView:"auto",autoplay:{delay:1e4,disableOnInteraction:!0},speed:3e3,navigation:{nextEl:".Cases__swiper__arrow-next",prevEl:".Cases__swiper__arrow-prev"},keyboard:!0})})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".Cases__filter-item"),t=document.querySelector(".Cases__swiper__container"),n=document.querySelector(".Cases__swiper-title");let s=o();function o(){const e=t.offsetWidth,n=t.querySelector(".Cases__swiper__slide").offsetWidth;return Math.floor(e/n)}e.forEach((e=>{e.addEventListener("click",(()=>{const i=e.dataset.filter;n.innerHTML=e.innerHTML;const c=t.querySelectorAll(".Cases__swiper__slide");s=o(),c.forEach(((e,t)=>{const n=e.dataset.filter;e.style.display="filterAll"===i||n===i?"block":"none"})),t.swiper.update()}))}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".Cases"),t=document.querySelector(".Cases-afterClick");e.querySelectorAll(".swiper-slide").forEach((n=>{n.addEventListener("click",(()=>{const s=n.dataset.filterdescr,o=t.querySelectorAll(".Cases__wrapper-descr");e.style.display="none",t.style.display="flex",o.forEach((e=>{const t=e.dataset.filterdescr;s===t?e.classList.remove("none"):e.classList.add("none")}))}))})),document.querySelectorAll(".Cases__descr-link").forEach((n=>{n.addEventListener("click",(()=>{t.style.display="none",e.style.display="block"}))}))}))}();