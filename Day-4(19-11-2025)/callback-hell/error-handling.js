readFile("data.txt", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    parseData(data, (err, result) => {
        if (err) {
            console.error("Error parsing data:", err);
            return;
        }
        console.log("Parsed data:", result);
    });
});