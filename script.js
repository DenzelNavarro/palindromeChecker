document.getElementById("check-btn").onclick = function() {
    var inputValue = document.getElementById("text-input").value;

    if(inputValue === "") {
        alert("Please input a value");
        return;
    }

    var normalizedInput = inputValue.toLowerCase().replace(/[^a-z0-9]/g, '');
    var reversedInput = normalizedInput.split('').reverse().join('');
    var resultText = inputValue + " is " + (normalizedInput === reversedInput ? "a palindrome" : "not a palindrome");

    document.getElementById("result").textContent = resultText;
}