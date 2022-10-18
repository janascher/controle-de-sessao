const users = require("../repositories.js/users.js");
const perfil = require("../public/modules/perfil.js");

function getLogin(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const userCorrect = users[username].password === password;
    const email = users[username].email;

    if (userCorrect) {
        res.send(perfil(username, email));
    } else {
        res.send(`Falha no acesso.`);
    }
}

function createEmail(req, res) {
    const username = req.body.username;
    const newEmail = req.body.newEmail;
    users[username].email = newEmail;

    res.send(perfil(username, newEmail));
}

module.exports = { getLogin, createEmail };
