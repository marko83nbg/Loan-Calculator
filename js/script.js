// Add event listener on submit
document.getElementById('loan-form').addEventListener('submit', function(e){
    e.preventDefault();
    // Hide results
    document.getElementById('results').style.display = 'none';
    // Show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calsulateResults, 2000);
});

// Calculate result
function calsulateResults() {
    // UI var
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    // Loan amount
    const principal = parseFloat(amount.value);
    // Calculate interest
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    // Calculate payments
    const calculatedPayments = parseFloat(years.value) * 12;

    // Calculate monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    
        // Show result
        document.getElementById('results').style.display = 'block';
        // Hide loader
        document.getElementById('loading').style.display = 'none';
    } else {
        showError('Please check your numbers.');
    }
}

// Show error
function showError(error) {
    // Creating an error div
    const errorDiv = document.createElement('div');
    // Getting parrent element
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    
    
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));

    // Adding error message above headline
    card.insertBefore(errorDiv, heading); 

    // Removes error message
    setTimeout(clearError, 3000); 
    
    document.getElementById('loading').style.display = 'none';// Hide loader
    document.getElementById('results').style.display = 'none';// Hide result
}

// Clear error
function clearError() {
    document.querySelector('.alert').remove();
}

// Clear all
document.getElementById('clear-all').addEventListener('click', clearAll);

function clearAll() {
    document.getElementById('loading').style.display = 'none';// Hide loader
    document.getElementById('results').style.display = 'none';// Hide result

    document.getElementById('amount').value = '';
    document.getElementById('interest').value = '';
    document.getElementById('years').value = '';
    document.getElementById('monthly-payment').value = '';
    document.getElementById('total-payment').value = '';
    document.getElementById('total-interest').value = '';

}























