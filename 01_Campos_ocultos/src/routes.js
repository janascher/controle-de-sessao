const express = require("express");
const router = express.Router();
const { getLogin, createEmail } = require("./controllers/index.js");

router.post("/login", getLogin);
router.post("/email", createEmail);

router.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

module.exports = router;
