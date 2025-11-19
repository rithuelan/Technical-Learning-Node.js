function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation that might fail
        setTimeout(() => {
            const success = false; // Simulate failure
            if (success) {
                resolve('Data fetched successfully');
            } else {
                reject(new Error('Failed to fetch data')); // Promise rejected
            }
        }, 1000);
    });
}

fetchData()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('An error occurred:', error.message); // Error caught
    });