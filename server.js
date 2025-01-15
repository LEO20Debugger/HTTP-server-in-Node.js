import http from 'http';

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.write('Hello world!'); // Send response to the client
    res.end(); // End the response
});

// Start the server and listen on port 8000
server.listen(8000, () => {
    console.log(`Server running on port 8000`);
});
