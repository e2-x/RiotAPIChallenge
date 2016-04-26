$(document).ready(function() {
  $(function() {
      $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          if (scroll >= 500) {
              $(".header-icon").addClass('smaller');
          } else {
              $(".header-icon").removeClass("smaller");
          }
      });
  });
});