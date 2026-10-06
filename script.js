document.getElementById('interestForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    let time = parseFloat(document.getElementById('time').value);
    const timeUnit = document.getElementById('timeUnit').value;

    // Convert time to years if input is in months
    if (timeUnit === 'months') {
        time = time / 12;
    }

    // Calculate simple interest: I = P * R * T / 100
    const interest = (principal * rate * time) / 100;
    const totalBalance = principal + interest;

    // Display Results formatted as local currency strings
    document.getElementById('resPrincipal').innerText = formatCurrency(principal);
    document.getElementById('resInterest').innerText = formatCurrency(interest);
    document.getElementById('resTotal').innerText = formatCurrency(totalBalance);

    // Unhide the results block
    document.getElementById('resultSection').classList.remove('hidden');
});

// Helper function to format currency numbers cleanly
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// Clear button logic to reset fields and hide results card
document.getElementById('btnClear').addEventListener('click', function() {
    document.getElementById('interestForm').reset();
    document.getElementById('resultSection').classList.add('hidden');
});
