const tokenCookieName = "authToken";
const signOutBtn = document.getElementById("signOut-btn");

signOutBtn.addEventListener("click", signOut);

function signOut() {
  eraseCookie(tokenCookieName);
  window.location.reload();
}

function setToken(token) {
  setCookie(tokenCookieName, token, 7); // Le token sera stocké pendant 7 jours
}

function getToken() {
  return getCookie(tokenCookieName);
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

function isConnected() {
  if (getToken() == null || getToken() == undefined) {
    return false;
  } else {
    return true;
  }
}

if (isConnected()) {
  alert("je suis connecté");
} else {
  alert("je suis déconnecté");
}
