function myFunction() {
  document.getElementById("infospot").innerHTML = "This will tell you about HTML!";
}
function myFunctionTwo() {
  document.getElementById("infospot").innerHTML = "This will tell you all about CSS!";
}
function myFunctionThree() {
  document.getElementById("infospot").innerHTML = "This will tell you all about Chocolate!";
}
function myFunctionFour() {
  document.getElementById("infospot").innerHTML = "This will tell you all about Vanilla!";
}
function myFunctionFive() {
  document.getElementById("infospot").innerHTML = "This will tell you all about Rockly Road";
}
function myFunctionSix() {
  document.getElementById("infospot").innerHTML = "This will tell you all about Mint";
}





$(document).ready(function(){
  $('.dropdown a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
  $("[name=INPUT1]").change(function(){
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
