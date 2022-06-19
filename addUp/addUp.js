const numbers = document.getElementById('numbers');
const btnaddNum = document.getElementById('addNum');
const numsToCal = document.getElementById('numsToCal');
const arr = [];

btnaddNum.addEventListener('click', () => {
    
    let i = arr.length
    arr[i] = parseInt(numbers.value)

    if(i >= 1){
        numsToCal.innerHTML += ', '
    }

    numsToCal.innerHTML += arr[i]
})

numbers.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        btnaddNum.click();
    }
})

// Calculate Array of Numbers
const btnCal = document.getElementById('cal')
const answer = document.getElementById('answer');

btnCal.addEventListener('click', (sum) => {
    sum = 0; 
    for (let i = 0; i < arr.length; i++) { 
        sum += arr[i]; 
    }
    answer.innerHTML = sum
})