$(document).ready(function() {

});

function champLookUp() {
  var champName = "";
  champName = $("#cId").val();
  champName = champName.toLowerCase();
  if (champName !== "") {

    $.ajax({
      url: 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=all&api_key=ea3e1ffd-a2f4-41a5-ae49-4b5d1ef6f960',
      type: 'GET',
      dataType: 'json',
      data: {},
      success: function(json) {
        console.log(json);
        var chimps = json.data;
        var found = false;
        var skinNum = Math.floor(Math.random() * 2) + 0;
        for (var key in chimps) {
      
          if (chimps.hasOwnProperty(key)) {
            var val = chimps[key].name;
            var champTitle = chimps[key].title;
            var champImg, bgImg;
            var champLore = chimps[key].blurb;
            val = val.toLowerCase();
            val = val.replace(/'/g, "");

            if (champName == val) {
              val = val.charAt(0).toUpperCase() + val.slice(1);
              if (val == "Reksai") {

                val = "RekSai";
              }
              if (val == "Kogmaw") { 
                val = "KogMaw";
              }
              if (val == "Tahm kench") {
                val = "TahmKench";
              }
              champImg = 'http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/' + val + '.png';

              $('.cImage').html("<br><img class='champIcon' src=" + champImg + "><br>" + val + " -" + champTitle + "<br><br>" + "<p class='align'>" + champLore + "</p>");

              $("body").fadeIn(3000, function() { 

                $('.bg').css("background-image", "url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + val + "_" + skinNum + ".jpg') ");
              });
              found = true;
            }

          }

        }
        if (found == true) {

        } else {
          alert("Please enter a valid champion name!");
        }

      },

    });
  } else {}
}