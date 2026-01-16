import path from "node:path"
import { fileURLToPath } from 'node:url';
import express from "express"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "about.html"));
})

app.get("/contact-me", (req, res) => {
    res.sendFile(path.join(__dirname, "contact-me.html"));
})

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "404.html"));
})

const PORT = 8080;

app.listen(PORT, (error) => {
    if(error) {
        throw error;
    }

    console.log(`Express app - listening on port ${PORT}!`);
})