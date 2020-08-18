$(document).ready(function() {
    $("#factorial").submit(function(event) {
     event.preventDefault(); 
 const numInput = parseInt($("#number").val());
 function factorial(num) {
if (num == 1 || num == 0) {
  return 1;
} else {
  return num * factorial(num-1); 
}
}
const final = factorial(numInput);
$("#output").text(final)

    })
  })

