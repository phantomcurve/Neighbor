// Business Logic
let userNumberArray = [];

function neighborNumber(userNumber) {
  
  const userNumberString = userNumber.toString();
  for (let i = 0; i <= userNumberString; i++) {
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
  return userNumberArray;
}

// UI Logic

$(document).ready(function() {
  $("form#numberInput").submit(function(event) {
    event.preventDefault();
    neighborNumber() 
      $("input#userInputtedNumber").val();
    }); 
      $(".computerinoed-number").show();
        $("#conversion").text(userNumberArray); 
  });
  $("#reset").click(function(event) {
    $("form#numberInput").reset();
      $(".computerinoed-number").hide();
    event.preventDefault();
});
  