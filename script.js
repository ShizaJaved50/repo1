const searchIcon = document.querySelector(".search-icon");
const searchForm = document.querySelector(".search-form");

searchIcon.addEventListener("click", () => {
    searchForm.classList.add("active");
    cartitemsContainer.classList.remove("active");
});

const cartIcon = document.querySelector(".cart-icon");
const cartitemsContainer = document.querySelector(".cart-items-container");

cartIcon.addEventListener("click", () => {
    cartitemsContainer.classList.add("active");
    searchForm.classList.remove("active");
});
Window.onscroll = ()=>
    {
        cartitemscontainer.classList.remove('active');
        searchForm.classList.remove('active');
        navbar.classList.remove('active');
    }

var swiper = new Swiper(".wrapper", {
    spaceBetween: 10,
    loop:true,
    CenterSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
       
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });
