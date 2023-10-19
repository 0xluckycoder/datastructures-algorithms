/**
 * Sum All Numbers in a Range
 * We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
 * For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
 * */ 

function sumAll(arr) {

    let largeNum;
    let smallNum;
  
    if (arr[0] > arr[1]) {
      largeNum = arr[0];
      smallNum = arr[1];
    } else {
      largeNum = arr[1];
      smallNum = arr[0];
    }
  
    let result = 0;
    for (let i = smallNum; i <= largeNum; i++) {
      console.log(i);
      result += i;
    }
  
    return result;
}
  
sumAll([1, 4]);

/**
 * Diff Two Arrays
 * Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
 * Note: You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
  const newArr = [];
  
  let arrayOne = arr1;
  let arrayTwo = arr2;

  for (let x = 0; x < 2; x++) {
    for (let i = 0; i < arrayOne.length; i++) {
      let isMatchingItemFound = false;
      for (let j = 0; j < arrayTwo.length; j++) {
        if (arrayOne[i] === arrayTwo[j]) {
          isMatchingItemFound = true;
        }
      }
      if (isMatchingItemFound === false) {
        newArr.push(arrayOne[i]);
      }
    }
    // change the array order
    arrayOne = arr2;
    arrayTwo = arr1;
  }

  return newArr;
}


diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub" ], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);


/**
 * Seek and Destroy
 * You will be provided with an initial array as the first argument to the destroyer function, followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
 * The function must accept an indeterminate number of arguments, also known as a variadic function. You can access the additional arguments by adding a rest parameter to the function definition or using the arguments object.
 * */ 

function destroyer(arr, ...rest) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    let equalItems = false;
    for (let j = 0; j < rest.length; j++) {
      if (arr[i] === rest[j]) {
        equalItems = true;
      }
    }
    if (equalItems === false) {
      newArray.push(arr[i]);
    }
  }
  
  return newArray;

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/**
 * Spinal Tap Case
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {

  const lettersArr = str.split("");

  const newArr = lettersArr.map((item, index, arr) => {
    if (item.toUpperCase() !== item.toLowerCase()) {
      const upperCaseConverted = item.toUpperCase();
      if (item === upperCaseConverted && index !== 0) {
        return "-" + item;
      } else {
        return item;
      }
    } else {
      return " ";
    } 
  });

  const addedDash = newArr.map((item, index, arr) => {
    if (newArr.length - 1 !== index) {
      const nextItemArr = newArr[index + 1].split("");
      if (item === " " && nextItemArr.length !== 2) {
        return "-";
      } else {
        return item;
      }
    } else {
      return item;
  }
  });

  const spacesRemoved = addedDash.filter(item => item !== " ");
  
  const stringConverted = spacesRemoved.join("");
  const lowerCaseConverted = stringConverted.toLowerCase();
  console.log(lowerCaseConverted);
  return lowerCaseConverted;
}

spinalCase("This Is Spinal Tap");
spinalCase("thisIsSpinalTap")
spinalCase("The_Andy_Griffith_Show")
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things")


/**
 * Missing letters
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabet.split("");
  const stringArray = str.split("");
  
  let continueReturn = false;
  const trimedLettersFromAlphabet = alphabetArray.filter((item, index) => {    
    if (stringArray[0] === item) {
      continueReturn = true;
    }
    if (stringArray[stringArray.length - 1] === item) {
      continueReturn = false;
      return item;
    }
    if (continueReturn) {
      return item;
    }
  });

  let missingLetter;

  for (let i = 0; i < trimedLettersFromAlphabet.length; i++) {
    if (stringArray[i] !== trimedLettersFromAlphabet[i]) {
      missingLetter = trimedLettersFromAlphabet[i];
      break;
    }
  }
  console.log(missingLetter);
  return missingLetter;
}

fearNotLetter("abce");
fearNotLetter("stvwx");
fearNotLetter("abcdefghijklmnopqrstuvwxyz");


/**
 * Sorted Union
 * Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
 * In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
 * The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
 * Check the assertion tests for examples.
 * */
/*
flattern the multidimentional array
loop through flattern array and push to new array item will be ignored if it is already exist in the array
*/ 
function uniteUnique(...arr) {
  const flatternedArray = [];
  arr.forEach(item => {
    item.forEach(innerItem => {
      if (flatternedArray.includes(innerItem) === false) {
        flatternedArray.push(innerItem);
      }
    });
  });

  console.log(flatternedArray);
  return flatternedArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
uniteUnique([1, 3, 2], [5, 4], [5, 6]);


/**
 * Convert HTML Entities
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 * */

function convertHTML(str) {
  const mappedEntities = [
    {
      character: "&",
      entity: "&amp;"
    },
    {
      character: "<",
      entity: "&lt;"
    },
    {
      character: ">",
      entity: "&gt;"
    },
    {
      character: "\"",
      entity: "&quot;"
    },
    {
      character: `\'`,
      entity: "&apos;"
    }
  ];
  const arrayConvertedStr = str.split("");
  const convertedArray = arrayConvertedStr.map((item) => {
    let entityObj = null;
    mappedEntities.forEach((entityObjItem) => {
      if (item === entityObjItem.character) {
        entityObj = entityObjItem;
      }
    });
    if (entityObj) {
      return entityObj.entity;
    } else {
      return item;
    }
  });
  const stringConverted = convertedArray.join("");
  return stringConverted;
  console.log(stringConverted);
}

convertHTML("Dolce & Gabbana");
convertHTML('Stuff in "quotation marks"');
convertHTML("Schindler's List");


/**
 * Sum All Odd Fibonacci Numbers
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
 * The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.
 * For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
 * */ 

function sumFibs(num) {

  const fibonacciArray = [0, 1];

  let currentFibValue = 1;

  for (let i = num;  currentFibValue < i; i++) {
    let nextFibNumber = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2];
    currentFibValue = nextFibNumber;
    if(nextFibNumber < num || nextFibNumber === num) {
      fibonacciArray.push(nextFibNumber);
    } else {
      break;
    }
  }

  const oddFibonacciArray = fibonacciArray.filter(num => num % 2);

  let sumOfOddFibonacciNumbers = 0;
  oddFibonacciArray.forEach((num) => sumOfOddFibonacciNumbers += num);

  console.log(sumOfOddFibonacciNumbers, fibonacciArray);
  return sumOfOddFibonacciNumbers;
}

sumFibs(1000);
sumFibs(4000000); 
sumFibs(4);
sumFibs(75025);


/**
 * Sum All Primes
 * A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
 * Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
 * */

/*
loop through numbers from 2 to N
  check how many times N can be divided as a return value as 0 (start from 0 to N)
    if N is equal to 2 push it to the prime array
*/ 

function sumPrimes(num) {

  const primeNumbers = [];
  let divisorCount = 0;

  for (let i = 2; i <= num; i++) {
    for (let l = 1; l <= i; l++) {
      const moduleValue = i % l;
      if (moduleValue === 0) {
        divisorCount++;
      }
    }
    if (divisorCount === 2) {
      primeNumbers.push(i);
    }
    divisorCount = 0;
  }

  let sumOfPrimeNumbers = 0;
  primeNumbers.forEach(num => sumOfPrimeNumbers += num);
  
  console.log(sumOfPrimeNumbers);
  return sumOfPrimeNumbers;
}

sumPrimes(10);

/**
Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
 
*/

function smallestCommons(arr) {
  // return arr;
  let startValue = 0;
  let endValue = 0;

  if (arr[0] < arr[1]) {
    startValue = arr[0];
    endValue = arr[1];
  } else {
    startValue = arr[1];
    endValue = arr[0];
  }

  let numbersBetween = [];
  for (let i = startValue; i <= endValue; i++) {
    numbersBetween.push(i);
  }

  let continueLoop = true
  let value = 0;

  for (let j = 1; continueLoop === true; j++) {

    // console.log(j);

    let isDivisable = false;
    for (let k = 0; k < numbersBetween.length; k++) {
      const answer = numbersBetween[k] % j;
        // if (answer !== 0) {
        //   isDivisable = true;
        // }
    }

    if (isDivisable === true) {
      value = j;
      continueLoop = false;
    }
  }

  console.log(value);


  // console.log(numbersBetween);
}

smallestCommons([1,5]);