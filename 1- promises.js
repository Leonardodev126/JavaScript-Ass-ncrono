function rand(min, max) {
    min *= 1000;
    max *= 2000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            typeof msg !== 'string' ? reject(new Error("Error")) :
                resolve(msg);
        }, tempo);
    });
}

esperaAi("Conexão com o BD", rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi("Buscando dados da BASE", rand(1, 3))
            .then(resposta => {
                console.log(resposta);
                return esperaAi(2222, rand(1, 3));
            })
    }).then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log("Exibe os dados na tela.")
    }).catch(erro => {
        console.log(erro);
    });


console.log("Isso será exibido antes de qualquer promisse");