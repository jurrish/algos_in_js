// //stacks -
//
// // functions: push, pop, peek, length
//
// function isPalindrome(word){
//   var wordArray = word.split('');
//   var reverseWordArray = [];
//
//
//   for(var i = wordArray.length - 1; i >=0; i--){
//     reverseWordArray.push(wordArray[i]);
//   }
//
//   let wordString = wordArray.join('').split('');
//   let reverseString = reverseWordArray.join('').split('');
//   // console.log(wordString, reverseString);
//
//   if(wordString == reverseString){
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
//
// isPalindrome('racecar');
// isPalindrome('baby');

// isPalindrome('baby')
// function isPalindrome(str) {
//   if (str.length <= 1) {
//     return true;
//   }
//
//   var strArr = str.split('');
//   console.log(strArr);
//
//   if (strArr.pop() === strArr.shift()) {
//     isPalindrome(strArr.join(''));
//   } else {
//     return false;
//   }
// }
//
// isPalindrome('pot');

const isPalindrome = (string) => {
  let strLen = string.length;
  string = string.toLocaleLowerCase();

  if (strLen === 0 || strLen === 1) {
    return true;
  }
  if (string[0] === string[strLen - 1]) {
    return isPalindrome(string.slice(1, strLen - 1) );
  }
  return false;
};

console.log(isPalindrome('racecar issi racecar'));
