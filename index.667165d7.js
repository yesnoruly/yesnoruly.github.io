const e=window.matchMedia("(min-width: 768px)"),t=document.querySelectorAll(".card");if(e.matches){console.log(t);for(let e=0;e<t.length;e++)t[e].addEventListener("mouseenter",(()=>{t[e].classList.add("card--visible")})),t[e].addEventListener("mouseleave",(()=>{t[e].classList.remove("card--visible")}))}const s=document.querySelector(".header__list"),c=document.querySelectorAll(".header__item"),l=document.querySelector(".header__burger"),r=document.querySelector("body");l.addEventListener("click",(e=>{e.preventDefault(),s.classList.toggle("header--active"),l.classList.toggle("header--active"),r.classList.toggle("lock")}));for(let e=0;e<c.length;e++)c[e].addEventListener("click",(()=>{s.classList.remove("header--active"),l.classList.remove("header--active"),r.classList.remove("lock")}));
//# sourceMappingURL=index.667165d7.js.map