function rand(min, max) {
    min *= 1000;
    max *= 2000;
    return Math.floor(Math.random() * (max - min) + min);
}

function requisicaoAPI(endpoint, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof endpoint !== 'string') {
                reject(new Error("Endpoint inválido."));
                return;
            }

            resolve(`Resposta da API: [${endpoint}]`);
        }, tempo);
    });
}

// Simule o seguinte fluxo:

// 1. Acesse o endpoint "/login".
// 2. Depois, acesse "/validar-token".
// 3. Depois, acesse "/dados-do-usuario".
// 4. Se algum endpoint for inválido (ex: número), capture o erro.
// 5. Exiba tudo no console em ordem e termine com: "Aplicação finalizada.".

requisicaoAPI("/login", rand(1, 10))
    .then(resposta => {
        console.log(resposta)
        return requisicaoAPI("validar token", rand(1, 10));
    }).then(resposta => {
        console.log(resposta);
        return requisicaoAPI(5555, rand(1, 10));
    }).then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log("Aplicação finalizada");
    }).catch(erro => {
        console.log(erro);
    })

console.log("Iniciando requisição...");
