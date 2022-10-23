const firebaseConfig = {
    apiKey: "AIzaSyCfOx-E2bmIvtGMKYyEkI32dApLn6a5ZaY",
    authDomain: "tsm-esports-nepal.firebaseapp.com",
    databaseURL: "https://tsm-esports-nepal-default-rtdb.firebaseio.com",
    projectId: "tsm-esports-nepal",
    storageBucket: "tsm-esports-nepal.appspot.com",
    messagingSenderId: "1048495763625",
    appId: "1:1048495763625:web:fffb3f78d6e4b3537d39b8",
    measurementId: "G-CGSK1HKTEZ"
    };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");
  var guildname = getElementVal("guildname");
  var link = getElementVal("link");

  saveMessages(name, emailid, msgContent, guildname, link);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent, guildname, link) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
    guildname: guildname,
    link: link,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};