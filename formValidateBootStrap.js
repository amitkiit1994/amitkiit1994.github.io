// Disable form submissions if there are invalid fields
$(function () {
  // validate field on change
  $(":input").change(function (event) {
    var isValid = checkField(this);
    // ... I'm doing something here ...
    return isValid;
  });

  // check field validity
  checkField = function (fld) {
    var isRequired = $(fld).prop("required");
    var isValid = $(fld).prop("validity").valid;
    var isEmpty = $(fld).val() == "";
    $(fld).removeClass("is-valid").removeClass("is-invalid");
    if (isValid) {
      if (!isEmpty) $(fld).addClass("is-valid");
      return true;
    } else {
      $(fld).addClass("is-invalid");
      return false;
    }
  };

  /* form validation */
  checkForm = function (f) {
    var isValid = true;
    $(f)
      .find("input, textarea, select")
      .each(function () {
        isValid = checkField(this) && isValid; // "&&" is shortcut
      });
    return isValid;
  };

  $('[class="needs-validation"]').submit(function (event) {
    if (!checkForm(this)) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
    // call ajax here or let it bubble to the submit button
  });
});

var name = document.forms["form"]["uname"];
$("#inlineRadio2").click(function () {
  $("#myfields").slideDown();
});
$("#inlineRadio1").click(function () {
  $("#myfields").slideUp();
});
$("#form").submit(function (e) {
  $("#messages")
    .removeClass("d-none")
    .addClass("alert alert-success alert-dismissible fade show")
    .fadeIn()
    .show();
  $("#messages_content").html(
    "Thanks for writing in <strong>" +
      $("#uname").val() +
      "!</strong> I will do my best to get back to you as soon as I can!"
  );
  $("#modal").modal("show");
  e.preventDefault();

  var data = new FormData();
  data.append("from", $("#email").val());
  data.append("to", "amitkiit1994@gmail.com");
  data.append("subject", "Amit's Space Notification");
  data.append("text", $("#message").val());
  var hash = btoa("Basic ###");

  $.ajax({
    method: "POST",
    url: "https://api.mailgun.net/v3/sandboxa2f2a084186f4045b378240a5258e9a9.mailgun.org/messages",
    data: data,
    cache: false,
    contentType: false,
    processData: false,
    headers: {
      Authorization: atob(hash),
    },
    method: "POST",
    type: "POST",
    enctype: "multipart/form-data",
    success: function (data) {
      console.log("success");
    },
  });
});
