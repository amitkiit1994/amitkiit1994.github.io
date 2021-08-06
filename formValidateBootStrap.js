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
    } else {
      event.preventDefault();
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
    }
    // call ajax here or let it bubble to the submit button
  });
});
