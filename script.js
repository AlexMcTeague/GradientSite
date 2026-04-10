const firstColor = document.getElementById('firstColor');
const lastColor = document.getElementById('lastColor');
const message = document.getElementById('inputMessage');
const result = document.getElementById('result');


message.addEventListener('input', () => {
    result.textContent = message.value;
});