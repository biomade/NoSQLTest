//tests for nosql all via the console
console.log("lowdb Tests")
//for help refer to https://lodash.com/ or  https://github.com/typicode/lowdb
console.log("starting read");
const low = require('lowdb')
//get db
const db = low('./db/lowdb.json')
//const db = low('C:/Users/laurie/Documents/GitHub/NoSQLTest/db/lowdb.json')
console.log('got db')

// Set some defaults if your JSON file is empty
var v = db.get('posts')
  .find({ id: 1 })
  .value()
console.log('done get - ', v.title)
//https://github.com/typicode/lodash-id
db._.mixin(require('lodash-id'))
//require the use of the lodash-id module
const post2 = db.get('posts').getById(2).value()

console.log('done get - ', post2)

// //https://github.com/broofa/node-uuid
 const uuid = require('node-uuid')
 var newId = uuid()
 console.log('newId', newId)
 const postId = db.get('posts').push({ id: newId , title: 'new UUID!' }).write()
 const post3 = db.get('posts').find({ id: newId }).value()
 console.log('done with uuid', post3)
