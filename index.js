/**
 * primitive - string, boolean, number
 * reference - objects and symbols(+,-), arrays
 * values - null(oject type), undefined, NaN
 */

// String Methods

let str1 = 'Hello'
let str2 = ' World'
//returns the concatnated string
//output : Hello World
//`${str1} ${str2}`
console.log(str1.concat(str2))


//check whether the given string ends with the characters of the specified string or not.
//output : true
console.log(str2.endsWith("d"))


//Check if a string includes given substring
//output : true
console.log(str1.includes("ll"))


//returns index of the given substring
//output : 2
console.log(str2.indexOf("o"))

//returns the index of last occurrence of given substring
//output : 3
console.log(str1.lastIndexOf("l"))

//Make a new string by copying a string twice:
//output : HelloHelloHello
console.log(str1.repeat(3))

//replaces the given string with another substring
//output : Hi
console.log(str1.replace('Hello','Hi'))
console.log(str1.replace(/l/g,'Hi'))
console.log(str1.replace(/H/i,'Hi'))
console.log(str1.replace(/l/g,'Hi').replace('Hi','Swing'))

//searches for given string 
//output : 4
console.log(str1.search('o'))	

//Extract parts of a string
//output : Hello
let str = 'Hellolo  World '
console.log(str.slice(0,5))
console.log(str.slice(-3,-1))

//splits the string using given dividers
//output : ["Hello", "", "World", ""]
console.log(str.split(" "))
console.log(str.split('l'))

//checks if the string starts with the given substring
//output : false
console.log(str.startsWith("W"))


//returns substring of given index
//output : ello Wo
console.log(str.substr(1,7))

//returns substring excluding given upper index
//output : ello W
console.log(str.substring(1,7))

//converts the entire string to lowercase
//output : hello world
console.log(str.toLowerCase())

//converts the entire string to uppercase
//output : HELLO WORLD
console.log(str.toUpperCase())

//trims any extra spaces in the string 
//output : Hello World
let str3 = '      Hello     World     '
console.log(str3.trim())

//------------------------------------------------------------------

//Number Methods



let num = 2354.7364
//Convert a number into a string, keeping only three decimals
//output : 2354.736
console.log(num.toFixed(3))
//output : 2355
console.log(num.toFixed())
//output : 2354.7364000000
console.log(num.toFixed(10))

//Convert a number into an exponential notation
//output : 2.3547364e+3
console.log(num.toExponential(3))

//Convert a number to a substring
//output : 2354.7364 (base 10)
console.log(num.toString())
//output : 100100110010.101111001000010010110101110111001100011 (base 2)
console.log(num.toString(2))
//output : 4462.5710226567143 (base octal)
console.log(num.toString(8))
//output : 932.bc84b5dcc6 (base hexadecimal)
console.log(num.toString(16))

//------------------------------------------------------------------

//Global Methods:

//info, warn.error, log, table

//Console -> info
//output : Hello world!
console.info("Hello world!");

//Console -> warn.error
//output : This is a warning!
console.warn("This is a warning!");

//Console -> error
//Output : You made a mistake
console.error("You made a mistake");

//Console -> log
//Output : Hello world!
console.log("Hello world!");

//Console -> table
//Output : 
console.table(["Audi", "Volvo", "Ford"]);

//Display an alert box
//alert("Hello! I am an alert box!!");

//Display a prompt box which ask the user for her/his name, and output a message
//let store_val = prompt("Please enter your name", "Mithra Ramkumar");
//console.log(store_val)

//Display a confirmation box
//Output : 
//confirm("Press a button!");

//Number 
//Convert different object values to their numbers
//output : 1
//999
//null
let x1 = true;
let x4 = "999";
let x5 = "78 78"
console.log(Number(x1))
console.log(Number(x4))
console.log(Number(x5))


//Check whether a value is NaN
//Output : false
//true
//true
//false
console.log(isNaN(123))
console.log(isNaN('Hello'))
console.log(isNaN('2005/12/12'))
console.log(isNaN(true)) 

//Parse different strings to Float
//Output : 10
//10.33
//34
//60
//40
console.log(parseFloat("10.00"))
console.log(parseFloat("10.33"))
console.log(parseFloat("34 45 66"))
console.log(parseFloat("   60   "))
console.log(parseFloat("40 years"))

//The parseInt() function parses a string and returns an integer.
//Output : null
//10
//8
//4096
//16
console.log(parseInt("10", 12345))
console.log(parseInt("010")) 
console.log(parseInt("10", 8)) 
console.log(parseInt("0x1000"))
console.log(parseInt("10", 16))


//convert different objects to strings
//Output : false
console.log(String(Boolean(0)))

//function to find out if an expression (or a variable) is true
//Output : false
console.log(Boolean(9 > 10))