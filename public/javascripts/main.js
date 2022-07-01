'use strict'

const top_btn = document.querySelector(".top_btn");
const main_logo = document.querySelector(".main_logo");
const header = document.querySelector("#header");
const brand_story = document.querySelector("#brand_story");
const division = document.querySelector("#division");
const product_detail = document.querySelector("#product_detail");
const qAnda = document.querySelector("#qAnda");

document.querySelector(".item.one").addEventListener("click", () => {
    window.scrollTo({
        top: brand_story.offsetTop - header.getBoundingClientRect().height * 5,
        behavior : "smooth"
    })
});

document.querySelector(".item.two").addEventListener("click", () => {
    window.scrollTo({
        top: division.offsetTop - header.getBoundingClientRect().height * 2,
        behavior : "smooth"
    })
});

document.querySelector(".item.three").addEventListener("click", () => {
    window.scrollTo({
        top: product_detail.offsetTop - header.getBoundingClientRect().height * 2,
        behavior : "smooth"
    })
});

document.querySelector(".item.four").addEventListener("click", () => {
    window.scrollTo({
        top: qAnda.offsetTop - header.getBoundingClientRect().height * 2,
        behavior : "smooth"
    })
});

top_btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo(0,0);
}); 

window.addEventListener("scroll", (e) => {
    let scrollTop = document.documentElement.scrollTop || window.screenY;
    if(scrollTop > header.offsetTop) {
        top_btn.classList.add("active");
    } else {
        top_btn.classList.remove("active");
    }
    if(scrollTop > header.getBoundingClientRect().height) {
        document.querySelector(".nav").classList.add("center");
        header.classList.add("center");
        document.querySelectorAll(".header div ul li").forEach((el) => {
            el.classList.add("padding");
        });
        document.querySelector(".header .main_logo").classList.add("margin");
    } else{
        document.querySelector(".nav").classList.remove("center");
        header.classList.remove("center");
        document.querySelectorAll(".header div ul li").forEach((el) => {
            el.classList.remove("padding");
        });
        document.querySelector(".header .main_logo").classList.remove("margin");
    }
});

