const intervalID = setInterval(() => {
    console.log('This will be executed repeatedly.');
  }, 1000); // Executes every 1000 milliseconds (1 second)
  
  // To stop the interval:
  setTimeout(() => {
    clearInterval(intervalID);
  }, 5000); // Stops  