const users = require("../repositories.js/users.js");
const perfil = require("../public/modules/perfil.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const jwt = require("jsonwebtoken");
// Simulando a senha do banco de dados:
const jwtPassword = "aprendendo controle de sessao com jwt";

function getLogin(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const userCorrect = users[username].password === password;
    const email = users[username].email;

    if (userCorrect) {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        const tokenJwt = jwt.sign({ username: username }, jwtPassword, { expiresIn: '30s'});
        res.cookie("token", tokenJwt);
        res.cookie("hash", hash);
        res.send(perfil(username, email, hash));
    } else {
        res.send(`Falha no acesso.`);
    }
}

function createEmail(req, res) {
    const newEmail = req.body.newEmail;
    const tokenJwt = req.cookies["token"];

    try {
        const decoded = jwt.verify(tokenJwt, jwtPassword);
        const username = decoded.username;
        users[username].email = newEmail;
        res.send(perfil(username, newEmail));
    } catch (error) {
        res.send("Acesso expirado! Faça o login novamente.");
    }  
}

module.exports = { getLogin, createEmail };
