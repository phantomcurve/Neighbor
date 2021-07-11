// Business Logic
function neighborNumber(#userNumber) {
  const userNumberArray = (#userNumber.toString([]);
  for (let i = 0; i < userNumberArray; i+=1) {
    if (userNumberArray.includes("3") {
      userNumberArray.push("won't you be my neighbor?")
    }
    else if (userNumberArray.includes("2") {
      userNumberArray.push("boop")
    }
    else if (userNumberArray.includes("1") {
      userNumberArray.push("beep")
    }
    else (userNumberArray.includes("4, 5, 6, 7, 8, 9") {
      userNumberArray.push(i)
    }
    return 
  });
  userNumberArray.join(" ");

    
const allNumbers = neighborNumber(0, 100); 



// UI Logic

$(document).ready(function() {
  $("form#numberInput").submit(function(event) {
    neighborNumber("input#userNumber").val();  
      $(".computerinoed-number").show();
        $("#biden").show();  
  });
  $("#reset").click(function() {
    $("form#numberInput").reset();
    event.preventDefault();
  });

});  