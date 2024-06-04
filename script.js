function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user)
    document.querySelector("#user").innerHTML = user;
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
       document.querySelector("#user").innerHTML = user;
     }
  }
}




document.querySelector(".selector").addEventListener("click", function(){
  for(i=0; i<255; i++){
    var number1 = Math.floor(Math.random()*i) + 1;
  }
  for(j=0;j<255;j++){
    var number2 = Math.floor(Math.random()*j) + 1;
  }
  for(k=0;k<255;k++){
    var number3 = Math.floor(Math.random()*k) + 1;
  }
  var rgbCode = "rgb"+"(" + number1 + ", " + number2 + ", " + number3 + ")";
  // console.log(rgbCode);
  document.querySelector(".square").style.backgroundColor = ("rgb("+number1+", "+number2+", "+number3+")");
});
