const http = require('http');
const path = require('path');
const fs = require("fs");
const port = 8080

/*
        const url = "https://api.igdb.com/v4/games";
        const data = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Client-ID': 'Client ID',
                'Authorization': 'Bearer access_token',
            },
            body: "fields *;"
        };
    
        fetch(url, data).then(function (response) {
            const gameData = response;
        });

*/

// Create the server and its functions
const server = http.createServer(function (request, response) {
    
    console.log(request.url);
    // Don't try to load favicon to avoid error
    if (!request.url || request.url.match("favicon.ico"))
        return;

    // Get file path
    const filePath = path.join(__dirname, request.url === "/" ? "index.html" : request.url);
    const contentType = request.headers.accept.split(',')[0];

    // Logic based on request url (specific html page)


    // Get the data from files
    console.log(contentType);
    console.log(filePath);
    fs.readFile(filePath, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write("Error: File Not Found");
        } else {
            // No error
            response.writeHead(200, { "Content-Type": contentType });
            response.write(data);
        }
        response.end();
    });
});

// Start server on port 8080
server.listen(port, function(err) {
    if (err) {
        console.log("Error: ", err);
        return;
    }
    console.log(`Server is listening on port ${port}`);
});

