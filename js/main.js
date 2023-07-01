if(document.querySelector("body").dataset.type=='blackHeader'){
  document.querySelector(".header-image").src = "img/header_logo_dark.png"
  document.querySelector(".header-mobile-top-row-image").src = "img/header_logo_dark.png"
  document.querySelector(".header-mobile-top-row-icon").style.display = 'none'
}

/* POPUP 1 -START- */
if (document.querySelector(".swiper-container[data-type='topGamesSlider']")){
  var swiper = new Swiper(".swiper-container[data-type='topGamesSlider']", {
    slidesPerView: 6,
    slidesPerColumn: 2,
    spaceBetween: 15,
    loop: true,
    allowTouchMove: true,
    navigation: {
      nextEl: ".sw-next",
      prevEl: ".sw-prev",
    },
    pagination: {
      el: ".sw-pag",
      type: "bullets",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      650: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 6,
      },
    },
  });
  var allSlides1 = document.querySelector(".swiper-slide").length;
  document.querySelector(".sw-next").addEventListener("click", () => {
    if (activeSlides1 == allSlides1) {
      activeSlides1 = allSlides1;
    } else {
      activeSlides1 += 2;
    }
  });
  document.querySelector(".sw-prev").addEventListener("click", () => {
    if (activeSlides1 == minValueSlide1) {
      activeSlides1 = minValueSlide1;
    } else {
      activeSlides1 -= 2;
    }
  });
  var activeSlides1;
  var minValueSlide1;
  function variChange(winWidth) {
    if (winWidth > 1300) {
      activeSlides1 = 8;
      minValueSlide1 = 8;
    }
    if (winWidth <= 1300 && winWidth > 992) {
      activeSlides1 = 6;
      minValueSlide1 = 6;
      // $('.ns-active').html(activeSlides);
    }
    if (winWidth <= 992 && winWidth > 650) {
      activeSlides1 = 4;
      minValueSlide1 = 4;
      // $('.ns-active').html(activeSlides);
    }
    if (winWidth <= 650 && winWidth > 0) {
      activeSlides1 = 2;
      minValueSlide1 = 2;
      // $('.ns-active').html(activeSlides);
    }
  }
  variChange(window.innerWidth);
  document.addEventListener("resize", function () {
    variChange(window.innerWidth);
  });
}
/* POPUP 1 -FINISH- */

/* POPUP 2 -START- */
if (document.querySelector(".swiper-container[data-type='footerSlider']")){
  var swiper = new Swiper(".swiper-container[data-type='footerSlider']", {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    loop: true,
    allowTouchMove: true,
    navigation: {
      nextEl: ".sw-next2",
      prevEl: ".sw-prev2",
    },
    pagination: {
      el: ".sw-pag2",
      type: "bullets",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
  var allSlides = document.querySelector(".swiper-slide").length;
  document.querySelector(".sw-next2").addEventListener("click", () => {
    console.log("wdadwdadawd22222")
  
    if (activeSlides == allSlides) {
      activeSlides = allSlides;
    } else {
      activeSlides += 2;
    }
  });
  document.querySelector(".sw-prev2").addEventListener("click", () => {
    if (activeSlides == minValueSlide) {
      activeSlides = minValueSlide;
    } else {
      activeSlides -= 2;
    }
  });
  
  var activeSlides;
  var minValueSlide;
  function variChange(winWidth) {
    if (winWidth > 1300) {
      activeSlides = 8;
      minValueSlide = 8;
    }
    if (winWidth <= 1300 && winWidth > 992) {
      activeSlides = 6;
      minValueSlide = 6;
      // $('.ns-active').html(activeSlides);
    }
    if (winWidth <= 992 && winWidth > 650) {
      activeSlides = 4;
      minValueSlide = 4;
      // $('.ns-active').html(activeSlides);
    }
    if (winWidth <= 650 && winWidth > 0) {
      activeSlides = 2;
      minValueSlide = 2;
      // $('.ns-active').html(activeSlides);
    }
  }
  variChange(window.innerWidth);
  document.addEventListener("resize", function () {
    variChange(window.innerWidth);
  });
}
/* POPUP 2 -FINISH- */

if (document.querySelector(".game_cards-button-more")){
  document.querySelector(".game_cards-button-more").addEventListener("click", () => {
    document.querySelector(".game_cards-button-more").className = "game_cards-button-more"
    document.querySelector(".game_cards-container[data-type='moreCards']").className = "game_cards-container"
  })
}

if (document.querySelector(".faq-list-point-second-text-container")){
  document.querySelectorAll(".faq-list-point-second-text-container").forEach((e, index) => {
    let containerParent = e.parentNode;
    let accordHeight = e.clientHeight;
  
    e.style.height = "0px";
  
    containerParent.querySelector(".faq-list-point-main-text-container").addEventListener("click", () => {
      document.querySelectorAll(".faq-list-point-main-text-button")[index].classList.toggle("active");
      document.querySelectorAll(".faq-list-point-second-text-container")[index].classList.toggle("active");
      if (document.querySelectorAll(".faq-list-point-second-text-container")[index].classList.contains("active")) {
        e.style.height = accordHeight + "px";
      } else {
        e.style.height = "0px";
      }
    });
  });
}

if (document.querySelector(".other_info-left-part-faq-list-point-second-text")){
  document.querySelectorAll(".other_info-left-part-faq-list-point-second-text").forEach((e, index) => {
    let containerParent = e.parentNode;
    let accordHeight = e.clientHeight;
  
    e.style.height = "0px";
  
    containerParent.querySelector(".other_info-left-part-faq-list-point-main-text").addEventListener("click", (it) => {
      // console.log(it.target.classList)
      // it.target.classList.toggle("active");
      // console.log(document.querySelectorAll(".other_info-left-part-faq-list-point-second-text"))
      console.log(index)
      // console.log(document.querySelectorAll(".other_info-left-part-faq-list-point-second-text")[index])
      document.querySelectorAll(".other_info-left-part-faq-list-point-main-text")[index].classList.toggle("active");
      document.querySelectorAll(".other_info-left-part-faq-list-point-second-text")[index].classList.toggle("active");
      if (document.querySelectorAll(".other_info-left-part-faq-list-point-second-text")[index].classList.contains("active")) {
        console.log(accordHeight)
        e.style.height = accordHeight + "px";
        console.log("awdwd")
      } else {
        e.style.height = "0px";
      }
    });
  });
}

if(document.querySelector(".most_popular-cards-more")){
  document.querySelector(".most_popular-cards-more").addEventListener("click", ()=>{
    document.querySelector(".most_popular-cards-more").classList.toggle("active");
    document.querySelectorAll(".most_popular-card.disactive").forEach((e) => {
      e.classList.toggle("disactive")
    })
  })
}

// if(document.querySelector(".other_info-left-part-faq-list-point-main-text")){
//   document.querySelectorAll(".other_info-left-part-faq-list-point-main-text").forEach((e,index) => {
//     e.addEventListener("click", (it) => {
//       document.querySelectorAll(".other_info-left-part-faq-list-point-main-text")[index].classList.toggle("active")
//       document.querySelectorAll(".other_info-left-part-faq-list-point-second-text")[index].classList.toggle("active")
//     })
//   })

//   document.querySelector(".other_info-right-part-card-more-text").addEventListener("click", (e)=>{
//     document.querySelector(".other_info-right-part-card-more-text").classList.toggle("active");
//     document.querySelectorAll(".other_info-right-part-card.disactive").forEach((it) => {
//       it.classList.toggle("disactive");
//     })
//   })
// }

document.querySelector(".header-mobile-top-row-button").addEventListener("click", (e) => {
  document.querySelector("body").classList.toggle("disactive");
  document.querySelector(".header-mobile-top-row-icon").classList.toggle("disactive");
  document.querySelector(".header-mobile-top-row-button").classList.toggle("active");
  document.querySelector(".header-mobile-content").classList.toggle("active");
});

document.querySelector(".header-mobile-page-back-button").addEventListener("click", (e) => {
  document.querySelector(".header-mobile-page").classList.toggle("active");
  document.querySelector(".header-mobile-lists").classList.toggle("active");
});

// document.querySelector(".header-mobile-first-list-point-text[data-type='coin']").addEventListener("click", () => {
//   document.querySelector(".header-mobile-page").classList.toggle("active");
//   document.querySelector(".header-mobile-lists").classList.toggle("active");
// });
document.querySelector(".header-mobile-first-list-point-image-container").addEventListener("click", () => {
  document.querySelector(".header-mobile-page").classList.toggle("active");
  document.querySelector(".header-mobile-lists").classList.toggle("active");
});






let navPopup = document.querySelector(".nav-popup");
// let heightOfNavPopup = navPopup.clientHeight;

// navPopup.style.height = "0px";

document.querySelector(".nav-list-point[data-type='casinos']").addEventListener("mouseenter", () => {
  navPopup.style.display = "block";
});
document.querySelector(".nav-list-point[data-type='casinos']").addEventListener("mouseleave", () => {
  navPopup.style.display = "none";
});

document.querySelectorAll(".nav-popup").forEach((e) => {
  e.addEventListener("mouseenter", () => {
    navPopup.style.display = "block";
  });
  e.addEventListener("mouseleave", () => {
    navPopup.style.display = "none";
  });
});

// document.querySelectorAll(".nav-list-point").forEach((e) => {
//   e.addEventListener("mouseover", () => {
//     navPopup.classList.toggle("active");
//     if (navPopup.classList.contains("active")) {
//       navPopup.style.height = heightOfNavPopup + "px";
//     } else {
//       navPopup.style.height = "0px";
//     }
//   });
// });

