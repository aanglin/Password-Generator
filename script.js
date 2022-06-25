// Assignment Code
var generateBtn = document.querySelector("#generate");

let big = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let small = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let characters = ['~', '!', '@', '#', '$', '%',  '&', '*', '=', '?']
let digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

var yes = []; 
function generatePassword(){
  // Your CODE goes 
  
  // PsuedoCode
  // prompt = length
    // let pwdLength = prompt("how many characters")
    // console.log(pwdLength)
    let pwdLength = prompt("how many characters between 8 and 128")
if(pwdLength <8 && pwdLength > 128){
  alert ("Please insert number between 8 and 128")
  prompt("how many characters between 8 and 128")
}else {
    return pwdLength
  }
// }else (){
//   alert ("Please insert number between 8 and 128")
//   prompt("how many characters between 8 and 128")
}

     console.log(pwdLength)
  // confirm - lowercase, uppercase, numeric, special characters
    // let numbers  =  confirm("DO you want numbers");
      // console.log(numbers);

let numbers  =  confirm("DO you want numbers");
if (numbers) {
  userSelection = digits.push(yes)
}
      console.log(numbers)

let lowerCase = confirm("Do you want lowercase")
if (lowerCase) {
  userSelection = small.push(yes)
}  
console.log(lowerCase)

     let uppercase = confirm("Do you want uppercase")
     if (uppercase) {
       userSelection = big.push(yes)
     }
     console.log(uppercase)

     let special = confirm("Do you want special characters")
     if (special) {
       userSelection = characters.push(yes)
     }
  // create var to hold anser to prompt/confirm 
  var final = {
    yesNumbers: numbers,
    yesUppercase: uppercase ,
    yesLowercase: lowerCase,
    yesSpecial: special,
    yesAmount: pwdLength
}
console.log(final)
var allDigits = big.concat(small, characters, digits);
console.log(allDigits)

var yes = 
 allDigits[Math.floor(Math.random()*allDigits.length)];


// return console.log("test ",final);





  // function to validate user answrs
  // if and equalaity operators 
   // if(numbers){

  //  } 

  // List of numbers, special chars, uppercase and lowercase
    // array
    // combine all arrays in 1 array
  

    // Randomly choose characters
    // create a string set equal to password var
    // array method to check if something is in array
  // generate random password
  // return password

  // return password;



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
