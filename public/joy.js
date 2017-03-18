// what is life without
// sacred venus?
$(function(){
 console.log("the loading has begun");
  
  $.get("/co", function(data) {
    console.log(data);
    $("#constant").html(data.hello);
  })
 })