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

var portfolioContainer = document.getElementById("portfolioDiv");
var letsConnectContainer = document.getElementById("letsConnectDiv");
var homeContainer = document.getElementById("homeDiv");
var feedContainer = document.getElementById("feedDiv");
var homeNavElement = document.getElementById("home_nav");
var portfolioNavElement = document.getElementById("portfolio_nav");
var connectNavElement = document.getElementById("connect_nav");
var feedNavElement = document.getElementById("feed_nav");

function showHomeContainer() {
  portfolioContainer.style.display = "none";
  letsConnectContainer.style.display = "none";
  homeContainer.style.display = "";
  feedContainer.style.display = "none";
  homeNavElement.classList.add("active");
  portfolioNavElement.classList.remove("active");
  connectNavElement.classList.remove("active");
  feedNavElement.classList.remove("active");
  window.scrollTo(0, 0);
}

function showPortFolioContainer() {
  portfolioContainer.style.display = "";
  letsConnectContainer.style.display = "none";
  homeContainer.style.display = "none";
  feedContainer.style.display = "none";
  homeNavElement.classList.remove("active");
  portfolioNavElement.classList.add("active");
  connectNavElement.classList.remove("active");
  feedNavElement.classList.remove("active");
  window.scrollTo(0, 0);
}

function showConnectContainer() {
  portfolioContainer.style.display = "none";
  letsConnectContainer.style.display = "";
  homeContainer.style.display = "none";
  homeNavElement.classList.remove("active");
  portfolioNavElement.classList.remove("active");
  connectNavElement.classList.add("active");
  feedNavElement.classList.remove("active");
  feedContainer.style.display = "none";
  window.scrollTo(0, 0);
}

function showFeedContainer() {
  portfolioContainer.style.display = "none";
  letsConnectContainer.style.display = "none";
  homeContainer.style.display = "none";
  homeNavElement.classList.remove("active");
  portfolioNavElement.classList.remove("active");
  connectNavElement.classList.remove("active");
  feedNavElement.classList.add("active");
  feedContainer.style.display = "";
  window.scrollTo(0, 0);
}

$(".navbar-collapse a").click(function () {
  $(".navbar-collapse").collapse("hide");
});

window.onload = showHomeContainer();
