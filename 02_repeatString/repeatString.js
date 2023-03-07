function repeatString (string,num){
var repeatedString = '';

while (num > 0){
repeatedString+=string;
num --;
}
return repeatedString;
};
    console.log(repeatString('hey',3))


// Do not edit below this line
module.exports = repeatString;
