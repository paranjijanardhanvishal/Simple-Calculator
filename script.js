// Get DOM elements
const principalInput = document.getElementById('principal');
const rateInput = document.getElementById('rate');
const timeInput = document.getElementById('time');
const calculateBtn = document.getElementById('calculate-btn');
const interestResult = document.getElementById('interest-result');
const totalResult = document.getElementById('total-result');
const resultSection = document.getElementById('result-section');

// Function to calculate simple interest
function calculateInterest() {
    // Get values from inputs
    const principal = parseFloat(principalInput.value);
    const rate = parseFloat(rateInput.value);
    const time = parseFloat(timeInput.value);

    // Validate inputs to ensure they are valid positive numbers
    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal < 0 || rate < 0 || time < 0) {
        alert("Please enter valid positive numbers for all fields.");
        return;
    }

    // Calculate simple interest: (P * R * T) / 100
    const interest = (principal * rate * time) / 100;
    
    // Calculate total amount: P + I
    const totalAmount = principal + interest;

    // Display results with proper formatting
    interestResult.textContent = `$${interest.toFixed(2)}`;
    totalResult.textContent = `$${totalAmount.toFixed(2)}`;
    
    // Add 'show' class to display the result section with an animation
    resultSection.classList.add('show');
}

// Add event listener to the calculate button
calculateBtn.addEventListener('click', calculateInterest);

// Add event listener for Enter key on all inputs for better UX
const inputs = [principalInput, rateInput, timeInput];
inputs.forEach(input => {
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calculateInterest();
        }
    });
});
