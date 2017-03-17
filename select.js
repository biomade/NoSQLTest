const db = require('nosql');

//create db
var dbNewsletter = db.load('db/newsletter.nosql');

dbNewsletter.find().make(function(builder) {
    builder.where('id', 2);
    builder.first(); // nosql returns only the first item (so in the response won't be an array)
    builder.callback(function(err, response) {
        console.log('users 2 :', response);

        // because response was array
      console.log('users email:', response.email)
    });
});
