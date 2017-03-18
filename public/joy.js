// what is life without
// sacred venus?
$(function(){
 console.log("the loading has begun");
  
  $.get("/co", function(data) {
    // console.log(data);
    $("#constant").html(data.hello);
  })
  
  // start snap
  var s = new Snap("#snap");
  console.log(s);
  // s is type Snap
  // draw commands in type Paper
  var circle = s.circle(110, 220, 200);
  circle.attr({
    fill: "#22e49f",
    stroke: "#000",
    strokeWidth: 1
  });
  // s.circle is not a function
 })