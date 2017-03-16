//tests for nosql all via the console
console.log("NoSQL Tests")
//for help refer to https://github.com/petersirka/nosql/issues?utf8=%E2%9C%93&q=is%3Aissue
//https://docs.totaljs.com/latest/en.html#api~Database
console.log("starting application");
const db = require('nosql');

//create db
var dbNewsletter = db.load('db/newsletter.nosql');
/*//insert two recores
dbNewsletter.insert({name: 'laurie', email: 'laurie@gmail.com'} ) 
dbNewsletter.insert({name: 'erich', email: 'erich@gmail.com'} ) 
console.log("inserted two records");
//insert if they don't exist, do unique
//dbNewsletter.insert({name: 'laurie', email: 'laurie@gmail.com'}, true).where('name', 'laurie') 
//dbNewsletter.insert({name: 'erich', email: 'erich@gmail.com'}, true).where('email', 'laurie@gmail.com'); 
//dbNewsletter.insert({name: 'mary', email: 'mary@gmail.com'}, true).where('email', 'mary@gmail.com'); 
//console.log("inserted if unique ");
*/
//create a new db 
var dbauthors = db.load('db/authors.nosql');
//insert two recores
//dbauthors.insert({ id: 1, name: 'laurie', email: 'laurie@gmail.com'} ) 
//dbauthors.insert({ id: 2, name: 'erich', email: 'erich@gmail.com' }) 
//console.log("inserted two records in authors");
//now find the second author
dbauthors.find().make(function(builder) {
    builder.where('id', 2);
    builder.callback(function(err, response) {
        console.log('users 2:', response);
        console.log('users email:', response.email)
    });
});

//