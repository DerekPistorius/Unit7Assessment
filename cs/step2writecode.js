// sum zero**

let array = [28, 43, -12, 30, 4, 0, 12]

let value = "False"
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = "True"
      } 
    }
  }
}

console.log(value)

//time complexity O(n) - Space complexity O(1)

//unique characters

const str = 'hmmmmm';
const allUnique = (str = '') => {
   for(let i = 0; i < str.length; i++){
      const el = str[i];
      if(str.indexOf(el) !== str.lastIndexOf(el)){
         return false;
      };
   };
   return true;
};
console.log(allUnique(str));

//tiime complexity O(n) - Space complexity O(1)

//pangram sentence

function pangrams(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return "not pangram";
     }
    }
   
   return "pangram";
 }

 console.log(pangrams("this is a test for pangram"))

 //time complexity O(n) - space complexity O(1)

//longest word
function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  console.log(findLongestWord("What is the length of the longest word in this string?"));

  //time complexity O(n) - Space complexity O(1)


