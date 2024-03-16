function Toast(text, time = 3000) {
  // Get the snackbar DIV
  var snackbar = document.getElementById("snackbar");

  // Add the "show" class to DIV
  snackbar.className = "show";
  snackbar.innerHTML = text;

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
  }, time);
}

function SnackBar() {
  return <div id="snackbar"></div>;
}

export { SnackBar, Toast };
