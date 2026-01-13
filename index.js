import http from 'node:http';
import path from "node:path"
import fs from "node:fs"
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
    if(req.method === "GET" && req.url === "/") {
        const indexFilePath = path.join(__dirname, "index.html");

        fs.readFile(indexFilePath, (err,data) => {
            if(err) {
                res.writeHead(500, {'content-type': 'text/plain'});
                res.end("Server Error");
                return;
            }

            res.writeHead(200, {"content-type": "text/html"});
            res.end(data);
        });
        return;
    }

    else if(req.method === "GET" && req.url === "/about") {
        const aboutFilePath = path.join(__dirname, "about.html");
        
        fs.readFile(aboutFilePath, (err, data) => {
            if(err) {
                res.writeHead(500, {'content-type': 'text/plain'});
                res.end("Server Error");
                return;
            }

            res.writeHead(200, {"content-type": 'text/html'});
            res.end(data);
        });
        return;
    }

    else if(req.method === "GET" && req.url === "/contact-me") {
        const contactMeFilePath = path.join(__dirname, "contact-me.html");

        fs.readFile(contactMeFilePath, (err, data) => {
            if(err) {
                res.writeHead(500, {'content-type': 'text/plain'});
                res.end("Server Error");
                return;
            }

            res.writeHead(200, {'content-type': 'text/html'});
            res.end(data);
        });
        return;
    }

    const notFoundFilePath = path.join(__dirname, "404.html");
    fs.readFile(notFoundFilePath, (err,data) => {
        if(err) {
            res.writeHead(500, {'content-type': 'text/plain'});
            res.end("Server Error");
            return;
        }
        res.writeHead(404, {"content-type": 'text/html'});
        res.end(data);
    });
    return;
});

server.listen(8080, () => console.log("Server Started"));