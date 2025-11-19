function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero'); // Error thrown
    }
    return a / b;
}

try {
    const result = divide(10, 0);
    console.log(result);
} catch (error) {
    console.error('An error occurred:', error.message); // Error caught
}