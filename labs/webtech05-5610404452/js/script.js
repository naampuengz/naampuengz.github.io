$(document).ready(function(){
    $("#male").click(function(){
        $("#idgender").val("ชาย");
    });
    $("#female").click(function(){
        $("#idgender").val("หญิง");
    });
    $("#idsubmit").click(function(){
      var firstname = $('#idform').find('input[name="firstname"]').val();
      var lastname = $('#idform').find('input[name="lastname"]').val();
      var birthday = $('#idform').find('input[name="birthday"]').val();
      var gender = $('#idform').find('input[name="gender"]').val();
      var province = $('#provinceSelect :selected').text();

      if(checkAll(firstname,lastname,birthday,gender)){
        var text = "ยินดีต้อนรับค่ะ คุณ"+firstname+" "+lastname;
        alert(text);
        displayData(firstname,lastname,birthday,gender,province);
      }else{
        alert("กรุณากรอกข้อมูลให้ครบ และในชื่อห้ามมีตัวเลข");
      }
    });
});

function displayData(firstname,lastname,birthday,gender,province){
  $('#welcome').text("ยินดีต้อนรับ คุณ"+firstname+" "+lastname);
  $('#nameProvince').text(province);
  loadDoc(province,'motto');
  $("#imgProvince").attr("src","fileData/picture/"+province+".png");
  var age = calculateAge(birthday);
  checkAgeOrGender(age,gender);
}

function checkAll(firstname,lastname,birthday,gender){
  if(!checkName(firstname)){
    return false;
  }
  if(!checkName(lastname)){
    return false;
  }
  if(!checkNotEmpty(birthday)){
    return false;
  }
  if(!checkNotEmpty(gender)){
    return false;
  }
  return true;
}


function checkName(name){
    var patt = /^[^0-9]+$/;
    if (patt.test(name)){
      return true;
    }else{
      return false;
    }
}

function checkNotEmpty(value){
  var patt = /.+/;
  if (patt.test(value)){
    return true;
  }else{
    return false;
  }
}

function calculateAge(birthday){
  dob = new Date(birthday);
  var today = new Date();
  var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
  return age;
}

function checkAgeOrGender(age,gender){
  if (age < 13) {
    $('html').css("background","url(img/ani2.png)");
    $('html').css("font-family","joyful");
    $('.rightFloat').css("background","rgba(255, 255, 255, 0.62)");
    $('.rightFloat').css("color","black");
    $('#male').css("color","black");
    $('#female').css("color","black");
    $('.butt').css("border-color","rgb(98, 213, 255)");
    $('.show').css("color","rgb(0, 0, 0)");
    $('header').css("background","url(img/thailand-header2.png)");
  }else if(gender == "หญิง"){
    $('html').css("background","url(img/bg6.gif)");
    $('html').css("font-family","Bangnampueng");
    $('header').css("background","url(img/thailand-header2.png)");
    $('#male').css("color","black");
    $('#female').css("color","black");
    $('.butt').css("border-color","rgb(176, 95, 114)");
    $('.show').css("color","rgb(242, 73, 86)");
    $('.rightFloat').css("background","rgba(255, 255, 255, 0.62)");
    $('.rightFloat').css("color","black");
  }else if(gender == "ชาย"){
    $('html').css("background","url(img/dark03.jpg)");
    $('html').css("font-family","Bangnampueng");
    $('.show').css("color","white");
    $('.rightFloat').css("background","rgba(153, 153, 153, 0.3)");
    $('.rightFloat').css("color","white");
    $('#male').css("color","white");
    $('#female').css("color","white");
    $('.butt').css("border-color","black");
    $('header').css("background","url(img/thailand-header4.png)")
  }
}



function loadDoc(motto,toid) {
  $.ajax({
    url: 'readFile.php',
    type: 'POST',
    data: { "callFuncReadFile": motto},
    success: function(response) {
      // alert(response);
      // document.getElementById(toid).innerHTML = this.responseText;
      document.getElementById(toid).innerHTML = response;
    }
});


  // var xhttp = new XMLHttpRequest();
  // xhttp.open("POST", "readFile.php", true);
  // xhttp.onreadystatechange = function() {
  //   if (this.readyState == 4 && this.status == 200) {
  //     document.getElementById(toid).innerHTML = this.responseText;
  //   }
  // };
  //
  // xhttp.send("motto="+motto);
}
