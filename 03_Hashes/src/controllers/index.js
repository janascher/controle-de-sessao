const users = require("../repositories.js/users.js");
const perfil = require("../public/modules/perfil.js");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const saltRounds = 10;

function getLogin(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const userCorrect = users[username].password === password;
    const email = users[username].email;

    if (userCorrect) {
        const token = crypto.randomUUID();
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        users[username].token === token;

        res.cookie("username", username);
        res.cookie("token", token);
        res.cookie("hash", hash);
        res.send(perfil(username, email, token, hash));
    } else {
        res.send(`Falha no acesso.`);
    }
}

function createEmail(req, res) {
    const newEmail = req.body.newEmail;
    const username = req.cookies["username"];
    const token = req.cookies["token"];

    users[username].token === token;
    users[username].email = newEmail;
    res.send(perfil(username, newEmail, token));
}

module.exports = { getLogin, createEmail };
