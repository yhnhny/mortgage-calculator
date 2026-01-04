// Simple validation script to check for syntax errors
console.log("Validation script running...");

// Test Vue.js availability
if (typeof Vue !== 'undefined') {
    console.log("Vue.js is available");
} else {
    console.log("Vue.js is NOT available - check CDN link");
}

// Test basic JavaScript functionality
try {
    const testData = {
        mortgageAmount: 500000,
        downPayment: 100000,
        interestRate: 5.5
    };
    
    console.log("Test data:", testData);
    console.log("Basic JavaScript is working");
} catch (error) {
    console.error("JavaScript error:", error);
}