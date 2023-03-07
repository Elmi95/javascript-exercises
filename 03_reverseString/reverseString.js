function reverseString (string){
   return string.split('').reverse().join('')
}


/* this reverse sentences*/
function reverseWords(str) {
    let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
    return reverseWordArr.join(" ");
  }

  

// Do not edit below this line
module.exports = reverseString;
