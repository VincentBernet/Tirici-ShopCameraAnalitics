//ADDED barre des taches personnalisée
const customTitlebar = require('custom-electron-titlebar');
const { Color } = require('custom-electron-titlebar');
const { remote } = require('electron');
const { Menu, MenuItem } = remote;
const url = require('url');


// Code for the Form
const checkbox = document.querySelector('.my-form input[type="checkbox"]');
const btns = document.querySelectorAll(".my-form button");
 
checkbox.addEventListener("change", function() {
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
});


document.getElementById("redirect_Connex").addEventListener("click", function() {
  window.location.href="connexion.html";
});

// Connection to the DB
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "mysql-pa8.alwaysdata.net",
  user: "pa8_acc",
  password: "5wtE3Cx8W",
  database: "pa8_bddv2"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the DB!");
});


// Form has been submit, time to insert
function form_submited() {
  var Account_Email = document.getElementById("account_email").value;
  var Account_Password = document.getElementById("account_password").value;
  var Account_ID = 1;


  // Sucession de querry à exécuter
  var sql1 = "INSERT INTO Account (Name, Email, Pass) VALUES ('"+Account_Email+"','"+Account_Email+"', '"+Account_Password+"')";
  con.query(sql1, function (err1, result1) {
    if (err1) alert(err1);
    else {
      
        alert("Requete Valide : Insert Effectué");
        window.location.href="connexion.html";
    }
  });
}

    

