/**
 * primitive - string, boolean, number
 * reference - objects and symbols(+,-), arrays
 * values - null(oject type), undefined, NaN
 */

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
