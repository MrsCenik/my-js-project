/* 
Strings Manipulations:
*/

console.clear();

//Getting an input from user
let myTweet = prompt('Write your tweet');

let tweetLen=myTweet.length;

let maxLen=280;

console.log(`Sent : ${tweetLen}. Remaining : ${maxLen-tweetLen}`)