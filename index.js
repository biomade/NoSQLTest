//tests for nosql all via the console
//for help refer to https://github.com/petersirka/nosql/issues?utf8=%E2%9C%93&q=is%3Aissue
//https://docs.totaljs.com/latest/en.html#api~Database
console.log("starting application");
const db = require('nosql');

//create db
var mydb = db.load('db/mydatabase.nosql');
console.log("created db")
mydb('newsletter').insert({name: 'laurie', email: 'laurie@gmail.com'})

// Read all documents by table===A
//var aDoc = mydb.find('newsletter')
  //  console.log(aDoc)
