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
var myName
//asig the value 7 to the variable a
var a;
a=7;
var b;
b=7;
b=a;
//asign a value at the first
var c = 9
//create a string values and asign a value
var myFirstName = "Maria";
var myLastName = "Rios Navarro";

var d = 5;
var e = 10;
var f ="I am a";

d= d + 1;
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
const myDecimal= 5.7;

//Multiply Two Decimals with JavaScript
const productDecimal = 2.0 * 2.5;

//Divide One Decimal by Another with JavaScript
const quotientDecimal = 4.4 / 2.0;

//Finding a Remainder in JavaScript % (Note: The remainder operator is sometimes incorrectly referred to as the modulus operator. It is very similar to modulus, but does not work properly with negative numbers.)
const remainder = 11%3

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
const myStrB = "I am a \"double quoted\" string inside \"double quotes\".";

// Quoting Strings with Single Quotes. String values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote
// Sometimes we have an ' in the middle of the sentence and if we do not mark it before with \ it will give us an error

const myStrC = '<a href="http://www.example.com" target="_blank">Link</a>';

// Escape Sequences in Strings
// Assign the following three lines of text into the single variable myStr using escape sequences.

/* FirstLine
    \SecondLine
ThirdLine

You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.*/

const myStrD = "FirstLine\n\t\\SecondLine\nThirdLine"

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

const myStrE = "This is the start. " + "This is the end."

// ----Concatenating Strings with the Plus Equals Operator. Note: Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself

let myStrF;
myStrF = "This is the first sentence. ";
myStrF+= "This is the second sentence.";

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
firstLetterOfLastNameB = lastNameB[0]


// ----Understand String Immutability. We can asign a new value but not change the value.
// also we can not do let myStr = "Bob"; myStr[0] = "J"; only we can asign a new value:let myStr = "Bob"; myStr = "Job";

let myStrI = "Jello World";
myStrI = "Hello World";

// ----Use Bracket Notation to Find the Nth Character in a String

const lastNameC = "Navarro";
const thirdLetterOfLastName = lastNameC[2];

// ----Use Bracket Notation to Find the Last Character in a String with .length-1
const lastNameD = "Ripolles";
const lastLetterOfLastName = lastNameD[lastNameD.length-1];
console.log(lastLetterOfLastName);
const lastNameE= "Velasco";
console.log(lastNameE[lastNameE.length-1]);

//---- Use Bracket Notation to Find the Nth-to-Last Character in a String. Works like above

const secondToLastLetterOfLastName = lastNameE [lastNameE.length-2];
console.log(secondToLastLetterOfLastName);


// ----Word Blanks exercise. You will need to use the string concatenation operator + to build a new string, using the provided variables:
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "Your "+ myAdjective + " "+ myNoun + " "+ myVerb + " "+ myAdverb; 
console.log(wordBlanks);

//---- You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry
const myArrayA = ["hello", 2];

// ----multi-dimensional array: Nest one Array within Another Array
const myArrayB =  [["so", "sa"], ["la", "lo"]];

// ----Access Array Data with Indexes: Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing,
const myArrayC = [50, 60, 70];
const myDataA = myArrayC[0];
console.log(myDataA);

// ----Modify Array Data With Indexes. Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.There shouldn't be any spaces between the array name and the square brackets
const myArrayD = [18, 64, 99];
myArrayD[0]=45;
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

const myArrayG= [];
myArrayG.push(myDataB,myDataC);
console.log(myArrayG);

//another example

const myArrayF = [["John", 23], ["cat", 2]];
myArrayF.push(["dog",3]);
console.log(myArrayF);

//---- .pop() --removes the last element from an array and returns that element.

const myArrayH = [["John", 23], ["cat", 2]];
const removedFromMyArrayA= myArrayH.pop();
console.log(removedFromMyArrayA);

//---- .shift() --removes the first element instead of the last
const myArrayI = [["John", 23], ["dog", 3]];
const removedFromMyArrayB= myArrayI.shift();
console.log(removedFromMyArrayB);

//---- .unshift() --adds the element at the beginning of the array.
const myArrayJ = [["John", 23], ["dog", 3]];
myArrayJ.shift();
myArrayJ.unshift(["Paul", 35]);
console.log(myArrayJ);

//Exercise: Shopping List
const myListA = [];
myListA.push(["Chocolate Bar", 15], ["apple", 1], ["banana", 2], ["salad", 3], ["juice", 4]);
console.log(myListA)

// ----Write Reusable JavaScript with Functions

function reusableFunction() {
    console.log("Hola World");
  }
  reusableFunction() ;

// ----  Passing Values to Functions with Arguments. Parameters are variables that act as placeholders. The actual values that are input (or "passed") into a function when it is called are known as arguments. you could call testFun again with different arguments and the parameters would take on the value of the new arguments.

function functionWithArgs (numberA, numberB){
    console.log(numberA+numberB);
  }
  functionWithArgs (-3, 10);

// ----Return a Value from a Function with Return .You can use a return statement to send a value back out of a function.
function timesFive(numberC){
    return numberC*5;
  }
  console.log(timesFive(300));

//  ---- Global Scope and Functions
//   In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code. You should always declare your variables with let or const.Exercise:

// Declare the myGlobal variable below this line
let myGlobal= 10;

function fun1() {
  // Assign 5 to oopsGlobal here
oopsGlobal=5;
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
    const myVar="hola";
    console.log('inside myLocalScope', myVar);
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
    const outerWear= "sweater";
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
function addFive(){
  sum2= sum2+5;
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
  const newArrA= arr.push(item);
  const removedItem= arr.shift();
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
  if(wasThatTrue){
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
  if (val==12) { // Change this line
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
  if (val === 7) { // Change this line
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
  if (a === b) { // Change this line to do strictly equality operator
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
console.log(compareEquality(10, "10"))

//and terminal say Not Equal

function compareEqualityB(c, d) {
  if (c == d) { // Change this line to do equality operator
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
  if (val!=99) { // Change this line
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
  if (val !== 17) { // Change this line
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
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10 ) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
console.log (testGreaterThan(10));

// -------Comparison with the Greater Than Or Equal To Operator  >=
// The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.

// Like the equality operator, the greater than or equal to operator will convert data types while comparing.
// 6   >=  6  // true
// 7   >= '3' // true
// 2   >=  3  // false
// '7' >=  9  // false

function testGreaterOrEqual(val) {
  if (val >=20) {  // Change this line
    return "20 or Over";
  }

  if (val>=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
console.log(testGreaterOrEqual(10));

// ---------Comparison with the Less Than Operator   <
// The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, the less than operator converts data types while comparing.

function testLessThan(val) {
  if (val<25) {  // Change this line
    return "Under 25";
  }

  if (val<55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
console.log(testLessThan(10));

// -----Comparison with the Less Than Or Equal To Operator <=
// The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, the less than or equal to operator converts data types.

function testLessOrEqual(val) {
  if (val <=12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <=24) {  // Change this line
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

  if (val <=50 && val>=25) {

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

  if (val>20 || (val<10)) {
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
  } else  if (val < 10) {
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
  if(num < 5){
    return "Tiny";
    }else if(num<10){
      return "Small";
      }else if(num<15){
        return "Medium";
        }else if(num<20){
          return "Large";
          }else if(num>=20){
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


const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

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
  switch(val){
    case 1:
      answer="alpha";
      console.log(answer);
      break;
    case 2:
      answer="beta";
      console.log(answer);
      break;
    case 3:
      answer="gamma";
      console.log(answer);
      break;
    case 4:
      answer="delta";
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

  switch(val){
    case "a" :
     answer="apple";
     console.log(answer);
     break;
    case "b" :
     answer="bird";
     console.log(answer);
     break;
    case "c" :
     answer="cat";
     console.log(answer);
     break;
    default:
     answer="stuff"
     console.log (answer);
    break;
  }
  // Only change code above this line
  return answer;
}

switchOfStuff(1);  // console say stuff
switchOfStuff("c"); // console say cat
switchOfStuff(a); //console say stuff, becouse case values are tested with strict equality (===), also a ist no the same to "a"


