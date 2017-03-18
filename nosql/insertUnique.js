const db = require('nosql');

//create db
var dbNewsletter = db.load('db/newsletter.nosql');
//insert if they don't exist, do unique
dbNewsletter.insert({id:1 , name: 'laurie', email: 'laurie@gmail.com'}, true).where('name', 'laurie')
dbNewsletter.insert({id:2 , name: 'erich', email: 'erich@gmail.com'}, true).where('email', 'erich@gmail.com');
dbNewsletter.insert({id:3 , name: 'mary', email: 'mary@gmail.com'}, true).where('email', 'mary@gmail.com');
console.log("inserted if unique ");
