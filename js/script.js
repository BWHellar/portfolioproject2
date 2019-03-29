function showInfo (favoriteVariation, favoriteRace) {
  if (favoriteRace === 'Human'){
    if (favoriteVariation === 'Desert'){
      match = 'Desert Soldier';
      matchImage = 'images/DesertHuman.jpg';
    } else if (favoriteVariation === 'City'){
      match = 'Urban Soldier';
      matchImage = 'images/CityHuman.jpg';
    } else if (favoriteVariation === 'Rural'){
      match = 'Rural Soldier';
      matchImage = 'images/RuralHuman.jpg';
    } else if (favoriteVariation === 'Swamp'){
      match = 'Swamp Soldier';
      matchImage = 'images/SwampHuman.jpg';
    } else if (favoriteVariation === 'Snow'){
      match ='Snow Soldier';
      matchImage = 'images/SnowHuman.jpg';
    }

  }
  return [match, matchImage];
}


$(document).ready(function(){
  $(".input").keyup(function(){
          var val1 = +$(".value1").val();
          var val2 = +$(".value2").val();
          $("#result").val((val1/val2) * .9);
    });
  $("form#question").submit(function(event) {
    var favoriteRace = $("#favoriteRace").val();
    var favoriteVariation = $("#favoriteVariation").val();
    var match = showInfo(favoriteVariation, favoriteRace);
    var matchName = match[0];
    var matchImage = match[1];
      $("#varspot").text("Your match is " + matchName + "");
      $("#varspot").append("<img src=" + matchImage + ">");

      event.preventDefault();
    });
});
