var firebaseConfig = {
    apiKey: "AIzaSyDiQTQsDF09cFCDco8BAm6GUUG8EUpesTs",
    authDomain: "mstc-certificates.firebaseapp.com",
    databaseURL: "https://mstc-certificates.firebaseio.com",
    projectId: "mstc-certificates",
    storageBucket: "mstc-certificates.appspot.com",
    messagingSenderId: "786275531768",
    appId: "1:786275531768:web:46474baf1688bf88"
};
var storage;


$(document).ready(function () {
    firebase.initializeApp(firebaseConfig);
    storage = firebase.storage();
    console.log("Firebase Initialised.")
});

function dod() {
    document.getElementById("progress").style.visibility='visible';
    var storageRef = storage.ref();
    var regno = document.getElementById('regid').value;
    if(regno.length <5){
        console.log(regno.length);
        document.getElementById("datalink").innerHTML = "";
        document.getElementById("datalink").style.visibility='hidden';
        document.getElementById("errorlink").innerHTML="Please enter your email correctly";
        document.getElementById("errorlink").style.visibility='visible';
        document.getElementById("progress").style.visibility='hidden';
        return;
    }
    var filepath = 'competitive-coding//' + regno + '.pdf';
    var pathReference = storage.ref(filepath);

    storageRef.child(filepath).getDownloadURL().then(function (url) {
        document.getElementById("datalink").innerHTML = "Download Certificate";
        document.getElementById("datalink").href = url;
        document.getElementById("datalink").style.visibility='visible';
        document.getElementById("errorlink").style.visibility='hidden';
        document.getElementById("progress").style.visibility='hidden';
        console.log("FOUND IT BABY!");
    }).catch(function (error) {
        document.getElementById("datalink").innerHTML = "";
        document.getElementById("datalink").style.visibility='hidden';
        document.getElementById("errorlink").innerHTML="There was no certificate with this email id, please try again.";
        document.getElementById("errorlink").style.visibility='visible';
        document.getElementById("progress").style.visibility='hidden';
        console.log("OOPS!");
    });



}