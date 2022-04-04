/* 1. Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output: 34223 */

var reverse = function(num) {
    var numStr = num.toString();
    var result = "";
    for (var i=0; i<numStr.length; i++) {
      result = numStr[i].concat(result);
    }
    return parseInt(result);
  }

// reverse(123234);
// expected result: 432321


/* 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
madam or nurses run. */

var palindromeTest = function(string) {
    var cleanedString = "";
    for (var i=0; i<string.length; i++) {
      if (string[i] !== " ") {
        cleanedString = cleanedString.concat(string[i]);
      }
    }
    // console.log(cleanedString);
    for (var i=0; i<cleanedString.length/2; i++) {
      if (cleanedString[i] !== cleanedString[cleanedString.length-i-1]) {
        return false;
      }
    }
    return true;
  }
  
//   palindromeTest("nurses run")
//   expected result: true


/* 3. Write a JavaScript function that generates all combinations of a string. 
Example string: 'dog' 
Expected Output: d, do, dog, o, og, g */
var allCombinations = function(string) {
  var allOptions = [];
  for (var i=0;i<string.length;i++) {
    var newStr = string[i];
    allOptions.push(newStr);
    for (var j=i+1;j<string.length;j++) {
      newStr = newStr.concat(string[j]);
      allOptions.push(newStr);
    }
  }
  return allOptions;
}

// allCombinations("dog")
// expected result: [ 'd', 'do', 'dog', 'o', 'og', 'g' ]


/* 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Example string: 'webmaster' 
Expected Output: 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string. */

var alphOrder = function(string) {
  return string.split("").sort().join("");
}

// alphOrder("webmaster")
// expected result: abeemrstw


/* 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
each word of the string in upper case. 
Example string: 'the quick brown fox' 
Expected Output: 'The Quick Brown Fox ' */

var convertLetter = function(string) {
  var changeUpper = string.split("").map((ele, index) => {
    if (index === 0) {
      ele = ele.toUpperCase();
    } else if (string[index - 1] === " ") {
      ele = ele.toUpperCase();
    }
    return ele;
  })
  return changeUpper.join("");
}

// convertLetter("the quick brown fox")
// expected result: The Quick Brown Fox


/* 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
within the string. 
Example string: 'Web Development Tutorial' 
Expected Output: 'Development' */

var searchLongestWord = function(string) {
  var arr = string.split(" ");
  var longestWord = "";
  arr.forEach((ele) => {
    if (ele.length > longestWord.length) {
      longestWord = ele;
    }
  })
  return longestWord;
}

// searchLongestWord("Web Development Tutorial");
// expected result: "Development";


/* 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
vowels within the string. 
Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
vowel here. 
Example string: 'The quick brown fox' 
Expected Output: 5 */

var vowelsCount = function(string) {
  var count = string.toLowerCase().split("").reduce((acc, word) => {
    if (word === "a" || word === "e" || word === "i" || word === "o" || word === "u") {
      acc++;
   } 
   return acc;
  },0)
  return count;
}

// vowelsCount("The quick brown fox");
// expected result: 5


/* 8. Write a JavaScript function that accepts a number as a parameter and check the number is
prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself. */

var primeTest = function(num) {
  for (var i=2; i<num/2+1; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// primeTest(9);
// expected result: false
// primeTest(11);
// expected result: true


/* 9. Write a JavaScript function which accepts an argument and returns the type. 
Note: There are six possible values that typeof returns: object, boolean, function, number, string,
and undefined. */

var typeTest = function(val) {
  return typeof val;
}

typeTest(function(){});
// expected result: function
typeTest([1,23]);
// expected result: object


/* 10. Write a JavaScript function which returns the n rows by n columns identity matrix. */

var matrix = function(val) {
  var result = [];
  for (var i=0; i<val; i++) {
    var row = [];
    for (var j=0; j<val; j++) {
      if (i !== j) {
        row.push(0);
      } else {
        row.push(1);
      }
    }
    result.push(row);
  }
  return result;
}

// matrix(6);
// expected result: [
//   [ 1, 0, 0, 0, 0, 0 ],
//   [ 0, 1, 0, 0, 0, 0 ],
//   [ 0, 0, 1, 0, 0, 0 ],
//   [ 0, 0, 0, 1, 0, 0 ],
//   [ 0, 0, 0, 0, 1, 0 ],
//   [ 0, 0, 0, 0, 0, 1 ]
// ]

/* 11. Write a JavaScript function which will take an array of numbers stored and find the second
lowest and second greatest numbers, respectively. 
Sample array: [1,2,3,4,5]
Expected Output: 2,4 */

var secondlowestGreatestNum = function(arr) {
  var sortedArr = arr.sort((a,b) => a-b);
  return sortedArr[1] + "," + sortedArr[arr.length - 2];
}

// secondlowestGreatestNum([1,2,3,4,5])
// expected result: 2,4


/* 12. Write a JavaScript function which says whether a number is perfect. 
According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to
the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is
half the sum of all of its positive divisors (including itself).
Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1
+ 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 +
2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the
perfect numbers 496 and 8128. */

var perfectNum = function(num) {
  var possibleDivisors = [];
  for (var i=1; i<num/2+1; i++) {
    if (num % i === 0) {
      possibleDivisors.push(i);
    }
  };
  var sumPossibleDivisors = possibleDivisors.reduce((acc, curr) => {
    return acc + curr;
  }, 0)
  if (sumPossibleDivisors === num) {
    return true;
  } else {
    return false;
  }
}

// perfectNum(8128);
// expected result: true
// perfectNum(8129);
// expected result: false

/* 13. Write a JavaScript function to compute the factors of a positive integer. */

var positiveFactors = function(num) {
  var factors = [];
  for (var i=1; i<num+1; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  console.log(factors);
}

// positiveFactors(342434238);
// expected result: [
//   1,         2,         3,         6,
// 101,       202,       303,       606,
// 709,       797,      1418,      1594,
// 2127,      2391,      4254,      4782,
// 71609,     80497,    143218,    160994,
// 214827,    241491,    429654,    482982,
// 565073,   1130146,   1695219,   3390438,
// 57072373, 114144746, 171217119, 342434238
// ]


/* 14. Write a JavaScript function to convert an amount to coins. 
Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output: 25, 10, 10, 1 */
var amountTocoins = function(total, coinOptions) {
  var totalcoins = [];
  coinOptions.forEach((ele) => {
    while(ele <= total) {
      total = total - ele;
      totalcoins.push(ele);
    }
  })
  console.log(totalcoins);
}
  
// amountTocoins(46, [25, 10, 5, 2, 1]);
// expected output: [25, 10, 10, 1];


/* 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
bases. Accept b and n from the user and display the result. */

var exponent = function(b, n) {
  return Math.pow(b, n);
}

// exponent(3, 2);
// expencted result: 9


/* 16. Write a JavaScript function to extract unique characters from a string. 
Example string: "thequickbrownfoxjumpsoverthelazydog"
Expected Output: "thequickbrownfxjmpsvlazydg" */

var uniqueChar = function(string) {
  var obj = {};
  var result = ""
  for (var i=0; i<string.length; i++) {
    if (obj[string[i]] === 1) {
      continue;
    } else {
      obj[string[i]] = 1;
      result = result.concat(string[i]);
    }
  }
  console.log(result);
}

// uniqueChar("thequickbrownfoxjumpsoverthelazydog");
// expected result: "thequickbrownfxjmpsvlazydg"


/* 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. */

var occurrences = function(string) {
  var arr = string.split("");
  var obj = {};
  arr.forEach((ele) => {
    if (obj[ele] >=1) {
      obj[ele] += 1;
    } else {
      obj[ele] = 1;
    }
  })
  console.log(obj);
}

// occurrences("dogg");
// expected result: { d: 1, o: 1, g: 2 }


/* 18. Write a function for searching JavaScript arrays with a binary search. 
Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
the desired value. */

var binarySearch = function(arr, num) {
  arr.sort((a,b) => a - b);
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor(end / 2);
  console.log(arr);
  while(start !== end) {
    if (num === arr[mid]) {
      start = mid;
      end = mid;
      // console.log("Number show up at index of " + mid + ".")
      return ("Number show up at index of " + mid + ".");
    } else if (start === mid && end === start + 1 && num !== arr[end]) {
      // console.log("The number does not exist in the array")
      return("The number does not exist in the array");
    } else if (end === mid && start === end - 1 && num !== arr[start]) {
      // console.log("The number does not exist in the array")
      return("The number does not exist in the array");
    } else if (num > arr[mid]) {
      start = mid;
      mid = Math.floor((start + end)/2);
    } else if (num < arr[mid]) {
      end = mid;
      mid = Math.floor((start + end)/2);
    }
  }
}

// binarySearch([1,8,2,2,4,5,6], 3);
// expected result: The number does not exist in the array
// binarySearch([43,4345,23,545,1,54,76,7872], 23);
// expected result: Number show up at index of 1.


/* 19. Write a JavaScript function that returns array elements larger than a number. */

var largeElements = function(arr, num) {
  var result = [];
  arr.forEach((ele) => {
    if (ele > num) {
      result.push(ele);
    }
  })
  return result;
}

// largeElements([23,13,435,553,132,43], 54);
// expected result: [ 435, 553, 132 ]


/* 20. Write a JavaScript function that generates a string id (specified length) of random characters.
Sample   character   
list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" */

var generateRandomID = function(list, ID) {
  if (ID <=0) { return "Please enter a positive number greater than 0."};
  var randomChar = "";
  for (var i=0; i<ID; i++) {
    randomChar = randomChar.concat(list[Math.floor(Math.random() * (list.length))]);
  }
  console.log(randomChar);
}

// generateRandomID("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", 32);
// expected result: H06QBlO6zIbwguNlYQb88hIyMvdA0zvE


/* 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
combinations in an array. 
Sample array: [1, 2, 3] and subset length is 2 
Expected output: [[2, 1], [3, 1], [3, 2]] */

var possibleSubset = function(arr, subsetLen) {
  var allComb = [];
  var result_set = [];
  for (var i=0; i<Math.pow(2, arr.length); i++) {
    var result = [];
    x=arr.length-1;
    do {
      if ((i&(1<<x)) !==0) {
        result.push(arr[x]);
      }
    } while(x--);
    if (result.length >= subsetLen) {
      result_set.push(result);
    }
  }
  for (var i=0; i<result_set.length; i++) {
    if (result_set[i].length === subsetLen) {
      allComb.push(result_set[i])
    }
  }
  return allComb
}

// possibleSubset([1,2,3], 2);
// expected result: [[2, 1], [3, 1], [3, 2]]


/* 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
will count the number of occurrences of the specified letter within the string. 
Sample arguments: 'microsoft.com', 'o' */

var letterCount = function(string, letter) {
  var count = string.split("").reduce((acc, curr) => {
    if (curr === letter) {
      acc++;
    }
    return acc;
  },0)
  return count;
}

// letterCount("microsoft.com", "o");
// expected result: 3


/* 23. Write a JavaScript function to find the first not repeated character. 
Sample arguments: 'abacddbec' 
Expected output: 'e' */

var firstNonRepeatLetter = function(string) {
  var objCnt = string.split("").reduce((acc, curr) => {
    if (acc[curr] >= 1) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {})
  for (let ele in objCnt) {
    if (objCnt[ele] === 1) {
      return ele;
    } 
  }
}

// firstNonRepeatLetter("abacddbecfz");
// expected result: "e"


/* 24. Write a JavaScript function to apply Bubble Sort algorithm. 
Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
each pair of adjacent items and swapping them if they are in the wrong order". 
Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1] */

var bubbleSort = function(arr) {
  for (var i=arr.length - 1; i>=0; i--) {
    for (var j=0; j<i; j++) {
      if (arr[j] < arr[j+1]) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  console.log(arr)
}

// bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]);
// expected result: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1];


/* 25. Write a JavaScript function that accept a list of country names as input and returns the
longest country name as output. 
Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output: "United States of America" */

var Longest_Country_Name = function(arr) {
  var longestString = arr.reduce((acc, curr) => {
    if (curr.length > acc.length) {
      acc = curr;
    }
    return acc;
  },"")
  return longestString;
}

// Longest_Country_Name(["Australia", "Germany", "United States of America"]);
// expected result: "United States of America"


/* 26. Write a JavaScript function to find longest substring in a given a string without repeating
characters */

var longestSubStr = function(string) {
  var longestIndex = 0;
  var longestLength = 0;
  for (var i=0; i<string.length; i++) {
    var obj = {};
    var leng = 0;
    var currentIndex=0;
    for (var j=i; j<string.length; j++) {
      if (obj[string[j]] === 1) {
        break;
      } else {
        obj[string[j]] = 1;
        leng++;
        currentIndex=i
      }
    }
    if (leng > longestLength) {
      longestIndex = currentIndex;
      longestLength = leng;
    }
    leng=0;
  }
  // console.log(string.slice(longestIndex, longestIndex+longestLength))
  return string.slice(longestIndex, longestIndex+longestLength);
}

// longestSubStr("google.com");
// expected result: "gle.com"
// longestSubStr("sfsdfsdferfegergrtvrw5ttwrf5gewgtrggwryeytwfvdgsgertwert");
// expected result: "eytwfvdgs"


/* 27. Write a JavaScript function that returns the longest palindrome in a given string. 
Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
symmetric factor problem is the problem of finding a maximum-length contiguous substring of a
given string that is also a palindrome. For example, the longest palindromic substring of
"bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for
example, in the string "abracadabra", there is no palindromic substring with length greater than
three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
In some applications it may be necessary to return all maximal palindromic substrings (that is, all
substrings that are themselves palindromes and cannot be extended to larger palindromic
substrings) rather than returning only one substring or returning the maximum length of a
palindromic substring. */

var longestPalindrome = function(string) {
  var palindromeArr = [];
  for (var i=0; i<string.length; i++) {
    for (var j=i+1; j<string.length; j++) {
      var testStr = string.slice(i, j + 1);
      if (palindromeTest(testStr) === true) {
        palindromeArr.push(testStr);
      }
    } 
  }
  palindromeArr.sort((a,b) => b.length - a.length);
  var result =  palindromeArr.reduce((acc,curr) => {
    if (acc[0] === undefined) {
      acc.push(curr);
    } else if (acc[0].length === curr.length) {
      acc.push(curr);
    }
    return acc;
  },[])
  return result;
}

// longestPalindrome("bananas");
// expected result: [ "anana" ]
// longestPalindrome("abracadabra")
// expected result: [ "aca", "ada" ]


/* 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. */

var functionAsParameter = function(callMe) {
  console.log("This just call me.")
}

var callMe = function() {
  console.log("Please call me when you are free");
}

// functionAsParameter(callMe());


/* 29. Write a JavaScript function to get the function name. */

var functionName = function() {
  console.log(arguments.callee.name);
  return arguments.callee.name;
}

var callFunctionName = function() {
  functionName();
}

// callFunctionName();