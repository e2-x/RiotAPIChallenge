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

    $.ajax({
    url:'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=all&api_key=ea3e1ffd-a2f4-41a5-ae49-4b5d1ef6f960',
    type:'GET',
    dataType: 'json',
    data: {},
    success: function(json) {
      console.log(json);
    }

    });
  });


function champLookUp() {
  var champName = "";
  champName = $("#cId").val();
  champName = champName.toLowerCase();
}