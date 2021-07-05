// Business Logic
//function neighborNumber(string) {
  //let numberArray = string.split(" ");
  //return numberArray;
//}
//const numberArray = [6, 8, 10]
//function numerize(numberArray) {
  //return numberArray.parseInt;
//}



// UI Logic

$(document).ready(function() {
  $("#submit").click(function() {
    $("#biden").show();
    $(".computerinoed-numbers").show();
    event.preventDefault();
  });
  $("#reset").click(function() {
    $("#biden").hide();
    $(".computerinoed-numbers").hide();
    $("form#numberInput").reset();
    event.preventDefault();
  });
  $("form#numberInput").submit(function(event) {
    event.preventDefault();
    let string = "#userNumbers".val();
    let numberArray = string.split(" ");
    $("#conversions").html(numberArray);
  });
});  