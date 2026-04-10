const firstColor = document.getElementById('firstColor');
const lastColor = document.getElementById('lastColor');
const message = document.getElementById('inputMessage');
const result = document.getElementById('result');

// Set the color of each character in the string to a gradient between the first and last colors
const refreshGradient = () => {
    // First convert the hex color values to RGB
    const firstR = parseInt(firstColor.value.substring(1, 3), 16);
    const firstG = parseInt(firstColor.value.substring(3, 5), 16);
    const firstB = parseInt(firstColor.value.substring(5, 7), 16);

    const lastR = parseInt(lastColor.value.substring(1, 3), 16);
    const lastG = parseInt(lastColor.value.substring(3, 5), 16);
    const lastB = parseInt(lastColor.value.substring(5, 7), 16);

    // Next get the difference between the colors, and divide it into steps based on the length of the string
    const stepR = (lastR - firstR) / (result.textContent.length - 1);
    const stepG = (lastG - firstG) / (result.textContent.length - 1);
    const stepB = (lastB - firstB) / (result.textContent.length - 1);

    // Now loop through each character in the string and set its color based on the step values
    // Could you do this much more gracefully and easily with CSS? Probably, but this is more fun
    let resultHTML = '';
    resultHTML += `<span style="color: ${firstColor.value}">${result.textContent[0]}</span>`; // First character
    if (result.textContent.length >= 2) { // Skip further logic if there's only one character
        for (let i = 1; i < result.textContent.length - 1; i++) { // Loop through the middle characters
            const newR = Math.round(firstR + stepR * i);
            const newG = Math.round(firstG + stepG * i);
            const newB = Math.round(firstB + stepB * i);
            resultHTML += `<span style="color: rgb(${newR}, ${newG}, ${newB})">${result.textContent[i]}</span>`;
        }
        resultHTML += `<span style="color: ${lastColor.value}">${result.textContent[result.textContent.length - 1]}</span>`; // Last character
    }

    result.innerHTML = resultHTML;
}

// Set the result text equal to the input message, or the placeholder if the input is empty
const refreshText = () => {
    result.textContent = (message.value == '') ? message.placeholder : message.value;
    refreshGradient();
}

// Initialize the result text and gradient on page load
refreshText();

message.addEventListener('input', () => {
    refreshText();
});

firstColor.addEventListener('change', () => {
    refreshGradient();
});

lastColor.addEventListener('change', () => {
    refreshGradient();
});