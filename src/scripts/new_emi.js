function calculateEMI(principal, annualInterestRate, months) {
    // Validate inputs
    if (principal <= 0 || annualInterestRate < 0 || months <= 0) {
        throw new Error("Invalid input values. Ensure principal > 0, interest rate >= 0, and months > 0.");
    }

    let monthlyInterestRate = annualInterestRate / (12 * 100); // Convert annual interest rate to monthly decimal

    if (monthlyInterestRate === 0) {
        // If interest rate is 0, simple division gives the EMI
        return (principal / months).toFixed(2);
    }

    let emi = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months)) /
              (Math.pow(1 + monthlyInterestRate, months) - 1);

    return emi.toFixed(2); // Format to two decimal places for currency display
}

// Example usage:
try {
    let emi = calculateEMI(500000, 7.5, 60); // Principal: 500,000, Interest: 7.5% annually, Tenure: 60 months
    console.log("EMI:", emi);
} catch (error) {
    console.error(error.message);
}