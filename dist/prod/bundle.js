!function(e){function t(c){if(n[c])return n[c].exports;var o=n[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,c){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:c})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/prod/",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),o=(n(2),n(3)),s=n(4),r=(n.n(s),n(5));n.n(r);document.addEventListener("DOMContentLoaded",function(){Object(c.a)(),Object(o.a)()})},function(e,t,n){"use strict";function c(){const e=document.querySelector(".navbar-primary");e&&document.body.parentElement.classList.contains("expandable")&&window.addEventListener("scroll",function(){const t=window.pageYOffset||document.documentElement.scrollTop;e.classList.toggle("expanded",t<120)})}function o(){const e=document.querySelector(".nav-search-button"),t=document.querySelector(".navbar-secondary"),n=document.querySelector("#nav-search-field input");e&&t&&n&&e.addEventListener("click",()=>{t.classList.toggle("search"),t.classList.contains("search")&&function(){const e=document.querySelector(".navbar-secondary"),t=document.querySelector("#nav-search-field"),n=document.querySelector(".navbar-secondary .navbar-end");window.addEventListener("click",()=>{e.classList.remove("search")},{once:!0}),t.addEventListener("click",e=>{e.stopPropagation()}),n.addEventListener("click",e=>{e.stopPropagation()})}(),t.classList.contains("search")?n.focus():n.blur()})}function s(){!function(){const e=document.querySelectorAll(".navbar-burger");e.length>0&&e.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.target,n=document.getElementById(t);e.classList.toggle("is-active"),n.classList.toggle("is-active")})})}(),function(){const e=document.querySelectorAll(".navbar-item.has-dropdown");e.length>0&&e.forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("show-dropdown")})})}(),function(){const e=document.querySelector("#show-all-articles"),t=document.querySelector("#all-articles");e&&t&&e.addEventListener("click",()=>{t.classList.toggle("is-hidden-touch")})}(),c(),o()}t.a=s},function(e,t,n){"use strict"},function(e,t,n){"use strict";function c(){const e=document.querySelector(".sticky-subscribe-banner");if(e&&""===function(e){const t=`${e}=`,n=document.cookie.split(";");for(let e=0;e<n.length;e+=1){let c=n[e];for(;" "===c.charAt(0);)c=c.substring(1);if(0===c.indexOf(t))return c.substring(t.length,c.length)}return""}("sticky_subscribe_banner")){e.querySelector(".icon-close").addEventListener("click",t=>{e.classList.remove("is-shown"),e.classList.add("is-closed"),function(e,t,n){const c=new Date;c.setTime(c.getTime()+24*n*60*60*1e3);const o=`expires=${c.toUTCString()}`;document.cookie=`${e}=${t}; ${o}; path=/`}("sticky_subscribe_banner",1,90),t.preventDefault()}),window.addEventListener("scroll",()=>{e.classList.contains("is-closed")||(window.scrollY>300?e.classList.add("is-shown"):e.classList.remove("is-shown"))})}}function o(){!function(){const e=document.querySelectorAll("a.footer-menu-title"),t=document.querySelector(".footer-menu.is-active");e.forEach(e=>e.addEventListener("click",n=>{t&&t.classList.remove("is-active"),n.preventDefault(),e.parentElement.classList.toggle("is-active")}))}(),c(),function(){const e=document.querySelector(".js-mobile-subscribe"),t=document.querySelector(".mobile-subscribe-modal");e&&t&&e.addEventListener("click",e=>{t.style.display="flex",function(e){const t=e.querySelector(".close-btn");t&&t.addEventListener("click",t=>{e.style.display="none"})}(t),e.preventDefault()})}(),function(){if(!document.querySelector(".article-single"))return;const e=document.documentElement.scrollHeight-(window.innerHeight+300+200);let t=null;window.addEventListener("scroll",function(){t?window.scrollY>300&&window.scrollY<e?t.style.display="block":t.style.display="none":t=document.getElementById("at4-share")})}()}t.a=o},function(e,t){},function(e,t){}]);