Promise.resolve(5)
    .then((num) => {
        console.log(`Value: ${num}`);
        throw new Error("Something went wrong!");
    })
    .then((num) => {
        console.log(`This won't run`);
    })
    .catch((error) => {
        console.error(`Error: ${error.message}`);
    });