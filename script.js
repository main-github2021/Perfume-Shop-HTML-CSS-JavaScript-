/* slide */
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });

 var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });




  let price = 0;
let totalProducts = 0;
let delivery = 0;
let totalPrice = 0;
let tptax = 0;
let prod1 = document.getElementById("prod1-price").innerText;
let prod2 = document.getElementById("prod2-price").innerText;
let prod3 = document.getElementById("prod3-price").innerText;
let prod4 = document.getElementById("prod4-price").innerText;
let prod5 = document.getElementById("prod5-price").innerText;
let prod6 = document.getElementById("prod6-price").innerText;

function addToCart(props) {
  totalProducts = totalProducts + 1;
  document.getElementById("total-products").innerText = totalProducts;
  if (props == 1) {
    price = price + parseFloat(prod1);
  }
  if (props == 2) {
    price = price + parseFloat(prod2);
  }
  if (props == 3) {
    price = price + parseFloat(prod3);
  }
  if (props == 4) {
    price = price + parseFloat(prod4);
  }
  if (props == 5) {
    price = price + parseFloat(prod5);
  }
  if (props == 6) {
    price = price + parseFloat(prod6);
  }
  document.getElementById("price").innerText = price.toFixed(2);

  if (price > 500 && price < 800) {
    delivery = 100;
  } else if (price > 800 && price < 1000) {
    delivery = 150;
  } else if (price > 1000) {
    delivery = 200;
  }
  document.getElementById("delivery").innerText = delivery.toFixed(2);
  document.getElementById("shipping").innerText = delivery.toFixed(2);
  totalPrice = price + delivery;
  document.getElementById("total-price").innerText = totalPrice.toFixed(2);
  let vat = (price * 15) / 100;
  document.getElementById("vat").innerText = vat.toFixed(2);
  tptax = totalPrice + vat;
  document.getElementById("tptax").innerText = tptax.toFixed(2);
}
function checkout() {
  
        alert (`Total price is ${tptax}`);  
  price = 0;
  totalProducts = 0;
  delivery = 0;
  totalPrice = 0;
  tptax = 0;
  document.getElementById("total-products").innerText = 0;
  document.getElementById("price").innerText = 0;
  document.getElementById("delivery").innerText = 0;
  document.getElementById("shipping").innerText = 0;
  document.getElementById("total-price").innerText = 0;
  document.getElementById("vat").innerText = 0;
  document.getElementById("tptax").innerText = 0;
}
