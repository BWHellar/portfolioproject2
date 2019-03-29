function showInfo (location, companysize, portion, knowledge) {
  if (location = "Seattle") {
    if ((companysize === 'Small' && portion === 'Back-End')
      || (companysize === 'Large' && portion === 'Back-End')) {
        if (knowledge === "New") {
          match = 'Java';
          matchImage = 'images/Java.png';
        } else if (knowledge === "Some Knowledge") {
          match = 'C#';
          matchImage = 'images/Csharp.png';
        }
      } else if ((companysize === 'Small' && portion === 'Front-End')
        || (companysize === 'Large' && portion === 'Front-End')) {
          if (knowledge === "New") {
            match = 'Java';
            matchImage = 'images/Java.png';
          } else if (knowledge === "Some Knowledge") {
            match = 'C#';
            matchImage = 'images/Csharp.png';
          }
        }
    } else {
    if ((companysize === 'Small' && portion === 'Front-End')
      || (companysize === 'Large' && portion === 'Front-End')) {
        if (knowledge === "New") {
          match = 'Java';
          matchImage = 'images/Java.png';
        } else if (knowledge === "Some Knowledge") {
          match = 'C#';
          matchImage = 'images/Csharp.png';
        }
      } else if ((companysize === 'Small' && portion === 'Back-End')
        || (companysize === 'Large' && portion === 'Back-End')) {
          if (knowledge === "New") {
            match = 'PHP';
            matchImage = 'images/PHP.png';
          } else if (knowledge === "Some Knowledge") {
            match = 'Ruby';
            matchImage = 'images/Ruby.png';
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
    var location = $("#location").val();
    var companysize = $("#companysize").val();
    var portion = $("#portion").val();
    var knowledge = $("#knowledge").val();
    var match = showInfo(location, companysize, portion, knowledge);
    var matchName = match[0];
    var matchImage = match[1];
      $("#varspot").text("You would be a good fit for " + matchName + "");
      $("#varspot").append("<img src=" + matchImage + ">");

      event.preventDefault();
    });
});
