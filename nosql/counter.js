const db = require('nosql');



var dbNewsletter = db.load('db/newsletter.nosql');
//count what's in the db
dbNewsletter.counter.count('id', function(err, response) {
    console.log('count of id ', response);
});

// var hitCount = 0
// var result = dbNewsletter.counter.hit('id', hitCount);
// console.log('hitcount', hitCount);
// console.log('result of id ', result);
