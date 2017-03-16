// it is on
// begin a round
$(function() {
  console.log("oh you know it is on!");
  
  var el = document.getElementById("svg");
  var s = new Snap(el);
  console.log(s);
  console.log(s.children());
})