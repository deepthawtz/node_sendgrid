var mailer = require("mailer");

// default setup for sendgrid
// node_mailer wants username and password in base64
var setup = {
  host: "smtp.sendgrid.net",
  port: "25",
  domain: "localhost",
  authentication: "login"
};
exports.setup = setup; // you'll want to add your username and password to setup["username"] and setup["password"] respectively

// no-deps merge two objects
function merge(a, b) {
  var obj = {};
  for(var i in a) {
    for(var j in b) {
      obj[i] = a[i];
      obj[j] = b[j];
    }
  }
  return obj;
}

exports.send = function(msg, err) {
  var email = merge(setup, msg);
  mailer.send(email, err);
}

// that's it?
