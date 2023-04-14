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

// Concatenating Strings with Plus Operator. Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

const myStrE = "This is the start. " + "This is the end."

// Concatenating Strings with the Plus Equals Operator. Note: Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself

let myStrF;
myStrF = "This is the first sentence. ";
myStrF+= "This is the second sentence.";

// Constructing Strings with Variables
// Sometimes you will need to build a string. By using the concatenation operator (+), you can insert one or more variables into a string you're building.

const myNameA = "Maria";
const myStrG = "My Name is" + myNameA + " and I am well!";

//Appending Variables to Strings with +=

const someAdjective = "cool";
let myStrH = "Learning to code is ";
myStrH += someAdjective;

// Find the Length of a String
// You can find the length of a String value by writing .length after the string. . Note that the space character is also counted

let lastNameLength = 0;
const lastNameA = "Lovelace";

lastNameLength = lastNameA.length;

// Use Bracket Notation to Find the First Character in a String.Bracket notation is a way to get a character at a specific index within a string []. Zero-based indexing counting start at 0
// find the 1st letter od lastNameB

let firstLetterOfLastNameB = "";
const lastNameB = "Rios";
firstLetterOfLastNameB = lastNameB[0]


// Understand String Immutability. We can asign a new value but not change the value.
// also we can not do let myStr = "Bob"; myStr[0] = "J"; only we can asign a new value:let myStr = "Bob"; myStr = "Job";

let myStrI = "Jello World";
myStrI = "Hello World";

// Use Bracket Notation to Find the Nth Character in a String

const lastNameC = "Navarro";
const thirdLetterOfLastName = lastNameC[2];

// Use Bracket Notation to Find the Last Character in a String with .length-1
const lastNameD = "Ripolles";
const lastLetterOfLastName = lastNameD[lastNameD.length-1];
console.log(lastLetterOfLastName);
const lastNameE= "Velasco";
console.log(lastNameE[lastNameE.length-1]);

// Use Bracket Notation to Find the Nth-to-Last Character in a String. Works like above

const secondToLastLetterOfLastName = lastNameE [lastNameE.length-2];
console.log(secondToLastLetterOfLastName);


// Word Blanks exercise. You will need to use the string concatenation operator + to build a new string, using the provided variables:
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "Your "+ myAdjective + " "+ myNoun + " "+ myVerb + " "+ myAdverb; 
console.log(wordBlanks);

// You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry
const myArrayA = ["hello", 2];

// multi-dimensional array: Nest one Array within Another Array
const myArrayB =  [["so", "sa"], ["la", "lo"]];

// Access Array Data with Indexes: Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing,
const myArrayC = [50, 60, 70];
const myDataA = myArrayC[0];
console.log(myDataA);

// Modify Array Data With Indexes. Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.There shouldn't be any spaces between the array name and the square brackets
const myArrayD = [18, 64, 99];
myArrayD[0]=45;
console.log(myArrayD);

// Access Multi-Dimensional Arrays With Indexes
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


// Manipulate Arrays With push Method (add)
// An easy way to append data to the end of an array is via the push() function.

//one example with the const of before

const myArrayG= [];
myArrayG.push(myDataB,myDataC);
console.log(myArrayG);

//another example

const myArrayF = [["John", 23], ["cat", 2]];
myArrayF.push(["dog",3]);
console.log(myArrayF);

// .pop() removes the last element from an array and returns that element.

const myArrayH = [["John", 23], ["cat", 2]];
const removedFromMyArrayA= myArrayH.pop();
console.log(removedFromMyArrayA);

// .shift() removes the first element instead of the last
const myArrayI = [["John", 23], ["dog", 3]];
const removedFromMyArrayB= myArrayI.shift();
console.log(removedFromMyArrayB);

// .unshift() adds the element at the beginning of the array.
const myArrayJ = [["John", 23], ["dog", 3]];
myArrayJ.shift();
myArrayJ.unshift(["Paul", 35]);
console.log(myArrayJ);

//Exercise: Shopping List
const myListA = [];
myListA.push(["Chocolate Bar", 15], ["apple", 1], ["banana", 2], ["salad", 3], ["juice", 4]);
console.log(myListA)

// Write Reusable JavaScript with Functions

function reusableFunction() {
    console.log("Hola World");
  }
  reusableFunction() ;

//   Passing Values to Functions with Arguments. Parameters are variables that act as placeholders. The actual values that are input (or "passed") into a function when it is called are known as arguments. you could call testFun again with different arguments and the parameters would take on the value of the new arguments.

function functionWithArgs (numberA, numberB){
    console.log(numberA+numberB);
  }
  functionWithArgs (-3, 10);

// Return a Value from a Function with Return .You can use a return statement to send a value back out of a function.
function timesFive(numberC){
    return numberC*5;
  }
  console.log(timesFive(300));

//   Global Scope and Functions
//   In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code. You should always declare your variables with let or const.Exercise:

// ----Declare the myGlobal variable below this line
let myGlobal= 10;

function fun1() {
  //---- Assign 5 to oopsGlobal here
oopsGlobal=5;
}

// ----- Only change code above this line

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

// Local Scope and Functions
// Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

// the use of a variable that has been defined in a function, outside this function (e.g. in a console.log) will give an error. Exercise

function myLocalScope() {
    // ----Only change code below this line
    const myVar="hola";
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // ----Run and check the console
  // ----myVar is not defined outside of myLocalScope

  //console.log('outside myLocalScope', myVar); --->ERROR IN THE CONSOLE (i change it to comment)


// Global vs. Local Scope in Functions
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

// Understanding Undefined Value returned from a Function
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


// Assignment with a Returned Value
// everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}


processed = processArg(7);

