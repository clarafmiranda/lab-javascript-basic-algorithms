// Iteration 1: Names and Input
////////////////////////////////////////////////////////////////////////////////

// 1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "Phillip";

// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}.`);

// 1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "Clara";

// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals
////////////////////////////////////////////////////////////////////////////////

/* 2.1. Depending on which name [is longer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), print:
    - `The Driver has the longest name, it has XX characters` or
    - `Yo, navigator got the longest name, it has XX characters` or
    - `Wow, you both got equally long names, XX characters!`
*/

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
  }


// Iteration 3: Loops
////////////////////////////////////////////////////////////////////////////////

// 3.1 Print all the characters of the driver's name, separated by a space and [in capitals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

    // 1. Create an empty new string that will be filled in with the new string.
    // 2. Create a for loop from 0 (beginning of the index) to the last character in the string. This loop will run the variable and get every charecter position by position of the index.
    // 3. Now reasign the variable just created. The new variable will be the element that is in the position i in the index transformed into uppercase and a space added afterwards.
    // 4. Use .trim() to delete the space that is left at the end of the string. from 'S T R I N G ' to 'S T R I N G'.

    /*1*/   let nameWithSpaces = "";
    /*2*/   for (let i = 0; i < hacker1.length; i++){
    /*3*/       nameWithSpaces += hacker1[i].toUpperCase() + " ";
            }
    /*4*/   console.log(nameWithSpaces.trim());


// 3.2 Print all the characters of the navigator's name, in reverse order.
let reverseName = "";
for (let a = hacker2.length-1; a >= 0; a--) {
  reverserName += hacker2[a];
}
console.log(reverseName);


/* 3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print:
    - `The driver's name goes first.`
    - `Yo, the navigator goes first definitely.`
    - `What?! You both got the same name?`
*/

/* 
localeCompare() compares two strings and returns a number indicating whether the reference string with the other given string and will return a numer:
    - If it comes before it will return a negative number (-1)
    - If both string occur equally it will return 0
    - If it comes after it will return a positive number (+1)
*/
if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first");
} else if (hacker1.localeCompare(hacker2) === 1){
    console.log('Yo, the navigator goes first definitely.');
} else {
    console.log('What?! You both got the same name?');
}
// the answer in this example will be +1.



// Bonus 1
////////////////////////////////////////////////////////////////////////////////

/*
Go to [lorem ipsum generator](http://www.lipsum.com/) and:
    - Generate 3 paragraphs. Store the text in a variable type of string.
    - Make your program count the number of words in the string.
    - Make your program count the number of times the Latin word "et" appears.
*/
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere quam sed ornare mattis. Pellentesque maximus eros semper aliquet rhoncus. Ut ac molestie enim. Suspendisse dictum, mi non mattis aliquet, urna ipsum auctor metus, vehicula finibus quam turpis sit amet lacus. Vivamus lacinia tortor odio, at scelerisque sapien scelerisque at. Nunc id elit a eros elementum commodo porttitor ut enim. Praesent at ultrices orci. Integer sagittis odio at libero interdum, sit amet pellentesque turpis scelerisque.
Suspendisse vitae ante quis nunc ullamcorper faucibus. Quisque sed purus sollicitudin arcu congue aliquam. Pellentesque sollicitudin sapien non nibh vehicula, ac faucibus orci lacinia. Mauris risus arcu, efficitur ut lacus eget, accumsan facilisis ligula. Vivamus nec porttitor lorem. Integer semper nisi non elit commodo, non sollicitudin dolor volutpat. Vivamus mollis ex eu facilisis feugiat. Nulla facilisi. Nam sapien ipsum, ultrices id sodales ac, porta ac lectus. Nulla et nulla iaculis, efficitur diam ac, eleifend libero.
Mauris mattis ligula euismod, rutrum ipsum eget, mattis nulla. Praesent nec augue eget libero eleifend mattis. Suspendisse faucibus arcu ut ligula tempor volutpat. Pellentesque nec molestie turpis. Donec mollis ex in magna ultrices, et placerat mi auctor. Praesent eu arcu vel ipsum pharetra euismod. Donec augue est, blandit sed pharetra sed, laoreet nec augue. Sed ultricies, ante in tempor ultrices, neque felis convallis erat, eget convallis orci elit in sem. Nulla blandit augue eros, quis egestas elit commodo interdum. Donec imperdiet imperdiet lectus, ac scelerisque odio semper eget. Donec vulputate tellus nec tincidunt pharetra. Aliquam accumsan tincidunt mi, in tristique velit egestas id. Nullam in magna urna. Maecenas tincidunt quam non lorem rhoncus vulputate.`;

let wordCount = 1;
for (let i = 0; i < lorem.length - 1; i++) {
    if (lorem[i] === ' ') {
        wordCount++;
    }
}
console.log(wordCount);

let loremString = lorem.split('.').join('');
let loremArray = loremString.split(" ");
let etCounter = 0;

for (let k=0; k < loremArray.length; k++){

  if(loremArray[k] == "et"){
    etCounter += 1;
  }
}
console.log(etCounter);


// Bonus 2
////////////////////////////////////////////////////////////////////////////////

// Ask the user for a new string and check if it's a *palindrome*.
// "taco cat"

function isPalindrome(str) {
    
    var re = /[^A-Za-z0-9]/g; // this removes the whitespaces
    str = str.toLowerCase().replace(re, '');
    
    var stringLength = str.length;
    for (var i = 0; i < stringLength / 2; i++) {
      if (str[i] !== str[stringLength - 1 - i]) {
          console.log("Not a palindrome");
          return false;
      }
    }
    console.log("It is a palindrome!");
    return true;
   }