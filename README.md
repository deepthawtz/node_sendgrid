'Sup
====

This is a node.js module we use for sending emails through sendgrid.
At the moment it uses [node_mailer](http://github.com/marak/node_mailer) (npm install mailer)

Usage:
======

    var sendgrid = require("sendgrid");

    // sendgrid credentials
    var sendgrid.setup["username"] = "<SENDGRID_USERNAME>";
    var sendgrid.setup["password"] = "<SENDGRID_PASSWORD>";
   
    // define a message with to, from, subject, and body
    var msg = {
      to: "dude@place.com",
      from: "guy@overhere.com",
      subject: "Foo, you owe me money",
      body: "Got nothing to say to you."
    }
   
    // pass message to send, that's it
    sendgrid.send(msg, function(err) {
      // do whatever
    });

Try it
======

npm install mailer
get a sendgrid account and run the example with your credentials

    node example.js
