const db = require('nosql');
var info = {
          id:12,
          name:{
            first: 'jon',
            last: 'doe'
          },
          address:{
            street: '123 main',
            city: 'NYC',
            state: 'NY',
            zip: '11760'
          }
        }

//access db
var dbNewsletter = db.load('db/newsletter.nosql');
//insert if they don't exist, do unique
dbNewsletter.insert(info)
console.log("inserted complex ");
