document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()
    let  key = document.getElementById('key').value
    let value = document.getElementById('value').value
    if (key == "" || value == "") {
        alert("Please enter all fields")
    }
    else {
        setCookie(key, value, 365)
    }
})


function setCookie(key, value, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = key + "=" + value + ";" + expires + ";path=/";
  }
  
  function getCookie(key) {
    let name = key + "=";
    let ca = document.cookie.split(';');
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
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  }