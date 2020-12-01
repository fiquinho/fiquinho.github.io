$("#submit-button").attr("disabled", "disabled");

$("input, textarea").on("change keyup paste", function() {
  // Name input validation
  if ($("#name").val() == "") {
    $("#name").addClass("wrong-input");
    $("#name").removeClass("good-input");
  } else {
    $("#name").removeClass("wrong-input");
    $("#name").addClass("good-input");
  }

  // E-mail input validation
  if (isEmail($("#email").val())) {
    $("#email").removeClass("wrong-input");
    $("#email").addClass("good-input");
  } else {
    $("#email").addClass("wrong-input");
    $("#email").removeClass("good-input");
  }

  // Message input validation
  if ($("#message").val() == "") {
    $("#message").addClass("wrong-input");
    $("#message").removeClass("good-input");
  } else {
    $("#message").removeClass("wrong-input");
    $("#message").addClass("good-input");
  }

  // If you clean the form you take out the validation classes
  if (
    $("#message").val() == "" &&
    $("#email").val() == "" &&
    $("#name").val() == ""
  ) {
    $("#message").removeClass("wrong-input");
    $("#email").removeClass("wrong-input");
    $("#name").removeClass("wrong-input");
  }

  // If all fields are correct, activate button
  if ($(".good-input").length == 3) {
    $("#submit-button").removeAttr("disabled");
    $("#submit-button").removeClass("button-off");
  } else {
    $("#submit-button").attr("disabled", "disabled");
    $("#submit-button").addClass("button-off");
  }
});

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
