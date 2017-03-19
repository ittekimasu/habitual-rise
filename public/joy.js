// what is life without
// sacred venus?
var toon = {};

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
  /*
  var circle = s.circle(110, 220, 200);
  circle.attr({
    fill: "#22e49f",
    stroke: "#000",
    strokeWidth: 1
  });
  */
  // s.circle is not a function
  
  toon.t = 0;
  toon.z = window.setInterval(toon.grape, 1000);
 });

toon.grape = function() {
  console.log("time: " + toon.t);
  console.log("random character: " + rand.char());
  toon.t = toon.t + 1;
  if (toon.t >= 10) {
    console.log("fin");
    console.log("random character array (length = 28)  " + rand.chars(28));
    window.clearInterval(toon.z);
  }
}

var rand = {};
rand.char = function() {
  var flip = 97 + Math.random() * 26;
  return String.fromCharCode(flip);
};
rand.chars = function(num) {
  var ret = [];
  for (var i = 0; i < num; i++) {
    var char = rand.char();
    ret.push(char);
  }
  return ret;
}