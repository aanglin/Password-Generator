var generateBtn = document.querySelector("#generate");

 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

    passwordText.value = password;

 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){

// List of numbers, special chars, uppercase and lowercase
      // array
      let big = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
      let small = ["abcdefghijklmnopqrstuvwxyz"]
      let characters = ["~!@#$%&"]
      let digits = ["0123456789"]
    
      let pass = []
      let yes = []
      // combine all arrays in 1 array
      let allDigits = big.concat(small, characters, digits);
      console.log(allDigits);

    // Your CODE goes 
    
    // PsuedoCode
    // prompt = length
      // let pwdLength = prompt("how many characters")
      // console.log(pwdLength)
      let pwdLength = prompt("how many characters between 8 and 128")
      if(pwdLength <8 && pwdLength > 128){
        alert ("Please insert number between 8 and 128")
        prompt("how many characters between 8 and 128")
       } else if (pwdLength >= 8) {
         userSelection =pwdLength;
       }

    // confirm - lowercase, uppercase, numeric, special characters
      // let numbers  =  confirm("DO you want numbers");
        // console.log(numbers);
        let numbers  =  confirm("DO you want numbers");
        let lowerCase = confirm("Do you want lowercase")
        let uppercase = confirm("Do you want uppercase")
        let special = confirm("Do you want special characters")
        console.log(numbers)
        console.log(lowerCase)
        console.log(uppercase)
        console.log(special)

    // create var to hold anser to prompt/confirm 
    var final = {
      yesNumbers: numbers,
      yesUppercase: uppercase ,
      yesLowercase: lowerCase,
      yesSpecial: special,
      yesAmount: pwdLength
  };
  console.log(final)

// function to validate user answrs
function is_boolean(value){
  return value === true || value === false || toString.call (value) === "[object Boolean]";
}
console.log(is_boolean(true));
console.log(is_boolean("bar"));
    // if and equalaity operators 
     // if(numbers){}
     if (numbers = "true") {
      userSelection = digits.push(yes)
    }
          console.log(numbers)

     if (lowerCase = "true") {
  userSelection = small.push(yes)
}  
console.log(lowerCase)

if (uppercase = "true") {
  userSelection = big.push(yes)
}
console.log(uppercase)

if (special = "true") {
  userSelection = characters.push(yes)
 } 
 console.log(special)

 
    
      // Randomly choose characters
      for (let i = 0; i < allDigits.length; i++){
        var randomItem = allDigits[Math.floor(Math.random()*allDigits.length + 1)]; 
         pass += allDigits[randomItem, randomItem +1]
      }
      console.log(randomItem)
      
      // create a string set equal to password var
       
      // array method to check if something is in array
    // generate random password

   
    // return password
  
    return password;
  }
  