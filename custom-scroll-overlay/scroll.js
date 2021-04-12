
var over = document.getElementById("overlay");
var foc = false;
function focusOverlay() {
  let y = window.pageYOffset;
  window.scrollTo(0, y + 10);
  if (foc) setTimeout(focusOverlay, 10);
}
function mouseOverlay() {
  foc = true;
  focusOverlay();
}
function mouseLeft() {
  foc = false;
}

var over2 = document.getElementById("overlay2");
var foc2 = false;
function focusOverlay2() {
  let y2 = window.pageYOffset;
  window.scrollTo(0, y2 - 10);
  if (foc2) setTimeout(focusOverlay2, 10);
}
function mouseOverlay2() {
  foc2 = true;
  focusOverlay2();
}
function mouseLeft2() {
  foc2 = false;
}
