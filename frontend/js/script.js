// new WOW().init();

//     wow = new WOW(
//         {
//             boxClass: 'wow',      // default
//             animateClass: 'animated', // default
//             offset: 0,          // default
//             mobile: true,       // default
//             live: true        // default
//         }
//     )
//     wow.init();


var swiper = new Swiper(".mySwiper", {
      autoplay: {
            delay: 5000
      }
});
$(".mySwiper").hover(function () {
      (this).swiper.autoplay.stop();
      console.log('stop')
}, function () {
      (this).swiper.autoplay.start();
});

var swiper = new Swiper(".mySlide", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
            el: ".swiper-pagination",
            clickable: true,
      }, autoplay: {
            delay: 3000,
      }
})
      ;
$(".mySlide").hover(function () {
      (this).swiper.autoplay.stop();
      console.log('stop')
}, function () {
      (this).swiper.autoplay.start();
});
const MENU_MOBILE = {
      btnMenu: document.querySelector(".btn__menu"),
      menu: document.querySelector(".nav-menu"),
      body: document.querySelector("body"),
      slideOpen: false,
      initHeight: 0,
      self: this,
      init: function () {
            this.toggleEvent();
            // this.addPlus();
            // this.showChild();
      },
      toggleEvent: function () {
            MENU_MOBILE.btnMenu.addEventListener("click", function () {
                  var _this = this.classList.toggle("active");
                  if (MENU_MOBILE.slideOpen) {
                        MENU_MOBILE.slideOpen = false;
                        MENU_MOBILE.menu.style.display = "none";
                  } else {
                        MENU_MOBILE.slideOpen = true;
                        MENU_MOBILE.menu.style.display = "block";
                  }
            });
      },
      // addPlus: function () {
      //       var hasMenu = MENU_MOBILE.menu.querySelectorAll("ul > li > ul");
      //       for (var i = 0; i < hasMenu.length; i++) {
      //             var btn = document.createElement("i");
      //             btn.className = 'fa fa-angle-right';
      //             hasMenu[i].parentElement.appendChild(btn);
      //       }
      // },
      // showChild: function () {
      //       var btnShowChild = MENU_MOBILE.menu.querySelectorAll("i");
      //       // btnShowChild.addEventListener("click",function(){
      //       //     var _this = this;
      //       //     var child =  _this.parentElement.children("ul");
      //       //     if(typeof(child) != undefined){
      //       //         child.classList.toggle("active");
      //       //     }
      //       // });
      // }
}
MENU_MOBILE.init();
