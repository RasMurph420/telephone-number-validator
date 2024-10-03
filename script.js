document.getElementById("check-btn").addEventListener("click", validatePhoneNumber);
document.getElementById("clear-btn").addEventListener("click", clearResults);

function validatePhoneNumber() {
    const input = document.getElementById("user-input").value.trim();
    const resultsDiv = document.getElementById("results-div");

    // Clear previous results
    resultsDiv.innerHTML = "";

    // Check for empty input
    if (!input) {
        alert("Please provide a phone number");
        return;
    }

    // Regular expression for validating US phone numbers
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)(\d{3})([\s-]?)(\d{4})$/;

    if (regex.test(input)) {
        resultsDiv.className = "valid"; // Add valid class
        resultsDiv.innerHTML = `Valid US number: ${input}`;
    } else {
        resultsDiv.className = "invalid"; // Add invalid class
        resultsDiv.innerHTML = `Invalid US number: ${input}`;
    }
}

function clearResults() {
    document.getElementById("user-input").value = "";
    document.getElementById("results-div").innerHTML = "";
}
