//tests for nosql all via the console
console.log("TaffyDb Tests")
//for help refer to https://www.npmjs.com/package/node-taffydb
console.log("starting application");
 var TAFFY = require('node-taffydb').TAFFY;

console.log('db create start')
var friends = TAFFY([
  {"id":1,"gender":"M","first":"John","last":"Smith","city":"Seattle, WA","status":"Active"},
  {"id":2,"gender":"F","first":"Kelly","last":"Ruth","city":"Dallas, TX","status":"Active"},
  {"id":3,"gender":"M","first":"Jeff","last":"Stevenson","city":"Washington, D.C.","status":"Active"},
  {"id":4,"gender":"F","first":"Jennifer","last":"Gill","city":"Seattle, WA","status":"Active"}
]);

console.log('db create done')
//store it
console.log('the settings')
friends.settings({name:'myTaffyDb'})
friends.store();
console.log('storage done')
