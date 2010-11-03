// DEMO
//
// for this to work:
//   - npm install mailer
//   - sign up for a sendgrid account, you'll need your username and password
//
var mailer = require("./lib/node_sendgrid");

mailer.setup["username"] = "<SENDGRID_USERNAME>",  // must be base64 encoded, (new Buffer("<username>").toString("base64"))
mailer.setup["password"] = "<SENDGRID_PASSWORD>",  // ^^ ditto

var email = {
  to: "<SOMEBODY_SPECIAL>",
  from: "node-with-love@nestlingbythefireplace.com",
  subject: "That sweater looks very becoming on you",
  body: "Of course, if I was on you I'd becoming too."
}

mailer.send(email, function(err) {
  // handle bizness
  // console.log(arguments)
});

