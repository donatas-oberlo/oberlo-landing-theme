!function(e){function t(o){if(n[o])return n[o].exports;var c=n[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,t),c.l=!0,c.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/prod",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),c=n(2),s=n(3),r=n(4);n.n(r);document.addEventListener("DOMContentLoaded",function(){Object(o.a)(),Object(c.a)(),Object(s.a)()})},function(e,t,n){"use strict";function o(){console.log("initShrinkHeader");const e=document.querySelector(".navbar-primary");e&&document.body.parentElement.classList.contains("expandable")&&(console.log("addEventListener scroll"),window.addEventListener("scroll",function(){const t=window.pageYOffset||document.documentElement.scrollTop;console.log("getCurrentScroll",t),e.classList.toggle("expanded",t<120)}))}function c(){!function(){const e=document.querySelectorAll(".navbar-burger");e.length>0&&e.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.target,n=document.getElementById(t);e.classList.toggle("is-active"),n.classList.toggle("is-active")})})}(),function(){const e=document.querySelectorAll(".navbar-item.has-dropdown");e.length>0&&e.forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("show-dropdown")})})}(),function(){const e=document.querySelector("#show-all-articles"),t=document.querySelector("#all-articles");e&&t&&e.addEventListener("click",()=>{t.classList.toggle("is-hidden-touch")})}(),o(),function(){const e=document.querySelector(".nav-search-button"),t=document.querySelector(".navbar-secondary"),n=document.querySelector("#nav-search-field input");e&&t&&n&&e.addEventListener("click",()=>{t.classList.toggle("search"),t.classList.contains("search")?n.focus():n.blur()})}()}t.a=c},function(e,t,n){"use strict";function o(e){function t(e={}){const t=r===document.activeElement||""!==r.value||"focus"===e.type;if(r.parentNode.parentNode.classList.toggle("is-active",t),t){const e=!function(e){return""===e||/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}(r.value);return r.parentNode.parentNode.classList.toggle("is-invalid",e),e}r.parentNode.parentNode.classList.toggle("is-invalid",!1)}function n(){r.parentNode.parentNode.classList.add("is-active"),r.focus()}const o=e.querySelector(".form-done h4"),c=e.querySelector(".form-done .button"),s=e.querySelector(".form-submit .button"),r=e.querySelector(".field input"),i=e.querySelector(".field label");o&&c&&r&&s&&(c.addEventListener("click",()=>{e.classList.remove("submit-done")}),r.addEventListener("focus",t),r.addEventListener("blur",t),i.addEventListener("click",n),s.addEventListener("click",()=>{t(),r.value&&!r.parentNode.parentNode.classList.contains("is-invalid")&&(e.classList.add("submit-loading"),function(e,t,n){const o=e.querySelector("input[name=EMAIL]"),c=e.querySelector("#submit-token");o&&c?function(e,t,n,o){const c=new XMLHttpRequest;let s,r=[];for(let e in t)r.push(encodeURIComponent(e)+"="+encodeURIComponent(t[e]));s=r.join("&").replace(/%20/g,"+"),c.addEventListener("load",function(e){n&&n(e)}),c.addEventListener("error",function(e){o&&o(e)}),c.open("POST",e),c.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),c.send(s)}("https://oberlo.us10.list-manage.com/subscribe/post?u=0d9b1f81906d86da6edf96d6a&amp;id=d278124e87",{EMAIL:o.value,[c.name]:c.value,subscribe:"Subscribe"},t,n):n("Email field not found")}(e,()=>{o.innerText="Thanks for subscribing!",e.classList.remove("submit-loading"),e.classList.add("submit-done"),r.value="",document.body.focus(),t()},t=>{o.innerText="Error loading data, please try again later.",e.classList.remove("submit-loading"),e.classList.add("submit-done"),console.log(t)}))}),t())}t.a=function(){const e=document.querySelector(".header-promo");e&&o(e)}},function(e,t,n){"use strict";function o(){!function(){const e=document.querySelectorAll("a.footer-menu-title"),t=document.querySelector(".footer-menu.is-active");e.forEach(e=>e.addEventListener("click",n=>{t&&t.classList.remove("is-active"),n.preventDefault(),e.parentElement.classList.toggle("is-active")}))}(),function(){const e=document.querySelector(".sticky-subscribe-banner");e&&(e.querySelector(".icon-close").addEventListener("click",t=>{e.style.display="none",t.preventDefault()}),window.addEventListener("scroll",()=>{window.scrollY>300?e.style.display="block":e.style.display="none"}))}(),function(){const e=document.querySelector(".js-mobile-subscribe"),t=document.querySelector(".mobile-subscribe-modal");e&&t&&e.addEventListener("click",e=>{t.style.display="flex",function(e){const t=e.querySelector(".close-btn");t&&t.addEventListener("click",t=>{e.style.display="none"})}(t),e.preventDefault()})}()}t.a=o},function(e,t){}]);