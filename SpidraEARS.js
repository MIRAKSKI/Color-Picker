var SpidrEye;
setInterval(function () {
  SpidrEye = window.localStorage.getItem("SpidrEye");
  if (SpidrEye!=""&&SpidrEye!=null&&SpidrEye!=undefined) {
    sergeanteye(SpidrEye)
  }
}, 70);
function SpidraMega(eyes) {
  if (eyes=="MG000001") {
    window.localStorage.setItem("SpidrEye","MG000001");
    var Ram1 = document.querySelector('#result').value;
    window.localStorage.setItem("SpidrRam1",Ram1);
    window.localStorage.setItem("SpidrRam2","");
    window.localStorage.setItem("SpidrRam3","");
    window.localStorage.setItem("SpidrRam4","");
  }
}
document.addEventListener("contextmenu", function(event){
  event.preventDefault();
  var x = event.clientX;
  var y = event.clientY;
  var Context = document.querySelector(".Context-Menu");
  Context.style.display = "block";
  Context.style.left = `${x}px`;
  Context.style.top = `${y}px`;
}, false);
document.addEventListener("click", function() {
  document.querySelector(".Context-Menu").style.display = "none";
})
