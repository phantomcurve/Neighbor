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
    event.preventDefault();
  });
  $("#reset").click(function() {
    $("#biden").hide();
    $("form#userNumbers").reset();
    event.preventDefault();
  });
  $("form#userNumbers").submit(function(event) {
    event.preventDefault();
    
    const numberArray = str.split("#userNumbers".val());
    numberArray.push("#conversions");
  });
});  