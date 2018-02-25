$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    value = parseInt($("#value-x").val());
    var result = display(value);
    $("#output").text(result);
  });
});

var display = function() {
  for (i = 1; i <= value; i++) {
    if (i % 15 === 0) {
      $("#output").append("<li>" + "pingpong" + "</li>");
