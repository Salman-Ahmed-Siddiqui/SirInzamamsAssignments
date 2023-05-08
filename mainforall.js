//  Assignment No.1

function calculateFactorial() {
    const numberInput = document.getElementById('numberInput').value;
    let factorial = 1;
    for (let i = 2; i <= numberInput; i++) {
      factorial *= i;
    }
    document.getElementById('factorialOutput').value = "Result is : " + factorial;
  }

  //  Assignment No.2

  function removeVowels() {
    let inputText = document.getElementById("input").value;
    let outputText = inputText.replace(/[aeiou]/gi, '');
    document.getElementById("output").textContent = "Final Text is : " + outputText;
  }



  //  Assignment No.3


  function findMaxnumber() {
    let inputTextUser = document.getElementById("inputMax").value;
    let inputMaxArray = inputTextUser.split(",").map(Number);
    let maxNumber = Math.max.apply(null,inputMaxArray);
    document.getElementById("outputMax").textContent = "The largest number is: " + maxNumber;
  }
 
//  Assignment No.4

  function capitalizeWords() {
    let UserInputCap = document.getElementById("inputCap").value;
    let wordsArray = UserInputCap.split(" ");
    let capitalizedWords = [];
  
    for (let i = 0; i < wordsArray.length; i++) {
      let word = wordsArray[i];
      capitalizedWords.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
  
    let outputTextCap = capitalizedWords.join(" ");
    document.getElementById("outputCap").textContent = outputTextCap;
  }

//  Assignment No.5

function calculateAverage() {
  const inputElement = document.getElementById("inputAvg");
  const outputElement = document.getElementById("outputAvg");

  // Split the input value into an array of strings and convert them to numbers
  const numberArray = inputElement.value.split(",").map(Number);

  // Calculate the sum of the numbers in the array
  const sum = numberArray.reduce((total, number) => total + number, 0);

  // Calculate the average if the length of the array is not zero
  const average = numberArray.length > 0 ? sum / numberArray.length : 0;

  // Display the average in the output element
  outputElement.innerHTML = `The average is ${average.toFixed(2)}`;
}

//  Assignment No.6

function checkPalindrome() {
  const inputPalText = document.getElementById("inputPal").value;
  const reversedText = inputPalText.split("").reverse().join("");
  const isPalindrome = inputPalText === reversedText;
  document.getElementById("outputPal").innerHTML = isPalindrome;
}
//  Assignment No.7

function sortStrings() {
  const inputstrText = document.getElementById("inputstrings").value;
  const inputstringsArray = inputstrText.split(",");
  const sortedArray = inputstringsArray.sort();
  const outputstringsElement = document.getElementById("outputstrings");
  outputstringsElement.textContent = sortedArray;
}

//  Assignment No.8

function checkPrime() {
  let num = document.getElementById("num-inputpr").value;
  let isPrime = true;

  if (num <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  document.getElementById("outputpr").innerHTML = isPrime ? "true" : "false";
}


//  Assignment No.9

function sortObjects() {
  // Get the input array of objects
  let input = document.getElementById("input").value;
  let arr = JSON.parse(input);

  // Get the selected property to sort by
  let prop = document.getElementById("select").value;

  // Sort the array of objects by the selected property
  arr.sort((a, b) => a[prop] - b[prop]);

  // Display the sorted array in the output element
  document.getElementById("output").innerHTML = JSON.stringify(arr);
}