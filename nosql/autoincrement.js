const db = require('nosql');

//get the last user id
//open db
var dbNewsletter = db.load('db/newsletter.nosql');
var maxId = 0;
//this gets the max id
dbNewsletter.scalar('max','id').make(function(builder) {
    builder.callback(function(err, response) {
        maxId = response;
        console.log('response :', response);
          console.log('maxId :', maxId);
    });
});


//how do we insert it into the db?
console.log("outside", maxId)
