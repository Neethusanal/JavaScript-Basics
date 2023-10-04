const promise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    const success = true; // Change to false to simulate a rejection

    if (success) {
        resolve("Operation completed successfully!");
    } else {
        reject("Operation failed!");
    }
});

promise
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.error("Error:", error);
    });
