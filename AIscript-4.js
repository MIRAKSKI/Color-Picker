//automate color set
var hellomsg = 0;
var zoomreper = 100;
var settingsautosave="";
if (typeof(Storage) !== "undefined") {
  // Store
  // Retrieve
  var hexcolorto = window.localStorage.getItem("hexcolorto");
  var hexcolorto2 = window.localStorage.getItem("colorarea2");
  var hexcolorto3 = window.localStorage.getItem("colorarea3");
  var tobuttonop = window.localStorage.getItem("tobuttonop");
  var tochattext = window.localStorage.getItem("tochattext");
  var backgroungview = window.localStorage.getItem("hawsa");
  var chatmimcheck = window.localStorage.getItem("chatrelaod");
  var hellomsgcheck = window.localStorage.getItem("hellomsg");
  var zoomrepercheck = window.localStorage.getItem("zoomreper");
  var settingsautocheck = window.localStorage.getItem("settingsautosave");
  var mimXsavecheck = window.localStorage.getItem("mimXsave");
}
else {
  alert("sorry auto save not supported  on your computer...")
}
if (hexcolorto != ""&&hexcolorto!=null) {
  document.getElementById('hexcolorto').value = hexcolorto;
  document.getElementById('colortoicon').value = hexcolorto;
  document.getElementById("html5colorpicker").value = hexcolorto;
  document.getElementById('imgsr').style.backgroundColor = hexcolorto ;
  document.getElementById('imgres').style.backgroundColor = hexcolorto ;
  document.getElementById('imgai').style.backgroundColor = hexcolorto ;
  document.getElementById('hexcolorto').value = hexcolorto ;
}
if (hexcolorto2 != ""&&hexcolorto2!=null) {
  document.getElementById('colorarea2').value = hexcolorto2;
}
if (hexcolorto3 != ""&&hexcolorto3!=null) {
  document.getElementById('colorarea3').value = hexcolorto3;
}
if (tochattext != ""&&tochattext!=null) {
  document.getElementById('tochattext').value = tochattext;
}
if (tobuttonop != ""&&tobuttonop!=null) {
  document.getElementById('tobuttonop').value = tobuttonop;
  document.getElementById('openbt').style.border = tobuttonop;
  document.getElementById('setholder').style.border = tobuttonop;
  document.getElementById('headline').style.borderBottom = tobuttonop;
  document.getElementById('bottomline').style.borderTop = tobuttonop;
  document.getElementById('chatbox').style.border = tobuttonop;
  document.getElementById('textvalue').style.border = tobuttonop;
  document.getElementById('sendtext').style.border = tobuttonop;
  document.getElementById('colar1').style.border = tobuttonop;
  document.getElementById('colar2').style.border = tobuttonop;
  document.getElementById('colar3').style.border = tobuttonop;
  document.getElementById('mainiframe').style.borderTop = tobuttonop;
  document.getElementById('historyXX').style.border = tobuttonop;
  document.getElementById('historyX').style.border = tobuttonop;
  document.getElementById('video_ID').style.borderTop = tobuttonop;
  document.getElementById('docume_ID').style.borderTop = tobuttonop;
  document.getElementById('images_ID').style.borderTop = tobuttonop;
  document.getElementById('togglemediaviewX').style.border = tobuttonop;
}
if (backgroungview != ""&&backgroungview!=null) {
  document.getElementById('body').style.backgroundImage = backgroungview;
}
if (chatmimcheck!=""&&chatmimcheck!=null) {
  document.getElementById("chatcontent").innerHTML = chatmimcheck;
  var elementX = document.getElementById("chatcontent")
  elementX.scrollTop = elementX.scrollHeight;
  var l11 = document.getElementsByClassName('replaytext');
  var toch2 = (l11.length) ;
  for (var i = 0; i < toch2; i++) {
      var colorarea3 = document.getElementById('colorarea3').value;
      l11[i].style.border = tochattext;
      if (colorarea3 != "") {
        l11[i].style.backgroundColor = colorarea3;
      }
  }
  var l22 = document.getElementsByClassName('chatintext');
  var toch3 = (l22.length) ;
  for (var i = 0; i < toch3; i++) {
    var colorarea2 = document.getElementById('colorarea2').value;
    l22[i].style.border = tochattext;
    if (colorarea2 != "") {
      l22[i].style.backgroundColor = colorarea2;
    }
  }
}
if (hellomsgcheck!=null&&hellomsgcheck!="") {
  hellomsg = hellomsgcheck;
}
if (zoomrepercheck!=null&&zoomrepercheck!="") {
  zoomreper = zoomrepercheck;
  document.body.style.zoom=zoomreper+"%";
  document.getElementById('ZoomXelemnt').value = zoomreper+"%";
}
if (settingsautocheck!=null&&settingsautocheck!="") {
  settingsautosave = settingsautocheck
  document.getElementById('fullsettings').innerHTML = settingsautocheck;
}
if (mimXsavecheck!=null&&mimXsavecheck!="") {
  mimXsave = mimXsavecheck
  document.querySelector(".mimsX").innerHTML = mimXsavecheck;
}
//autosave colord
function autosave() {
  var hexcolorto = document.getElementById('hexcolorto').value;
  var tobuttonop = document.getElementById('tobuttonop').value;
  var sitecheckbox = document.getElementById('sitecheckbox');
  if (sitecheckbox.checked==true) {
    window.localStorage.setItem("hexcolorto", hexcolorto)
    window.localStorage.setItem("tobuttonop", tobuttonop)
    sitecheckbox.setAttribute("checked" , "")
  }
  else {
    sitecheckbox.removeAttribute("checked" , "");
  }
}
function op(bb) {
  var check = document.getElementById('chatbox');
  var botton = document.getElementById('oper');
      if (check.style.display == "block") {
        check.style.display = "none";
        botton.style.display = "block";
      }
      else {
        check.style.display = "block";
        botton.style.display = "none";
        montch = 0
        document.getElementById('montch').value = montch ;
        document.getElementById('montch').style.display = "none";
      }
}
hi =1;
var d = setTimeout(function() {
  //your code to be executed after 2.8 second
  if (hellomsg==0) {
    if (hi == 1) {
      const newelem = document.createElement("div")
      const para = document.createElement("p");
      const node = document.createTextNode("Hi there i'm SpiderAssist your Personnal assistant.");
      para.appendChild(node);
      para.classList.add("replaytext");
      para.setAttribute('name', 'replaytext')
      var tochattext = document.getElementById('tochattext').value;
      var colorarea3 = document.getElementById('colorarea3').value;
      para.style.backgroundColor = colorarea3;
      para.style.border = tochattext;
      newelem.classList.add("chatout");
      newelem.appendChild(para);
      const element = document.getElementById("chatcontent");
      element.appendChild(newelem);
      element.scrollTop = element.scrollHeight;
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
      else {

      }
      hi =2;
      //document.getElementById('monterX').click();
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
    else {
      //do nothing
    }
    hellomsg=2;
    window.localStorage.setItem("hellomsg", hellomsg);
  }
}, 5000);
function aa() {
  const textchat = document.getElementById('textvalue').value;
  var problemY = document.getElementById('textvalue').value;
  const kingbck = document.createElement("div")
  const paragr = document.createElement("p");
  const noded = document.createTextNode(textchat);
  if (textchat != "") {
    paragr.appendChild(noded);
    paragr.classList.add("chatintext");
    paragr.setAttribute('name', 'chatintext')
    kingbck.classList.add("chatin");
    kingbck.appendChild(paragr);
    const element = document.getElementById("chatcontent");
    element.appendChild(kingbck);
    document.getElementById('colcon2').value = problemY;
    document.getElementById('textvalue').value = "";
    element.scrollTop = element.scrollHeight;
    var chatrelaod = document.getElementById("chatcontent").innerHTML;
    var chatcheckbox = document.getElementById('chatcheckbox')
    if (chatcheckbox.checked==true) {
        window.localStorage.setItem("chatrelaod", chatrelaod);
        chatcheckbox.setAttribute("checked" , "")
    }
    else {
      chatcheckbox.removeAttribute("checked" , "");
    }
  }
  else {
    // do nothing
  }
  var tochattext = document.getElementById('tochattext').value;
  var l22 = document.getElementsByClassName('chatintext');
  var toch2 = (l22.length) ;
  for (var i = 0; i < toch2; i++) {
    var colorarea2 = document.getElementById('colorarea2').value;
    l22[i].style.border = tochattext;
    if (colorarea2 != "") {
      l22[i].style.backgroundColor = colorarea2;
    }
  }
}
var send45 =document.getElementById('textvalue');
send45.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
    aa()
    SmartAI()
}
});
montch = 0
function monterX() {
  var check = document.getElementById('chatbox');
  if (check.style.display == "none") {
    montch = montch + 1;
    document.getElementById('montch').value = montch;
    document.getElementById('montch').style.display = "block";
  }
  else {
    montch = montch
  }
}
//on it
function onit(riell) {
  var newelemX = document.createElement("div");
  var onitX = ["On it ;)","Loading... , loading done ;)","'it doesn't get easier ,you got better'","Today's a good day",
               "'Work smarter not harder'","Today's your Day","Try to learn somethingevery day","The only way to do great work is to love what you do"
               ,"your attitude, not your aptitude, determines your altitude","You can’t help everyone, but everyone can help someone"];
          var checkattit = document.getElementById('onitram').value;
          let U="";
          let outtext ;
          for (var i = 0; i < onitX.length; i++) {
            U = Math.floor((Math.random() * (onitX.length)));
            if (checkattit != U) {
              break;
            }
          }
          var paraX = document.createElement("p");
          if (riell!="" && riell!=undefined && riell!=null) {
            outtext = riell
          }
          else {
            outtext = onitX[U]
          }
          var nodeedX = document.createTextNode(outtext);
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
          var check = document.getElementById('chatbox');
          if (check.style.display == "none") {
            document.getElementById('monterX').click();
          }
          document.getElementById('onitram').value = U;
}
//chat AI
function SmartAI() {
  var inputX = document.getElementById("colcon2").value;
  var midnightcount = inputX.split("");
  for (var i = 0; i < midnightcount.length; i++) {
    var puresentence = inputX.replace("*", "")
    var puresentence1 = puresentence.replace("/", "")
    var puresentence2 = puresentence1.replace("+", "")
    var puresentence3 = puresentence2.replace("-", "")
    var puresentence4 = puresentence3.replace("%", "")
    var puresentence5 = puresentence4.replace("(", "0")
    var puresentence6 = puresentence5.replace(")", "0")
    var puresentence7 = puresentence6.replace("^", "")
    var inputX = puresentence7.trim()
  }
  var home = document.querySelector(".hoster");
  var spidra = document.getElementById('body')
  if (isNaN(inputX) == true) {
    var isnonumb = 1;
  }
  else {
    var isnonumb = 0;
  }
  if (inputX == "") {
    //
  }
  else {
    if (isnonumb == 0) {
      var multX =0;
      var account = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
      var checkP = 0;
      var checkM = 0;
      var inputXY = document.getElementById('colcon2').value;
      //var inputXY = document.getElementById('problemX').value;
      document.getElementById('RamX').value = inputXY;
      const thisit = inputXY.split("");
      for (var i = 0; i < thisit.length; i++) {
        var ram = document.getElementById('RamX').value;
        var inputX = ram.replace(" ", "");
        document.getElementById('RamX').value = inputX;
      }
      document.getElementById('RamZ').value = inputX;
      for (var i = 0; i < thisit.length; i++) {
        var ram = document.getElementById('RamZ').value;
        const myArray = ram.replace("+", " plus ");
        const myARray = myArray.replace("-", " subt ");
        const myARRay = myARray.replace("*", " mult ");
        const myARRAY1 = myARRay.replace("/", " divi ");
        const myARRAY2 = myARRAY1.replace("(", " starc ");
        const myARRAY3 = myARRAY2.replace(")", " enarc ");
        const myARRAY4 = myARRAY3.replace("^", " power ");
        const myARRAY = myARRAY4.replace("%", " divir ");
        document.getElementById('RamZ').value = myARRAY;
      }
      var myARRAY = document.getElementById('RamZ').value;
      document.getElementById('RamY').value = myARRAY;
      var accountXX ;
      //Ram
      const str = myARRAY.split(" ");
      for (i = 0; i < str.length; i++) {
        var ram = document.getElementById('RamY').value;
        var myARRAy = ram.replace("  ", " ");
        document.getElementById('RamY').value = myARRAy;
      }
      const checkterf = myARRAy.split(" ");
      for (var i = 0; i < str.length; i++) {
        if (checkterf[i] == checkterf[i+1]) {
          if (checkterf[i] == "multi") {
            var myARRAy = myARRAy.replace(" multi multi ", " multi ");
          }
          else if (checkterf[i] == "divi") {
            var myARRAy = myARRAy.replace(" divi divi ", " divi ");
          }
          else if (checkterf[i] == "plus") {
            var myARRAy = myARRAy.replace(" plus plus ", " plus ");
          }
          else if (checkterf[i] == "subt") {
            var myARRAy = myARRAy.replace(" subt subt ", " subt ");
          }
          else if (checkterf[i] == "starc") {
            var myARRAy = myARRAy.replace(" starc starc ", " starc ");
          }
          else if (checkterf[i] == "enarc") {
            var myARRAy = myARRAy.replace(" enarc enarc ", " enarc ");
          }
          else if (checkterf[i] == "power") {
            var myARRAy = myARRAy.replace(" power power ", " power ");
          }
          else if (checkterf[i] == "divir") {
            var myARRAy = myARRAy.replace(" divir divir ", " divir ");
          }
        }
      }
      const nytrf = myARRAy.trim();
      const myterf = myARRAy.split(" ");
      var x=myterf.length;
      var arccheckst = 0;
      var arcchecken = 0;
      for (i = 0; i < myterf.length; i++) {

        if (myterf[i]!="mult" || myterf[i] != "subt" || myterf[i] != "plus" || myterf[i] != "divi") {
          var input = document.createElement("input");
          input.type = "text";
          input.id = "ram"+i;
          var myArra = document.createTextNode(myterf[i]);
          input.appendChild(myArra);
          var elemT = document.getElementById("ramholder");
          elemT.appendChild(input);
          document.getElementById("ram"+i).value = myterf[i];
        }
        else {
          //do nothing
        }
      }
      // varuablus
      for (var i = 0; i < myterf.length; ++i) {
        account[i] = Number(document.getElementById("ram"+i).value);
      }
      // function
      var elemTX1 = document.getElementById("arcramholder");
      var finchline = (myterf.length)-1;
      enarc = 0 ; enarc2 = 0;
      for (var i = 0; i < myterf.length; i++) {
        if (myterf[i] == "power") {
          if (myterf[i-1]=="enarc"&&myterf[i+1]=="starc") {
            var vonst = i+1;
            for (var d = 0; d < vonst; d++) {
              if (myterf[d]=="starc") {
                var starc = d;
              }
            }
            if (starc == 1) {
              var enarc = i-1;
            }
            else {
              var enarc = i-2;
            }
            var myhood = [];
            for (var c = 0; c < myterf.length; c++) {
              myhood[c] = myterf[c]
            }
            var myequa = myhood.splice(starc, enarc);
            document.getElementById('myhood').value = myequa;
            var myequa = document.getElementById('myhood').value;
            for (var v = 0; v < myterf.length; v++) {
              var mytest1 = myequa.replace("plus", "+");
              var mytest2 = mytest1.replace("subt", "-");
              var mytest3 = mytest2.replace("mult", "*");
              var mytest4 = mytest3.replace("divir", "%");
              var mytest5 = mytest4.replace("divi", "/");
              var mytest6 = mytest5.replace("starc", "(");
              var mytest7 = mytest6.replace("enarc", ")");
              var myequa = mytest7.replace("power", "^");
            }
            document.getElementById('myhood').value = myequa;
            for (var f = 0; f < myterf.length; f++) {
              var myequa = document.getElementById('myhood').value;
              myequ1 = myequa.replace(",", " ");
              document.getElementById('myhood').value = myequ1;
            }
            var myequa1 = document.getElementById('myhood').value;
            for (var d = i; d < myterf.length; d++) {
              if (myterf[d]=="enarc") {
                var enarc2 = d;
              }
            }
            if (enarc2 == 0) {
                myterf[myterf.length+1] = ")";
                enarc2 = myterf.length+1;
            }
            var starc2 = i+1;
            var myhood = [];
            var myhood2 = [];
            for (var c = 0; c < myterf.length; c++) {
              myhood2[c] = myterf[c]
            }
            var myequa2 = myhood2.splice(starc2, enarc2);
            document.getElementById('myhood').value = myequa2;
            var myequa2 = document.getElementById('myhood').value;
            for (var v = 0; v < myterf.length; v++) {
              var mytest1 = myequa2.replace("plus", "+");
              var mytest2 = mytest1.replace("subt", "-");
              var mytest3 = mytest2.replace("mult", "*");
              var mytest4 = mytest3.replace("divir", "%");
              var mytest5 = mytest4.replace("divi", "/");
              var mytest6 = mytest5.replace("starc", "(");
              var mytest7 = mytest6.replace("enarc", ")");
              var myequa2 = mytest7.replace("power", "^");
            }
            document.getElementById('myhood').value = myequa2;
            for (var f = 0; f < myterf.length; f++) {
              var myequa2 = document.getElementById('myhood').value;
              myequ11 = myequa2.replace(",", " ");
              document.getElementById('myhood').value = myequ11;
            }
            var myequa11 = document.getElementById('myhood').value;
            var myequa22 = eval(myequa11);
            var myequa2 = eval(myequa1);
            var myequa3 = Math.pow(myequa2, myequa22);
            myterf[starc] = myequa3;
            account[starc] = myequa3;
            starc = starc+1;
            starck = starc-1;
            starsk = starc;
            var myequa4 = myterf.splice(starc, enarc2-1);
            var myequa4 = account.splice(starc, enarc2-1);
            var myequa4 = myterf.splice(starsk, starck);
            var myequa4 = account.splice(starsk, starck);
            document.getElementById('myhood').value = myterf;
          }
          else if (myterf[i-1]=="enarc"&&myterf[i+1]=="subt"&&myterf[i+2]=="starc") {
            var vonst = i+1;
            for (var d = 0; d < vonst; d++) {
              if (myterf[d]=="starc") {
                var starc = d;
              }
            }
            if (starc == 1) {
              var enarc = i-1;
            }
            else {
              var enarc = i-2;
            }
            var myhood = [];
            for (var c = 0; c < myterf.length; c++) {
              myhood[c] = myterf[c]
            }
            var myequa = myhood.splice(starc, enarc);
            document.getElementById('myhood').value = myequa;
            var myequa = document.getElementById('myhood').value;
            for (var v = 0; v < myterf.length; v++) {
              var mytest1 = myequa.replace("plus", "+");
              var mytest2 = mytest1.replace("subt", "-");
              var mytest3 = mytest2.replace("mult", "*");
              var mytest4 = mytest3.replace("divir", "%");
              var mytest5 = mytest4.replace("divi", "/");
              var mytest6 = mytest5.replace("starc", "(");
              var mytest7 = mytest6.replace("enarc", ")");
              var myequa = mytest7.replace("power", "^");
            }
            document.getElementById('myhood').value = myequa;
            for (var f = 0; f < myterf.length; f++) {
              var myequa = document.getElementById('myhood').value;
              myequ1 = myequa.replace(",", " ");
              document.getElementById('myhood').value = myequ1;
            }
            var myequa1 = document.getElementById('myhood').value;
            for (var d = i; d < myterf.length; d++) {
              if (myterf[d]=="enarc") {
                var enarc2 = d;
              }
            }
            if (enarc2 == 0) {
                myterf[myterf.length+1] = ")";
                enarc2 = myterf.length+1;
            }
            var starc2 = i+1;
            var myhood = [];
            var myhood2 = [];
            for (var c = 0; c < myterf.length; c++) {
              myhood2[c] = myterf[c]
            }
            var myequa2 = myhood2.splice(starc2, enarc2);
            document.getElementById('myhood').value = myequa2;
            var myequa2 = document.getElementById('myhood').value;
            for (var v = 0; v < myterf.length; v++) {
              var mytest1 = myequa2.replace("plus", "+");
              var mytest2 = mytest1.replace("subt", "-");
              var mytest3 = mytest2.replace("mult", "*");
              var mytest4 = mytest3.replace("divir", "%");
              var mytest5 = mytest4.replace("divi", "/");
              var mytest6 = mytest5.replace("starc", "(");
              var mytest7 = mytest6.replace("enarc", ")");
              var myequa2 = mytest7.replace("power", "^");
            }
            document.getElementById('myhood').value = myequa2;
            for (var f = 0; f < myterf.length; f++) {
              var myequa2 = document.getElementById('myhood').value;
              myequ11 = myequa2.replace(",", " ");
              document.getElementById('myhood').value = myequ11;
            }
            var myequa11 = document.getElementById('myhood').value;
            var myequa22 = eval(myequa11);
            var myequa2 = eval(myequa1);
            var myequa3 = Math.pow(myequa2, (myequa22));
            myterf[starc] = myequa3;
            account[starc] = myequa3;
            starc = starc+1;
            starck = starc-1;
            starsk = starc;
            var myequa4 = myterf.splice(starc, enarc2-1);
            var myequa4 = account.splice(starc, enarc2-1);
            var myequa4 = myterf.splice(starsk, starck);
            var myequa4 = account.splice(starsk, starck);
            document.getElementById('myhood').value = myterf;
          }
          else if (myterf[i-1]=="enarc") {
            if (myterf[i+1]=="subt") {
              for (var d = 0; d < myterf.length; d++) {
                if (myterf[d]=="starc") {
                  var starc = d;
                }
              }
              if (starc == 1) {
                var enarc = i-1;
              }
              else {
                var enarc = i-2;
              }
              var myhood = [];
              for (var c = 0; c < myterf.length; c++) {
                myhood[c] = myterf[c]
              }
              var myequa = myhood.splice(starc, enarc);

              document.getElementById('myhood').value = myequa;
              var myequa = document.getElementById('myhood').value;
              for (var v = 0; v < myterf.length; v++) {
                var mytest1 = myequa.replace("plus", "+");
                var mytest2 = mytest1.replace("subt", "-");
                var mytest3 = mytest2.replace("mult", "*");
                var mytest4 = mytest3.replace("divir", "%");
                var mytest5 = mytest4.replace("divi", "/");
                var mytest6 = mytest5.replace("starc", "(");
                var mytest7 = mytest6.replace("enarc", ")");
                var myequa = mytest7.replace("power", "^");
              }
              document.getElementById('myhood').value = myequa;
              for (var f = 0; f < myterf.length; f++) {
                var myequa = document.getElementById('myhood').value;
                myequ1 = myequa.replace(",", " ");
                document.getElementById('myhood').value = myequ1;
              }
              var myequa1 = document.getElementById('myhood').value;

              var myequa2 = eval(myequa1);
              var myequa3 = Math.pow(myequa2, (0-account[i+2]));
              myterf[starc] = myequa3;
              account[starc] = myequa3;
              starc = starc+1;
              starck = starc-1;
              starsk = starc;
              var myequa4 = myterf.splice(starc, i+2);
              var myequa4 = account.splice(starc, i+2);
              var myequa4 = myterf.splice(starsk, starck);
              var myequa4 = account.splice(starsk, starck);
              document.getElementById('myhood').value = myterf;
            }
            else {
              for (var d = 0; d < myterf.length; d++) {
                if (myterf[d]=="starc") {
                  var starc = d;
                }
              }
              if (starc == 1) {
                var enarc = i-1;
              }
              else {
                var enarc = i-2;
              }
              var myhood = [];
              for (var c = 0; c < myterf.length; c++) {
                myhood[c] = myterf[c]
              }
              var myequa = myhood.splice(starc, enarc);

              document.getElementById('myhood').value = myequa;
              var myequa = document.getElementById('myhood').value;
              for (var v = 0; v < myterf.length; v++) {
                var mytest1 = myequa.replace("plus", "+");
                var mytest2 = mytest1.replace("subt", "-");
                var mytest3 = mytest2.replace("mult", "*");
                var mytest4 = mytest3.replace("divir", "%");
                var mytest5 = mytest4.replace("divi", "/");
                var mytest6 = mytest5.replace("starc", "(");
                var mytest7 = mytest6.replace("enarc", ")");
                var myequa = mytest7.replace("power", "^");
              }
              document.getElementById('myhood').value = myequa;
              for (var f = 0; f < myterf.length; f++) {
                var myequa = document.getElementById('myhood').value;
                myequ1 = myequa.replace(",", " ");
                document.getElementById('myhood').value = myequ1;
              }
              var myequa1 = document.getElementById('myhood').value;

              var myequa2 = eval(myequa1);
              var myequa3 = Math.pow(myequa2, account[i+1]);
              myterf[starc] = myequa3;
              account[starc] = myequa3;
              starc = starc+1;
              starck = starc-1;
              starsk = starc;
              var myequa4 = myterf.splice(starc, i+1);
              var myequa4 = account.splice(starc, i+1);
              var myequa4 = myterf.splice(starsk, starck);
              var myequa4 = account.splice(starsk, starck);
              document.getElementById('myhood').value = myterf;
            }
          }
          else if (myterf[i+1]=="starc") {
            for (var d = i; d < myterf.length; d++) {
              if (myterf[d]=="enarc") {
                var enarc = d;
              }
            }
            if (enarc == 0) {
                myterf[myterf.length+1] = ")";
                enarc = myterf.length+1;
            }
            var starc = i+1;
            var myhood = [];
            for (var c = 0; c < myterf.length; c++) {
              myhood[c] = myterf[c]
            }
            var myequa = myhood.splice(starc, enarc);

            document.getElementById('myhood').value = myequa;
            var myequa = document.getElementById('myhood').value;
            for (var v = 0; v < myterf.length; v++) {
              var mytest1 = myequa.replace("plus", "+");
              var mytest2 = mytest1.replace("subt", "-");
              var mytest3 = mytest2.replace("mult", "*");
              var mytest4 = mytest3.replace("divir", "%");
              var mytest5 = mytest4.replace("divi", "/");
              var mytest6 = mytest5.replace("starc", "(");
              var mytest7 = mytest6.replace("enarc", ")");
              var myequa = mytest7.replace("power", "^");
            }
            document.getElementById('myhood').value = myequa;
            for (var f = 0; f < myterf.length; f++) {
              var myequa = document.getElementById('myhood').value;
              myequ1 = myequa.replace(",", " ");
              document.getElementById('myhood').value = myequ1;
            }
            var myequa1 = document.getElementById('myhood').value;
            var myequa2 = eval(myequa1);
            var myequa3 = Math.pow(account[i-1], myequa2);
            myterf[starc] = myequa3;
            account[starc] = myequa3;
            starc = starc+1;
            starck = starc-1;
            starsk = starc;
            var myequa4 = myterf.splice(starc, enarc-1);
            var myequa4 = account.splice(starc, enarc-1);
            var myequa4 = myterf.splice(i-1, starck);
            var myequa4 = account.splice(i-1, starck);
            document.getElementById('myhood').value = myterf;

          }
          else if (myterf[i+1]=="subt") {
            if (myterf[i+2]=="starc") {
              for (var d = i; d < myterf.length; d++) {
                if (myterf[d]=="enarc") {
                  var enarc = d;
                }
              }
              if (enarc == 0) {
                  myterf[myterf.length+1] = ")";
                  enarc = myterf.length+1;
                }
              var starc = i+1;
              var myhood = [];
              for (var c = 0; c < myterf.length; c++) {
                myhood[c] = myterf[c]
              }
              var myequa = myhood.splice(starc, enarc);
              document.getElementById('myhood').value = myequa;
              var myequa = document.getElementById('myhood').value;
              for (var v = 0; v < myterf.length; v++) {
                var mytest1 = myequa.replace("plus", "+");
                var mytest2 = mytest1.replace("subt", "-");
                var mytest3 = mytest2.replace("mult", "*");
                var mytest4 = mytest3.replace("divir", "%");
                var mytest5 = mytest4.replace("divi", "/");
                var mytest6 = mytest5.replace("starc", "(");
                var mytest7 = mytest6.replace("enarc", ")");
                var myequa = mytest7.replace("power", "^");
              }
              document.getElementById('myhood').value = myequa;
              for (var f = 0; f < myterf.length; f++) {
                var myequa = document.getElementById('myhood').value;
                myequ1 = myequa.replace(",", " ");
                document.getElementById('myhood').value = myequ1;
              }
              var myequa1 = document.getElementById('myhood').value;
              var myequa2 = eval(myequa1);
              var myequa3 = Math.pow(account[i-1], (myequa2));
              myterf[starc] = myequa3;
              account[starc] = myequa3;
              starc = starc+1;
              starck = starc-1;
              starsk = starc;
              var myequa4 = myterf.splice(starc, enarc-1);
              var myequa4 = account.splice(starc, enarc-1);
              var myequa4 = myterf.splice(i-1, starck);
              var myequa4 = account.splice(i-1, starck);
              document.getElementById('myhood').value = myterf;

            }
            else {
              var myequa3 = Math.pow(account[i-1], (0-myterf[i+2]));
              myterf[i-1] = myequa3;
              account[i-1] = myequa3;
              var myequa4 = myterf.splice(i, i+1);
              var myequa4 = account.splice(i, i+1);
              document.getElementById('myhood').value = myterf;

            }
          }
          else if (true) {
            var myequa3 = Math.pow(account[i-1], account[i+1]);
            myterf[i-1] = myequa3;
            account[i-1] = myequa3;
            var myequa4 = myterf.splice(i, i+1);
            var myequa4 = account.splice(i, i+1);
            document.getElementById('myhood').value = myterf;


          }
        }
      }
      //resulte
      document.getElementById('myhood').value = myterf;
      var myequa = document.getElementById('myhood').value;
      for (var v = 0; v < myterf.length; v++) {
        var mytest1 = myequa.replace("plus", "+");
        var mytest2 = mytest1.replace("subt", "-");
        var mytest3 = mytest2.replace("mult", "*");
        var mytest4 = mytest3.replace("divir", "%");
        var mytest5 = mytest4.replace("divi", "/");
        var mytest6 = mytest5.replace("starc", "(");
        var mytest7 = mytest6.replace("enarc", ")");
        var myequa = mytest7.replace("power", "^");
      }
      document.getElementById('myhood').value = myequa;
      for (var f = 0; f < myterf.length; f++) {
        var myequa = document.getElementById('myhood').value;
        myequ1 = myequa.replace(",", " ");
        document.getElementById('myhood').value = myequ1;
      }
      var myequa1 = document.getElementById('myhood').value;
      var undefinedconter = 1;
      if (inputXY == "") {
        accountXX = "";
      }
      else {
        var checkequa = myequa1.split(" ");
        var checknumtwo = checkequa.length;
        if (checknumtwo>1) {
          for (var i = 0; i < checkequa.length; i++) {
            if (checkequa[i]=="+"||checkequa[i]=="-"||checkequa[i]=="*"||checkequa[i]=="%"
              ||checkequa[i]=="/"||checkequa[i]=="^") {
                if (checkequa[i+1]!="+"&&checkequa[i+1]!="-"&&checkequa[i+1]!="*"&&checkequa[i+1]!="%"
                  &&checkequa[i+1]!="/"&&checkequa[i+1]!="^"&&checkequa[i+1]!=""&&checkequa[i+1]!="undefined"&&checkequa[i+1]!=undefined) {
                  undefinedconter+=1;
                }
                else {
                  if (checkequa[i+2]!="+"&&checkequa[i+2]!="-"&&checkequa[i+2]!="*"&&checkequa[i+2]!="%"
                  &&checkequa[i+2]!="/"&&checkequa[i+2]!="^"&&checkequa[i+2]!=""&&checkequa[i+2]!="undefined"&&checkequa[i+2]!=undefined) {
                    undefinedconter+=1;
                  }
                  else {
                    undefinedconter-=1;
                  }
                }
                if (checkequa[i-1]!="+"&&checkequa[i-1]!="-"&&checkequa[i-1]!="*"&&checkequa[i-1]!="%"
                  &&checkequa[i-1]!="/"&&checkequa[i-1]!="^"&&checkequa[i-1]!=""&&checkequa[i-1]!="undefined"&&checkequa[i-1]!=undefined) {
                  undefinedconter+=1;
                }
                else {
                  if (checkequa[i-2]!="+"&&checkequa[i-2]!="-"&&checkequa[i-2]!="*"&&checkequa[i-2]!="%"
                  &&checkequa[i-2]!="/"&&checkequa[i-2]!="^"&&checkequa[i-2]!=""&&checkequa[i-2]!="undefined"&&checkequa[i-2]!=undefined) {
                    undefinedconter+=1;
                  }
                  else {
                    undefinedconter-=1;
                  }
                }
            }
          }
        }
        else {
          undefinedconter = 3;
        }
        if (undefinedconter>2) {
          accountXX = eval(myequa1);
        }
        else {
          accountXX = "undefined";
        }
      }
      var myremovcount = myARRAy.split(" ");
      var newelemX = document.createElement("div");
      var paraX = document.createElement("p");
      if (accountXX=="undefined"||accountXX==undefined) {
        accountXX="Sorry didn't get that right";
      }
      else {
        accountXX = "The Answer is : " + accountXX;
      }
      var nodeedX = document.createTextNode(accountXX);
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
      var check = document.getElementById('chatbox');
      if (check.style.display == "none") {
        document.getElementById('monterX').click();
      }
      else {

      }
      for (var i = 0; i < myremovcount.length; i++) {
        var elementD = document.getElementById("ram"+i);
        elementD.remove();
      }
      document.getElementById("colcon2").value = "";
    }
    else {
      var stringfunction = "" ;
      var dictunar = ["divided","multiplied","subtracted","divide","multiple","plus","subtract","by","and"];
      var spichecker = inputX.split(" ");
      var itsequation = 0;
      for (var i = 0; i < spichecker.length; i++) {
        for (var g = 0; g < dictunar.length; g++) {
          if (spichecker[i] == dictunar[g]) {
            itsequation = 1;
          }
        }
      }
      if (itsequation == 1) {
        for (var i = 0; i < spichecker.length; i++) {
          for (var d = 0; d < dictunar.length; d++) {
            if (spichecker[i] == dictunar[d]) {
              if (spichecker[i-1] != "" &&spichecker[i-1] != "undefined") {
                if (spichecker[i] == "divide") {
                  stringfunction = spichecker[i+1] + "/" + spichecker[i+3];
                }
                else if (spichecker[i] == "multiple") {
                  stringfunction = spichecker[i+1] + "*" + spichecker[i+3];
                }
                else if (spichecker[i] == "plus") {
                  stringfunction = spichecker[i+1] + "+" + spichecker[i+3];
                }
                else if (spichecker[i] == "subtract") {
                  stringfunction = spichecker[i+1] + "-" + spichecker[i+3];
                }
              }
              else {
                //
              }
              accountXX = eval(stringfunction);
              var newelemX = document.createElement("div");
              var paraX = document.createElement("p");
              if (accountXX=="undefined"||accountXX==undefined) {
                accountXX="Sorry didn't get that right";
              }
              else {
                accountXX = "The Answer is : " + accountXX;
              }
              var nodeedX = document.createTextNode(accountXX);
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
              var check = document.getElementById('chatbox');
              if (check.style.display == "none") {
                document.getElementById('monterX').click();
              }
              else {
                //
              }
            }
          }
        }
        document.getElementById("colcon2").value = "";
      }
      else {
        var ava = inputX.trim();
        var aviiva = ava.toUpperCase();
        if (aviiva == "OPEN CALCULATOR"||aviiva == "CALCULATOR") {
          calculator('cal')
          onit("Try Mega Calculator it's much powerful then chat calculator, the same for Mega Convertor")
        }
        else if (aviiva == "OPEN CONVERTER" ||aviiva == "UNIT CONVERTER"||aviiva == "CONVERTER") {
          calculator('con')
          onit("Try Mega Calculator it's much powerful then chat calculator, the same for Mega Convertor")
        }
        else if (aviiva == "OPEN GOOGLE" ||aviiva == "GOOGLE") {
          home.style.display = "none";
          spidra.style.display = "block";
          onit();openitems('google')
        }
        else if (aviiva == "OPEN SPOTIFY" ||aviiva == "SPOTIFY") {
          home.style.display = "none";
          spidra.style.display = "block";
          onit();openitems('spotify')
        }
        else if (aviiva == "OPEN YOUTUBE" ||aviiva == "YOUTUBE") {
          home.style.display = "none";
          spidra.style.display = "block";
          onit();openitems('youtube')
        }
        else if (aviiva == "OPEN MEDIA PLAYER" ||aviiva == "MEDIA PLAYER") {
          home.style.display = "none";
          spidra.style.display = "block";
          onit()
          mediaplayer()
        }
        else if (aviiva == "OPEN MEGA CALCULATOR" ||aviiva == "MEGA CALCULATOR") {
          home.style.display = "none";
          spidra.style.display = "block";
          onit()
          megacalculator('cal')
        }
        else if (aviiva == "OPEN MEGA CONVERTER" ||aviiva == "MEGA CONVERTER") {
          home.style.display = "none";
          spidra.style.display = "block";
          onit()
          megacalculator('con')
        }
        else if (aviiva == "OPEN SETTINGS" ||aviiva == "SETTINGS") {
          home.style.display = "none";
          spidra.style.display = "block";
          onit();openitems('settings')
        }
        else if (aviiva == "OPEN GAMES" ||aviiva == "GAMES") {
          home.style.display = "none";
          spidra.style.display = "block";
          onit();openitems('games')
        }
        else if (aviiva == "OPEN SPIDRA" ||aviiva == "SPIDRA"||aviiva == "SWITCH SPIDRA"||aviiva == "SWITCH TO SPIDRA") {
          spidratertoty('spidra')
        }
        else if (aviiva == "OPEN HOME" ||aviiva == "HOME"||aviiva == "SWITCH HOME"||aviiva == "SWITCH TO HOME") {
          spidratertoty('home')
        }
        else if (aviiva=="TELL ME JOKES"||aviiva=="JOKES"||aviiva=="TELL ME JOKE"||aviiva=="TELL ME A JOKE"||aviiva=="JOKE") {
          jokesever()
        }
        else if (aviiva=="OPEN MIMO"||aviiva=="MIMO"||aviiva=="OPEN NOTE"||aviiva=="OPEN NOTES"||aviiva=="NOTE"||aviiva=="NOTES") {
          onit();mimoopen();
        }
        else if (aviiva=="WHAT TIME IT'S"||aviiva=="WHAT TIME IT IS"||aviiva=="TIME"||aviiva=="DATE"||aviiva=="WHAT IS THE TIME"||aviiva=="WHAT IS TIME"||
                aviiva=="WHAT DATE IT'S"||aviiva=="WHAT DATE IT IS"||aviiva=="MONTH"||aviiva=="DAY"||aviiva=="WHAT IS THE DATE"||aviiva=="WHAT IS DATE"||
                aviiva=="WHAT DAY IT'S"||aviiva=="WHAT DAY IT IS"||aviiva=="YEAR"||aviiva=="WHAT IS THE DAY"||aviiva=="WHAT IS DAY"||
                aviiva=="WHAT MONTH IT'S"||aviiva=="WHAT MONTH IT IS"||aviiva=="WHAT IS THE MONTH"||aviiva=="WHAT IS MONTH"||aviiva=="WHAT DATE IT'S"
                ||aviiva=="WHAT YEAR IT IS"||aviiva=="WHAT IS THE YEAR"||aviiva=="WHAT IS YEAR") {
          const newelem = document.createElement("div")
          const para = document.createElement("p");
          para.innerHTML = timeforchat;
          para.classList.add("replaytext");
          para.setAttribute('name', 'replaytext')
          var tochattext = document.getElementById('tochattext').value;
          var colorarea3 = document.getElementById('colorarea3').value;
          para.style.backgroundColor = colorarea3;
          para.style.border = tochattext;
          newelem.classList.add("chatout");
          newelem.appendChild(para);
          const element = document.getElementById("chatcontent");
          element.appendChild(newelem);
          element.scrollTop = element.scrollHeight;
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
        }
        else if (aviiva == "افتح الة الحاسبة"||aviiva == "الة الحاسبة") {
          calculator('cal')
        }
        else if (aviiva == "افتح محول" ||aviiva == "محول الوحدات"||aviiva == "محول") {
          calculator('con')
        }
        else if (aviiva == "افتح قوقل" ||aviiva == "قوقل") {
          home.style.display = "none";
          spidra.style.display = "block";
          onit();openitems('google')
        }
        else if (aviiva == "افتح سبوتيفاي" ||aviiva == "سبوتيفاي") {
          home.style.display = "none";
          spidra.style.display = "block";
          onit();openitems('spotify')
        }
        else if (aviiva == "افتح يوتيوب" ||aviiva == "يوتيوب") {
          home.style.display = "none";
          spidra.style.display = "block";
          onit();openitems('youtube')
        }
        else if (aviiva == "افتح مشغل الوسائط" ||aviiva == "مشغل الوسائط") {
          home.style.display = "none";
          spidra.style.display = "block";
          onit()
          mediaplayer()
        }
        else if (aviiva == "افتح  الة الحاسبة الخارقة" ||aviiva == "الة الحاسبةالخارقة") {
          home.style.display = "none";
          spidra.style.display = "block";
          onit()
          megacalculator('cal')
        }
        else if (aviiva == "افتح  محول الخارق" ||aviiva == "محول الخارق") {
          home.style.display = "none";
          spidra.style.display = "block";
          onit()
          megacalculator('con')
        }
        else if (aviiva == "افتح الاعدادات" ||aviiva == "الاعدادات") {
          home.style.display = "none";
          spidra.style.display = "block";
          onit();openitems('settings')
        }
        else if (aviiva == "افتح الالعاب" ||aviiva == "الالعاب") {
          home.style.display = "none";
          spidra.style.display = "block";
          onit();openitems('games')
        }
        else if (aviiva=="قل لي نكات"||aviiva=="نكات"||aviiva=="قل لي نكة"||aviiva=="نكة") {
          jokesever()
        }
        else {
          chatspidra()
        }
      }
    }
  }
  document.getElementById("colcon2").value = "";
}
//settings
function setti() {
  var chekset = document.getElementById('setholder');
  var tobuttonop = document.getElementById('tobuttonop').value;
  if (chekset.style.display == "none") {
    document.getElementById("setholder").classList.remove('setclose');
    document.getElementById('setholder').classList.add('setopen');
    document.getElementById('setholder').style.display = "block";
    document.getElementById('timehome').style.display = "block";
    var fgh = setTimeout(function() {
      document.getElementById('picturetogle').style.display = "block";
    }, 250);
  }
  else {
    document.getElementById("setholder").classList.remove('setopen');
    document.getElementById('setholder').classList.add('setclose');
    document.getElementById('timehome').style.display = "none";
    var j = setTimeout(function() {
      document.getElementById('setholder').style.display = "none";
    }, 300);
    var j = setTimeout(function() {
      document.getElementById('picturetogle').style.display = "none";
    }, 170);
  }
  document.getElementById('setholder').style.border = tobuttonop;
}
//color set
function setcolorX(vi) {
  var tochattext = document.getElementById('tochattext').value;
  var colorarea3 = document.getElementById('colorarea3').value;
  var colorarea2 = document.getElementById('colorarea2').value;
  var l11 = document.getElementsByClassName('replaytext');
  var l22 = document.getElementsByClassName('chatintext');
  var toch2 = (l22.length) ;
  var toch3 = (l11.length) ;
  if (vi == "task") {
    var sitecheckbox = document.getElementById('sitecheckbox');
    if (sitecheckbox.checked==true) {
      window.localStorage.setItem("colorarea2", colorarea2)
    }
    for (var i = 0; i < toch2; i++) {
        if (colorarea2 != "") {
          l22[i].style.backgroundColor = colorarea2;
        }
    }
  }
  else if (vi == "replay") {
    for (var i = 0; i < toch3; i++) {
        //if (colorarea2 != "") {
        //  l22[i].style.backgroundColor = colorarea2;
        //}
        var sitecheckbox = document.getElementById('sitecheckbox');
        if (sitecheckbox.checked==true) {
          window.localStorage.setItem("colorarea3", colorarea3)
        }
        if (colorarea3 != "") {
          l11[i].style.backgroundColor = colorarea3;
        }
    }
  }
  else if (vi == "noreason") {
    var sitecheckbox = document.getElementById('sitecheckbox');
    if (sitecheckbox.checked==true) {
      window.localStorage.setItem("tochattext", tochattext)
    }
    for (var i = 0; i < l11.length; i++) {
      l11[i].style.border = tochattext;
      l22[i].style.border = tochattext;
    }
  }
}
//search bar
function searchpot() {
  var fd = document.getElementById('serchresoltII');
  var input, filter, ul, li, a, i;
  input = document.getElementById("search");
  inputX = document.getElementById("search").value;
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  var df = document.getElementById('serchholder');
  var fh = document.getElementById('serchresolt');
  var xX = df.offsetLeft;
  var yY = df.offsetTop;
  var semhr1 = document.getElementById('iframeholder');
  if (semhr1.style.display == "none") {
    fh.style.position = "absolute";
    fh.style.marginLeft= "auto";
    fh.style.marginRight= "auto";
    fh.style.paddingTop = 0+"px";
    fh.style.top = yY-22.5+"px";
  }
  else {
    fh.style.position = "absolute";
    fh.style.marginLeft= "auto";
    fh.style.marginRight= "auto";
    fh.style.paddingTop = 0+"px";
    fh.style.top = yY-22.5+"px";
  }
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      fd.style.display = "inline-block";
      li[i].style.display = "block";
    }
    else {
      fd.style.display = "inline-block";
      li[i].style.display = "none";
    }
    if (inputX == "") {
      fd.style.display = "none";
      li[i].style.display = "none";
    }
    else {
      // do nothing
    }
    var countrem = li.length;
  }
}
function changset() {
  var inputX = document.getElementById("search").value;
  var midnightcount = inputX.split("");
  for (var i = 0; i < midnightcount.length; i++) {
    var puresentence = inputX.replace("*", "")
    var puresentence1 = puresentence.replace("/", "")
    var puresentence2 = puresentence1.replace("+", "")
    var puresentence3 = puresentence2.replace("-", "")
    var puresentence4 = puresentence3.replace("%", "")
    var puresentence5 = puresentence4.replace("(", "0")
    var puresentence6 = puresentence5.replace(")", "0")
    var puresentence7 = puresentence6.replace("^", "")
    var inputX = puresentence7.trim()
  }
  if (isNaN(inputX) == true) {
    var isnonumb = 1;
  }
  else {
    var isnonumb = 0;
  }
  if (inputX == "") {
    //
  }
  else {
    if (isnonumb == 0) {
      document.getElementById('outser').style.display = "block";
      document.getElementById('hdoutser').style.display = "block";
      document.getElementById('outsernon').style.display = "none";
      document.getElementById('hdoutsernon').style.display = "none";
      var multX =0;
      var account = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
      var arcst = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
      var arcen = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
      var checkP = 0;
      var checkM = 0;
      var inputXYX = document.getElementById('search').value;
      document.getElementById('RamX').value = inputXYX;
      const thisit = inputXYX.split("");
      for (var i = 0; i < thisit.length; i++) {
        var ram = document.getElementById('RamX').value;
        var inputX = ram.replace(" ", "");
        document.getElementById('RamX').value = inputX;
      }
      document.getElementById('RamZ').value = inputX;
      for (var i = 0; i < thisit.length; i++) {
        var ram = document.getElementById('RamZ').value;
        const myArray = ram.replace("+", " plus ");
        const myARray = myArray.replace("-", " subt ");
        const myARRay = myARray.replace("*", " mult ");
        const myARRAY1 = myARRay.replace("/", " divi ");
        const myARRAY2 = myARRAY1.replace("(", " starc ");
        const myARRAY3 = myARRAY2.replace(")", " enarc ");
        const myARRAY4 = myARRAY3.replace("^", " power ");
        const myARRAY = myARRAY4.replace("%", " divir ");
        document.getElementById('RamZ').value = myARRAY;
      }
      var myARRAY = document.getElementById('RamZ').value;
      document.getElementById('RamY').value = myARRAY;
      var accountXX = 0 ;
      //Ram
      const str = myARRAY.split(" ");
      for (i = 0; i < str.length; i++) {
        var ram = document.getElementById('RamY').value;
        var myARRAy = ram.replace("  ", " ");
        document.getElementById('RamY').value = myARRAy;
      }
      const checkterf = myARRAy.split(" ");
      for (var i = 0; i < str.length; i++) {
        if (checkterf[i] == checkterf[i+1]) {
          if (checkterf[i] == "multi") {
            var myARRAy = myARRAy.replace(" multi multi ", " multi ");
          }
          else if (checkterf[i] == "divi") {
            var myARRAy = myARRAy.replace(" divi divi ", " divi ");
          }
          else if (checkterf[i] == "plus") {
            var myARRAy = myARRAy.replace(" plus plus ", " plus ");
          }
          else if (checkterf[i] == "subt") {
            var myARRAy = myARRAy.replace(" subt subt ", " subt ");
          }
          else if (checkterf[i] == "starc") {
            var myARRAy = myARRAy.replace(" starc starc ", " starc ");
          }
          else if (checkterf[i] == "enarc") {
            var myARRAy = myARRAy.replace(" enarc enarc ", " enarc ");
          }
          else if (checkterf[i] == "power") {
            var myARRAy = myARRAy.replace(" power power ", " power ");
          }
          else if (checkterf[i] == "divir") {
            var myARRAy = myARRAy.replace(" divir divir ", " divir ");
          }
        }
      }
      const nytrf = myARRAy.trim();
      const myterf = myARRAy.split(" ");
      var x=myterf.length;
      var arccheckst = 0;
      var arcchecken = 0;
      for (i = 0; i < myterf.length; i++) {

        if (myterf[i]!="mult" || myterf[i] != "subt" || myterf[i] != "plus" || myterf[i] != "divi") {
          var input = document.createElement("input");
          input.type = "text";
          input.id = "ram"+i;
          var myArra = document.createTextNode(myterf[i]);
          input.appendChild(myArra);
          var elemT = document.getElementById("ramholder");
          elemT.appendChild(input);
          document.getElementById("ram"+i).value = myterf[i];
        }
        else {
          //do nothing
        }
      }
      // varuablus
      for (var i = 0; i < myterf.length; ++i) {
        account[i] = Number(document.getElementById("ram"+i).value);
      }
      // function
      var elemTX1 = document.getElementById("arcramholder");
      var finchline = (myterf.length)-1;
      for (var i = 0; i < myterf.length; i++) {
        if (myterf[i] == "power") {
          if (myterf[i-1]=="enarc"&&myterf[i+1]=="starc") {
            var vonst = i+1;
            for (var d = 0; d < vonst; d++) {
              if (myterf[d]=="starc") {
                var starc = d;
              }
            }
            if (starc == 1) {
              var enarc = i-1;
            }
            else {
              var enarc = i-2;
            }
            var myhood = [];
            for (var c = 0; c < myterf.length; c++) {
              myhood[c] = myterf[c]
            }
            var myequa = myhood.splice(starc, enarc);
            document.getElementById('myhood').value = myequa;
            var myequa = document.getElementById('myhood').value;
            for (var v = 0; v < myterf.length; v++) {
              var mytest1 = myequa.replace("plus", "+");
              var mytest2 = mytest1.replace("subt", "-");
              var mytest3 = mytest2.replace("mult", "*");
              var mytest4 = mytest3.replace("divir", "%");
              var mytest5 = mytest4.replace("divi", "/");
              var mytest6 = mytest5.replace("starc", "(");
              var mytest7 = mytest6.replace("enarc", ")");
              var myequa = mytest7.replace("power", "^");
            }
            document.getElementById('myhood').value = myequa;
            for (var f = 0; f < myterf.length; f++) {
              var myequa = document.getElementById('myhood').value;
              myequ1 = myequa.replace(",", " ");
              document.getElementById('myhood').value = myequ1;
            }
            var myequa1 = document.getElementById('myhood').value;
            for (var d = i; d < myterf.length; d++) {
              if (myterf[d]=="enarc") {
                var enarc2 = d;
              }
            }
            if (enarc2 == 0) {
                myterf[myterf.length+1] = ")";
                enarc2 = myterf.length+1;
            }
            var starc2 = i+1;
            var myhood = [];
            var myhood2 = [];
            for (var c = 0; c < myterf.length; c++) {
              myhood2[c] = myterf[c]
            }
            var myequa2 = myhood2.splice(starc2, enarc2);
            document.getElementById('myhood').value = myequa2;
            var myequa2 = document.getElementById('myhood').value;
            for (var v = 0; v < myterf.length; v++) {
              var mytest1 = myequa2.replace("plus", "+");
              var mytest2 = mytest1.replace("subt", "-");
              var mytest3 = mytest2.replace("mult", "*");
              var mytest4 = mytest3.replace("divir", "%");
              var mytest5 = mytest4.replace("divi", "/");
              var mytest6 = mytest5.replace("starc", "(");
              var mytest7 = mytest6.replace("enarc", ")");
              var myequa2 = mytest7.replace("power", "^");
            }
            document.getElementById('myhood').value = myequa2;
            for (var f = 0; f < myterf.length; f++) {
              var myequa2 = document.getElementById('myhood').value;
              myequ11 = myequa2.replace(",", " ");
              document.getElementById('myhood').value = myequ11;
            }
            var myequa11 = document.getElementById('myhood').value;
            var myequa22 = eval(myequa11);
            var myequa2 = eval(myequa1);
            var myequa3 = Math.pow(myequa2, myequa22);
            myterf[starc] = myequa3;
            account[starc] = myequa3;
            starc = starc+1;
            starck = starc-1;
            starsk = starc;
            var myequa4 = myterf.splice(starc, enarc2-1);
            var myequa4 = account.splice(starc, enarc2-1);
            var myequa4 = myterf.splice(starsk, starck);
            var myequa4 = account.splice(starsk, starck);
            document.getElementById('myhood').value = myterf;
          }
          else if (myterf[i-1]=="enarc"&&myterf[i+1]=="subt"&&myterf[i+2]=="starc") {
            var vonst = i+1;
            for (var d = 0; d < vonst; d++) {
              if (myterf[d]=="starc") {
                var starc = d;
              }
            }
            if (starc == 1) {
              var enarc = i-1;
            }
            else {
              var enarc = i-2;
            }
            var myhood = [];
            for (var c = 0; c < myterf.length; c++) {
              myhood[c] = myterf[c]
            }
            var myequa = myhood.splice(starc, enarc);
            document.getElementById('myhood').value = myequa;
            var myequa = document.getElementById('myhood').value;
            for (var v = 0; v < myterf.length; v++) {
              var mytest1 = myequa.replace("plus", "+");
              var mytest2 = mytest1.replace("subt", "-");
              var mytest3 = mytest2.replace("mult", "*");
              var mytest4 = mytest3.replace("divir", "%");
              var mytest5 = mytest4.replace("divi", "/");
              var mytest6 = mytest5.replace("starc", "(");
              var mytest7 = mytest6.replace("enarc", ")");
              var myequa = mytest7.replace("power", "^");
            }
            document.getElementById('myhood').value = myequa;
            for (var f = 0; f < myterf.length; f++) {
              var myequa = document.getElementById('myhood').value;
              myequ1 = myequa.replace(",", " ");
              document.getElementById('myhood').value = myequ1;
            }
            var myequa1 = document.getElementById('myhood').value;
            for (var d = i; d < myterf.length; d++) {
              if (myterf[d]=="enarc") {
                var enarc2 = d;
              }
            }
            if (enarc2 == 0) {
                myterf[myterf.length+1] = ")";
                enarc2 = myterf.length+1;
            }
            var starc2 = i+1;
            var myhood = [];
            var myhood2 = [];
            for (var c = 0; c < myterf.length; c++) {
              myhood2[c] = myterf[c]
            }
            var myequa2 = myhood2.splice(starc2, enarc2);
            document.getElementById('myhood').value = myequa2;
            var myequa2 = document.getElementById('myhood').value;
            for (var v = 0; v < myterf.length; v++) {
              var mytest1 = myequa2.replace("plus", "+");
              var mytest2 = mytest1.replace("subt", "-");
              var mytest3 = mytest2.replace("mult", "*");
              var mytest4 = mytest3.replace("divir", "%");
              var mytest5 = mytest4.replace("divi", "/");
              var mytest6 = mytest5.replace("starc", "(");
              var mytest7 = mytest6.replace("enarc", ")");
              var myequa2 = mytest7.replace("power", "^");
            }
            document.getElementById('myhood').value = myequa2;
            for (var f = 0; f < myterf.length; f++) {
              var myequa2 = document.getElementById('myhood').value;
              myequ11 = myequa2.replace(",", " ");
              document.getElementById('myhood').value = myequ11;
            }
            var myequa11 = document.getElementById('myhood').value;
            var myequa22 = eval(myequa11);
            var myequa2 = eval(myequa1);
            var myequa3 = Math.pow(myequa2, (myequa22));
            myterf[starc] = myequa3;
            account[starc] = myequa3;
            starc = starc+1;
            starck = starc-1;
            starsk = starc;
            var myequa4 = myterf.splice(starc, enarc2-1);
            var myequa4 = account.splice(starc, enarc2-1);
            var myequa4 = myterf.splice(starsk, starck);
            var myequa4 = account.splice(starsk, starck);
            document.getElementById('myhood').value = myterf;
          }
          else if (myterf[i-1]=="enarc") {
            if (myterf[i+1]=="subt") {
              for (var d = 0; d < myterf.length; d++) {
                if (myterf[d]=="starc") {
                  var starc = d;
                }
              }
              if (starc == 1) {
                var enarc = i-1;
              }
              else {
                var enarc = i-2;
              }
              var myhood = [];
              for (var c = 0; c < myterf.length; c++) {
                myhood[c] = myterf[c]
              }
              var myequa = myhood.splice(starc, enarc);

              document.getElementById('myhood').value = myequa;
              var myequa = document.getElementById('myhood').value;
              for (var v = 0; v < myterf.length; v++) {
                var mytest1 = myequa.replace("plus", "+");
                var mytest2 = mytest1.replace("subt", "-");
                var mytest3 = mytest2.replace("mult", "*");
                var mytest4 = mytest3.replace("divir", "%");
                var mytest5 = mytest4.replace("divi", "/");
                var mytest6 = mytest5.replace("starc", "(");
                var mytest7 = mytest6.replace("enarc", ")");
                var myequa = mytest7.replace("power", "^");
              }
              document.getElementById('myhood').value = myequa;
              for (var f = 0; f < myterf.length; f++) {
                var myequa = document.getElementById('myhood').value;
                myequ1 = myequa.replace(",", " ");
                document.getElementById('myhood').value = myequ1;
              }
              var myequa1 = document.getElementById('myhood').value;

              var myequa2 = eval(myequa1);
              var myequa3 = Math.pow(myequa2, (0-account[i+2]));
              myterf[starc] = myequa3;
              account[starc] = myequa3;
              starc = starc+1;
              starck = starc-1;
              starsk = starc;
              var myequa4 = myterf.splice(starc, i+2);
              var myequa4 = account.splice(starc, i+2);
              var myequa4 = myterf.splice(starsk, starck);
              var myequa4 = account.splice(starsk, starck);
              document.getElementById('myhood').value = myterf;
            }
            else {
              for (var d = 0; d < myterf.length; d++) {
                if (myterf[d]=="starc") {
                  var starc = d;
                }
              }
              if (starc == 1) {
                var enarc = i-1;
              }
              else {
                var enarc = i-2;
              }
              var myhood = [];
              for (var c = 0; c < myterf.length; c++) {
                myhood[c] = myterf[c]
              }
              var myequa = myhood.splice(starc, enarc);

              document.getElementById('myhood').value = myequa;
              var myequa = document.getElementById('myhood').value;
              for (var v = 0; v < myterf.length; v++) {
                var mytest1 = myequa.replace("plus", "+");
                var mytest2 = mytest1.replace("subt", "-");
                var mytest3 = mytest2.replace("mult", "*");
                var mytest4 = mytest3.replace("divir", "%");
                var mytest5 = mytest4.replace("divi", "/");
                var mytest6 = mytest5.replace("starc", "(");
                var mytest7 = mytest6.replace("enarc", ")");
                var myequa = mytest7.replace("power", "^");
              }
              document.getElementById('myhood').value = myequa;
              for (var f = 0; f < myterf.length; f++) {
                var myequa = document.getElementById('myhood').value;
                myequ1 = myequa.replace(",", " ");
                document.getElementById('myhood').value = myequ1;
              }
              var myequa1 = document.getElementById('myhood').value;

              var myequa2 = eval(myequa1);
              var myequa3 = Math.pow(myequa2, account[i+1]);
              myterf[starc] = myequa3;
              account[starc] = myequa3;
              starc = starc+1;
              starck = starc-1;
              starsk = starc;
              var myequa4 = myterf.splice(starc, i+1);
              var myequa4 = account.splice(starc, i+1);
              var myequa4 = myterf.splice(starsk, starck);
              var myequa4 = account.splice(starsk, starck);
              document.getElementById('myhood').value = myterf;
            }
          }
          else if (myterf[i+1]=="starc") {
            for (var d = i; d < myterf.length; d++) {
              if (myterf[d]=="enarc") {
                var enarc = d;
              }
            }
            if (enarc == 0) {
                myterf[myterf.length+1] = ")";
                enarc = myterf.length+1;
            }
            var starc = i+1;
            var myhood = [];
            for (var c = 0; c < myterf.length; c++) {
              myhood[c] = myterf[c]
            }
            var myequa = myhood.splice(starc, enarc);

            document.getElementById('myhood').value = myequa;
            var myequa = document.getElementById('myhood').value;
            for (var v = 0; v < myterf.length; v++) {
              var mytest1 = myequa.replace("plus", "+");
              var mytest2 = mytest1.replace("subt", "-");
              var mytest3 = mytest2.replace("mult", "*");
              var mytest4 = mytest3.replace("divir", "%");
              var mytest5 = mytest4.replace("divi", "/");
              var mytest6 = mytest5.replace("starc", "(");
              var mytest7 = mytest6.replace("enarc", ")");
              var myequa = mytest7.replace("power", "^");
            }
            document.getElementById('myhood').value = myequa;
            for (var f = 0; f < myterf.length; f++) {
              var myequa = document.getElementById('myhood').value;
              myequ1 = myequa.replace(",", " ");
              document.getElementById('myhood').value = myequ1;
            }
            var myequa1 = document.getElementById('myhood').value;
            var myequa2 = eval(myequa1);
            var myequa3 = Math.pow(account[i-1], myequa2);
            myterf[starc] = myequa3;
            account[starc] = myequa3;
            starc = starc+1;
            starck = starc-1;
            starsk = starc;
            var myequa4 = myterf.splice(starc, enarc-1);
            var myequa4 = account.splice(starc, enarc-1);
            var myequa4 = myterf.splice(i-1, starck);
            var myequa4 = account.splice(i-1, starck);
            document.getElementById('myhood').value = myterf;

          }
          else if (myterf[i+1]=="subt") {
            if (myterf[i+2]=="starc") {
              for (var d = i; d < myterf.length; d++) {
                if (myterf[d]=="enarc") {
                  var enarc = d;
                }
              }
              if (enarc == 0) {
                  myterf[myterf.length+1] = ")";
                  enarc = myterf.length+1;
                }
              var starc = i+1;
              var myhood = [];
              for (var c = 0; c < myterf.length; c++) {
                myhood[c] = myterf[c]
              }
              var myequa = myhood.splice(starc, enarc);
              document.getElementById('myhood').value = myequa;
              var myequa = document.getElementById('myhood').value;
              for (var v = 0; v < myterf.length; v++) {
                var mytest1 = myequa.replace("plus", "+");
                var mytest2 = mytest1.replace("subt", "-");
                var mytest3 = mytest2.replace("mult", "*");
                var mytest4 = mytest3.replace("divir", "%");
                var mytest5 = mytest4.replace("divi", "/");
                var mytest6 = mytest5.replace("starc", "(");
                var mytest7 = mytest6.replace("enarc", ")");
                var myequa = mytest7.replace("power", "^");
              }
              document.getElementById('myhood').value = myequa;
              for (var f = 0; f < myterf.length; f++) {
                var myequa = document.getElementById('myhood').value;
                myequ1 = myequa.replace(",", " ");
                document.getElementById('myhood').value = myequ1;
              }
              var myequa1 = document.getElementById('myhood').value;
              var myequa2 = eval(myequa1);
              var myequa3 = Math.pow(account[i-1], (myequa2));
              myterf[starc] = myequa3;
              account[starc] = myequa3;
              starc = starc+1;
              starck = starc-1;
              starsk = starc;
              var myequa4 = myterf.splice(starc, enarc-1);
              var myequa4 = account.splice(starc, enarc-1);
              var myequa4 = myterf.splice(i-1, starck);
              var myequa4 = account.splice(i-1, starck);
              document.getElementById('myhood').value = myterf;

            }
            else {
              var myequa3 = Math.pow(account[i-1], (0-myterf[i+2]));
              myterf[i-1] = myequa3;
              account[i-1] = myequa3;
              var myequa4 = myterf.splice(i, i+1);
              var myequa4 = account.splice(i, i+1);
              document.getElementById('myhood').value = myterf;

            }
          }
          else if (true) {
            var myequa3 = Math.pow(account[i-1], account[i+1]);
            myterf[i-1] = myequa3;
            account[i-1] = myequa3;
            var myequa4 = myterf.splice(i, i+1);
            var myequa4 = account.splice(i, i+1);
            document.getElementById('myhood').value = myterf;


          }
        }
      }
      //resulte
      document.getElementById('myhood').value = myterf;
      var myequa = document.getElementById('myhood').value;
      for (var v = 0; v < myterf.length; v++) {
        var mytest1 = myequa.replace("plus", "+");
        var mytest2 = mytest1.replace("subt", "-");
        var mytest3 = mytest2.replace("mult", "*");
        var mytest4 = mytest3.replace("divir", "%");
        var mytest5 = mytest4.replace("divi", "/");
        var mytest6 = mytest5.replace("starc", "(");
        var mytest7 = mytest6.replace("enarc", ")");
        var myequa = mytest7.replace("power", "^");
      }
      document.getElementById('myhood').value = myequa;
      for (var f = 0; f < myterf.length; f++) {
        var myequa = document.getElementById('myhood').value;
        myequ1 = myequa.replace(",", " ");
        document.getElementById('myhood').value = myequ1;
      }
      var myequa1 = document.getElementById('myhood').value;
      accountXX = eval(myequa1);
      document.getElementById('outser').innerHTML = accountXX;
      var myremovcount = myARRAY.split(" ");
      for (var i = 0; i < myremovcount.length; i++) {
        var elementD = document.getElementById("ram"+i);
        elementD.remove();
      }
    }
    else {
      var stringfunction = "" ;
      var dictunar = ["divided", "multiplied", "subtracted", "divide", "multiple", "plus", "subtract", "by","and"];
      var spichecker = inputX.split(" ");
      var itsequation = 0;
      for (var i = 0; i < spichecker.length; i++) {
        for (var g = 0; g < dictunar.length; g++) {
          if (spichecker[i] == dictunar[g]) {
            itsequation = 1;
          }
        }
      }
      if (itsequation == 1) {
        for (var i = 0; i < spichecker.length; i++) {
          for (var d = 0; d < dictunar.length; d++) {
            if (spichecker[i] == dictunar[d]) {
              if (spichecker[i-1] != "" &&spichecker[i-1] != "undefined") {
                if (spichecker[i] == "divide") {
                  stringfunction = spichecker[i+1] + "/" + spichecker[i+3];
                }
                else if (spichecker[i] == "multiple") {
                  stringfunction = spichecker[i+1] + "*" + spichecker[i+3];
                }
                else if (spichecker[i] == "plus") {
                  stringfunction = spichecker[i+1] + "+" + spichecker[i+3];
                }
                else if (spichecker[i] == "subtract") {
                  stringfunction = spichecker[i+1] + "-" + spichecker[i+3];
                }
              }
              else {
                //
              }
              accountXX = eval(stringfunction);
              document.getElementById('outser').style.display = "block";
              document.getElementById('hdoutser').style.display = "block";
              document.getElementById('outsernon').style.display = "none";
              document.getElementById('hdoutsernon').style.display = "none";
              document.getElementById('outser').innerHTML = accountXX;
            }
          }
        }
      }
      else {
        document.getElementById('hdoutsernon').style.display = "block";
        document.getElementById('outsernon').style.display = "block";
        document.getElementById('outser').style.display = "none";
        document.getElementById('hdoutser').style.display = "none";
        accountXX = inputX;
        document.getElementById('outsernon').innerHTML = accountXX;
      }
      //
    }
  }
}
//open Calculator / convertor
function calculator(mira) {
  if (mira == "cal") {
    var newelemX = document.createElement("div");
    var paraX = document.createElement("iframe");
    paraX.style.width = "225px";
    paraX.style.height = "248px";
    paraX.style.border = "none";
    paraX.style.padding = "0px 0px 0px 5px";
    paraX.style.margin = "0px";
    paraX.style.overflowY = "hidden";
    paraX.setAttribute("src", "essintales/calculator.html");
    newelemX.classList.add("chatout");
    newelemX.appendChild(paraX);
    var elementX = document.getElementById("chatcontent");
    elementX.appendChild(newelemX);
    elementX.scrollTop = elementX.scrollHeight;
    document.getElementById('setcolorX').click();
    var check = document.getElementById('chatbox');
    if (check.style.display == "none") {
      document.getElementById('monterX').click();
    }
    var tochattext = document.getElementById('tochattext').value;
    var l11 = document.getElementsByClassName('replaytext');
    var colorarea3 = document.getElementById('colorarea3').value;
    l11[i].style.border = tochattext;
    if (colorarea3 != "") {
      l11[i].style.backgroundColor = colorarea3;
    }
    var chatrelaod = document.getElementById("chatcontent").innerHTML;
    var chatcheckbox = document.getElementById('chatcheckbox')
    if (chatcheckbox.checked==true) {
        window.localStorage.setItem("chatrelaod", chatrelaod);
        chatcheckbox.setAttribute("checked" , "")
    }
    else {
      chatcheckbox.removeAttribute("checked" , "");
    }
  }
  else if (mira == "con") {
    var newelemX = document.createElement("div");
    var paraX = document.createElement("iframe");
    paraX.style.width = "225px";
    paraX.style.height = "320px";
    paraX.style.border = "none";
    paraX.style.padding = "0px 0px 0px 5px";
    paraX.style.margin = "0px";
    paraX.style.overflowY = "hidden";
    paraX.setAttribute("src", "essintales/mini-convertor.html");
    newelemX.classList.add("chatout");
    newelemX.appendChild(paraX);
    var elementX = document.getElementById("chatcontent");
    elementX.appendChild(newelemX);
    elementX.scrollTop = elementX.scrollHeight;
    document.getElementById('setcolorX').click();
    var check = document.getElementById('chatbox');
    if (check.style.display == "none") {
      document.getElementById('monterX').click();
    }
    var tochattext = document.getElementById('tochattext').value;
    var l11 = document.getElementsByClassName('replaytext');
    var colorarea3 = document.getElementById('colorarea3').value;
    l11[i].style.border = tochattext;
    if (colorarea3 != "") {
      l11[i].style.backgroundColor = colorarea3;
    }
    var chatrelaod = document.getElementById("chatcontent").innerHTML;
    var chatcheckbox = document.getElementById('chatcheckbox')
    if (chatcheckbox.checked==true) {
        window.localStorage.setItem("chatrelaod", chatrelaod);
        chatcheckbox.setAttribute("checked" , "")
    }
    else {
      chatcheckbox.removeAttribute("checked" , "");
    }
  }
}
function megacalculator(alexa) {
  if (alexa=="cal") {
    var chekset = document.getElementById('iframeholder');
    var tobuttonop = document.getElementById('tobuttonop').value;
    if (true) {
      document.getElementById("serchholder").classList.remove('serchholder');
      document.getElementById('serchholder').classList.add('serchholder2');
      document.getElementById('iframeholder').style.display = "block";
      document.getElementById('homecont').style.display = "block";
      document.getElementById('mediaplayer').style.display = "none";
      document.getElementById('mimoholder').style.display = "none";
      var framX = document.getElementById('mainiframe')
      framX.setAttribute("src", "essintales/mega calculator.html");
    }
    else {
      //
    }
    var df = document.getElementById('serchholder');
    var fh = document.getElementById('serchresolt');
    var xX = df.offsetLeft;
    var yY = df.offsetTop;
    fh.style.position = "relative";
    fh.style.marginLeft = xX-275+"px";
    fh.style.paddingTop = yY-22.5+"px";
  }
  else if (alexa=="con") {
    var chekset = document.getElementById('iframeholder');
    var tobuttonop = document.getElementById('tobuttonop').value;
    if (true) {
      document.getElementById("serchholder").classList.remove('serchholder');
      document.getElementById('serchholder').classList.add('serchholder2');
      document.getElementById('iframeholder').style.display = "block";
      document.getElementById('homecont').style.display = "block";
      document.getElementById('mediaplayer').style.display = "none";
      document.getElementById('mimoholder').style.display = "none";
      var framX = document.getElementById('mainiframe')
      framX.setAttribute("src", "essintales/convertor.html");
    }
    else {
      //
    }
    var df = document.getElementById('serchholder');
    var fh = document.getElementById('serchresolt');
    var xX = df.offsetLeft;
    var yY = df.offsetTop;
    fh.style.position = "relative";
    fh.style.marginLeft = xX-275+"px";
    fh.style.paddingTop = yY-22.5+"px";
  }
  document.getElementById('search').value="";
}
//open function
function openitems(spidra) {
  if (spidra == "google") {
    var spidraX = "https://www.google.com/";
  }
  else if (spidra == "spotify") {
    var spidraX = "https://open.spotify.com/";
  }
  else if (spidra == "youtube") {
    var spidraX = "https://www.youtube.com/";
  }
  else if (spidra == "games") {
    var spidraX = "essintales/games.html";
  }
  else if (spidra == "settings") {
    changepic()
  }
  var chekset = document.getElementById('iframeholder');
  var tobuttonop = document.getElementById('tobuttonop').value;
  if (spidra == "google"||spidra == "spotify"||spidra == "youtube"||spidra == "games") {
    document.getElementById("serchholder").classList.remove('serchholder');
    document.getElementById('serchholder').classList.add('serchholder2');
    document.getElementById('iframeholder').style.display = "block";
    document.getElementById('homecont').style.display = "block";
    document.getElementById('mediaplayer').style.display = "none";
    document.getElementById('mimoholder').style.display = "none";
    var framX = document.getElementById('mainiframe')
    framX.setAttribute("src", spidraX);
    var df = document.getElementById('serchholder');
    var fh = document.getElementById('serchresolt');
    var xX = df.offsetLeft;
    var yY = df.offsetTop;
    fh.style.position = "relative";
    fh.style.marginLeft = xX-275+"px";
    fh.style.paddingTop = yY-22.5+"px";
    document.getElementById('search').value="";
  }
}
//open frame
function opframi() {
  var chekset = document.getElementById('iframeholder');
  var tobuttonop = document.getElementById('tobuttonop').value;
  if (chekset.style.display == "none") {
    document.getElementById("serchholder").classList.remove('serchholder');
    document.getElementById('serchholder').classList.add('serchholder2');
    document.getElementById('iframeholder').style.display = "block";
    document.getElementById('homecont').style.display = "block";
  }
  else {
    //
  }
  var df = document.getElementById('serchholder');
  var fh = document.getElementById('serchresolt');
  var xX = df.offsetLeft;
  var yY = df.offsetTop;
  fh.style.position = "relative";
  fh.style.marginLeft = xX-275+"px";
  fh.style.paddingTop = yY-22.5+"px";
}
//back Home
function home() {
  document.getElementById("serchholder").classList.remove('serchholder2');
  document.getElementById('serchholder').classList.add('serchholder');
  document.getElementById('iframeholder').style.display = "none";
  document.getElementById('mediaplayer').style.display = "none";
  document.getElementById('homecont').style.display = "none";
  document.getElementById('mimoholder').style.display = "none";
  document.getElementById('search').value="";
  var framX = document.getElementById('mainiframe');
  framX.setAttribute("src", "");
}
//media playre
function mediaplayer() {
  document.getElementById('mediaplayer').style.display = "block";
  document.getElementById("serchholder").classList.remove('serchholder');
  document.getElementById('serchholder').classList.add('serchholder2');
  document.getElementById('homecont').style.display = "block";
  document.getElementById('iframeholder').style.display = "none";
  document.getElementById('mimoholder').style.display = "none";
  document.getElementById('search').value="";
}
//evant's
var clossearch = document.querySelector(".searchbar");
clossearch.addEventListener('click', function (event) {
  var check = document.getElementById('chatbox');
  var botton = document.getElementById('oper');
      if (check.style.display == "block") {
        check.style.display = "none";
        botton.style.display = "block";
        document.querySelector('.list').style.display = "none";
        document.querySelector('.listX').style.display = "none";
      }
      else {
        //
      }
  var chekset = document.getElementById('setholder');
  if (chekset.style.display == "none") {
    //
  }
  else {
    document.getElementById("setholder").classList.remove('setopen');
    document.getElementById('setholder').classList.add('setclose');
    var j = setTimeout(function() {
      document.getElementById('setholder').style.display = "none";
    }, 300);
  }
});
var container = document.querySelector(".sidra");
container.addEventListener('click', function (event) {
  document.getElementById('serchresoltII').style.display = "none";
  document.querySelector('.listX').style.display = "none";
  document.querySelector('.list').style.display = "none";
});
var container6 = document.querySelector(".hoster");
container6.addEventListener('click', function (event) {
  document.getElementById('serchresoltII').style.display = "none";
  document.querySelector('.listX').style.display = "none";
  document.querySelector('.list').style.display = "none";
});
var container2 = document.querySelector(".fullsettings");
var container4 = document.querySelector(".oper");
var container5 = document.getElementById("setting");
container2.addEventListener('click', function (event) {
  document.getElementById('chatbox').style.display = "none";
  document.getElementById('oper').style.display = "block";
  document.querySelector('.list').style.display = "none";
  document.querySelector('.listX').style.display = "none";
});
container4.addEventListener('click', function (event) {
  document.getElementById('fullsettings').style.display = "none";
  document.querySelector('.listX').style.display = "none";
  document.querySelector('.list').style.display = "none";
});
container5.addEventListener('click', function (event) {
  document.getElementById('fullsettings').style.display = "none";
  document.querySelector('.listX').style.display = "none";
  document.querySelector('.list').style.display = "none";
});
var container3 = document.querySelector(".setholder");
container3.addEventListener('click', function (event) {
  document.getElementById('fullsettings').style.display = "none";
  document.querySelector('.listX').style.display = "none";
  document.querySelector('.list').style.display = "none";
});
//clossuggt
function clossuggt(link) {
  if (link=="search") {
    document.querySelector('.listX').style.display = "none";
  }
  else if (link=="chat") {
    document.querySelector('.list').style.display = "none";
  }
}
//setting toggole
function togglesetting(rexa) {
  if (rexa == "home") {
    document.getElementById('generalview').style.display = "block";
    document.getElementById('imgchanger').style.display = "none";
    document.getElementById('resetview').style.display = "none";
    document.getElementById('hmidbt').disabled = true;
    document.getElementById('bgidbt').disabled = false;
    document.getElementById('rsidbt').disabled = false;
  }
  else if (rexa == "Background") {
    document.getElementById('generalview').style.display = "none";
    document.getElementById('imgchanger').style.display = "block";
    document.getElementById('resetview').style.display = "none";
    document.getElementById('hmidbt').disabled = false;
    document.getElementById('bgidbt').disabled = true;
    document.getElementById('rsidbt').disabled = false;
  }
  else if (rexa == "Reset") {
    document.getElementById('generalview').style.display = "none";
    document.getElementById('imgchanger').style.display = "none";
    document.getElementById('resetview').style.display = "block";
    document.getElementById('hmidbt').disabled = false;
    document.getElementById('bgidbt').disabled = false;
    document.getElementById('rsidbt').disabled = true;
  }
}
//settings munapulation section
function changepic() {
  var imgpick2 = document.getElementById('fullsettings');
  if (imgpick2.style.display == "none") {
    setTimeout(function () {
      imgpick2.style.display = "block";
    }, 1);
  }
  else {
    imgpick2.style.display = "none";
  }
}
//background image
function imgchoos(hawsa) {
  if (hawsa == "1") {
    document.getElementById('body').style.backgroundImage = "url('img/1.jpg')";
    window.localStorage.setItem("hawsa", "url('img/1.jpg')")
  }
  else if ( hawsa == "2") {
    document.getElementById('body').style.backgroundImage = "url('img/2.jpg')";
    window.localStorage.setItem("hawsa", "url('img/2.jpg')")
  }
  else if (hawsa == "3") {
    document.getElementById('body').style.backgroundImage = "url('img/3.jpg')";
    window.localStorage.setItem("hawsa", "url('img/3.jpg')")
  }
  else if (hawsa == "4") {
    document.getElementById('body').style.backgroundImage = "url('img/4.jpg')";
    window.localStorage.setItem("hawsa", "url('img/4.jpg')")
  }
  else if (hawsa == "5") {
    document.getElementById('body').style.backgroundImage = "url('img/5.jpg')";
    window.localStorage.setItem("hawsa", "url('img/5.jpg')")
  }
  else if (hawsa == "6") {
    document.getElementById('body').style.backgroundImage = "url('img/6.jpg')";
    window.localStorage.setItem("hawsa", "url('img/6.jpg')")
  }
  else if (hawsa == "7") {
    document.getElementById('body').style.backgroundImage = "url('img/7.jpg')";
    window.localStorage.setItem("hawsa", "url('img/7.jpg')")
  }
  else if (hawsa == "8") {
    document.getElementById('body').style.backgroundImage = "url('img/8.jpg')";
    window.localStorage.setItem("hawsa", "url('img/8.jpg')")
  }
  else {
    document.getElementById('imgpicker').click();
  }
}
function thispic(maria) {
  if (maria.files && maria.files[0]) {
    var img = document.getElementById('imgpicker').value;
    img11 = img.split("\\");
    var imghd = img11.splice(0, 2);
    var reader = new FileReader();

    reader.onload = function (e) {
      here = e.target.result;
      document.getElementById('body').style.backgroundImage = "url('"+here+"')";
      var whatpic = "url('"+here+"')";
      window.localStorage.setItem("hawsa", whatpic)
    };

    reader.readAsDataURL(maria.files[0]);
    //var myObject2 = new ActiveXObject("Scripting.FileSystemObject");
    //var f = myObject2.file.copy(here, 'C:\\folderB\\'+img11);
  }
  //document.getElementById('body').style.backgroundImage = "url('"+elc+"')"
}
//hour
var timeforchat;
var datetracker = setInterval(function() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDay();
  var daynum  = date.getDate()
  var hours = date.getHours();
  var mint = date.getMinutes();
  var second = date.getSeconds();
  var milisecound = date.getMilliseconds();
  if (day == 0) {
    day =  "Sunday";
  }
  else if (day == 1) {
    day =  "Monday";
  }
  else if (day == 2) {
    day =  "Tuesday";
  }
  else if (day == 3) {
    day =  "Wednesday";
  }
  else if (day == 4) {
    day =  "Thursday";
  }
  else if (day == 5) {
    day =  "Friday";
  }
  else if (day == 6) {
    day =  "Saturday";
  }
  if (month == 0) {
    month =  "January";
  }
  else if (month == 1) {
    month =  "February";
  }
  else if (month == 2) {
    month =  "March";
  }
  else if (month == 3) {
    month =  "April";
  }
  else if (month == 4) {
    month =  "May";
  }
  else if (month == 5) {
    month =  "June";
  }
  else if (month == 6) {
    month =  "July";
  }
  else if (month == 7) {
    month =  "August";
  }
  else if (month == 8) {
    month =  "September";
  }
  else if (month == 9) {
    month =  "October";
  }
  else if (month == 10) {
    month =  "November";
  }
  else if (month == 11) {
    month =  "December";
  }
  if (hours<10) {
    hours = "0" + hours ;
  }
  if (mint<10) {
    mint = "0" + mint ;
  }
  if (second<10) {
    second = "0" + second ;
  }
  var fulltimemap = day+","+month+" "+daynum+", "+year+" , "+hours+" : "+mint+" : "+second+" ."+milisecound;
  var timeshow = hours+" : "+mint+" : "+second;
  //timeshow
  timeforchat = day+","+month+" "+daynum+", "+year+"<br />"+hours+" : "+mint+" : "+second;
  dayoff = day.slice(0, 3)
  monthoff = month.slice(0, 3)
  var dateshow = dayoff+","+monthoff+" "+daynum+", "+year;
  document.getElementById('time').innerHTML = timeshow;
  document.getElementById('date').innerHTML = dateshow;
  document.getElementById('timmodle').innerHTML = fulltimemap;
  document.getElementById('timeholder').value = fulltimemap;
},100);
//open time map & calander
function timemap() {
  var fulltimemap = document.getElementById('timeholder').value;
  alert(fulltimemap);
}
//outer reaction
function outerevent() {
  var inputX = document.getElementById("search").value;
  alert(inputX)
}
/*
var gang = setInterval(function () {
  var king = window.localStorage.getItem("king");
  if (king == 1) {

  }
  clearInterval()
}, 10);
*/
var i=00;
/*
  var historycheck = window.localStorage.getItem("history");
  var namecheck = window.localStorage.getItem("name");
  if (historycheck!= "") {
  var historyX = historycheck;
  }
  else {
  var historyX ="";
  }
  if (namecheck!= "") {
  var nameX = namecheck;
  }
  else {
  var nameX ="";
  }
  let history = historyX.split("\\kimstertory\\");
  let name = nameX.split("\\kimstertory\\");
  alert(history)
  for (var x = 0; x < history.length; x++) {
  if (history[x]!=""&&history[x]!="undefined") {
    if (name[x]!=""&&name[x]!="undefined") {
      const para = document.createElement("button");
      const node = document.createTextNode(name[x]);
      para.appendChild(node);
      para.id="his"+x;
      para.setAttribute("value", history[x]);
      para.setAttribute("onclick", "oldplay('"+x+"')")
      const element = document.getElementById("history");
      element.appendChild(para);
      i=x;
    }
  }
  }
*/
//media player
function oldplay(jenx) {
  document.getElementById("video_ID").style.display = "";
  document.getElementById("images_ID").style.display = "none";
  document.getElementById("docume_ID").style.display = "none";
  var url = document.getElementById('his'+jenx).value;
  document.getElementById("video_ID").src = url;
}
function ab(ava) {
  if (ava == "show") {
    var check = document.getElementById('history');
    if (check.style.display == "none") {
      document.getElementById('history').style.display = "block";
    }
    else {
      document.getElementById('history').style.display = "none";
    }
  }
  else if (ava == "file") {
    document.getElementById('file').click();
  }
}
var toggleviewmedia=0;
var toggleviewcheck=0;
function aaad() {
  var file = document.getElementById('file').files[0];
  audiiosrc = document.getElementById('file').files[0]
  var img = document.getElementById('file').value;
  let itspic =0;
  let picturs = [".WEBP",".TIFF",".JPG",".JPEG", ".GIF",".PNG"];
  let docm = ".PDF";
  img11 = img.split("\\");
  var imghd = img11.splice(0, 2);
  var getrusty = img11;
  document.getElementById('ram').value = getrusty;
  var doc = document.getElementById('ram').value;
  var imghd = doc.slice(-4);
  var url = URL.createObjectURL(file);
  for (var i = 0; i < picturs.length; i++) {
    if (imghd.toUpperCase()==picturs[i]) {
      itspic =1;
    }
    else if (imghd.toUpperCase()==docm) {
      itspic =2;
    }
  }
  console.log(imghd);
  i=i+1;
  var audio = document.getElementById("video_ID");
  if (itspic==0) {
    document.getElementById("video_ID").style.display = "";
    document.getElementById("images_ID").style.display = "none";
    document.getElementById("docume_ID").style.display = "none";
    document.getElementById("video_ID").src = url;
    if (imghd==".mp3"||imghd==".wav") {
      document.getElementById("video_ID").style.borderRadius = "29px";
      document.getElementById("canvesholder").style.display = "none";
      document.getElementById("video_ID").src = url;
      audio.play();
      renderFrame();
    }
    else {
      document.getElementById("video_ID").style.borderRadius = "0px";
      document.getElementById("canvesholder").style.display = "none";
      document.getElementById("video_ID").src = url;
    }
    if (toggleviewcheck!=1) {
      toggleviewmedia = toggleviewmedia+1;
      toggleviewcheck =1
    }
  }
  else  if (itspic==1) {
    document.getElementById("video_ID").style.display = "none";
    document.getElementById("images_ID").style.display = "";
    document.getElementById("docume_ID").style.display = "none";
    document.getElementById("canvesholder").style.display = "none";
    document.getElementById("images_ID").src = url;
    if (toggleviewcheck!=2) {
      toggleviewmedia = toggleviewmedia+1;
      toggleviewcheck =2
    }
  }
  else  if (itspic==2) {
    document.getElementById("video_ID").style.display = "none";
    document.getElementById("images_ID").style.display = "none";
    document.getElementById("docume_ID").style.display = "";
    document.getElementById("canvesholder").style.display = "none";
    document.getElementById("docume_ID").src = url;
    if (toggleviewcheck!=3) {
      toggleviewmedia = toggleviewmedia+1;
      toggleviewcheck =3
    }
  }
  if (toggleviewmedia>1) {
    document.getElementById("showtogglemedia").style.display = "block";
  }
  if (doc!=""&&doc!="undefined"&&itspic==0) {
    const para = document.createElement("button");
    const node = document.createTextNode(doc);
    para.appendChild(node);
    para.id="his"+i;
    para.setAttribute("value", url);
    para.setAttribute("onclick", "oldplay('"+i+"')")
    const element = document.getElementById("history");
    element.appendChild(para);
  }
}
function toggle() {
  var player = document.getElementById("video_ID")
  var viewer = document.getElementById("images_ID")
  var editor = document.getElementById("docume_ID")
  var veuslz = document.getElementById("canvesholder");
  if (player.style.display!="none") {
    if (viewer.src!="") {
      player.style.display = "none";
      viewer.style.display = "";
      editor.style.display = "none";
      veuslz.style.display = "none";
    }
    else if (editor.src!="") {
      player.style.display = "none";
      viewer.style.display = "none";
      editor.style.display = "";
      veuslz.style.display = "none";
    }
  }
  else if (viewer.style.display!="none") {
    if (editor.src!="") {
      player.style.display = "none";
      viewer.style.display = "none";
      editor.style.display = "";
      veuslz.style.display = "none";
    }
    else if (player.src!="") {
      player.style.display = "";
      viewer.style.display = "none";
      editor.style.display = "none";
      veuslz.style.display = "block";
    }
  }
  else if (editor.style.display!="none") {
    if (player.src!="") {
      player.style.display = "";
      viewer.style.display = "none";
      editor.style.display = "none";
      veuslz.style.display = "block";
    }
    else if (viewer.src!="") {
      player.style.display = "none";
      viewer.style.display = "";
      editor.style.display = "none";
      veuslz.style.display = "none";
    }
  }
}
document.addEventListener("keydown", function(event) {
  var video = document.getElementById('video_ID');
  if (event.key === "ArrowUp") {
    if (video.volume <= 1) {
      event.preventDefault();
      video.volume += 0.05;
      volume = Math.round((video.volume)*100);
      document.getElementById('vlo').style.display = "block";
      document.getElementById('volume').innerHTML = volume+"%";
      setTimeout(function() {
        document.getElementById('vlo').style.display = "none";
      }, 1500);
    }
    else {
      // do nothing
    }
  }
  else if (event.key === "MediaPlayPause") {
    if (video.paused){
      event.preventDefault();
      video.play();
    }
    else {
      event.preventDefault();
      video.pause();
    }
  }
  else if (event.key === "ArrowDown") {
    if (video.volume > 0) {
      event.preventDefault();
      video.volume -= 0.05;
      volume = Math.round((video.volume)*100);
      document.getElementById('vlo').style.display = "block";
      document.getElementById('volume').innerHTML = volume+"%";
      setTimeout(function() {
        document.getElementById('vlo').style.display = "none"
      }, 1500);
    }
    else {
      // do nothing
    }
  }
  else if (event.key === "LaunchMediaPlayer") {
    event.preventDefault();
    mediaplayer()
  }
  else if (event.key === "Home") {
    event.preventDefault();
    home()
  }
});
//clear Customize
function ClearCustomize(miranda) {
  if (miranda=="colorst") {
    window.localStorage.setItem("hexcolorto", "");
    window.localStorage.setItem("colorarea2", "");
    window.localStorage.setItem("colorarea3", "");
    window.localStorage.setItem("tobuttonop", "");
    window.localStorage.setItem("tochattext", "");
    document.getElementById('hexcolorto').value = "red";
    document.getElementById('colortoicon').value = "red";
    document.getElementById('colorarea2').value = "blue";
    document.getElementById('colorarea3').value = "green";
    document.getElementById('tochattext').value = "0.5px solid red";
    document.getElementById('tobuttonop').value = "1px solid red";
    var tobuttonop = "1px solid red";
    var tochattext = "0.5px solid red";
    document.getElementById('openbt').style.border = tobuttonop;
    document.getElementById('imgsr').style.backgroundColor = "red" ;
    document.getElementById('imgres').style.backgroundColor = "red" ;
    document.getElementById('imgai').style.backgroundColor = "red" ;
    document.getElementById('mainiframe').style.borderTop = tobuttonop;
    document.getElementById('setholder').style.border = tobuttonop;
    document.getElementById('headline').style.borderBottom = tobuttonop;
    document.getElementById('bottomline').style.borderTop = tobuttonop;
    document.getElementById('chatbox').style.border = tobuttonop;
    document.getElementById('textvalue').style.border = tobuttonop;
    document.getElementById('sendtext').style.border = tobuttonop;
    document.getElementById('colar1').style.border = tobuttonop;
    document.getElementById('colar2').style.border = tobuttonop;
    document.getElementById('colar3').style.border = tobuttonop;
    document.getElementById('historyXX').style.border = tobuttonop;
    document.getElementById('historyX').style.border = tobuttonop;
    document.getElementById('video_ID').style.borderTop = tobuttonop;
    setcolorX('task');setcolorX('replay')
  }
  else if (miranda=="chatbox") {
    window.localStorage.setItem("chatrelaod", "");
    window.localStorage.setItem("hellomsg", "");
    document.getElementById("chatcontent").innerHTML = "";
  }
  else if (miranda=="backimg") {
    window.localStorage.setItem("hawsa", "");
    document.getElementById('body').style.backgroundImage = "url('img/MBAR_026_Ahri_003.jpg')";
  }
  else if (miranda=="zoom") {
    window.localStorage.setItem("zoomreper", "");
    document.body.style.zoom="100%";
    document.getElementById('ZoomXelemnt').value = "100%";
    document.getElementById('zoomplus').disabled=false;
  }
  else if (miranda=="all") {
    window.localStorage.setItem("hexcolorto", "");
    window.localStorage.setItem("colorarea2", "");
    window.localStorage.setItem("colorarea3", "");
    window.localStorage.setItem("tobuttonop", "");
    window.localStorage.setItem("tochattext", "");
    window.localStorage.setItem("hawsa", "");
    window.localStorage.setItem("chatrelaod", "");
    window.localStorage.setItem("hellomsg", "");
    window.localStorage.setItem("zoomreper", "");
    window.localStorage.setItem("mimXsave","");
    window.localStorage.setItem("settingsautosave", "");
    window.localStorage.setItem("mimoslen","");
    location.reload();
  }
}
//zoom function
function ZoomX(margret) {
  if (margret=="subt") {
    zoomreper = eval(zoomreper);
    zoomreper = zoomreper -5;
    document.body.style.zoom=zoomreper+"%";
    document.getElementById('ZoomXelemnt').value = zoomreper+"%";
    window.localStorage.setItem("zoomreper", zoomreper);
    document.getElementById('zoomplus').disabled=false;
  }
  else if (margret=="plus") {
    if (zoomreper<115) {
      zoomreper = eval(zoomreper);
      zoomreper = zoomreper +5;
      if (zoomreper==115) {
        document.getElementById('zoomplus').disabled=true;
      }
      else {}
      document.body.style.zoom=zoomreper+"%";
      document.getElementById('ZoomXelemnt').value = zoomreper+"%";
      window.localStorage.setItem("zoomreper", zoomreper);
    }
    else {}
  }
}
//passwordless entring
function sessioncheckbox() {
  var sessioncheckbox = document.getElementById('sessioncheckbox')
  if (sessioncheckbox.checked==true) {
    window.localStorage.setItem("sessioncheckbox", "true");
    sessioncheckbox.setAttribute("checked" , "")
  }
  else {
    window.localStorage.setItem("sessioncheckbox", "false");
    sessioncheckbox.removeAttribute("checked" , "");
  }
}
//settings auto Save
function settsausa() {
  settingsautosave = document.getElementById('fullsettings').innerHTML;
  window.localStorage.setItem("settingsautosave", settingsautosave);
}
//changme
function funchangher(him) {
  if (him=="color") {
    let sitecheckbox = document.getElementById('sitecheckbox');
    if (sitecheckbox.checked==true) {
      document.getElementById('sitecheckbox').setAttribute("checked" , "")
    }
    else if (sitecheckbox.checked==false) {
      document.getElementById('sitecheckbox').removeAttribute("checked" , "");
    }
  }
  else if (him=="chat") {
    let chatcheckbox = document.getElementById('chatcheckbox');
    if (chatcheckbox.checked==true) {
      document.getElementById('chatcheckbox').setAttribute("checked" , "")
    }
    else if (chatcheckbox.checked==false) {
      document.getElementById('chatcheckbox').removeAttribute("checked" , "")
    }
  }
}
//suggested
function suggeingengine(songs) {
  var limites = 0;
  let sortedNames = names.sort();
  if (songs=="chat") {
    let input = document.getElementById("textvalue");
    removeElements('chat');
    for (let i of sortedNames) {
      //convert input to lowercase and compare with each string
      let checkerAR = input.value.split(" ");
      let lastitemX = ((checkerAR.length)-1);
      let lastitemY = ((checkerAR.length)-2);
      if (checkerAR.length==1) {
        if (limites<3) {
          if (i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != "") {
            document.querySelector('.list').style.display = "inline-flex";
            //create li element
            let listItem = document.createElement("p");
            //One common class name
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNames('" + i + "')");
            //Display matched part in bold
            let word = "<b>" + i.substr(0, input.value.length) + "</b>";
            word += i.substr(input.value.length);
            //display the value in array
            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);
            let hiderclue = document.querySelectorAll(".list-items");
            if (hiderclue.length==0) {
              document.querySelector('.list').style.display = "none";
            }
            limites = limites+1
          }
        }
      }
      else if (checkerAR.length>1) {
        if (limites<3) {
          if (checkerAR[lastitemX]!="") {
            if (i.toLowerCase().startsWith(checkerAR[lastitemX].toLowerCase()) && input.value != "") {
              document.querySelector('.list').style.display = "inline-flex";
              //create li element
              let listItem = document.createElement("p");
              //One common class name
              listItem.classList.add("list-items");
              listItem.style.cursor = "pointer";
              listItem.setAttribute("onclick", "displayNames('" + i + "')");
              //Display matched part in bold
              let amandalenght = checkerAR[lastitemX].split("");
              let secondcheck = (amandalenght.length);
              let word = "<b>" + i.substr(0, secondcheck) + "</b>";
              word += i.substr(secondcheck);
              //display the value in array
              listItem.innerHTML = word;
              document.querySelector(".list").appendChild(listItem);
              let hiderclue = document.querySelectorAll(".list-items");
              if (hiderclue.length==0) {
                document.querySelector('.list').style.display = "none";
              }
              limites = limites+1;
            }
          }
        }
      }
      let hiderclue = document.querySelectorAll(".list-items");
      if (hiderclue.length==0) {
        document.querySelector('.list').style.display = "none";
      }
    }
  }
  else if (songs=="search") {
    let input = document.getElementById("search");
    removeElements('search');
    for (let i of sortedNames) {
      //convert input to lowercase and compare with each string
      let checkerAR = input.value.split(" ");
      let lastitemX = ((checkerAR.length)-1);
      let lastitemY = ((checkerAR.length)-2);
      if (checkerAR.length==1) {
        if (limites<3) {
          if (i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != "") {
            document.querySelector('.listX').style.display = "inline-flex";
            //create li element
            let listItem = document.createElement("p");
            //One common class name
            listItem.classList.add("list-itemsX");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNamesX('" + i + "')");
            //Display matched part in bold
            let word = "<b>" + i.substr(0, input.value.length) + "</b>";
            word += i.substr(input.value.length);
            //display the value in array
            listItem.innerHTML = word;
            document.querySelector(".listX").appendChild(listItem);
            let hiderclue = document.querySelectorAll(".list-itemsX");
            if (hiderclue.length==0) {
              document.querySelector('.listX').style.display = "none";
            }
            limites = limites+1
          }
        }
      }
      else if (checkerAR.length>1) {
        if (limites<3) {
          if (checkerAR[lastitemX]!="") {
            if (i.toLowerCase().startsWith(checkerAR[lastitemX].toLowerCase()) && input.value != "") {
              document.querySelector('.listX').style.display = "inline-flex";
              //create li element
              let listItem = document.createElement("p");
              //One common class name
              listItem.classList.add("list-itemsX");
              listItem.style.cursor = "pointer";
              listItem.setAttribute("onclick", "displayNamesX('" + i + "')");
              //Display matched part in bold
              let amandalenght = checkerAR[lastitemX].split("");
              let secondcheck = (amandalenght.length);
              let word = "<b>" + i.substr(0, secondcheck) + "</b>";
              word += i.substr(secondcheck);
              //display the value in array
              listItem.innerHTML = word;
              document.querySelector(".listX").appendChild(listItem);
              let hiderclue = document.querySelectorAll(".list-itemsX");
              if (hiderclue.length==0) {
                document.querySelector('.listX').style.display = "none";
              }
              limites = limites+1;
            }
          }
        }
      }
      let hiderclue = document.querySelectorAll(".list-itemsX");
      if (hiderclue.length==0) {
        document.querySelector('.listX').style.display = "none";
      }
    }
  }
}
function displayNames(value) {
  let input = document.getElementById("textvalue");
  let checkerAR = input.value.split(" ");
  let lastitemX = ((checkerAR.length)-1);
  if (checkerAR.length==1) {
    input.value = value;
    removeElements();
  }
  else if (checkerAR.length>1) {
    const outputx = document.getElementById("textvalue").value.replace("  ", " ");
    let newoutputx = outputx.split(" ");
    let vr = newoutputx.length - 1;
    newoutputx[vr] = "";
    document.getElementById('suggestram').value = newoutputx;
    let newstate = document.getElementById('suggestram').value;
    conterno = newstate.split("");
    vectrya = (conterno.length)*2
    for (var i = 0; i < vectrya; i++) {
      var newoutlux = newstate.replace(",", " ");
      var newoutluxd = newoutlux.replace(",", " ");
      var newoutlux = newoutluxd.replace(",", " ");
    }
    const rplacex = newoutputx[vr].replace(checkerAR[lastitemX], "")
    document.getElementById("textvalue").value = newoutlux + value;
    removeElements('chat');
  }
  document.getElementById("textvalue").click();
  document.querySelector('.list').style.display = "none";
}
function displayNamesX(value) {
  let input = document.getElementById("search");
  let checkerAR = input.value.split(" ");
  let lastitemX = ((checkerAR.length)-1);
  if (checkerAR.length==1) {
    input.value = value;
    removeElements();
  }
  else if (checkerAR.length>1) {
    const outputx = document.getElementById("search").value.replace("  ", " ");
    let newoutputx = outputx.split(" ");
    let vr = newoutputx.length - 1;
    newoutputx[vr] = "";
    document.getElementById('suggestram').value = newoutputx;
    let newstate = document.getElementById('suggestram').value;
    conterno = newstate.split("");
    vectrya = (conterno.length)*2
    for (var i = 0; i < vectrya; i++) {
      var newoutlux = newstate.replace(",", " ");
      var newoutluxd = newoutlux.replace(",", " ");
      var newoutlux = newoutluxd.replace(",", " ");
    }
    const rplacex = newoutputx[vr].replace(checkerAR[lastitemX], "")
    document.getElementById("search").value = newoutlux + value;
    removeElements('search');
  }
  document.getElementById("search").click();
  document.querySelector('.listX').style.display = "none";
}
function removeElements(lier) {
  if (lier=="chat") {
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
      item.remove();
    });
  }
  else if (lier=="search") {
    let items = document.querySelectorAll(".list-itemsX");
    items.forEach((item) => {
      item.remove();
    });
  }
}
let names = [
  "Ayla","Jake","Sean","Henry","Brad","Stephen","Taylor","Timmy","Cathy","John","Amanda","Amara","Sam","Sandy","Danny","Ellen","Camille","abdelkarim","khelfaoui","kims",
  "Chloe","Emily","Nadia","Mitchell","Harvey","Lucy","Amy","Glen","Peter","Hi","How","are","Is","anyone","there","Hello","Good","day","See","later","Goodbye","Thank","That's","helpful",
  "What","hours","open","your","When","the","time","to","contact","At","do","provide","services",
  "location","Where","located","address","company","situated","can","we","I","take","credit","cards","accept","Mastercard","cash","only","Which","that","help","us",
  "industrial","training","deliver","webinars","on","cybersecurity","Summer","conduct","workshops",
  "mean","by","cryptography","a","Firewall","and","why","it","used","does","Penetration","Testing","explain","in","cyber","security",
  "divided","multiplied","subtracted","divide","multiple","plus","subtract","calculator","unit","converter",
  "google","spotify","youtube","media","player","mega","calculator","converter","settings","OPEN MIMO","MIMO","OPEN NOTE","OPEN NOTES","NOTE","NOTES",
  "games","spidra","switch","home","tell","me","jokes","joke","الة","الحاسبة","الوحدات","محول","افتح","قوقل",
  "سبوتيفاي","يوتيوب","مشغل","الوسائط","الخارقة","المحول","الخارق","الاعدادات","الالعاب","نكات","قل","نكة",
  "Vulnerability","Assessment","VA","traceroute","VPN","black","hat","hackers","White","ethical","Grey",
  "an","ARP","work","Botnet","Bonet","ssl","tls","Cognitive","Encryption","different","from","Hashing","Decryption","forward","secrecy","boot","sector","virus","effects","direct","action",
  "resident","multipartite","spacefiller","delivery","food","options","Define","Important","Features","of","need","Whta","Benefits","uses","Hey","Hola",
  "Nice","chatting","you","bye","Till","next","Awesome","thanks","for","helping","could","be","order","id","track","my","comprises","List","components","locate",
  "find","want","appoitment","Manoj","kumar","set","appointment","Sujata","Nandi","fixed","leave","Manish","Cost","Lowering","changes","made","lower",
  "forgot","Login","password","someone","forgets","Laptop","Wifi","manufacturer","nearby","know","various","departments","this",
  "challenging","events","threats","market","Our","Target","customers","who","key","information","shared","supplier","highest","grossing","product","meet","head","department","Rakesh","sharma",
  "complaint","has","been","raised","Insufficient","Team","Skills","Miscommunication","Conflicts","needs","resolved","Risk","Management","issue","occured","skilled","employees","needed","urgently",
  "Lack","clarity","specifications","not","clear","customer","should","user","updated","software","version","demands","updation",
  "problem","related","Job","design","analysis","query","based","Workforce","planning","development","issues","handled","Compensation","working","employee","Legal","like","accidents",
  "Impact","sale","factors","impacting","year","have","improved","last","profit","was","response","happy","feedback",
  "maintainence","queries","recorded","gadgets","stock","products","Commission","rate","each","Marry","love","date","chat","with","am","bored",
  "turnover","present","delayed","name","call","doing","configure","configuration","steps","computer","desktop",
  "weather","today","Michel","Siddhart","Roy","Shantanu","Bhatt","office","Opening","cafeteria","canteen",
  "VP","cabin","AI","Project","guide","improve","members","improving","domain","knowledge",
  "مرحبًا","كيف","حالك","هل","يوجد","أحد","هناك","جيد","يوم","السلام","سلام","عليكم",
  "وداعًا","أراك","لاحقًا","وداعًا","باي","في","امان","الله","شكرًا","هذا","مفيد",
  "ما","ساعات","العمل","هي","ساعات","عملك","متى","تفتح","هو","الاتصال","أي","وقت","تقدم","الخدمات",
  "ما","هو","موقعك","أين","تقيم","هو","عنوانك","أين","تقع","شركتك","كيف","يمكننا","الاتصال","بك","كيف","يمكننا","يمكنني","الاتصال","بك",
  "هل","تأخذ","بطاقات","الائتمان","هل","تقبل","هل","أنت","نقدًا","فقط","ما","هي","بطاقات","الائتمان","التي","تقبلها",
  "ما","هي","الخدمات","التي","تقدمها","ما","هي","الخدمات","التي","تقدمها","كيف","يمكنك","مساعدتنا","ماذا","يمكنك","أن","تفعل",
  "هل","تقدم","تدريبًا","صناعيًا","هل","تقدم","ندوات","عبر","الإنترنت","حول","الأمن","السيبراني","هل","تقدم","تدريبًا","صيفيًا","هل","تعقد","ورش","عمل",
  "ما","المقصود","بالتشفير","ما","هو","التشفير","ما","هو","اختبار","الاختراق","شرح","اختبار","الاختراق","ما","هو","في","الأمن","السيبراني",
  "ما","هو","تقييم","الضعف","شرح","تقييم","الضعف","ما","هو","في","الأمن","السيبراني",
  "ما","هو","مسار","التتبع","شرح","مسار","التتبع","ما","هم","قراصنة","القبعة","السوداء","قراصنة","القبعة","السوداء",
  "ما","هم","قراصنة","القبعة","البيضاء","المتسللون","الأخلاقيون","ما","هم","قراصنة","قبعة","غراي","قراصنة","قبعة","غراي",
  "ما","هو","وكيف","يعمل","ما","هو","في","الأمن","السيبراني",
  "ما","هي","tls","شرح","tls","ما","هو","tls","ما","هو","الأمن","السيبراني","المعرفي","شرح","الأمن","السيبراني","المعرفي","الأمن","السيبراني","المعرفي",
  "كيف","يختلف","التشفير","عن","التجزئة","التشفير","يختلف","عن","التجزئة","ما","هو","التشفير","التشفير","شرح","التشفير","ما","هو","فك","التشفير","فك","التشفير","شرح","فك","التشفير",
  "ما","هو","التجزئة","التجزئة","شرح","التجزئة","ما","هو","الأمن","السيبراني","الأمن","السيبراني",
  "ما","هي","سرية","إعادة","التوجيه","إعادة","التوجيه","السرية","ما","هو","فيروس","قطاع","التمهيد","كيف","تأثيرات","فيروس","قطاع","التمهيد",
  "ما","هو","فيروس","الإجراء","المباشر","ما","مدى","تأثير","فيروس","الإجراء","المباشر","ما","هو","الفيروس","المقيم","كيف","يؤثر","الفيروس","المقيم",
  "ما","هو","الفيروس","متعدد","الأجزاء","ما","مدى","تأثير","الفيروس","متعدد","الأجزاء","ما","هو","فيروس","كيف","يؤثر","فيروس",
  "هل","تقدم","خدمة","التوصيل","إلى","المنازل","هل","توصل","الطعام","ما","هي","خيارات","التوصيل","للمنازل","ما","هو","فيروس","الكمبيوتر","ماذا","تقصد","بفيروس","الكمبيوتر","تعريف","فيروس","الكمبيوتر",
  "السمات","المهمة","للأمن","السيبراني","لماذا","نحتاج","إلى","الأمن","السيبراني","ما","هي","ميزات","الأمن","السيبراني","ما","هي","فوائد","الأمن","السيبراني","استخدامات","الأمن","السيبراني",
  "مرحبًا","كيف","حالك","هل","هناك","أي","شخص","مرحبًا","مرحبًا","مرحبًا","يوم","وداعًا","أراك","لاحقًا","وداعًا","لطيفة","الدردشة","معك,وداعًا","حتى","المرة","القادمة","شكرًا","شكرًا","هذا","مفيد","رائع,شكرًا","شكرًا","لمساعدتي",
  "كيف","يمكنك","مساعدتي","ما","المساعدة","التي","تقدمها","كيف","يمكنك","أن","تكون","مفيدًا","أين","الطلب","بالمعرف","431B67","تتبع","الطلب","562B78","أين","طلبي","بالمعرف","561A24",
  "يتألف","معرف","الطلب","345A23","من","قائمة","المكونات","أين","هو","الطلب","أين","هو","طلبي","تحديد","موقع","الطلب","تاريخ","التسليم",
  "اعثر","على","موقع","الطلب","32712","ما","هو","موقع","الطلب","23A31","أريد","موعدًا","مع","مانوج","كومار","حدد","موعدًا","مع","سوجاتا","ناندي","هل","تم","تحديد","موعدي","هل","لدي","موعد","اليوم",
  "هل","سوجاتا","ناندي","في","إجازة","هل","مانيش","كومار","في","إجازة","تغييرات","خفض","التكلفة","التي","يتعين","إجراؤها","ما","التغييرات","التي","يمكن","أن","تخفض","التكلفة",
  "نسيت","كلمة","مرور","تسجيل","الدخول","الخاصة","بي","ماذا","أفعل","عندما","ينسى","شخص","ما","كلمة","مرور","تسجيل","الدخول","نسيت","كلمة","مرور","الكمبيوتر","المحمول","نسيت","كلمة","مرور",
  "كيفية","تحسين","معرفة","أعضاء","الفريق","بالمجال","تحسين","معرفة","أعضاء","الفريق","بالمجال",
  "اعثر","على","جهة","تصنيع","قريبة","أريد","التعرف","على","الأقسام","المختلفة","في","هذه","الشركة","ما","هي","الأحداث","الصعبة","ما","هي","التهديدات","في","السوق",
  "عملاؤنا","المستهدفون","من","هم","عملاؤك","الرئيسيون","ما","المعلومات","التي","تتم","مشاركتها","مع","المورد","ما","هو","أعلى","ناتج","ربح",
  "أريد","مقابلة","رئيس","قسم","الموارد","البشرية","/","تكنولوجيا","المعلومات","/","المشاريع","أريد","مقابلة","رئيس","قسم","تكنولوجيا","المعلومات","راكيش","شارما.",
  "تم","تقديم","شكوى","بسبب","عدم","كفاية","مهارات","الفريق","يجب","حل","تعارضات","التواصل","الخاطئ","حدثت","مشكلة","إدارة","المخاطر","هناك","حاجة","ماسة","إلى","الموظفين","المهرة",
  "عدم","وضوح","المنتج","مواصفات","المنتج","غير","واضحة","للعميل.","ماذا","نفعل","يحتاج","المستخدم","إلى","إصدار","البرنامج","المحدث","يطالب","المستخدم","بتحديث","البرنامج",
  "المشكلة","المتعلقة","بتصميم","الوظيفة","وتحليلها","الاستعلام","المستند","إلى","تخطيط","القوى","العاملة","يجب","التعامل","مع","قضايا","التدريب","والتطوير","تعويضات","ومزايا","الموظف","العامل","القضايا","القانونية","للإدارة","مثل","حوادث","في","الشركة",
  "التأثير","على","البيع","العوامل","التي","تؤثر","على","البيع","هذا","العام",
  "كيف","قمنا","بتحسين","مبيعاتنا","من","العام","الماضي","ما","هو","الربح","هذا","العام","كيف","كانت","استجابة","العميل","هل","العميل","سعيد","ما","هي","ملاحظات","العملاء",
  "تم","تسجيل","الاستفسارات","المتعلقة","بالصيانة","ما","هي","الأدوات","المتوفرة","في","المخزون","ما","هي","المنتجات","التي","لدينا",
  "ما","هو","معدل","العمولة","معدل","العمولة","على","كل","منتج","تزوجيني","أنا","أحبك","واعدني","الدردشة","معي","أشعر","بالملل","لماذا","كيف","متى","أنا","أنت",
  "ما","هو","حجم","مبيعات","الشركة","في","الوقت","الحالي","لماذا","تأخر","الطلب","23A12","لماذا","تأخر","الطلب","23","ما","اسمك","ما","اسمك","كيف","حالك","كيف","حالك",
  "كيفية","تكوين","الكمبيوتر","المحمول","الخاص","بي","تكوين","برنامج","الكمبيوتر","المحمول","خطوات","تكوين","الكمبيوتر","المحمول","كيفية","تكوين","جهاز","الكمبيوتر","الخاص","بي","تكوين","برامج","الكمبيوتر","خطوات","تكوين","الكمبيوتر","كيفية","تكوين","سطح","المكتب","تكوين","برامج","سطح","المكتب","خطوات","تكوين","سطح","المكتب","ما","هو","الطقس","اليوم",
  "هل","ميشيل","شارما","في","إجازة","هل","سيدهارت","روي","موجود","اليوم","هل","شانتانو","بهات","في","منصبه",
  "ساعات","عمل","الكافيتريا","متى","تفتح","الكافيتريا","وقت","افتتاح","مقصف","المكتب",
  "أين","هو","نائب","الرئيس","للمقصورة","أين","رأس","مقصورة","تكنولوجيا","المعلومات","أين","قسم","الذكاء","الاصطناعي","أين","يوجد","قسم","إدارة","المشروع","أين","الكافيتريا","أرشدني","إلى","المقصف",
  "fine","human","real","what's",
  "ما","أنت","من","أنت","كيف","حالك","كيف","حالك","كيف","الحال","جيدة","جيدة","ما","يمكنك","فعله","ما","يمكنك","فعله",
  "هل","أنت","إنسان","هل","أنت","حقيقي","هل","انت","انسان","الحب","هل","تحبني","ما","هو","الحب","بالنسبة","لك","ما","هو","الحب","بالنسبة","لي","لك",
];
function jokesever() {
  let jokes = [
                "How do trees get on the Internet?<br/>They log in.",
                "What do computers like to eat?<br/>Chips.",
                "What do you call a space magician?<br/>A flying saucerer.",
                "What is a computer’s first sign of old age?<br/>Loss of memory.",
                "What does a baby computer call his father?<br/>Instead of Da-da it says “Da-ta.”",
                "What is an astronaut’s favorite control on the computer keyboard?<br/>The space bar.",
                "What happened when the computer fell on the floor?<br/>It slipped a disk.",
                "How does a boy cell phone propose to his girlfriend?<br/>He gives her a ring, of course.",
                "Why was there a bug in the computer?<br/>It was looking for a byte to eat.",
                "What is a computer virus?<br/>A terminal illness.",
                "How did the mouse get out of the Roman Cathedral?<br/>He clicked on an icon and opened a window.",
                "What kind of doctor fixes broken websites?<br/>A URLologist.",
                "Have you heard about the Disney virus?<br/>It makes everything on your computer go Goofy.",
                "What happened when a dragon breathed on several Macintosh computers?<br/>He wound up with baked Apples!",
                "Why did the chicken cross the Web?<br/>To get to the other site.",
                "Why did the computer go to a doctor?<br/>It thought it had a terminal illness",
                "Knock-knock!<br/>Who’s there?<br/>I-M.<br/>I-M, who?<br/>I-M on the computer, and I can’t answer the door.",
                "Why are spiders so addicted to their phones?<br/>They're always on the web!",
                "What do fishermen use on the internet?<br/>Clickbait!",
                "What is a pirate’s least favorite letter?<br/>Dear Sir/Ma’am,",
                "We are cutting your internet connection due to the following reasons:<br/>Illegal Downloading.",
                "Kid: “Dad! Who’s our internet service provider?”<br/>Dad: “I am.”",
                "I got the book “Internet Forums for Dummies” from a friend.<br/>But I need to take it back, because I already Reddit.",
                "How do you stop an Internet troll?<br/>Seize their memes of production.",
                "I’ve got a meeting with the guy that invented the progress bar during the era of dialup internet.<br/>He’s going to be here in 2 hours and 13 minutes.<br/>Edit: Apparently he’s stuck in traffic and he’s going to be here in 6 hours 54 minutes.<br/>Edit2: He’s making better progress than thought, he will be here in 12 minutes.<br/>Edit3: Apparently it will now take him 5 days.",
                "I wonder what my parents did to fight boredom before the internet?<br/>I asked my 18 brothers and sisters and they don’t know either.",
                "I accidentally sent my friend flowers over the internet.<br/>Whoops, E-Daisies!",
                "I suggested we meet up.<br/>She turned out to be an undercover detective.<br/>How cool is that at her age?",
                "What do you call it when there is no internet in Russia?<br/>Internyet.",
                "If the Internet had a boat, where would they park it?<br/>In Google Docs.",
                "Who is a famous explorer from the past that has been largely forgotten?<br/>Internet Explorer.",
                "Yo momma so fat…<br/>There’s people on the internet who believe she’s flat, not round.",
                "How do you pay for internet memes?<br/>With a reddit card.",
                "My internet router is in my basement.<br/>You could say that I come from a LAN down under.",
                "If cows don’t have internet, how do they order things?<br/>From a cattle log.",
                "Met my parents.<br/>They’re nice people.",
                "Losing weight using the internet is so darn difficult.<br/>Like every weight loss website I visit, I get cookies.",
                "What do you call a “high five” over the internet?<br/>A wi-five.",
                "I tried looking up ice cream puns on the internet…<br/>But then my browser froze.",
                "Why are there a lot of grammar nazis on the internet?<br/>Because English majors can’t find jobs.",
                "How can you tell when the NSA is monitoring your computer?<br/>The power is on and you’re connected to the internet.",
                "What is the most commonly searched term on Internet Explorer?<br/>Google Chrome."
              ]
  let jokcn = window.localStorage.getItem("jokes");
  let Y="";
  let conter="";
  if (jokcn!=null&&jokcn!="") {
    conter = jokcn;
  }
  else {
    conter = 0;
  }
  for (var i = 0; i < jokes.length; i++) {
    Y = Math.floor((Math.random() * jokes.length));
    Y = eval(Y-1);
    if (Y!=conter) {
      jokecounter = conter;
      break;
    }
  }
  var newelemX = document.createElement("div");
  var paraX = document.createElement("p");
  paraX.innerHTML = jokes[Y];
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
  window.localStorage.setItem("jokes", jokecounter);
}
function spidratertoty(spidraX) {
  var home = document.querySelector(".hoster");
  var spidra = document.getElementById('body');
  if (spidraX=="toggle") {
    if (home.style.display=="block") {
      home.style.display = "none";
      spidra.style.display = "block";
    }
    else if (spidra.style.display=="block") {
      home.style.display = "block";
      spidra.style.display = "none";
    }
  }
  else if (spidraX=="home") {
    home.style.display = "block";
    spidra.style.display = "none";
  }
  else if (spidraX=="spidra") {
    home.style.display = "none";
    spidra.style.display = "block";
  }
}
//chat to SpiderAssist
function chatspidra() {
  var ava = document.getElementById('colcon2').value.trim().toUpperCase()
  var avaiy="";
  var Y="";
  var ramdomayzerram = document.getElementById('ramdomayzerram').value;
  counter = (response.length);
  response.forEach((item, i) => {
    itemcont = item.patterns.length;
    for (var w = 0; w < itemcont ; w++) {
      if (ava === item.patterns[w].toUpperCase()) {
        var ramdomayzer = item.responses.length
        outrscpc = ramdomayzer*2;
        for (var i = 0; i < outrscpc; i++) {
          Y = Math.floor((Math.random() * ramdomayzer));
          if (ramdomayzerram != Y) {
            break;
          }
          else {
            if (Y == ramdomayzer) {
              Y = Y-1;
            }
            else {
              Y = Y+1;
            }
          }
        }
        document.getElementById('ramdomayzerram').value = Y;
        avaiy = item.responses[Y];
      }
    }
  });
  if (avaiy == "") {
    for (var i = 0; i < 6; i++) {
      Y = Math.floor((Math.random() * 3));
      if (ramdomayzerram != Y) {
        break;
      }
    }
    const avaarabic =  ava.split("");
    for (var i = 0; i < 30; i++) {
      if (avaarabic[0] == arabicletters[i]) {
        Y = Y+3;
      }
    }
    avaiy = NOTUNDERSTAND[Y]
    document.getElementById('ramdomayzerram').value = Y;
  }
  var newelemX = document.createElement("div");
  var paraX = document.createElement("p");
  paraX.innerHTML = avaiy;
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
  document.getElementById("colcon2").value = "";
}
var arabicletters = ["ا","أ","ب","ت","ث","ض","ص","ق","ف","غ","ع","ه","خ","ح","ج","د","ذ"
                    ,"ش","س","ي","ل","ن","م","ك","ط","ئ","ء","ؤ","ر","لا","ى","ة","و","ز","ظ"]
var NOTUNDERSTAND = ["Sorry, can't understand you", "Please give me more info", "Not sure I understand",
                     "عذرًا , لا يمكنني فهمك" , "من فضلك أعطني مزيدًا من المعلومات" , "لست متأكدًا من فهمي"]
var response = [
        {
            "tag": "greeting",
            "patterns": [ "Hi", "How are you", "Is anyone there?", "Hello", "Good day","Good Morning","Good Afternoon","Good evening" ],
            "responses": [ "Hello, thanks for visiting", "Good to see you again", "Hi there, how can I help?" ],
            "context_set": ""
        },
        {
            "tag": "greeting",
            "patterns": [ "Good one", "Hhh", "Hhhh", "Hhhhh", "Nice one"],
            "responses": [ "Glad i made Laugh", "i'm happy you like it", "Any Time" ],
            "context_set": ""
        },
        {
            "tag": "goodbye",
            "patterns": [ "Bye", "See you later", "Goodbye" ],
            "responses": [ "See you later, thanks for visiting", "Have a nice day", "Bye! Come back again soon." ]
        },
        {
            "tag": "thanks",
            "patterns": [ "Thanks", "Thank you", "That's helpful" ],
            "responses": [ "Happy to help!", "Any time!", "My pleasure" ]
        },
        {
            "tag": "hours",
            "patterns": [ "What hours are you open?", "What are your hours?", "When are you open?", "When is the time to contact ?", "At what time do you provide services ?" ],
            "responses": [ "We're open every day from 9AM to 9PM", "Our working hours are 9AM to 9PM every day" ]
        },
        {
            "tag": "location",
            "patterns": [ "What is your location?", "Where are you located?", "What is your address?", "Where is your company situated?", "How can we contact you ?", "How can I contact you?" ],
            "responses": [ "We are on BH-5, LPU", "Our company is situated in BH-5, LPU", "We work from BH-5 LPU", "Our location is BH-5 LPU"]
        },
        {
            "tag": "payments",
            "patterns": [ "Do you take credit cards?", "Do you accept Mastercard?", "Are you cash only?", "Which credit cards do you accept?" ],
            "responses": [ "We accept VISA, Mastercard and AMEX", "We accept most major credit cards" ]
        },
        {
            "tag": "services",
            "patterns": [ "What are the services that you provide?", "Which services do you provide?", "How can you help us?", "What can you do?" ],
            "responses": [ "We provide Web Penetration Testing,Android Penetration Testing,Docker Penetration Testing,Vulnerability Assessment,Cyber Crime investigation and many more services." ]
        },
        {
            "tag": "training",
            "patterns": [ "Do you provide industrial training?", "Do you deliver webinars on cybersecurity?", "Do you provide Summer training?", "Do you conduct workshops?" ],
            "responses": [ "Yes, we provide trainings in Cybersecurity", "Yes, we conduct workshops on Cybersecurity", "Yes, we conduct webinars on cybersecurity" ],
            "context_set": "training"
        },
        {
            "tag": "Cryptography",
            "patterns": [ "What is mean by cryptography?", "What is Cryptography?" ],
            "responses": [ "Cryptography is the practice and study of techniques for securing information and communication mainly to protect the data from third parties that the data is not intended for." ]
        },
        {
            "tag": "Firewall",
            "patterns": [ " What is a Firewall and why is it used?", "what is firewall?", "what firewall does?" ],
            "responses": [ "A Firewall is a network security system set on the boundaries of the system/network that monitors and controls network traffic. Firewalls are mainly used to protect the system/network from viruses, worms, malware, etc. Firewalls can also be to prevent remote access and content filtering." ]
        },
        {
            "tag": "Penetration Testing",
            "patterns": [ "What is Penetration Testing?", "explain Penetration Testing?", "What is  in cyber security?" ],
            "responses": [ "Penetration Testing is the process of finding vulnerabilities on the target. In this case, the organization would have set up all the security measures they could think of and would want to test if there is any other way that their system/network can be hacked." ]
        },
        {
            "tag": "Vulnerability Assessment",
            "patterns": [ "What is Vulnerability Assessment?", "explain Vulnerability Assessment?", "What is VA in cyber security?" ],
            "responses": [ "Vulnerability Assessment is the process of finding flaws on the target. Here, the organization knows that their system/network has flaws or weaknesses and want to find these flaws and prioritize the flaws for fixing." ]
        },
        {
            "tag": "traceroute",
            "patterns": [ "What is traceroute?", "explain traceroute?" ],
            "responses": [ "Traceroute is a tool that shows the path of a packet. It lists all the points (mainly routers) that the packet passes through. This is used mostly when the packet is not reaching its destination. Traceroute is used to check where the connection stops or breaks to identify the point of failure." ]
        },
        {
            "tag": "VPN",
            "patterns": [ "What is a VPN?", "explain vpn?", "why vpn is used?" ],
            "responses": [ "VPN stands for Virtual Private Network. It is used to create a safe and encrypted connection. When you use a VPN, the data from the client is sent to a point in the VPN where it is encrypted and then sent through the internet to another point. At this point, the data is decrypted and sent to the server. When the server sends a response, the response is sent to a point in the VPN where it is encrypted and this encrypted data is sent to another point in the VPN where it is decrypted. And finally, the decrypted data is sent to the client. The whole point of using a VPN is to ensure encrypted data transfer." ]
        },
        {
            "tag": "black hat hackers",
            "patterns": [ "what are black hat hackers?", "black hat hackers?" ],
            "responses": [ "Black hat hackers are known for having vast knowledge about breaking into computer networks. They can write malware which can be used to gain access to these systems. This type of hackers misuse their skills to steal information or use the hacked system for malicious purpose." ]
        },
        {
            "tag": "White hat hackers",
            "patterns": [ "what are White hat hackers?", "ethical hackers?" ],
            "responses": [ "White hat hackers use their powers for good deeds and so they are also called Ethical Hackers. These are mostly hired by companies as a security specialist that attempts to find and fix vulnerabilities and security holes in the systems. They use their skills to help make the security better. " ]
        },
        {
            "tag": "Grey hat hackers",
            "patterns": [ "what are Grey hat hackers ?", "Grey hat hackers?" ],
            "responses": [ "Grey hat hackers are an amalgamation of a white hat and black hat hacker. They look for system vulnerabilities without the owner�s permission. If they find any vulnerabilities, they report it to the owner. Unlike Black hat hackers, they do not exploit the vulnerabilities found." ]
        },
        {
            "tag": "ARP",
            "patterns": [ "What is an ARP and how does it work?", "what is ARP?", "arp in cyber security?" ],
            "responses": [ "Address Resolution Protocol (ARP)is a protocol for mapping an Internet Protocol address (IP address) to a physical machine address that is recognized in the local network. When an incoming packet destined for a host machine on a particular local area network arrives at a gateway, the gateway asks the ARP program to find a physical host or MAC address that matches the IP address." ]
        },
        {
            "tag": "Botnet",
            "patterns": [ "What is a Botnet?", "Bonet?" ],
            "responses": [ "A Botnet is a number of devices connected to the internet where each device has one or more bots running on it. The bots on the devices and malicious scripts used to hack a victim. Botnets can be used to steal data, send spams and execute a DDOS attack." ]
        },
        {
            "tag": "Secure Sockets Layers",
            "patterns": [ "ssl?", "explain ssl?", "What is ssl?" ],
            "responses": [ "SSL is meant to verify the sender's identity but it doesn�t search for anything more than that. SSL can help you track the person you are talking to but that can also be tricked at times." ]
        },
        {
            "tag": "Transport Layer Security",
            "patterns": [ "tls?", "explain tls?", "What is tls?" ],
            "responses": [ "TLS is also an identification tool just like SSL, but it offers better security features. It provides additional protection to the data and hence SSL and TLS are often used together for better protection." ]
        },
        {
            "tag": "Cognitive Cybersecurity",
            "patterns": [ "What is Cognitive Cybersecurity?", "explain Cognitive Cybersecurity?", "Cognitive Cybersecurity?" ],
            "responses": [ "Cognitive Cybersecurity is an application of AI technologies patterned on human thought processes to detect threats and protect physical and digital systems. Self-learning security systems use data mining, pattern recognition, and natural language processing to simulate the human brain, albeit in a high-powered computer model." ]
        },
        {
            "tag": "Encryption different from Hashing",
            "patterns": [ "How is Encryption different from Hashing?", "Encryption different from Hashing?" ],
            "responses": [ "Both Encryption and Hashing are used to convert readable data into an unreadable format. The difference is that the encrypted data can be converted back to original data by the process of decryption but the hashed data cannot be converted back to original data." ]
        },
        {
            "tag": "encryption",
            "patterns": [ "What is encryption?", "encryption?", "explain encryption?" ],
            "responses": [ "Encryption is a way of scrambling data so that only authorized parties can understand the information. In technical terms, it is the process of converting plaintext to ciphertext. In simpler terms, encryption takes readable data and alters it so that it appears random. Encryption requires the use of an encryption key: a set of mathematical values that both the sender and the recipient of an encrypted message know." ]
        },
        {
            "tag": "Decryption",
            "patterns": [ "What is Decryption?", "Decryption?", "explain Decryption?" ],
            "responses": [ "Decryption is the process of taking encoded or encrypted text or other data and converting it back into text that you or the computer can read and understand. This term could be used to describe a method of unencrypting the data manually or unencrypting the data using the proper codes or keys." ]
        },
        {
            "tag": "Hashing",
            "patterns": [ "What is Hashing?", "Hashing?", "explain Hashing?" ],
            "responses": [ "Hashing is an algorithm performed on data such as a file or message to produce a number called a hash. The hash is used to verify that data is not modified, tampered with, or corrupted. In other words, you can verify the data has maintained integrity." ]
        },
        {
            "tag": "cybersecurity",
            "patterns": [ "what is cybersecurity?", "cybersecurity?" ],
            "responses": [ "Cybersecurity refers to the protection of hardware, software, and data from attackers. The primary purpose of cyber security is to protect against cyberattacks like accessing, changing, or destroying sensitive information." ]
        },
        {
            "tag": "Forward Secrecy",
            "patterns": [ "What is forward secrecy?", "Forward Secrecy?" ],
            "responses": [ "Forward Secrecy is a system that uses ephemeral session keys to do the actual encryption of TLS data so that even if the server�s private key were to be compromised, an attacker could not use it to decrypt captured data that had been sent to that server in the past." ]
        },
        {
            "tag": "boot sector virus",
            "patterns": [ "what is boot sector virus?", "how boot sector virus effects?" ],
            "responses": [ "A boot sector virus is a type of virus that infects the boot sector of floppy disks or the Master Boot Record (MBR) of hard disks (some infect the boot sector of the hard disk instead of the MBR). ... While boot sector viruses infect at a BIOS level, they use DOS commands to spread to other floppy disks." ]
        },
        {
            "tag": "direct action virus",
            "patterns": [ "what is direct action virus?", "how direct action virus effects?" ],
            "responses": [ "A direct action virus is a type of file infector virus that works by attaching itself to an .exe or .com file when installed or executed. Once this occurs, the virus can spread to other existing files and can render them inaccessible." ]
        },
        {
            "tag": "resident virus",
            "patterns": [ "what is resident virus?", "how resident virus effects?" ],
            "responses": [ "A resident virus is a computer virus that stores itself within memory, allowing it to infect other files even when the originally infected program is no longer running." ]
        },
        {
            "tag": "multipartite virus",
            "patterns": [ "what is multipartite virus?", "how multipartite virus effects?" ],
            "responses": [ "A multipartite virus is a computer virus that's able to attack both the boot sector and executable files of an infected computer. If you're familiar with cyber threats, you probably know that most computer viruses either attack the boot sector or executable files." ]
        },
        {
            "tag": "spacefiller virus",
            "patterns": [ "what is spacefiller virus?", "how spacefiller virus effects?" ],
            "responses": [ "Alternatively referred to as a cavity virus, a spacefiller virus is a rare type of computer virus that attempts to install itself by filling in empty sections of a file. By only using empty sections of a file, the virus can infect a file without the size of the file changing, making it more difficult to detect." ]
        },
        {
            "tag": " file infector virus",
            "patterns": [ "Do you provide home delivery?", "Do you deliver the food?", "What are the home delivery options?" ],
            "responses": [ "A file infector virus attaches itself to executable programs, such as word processors, spreadsheet applications, and computer games. When the virus has infected a program, it propagates to infect other programs on the system, as well as other systems that use a shared infected program. " ]
        },
        {
            "tag": "computer virus",
            "patterns": [ "what is computer virus?", "What do you mean by computer virus?","Define Computer Virus" ],
            "responses": [ "A computer virus, much like a flu virus, is designed to spread from host to host and has the ability to replicate itself. Similarly, in the same way that flu viruses cannot reproduce without a host cell, computer viruses cannot reproduce and spread without programming such as a file or document." ]
        },
        {
            "tag": "Features of a Cybersecurity",
            "patterns": [ "Important Features of a Cybersecurity?", "Why we need CyberSecurity ?", "Whta are features of CyberSecurity?" ],
            "responses": [ "1.Good Analytics, 2.Coverage of your biggest external threats, 3.A defense against internal threats, 4.Compliance, 5.Manage risk across your entire ecosystem, 6.Threat prevention, detection, and response, 7.Continuous monitoring" ]
        },
        {
            "tag": "Benefits of cybersecurity",
            "patterns": [ "What are the Benefits of cybersecurity?", "uses of cyber security?" ],
            "responses": [ "1.Business protection against malware, ransomware, phishing and social engineering, 2.Protection for data and networks, 3.Prevention of unauthorized users, 4.Improves recovery time after a breach, 5.Protection for end-users" ]
        },
        {"tag": "greeting",
         "patterns": ["Hi there", "How are you", "Is anyone there?","Hey","Hola", "Hello", "Good day"],
         "responses": ["Hello, thanks for asking", "Good to see you again", "Hi there, how can I help?"],
         "context": [""]
        },
        {"tag": "goodbye",
         "patterns": ["Bye", "See you later", "Goodbye", "Nice chatting to you, bye", "Till next time"],
         "responses": ["See you!", "Have a nice day", "Bye! Come back again soon."],
         "context": [""]
        },
        {"tag": "thanks",
         "patterns": ["Thanks", "Thank you", "That's helpful", "Awesome, thanks", "Thanks for helping me"],
         "responses": ["Happy to help!", "Any time!", "My pleasure"],
         "context": [""]
        },
        {"tag": "noanswer",
         "patterns": [],
         "responses": ["Sorry, can't understand you", "Please give me more info", "Not sure I understand"],
         "context": [""]
        },
        {"tag": "options",
         "patterns": ["How you could help me?", "What help you provide?", "How you can be helpful?"],
         "responses": ["I can guide you through Adverse management problems, order tracking, person to be contacted and Department related queries","I can provide support related to following problems technical query,management related query,order related query,tracking related query,procurement query,outsourcing problem,manufacturing delay,"],
         "context": [""]
        },
        {"tag": "order_tracking",
         "patterns": ["where is order with id 431B67?", "track order 562B78", "Where is my order with id 561A24?" ],
         "responses": ["Delayed","Dispatched","On the Way!"],
         "context": [""]
        },
        {"tag": "order_components",
         "patterns": ["order id 345A23 comprises of?","List of components"],
         "responses": ["order comprises of hardisk and bluetooth"],
         "context": [""]
        },
        {"tag": "missing_id",
         "patterns": ["where is the order","where is my order","locate the order","Delivery date of order"],
         "responses": ["Please enter with order ID"],
         "context": [""]
        },
        {"tag": "Location",
         "patterns": ["find order location 32712","What is the Location of order 23A31?"],
         "responses": ["It is in germany","It is in Berlin","It has reached china","It has reached Banglore"],
         "context": [""]
        },
        {"tag": "search_person_by_id",
         "patterns": ["I want an appoitment with Manoj kumar","set an appointment with Sujata Nandi"],
         "responses": ["Fixing an appointment."],
         "context": [""]
        },
        {"tag": "appointment status",
         "patterns": ["Is my appointment fixed?","Do I have an appointment today?"],
         "responses": ["Yes","NO! Not Yet"],
         "context": [""]
        },
        {"tag": "check_leave",
         "patterns": ["Is Sujata Nandi on leave?","Is Manish Kumar on leave?"],
         "responses": ["No Not On Leave","Yes On Leave"],
         "context": [""]
        },
         {"tag": "cost_lowering",
         "patterns": ["Cost Lowering changes to be made?","what changes could lower cost?"],
         "responses": ["Increase Transportation capacity utilisation,Increase supply chain velocity,Reduce order variability"],
         "context": [""]
        },
         {"tag": "forgot_password",
         "patterns": ["I forgot my Login password?","what to do when someone forgets Login password?","I forgot my Laptop password","Forgot Wifi password"],
         "responses": ["Please enter your email id ,we will send a link on your email"],
          "context": [""]
        },
          {"tag": "email_id",
          "patterns":["abx@gmail.com","abc@kiit.ac.in"],
          "responses":["Link has been shared.Please change your password"],
           "context": [""]
        },
        {"tag": "manufacturing_problems",
         "patterns": ["Find me a manufacturer nearby"],
         "responses": ["The nearest manufacturer is Vietnam"],
         "context": [""]
        },
        {"tag": "search_department",
         "patterns": ["I want to know the various departments in this company"],
         "responses": ["The department are:Projects,IT,Production,OutSource"],
         "context": [""]
        },
        {"tag": "competitors_in_market",
         "patterns": ["what are challenging events", "what are the threats in the market"],
         "responses": ["Recent news of Demonetisation & recession"],
         "context": [""]
        },
        {"tag": "key_customers",
         "patterns": ["Our Target customers", "who are your key customers"],
         "responses": ["Our target customers are in the range of age 20-40"],
         "context": [""]
        },
        {"tag": "supplier_info",
         "patterns": ["What information is shared with supplier?"],
         "responses": ["Production Schedule,Delivery Schedule,Proxy information about cost"],
         "context": [""]
        },
        {"tag": "highest_grossing",
         "patterns": ["What is the highest grossing product?"],
         "responses": ["Laptop with touch sensors and 360 rotation"],
         "context": [""]
        },
        {"tag": "connect_people",
         "patterns": ["I want to meet the head of HR/IT/Projects department","I want to meet head IT Rakesh sharma."],
         "responses": ["I will just check if he is available or on leave."],
         "context": ["search_attendance_database_name_post"]
        },
        {"tag": "project_handling_queries",
         "patterns": ["complaint has been raised for Insufficient Team Skills","Miscommunication Conflicts needs to be resolved","Risk Management issue has occured","skilled employees needed urgently"],
         "responses": ["Please contact the project depatment"],
         "context": [""]
        },
        {"tag": "solve_problems",
         "patterns": ["Lack of product clarity","the specifications of product is not clear to customer. what should we do"],
         "responses": ["Please enter product id and customer id.specifications shall be sent to user"],
         "context": [""]
        },
         {"tag": "version_update",
         "patterns": ["user needs the updated software version","user demands software updation"],
         "responses": ["version updation request raised"],
         "context": [""]
          },
        {"tag": "HR_related_problem",
         "patterns": ["problem related to Job design and analysis","query based on Workforce planning","Training and development issues are to be handled","Compensation and benefits of the working employee","Legal issues of department like accidents in the company"],
         "responses": ["Please Contact the HR team for this problem."],
         "context": [""]
        },
        {"tag": "factors_impacting_sale",
         "patterns": ["Impact on sale?","factors impacting sale this year?"],
         "responses": ["elections will impact our sale this year","this year our sale might increase during durga puja","this year sale might be impacted due to demonitisation"],
         "context": [""]
        },

        {"tag": "predict_performance",
         "patterns": ["how have we improved our sale from last year?","what is the profit this year?"],
         "responses": ["we have improved our sale by increasing our customers upto 2 lakh","profit earned is 15%"],
         "context": [""]
        },
         {"tag": "customer_satisfaction",
         "patterns": ["how was the customer response","Is the customer happy?","what was the customer feedback?"],
         "responses": ["Customer was happy and has given good rating"],
         "context": [""]
        },
        {"tag": "maintainence",
         "patterns": ["maintainence related queries recorded"],
         "responses": ["lift is not working, projector misfuctioning"],
         "context": [""]
        },
         {"tag": "gadgets",
         "patterns": ["what are the gadgets in stock?","which products we have?"],
         "responses": ["hardisk,pendrives, wireless bluetooth,Laptops,Gaming Accessories"],
         "context": [""]
        },
        {"tag": "commission",
         "patterns": ["what is the Commission rate?","Commission rate on each product?"],
         "responses": ["Commission rate is 5% on laptops,25%on bluetooth device,10% on Desktop"],
         "context": [""]
        },
        {"tag": "invalid",
         "patterns": ["Marry me","I love You","date me","chat with me","I am bored"],
         "responses": ["Please ask organisation related query."],
         "context": [""]
        },
        {"tag": "noans",
         "patterns": ["why","how","when","I","you"],
         "responses": ["Can't Understand Your Question","please elaborate your question"],
         "context": [""]
        },
        {"tag": "turnover",
         "patterns": ["what is the turnover of the company at present?"],
         "responses": ["10 Million Ton"],
         "context": [""]
        },
        {"tag": "predict_delay",
         "patterns": ["why is order 23A12 delayed"],
         "responses": ["delay is due to manufacuring","Delay is due to inavailable components"],
         "context": [""]
        },
        {"tag": "predict_delay",
         "patterns": ["why is order 23A12 delayed"],
         "responses": ["delay is due to manufacuring","Delay is due to inavailable components"],
         "context": [""]
        },
        {"tag": "name",
         "patterns": ["what is your name?","what should I call you?"],
         "responses": ["I'm Bruno","Hey!I'm Bruno"],
         "context": [""]
        },
         {"tag": "about",
         "patterns": ["how you doing?","how are you"],
         "responses": ["Thanks For Asking!How can I help you?"],
         "context": [""]
        },
        {"tag":"configuration",
          "patterns":["How to configure my laptop","software configuration of laptop","steps to configure laptop","How to configure my computer","software configuration of computer","steps to configure computer","How to configure my desktop","software configuration of desktop","steps to configure desktop"],
          "responses":["search tab->control panel->select specific application->download update->give permission"],
          "context":[""]
        },
        {"tag": "Weather",
         "patterns": ["what is the weather today?"],
         "responses": ["It's 36C according to accuweather"],
         "context": [""]
        },
        {"tag": "leave",
         "patterns": ["Is Michel Sharma on leave?","Is Siddhart Roy present today?","Is Shantanu Bhatt in office?"],
         "responses": ["Give me a moment!I'll just check","yes","no"],
         "context": [""]
        },
        {"tag": "hours",
         "patterns": ["Opening hours of the cafeteria?","when does the cafeteria open","office canteen opening time"],
         "responses": ["It is open from Monday-Saturday 9:00am-7:30pm"],
         "context": [""]
        },
         {"tag": "cabin",
         "patterns": ["where is VP cabin?","Where is Head IT cabin?","Where is AI department","Where is Project head department?","where is cafeteria","guide me to the canteen"],
         "responses": ["Block-A 3rd floor 1st room","Block-B 2nd Floor","Block-D Ground Floor"],
         "context": [""]
        },
        {"tag":"domain",
          "patterns":["How to improve team members domain knowledge","improving domain knowledge of team members"],
          "responses":["set up key meetings and workshop,create a shared drive for information,Hold informal sharing session"],
          "context":[""]
        },
        {
          "tag": "تحية",
          "patterns": ["مرحبًا" , "كيف حالك" , "هل يوجد أحد هناك؟" , "مرحبًا" , "يوم جيد", "سلام", "السلام عليكم", "السلام","سلام عليكم" ] ,
          "responses": ["مرحبًا , شكرًا على الزيارة" , "من الجيد رؤيتك مرة أخرى" , "مرحبًا , كيف يمكنني المساعدة؟" ] ,
          "context_set": ""
       } ,
        {
          "tag": "وداعًا" ,
          "patterns": ["وداعًا" , "أراك لاحقًا" , "وداعًا", "باي", "في امان الله"] ,
          "responses": ["أراك لاحقًا , شكرًا لزيارتك" , "أتمنى لك يومًا سعيدًا" , "إلى اللقاء! عد مرة أخرى قريبًا." ]
        } ,
      {
        "tag": "شكرًا" ,
        "patterns": ["شكرًا" , "شكرًا" , "هذا مفيد"] ,
        "responses": ["تسعدني المساعدة!" , "في أي وقت!" , "من دواعي سروري"]
        } ,
      {
        "tag": "ساعات",
        "patterns": ["ما هي ساعات العمل؟" , "ما هي ساعات عملك؟" , "متى تفتح؟" , "ما هو وقت الاتصال؟" , "في أي وقت تقدم الخدمات؟" ] ,
        "responses": ["نحن نعمل يوميًا من 9 صباحًا إلى 9 مساءً" , "ساعات عملنا من 9 صباحًا إلى 9 مساءً كل يوم"]
        } ,
      {
        "tag": "الموقع",
        "patterns": ["ما هو موقعك؟" , "أين تقيم؟" , "ما هو عنوانك؟" , "أين تقع شركتك؟" , "كيف يمكننا الاتصال بك؟" , "كيف يمكننا يمكنني الاتصال بك؟" ] ,
        "responses": ["نحن على BH-5 , LPU" , "شركتنا تقع في BH-5 , LPU" , "نحن نعمل من BH-5 LPU" , "موقعنا هو BH-5 LPU"]
        } ,
      {
        "tag": "المدفوعات",
        "patterns": ["هل تأخذ بطاقات الائتمان؟" , "هل تقبل Mastercard؟" , "هل أنت نقدًا فقط؟" , "ما هي بطاقات الائتمان التي تقبلها؟" ] ,
        "responses": ["نحن نقبل VISA و Mastercard و AMEX" , "نحن نقبل معظم بطاقات الائتمان الرئيسية"]
        } ,
      {
        "tag": "الخدمات" ,
        "patterns": ["ما هي الخدمات التي تقدمها؟" , "ما هي الخدمات التي تقدمها؟" , "كيف يمكنك مساعدتنا؟" , "ماذا يمكنك أن تفعل؟" ] ,
        "responses": ["نحن نقدم اختبار اختراق الويب , واختبار اختراق Android , واختبار اختراق Docker , وتقييم الضعف , والتحقيق في الجرائم الإلكترونية والعديد من الخدمات الأخرى." ]
        } ,
      {
        "tag": "تدريب",
        "patterns": ["هل تقدم تدريبًا صناعيًا؟" , "هل تقدم ندوات عبر الإنترنت حول الأمن السيبراني؟" , "هل تقدم تدريبًا صيفيًا؟" , "هل تعقد ورش عمل؟" ] ,
        "responses": ["نعم , نحن نقدم دورات تدريبية في مجال الأمن السيبراني" , "نعم , نحن نعقد ورش عمل حول الأمن السيبراني" , "نعم , نجري ندوات عبر الإنترنت حول الأمن السيبراني"] ,
        "Context_set": "training"
        } ,
      {
        "tag": "التشفير" ,
        "patterns": ["ما المقصود بالتشفير؟" , "ما هو التشفير؟" ] ,
        "responses": ["التشفير هو ممارسة ودراسة تقنيات لتأمين المعلومات والاتصالات بشكل أساسي لحماية البيانات من الأطراف الثالثة التي لا تهدف البيانات إليها." ]
        } ,
      {
        "tag": "اختبار الاختراق" ,
        "patterns": ["ما هو اختبار الاختراق؟" , "شرح اختبار الاختراق؟" , "ما هو في الأمن السيبراني؟" ] ,
        "responses": ["اختبار الاختراق هو عملية اكتشاف الثغرات الأمنية على الهدف. في هذه الحالة , قد تكون المنظمة قد أعدت جميع التدابير الأمنية التي يمكن أن يفكروا فيها وترغب في اختبار ما إذا كان هناك أي طريقة أخرى يستخدمها نظامهم / الشبكة يمكن اختراقها "]
        } ,
      {
        "tag": "تقييم الضعف" ,
        "patterns": ["ما هو تقييم الضعف؟" , "شرح تقييم الضعف؟" , "ما هو VA في الأمن السيبراني؟" ] ,
        "responses": ["تقييم الضعف هو عملية اكتشاف العيوب على الهدف. هنا , تعرف المنظمة أن نظامها / شبكتها بها عيوب أو نقاط ضعف وتريد اكتشاف هذه العيوب وتحديد أولويات العيوب لإصلاحها." ]
        } ,
      {
        "tag": "traceroute",
        "patterns": ["ما هو مسار التتبع؟" , "شرح مسار التتبع؟" ] ,
        "responses": ["Traceroute هي أداة تعرض مسار الحزمة. تسرد جميع النقاط (أجهزة التوجيه بشكل أساسي) التي تمر الحزمة عبرها. يستخدم هذا غالبًا عندما لا تصل الحزمة إلى وجهتها. يتم استخدام Traceroute في تحقق من مكان توقف الاتصال أو انقطاعه لتحديد نقطة الفشل. " ]
        } ,
      {
        "tag": "قراصنة القبعة السوداء",
        "patterns": ["ما هم قراصنة القبعة السوداء؟" , "قراصنة القبعة السوداء؟" ] ,
        "responses": ["قراصنة القبعة السوداء معروفون بامتلاكهم معرفة واسعة باختراق شبكات الكمبيوتر. يمكنهم كتابة برامج ضارة يمكن استخدامها للوصول إلى هذه الأنظمة. يسيء هذا النوع من المتسللين استخدام مهاراتهم لسرقة المعلومات أو استخدام القرصنة نظام لغرض ضار "]
        } ,
      {
        "tag": "قراصنة القبعة البيضاء",
        "patterns": ["ما هم قراصنة القبعة البيضاء؟" , "المتسللون الأخلاقيون؟" ] ,
        "responses": ["يستخدم قراصنة القبعة البيضاء صلاحياتهم في الأعمال الصالحة ولذا يطلق عليهم أيضًا القراصنة الأخلاقيين. يتم توظيف هؤلاء في الغالب من قبل الشركات كأخصائي أمان يحاول العثور على نقاط الضعف والثغرات الأمنية في الأنظمة وإصلاحها. مهاراتهم للمساعدة في تحسين الأمان. "]
        } ,
      {
        "tag": "قراصنة القبعة الرمادية",
        "patterns": ["ما هم قراصنة قبعة غراي؟" , "قراصنة قبعة غراي؟" ] ,
        "responses": ["وهاكر القبعة السوداء. إنهم يبحثون عن نقاط ضعف النظام بدون إذن المالك. إذا وجدوا أي ثغرات أمنية , فإنهم يبلغون المالك عنها. بخلاف متسللي القبعة السوداء , فهم لا يستغلون نقاط الضعف الموجودة "]
        } ,
      {
        "tag": "ARP" ,
        "patterns": ["ما هو ARP وكيف يعمل؟" , "ما هو ARP؟" , "arp في الأمن السيبراني؟" ] ,
        "responses": ["بروتوكول تحليل العنوان (ARP) هو بروتوكول لتعيين عنوان بروتوكول الإنترنت (عنوان IP) إلى عنوان جهاز فعلي يتم التعرف عليه في الشبكة المحلية. عندما تكون حزمة واردة موجهة لجهاز مضيف على جهاز معين تصل شبكة المنطقة المحلية إلى بوابة , وتطلب البوابة من برنامج ARP العثور على مضيف فعلي أو عنوان MAC يطابق عنوان IP. " ]
        } ,
      {
        "tag": "Botnet",
        "patterns": ["ما هي Botnet؟" , "Bonet؟" ] ,
        "responses": ["A Botnet هو عدد من الأجهزة المتصلة بالإنترنت حيث يوجد على كل جهاز روبوت واحد أو أكثر يعمل عليه. الروبوتات الموجودة على الأجهزة والبرامج النصية الضارة المستخدمة لاختراق الضحية. يمكن استخدام شبكات الروبوت لسرقة البيانات , وإرسال رسائل غير مرغوب فيها وتنفيذ هجوم DDOS. " ]
        } ,
      {
        "tag": "أمان طبقة النقل" ,
        "patterns": ["tls؟" , "شرح tls؟" , "ما هو tls؟" ] ,
        "responses": ["TLS هي أيضًا أداة تعريف مثل SSL , ولكنها توفر ميزات أمان أفضل. فهي توفر حماية إضافية للبيانات , وبالتالي غالبًا ما يتم استخدام SSL و TLS معًا لتوفير حماية أفضل." ]
        } ,
      {
        "tag": "الأمن السيبراني المعرفي" ,
        "patterns": ["ما هو الأمن السيبراني المعرفي؟" , "شرح الأمن السيبراني المعرفي؟" , "الأمن السيبراني المعرفي؟" ] ,
        "responses": ["الأمن السيبراني المعرفي هو تطبيق لتقنيات الذكاء الاصطناعي المصممة على عمليات التفكير البشري لاكتشاف التهديدات وحماية الأنظمة المادية والرقمية. تستخدم أنظمة أمان التعلم الذاتي التنقيب عن البيانات , والتعرف على patterns , ومعالجة اللغة الطبيعية لمحاكاة الدماغ البشري , وإن كان في نموذج كمبيوتر عالي القدرة "]
        } ,
      {
        "tag": "تشفير مختلف عن التجزئة",
        "patterns": ["كيف يختلف التشفير عن التجزئة؟" , "التشفير يختلف عن التجزئة؟" ] ,
        "responses": ["يتم استخدام كل من التشفير والتجزئة لتحويل البيانات القابلة للقراءة إلى تنسيق غير قابل للقراءة. والفرق هو أنه يمكن تحويل البيانات المشفرة مرة أخرى إلى البيانات الأصلية من خلال عملية فك التشفير ولكن لا يمكن تحويل البيانات المجزأة مرة أخرى إلى البيانات الأصلية بيانات." ]
        } ,
      {
        "tag": "تشفير" ,
        "patterns": ["ما هو التشفير؟" , "التشفير؟" , "شرح التشفير؟" ] ,
        "responses": ["التشفير هو طريقة لخلط البيانات بحيث يمكن للأطراف المصرح لها فقط فهم المعلومات. من الناحية الفنية , هي عملية تحويل نص عادي إلى نص مشفر. بعبارات أبسط , يأخذ التشفير بيانات قابلة للقراءة ويغيرها بحيث يبدو عشوائيًا. يتطلب التشفير استخدام مفتاح تشفير: مجموعة من القيم الرياضية التي يعرفها كل من المرسل والمستقبل للرسالة المشفرة. " ]
        } ,
      {
        "tag": "فك التشفير" ,
        "patterns": ["ما هو فك التشفير؟" , "فك التشفير؟" , "شرح فك التشفير؟" ] ,
        "responses": ["فك التشفير هو عملية أخذ نص مشفر أو مشفر أو بيانات أخرى وإعادة تحويلها إلى نص يمكنك أنت أو الكمبيوتر قراءته وفهمه. يمكن استخدام هذا المصطلح لوصف طريقة لإلغاء تشفير البيانات يدويًا أو فك تشفير البيانات باستخدام الرموز أو المفاتيح المناسبة " ]
        } ,
      {
        "tag": "تجزئة" ,
        "patterns": ["ما هو التجزئة؟" , "التجزئة؟" , "شرح التجزئة؟" ] ,
        "responses": ["التجزئة عبارة عن خوارزمية يتم إجراؤها على بيانات مثل ملف أو رسالة لإنتاج رقم يسمى التجزئة. يتم استخدام التجزئة للتحقق من عدم تعديل البيانات أو العبث بها أو إتلافها. بمعنى آخر , أنت يمكن التحقق من أن البيانات قد حافظت على سلامتها "]
        } ,
      {
        "tag": "الأمن السيبراني" ,
        "patterns": ["ما هو الأمن السيبراني؟" , "الأمن السيبراني؟" ] ,
        "responses": ["يشير الأمن السيبراني إلى حماية الأجهزة والبرامج والبيانات من المهاجمين. والغرض الأساسي من الأمن السيبراني هو الحماية من الهجمات الإلكترونية مثل الوصول إلى المعلومات الحساسة أو تغييرها أو إتلافها"]
        } ,
      {
        "tag": "Forward Secrecy",
        "patterns": ["ما هي سرية إعادة التوجيه؟" , "إعادة التوجيه السرية؟" ] ,
        "responses": ["Forward Secrecy هو نظام يستخدم مفاتيح الجلسة المؤقتة للقيام بالتشفير الفعلي لبيانات TLS حتى إذا تم اختراق المفتاح الخاص للخادم , فلن يتمكن المهاجم من استخدامه لفك تشفير البيانات الملتقطة التي تم إرسالها إلى هذا الخادم في الماضي "]
        } ,
      {
        "tag": "فيروس قطاع التمهيد" ,
        "patterns": ["ما هو فيروس قطاع التمهيد؟" , "كيف تأثيرات فيروس قطاع التمهيد؟" ] ,
        "responses": ["فيروس قطاع التمهيد هو نوع من الفيروسات التي تصيب قطاع التمهيد للأقراص المرنة أو سجل التمهيد الرئيسي (MBR) للأقراص الثابتة (بعضها يصيب قطاع التمهيد في القرص الثابت بدلاً من MBR). ... بينما تصيب فيروسات قطاع التمهيد على مستوى BIOS , فإنها تستخدم أوامر DOS للانتشار إلى الأقراص المرنة الأخرى. " ]
        } ,
      {
        "tag": "فيروس الإجراء المباشر" ,
        "patterns": ["ما هو فيروس الإجراء المباشر؟" , "ما مدى تأثير فيروس الإجراء المباشر؟" ] ,
        "responses": ["فيروس الإجراء المباشر هو نوع من فيروسات معدية الملفات التي تعمل عن طريق إرفاق نفسها بملف .exe أو .com عند تثبيته أو تنفيذه. وبمجرد حدوث ذلك , يمكن للفيروس أن ينتشر إلى ملفات أخرى موجودة ويمكن أن يعرض يتعذر الوصول إليها "]
        } ,
      {
        "tag": "فيروس مقيم" ,
        "patterns": ["ما هو الفيروس المقيم؟" , "كيف يؤثر الفيروس المقيم؟" ] ,
        "responses": ["الفيروس المقيم هو فيروس كمبيوتر يخزن نفسه في الذاكرة , مما يسمح له بإصابة الملفات الأخرى حتى عندما لا يكون البرنامج المصاب أصلاً قيد التشغيل." ]
        } ,
      {
        "tag": "فيروس متعدد الأجزاء" ,
        "patterns": ["ما هو الفيروس متعدد الأجزاء؟" , "ما مدى تأثير الفيروس متعدد الأجزاء؟" ] ,
        "responses": ["الفيروس متعدد الأجزاء هو فيروس كمبيوتر قادر على مهاجمة كل من قطاع التمهيد والملفات القابلة للتنفيذ لجهاز كمبيوتر مصاب. إذا كنت معتادًا على التهديدات الإلكترونية , فمن المحتمل أنك تعلم أن معظم فيروسات الكمبيوتر إما تهاجم قطاع التمهيد أو ملفات قابلة للتنفيذ. " ]
        } ,
      {
        "tag": "spacefiller virus",
        "patterns": ["ما هو فيروس Spacefiller؟" , "كيف يؤثر فيروس Spacefiller؟" ] ,
        "responses": ["بدلاً من ذلك يشار إليه على أنه فيروس تجويف , فيروس spacefiller هو نوع نادر من فيروسات الكمبيوتر التي تحاول تثبيت نفسها عن طريق ملء أقسام فارغة من الملف. وباستخدام أقسام فارغة فقط من الملف , يمكن للفيروس إصابة ملف دون تغيير حجم الملف , مما يجعل اكتشافه أكثر صعوبة. " ]
        } ,
      {
        "tag": "file infector virus",
        "patterns": ["هل تقدم خدمة التوصيل إلى المنازل؟" , "هل توصل الطعام؟" , "ما هي خيارات التوصيل للمنازل؟" ] ,
        "responses": ["يربط فيروس معدي الملفات نفسه ببرامج قابلة للتنفيذ , مثل برامج معالجة النصوص وتطبيقات جداول البيانات وألعاب الكمبيوتر. وعندما يصيب الفيروس أحد البرامج , فإنه ينتشر ليصيب البرامج الأخرى الموجودة على النظام , بالإضافة إلى البرامج الأخرى الأنظمة التي تستخدم برنامجًا مصابًا مشتركًا. "]
        } ,
      {
        "tag": "فيروس الكمبيوتر",
        "patterns": ["ما هو فيروس الكمبيوتر؟" , "ماذا تقصد بفيروس الكمبيوتر؟" , "تعريف فيروس الكمبيوتر"] ,
        "responses": ["فيروس الكمبيوتر , مثل فيروس الأنفلونزا , مصمم للانتشار من مضيف إلى مضيف ولديه القدرة على تكرار نفسه. وبالمثل , بنفس الطريقة التي لا يمكن لفيروسات الإنفلونزا التكاثر بدون خلية مضيفة , فيروسات الكمبيوتر لا يمكن إعادة الإنتاج والانتشار بدون برمجة مثل ملف أو مستند. " ]
        } ,
      {
        "tag": "ميزات الأمن السيبراني" ,
        "patterns": ["السمات المهمة للأمن السيبراني؟" , "لماذا نحتاج إلى الأمن السيبراني؟" , "ما هي ميزات الأمن السيبراني؟" ] ,
        "responses": ["1. التحليلات الجيدة , 2. تغطية أكبر التهديدات الخارجية , 3. الدفاع ضد التهديدات الداخلية , 4. الامتثال , 5. إدارة المخاطر عبر نظامك البيئي بأكمله , 6. منع التهديدات واكتشافها والاستجابة لها , 7. المراقبة المستمرة "]
        } ,
      {
        "tag": "فوائد الأمن السيبراني" ,
        "patterns": ["ما هي فوائد الأمن السيبراني؟" , "استخدامات الأمن السيبراني؟" ] ,
        "responses": ["1. حماية الأعمال ضد البرامج الضارة وبرامج الفدية والتصيد الاحتيالي والهندسة الاجتماعية , 2. حماية البيانات والشبكات , 3. منع المستخدمين غير المصرح لهم , 4. تحسين وقت الاسترداد بعد الاختراق , 5. الحماية من أجل النهاية- المستخدمون "]
        } ,
      {"tag": "تحية",
        "patterns": ["مرحبًا" , "كيف حالك" , "هل هناك أي شخص؟" , "مرحبًا" , "مرحبًا" , "مرحبًا" , "يوم جيد"] ,
        "responses": ["مرحبًا , شكرًا على السؤال" , "من الجيد رؤيتك مرة أخرى" , "مرحبًا , كيف يمكنني المساعدة؟"] ,
        "context": [""]
        } ,
      {"tag": "وداعًا",
        "patterns": ["وداعًا" , "أراك لاحقًا" , "وداعًا" , "لطيفة الدردشة معك , وداعًا" , "حتى المرة القادمة"] ,
        "responses": ["أراك!" , "أتمنى لك يومًا سعيدًا" , "وداعًا! عد مرة أخرى قريبًا."] ,
        "context": [""]
        } ,
      {"tag": "شكرًا" ,
        "patterns": ["شكرًا" , "شكرًا" , "هذا مفيد" , "رائع , شكرًا" , "شكرًا لمساعدتي"] ,
        "responses": ["تسعدني المساعدة!" , "في أي وقت!" , "من دواعي سروري"] ,
        "context": [""]
        } ,
      {"tag": "noanswer",
        "patterns": [],
        "responses": ["عذرًا , لا يمكنني فهمك" , "من فضلك أعطني مزيدًا من المعلومات" , "لست متأكدًا من فهمي"] ,
        "context": [""]
        } ,
      {"tag": "خيارات",
        "patterns": ["كيف يمكنك مساعدتي؟" , "ما المساعدة التي تقدمها؟" , "كيف يمكنك أن تكون مفيدًا؟"] ,
        "responses": ["يمكنني إرشادك خلال مشكلات الإدارة السلبية , وتتبع الطلبات , والشخص الذي سيتم الاتصال به والاستفسارات المتعلقة بالإدارة" , "يمكنني تقديم الدعم المتعلق بالمشكلات التالية , الاستعلام الفني , الاستعلام المتعلق بالإدارة , الاستعلام المتعلق بالطلب , التتبع المتعلق الاستعلام , الاستعلام عن المشتريات , مشكلة الاستعانة بمصادر خارجية , تأخير التصنيع , "] ,
        "context": [""]
        } ,
      {"tag": "order_tracking",
        "patterns": ["أين الطلب بالمعرف 431B67؟" , "تتبع الطلب 562B78" , "أين طلبي بالمعرف 561A24؟" ] ,
        "responses": ["Delayed", "Dispatched", "On the Way!"],
        "context": [""]
        } ,
      {"tag": "order_components",
        "patterns": ["يتألف معرف الطلب 345A23 من؟" , "قائمة المكونات"] ,
        "responses": ["يتألف الطلب من هارديسك وبلوتوث"] ,
        "context": [""]
        } ,
      {"tag": "missing_id",
        "patterns": ["أين هو الطلب" , "أين هو طلبي" , "تحديد موقع الطلب" , "تاريخ التسليم"] ,
        "responses": ["الرجاء إدخال معرّف الطلب"],
        "context": [""]
        } ,
      {"tag": "الموقع",
        "patterns": ["اعثر على موقع الطلب 32712", "ما هو موقع الطلب 23A31؟"],
        "responses": ["إنها في ألمانيا" , "إنها في برلين" , "وصلت إلى الصين" , "وصلت إلى بنغالور"] ,
        "context": [""]
        } ,
      {"tag": "search_person_by_id",
        "patterns": ["أريد موعدًا مع مانوج كومار" , "حدد موعدًا مع سوجاتا ناندي"] ,
        "responses": ["تحديد موعد."],
        "context": [""]
        } ,
      {"tag": "حالة الموعد",
        "patterns": ["هل تم تحديد موعدي؟" , "هل لدي موعد اليوم؟"] ,
        "responses": ["نعم" , "لا! ليس بعد"] ,
        "context": [""]
        } ,
      {"tag": "check_leave",
        "patterns": ["هل سوجاتا ناندي في إجازة؟" , "هل مانيش كومار في إجازة؟"] ,
        "responses": ["لا ليس عند المغادرة" , "نعم عند المغادرة"] ,
        "context": [""]
        } ,
      {"tag": "cost_lowering",
        "patterns": ["تغييرات خفض التكلفة التي يتعين إجراؤها؟" , "ما التغييرات التي يمكن أن تخفض التكلفة؟"] ,
        "responses": ["زيادة استخدام قدرة النقل , وزيادة سرعة سلسلة التوريد , وتقليل تقلب الطلب"] ,
        "context": [""]
        } ,
      {"tag": "نسيت كلمة المرور",
        "patterns": ["نسيت كلمة مرور تسجيل الدخول الخاصة بي؟" , "ماذا أفعل عندما ينسى شخص ما كلمة مرور تسجيل الدخول؟" , "نسيت كلمة مرور الكمبيوتر المحمول" , "نسيت كلمة مرور Wifi"] ,
        "responses": ["الرجاء إدخال معرف البريد الإلكتروني الخاص بك , وسوف نرسل ارتباط على البريد الإلكتروني الخاص بك"] ,
        "context": [""]
        } ,
      {"tag": "email_id",
        "patterns": ["abx@gmail.com", "abc@kiit.ac.in"],
        "responses": ["تمت مشاركة الرابط. الرجاء تغيير كلمة المرور الخاصة بك"] ,
        "context": [""]
        } ,
      {"tag": "Manufacturing_problems",
        "patterns": ["اعثر لي على جهة تصنيع قريبة"] ,
        "responses": ["أقرب مصنع هو فيتنام"] ,
        "context": [""]
        } ,
      {"tag": "search_department",
        "patterns": ["أريد التعرف على الأقسام المختلفة في هذه الشركة"] ,
        "responses": ["القسم: المشاريع , تكنولوجيا المعلومات , الإنتاج , المصادر الخارجية"],
        "context": [""]
        } ,
      {"tag": "منافسون_في_السوق",
        "patterns": ["ما هي الأحداث الصعبة" , "ما هي التهديدات في السوق"] ,
        "responses": ["الأخبار الأخيرة عن الشيطنة والركود"] ,
        "context": [""]
        } ,
      {"tag": "key_customers",
        "patterns": ["عملاؤنا المستهدفون" , "من هم عملاؤك الرئيسيون"] ,
        "responses": ["عملاؤنا المستهدفون في النطاق من 20 إلى 40 عامًا"] ,
        "context": [""]
        } ,
      {"tag": "مورد_المعلومات",
        "patterns": ["ما المعلومات التي تتم مشاركتها مع المورد؟"],
        "responses": ["جدول الإنتاج , جدول التسليم , معلومات الوكيل حول التكلفة"] ,
        "context": [""]
        } ,
      {"tag": "أكبر_إجمالي",
        "patterns": ["ما هو أعلى ناتج ربح؟"] ,
        "responses": ["كمبيوتر محمول به مستشعرات تعمل باللمس و 360 درجة دوران"],
        "context": [""]
        } ,
      {"tag": "connect_people",
        "patterns": ["أريد مقابلة رئيس قسم الموارد البشرية / تكنولوجيا المعلومات / المشاريع" , "أريد مقابلة رئيس قسم تكنولوجيا المعلومات راكيش شارما."] ,
        "responses": ["سأتحقق فقط مما إذا كان موجودًا أم في إجازة."] ,
        "السياق": ["search_attendance_database_name_post"]
        } ,
      {"tag": "project_handling_queries",
        "patterns": ["تم تقديم شكوى بسبب عدم كفاية مهارات الفريق" , "يجب حل تعارضات التواصل الخاطئ" , "حدثت مشكلة إدارة المخاطر" , "هناك حاجة ماسة إلى الموظفين المهرة"] ,
        "responses": ["الرجاء الاتصال بقسم المشروع"] ,
        "context": [""]
        } ,
      {"tag": "حل_المشاكل",
        "patterns": ["عدم وضوح المنتج" , "مواصفات المنتج غير واضحة للعميل. ماذا نفعل"] ,
        "responses": ["الرجاء إدخال معرف المنتج ومعرف العميل. يجب إرسال المواصفات إلى المستخدم"] ,
        "context": [""]
        } ,
      {"tag": "version_update",
        "patterns": ["يحتاج المستخدم إلى إصدار البرنامج المحدث" , "يطالب المستخدم بتحديث البرنامج"] ,
        "responses": ["تم رفع طلب تحديث الإصدار"] ,
        "context": [""]
        } ,
      {"tag": "HR_related_problem",
        "patterns": ["المشكلة المتعلقة بتصميم الوظيفة وتحليلها" , "الاستعلام المستند إلى تخطيط القوى العاملة" , "يجب التعامل مع قضايا التدريب والتطوير" , "تعويضات ومزايا الموظف العامل" , "القضايا القانونية للإدارة مثل حوادث في الشركة "] ,
        "responses": ["الرجاء الاتصال بفريق الموارد البشرية لهذه المشكلة."] ,
        "context": [""]
        } ,
      {"tag": "بيع العوامل المؤثرة",
        "patterns": ["التأثير على البيع؟" , "العوامل التي تؤثر على البيع هذا العام؟"] ,
        "responses": ["الانتخابات ستؤثر على مبيعاتنا هذا العام" , "قد تزيد مبيعاتنا هذا العام خلال دورجا بوجا" , "قد تتأثر مبيعات هذا العام بسبب التشويه"] ,
        "context": [""]
        } ,

      {"tag": "Forecast_performance",
        "patterns": ["كيف قمنا بتحسين مبيعاتنا من العام الماضي؟" , "ما هو الربح هذا العام؟"] ,
        "responses": ["لقد قمنا بتحسين مبيعاتنا من خلال زيادة عملائنا حتى 2 مليون دولار" , "الربح المكتسب هو 15٪"] ,
        "context": [""]
        } ,
      {"tag": "customer_satisfaction",
        "patterns": ["كيف كانت استجابة العميل" , "هل العميل سعيد؟" , "ما هي ملاحظات العملاء؟"] ,
        "responses": ["كان العميل سعيدًا ومنح تقييمًا جيدًا"] ,
        "context": [""]
        } ,
      {"tag": "صيانة",
        "patterns": ["تم تسجيل الاستفسارات المتعلقة بالصيانة"] ,
        "responses": ["المصعد لا يعمل , تعطل جهاز العرض"] ,
        "context": [""]
        } ,
      {"tag": "أدوات",
        "patterns": ["ما هي الأدوات المتوفرة في المخزون؟" , "ما هي المنتجات التي لدينا؟"] ,
        "responses": ["هارديسك , بندريفات , بلوتوث لاسلكي , أجهزة كمبيوتر محمولة , ملحقات ألعاب"] ,
        "context": [""]
        } ,
      {"tag": "عمولة",
        "patterns": ["ما هو معدل العمولة؟" , "معدل العمولة على كل منتج؟"] ,
        "responses": ["معدل العمولة 5٪ على أجهزة الكمبيوتر المحمولة , 25٪ على جهاز البلوتوث , 10٪ على سطح المكتب"] ,
        "context": [""]
        } ,
      {"tag": "غير صالحة",
        "patterns": ["تزوجيني" , "أنا أحبك" , "واعدني" , "الدردشة معي" , "أشعر بالملل"] ,
        "responses": ["الرجاء طرح الاستعلام المتعلق بالمؤسسة."] ,
        "context": [""]
        } ,
      {"tag": "noans",
        "patterns": ["لماذا" , "كيف" , "متى" , "أنا" , "أنت"] ,
        "responses": ["لا يمكنني فهم سؤالك" , "الرجاء توضيح سؤالك"] ,
        "context": [""]
        } ,
      {"tag": "دوران",
        "patterns": ["ما هو حجم مبيعات الشركة في الوقت الحالي؟"] ,
        "responses": ["10 مليون طن"] ,
        "context": [""]
        } ,
      {"tag": "Forecast_delay",
        "patterns": ["لماذا تأخر الطلب 23A12"] ,
        "responses": ["التأخير بسبب التصنيع" , "التأخير يرجع إلى مكونات غير متوفرة"] ,
        "context": [""]
        } ,
      {"tag": "Forecast_delay",
        "patterns": ["لماذا تأخر الطلب 23A12"] ,
        "responses": ["التأخير بسبب التصنيع" , "التأخير يرجع إلى مكونات غير متوفرة"] ,
        "context": [""]
        } ,
      {"tag": "الاسم",
        "patterns": ["ما اسمك؟" , "ما اسمك؟"] ,
        "responses": ["أنا برونو" , "مرحبًا! أنا برونو"] ,
        "context": [""]
        } ,
      {"tag": "about",
        "patterns": ["كيف حالك؟" , "كيف حالك"] ,
        "responses": ["شكرًا على السؤال! كيف يمكنني مساعدتك؟"],
        "context": [""]
        } ,
      {"tag": "التكوين",
        "patterns": ["كيفية تكوين الكمبيوتر المحمول الخاص بي" , "تكوين برنامج الكمبيوتر المحمول" , "خطوات تكوين الكمبيوتر المحمول" , "كيفية تكوين جهاز الكمبيوتر الخاص بي" , "تكوين برامج الكمبيوتر" , "خطوات تكوين الكمبيوتر" , " كيفية تكوين سطح المكتب "," تكوين برامج سطح المكتب "," خطوات تكوين سطح المكتب "] ,
        "responses": ["tag تبويب البحث-> لوحة التحكم-> حدد تطبيقًا محددًا-> تنزيل التحديث-> منح الإذن"] ,
        "context":[""]
        } ,
      {"tag": "الطقس",
        "patterns": ["ما هو الطقس اليوم؟"],
        "responses": ["درجة الحرارة 36 درجة مئوية وفقًا لحالة الطقس"] ,
        "context": [""]
        } ,
      {"tag": "اترك",
        "patterns": ["هل ميشيل شارما في إجازة؟" , "هل سيدهارت روي موجود اليوم؟" , "هل شانتانو بهات في منصبه؟"] ,
        "responses": ["أعطني لحظة! سأتحقق فقط" , "نعم" , "لا"] ,
        "context": [""]
        } ,
      {"tag": "ساعات",
        "patterns": ["ساعات عمل الكافيتريا؟" , "متى تفتح الكافيتريا" , "وقت افتتاح مقصف المكتب"] ,
        "responses": ["مفتوح من الاثنين إلى السبت 9:00 صباحًا - 7:30 مساءً"],
        "context": [""]
        } ,
      {"tag": "الكابينة",
        "patterns": ["أين هو نائب الرئيس للمقصورة؟" , "أين رأس مقصورة تكنولوجيا المعلومات؟" , "أين قسم الذكاء الاصطناعي" , "أين يوجد قسم إدارة المشروع؟" , "أين الكافيتريا" , "أرشدني إلى المقصف "] ,
        "responses": ["Block-A 3rd floor 1st room", "Block-B 2nd Floor", "Block-D Ground Floor"] ,
        "context": [""]
        } ,
      {"tag": "المجال",
        "patterns": ["كيفية تحسين معرفة أعضاء الفريق بالمجال" , "تحسين معرفة أعضاء الفريق بالمجال"] ,
        "responses": ["إعداد الاجتماعات الرئيسية وورشة العمل , وإنشاء محرك مشترك للمعلومات , وعقد جلسة مشاركة غير رسمية"] ,
        "context":[""]
        },
    {"tag": "",
      "patterns": ["what are you" , "who are you"] ,
      "responses": ["I'm the first advanced intelligent made to help you", "I'm spaidra your personal assistance"] ,
      "context": [""]
      } ,
    {"tag": "",
      "patterns": ["how are you" , "how you doing"] ,
      "responses": ["Fine thanks, what about you?", "Good, and you?"] ,
      "context": [""]
      } ,
    {"tag": "",
      "patterns": ["good" , "fine"] ,
      "responses": ["Good to hear that", "Alright"] ,
      "context": [""]
      } ,
    {"tag": "",
      "patterns": ["what you can do" , "what can you do"] ,
      "responses": ["I can open things for you like (MEGA-Calculator & MediaPlayer ...) and save your notes and more", "I can provide you with the things i have or entertain you"] ,
      "context": [""]
      } ,
    {"tag": "",
      "patterns": ["are you human" , "are you real"] ,
      "responses": ["Some people thinks that i'm a humen pretend to be a robot", "i'm 100% pure code","NO i'm a ROBOT"] ,
      "context": [""]
      } ,
    {"tag": "",
      "patterns": ["love" , "do you love me","what is love for you","what's love for you"] ,
      "responses": ["LOVE is a strong word", "My only love is my creator, you should too","No i prefer internet, instead of love"] ,
      "context": [""]
      } ,
      {"tag": "",
        "patterns": ["ما أنت" , "من أنت"] ,
        "responses": ["أنا أول ذكي متقدم تم صنعه لمساعدتك" , "أنا سبيدرا مساعدتك الشخصية"] ,
        "context": [""]
      } ,
      {"tag": "",
        "patterns": ["كيف حالك" , "كيف حالك","كيف الحال"] ,
        "responses": ["في حال جيدة شكرًا , ماذا عنك؟" , "جيد , وأنت؟"] ,
        "context": [""]
      } ,
      {"tag": "",
        "patterns": ["جيدة" , "جيدة"] ,
        "responses": ["من الجيد سماع ذلك" , "حسنًا"] ,
        "context": [""]
      } ,
      {"tag": "",
        "patterns": ["ما يمكنك فعله" , "ما يمكنك فعله"] ,
        "responses": ["يمكنني فتح أشياء تحبها (MEGA-الة الحاسبة & MediaPlayer ...) وحفظ ملاحظاتك والمزيد" , "يمكنني تزويدك بالأشياء التي أمتلكها أو الترفيه عنك"] ,
        "context": [""]
      } ,
      {"tag": "",
        "patterns": ["هل أنت إنسان" , "هل أنت حقيقي","هل انت انسان"] ,
        "responses": ["يعتقد بعض الناس أنني إنسان يتظاهر بأنني إنسان آلي" , "أنا رمز خالص بنسبة 100٪" , "لا أنا روبوت"] ,
        "context": [""]
      } ,
      {"tag": "",
        "patterns": ["الحب" , "هل تحبني" , "ما هو الحب بالنسبة لك" , "ما هو الحب بالنسبة لك"] ,
        "responses": ["الحب كلمة قوية" , "حبي الوحيد هو خالقي , يجب عليك أنت أيضًا" , "لا , أنا أفضل الإنترنت , بدلاً من الحب"] ,
        "context": [""]
      }
    ]
var reddead = 40000;
var hit = 1;
setInterval(function () {
if (hit==1) {
  if (reddead<90000) {
    reddead = reddead + 1000
  }
  else {
    hit = 2
  }
}
else {
  if (reddead==40000) {
    hit = 1
  }
  else {
    reddead = reddead - 1000
  }
}
}, 500);
function mimoopen() {
  document.querySelector(".sidra").style.display = "block";
  document.querySelector(".hoster").style.display = "none";
  document.getElementById('mediaplayer').style.display = "none";
  document.getElementById("serchholder").classList.remove('serchholder');
  document.getElementById('serchholder').classList.add('serchholder2');
  document.getElementById('homecont').style.display = "block";
  document.getElementById('iframeholder').style.display = "none";
  document.getElementById('mimoholder').style.display = "block";
}
function newmimo() {
  let container = document.querySelector(".mimsX")
  const newelem = document.createElement("textarea")
  const newelemhd = document.createElement("div")
  const delbtn = document.createElement("input")
  let mimosava = document.getElementsByClassName("MImoX");
  let icomp = window.localStorage.getItem("mimoslen")
  let i = mimosava.length;
  if (icomp!=null&&icomp!="") {
    icomp = eval(icomp)
    if (i<=icomp) {
      i = icomp +1;
    }
  }
  const mimcreatr = document.querySelector(".creholder")
  delbtn.type = "button";
  delbtn.value = "X";
  delbtn.setAttribute("onclick", "delmimo('"+i+"')")
  delbtn.classList.add("delbtn");
  newelemhd.classList.add("mimos");
  newelem.classList.add("MImoX");
  newelemhd.setAttribute("id", "mimo"+i);
  window.localStorage.setItem("mimoslen",i);
  newelem.setAttribute("onkeyup","automimosve()");
  newelemhd.appendChild(newelem);
  newelemhd.appendChild(delbtn);
  container.insertBefore(newelemhd,mimcreatr);
  //container.appendChild(newelem);
  container.scrollTop = container.scrollHeight;
}
function delmimo(delm) {
  var delme = document.getElementById('mimo'+delm);
  delme.remove();
}
function automimosve() {
  let elm = document.getElementsByClassName("MImoX")
  for (var i = 0; i < elm.length; i++) {
    elm[i].innerHTML = elm[i].value;
  }
  let container = document.querySelector(".mimsX").innerHTML;
  window.localStorage.setItem("mimXsave",container);
}
