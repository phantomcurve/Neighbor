// Business Logic
function neighborNumber(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
const allNumbers = neighborNumber(0, 1000); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]



// UI Logic

$(document).ready(function() {
  $("#submit").click(function() {
    $("#biden").show();
    $(".computerinoed-number").show();
    event.preventDefault();
  });

  $("#reset").click(function() {
    $("#biden").hide();
    $(".computerinoed-number").hide();
    $("form#numberInput").reset();
    event.preventDefault();
  });

  $("form#numberInput").submit(function(event) {
    event.preventDefault();

    let number = parseInt($("#userNumber").val());
    //let numberArray = [number + int]
    const magicNumber1 = new RegExp("1", "g");
    const magicNumber2 = new RegExp("2", "g");
    const magicNumber3 = new RegExp("3", "g");

    String.replace(magicNumber1, "beep").replace(magicNumber2, "boop").replace(magicNumber3, "Won't you be my neighbor?");    
  
  });
});  