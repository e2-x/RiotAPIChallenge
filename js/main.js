$(document).ready(function() {
  $(function() {
      $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          if (scroll >= 197) {
              $(".navIcon").addClass('smaller');
              $(".navLogoText").addClass("navText");
              $(".navLogoText").html("<h3>Feels Placeholder Man</h3>");
          } else {
              $(".navIcon").removeClass("smaller");
              $(".navLogoText").removeClass("navText");
              $(".navLogoText").html("");

          }
      });
  });
});