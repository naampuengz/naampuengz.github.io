function setZodiacSign(name){
  document.getElementById("zodiacSign").value = name;
}

function setZodaicYear(name){
  document.getElementById("zodaicYear").value = name;
}

function clearAll(){
  document.getElementById("zodiacSign").value = "None";
  document.getElementById("zodaicYear").value = "None";
}

function pressSave(){
  setCookie("type", "save");
  setCookie("firstName", document.forms["dataform"]["firstName"].value);
  setCookie("lastName", document.forms["dataform"]["lastName"].value);
  setCookie("houseNumber", document.forms["dataform"]["houseNumber"].value);
  setCookie("street", document.forms["dataform"]["street"].value);
  setCookie("city", document.forms["dataform"]["city"].value);
  setCookie("province", document.forms["dataform"]["province"].value);
  setCookie("zipcode", document.forms["dataform"]["zipcode"].value);
  setCookie("phoneNum", document.forms["dataform"]["phoneNum"].value);
  setCookie("cellPhoneNum", document.forms["dataform"]["cellPhoneNum"].value);
  setCookie("birthday", document.forms["dataform"]["birthday"].value);
  setCookie("citizenNum", document.forms["dataform"]["citizenNum"].value);
  setCookie("zodiacSign", document.forms["dataform"]["zodiacSign"].value);
  setCookie("zodaicYear", document.forms["dataform"]["zodaicYear"].value);
  setCookie("dayName", document.forms["dataform"]["dayName"].value);
  alert("Save Cookies");
}

function pressSubmit(){

}

function setCookie(cname,cvalue) {
  var now = new Date();
  var expiry = new Date(now.getTime() +30*24*3600*1000);
  var expires = "expires=" + expiry.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
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
    if(getCookie("type") == "save"){
      document.forms["dataform"]["firstName"].value = getCookie("firstName");
      document.forms["dataform"]["lastName"].value = getCookie("lastName");
      document.forms["dataform"]["houseNumber"].value = getCookie("houseNumber");
      document.forms["dataform"]["city"].value = getCookie("city");
      document.forms["dataform"]["street"].value = getCookie("street");
      document.forms["dataform"]["province"].value = getCookie("province");
      document.forms["dataform"]["zipcode"].value = getCookie("zipcode");
      document.forms["dataform"]["phoneNum"].value = getCookie("phoneNum");
      document.forms["dataform"]["cellPhoneNum"].value = getCookie("cellPhoneNum");
      document.forms["dataform"]["birthday"].value = getCookie("birthday");
      document.forms["dataform"]["citizenNum"].value = getCookie("citizenNum");
      document.forms["dataform"]["zodiacSign"].value = getCookie("zodiacSign");
      document.forms["dataform"]["zodaicYear"].value = getCookie("zodaicYear");
      document.forms["dataform"]["dayName"].value = getCookie("dayName");
    }else if(getCookie("type") == "submit"){

    }

}
