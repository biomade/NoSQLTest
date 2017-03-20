//tests for nosql all via the console
console.log("lowdb Tests")
//for help refer to https://lodash.com/ or  https://github.com/typicode/lowdb
console.log("starting application");
const low = require('lowdb')
const db = low('./db/lowdb.json', { storage: require('lowdb/lib/storages/file-async') })
console.log('created db')

// Set some defaults if your JSON file is empty
db.defaults({ posts: [], user: {}})
  .write()
// Add a post
db.get('posts')
  .push({ id: 1, title: 'lowdb is awesome'})
  .write()
  //add another user
  db.get('posts')
    .push({ id:2, title: 'lowdb should work'})
    .write()
//now add a user
// Set a user
db.set('user.name', 'typicode')
  .write()
console.log('done create')

//now read it back out
