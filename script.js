const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto", // You may use 1 or any other number based on how many slides you want visible
        centeredSlides: true,
        spaceBetween: 100,
        loop: true, // Enabling loop to ensure continuous sliding
        autoplay: {
            delay: 3000, // Adjust this as per your need for slide transition timing
            disableOnInteraction: false, // Keep autoplay on even when user interacts
        },
        pagination: {
            el: ".swiper-pagination", // If you have pagination indicators
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next", // Add if you have next/prev buttons
            prevEl: ".swiper-button-prev",
        },
    });
}

swiperAnimation()
page4Animation()
loaderAnimation()




