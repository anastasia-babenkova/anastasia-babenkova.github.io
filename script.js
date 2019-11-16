function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

document.body.onload = function() {
    window.onscroll = function() {
        var scrollTop = (window.pageYOffset || document.documentElement.scrollTop) + document.documentElement.clientHeight;;
    }
}
