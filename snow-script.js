function showInput() {

    var request = document.getElementById("request").value;
    var userId = document.getElementById("userId").value;
    var cbn = document.getElementById("cbn").value;
    var location = document.getElementById("location").value;
    var bttr = document.getElementById("bttr").value;
    var timezone = document.getElementById("timezone").value;
    var toTime = document.getElementById("toTime").value;
    var ts = document.getElementById("troubleshooting").value;
    var issue = document.getElementById("issue").value;
    var resol = document.getElementById("resolution").value;


    document.getElementById('display').innerHTML =
       ' Request for: ' + request + '\n' +
       ' Employee ID: ' + userId + '\n' +
       ' CallbackNumber: ' + cbn + '\n' +
       ' Location: ' + location + '\n' +
       ' BTTR: ' + bttr + ' ' + ' to ' + toTime + '\n' +
       ' Timezone: ' + timezone + '' + '\n \n' +
       ' Issue: \n' +
       '' + issue + '\n \n ' +
       ' Troubleshooting: \n' +
       '' + ts + ' \n' +
       ' Resolution: \n' +
       '' + resol + '' +
       ''
       ;


    document.querySelector('.displayText').style.display = "flex";
 }


 function showInputHtml() {

    var request = document.getElementById("request").value;
    var userId = document.getElementById("userId").value;
    var cbn = document.getElementById("cbn").value;
    var location = document.getElementById("location").value;
    var bttr = document.getElementById("bttr").value;
    var timezone = document.getElementById("timezone").value;
    var toTime = document.getElementById("toTime").value;
    var ts = document.getElementById("troubleshooting").value;
    var issue = document.getElementById("issue").value;
    var resol = document.getElementById("resolution").value;

   
    document.getElementById('displayHtml').innerHTML =

       '[code]<ul>' +
       '<li> Request for: ' + request + '</li>' +
       '<li> Employee ID: ' + userId + '</li>' +
       '<li> CallbackNumber: ' + cbn + '</li>' +
       '<li> Location: ' + location + '</li>' +
       '<li> BTTR: ' + bttr + ' ' + ' to ' + toTime + '</li>' +
       '<li> Timezone: ' + timezone + '</li>' + '<br>' +
       '<li> Issue: </li>' +
       '<ul><li>' + issue + '</li></ul>' +
       '<li> Troubleshooting:</li>' +
       '<ul><li>' + ts + '</li></ul>' +
       '<li> Resolution:</li>' +
       '<ul><li>' + resol + '</li></ul>' +
       '</ul>[/code]'
       ;
    document.querySelector(".displayHtml").style.display = "flex";
 }
 // =================

 function clearData() {
    document.getElementById("myForm").reset();
    document.getElementById("troubleshooting").reset();
    document.getElementById("resolution").reset();
    document.getElementById("issue").reset();

 }

 // =================

 function closeDisplayText() {
    document.querySelector('.displayText').style.display = "none";
 }
 function closeDisplayHtml() {
    document.querySelector('.displayHtml').style.display = "none";
 }


 function selectText() {
    document.getElementById("display").select();
 }
 function selectTextHtml() {
    document.getElementById("displayHtml").select();
 }