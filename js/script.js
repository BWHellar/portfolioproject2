function showInfo (location, companysize, portion, knowledge, whatfor) {
  if (location =  "seattle") {
    // Harry Potter characters
    if ((orientation === 'Straight' && sex === 'Male')
      || (orientation === 'Gay' && sex === 'Female')) {
        if (favoriteAnimal === "Cat") {
          match = 'Hermione Granger';
          matchImage = 'img/HermioneGranger.jpg';
        } else if (favoriteAnimal === "Dog") {
          match = 'Hannah Abbott';
          matchImage = 'img/HannahAbbott.jpg';
        } else if (favoriteAnimal === "Snake") {
          match = 'Bellatrix Lestrange';
          matchImage = 'img/BellatrixLestrange.jpg';
        } else if (favoriteAnimal === "Bird") {
          match = 'Fleur Delacour';
          matchImage = 'img/FleurDelacour.jpg';
        }
      } else if ((orientation === 'Gay' && sex === 'Male')
      || (orientation === 'Straight' && sex === 'Female')){
        if (favoriteAnimal === "Cat") {
          match = 'Harry Potter';
          matchImage = 'img/HarryPotter.jpg';
        } else if (favoriteAnimal === "Dog") {
          match = 'Sirius Black';
          matchImage = 'img/SiriusBlack.jpg';
        } else if (favoriteAnimal === "Snake") {
          match = 'Draco Malfoy';
          matchImage = 'img/DracoMalfoy.jpg';
        } else if (favoriteAnimal === "Bird") {
          match = 'Ron Weasley';
          matchImage = 'img/RonWeasley.jpg';
      }
    }
  } else {
    //Game of Thrones characters
    if ((orientation === 'Straight' && sex === 'Male')
      || (orientation === 'Gay' && sex === 'Female')) {
        if (favoriteAnimal === "Cat") {
          match = 'Daenerys Targaryen';
          matchImage = 'img/DaenerysTargaryen.jpg';
        } else if (favoriteAnimal === "Dog") {
          match = 'Brienne of Tarth';
          matchImage = 'img/Brienne.jpg';
        } else if (favoriteAnimal === "Snake") {
          match = 'Melisandre';
          matchImage = 'img/Melisandre.jpg';
        } else if (favoriteAnimal === "Bird") {
          match = 'Missandei';
          matchImage = "img/Missandei.jpg";
        }
      } else if ((orientation === 'Gay' && sex === 'Male')
      || (orientation === 'Straight' && sex === 'Female')){
        if (favoriteAnimal === "Cat") {
          match = 'Khal Drogo';
          matchImage = 'img/KhalDrogo.jpg';
        } else if (favoriteAnimal === "Dog") {
          match = 'John Snow';
          matchImage = 'img/Snow.jpg';
        } else if (favoriteAnimal === "Snake") {
          match = 'Ramsey Bolton';
          matchImage = 'img/Bolton.png';
        } else if (favoriteAnimal === "Bird") {
          match = 'Tyrion';
          matchImage = "img/Tyrion.jpeg";
        }
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
      $("#varspot").text("You would be a good fit for " + matchName + "");
      $("#varspot").append("<img src=" + matchImage + ">");

      event.preventDefault();
    });
});
