function myCallbackFunction() {
    console.log("Callback function executed!");
}

function performTask(callback) {
    console.log("Task started...");
    setTimeout(function() {
        console.log("Task completed!");
        callback(); // Calling the callback function
    }, 2000); // Delay of 2 seconds
}

performTask(myCallbackFunction);
