//javascript

function swapCase() {
    const inputString = document.getElementById("inputString").value;
    let swappedString = "";

    for (const char of inputString) {
        if (char === char.toUpperCase()) {
            swappedString += char.toLowerCase();
        } else {
            swappedString += char.toUpperCase();
        }
    }

    document.getElementById("output").textContent = swappedString;
};