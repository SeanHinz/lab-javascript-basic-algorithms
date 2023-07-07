// Iteration 1: Names and Input

const hacker1 = 'Sean'
const hacker2 = 'Joseph'

console.log(`The drivers name is ${hacker1}.`)
console.log(`The navigators name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log (`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}
// Iteration 3: Loops
let driver = ""
for (let i = 0; i < hacker1.length; i++) {driver += hacker1[i].toUpperCase();
                                          if (i < hacker1.length - 1) {
                                            driver += " "
                                          }
  
}

console.log(driver)
let navigator = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigator += hacker2[i]
}

console.log(navigator)



// bonus 1

const phrase = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


let words = 0
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === " ") {
      words += 1;
      continue;
  } else if (i === phrase.length - 1) {
  words += 1; }
}

console.log(`There are ${words} words in variable phrase.`);

let et = 0
  for (let i = 0; i < phrase.length; i++) { if (phrase[i]+phrase[i+1]+phrase[i+2]+phrase[i+3] === " et ") {
      et += 1;
      continue;
  } 
}

console.log(`Phrase has the word 'et' in it ${et} times`);

// bonus 2



// need a function that creates a new string after removing spaces and special characters then counts length. if length is odd remove center character then compare first half of string against second half in reverse order

const palindrome = (param) => {
  let lettersInPhrase = ""
  for (let i = 0; i < param.length; i++) {
    if (param[i] === " " || param[i] === "," || param[i] === "." || param[i] === "," || param[i] === "?" || param[i] === "!") {
      continue;
    } else {
      lettersInPhrase += param[i];
    }
  }
  
  lettersInPhrase = lettersInPhrase.toLowerCase()
if (lettersInPhrase.lenght % 2) {
  lettersInPhrase = lettersInPhrase
} else { let a = (lettersInPhrase.length-1)/2
lettersInPhrase = lettersInPhrase.replace(lettersInPhrase[a], "")
}
  let reverse = ""
for (let i = lettersInPhrase.length - 1; i >= lettersInPhrase.length/2; i--) {
  reverse += lettersInPhrase[i];
}
 let firstHalf = ""
 for (let i = 0; i <= lettersInPhrase.length/2 -1; i++) {
  firstHalf += lettersInPhrase[i];
}
if (reverse === firstHalf) {
  return `Yes '${param}' is a Palindrome!`
} else {
  return `No '${param}' is not a Palindrome.`
}

}

let phraseToCheck = "A man, a plan, a canal, Panama!"

console.log(palindrome(phraseToCheck))




// additional challenge 1 slack

const word1 = "Pudding"
const word2 =  "Apricot"

for (let i = 0; i < word2.length; i++) {
  if (word1[i] === word2[i]) {
    console.log(`Both words share a ${word1[i]}.`)
    break;
  } else if (i === word2.length - 1) {
    console.log('These words share no letters.')
  } else {
    continue
  }
}

// additional challenge 2 slack

for (let i = 0; i < hacker1.length; i++) {
  if (hacker1[0].toLowerCase() === hacker1[i]) {
    console.log(`This name has another ${hacker1[0]} in it`)
    break;
  } else if (i === hacker1.length - 1) {
    console.log(`There is no other ${hacker1[0]} in this name.`)
  } else {
    continue
  }
}

for (let i = 0; i < hacker2.length; i++) {
  if (hacker2[0].toLowerCase() === hacker2[i]) {
    console.log(`This name has another ${hacker2[0]} in it`)
    break;
  } else if (i === hacker2.length - 1) {
    console.log(`There is no other ${hacker2[0]} in this name.`)
  } else {
    continue
  }
}


// bonus slack

for (let i = 0; i < hacker1.length; i++) {
  for (let j = 0; j < hacker1.length; j++) {
  if (i === j) {
    continue
  } else if(hacker1[j].toLowerCase() === hacker1[i].toLowerCase()) {
    console.log(`This name has multiple ${hacker1[j]} in it`)
    break;
  } else {
    continue
  }
} 
} 

// i think what i need is to add any repeating letters to a variable and then somehow remove letter so there are only 1 of each type.
// then create a simple if statement saying what letters(variable) are repeated else there are no repeated letters
          