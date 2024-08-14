const url = "https://jsonplaceholder.typicode.com/posts/1";

console.log('Fetching data from', url);


fetch(url)
    .then(response => {  // register a callback to handle the response
        console.log("First handler for the fetch()'s promise")
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // response.text() returns a promise that resolves with the response body
        return response.json();
    })
    .then(data => {
        console.log("Second handler for the response.json()'s promise");
        // data is the response body
        console.log("Second handler for the response.json()'s promise");
        console.log('Data fetched:', data);
    })
    .catch(error => {
        console.error('Error in the first promise:', error);
    });

console.log('Please wait for the data to be fetched...');