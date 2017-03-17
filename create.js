//tests for nosql all via the console
console.log("NoSQL Tests")
//for help refer to https://github.com/petersirka/nosql/issues?utf8=%E2%9C%93&q=is%3Aissue
//https://docs.totaljs.com/latest/en.html#api~Database
console.log("starting application");
const db = require('nosql');

//create db
var dbNewsletter = db.load('db/newsletter.nosql');
//insert two records
dbNewsletter.insert({id: 1, name: 'laurie', email: 'laurie@gmail.com'} )
dbNewsletter.insert({id: 2, name: 'erich', email: 'erich@gmail.com'} )
console.log("inserted two records");
