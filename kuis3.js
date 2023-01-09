import http  from "node:http";

const server=http.createServer((_req,res)=>{
    if (req.url === "/http/login" && req.method === "GET") {
        res.end("Hi!Bunga");
    }    else(
        res.end("Not Found!.")
    )
});

server.listen(3000);
console.log("server sedang berjalan di http://localhost:3000");

