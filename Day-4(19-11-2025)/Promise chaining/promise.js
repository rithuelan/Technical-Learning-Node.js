function task(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}

// Chaining promises
task('Task 1 completed', 1000)
    .then(() => task('Task 2 completed', 2000))
    .then(() => task('Task 3 completed', 1000));