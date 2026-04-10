const firstColor = document.getElementById('firstColor');
const lastColor = document.getElementById('lastColor');
const message = document.getElementById('inputMessage');
const result = document.getElementById('result');

// Set the result text equal to the input message, or the placeholder if the input is empty
const refreshText = () => {
    result.textContent = (message.value == '') ? message.placeholder : message.value;
}

// Initialize the result text and gradient on page load
refreshText();

message.addEventListener('input', () => {
    refreshText();
});