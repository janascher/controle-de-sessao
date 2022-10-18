function perfil(username, email) {
    return `
        <!DOCTYPE html>
        <html lang="pt-br">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="./style/style.css" />
                <title>Campo Oculto</title>
                <style>
                    p {
                        font: 0.9rem "Fira Sans", sans-serif;
                    }
                    label {
                        display: block;
                        font: 0.9rem "Fira Sans", sans-serif;
                        margin-bottom: 1rem;
                    }
        
                    button[type="submit"],
                    label {
                        margin-top: 1rem;
                    }
                </style>
            </head>
            <body>
                <h1>Seja bem-vindo(a) ${username}!</h1>
                <p>O e-mail cadastrado é ${email}</p>
                <form action="/email" method="POST">
                    <div>
                        <label for="newEmail">Deseja alterar o seu e-mail?</label>
                        <input type="text" name="newEmail" id="newEmail" />
                        <input type="hidden" id="username" name="username" value="${username}" />
                    </div>
                    <div>
                        <button type="submit" id="btnSubmit">Entrar</button>
                    </div>
                </form> 
            </body>
        </html>
    `;
}

module.exports = perfil;
