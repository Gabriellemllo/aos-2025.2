import "dotenv/config"
import express from "express"


const app = express()
const port = 3000

console.log("!", process.env.MY_SECRET); 
console.log(process.env.MY_SECRET);

app.listen(3000);
app.get("/", (req, res) => { res.send("Bem-vindo ao Express de Maria Gabrielle")})