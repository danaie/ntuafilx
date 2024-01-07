// in node.js we create a server that listens requests from the browser.
const http = require('http');
const fs = require('fs'); // for reading html files

// method to create a server
const server = http.createServer((req, res) => {  
// callback function: runs every time a request comes in.
// we have 2 objects: a request obj -> has the info of the request, a response obj -> we use it to response
    console.log(req.url, req.method);

//the response obj: 1.header/datatype, 2.data, 3.end
    //set header content type
    //'text/plain'-> means we send some text back to the browser
    res.setHeader('Content-Type', 'text/html'); // now send some html
    // how?
    //res.write('<p>helloooooo</p>');
    //res.end();
    // Now lets send an html file-> first gotta read it
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(data);    
        } else {
            res.write(data);
            res.end();
            // we can also end(data);
        }
    })
});

//listen method server.listen(port number, hostname, function that fires when we start listening);
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000!')
});

