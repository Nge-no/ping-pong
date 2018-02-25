var i, value;

var display = function() {
  for (i = 1; i <= value; i++) {
    if (i % 15 === 0) {
      $("#output").append("<li>" + "pingpong" + "</li>");
    } else if (i % 5 === 0) {
      $("#output").append("<li>" + "pong" + "</li>");
    } else if (i % 3 === 0) {
      $("#output").append("<li>" + "ping" + "</li>");
    } else {
      $("#output").append("<li>" + i + "</li>");
    }
  };
};
$("#clear-list").click(function() {
  $("#output").empty();
});

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    value = parseInt($("#value-x").val());
    var result = display(value);
    $("#output").text(result);
  });
});
$(document).ready(function() {
  $("#open-menu").click(function() {
    $("aside").animate({
      "left": "1.10\%"
    }, 1000);
  });
});
$(document).ready(function() {
  $("#open-menu").click(function() {
    $("#page-content").animate({
      "left": "15\%"
    }, 1000);
  });
});
$(document).ready(function() {
  $("#hide-menu").click(function() {
    $("aside").animate({
      "left": "-30\%"
    }, 1000);
  });
});

$(document).ready(function() {
  $("#hide-menu").click(function() {
    $("#page-content").animate({
      "left": 0
    }, 1000);
  });
});
