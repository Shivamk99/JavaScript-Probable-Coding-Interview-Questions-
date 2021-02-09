// 1. Various Ways for Reversing A String

function reverse(str){
  return str.split('').reverse().join('');
}
console.log(reverse("shivam"));

function reverse(str){
  return str.split('').reduce((revStr, char) => char+revStr)
}
console.log(reverse("shivam"));

function reverse(str){
  var string = '';
  for(let i = str.length-1; i >= 0; i--){
     string += str[i];
  }
  return string;
}
reverse("tanay sir");

function reverse(str){
  let string = '';
  for(let char of str){
    string = char+string;
  }
  return string;
}
reverse("tanay sir");

function reverse(str){
  let string = '';
  str.split('').forEach(char => string = char + string );
  return string
}
console.log(reverse("Swap"));


// 2. Validate a Palindrome 
function palindrome(str){
  let string = str.toLowerCase().split('').reverse().join('');
  return str.toLowerCase() === string;
}
palindrome("mam")


// 3. Reverse a Integer
function reverseInt(no){
  let number =  no.toString().split('').reverse().join('');
  return parseInt(number) * Math.sign(no);
}
reverseInt(-143);

// 4. Capitalize Letters
const str = "i love bangalore"
function capitalize(str){
  return str.charAt(0).toUpperCase()+str.substr(1);
} 
const caps = str.split(' ').map(capitalize).join(' ');
console.log(caps);

function capitalize(str){
  return str
            .toLowerCase()
            .split(" ")
            .map(word => word[0].toUpperCase()+word.substr(1))
            .join(" ");
}
console.log(capitalize("i love bangalore"));

function capitalize(str){
  const string = str.toLowerCase().split(' ');
  for(let i = 0; i < string.length; i++){
    string[i] = string[i].substring(0,1).toUpperCase() + string[i].substring(1) 
  }
  return string.join(' ')
}
console.log(capitalize("i love you"))


// 5. Occurence of Each characters
function maxCharacters(str){
  return [...str].reduce((res, nextChar) => {
    res[nextChar] = res[nextChar] ? res[nextChar]+1: 1
    return res
  }, {})
}
console.log(maxCharacters("Shivam Shivraj"));


// 6. max characters
const getMaxLetter = (str) => {
  let max = 0;
  let maxChar = '';
  str.split('').forEach((char) => {
    if (str.split(char).length > max) {
      max = str.split(char).length - 1;
      maxChar = char;
    }
  });
  return maxChar + " occured " + max + " times. "
  //return `The max letter is : ${maxChar} and the max number of times it is seen is: ${max} times`;
};
console.log(getMaxLetter("Shivaam"))


// 7. FizzBuzz 
function FizzBuzz(){
  for(let i = 1; i <= 100; i++){
    if(i % 15 === 0){
      console.log("FizzBuzz")
    } else if(i % 3 === 0 ){
      console.log("Fizz")
    } else if(i % 5 === 0){
      console.log("Buzz")
    } else {
      console.log(i)
    }
  }
}
FizzBuzz();


// 8. Longest Word
function findLongestWord(str) {
  var longestWord = str.split(' ').sort((a, b) => b.length - a.length);
  return longestWord[0];
}
findLongestWord("The quick brown fox jumped over the lazy dog");//jumped

  // (8.a) 
      // return the longest word in a string 
      // if more than one longest word then put it in array

  function longestWord(senti){
    const word = senti.toLowerCase().split(' ')
    
    const sort = word.sort((a,b) => b.length - a.length);
    
    const longestWordArr = sort.filter((words) => words.length === sort[0].length)
    
    if(longestWordArr.length === 1){
        return longestWordArr[0];
    } else {
        return longestWordArr;
    }

  }
  console.log(longestWord("My name is Shivam"))


// 9. Chunk Array
function chunkArr(arr, len){
  let res = [], i=0;
  while(i < arr.length){
    res.push(arr.slice(i, i+len))
    i += len;
  }
  return res;
}
chunkArr([1, 2, 3, 5, 6, 7, 8, 9, 4], 4);

function chunkArr(arr, len){
  const res = [];

  arr.forEach(function(val){
    const last = res[res.length-1];

    if(!last || last.length === len){
      return res.push([val])
    } else {
      return last.push(val);
    }
  })
  return res;
}
chunkArr([1, 2, 3, 5, 6, 7, 8, 9, 4], 4);

/// 10.Flatten an Array
function flattenArr(arrays){
  return [].concat(...arrays)
}

function flattenArr(arrays){
  return arrays.reduce((a,b) => a.concat(b));
}

function flattenArr(arrays){
  return [].concat.apply([], arrays)
}
flattenArr([[1,2], [3,4], [5,6]])

// 11. Anagram
function anagram(str1, str2){
  var newStr1 = str1.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  var newStr2 = str2.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

  return newStr1 === newStr2

  //if(newStr1 === newStr2){
    //console.log("Anagram")
  //} else {
    //console.log("Not a Anagram")
  //}
}

anagram("Dormitory","dirty room++**&&^^");


// 12. Letter Changes
function letterChanges(str) { 
  let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
      if(char === 'z' || char === 'Z'){
        return 'a'
    } else {
        return String.fromCharCode(char.charCodeAt() + 1);
    }
  })

  newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase())

  return newStr;
}
letterChanges("Shivamz")


// 13. Add the no
   ////using E5
function add(){
  var args = Array.prototype.slice.call(arguments)
  var res = 0;
  for( let i = 0; i < args.length; i++){
    res += args[i];
  }
  return res;
}
add(1,2,3,4,5)
   /// Using rest operator
function add(...num){
  var res = 0;
  for(var no of num)
    res += no
  return res;
}
add(1,2,3,4,5);
    /// Using reduce
function add(...num){
  return num.reduce((a,b) => a+b);
}
add(1, 2, 3, 4)


// 14. Sum All Primes
function sum(num){
  let res = 0;
      ///check for prime
  function checkForPrime(i){
    for(let j=2; j<i; j++){
      if(i%j === 0){
        return false;
      }
    }
    return true;
  }
      /// adding part
  for(let i=2; i<=num; i++){
    if(checkForPrime(i)){
      res += i;
    }
  }

  return res;
}
sum(10);


// 15. To print only the prime no from a given array
const arr = [-3,-2,1,3,5,7];
function prime(num){
  for(let i = 2; i<num-1; i++){
      if(num%i === 0){
        return false
      }
  }
  return num > 1
}
arr.filter(prime);


// 16. To check Prime No.
function prime(num){
  for(let i=2; i < num; i++){
    if(num%i === 0){
      return false
    }
  }
  return true;
}
prime(11);


// 17. Seek and Destroy: Remove from the array whatever is in the arguments. Return the leftover values in an array 

function SeekAndDestroy(arr, ...rest){
  return arr.filter(val => !rest.includes(val))
}
SeekAndDestroy([1, 2, 3, "Hello"], 2, 3);


// 18. Adding Two Arrays
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

const res = arr1.concat(arr2).reduce((a,b) => a+b);
console.log(res); //18


// 19. Multiply and Sum of two arrays
function arrMullAdd(arr1, arr2){
 let res = 0;
 for(let i = 0; i < arr1.length; i++){
    res += (arr1[i] * arr2[i]);
 }
  return res;
}
arrMullAdd([1, 2, 3],[1, 2, 3]); //14

// 20. Add the Arrays and display the result in an array
function sum(...arrays) {
  return arrays
    .sort((a, b) => b.length - a.length)
    .reduce((a, c) => a.map((n, i) => n + (c[i] || 0)) || c);
};
sum([1,2,3,4], [5,6,7,8,9]); //[6, 8, 10, 12, 9 ]

// 21. Fibbonacci 
function fib(n){
  if(n === 1) return 0;
  if(n === 2) return 1;
  return fib(n-1)+fib(n-2);
}

function fib(n){
  var n1 = 0, n2 = 1, sum, i=2;
  while(i<n){
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
    i += 1;
  }
  return n2;
}
fib(5)

// 22. factorial(using recursion and for loop)
function fact(n){
  if(n === 0 || n === 1){
    return 1;
  } else {
    return n * fact(n-1)
  }
}
fact(5);

function fact(n){
  var ans = 1;
  for(let i = 1 ; i <= n; i++){
    ans *= i;
  }
  return ans;
}
fact(5);

// 23. Sort By Height: Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange them by there heights in non-decreasing order without moving the trees.
//ex: a = [-1, 150, 190, -1, -1, 180, 160]                                           //sortByHeight(a)=[-1, 150, 160, -1, -1, 180, 190]

function sortByHeight(arr){
  const arr1 = [];
  const arr2 = [];

  arr.forEach((val, i) => (val === -1) ? arr1.push(i) : arr2.push(val) )
  
  const sortedArr = arr2.sort((a,b) => a-b);

  arr1.forEach((val, i) => sortedArr.splice(arr1[i], 0, -1))

  return(sortedArr); 
}
sortByHeight([-1, 150, 190, -1, -1, 180, 160]);


// 24. Missing Letter: Find the missing letter in the passed letter range and return it.

function missingLetter(str){
  let compare = str.charCodeAt(0);
  let missing;
  
  str.split('').map((char,i) => str.charCodeAt(i) === compare ? ++compare : missing=String.fromCharCode(compare))

  return missing;
}
missingLetter("abcd");


// 25. Even and Odd sums
function evenOddSum(arr){
  let evenSum = 0, oddSum = 0;

  arr.forEach(val => val%2 === 0 ? evenSum += val : oddSum += val);
  
  return [evenSum, oddSum] 
}
evenOddSum([2, 4, 6, 1, 3, 5, 8])
  //// using old-school method
function find(){
  let arr = [1, 2, 3, 4, 5, 6 ]; 
  let even = 0, odd = 0; 
    
  // Loop to find even, odd sum 
  for (let i = 0; i < arr.length; i++) { 
    if (i % 2 == 0) 
    even += arr[i]; 
      else
    odd += arr[i]; 
  }
  return [even, odd]
}
find();


// 26. To determine odd or even from an array
function splitOddAndEven(numbers) {
  // filter out the odd numbers
  const odd = numbers.filter(no => no % 2 === 1);

  // filter out the even numbers
  const even = numbers.filter(no => no % 2 === 0);

  // create an object with the odd and even array in it
  const returnObject = {
    odd,
    even,
  };

  return returnObject;
}
splitOddAndEven([1, 3, 5, 2, 4, 6])


// 27. Sum of numbers from an array but at even and odd indicies.
function evenSumIndicies(arr){
  let sum1 = 0;
  let sum2 = 0;
  arr.forEach((val,i) => i%2 === 0 ? sum1 += val : sum2 += val)
  return [sum1, sum2];
} 
evenSumIndicies([1, 2, 3, 4, 5]);


// 28. to convert LowerCase to UpperCase and ViceVersa 
function lowerUpper(str){
  var newStr = '';
  for( let i = 0; i < str.length; i++){
    newStr += str[i] === str[i].toUpperCase() ? str[i].toLowerCase() : str[i].toUpperCase()
  }
  return newStr
}
lowerUpper("i lOVE yOU");


// 29. Multiply Even indexed element by 2 and odd indexed element by 3
function mulEvenOdd(arr){
  return arr.map((num, i) => num * (i%2 === 0 ? 2 : 3 ));
}
mulEvenOdd([1, 2, 3, 4, 5])


// 30. convert Str to camelCase
function toCamelCase(str){
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
}
toCamelCase("shivam kumar")


// 31. To check an array with duplicates
function checkDuplicate(arr){
  return (new Set(arr)).size !== arr.length
}
checkDuplicate([1, 2, 2, 2, 3, 4, 5])


// 32. remove deuplicates from an array
function removeDuplicates(arr){
  return arr.filter((a,b) => arr.indexOf(a) === b)
}
removeDuplicates([1, 2, 2, 3, 3, 4, 5, 6]);


// 33. Count the number of even didgits from an integer
function countEven(arr){
  var no = 0;
  while(num){
    no += num % 2 === 0;
    num = Math.floor(num / 10);
  }
  return no;
}
countEven(12345);


// 34. convert number to an Array
function numToArr(num){
  return String(num).split('').map(val => Number(val));
}
numToArr(12345);


// 35. Merge Array of Objects, only if not duplicates
// (based on specified Object Key)
var initialData = [{
  'id' : 1,
  'fname' : 'Shivam'
},{
  'id' : 2,
  'fName' : 'Shivarj'
}]

var newData = [{
  'id' : 3,
  'fname' : 'Manish'
},{
  'id' : 2,
  'fName' : 'Shivarj'
}]

var ids = new Set(initialData.map(d => d.id));
var merged = [...initialData, ...newData.filter(d => !ids.has(d.id))]
merged;


// 35. To print unique elements from two unsorted arrays
function unique(arr1, arr2, uniqueArr){
  for(var i = 0; i < arr1.length; i++){
    flag = 0;
    for(var j = 0; j < arr2.length; j++){
      if(arr1[i] === arr2[j]){
        arr2.splice(j, 1)
        j--;
        flag = 1;
      }
    }
    if(flag == 0){
      uniqueArr.push(arr1[i])
    }
  }
  uniqueArr.push(arr2)
  return uniqueArr;
}
unique([54, 71, 58, 95, 20], [71, 51, 54, 33, 80],[]).flat();


// 36. Multiply without using * 
function multiply(a, b){
  return a/(1/b);
}
multiply(2, 3) 

function multiply(a, b){
  let answer = a
  for(var i = 0; i < b - 1; i++){
    answer += a
  }
  return answer
}

function multiply(a, b){
    return ("i").repeat(a).repeat(b).length    
}
multiply(22, 3)

// Multiply a number with itself only 
function multiply(num, times){
   var n = num;
   for(var i = 1; i < times; i++)
      num += n; // increments itself
   return num;
} 


// 37. WAP to replicate map function without using map
Array.prototype.mymap = function(callback) {
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;
}

const sample = [1, 2, 3, 4, 5];
var output = sample.mymap(function(val, i, array){
  return val*2;
})
output;*/


// 38. Two Sum: given an array of integers nums and an integer target, return indicies of the two no such that they add up to target.

function indiciesNo(arr, target){
  const comp = {}
  for(let i = 0; i < arr.length; i++){
    if(comp[arr[i]] >= 0){
      return [comp[arr[i]], i]
    }
    comp[target - arr[i]] = i;
  }
}
indiciesNo([1, 2, 3, 4, 5],5)




