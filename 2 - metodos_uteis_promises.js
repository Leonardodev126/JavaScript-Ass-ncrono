// Promise.all Promise.race Promise.resolve Promise.reject

function rand(min, max) {
    min *= 1000;
    max *= 2000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject(new Error("Erro"));
                return;
            }

            resolve(msg);
            return;
        }, tempo);
    });
}



// Promise.all - Promise-race Promise.resolve Promise.reject

// O promise.all resolve tudo de uma vez, mas se der erro, ele vai aprensentar apenas o erro.
const promises = [
    // 'Primeiro valor',
    esperaAi("Promise 1", rand(1, 5)),
    esperaAi("Promise 2", rand(1, 5)),
    esperaAi("Promise 3", rand(1, 5)),
    // esperaAi(5555, rand(1, 5))
    // "Outro valor"
];

// Promise.all(promises)
// .then(valor => {
//     console.log(valor)
// }).catch(error => {
//     console.log(error)
// });

// ELe é como uma corrida, o primeiro que ser executado, ele retorna.
// Promise.race(promises)
//     .then(valor => {
//         console.log(valor)
//     }).catch(error => {
//         console.log(error)
//     });

function baixaPagina() {
    const emCache = true

    if(emCache) {
        return Promise.resolve("Página em cache");
    } else {
        return esperaAi("Baixei a página", 3000);
    }

}

baixaPagina()
.then(dadosPagina => console.log(dadosPagina))
.catch(erro => console.log(erro));


