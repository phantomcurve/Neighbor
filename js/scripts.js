// Business Logic
function neighborNumber(userNumber) {
  let userNumberArray = [];
  for (let i = 0; i <= userNumber; i++) {
    const userNumberString = i.toString();
    if (userNumberString.includes("3")) {
      userNumberArray.push("Won't you be my neighbor?")
    }
    else if (userNumberString.includes("2")) {
      userNumberArray.push("Boop!")
    }
    else if (userNumberString.includes("1")) {
      userNumberArray.push("Beep!")
    }
    else {
      userNumberArray.push(i)
    } 
  };
  return userNumberArray.join(", ");
}
// UI Logic
$(document).ready(function() {
  $("form#numberInput").submit(function(event) {
    event.preventDefault();
    const inputtedNumber = $("input#userInputtedNumber").val();
    const convertedNumber = neighborNumber(inputtedNumber);  
      $(".computerinoed-number").show();
      $("#conversion").show();
      $("#conversion").text(convertedNumber); 
  });
  $("#reset").click(function(event) {
    $("form#numberInput").reset();
    $(".computerinoed-number").hide();
    $("#conversion").hide();
    event.preventDefault();
  });
});  