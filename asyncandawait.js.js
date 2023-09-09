// An asynchronous function that simulates fetching data from a server with a delay.
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { message: 'Data fetched successfully' };
        resolve(data);
      }, 2000); // Simulate a delay of 2 seconds (2000 milliseconds).
    });
  }
  
  // An asynchronous function that uses 'await' to fetch data.
  async function fetchDataAsync() {
    try {
      console.log('Fetching data...');
      const result =  fetchData(); // 'await' pauses execution until 'fetchData' Promise is resolved.
      console.log('Data:', result.message);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the asynchronous function to fetch data.
  fetchDataAsync();
  