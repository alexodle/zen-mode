const intervalId = setInterval(() => {
  const widget = document.getElementById("js--friends-widget")
  if (widget) {
    widget.style.display = "none"
    clearInterval(intervalId)
  }
}, 500);



// document.getElementById("js--friends-widget").style.display = "none"
