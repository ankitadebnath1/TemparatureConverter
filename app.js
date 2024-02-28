const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convertButton = document.querySelector('.convertButton');
const resetButton = document.querySelector('.resetButton');
const changeButton = document.querySelector('.changeButton'); // Added . before changeButton
const C = document.querySelector('.C'); // Changed to .C instead of just C
const F = document.querySelector('.F');

const swap = () => {
    if (C.innerHTML === '°C') {
        C.innerHTML = '°F'; // Fixed assignment operator from === to =
        converter.placeholder = "Temperature in °F"; // Fixed typo "Temparature" to "Temperature"
    } else {
        C.innerHTML = '°C'; // Fixed assignment operator from === to =
        converter.placeholder = "Temperature in °C"; // Fixed typo "Temparature" to "Temperature"
    }
};

const reset = () => {
    converter.value = '';
    result.innerHTML = '';
};

const convert = () => {
    if (/^(-?)(\d+)(\.(1)\d+)?$/.test(converter.value)) {
        result.style.color = 'black';
        if (C.innerHTML === '°C') {
            let value = (converter.value * 1.8) + 32;
            result.innerHTML = `${converter.value}°C is equal to ${value.toFixed(2)}°F`; // Changed single quotes to backticks for template literals
        } else {
            let value = (converter.value - 32) / 1.8;
            result.innerHTML = `${converter.value}°F is equal to ${value.toFixed(2)}°C`; // Changed single quotes to backticks for template literals
        }
    } else if (converter.value == '') {
        result.style.color = "#993300";
        result.innerHTML = "Enter some number";
    } else {
        result.style.color = "#993300";
        result.innerHTML = "Enter only number !!";
    }
};

changeButton.addEventListener('click', swap);
resetButton.addEventListener('click', reset);
convertButton.addEventListener('click', convert);
