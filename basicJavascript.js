/*Comment Your JavaScript Code
Comments are lines of code that JavaScript will intentionally ignore.
Comments are a great way to leave notes to yourself and to other people who
will later need to figure out what that code does.
There are two ways to write comments in JavaScript:

Using // will tell JavaScript to ignore the remainder of the text on the current line. 
This is an in-line comment:

// This is an in-line comment.
You can make a multi-line comment beginning with /* and ending with */

/* This is a
multi-line comment */

//create the variable with My Name
var myName;
//asig the value 7 to the variable a
var a;
a = 7;
var b;
b = 7;
b = a;
//asign a value at the first
var c = 9;
//create a string values and asign a value
var myFirstName = "Maria";
var myLastName = "Rios Navarro";

var d = 5;
var e = 10;
var f = "I am a";

d = d + 1;
e = e + 5;
f = f + " String!";

//use camelCase-Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//introducing the difference between var and let. (let can not be more times declared, you can not overridden: important ES6)
let catName = "Oliver";
let catSound = "Meow!";

//introduce the difference between let and const. With Const you can not reassigning the value. The console will display an error due to reassigning the value, const is READ-ONLY and can not change
// It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays).
const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);

// Add Two Numbers with JavaScript
const sum = 10 + 10;

//Subtract One Number from Another with JavaScript
const difference = 45 - 33;

//Multiply Two Numbers with JavaScript
const product = 8 * 10;

//Divide One Number by Another with JavaScript
const quotient = 66 / 33;

//Increment a Number with JavaScript
let myVarA = 87;
myVarA++;

//Decrement a Number with JavaScript
let myVarB = 11;
myVarB--;

//Create Decimal Numbers with JavaScript (float numbers)
const ourDecimal = 5.7;
const myDecimal = 5.7;

//Multiply Two Decimals with JavaScript
const productDecimal = 2.0 * 2.5;

//Divide One Decimal by Another with JavaScript
const quotientDecimal = 4.4 / 2.0;

//Finding a Remainder in JavaScript % (Note: The remainder operator is sometimes incorrectly referred to as the modulus operator. It is very similar to modulus, but does not work properly with negative numbers.)
const remainder = 11 % 3;

//Compound Assignment With Augmented Addition: += Operator
let g = 3;
let h = 17;
let j = 12;

//Use += operator
g += 12;
h += 9;
j += 7;

//Compound Assignment With Augmented Subtraction: -= Operator
g -= 6;
h -= 15;
j -= 1;

//Compound Assignment With Augmented Multiplication: *= Operator
g *= 5;
h *= 3;
j *= 10;

//Compound Assignment With Augmented Division: /=Operator
g /= 12;
h /= 4;
j /= 11;

// Escaping Literal Quotes in Strings: with \ beforr " or '. In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.
const myStrB = 'I am a "double quoted" string inside "double quotes".';

// Quoting Strings with Single Quotes. String values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote
// Sometimes we have an ' in the middle of the sentence and if we do not mark it before with \ it will give us an error

const myStrC = '<a href="http://www.example.com" target="_blank">Link</a>';

// Escape Sequences in Strings
// Assign the following three lines of text into the single variable myStr using escape sequences.

/* FirstLine
    \SecondLine
ThirdLine

You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.*/

const myStrD = "FirstLine\n\t\\SecondLine\nThirdLine";

//Explanation:
/* Escape sequences allow you to use characters you may not otherwise be able to use in a string.

Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\t	tab
\r	carriage return
\b	backspace
\f	form feed
Note that the backslash itself must be escaped in order to display as a backslash.

In our example we need:
After -FirstLine- we need
a new line with: \n
a Tab with: \t
a \ with \\
than is -SecondLine-
after that we need a new line with : \n
and -ThirdLine_

*/

// ***********The headings of each section are marked by ---- before starting.*********

// ----Concatenating Strings with Plus Operator. Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

const myStrE = "This is the start. " + "This is the end.";

// ----Concatenating Strings with the Plus Equals Operator. Note: Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself

let myStrF;
myStrF = "This is the first sentence. ";
myStrF += "This is the second sentence.";

// ----Constructing Strings with Variables
// Sometimes you will need to build a string. By using the concatenation operator (+), you can insert one or more variables into a string you're building.

const myNameA = "Maria";
const myStrG = "My Name is" + myNameA + " and I am well!";

//----Appending Variables to Strings with +=

const someAdjective = "cool";
let myStrH = "Learning to code is ";
myStrH += someAdjective;

// ---- .length  ----Find the Length of a String
// You can find the length of a String value by writing .length after the string. . Note that the space character is also counted

let lastNameLength = 0;
const lastNameA = "Lovelace";

lastNameLength = lastNameA.length;

// ----Use Bracket Notation to Find the First Character in a String.Bracket notation is a way to get a character at a specific index within a string []. Zero-based indexing counting start at 0
// find the 1st letter od lastNameB

let firstLetterOfLastNameB = "";
const lastNameB = "Rios";
firstLetterOfLastNameB = lastNameB[0];

// ----Understand String Immutability. We can asign a new value but not change the value.
// also we can not do let myStr = "Bob"; myStr[0] = "J"; only we can asign a new value:let myStr = "Bob"; myStr = "Job";

let myStrI = "Jello World";
myStrI = "Hello World";

// ----Use Bracket Notation to Find the Nth Character in a String

const lastNameC = "Navarro";
const thirdLetterOfLastName = lastNameC[2];

// ----Use Bracket Notation to Find the Last Character in a String with .length-1
const lastNameD = "Ripolles";
const lastLetterOfLastName = lastNameD[lastNameD.length - 1];
console.log(lastLetterOfLastName);
const lastNameE = "Velasco";
console.log(lastNameE[lastNameE.length - 1]);

//---- Use Bracket Notation to Find the Nth-to-Last Character in a String. Works like above

const secondToLastLetterOfLastName = lastNameE[lastNameE.length - 2];
console.log(secondToLastLetterOfLastName);

// ----Word Blanks exercise. You will need to use the string concatenation operator + to build a new string, using the provided variables:
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks =
  "Your " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb;
console.log(wordBlanks);

//---- You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry
const myArrayA = ["hello", 2];

// ----multi-dimensional array: Nest one Array within Another Array
const myArrayB = [
  ["so", "sa"],
  ["la", "lo"],
];

// ----Access Array Data with Indexes: Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing,
const myArrayC = [50, 60, 70];
const myDataA = myArrayC[0];
console.log(myDataA);

// ----Modify Array Data With Indexes. Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.There shouldn't be any spaces between the array name and the square brackets
const myArrayD = [18, 64, 99];
myArrayD[0] = 45;
console.log(myArrayD);

// ----Access Multi-Dimensional Arrays With Indexes
// One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outermost (the first level) array, and each additional pair of brackets refers to the next level of entries inside.

const myArrayE = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myDataB = myArrayE[2][1];
const myDataC = myArrayE[3][0][1];

console.log(myDataB);
console.log(myDataC);

//----.push  --Manipulate Arrays With push Method (add)
// An easy way to append data to the end of an array is via the push() function.

//one example with the const of before

const myArrayG = [];
myArrayG.push(myDataB, myDataC);
console.log(myArrayG);

//another example

const myArrayF = [
  ["John", 23],
  ["cat", 2],
];
myArrayF.push(["dog", 3]);
console.log(myArrayF);

//---- .pop() --removes the last element from an array and returns that element.

const myArrayH = [
  ["John", 23],
  ["cat", 2],
];
const removedFromMyArrayA = myArrayH.pop();
console.log(removedFromMyArrayA);

//---- .shift() --removes the first element instead of the last
const myArrayI = [
  ["John", 23],
  ["dog", 3],
];
const removedFromMyArrayB = myArrayI.shift();
console.log(removedFromMyArrayB);

//---- .unshift() --adds the element at the beginning of the array.
const myArrayJ = [
  ["John", 23],
  ["dog", 3],
];
myArrayJ.shift();
myArrayJ.unshift(["Paul", 35]);
console.log(myArrayJ);

//Exercise: Shopping List
const myListA = [];
myListA.push(
  ["Chocolate Bar", 15],
  ["apple", 1],
  ["banana", 2],
  ["salad", 3],
  ["juice", 4]
);
console.log(myListA);

// ----Write Reusable JavaScript with Functions

function reusableFunction() {
  console.log("Hola World");
}
reusableFunction();

// ----  Passing Values to Functions with Arguments. Parameters are variables that act as placeholders. The actual values that are input (or "passed") into a function when it is called are known as arguments. you could call testFun again with different arguments and the parameters would take on the value of the new arguments.

function functionWithArgs(numberA, numberB) {
  console.log(numberA + numberB);
}
functionWithArgs(-3, 10);

// ----Return a Value from a Function with Return .You can use a return statement to send a value back out of a function.
function timesFive(numberC) {
  return numberC * 5;
}
console.log(timesFive(300));

//  ---- Global Scope and Functions
//   In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code. You should always declare your variables with let or const.Exercise:

// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  let outputA = "";
  if (typeof myGlobal != "undefined") {
    outputA += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    outputA += " oopsGlobal: " + oopsGlobal;
  }
  console.log(outputA);
}

// ----Local Scope and Functions
// Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

// the use of a variable that has been defined in a function, outside this function (e.g. in a console.log) will give an error. Exercise

function myLocalScope() {
  // Only change code below this line
  const myVar = "hola";
  console.log("inside myLocalScope", myVar);
}
myLocalScope();

// Run and check the console
//myVar is not defined outside of myLocalScope

//console.log('outside myLocalScope', myVar); --->ERROR IN THE CONSOLE (i change it to comment)

// ----Global vs. Local Scope in Functions
// It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable. Exercise:

const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit(); //return sweater, the local variable takes precedence over the global variable
console.log(myOutfit());

// ----Understanding Undefined Value returned from a Function
// A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.
//Exercise:
let sum2 = 0;
function addThree() {
  sum2 = sum2 + 3;
}
function addFive() {
  sum2 = sum2 + 5;
}

addThree();
addFive();

//I add console.log to check the terminal

console.log(addThree);
console.log(addFive);

// ----Assignment with a Returned Value
// everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);

// -----Stand in Line
// In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.
// exercice: Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
//           Add the number to the end of the array, then remove the first element of the array.

function nextInLine(arr, item) {
  // Only change code below this line
  const newArrA = arr.push(item);
  const removedItem = arr.shift();
  return removedItem;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// ------Understanding Boolean Values
// Another data type is the Boolean. Booleans may only be one of two values: true or false. Note: Boolean values are never written with quotes. The strings "true" and "false" are not Boolean

function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

// ------Use Conditional Logic with If Statements. if statements are used to make decisions in code.The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.
// When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

// Pseudocode

// if (condition is true) {
//   statement is executed
// }

// ANd example:

// function test (myCondition) {
//   if (myCondition) {
//     return "It was true";
//   }
//   return "It was false";
// }

// test(true);
// test(false);

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";

  // Only change code above this line
}

// ---- Comparison with the Equality Operator ==
// There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.
// The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.

// function equalityTest(myVal) {
//   if (myVal == 10) {
//     return "Equal";
//   }
//   return "Not Equal";
// }

// In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as Type Coercion. Once it does, however, it can compare terms as follows:

// 1   ==  1  // true
// 1   ==  2  // false
// 1   == '1' // true
// "3" ==  3  // true

function testEqual(val) {
  if (val == 12) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
console.log(testEqual(10));

// ----Comparison with the Strict Equality Operator ===
// Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.
// Examples
// 3 ===  3  // true
// 3 === '3' // false

// Setup
function testStrict(val) {
  if (val === 7) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
console.log(testStrict(10));

// ----Practice comparing different values & use of typeof
// In the last two challenges, we learned about the equality operator (==) and the strict equality operator (===). Let's do a quick review and practice using these operators some more.
// If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.
// 3 == '3' returns true because JavaScript performs type conversion from string to number. 3 === '3' returns false because the types are different and type conversion is not performed.
// Note: In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

// typeof 3 returns the string number, and typeof '3' returns the string string.

function compareEquality(a, b) {
  if (a === b) {
    // Change this line to do strictly equality operator
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
console.log(compareEquality(10, "10"));

//and terminal say Not Equal

function compareEqualityB(c, d) {
  if (c == d) {
    // Change this line to do equality operator
    return "Equal";
  }
  return "Not Equal";
}

compareEqualityB(10, "10");
console.log(compareEqualityB(10, "10"));

//and terminal say Equal

// ------Comparison with the Inequality Operator !=
// The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.
// Examples
// 1 !=  2    // true
// 1 != "1"   // false  ---- important!!
// 1 != '1'   // false
// 1 != true  // false
// 0 != false // false
// Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.

// Setup
function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
console.log(testNotEqual(10));

// -----Comparison with the Strict Inequality Operator !==
// The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.

// Examples

// 3 !==  3  // false
// 3 !== '3' // true
// 4 !==  3  // true

// Setup
function testStrictNotEqual(val) {
  if (val !== 17) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
console.log(testStrictNotEqual(10));

// -----Comparison with the Greater Than Operator  >
// The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

// Like the equality operator, the greater than operator will convert data types of values while comparing.
// 5   >  3  // true
// 7   > '3' // true
// 2   >  3  // false
// '1' >  9  // false

function testGreaterThan(val) {
  if (val > 100) {
    // Change this line
    return "Over 100";
  }

  if (val > 10) {
    // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
console.log(testGreaterThan(10));

// -------Comparison with the Greater Than Or Equal To Operator  >=
// The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.

// Like the equality operator, the greater than or equal to operator will convert data types while comparing.
// 6   >=  6  // true
// 7   >= '3' // true
// 2   >=  3  // false
// '7' >=  9  // false

function testGreaterOrEqual(val) {
  if (val >= 20) {
    // Change this line
    return "20 or Over";
  }

  if (val >= 10) {
    // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
console.log(testGreaterOrEqual(10));

// ---------Comparison with the Less Than Operator   <
// The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, the less than operator converts data types while comparing.

function testLessThan(val) {
  if (val < 25) {
    // Change this line
    return "Under 25";
  }

  if (val < 55) {
    // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
console.log(testLessThan(10));

// -----Comparison with the Less Than Or Equal To Operator <=
// The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, the less than or equal to operator converts data types.

function testLessOrEqual(val) {
  if (val <= 12) {
    // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
console.log(testLessOrEqual(10));

// ---- Comparisons with the Logical And Operator &&
// Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

// The same effect could be achieved by nesting an if statement inside another if.

// if (num > 5) {
//   if (num < 10) {
//     return "Yes";
//   }
// }
// return "No";
// This code will return Yes if num is greater than 5 and less than 10. The same logic can be written with the logical and operator.

// if (num > 5 && num < 10) {
//   return "Yes";
// }
// return "No";

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
console.log(testLogicalAnd(10));

// -----Comparisons with the Logical Or Operator ||
// The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

// The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.

// The pattern below should look familiar from prior waypoints.

// if (num > 10) {
//   return "No";
// }
// if (num < 5) {
//   return "No";
// }
// return "Yes";
// This code will return Yes if num is between 5 and 10 (5 and 10 included). The same logic can be written with the logical or operator.

// if (num > 10 || num < 5) {
//   return "No";
// }
// return "Yes";

function testLogicalOr(val) {
  // Only change code below this line

  if (val > 20 || val < 10) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
console.log(testLogicalOr(15));

// ----- Introducing Else Statements if(){}else{}
// When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

// if (num > 10) {
//   return "Bigger than 10";
// } else {
//   return "10 or Less";
// }

function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);
console.log(testElse(15));

// ------Introducing Else If Statements  if(){} else if{} else{}
// If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

// if (num > 15) {
//   return "Bigger than 15";
// } else if (num < 5) {
//   return "Smaller than 5";
// } else {
//   return "Between 5 and 15";
// }

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

testElseIf(7);
console.log(testElseIf(2));
console.log(testElseIf(8));
console.log(testElseIf(10));

// -------Logical Order in If Else Statements
// Order is important in if, else if statements.

// The function is executed from top to bottom so you will want to be careful of what statement comes first.

// Take these two functions as an example.

// Here's the first:

// function foo(x) {
//   if (x < 1) {
//     return "Less than one";
//   } else if (x < 2) {
//     return "Less than two";
//   } else {
//     return "Greater than or equal to two";
//   }
// }
// And the second just switches the order of the statements:

// function bar(x) {
//   if (x < 2) {
//     return "Less than two";
//   } else if (x < 1) {
//     return "Less than one";
//   } else {
//     return "Greater than or equal to two";
//   }
// }
// While these two functions look nearly identical if we pass a number to both we get different outputs.

// foo(0)
// bar(0)
// foo(0) will return the string Less than one, and bar(0) will return the string Less than two.

function orderMyLogicA(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogicA(7);
console.log(orderMyLogicA(7));
console.log(orderMyLogicA(4));

function orderMyLogicB(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogicB(7);
console.log(orderMyLogicB(7));
console.log(orderMyLogicB(4));

// -----Chaining If Else Statements if(con1){}else if(con2){} else if(con3){} else{statementN}
// if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:

// if (condition1) {
//   statement1
// } else if (condition2) {
//   statement2
// } else if (condition3) {
//   statement3
// . . .
// } else {
//   statementN
// }

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  } else {
    return "Change Me";
    // Only change code above this line
  }
}
testSize(7);
console.log(testSize(7));

// ---- Exercise Chaining If Else Statements
// Golf Code
// In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

// Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

// Strokes	Return
// 1	"Hole-in-one!"
// <= par - 2	"Eagle"
// par - 1	"Birdie"
// par	"Par"
// par + 1	"Bogey"
// par + 2	"Double Bogey"
// >= par + 3	"Go Home!"
// par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.

const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) {
    return names[0]; // "Hole-in-one!"
  } else if (strokes <= par - 2) {
    return names[1]; // "Eagle"
  } else if (strokes === par - 1) {
    return names[2]; // "Birdie"
  } else if (strokes === par) {
    return names[3]; // "Par"
  } else if (strokes === par + 1) {
    return names[4]; // "Bogey"
  } else if (strokes === par + 2) {
    return names[5]; // "Double Bogey"
  } else if (strokes >= par + 3) {
    return names[6]; // "Go Home!"
  }

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);

golfScore(5, 4);
console.log(golfScore(5, 4));

console.log(golfScore(4, 1));
console.log(golfScore(4, 2));
console.log(golfScore(5, 2));
console.log(golfScore(4, 3));
console.log(golfScore(4, 4));
console.log(golfScore(1, 1));
console.log(golfScore(5, 5));
console.log(golfScore(4, 5));
console.log(golfScore(4, 6));
console.log(golfScore(4, 7));
console.log(golfScore(4, 9));

// ----------Selecting from Many Options with Switch Statements switch(n){case"a": ;break; case"b": ;break;}
// If you need to match one value against many options, you can use a switch statement. A switch statement compares the value to the case statements which define various possible values. Any valid JavaScript statements can be executed inside a case block and will run from the first matched case value until a break is encountered.

// Here is an example of a switch statement:

// switch (fruit) {
//   case "apple":
//     console.log("The fruit is an apple");
//     break;
//   case "orange":
//     console.log("The fruit is an orange");
//     break;
// }
// case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      console.log(answer);
      break;
    case 2:
      answer = "beta";
      console.log(answer);
      break;
    case 3:
      answer = "gamma";
      console.log(answer);
      break;
    case 4:
      answer = "delta";
      console.log(answer);
      break;
  }

  // Only change code above this line
  return answer;
}

caseInSwitch(1);
caseInSwitch(5);
caseInSwitch(4);

// ------Adding a Default Option in Switch Statements   switch(n){case"a": ;break;----default: ;break}
// In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.

// A default statement should be the last case.

// switch (num) {
//   case value1:
//     statement1;
//     break;
//   case value2:
//     statement2;
//     break;
// ...
//   default:
//     defaultStatement;
//     break;
// }

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line

  switch (val) {
    case "a":
      answer = "apple";
      console.log(answer);
      break;
    case "b":
      answer = "bird";
      console.log(answer);
      break;
    case "c":
      answer = "cat";
      console.log(answer);
      break;
    default:
      answer = "stuff";
      console.log(answer);
      break;
  }
  // Only change code above this line
  return answer;
}

switchOfStuff(1); // console say stuff
switchOfStuff("c"); // console say cat
switchOfStuff(a); //console say stuff, becouse case values are tested with strict equality (===), also a ist no the same to "a"

// ----Multiple Identical Options in Switch Statements
// If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:

// let result = "";
// switch (val) {
//   case 1:
//   case 2:
//   case 3:
//     result = "1, 2, or 3";
//     break;
//   case 4:
//     result = "4 alone";
// }
// Cases for 1, 2, and 3 will all produce the same result.

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      console.log(answer);
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      console.log(answer);
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      console.log(answer);
      break;
  }

  // Only change code above this line
  return answer;
}

sequentialSizes(1);
sequentialSizes(5);
sequentialSizes(7);

// ------Replacing If Else Chains with Switch
// If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:

// if (val === 1) {
//   answer = "a";
// } else if (val === 2) {
//   answer = "b";
// } else {
//   answer = "c";
// }
// can be replaced with:

// switch (val) {
//   case 1:
//     answer = "a";
//     break;
//   case 2:
//     answer = "b";
//     break;
//   default:
//     answer = "c";
// }

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
    default:
      answer = "No find solution";
      break;
  }
  // Only change code above this line
  return answer;
}

chainToSwitch(7);
console.log(chainToSwitch(7));
console.log(chainToSwitch(42));
console.log(chainToSwitch("bob"));
console.log(chainToSwitch("99")); //becouse case values are tested with strict equality (===), also 99 is not the same as "99";
console.log(chainToSwitch(99));

// --------Returning Boolean Values from Functions
// You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value.

// Sometimes people use an if/else statement to do a comparison, like this:

// function isEqual(a, b) {
//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// }
// But there's a better way to do this. Since === returns true or false,
//  we can return the result of the comparison:

// function isEqual(a, b) {
//   return a === b;
// }

function isLess(a, b) {
  // Only change code below this line
  return a < b;

  // Only change code above this line
}

isLess(10, 15);
console.log(isLess(10, 15));

// Return Early Pattern for Functions
// When a return statement is reached, the execution of the current function stops and control returns to the calling location.

// Example

// function myFun() {
//   console.log("Hello");
//   return "World";
//   console.log("byebye")
// }
// myFun();
// The above will display the string Hello in the console, and return the string World. The string byebye will never display in the console, because the function exits at the return statement.

// Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined;
  }

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);
console.log(abTest(2, 2));

// -------Exercise:
// Counting Cards
// In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

// Count Change	Cards
// +1	2, 3, 4, 5, 6
// 0	7, 8, 9
// -1	10, 'J', 'Q', 'K', 'A'
// You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

// Example Outputs: -3 Hold or 5 Bet

// Hint
// Do NOT reset count to 0 when value is 7, 8, or 9.
// Do NOT return an array.
// Do NOT include quotes (single or double) in the output.

let count = 0;

function cc(card) {
  // Convert card to its corresponding count value
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
    default:
      break;
  }
  // Determine whether to Bet or Hold based on the current count
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");

console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc("K"));
console.log(cc("A"));

// ------Build JavaScript Objects const object={ propiertyA: , propiertyB: ,propiertyC:  }
// You may have heard the term object before.

// Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

// Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

// Here's a sample cat object:

// const cat = {
//   "name": "Whiskers",
//   "legs": 4,
//   "tails": 1,
//   "enemies": ["Water", "Dogs"]
// };
// In this example, all the properties are stored as strings, such as name, legs, and tails. However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:

// const anotherObject = {
//   make: "Ford",
//   5: "five",
//   "model": "focus"
// };
// However, if your object has any non-string properties,
//  JavaScript will automatically typecast them as strings

const myDog = {
  // Only change code below this line
  name: "WOW",
  legs: 3,
  tails: 1,
  friends: ["me", "you"],

  // Only change code above this line
};

// -------Accessing Object Properties with Dot Notation (.)
// There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

// Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

// Here is a sample of using dot notation (.) to read an object's property:

// const myObj = {
//   prop1: "val1",
//   prop2: "val2"
// };

// const prop1val = myObj.prop1;
// const prop2val = myObj.prop2;
// prop1val would have a value of the string val1, and prop2val would have a value of the string val2.

// Setup
const testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};

// Only change code below this line
const hatValue = testObj.hat; // Change this line
const shirtValue = testObj.shirt; // Change this line

// -----Accessing Object Properties with Bracket Notation

// The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

// However, you can still use bracket notation on object properties without spaces.

// Here is a sample of using bracket notation to read an object's property:

// const myObj = {
//   "Space Name": "Kirk",
//   "More Space": "Spock",
//   "NoSpace": "USS Enterprise"
// };

// myObj["Space Name"];
// myObj['More Space'];
// myObj["NoSpace"];
// myObj["Space Name"] would be the string Kirk, myObj['More Space'] would be the string Spock, and myObj["NoSpace"] would be the string USS Enterprise.

// Note that property names with spaces in them must be in quotes (single or double).

// Setup
const testObj2 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

// Only change code below this line
const entreeValue = testObj2["an entree"]; // Change this line
const drinkValue = testObj2["the drink"]; // Change this line

//------Accessing Object Properties with Variables
// Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.

// Here is an example of using a variable to access a property:

// const dogs = {
//   name1: "Mutt",
//   name2: "Doberman",
//   name3: "Beagle"
// };

// const myDog = "name2";
// const myBreed = dogs[myDog];
// console.log(myBreed);
// The string Doberman would be displayed in the console.

// Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name.

// Setup
const testObjC = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

// Only change code below this line
const playerNumber = 16; // Change this line
const player = testObjC[playerNumber]; // Change this line

console.log(player);
console.log(testObjC[16]);

// ---------Updating Object Properties:   obejct.propiertyA =""  or object[propiertyA]=""
// After you've created a JavaScript object, you can update its properties at any time just like
// you would update any other variable. You can use either dot or bracket notation to update.

// For example, let's look at ourDog:

// const ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"]
// };
// Since he's a particularly happy dog, let's change his name to the string Happy Camper.
//        Here's how we update his object's name property:
//  ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper";

//  Now when we evaluate ourDog.name, instead of getting Camper, we'll get his new name, Happy Camper.

// Setup
const myDogA = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDogA["name"] = "Happy Coder";
// Only change code below this line

// ---------Add New Properties to a JavaScript Object
// You can add new properties to existing JavaScript objects the same way you would modify them.

// Here's how we would add a bark property to ourDog:

// ourDog.bark = "bow-wow";
// or
// ourDog["bark"] = "bow-wow";

const myDogB = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDogB["bark"] = "woof";

console.log(myDogB);

// ------Delete Properties from a JavaScript Object    delete object.propiertyA   delete object["propiertyA"]
// We can also delete properties from objects like this:

// delete ourDog.bark;  -----or
// delete ourDog["bark"];

// Setup
const myDogC = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
};
delete myDogC["tails"];
console.log(myDogC);
// Only change code below this line

// ----Using Objects for Lookups
// Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.

// Here is an example of an article object:

// const article = {
//   "title": "How to create objects in JavaScript",
//   "link": "https:....",
//   "author": "K H",
//   "language": "JavaScript",
//   "tags": "TECHNOLOGY",
//   "createdAt": "NOVEMBER 28, 2018"
// };

// const articleAuthor = article["author"];
// const articleLink = article["link"];

// const value = "title";
// const valueLookup = article[value];

// Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line

  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
    "": undefined,
  };
  result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
console.log(phoneticLookup("charlie"));

// ---------Testing Objects for Properties  .hasOwnProperty(propname)
// Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

// Example

const myObj = {
  top: "hat",
  bottom: "pants",
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");

console.log(myObj.hasOwnProperty("middle"));

// The first hasOwnProperty returns true, while the second returns false.

// I have to mark this exercise (below) as a comment otherwise it gives an error in the command line because checkProp is not defined.
// Check if obj has the property checkProp using hasOwnProperty
// if (objA.hasOwnProperty(checkProp)) {     // If the property is found, return its value
//   return objA[checkProp];
// } else {
//   // If the property is not found, return "Not Found"
//   return "Not Found";
// }

// ----------------------------

// --------  Manipulating Complex Objects
// Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.

// Here's an example of a complex data structure:

// const ourMusic = [
//   {
//     "artist": "Daft Punk",
//     "title": "Homework",
//     "release_year": 1997,
//     "formats": [
//       "CD",
//       "Cassette",
//       "LP"
//     ],
//     "gold": true
//   }
// ];
// This is an array which contains one object inside. The object has various pieces of metadata about an album. It also has a nested formats array. If you want to add more album records, you can do this by adding records to the top level array. Objects hold data in a property, which has a key-value format. In the example above, "artist": "Daft Punk" is a property that has a key of artist and a value of Daft Punk.

// Note: You will need to place a comma after every object in the array, unless it is the last object in the array.

const myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "Beatles",
    title: "Help",
    release_year: 1961,
    formats: ["CD", "8T", "LP"],
  },
];

console.log(myMusic[0].formats[1]);
console.log(myMusic[1].title);

// -----------  Accessing Nested Objects
// The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

// Here is a nested object:

// const ourStorage = {
//   "desk": {
//     "drawer": "stapler"
//   },
//   "cabinet": {
//     "top drawer": {
//       "folder1": "a file",
//       "folder2": "secrets"
//     },
//     "bottom drawer": "soda"
//   }
// };

// ourStorage.cabinet["top drawer"].folder2;
// ourStorage.desk.drawer;
// ourStorage.cabinet["top drawer"].folder2 would be the string secrets, and ourStorage.desk.drawer would be the string stapler

const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

const gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

// ---------Accessing Nested Arrays
// As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, array bracket notation can be chained to access nested arrays.

// Here is an example of how to access a nested array:

// const ourPets = [
//   {
//     animalType: "cat",
//     names: [
//       "Meowzer",
//       "Fluffy",
//       "Kit-Cat"
//     ]
//   },
//   {
//     animalType: "dog",
//     names: [
//       "Spot",
//       "Bowser",
//       "Frankie"
//     ]
//   }
// ];

// ourPets[0].names[1];
// ourPets[1].names[0];
// ourPets[0].names[1] would be the string Fluffy, and ourPets[1].names[0] would be the string Spot.

const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

const secondTree = myPlants[1].list[1];
console.log(secondTree);

// --------Exercise: Record Collection
// You are creating a function that aids in the maintenance of a musical album collection. The collection is organized as an object that contains multiple albums which are also objects. Each album is represented in the collection with a unique id as the property name. Within each album object, there are various properties describing information about the album. Not all albums have complete information.

// The updateRecords function takes 4 arguments represented by the following function parameters:

// records - an object containing several individual albums
// id - a number representing a specific album in the records object
// prop - a string representing the name of the album’s property to update
// value - a string containing the information used to update the album’s property
// Complete the function using the rules below to modify the object passed to the function.

// Your function must always return the entire records object.
// If value is an empty string, delete the given prop property from the album.
// If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
// If prop is tracks and value isn't an empty string, add the value to the end of the album's tracks array. You need to create this array first if the album does not have a tracks property.
// Note: A copy of the recordCollection object is used for the tests. You should not directly modify the recordCollection object.

// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecords(records, id, prop, value) {
  // Check if the album with the given id exists in the records object
  if (records.hasOwnProperty(id)) {
    // Get the album object
    let album = records[id];

    // Check if value is an empty string, if so, delete the prop property from the album
    if (value === "") {
      delete album[prop];
    } else {
      // Check if prop is 'tracks'
      if (prop === "tracks") {
        // Check if the album already has a tracks property, if not, create one as an array
        if (!album.hasOwnProperty(prop)) {
          album[prop] = [];
        }
        // Add the value to the end of the album's tracks array
        album[prop].push(value);
      } else {
        // Update the album's prop with the given value
        album[prop] = value;
      }
    }
  }

  return records;
}

// Test the function with the provided recordCollection object
const updatedRecordCollection = updateRecords(
  recordCollection,
  5439,
  "artist",
  "ABBA"
);
console.log(updatedRecordCollection);

// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-record-collection/18261 SOLUTIONS:

//  SOLUTION A

// // function updateRecords(records, id, prop, value) {
//   if (value === "") {
//     delete records[id][prop];
//   } else if (prop !== "tracks" && value !== "") {
//     records[id][prop] = value;
//   } else if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks") === false) {
//     records[id][prop] = [value];
//   } else if (prop === "tracks" && value !== "") {
//     records[id][prop].push(value);
//   }
//   return records;
// }

// Code Explanation
// This version of the code explicitly handles every possible case with separate if clauses.

// First it checks if the value is an empty string. If it is, then the prop is deleted.
// Then, if prop is not "tracks" and the value is not an empty string. The prop is set to the value.
// If that check doesn’t pass, it next checks if prop is equal to tracks, the value is not an empty string, and the record does not have a tracks array. The "tracks" array is initialized with the only contents being value.
// It next checks if prop is equal to tracks, the value is not an empty string. The "tracks" array must exist because the case above was not true. The value is pushed onto the end of the "tracks" array.
// Lastly, the entire records object is returned.

//  SOLUTION B
// function updateRecords(records, id, prop, value) {
//   if (value === '') {
//     delete records[id][prop];
//   } else if (prop === "tracks") {
//     records[id][prop] = records[id][prop] || []; // shortcircuit evaluation
//     records[id][prop].push(value);
//   } else {
//     records[id][prop] = value;
//   }
//   return records;
// }

//  Code Explanation
// This solution re-orders the code to make the if clauses simpler.
// First checks if value is a blank string. If so, then the key (prop) is removed from the object.
// If that first check doesn’t pass, then we know that value is not a blank string. It next checks if prop is equal to "tracks". The "tracks" array is initialized if it does not exist, and then value is pushed into the tracks array. (This step uses shortcircuit evaluation)
// If both these checks fail (meaning value is not an empty string and prop is not "tracks"), then either a new key (prop) and value (value) are added to the object, or an existing key is updated if the prop already exists.
// Lastly, the entire records object is returned.
// Example Run

//   updateRecords(5439, "artist", "ABBA"); runs.
// value is not a blank string, so the first condition of the else if statement fails.
// prop is equal to "artist", not "tracks", so the second condition of the else if statement fails.
// in the ‘else’ clause, artist: "ABBA" is added to the 5439 id.

//  SOLUTION C

// function updateRecords(records, id, prop, value) {
//   // Access target album in record collection
//   const album = records[id];
//   // Update the album
//   if (value === "") {
//     delete album[prop];
//   } else if (prop !== "tracks") {
//     album[prop] = value;
//   } else {
//     album["tracks"] = album["tracks"] || [];
//     album["tracks"].push(value);
//   }
//   // Return the full collection
//   return records;
// }

// Code Explanation
// This solution uses the fact that objects are passed into functions as references to slightly simplify the solution syntax.

// ----------------Iterate with JavaScript While Loops  while(){}
// You can run the same code multiple times by using a loop.

// The first type of loop we will learn is called a while loop because it runs while a specified condition is true and stops once that condition is no longer true.

// const ourArray = [];
// let i = 0;

// while (i < 5) {
//   ourArray.push(i);
//   i++;
// }
// In the code example above, the while loop will execute 5 times and append the numbers 0 through 4 to ourArray.

const myArrayK = [];
let i = 5;
while (i <= 5 && i >= 0) {
  myArrayK.push(i);
  i--;
}
console.log(myArrayK);

// ------------Iterate with JavaScript For Loops
// You can run the same code multiple times by using a loop.
// The most common type of JavaScript loop is called a for loop because it runs for a specific number of times.
// For loops are declared with three optional expressions separated by semicolons
// for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.
// The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.
// The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When the condition is false at the start of the iteration, the loop will stop executing. This means if the condition starts as false, your loop will never execute.
// The final expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.
// In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. We'll increment i by 1 in each loop iteration with i++ as our final expression.
//
//  const ourArray = [];

// for (let i = 0; i < 5; i++) {
//   ourArray.push(i);
// }
// ourArray will now have the value [0, 1, 2, 3, 4].

let myArrayM = [];
for (let j = 1; j <= 5; j++) {
  myArrayM.push(j);
}
console.log(myArrayM);

//--------------Iterate Odd Numbers With a For Loop
// For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.

// We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2.

// const ourArray = [];

// for (let i = 0; i < 10; i += 2) {
//   ourArray.push(i);
// }
// ourArray will now contain [0, 2, 4, 6, 8]. Let's change our initialization so we can count by odd numbers.
const myArrayN = [];
for (let k = 1; k <= 9; k += 2) {
  myArrayN.push(k);
}
console.log(myArrayN);

// ----------------Count Backwards With a For Loop
// A for loop can also count backwards, so long as we can define the right conditions.

// In order to decrement by two each iteration, we'll need to change our initialization, condition, and final expression.

// We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2.

// const ourArray = [];

// for (let i = 10; i > 0; i -= 2) {
//   ourArray.push(i);
// }
// ourArray will now contain [10, 8, 6, 4, 2]. Let's change our initialization and final expression so we can count backwards by twos to create an array of descending odd numbers.

const myArrayO = [];

for (let l = 9; l > 0; l -= 2) {
  myArrayO.push(l);
}
console.log(myArrayO);

// --------------Iterate Through an Array with a For Loop
// A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. This code will output each element of the array arr to the console:

// const arr = [10, 9, 8, 7, 6];

// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }
// Remember that arrays have zero-based indexing, which means the last index of the array is length - 1. Our condition for this loop is i < arr.length, which stops the loop when i is equal to length. In this case the last iteration is i === 4 i.e. when i becomes equal to arr.length - 1 and outputs 6 to the console. Then i increases to 5, and the loop terminates because i < arr.length is false.

const myArrA = [2, 3, 4, 5, 6];
let totalA = 0;
for (let i = 0; i < myArrA.length; i++) {
  totalA = totalA + myArrA[i];
}
console.log(totalA);

// -----------------------Nesting For Loops
// If you have a multi-dimensional array,
//  you can use the same logic as the prior waypoint
//  to loop through both the array and any sub-arrays.
//  Here is an example:

function multiplyAll(arr) {
  let productAB = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      productAB = productAB * arr[i][j];
    }
  }

  // Only change code above this line
  console.log(productAB);
  return productAB;
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

//  -------------------Iterate with JavaScript Do...While Loops
// The next type of loop you will learn is called a do...while loop. It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.

// const ourArray = [];
// let i = 0;

// do {
//   ourArray.push(i);
//   i++;
// } while (i < 5);
// The example above behaves similar to other types of loops, and the resulting array will look like [0, 1, 2, 3, 4]. However, what makes the do...while different from other loops is how it behaves when the condition fails on the first check. Let's see this in action. Here is a regular while loop that will run the code in the loop as long as i < 5:

// const ourArray = [];
// let i = 5;

// while (i < 5) {
//   ourArray.push(i);
//   i++;
// }
// In this example, we initialize the value of ourArray to an empty array and the value of i to 5. When we execute the while loop, the condition evaluates to false because i is not less than 5, so we do not execute the code inside the loop. The result is that ourArray will end up with no values added to it, and it will still look like [] when all of the code in the example above has completed running. Now, take a look at a do...while loop:

// const ourArray = [];
// let i = 5;

// do {
//   ourArray.push(i);
//   i++;
// } while (i < 5);
// In this case, we initialize the value of i to 5, just like we did with the while loop. When we get to the next line, there is no condition to evaluate, so we go to the code inside the curly braces and execute it. We will add a single element to the array and then increment i before we get to the condition check. When we finally evaluate the condition i < 5 on the last line, we see that i is now 6, which fails the conditional check, so we exit the loop and are done. At the end of the above example, the value of ourArray is [5]. Essentially, a do...while loop ensures that the code inside the loop will run at least once. Let's try getting a do...while loop to work by pushing values to an array.

// Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.

// Setup
const myArrayP = [];
let m = 10;

// Only change code below this line
while (m < 5) {
  myArrayP.push(m);
  m++;
}

do {
  myArrayP.push(m);
  m++;
} while (m < 13);

console.log(myArrayP);

// ------------------------Replace Loops using Recursion
// Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:

// function multiply(arr, n) {
//   let product = 1;
//   for (let i = 0; i < n; i++) {
//     product *= arr[i];
//   }
//   return product;
// }
// However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.

// function multiply(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return multiply(arr, n - 1) * arr[n - 1];
//   }
// }
// The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. That function call is evaluated in the same way, calling multiply again until n <= 0. At this point, all the functions can return and the original multiply returns the answer.

// Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.

// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sumM(arrMM, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sumM(arrMM, n - 1) + arrMM[n - 1];
  }
}

//  you simply have to make sure that the value of "n" is not greater than the length of the array "arrMM". You can do this by modifying the line "let sumMMM = sumM(arrayZ, 5);" so that the second argument is the length of the array "arrayZ", as follows:
// let sumMMM = sumM(arrayZ, arrayZ.length);

let arrayZ = [1, 3, 2, 6, 8];
let sumMMM = sumM(arrayZ, 3);
console.log(sumMMM);

// -----------------Profile Lookup
// We have an array of objects representing different people in our contacts lists.

// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

// If both are true, then return the "value" of that property.

// If name does not correspond to any contacts then return the string No such contact.

// If prop does not correspond to any valid properties of a contact found to match name then return the string No such property

// Setup
const contactsSS = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contactsSS.length; i++) {
    if (contactsSS[i].firstName === name) {
      if (contactsSS[i].hasOwnProperty(prop)) {
        return contactsSS[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";

  // Only change code above this line
}

lookUpProfile("Akira", "likes");

// Code Explanation
// The for loop runs, starting at the first object in the contacts list.
// If the firstName parameter passed into the function matches the value of the "firstName" key in the first object, the if statement passes.
// Then, we use .hasOwnProperty() method (checks if there’s a given property and returns a boolean) with prop as an argument. If it’s true, the value of prop is returned.
// If the second if statement fails, No such property is returned.
// If the first if statement fails, the for loop continues on to the next object in the contacts list.
// If the firstName parameter isn’t matched by the final contacts object, the for loop exits and No such contact is returned.
// Example Run

// lookUpProfile("Akira","likes"); runs.
// "Akira" is matched to the "firstName" key in the first object, so the if statement returns true.
// "likes" is found within the first object, so the second if statement returns true.
// The value of "likes" is returned - "Pizza", "Coding", "Brownie Points".

// Solution 2 (Click to Show/Hide)
// function lookUpProfile(name, prop) {
//   for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === name) {
//       if (prop in contacts[i]) {
//         return contacts[i][prop];
//       } else {
//         return "No such property";
//       }
//     }
//   }
//   return "No such contact";
// }
// Code Explanation
// This works as the last example but uses the in operator to look for prop instead of the hasOwnProperty() method.

// ----------------Generate Random Fractions with JavaScript

// Random numbers are useful for creating random behavior.

// JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.

// Note: Like Storing Values with the Assignment Operator, all function calls will be resolved before the return executes, so we can return the value of the Math.random() function.

// Change randomFraction to return a random number instead of returning 0.

function randomFraction() {
  // Only change code below this line

  return Math.random();

  // Only change code above this line
}

// ------------Generate Random Whole Numbers with JavaScript  Math.floor(Math.random() * n);
// You can generate random decimal numbers with Math.random(), but sometimes you need to generate random whole numbers. The following process will give you a random whole number less than 20:

// Use Math.random() to generate a random decimal number.
// Multiply that random decimal number by 20.
// Use Math.floor() to round this number down to its nearest whole number.
// Remember that Math.random() can never quite return a 1, so it's impossible to actually get 20 since you are rounding down with Math.floor(). This process will give you a random whole number in the range from 0 to 19.

// Putting everything together, this is what your code looks like:

// Math.floor(Math.random() * 20);
// You are calling Math.random(), multiplying the result by 20, then passing the value to Math.floor() to round the value down to the nearest whole number.

// Use this technique to generate and return a random whole number in the range from 0 to 9.

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

// ---------------Generate Random Whole Numbers within a Range: Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
// You can generate a random whole number in the range from zero to a given number. You can also pick a different lower number for this range.

// You'll call your minimum number min and your maximum number max.

// This formula gives a random whole number in the range from min to max. Take a moment to read it and try to understand what this code is doing:

// Math.floor(Math.random() * (max - min + 1)) + min
// Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin and less than or equal to myMax.

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(randomRange(23, 37));

// ----------Use the parseInt Function
// The parseInt() function parses a string and returns an integer. Here's an example:

// const a = parseInt("007");
// The above function converts the string 007 to the integer 7. If the first character in the string can't be converted into a number, then it returns NaN.

// Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.

function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");
convertToInteger("57");
convertToInteger("77");
convertToInteger("JamesBond");

console.log(convertToInteger("56"));

// --------------Use the parseInt Function with a Radix
// The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

// The function call looks like:

// parseInt(string, radix);
// And here's an example:

// const a = parseInt("11", 2);
// The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.

// Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.

// Radix: In a positional numeral system, the radix or base is the number of unique digits, including the digit zero, used to represent numbers. For example, for the decimal system (the most common system in use today) the radix is ten, because it uses the ten digits from 0 through 9.
// Binary Radix: 2

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");
convertToInteger("111001");
convertToInteger("JamesBond");

// --------------Use the Conditional (Ternary) Operator
// The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

// The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.

// The following function uses an if/else statement to check a condition:

// function findGreater(a, b) {
//   if(a > b) {
//     return "a is greater";
//   }
//   else {
//     return "b is greater or equal";
//   }
// }
// This can be re-written using the conditional operator:

// function findGreater(a, b) {
//   return a > b ? "a is greater" : "b is greater or equal";
// }
// Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either the string Equal or the string Not Equal.

function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

// -------------------Use Multiple Conditional (Ternary) Operators
// In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.

// The following function uses if, else if, and else statements to check multiple conditions:

// function findGreaterOrEqual(a, b) {
//   if (a === b) {
//     return "a and b are equal";
//   }
//   else if (a > b) {
//     return "a is greater";
//   }
//   else {
//     return "b is greater";
//   }
// }
// The above function can be re-written using multiple conditional operators:

// function findGreaterOrEqual(a, b) {
//   return (a === b) ? "a and b are equal"
//     : (a > b) ? "a is greater"
//     : "b is greater";
// }
// It is considered best practice to format multiple conditional operators such that each condition is on a separate line, as shown above. Using multiple conditional operators without proper indentation may make your code hard to read. For example:

// function findGreaterOrEqual(a, b) {
//   return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
// }
// In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero.

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

checkSign(10);

console.log(checkSign(10));

// -------------------------Use Recursion to Create a Countdown
// In a previous challenge, you learned how to use recursion to replace a for loop. Now, let's look at a more complex function that returns an array of consecutive integers starting with 1 through the number passed to the function.

// As mentioned in the previous challenge, there will be a base case. The base case tells the recursive function when it no longer needs to call itself. It is a simple case where the return value is already known. There will also be a recursive call which executes the original function with different arguments. If the function is written correctly, eventually the base case will be reached.

// For example, say you want to write a recursive function that returns an array containing the numbers 1 through n. This function will need to accept an argument, n, representing the final number. Then it will need to call itself with progressively smaller values of n until it reaches 1. You could write the function as follows:

// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(5));
// The value [1, 2, 3, 4, 5] will be displayed in the console.

// At first, this seems counterintuitive since the value of n decreases, but the values in the final array are increasing. This happens because the push happens last, after the recursive call has returned. At the point where n is pushed into the array, countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1].

// We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.

// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-use-recursion-to-create-a-countdown/305925

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}
