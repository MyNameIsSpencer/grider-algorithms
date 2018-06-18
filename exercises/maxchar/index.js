// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char] ++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}


//
// function maxChar(str) {
//
//   const charMap = {};
//   let max = 0;
//   let maxChar = '';
//
//   for (let char of str) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }
//
//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
//
// }






// function maxChar(str) {
//   const splitter = str.split('');
//   let maxLetter = null;
//   let maxCount = 0;
//
//   for (let i = 0; i < splitter.length; i ++) {
//     if (splitter.count(splitter[i]) > maxCount) {
//       maxLetter = splitter[i];
//       maxCount = splitter.count(splitter[i]);
//     }
//   }
//
// }




module.exports = maxChar;
