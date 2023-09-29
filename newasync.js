async function fetchExample() {
    try {
        console.log("asyncawait test")
        // Use the fetch function to make an HTTP GET request.
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        // Check if the response status is OK (200).
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response body as JSON.
        const data = await response.json();

        // Log the retrieved data.
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the async function to fetch and log data.
fetchExample();
