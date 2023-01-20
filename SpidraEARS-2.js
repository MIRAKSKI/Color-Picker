function sergeanteye(spidrEye) {
  window.localStorage.setItem("SpidrEye", "");
  var Spidersuggat;
  var interactiv;
  if (spidrEye=="MG000001") {
    var Ram1 = window.localStorage.getItem("SpidrRam1");
    interactiv=1
  }
  else if (spidrEye=="") {
    //
  }
  else if (spidrEye=="") {
    //
  }
  else if (spidrEye=="") {
    //
  }
  else if (spidrEye=="") {
    //
  }
  else if (spidrEye=="") {
    //
  }
  else if (spidrEye=="") {
    //
  }
  if (interactiv==1) {
    var newelemX = document.createElement("div");
    var paraX = document.createElement("p");
    var nodeedX = document.createTextNode("you want a converter! "+Ram1);
    paraX.appendChild(nodeedX);
    paraX.classList.add("replaytext");
    paraX.setAttribute('name', 'replaytext')
    newelemX.classList.add("chatout");
    newelemX.appendChild(paraX);
    var elementX = document.getElementById("chatcontent");
    elementX.appendChild(newelemX);
    elementX.scrollTop = elementX.scrollHeight;
    var chatrelaod = document.getElementById("chatcontent").innerHTML;
    var chatcheckbox = document.getElementById('chatcheckbox')
    if (chatcheckbox.checked==true) {
        window.localStorage.setItem("chatrelaod", chatrelaod);
        chatcheckbox.setAttribute("checked" , "")
    }
    else {
      chatcheckbox.removeAttribute("checked" , "");
    }
    var check = document.getElementById('chatbox');
    if (check.style.display == "none") {
      document.getElementById('monterX').click();
    }
    //document.getElementById('setcolorX').click();
    var tochattext = document.getElementById('tochattext').value;
    var l11 = document.getElementsByClassName('replaytext');
    var toch2 = (l11.length) ;
    for (var i = 0; i < toch2; i++) {
        var colorarea3 = document.getElementById('colorarea3').value;
        l11[i].style.border = tochattext;
        if (colorarea3 != "") {
          l11[i].style.backgroundColor = colorarea3;
        }
    }
  }
  else if (interactiv==0) {
    var newelemX = document.createElement("div");
    var paraX = document.createElement("p");
    var nodeedX = document.createTextNode("you want a converter! "+Ram1);
    paraX.appendChild(nodeedX);
    paraX.classList.add("replaytext");
    paraX.setAttribute('name', 'replaytext')
    newelemX.classList.add("chatout");
    newelemX.appendChild(paraX);
    var elementX = document.getElementById("chatcontent");
    elementX.appendChild(newelemX);
    elementX.scrollTop = elementX.scrollHeight;
    var chatrelaod = document.getElementById("chatcontent").innerHTML;
    var chatcheckbox = document.getElementById('chatcheckbox')
    if (chatcheckbox.checked==true) {
        window.localStorage.setItem("chatrelaod", chatrelaod);
        chatcheckbox.setAttribute("checked" , "")
    }
    else {
      chatcheckbox.removeAttribute("checked" , "");
    }
    var check = document.getElementById('chatbox');
    if (check.style.display == "none") {
      document.getElementById('monterX').click();
    }
    //document.getElementById('setcolorX').click();
    var tochattext = document.getElementById('tochattext').value;
    var l11 = document.getElementsByClassName('replaytext');
    var toch2 = (l11.length) ;
    for (var i = 0; i < toch2; i++) {
        var colorarea3 = document.getElementById('colorarea3').value;
        l11[i].style.border = tochattext;
        if (colorarea3 != "") {
          l11[i].style.backgroundColor = colorarea3;
        }
    }
  }
}
function faceinteractive(doornot) {
  //
}
