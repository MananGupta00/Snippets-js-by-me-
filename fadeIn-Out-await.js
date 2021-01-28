function increaseOpacity(ele, del) {
  var val = 0;
  var op = setInterval(function () {
    ele.style.opacity = val;
    val = val + del;
    if (val >= 1) {
      clearInterval(op);
    }
  }, 10);
}

function decreaseOpacity(ele, del) {
  var val = 1;
  var op = setInterval(function () {
    ele.style.opacity = val;
    val = val - del;
    if (val <= 0) {
      clearInterval(op);
    }
  }, 10);
}

function wait(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
