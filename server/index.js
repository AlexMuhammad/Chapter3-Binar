// const http = require("http");
// const PORT = 4000;
// const fs = require("fs");
// const path = require("path");
// const PUBLIC_DIRECTORY = path.join(__dirname, '../public')

// //request handler
// const onRequest = (req, res) => {
//     const htmlFile = path.join(PUBLIC_DIRECTORY, 'index.html')
//     const html = fs.readFileSync(htmlFile, 'utf-8');
//     console.log(req.url)
//     res.writeHead(200);
//     res.end(html)
// }

// const server = http.createServer(onRequest);

// server.listen(PORT, '127.0.0.1', () => {
//     console.log("Server Sudah Berjalan http://127.0.0.1:%d", PORT)
// })

const express = require("express");
const app = express();
const PORT = 4000;
const path = require("path");

const router = express.Router()

const PUBLIC_DIRECTORY = path.join(__dirname, '../public')

app.use(express.static(PUBLIC_DIRECTORY));

router.get("/", (req, res) => {
    res.status(200)
    res.sendFile(path.join(PUBLIC_DIRECTORY, "/index.html"));
})
router.get("/cari", (req, res) => {
    res.status(200)
    res.sendFile(path.join(PUBLIC_DIRECTORY, "/cariMobil.html"));
})

app.use("/", router)

app.listen(PORT, () => console.log("server running on port "));
