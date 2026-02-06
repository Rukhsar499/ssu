// slider js
 var $carousel = $('[data-owl-carousel]');
 if ($carousel.length) {
     $carousel.each(function (index, el) {
         $(this).owlCarousel($(this).data('owl-carousel'));
     });
 }


//  scroll top

  window.onscroll = function () {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("go-top");
    } else {
      document.getElementById("go-top");
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

//   header sticky
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
  })

  // close-btn
function closeSection() {
    document.getElementById("closeable-section").style.display = "none";
  }