const express = require("express");
const router = require("./routes");

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use("/", router);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
    console.log(`Servidor criado em: http://localhost:${PORT}`);
});
