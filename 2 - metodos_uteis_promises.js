function rand(min, max) {
    min *= 1000;
    max *= 2000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject(false)
            return;
        }

        setTimeout(() => {   
            resolve(msg);
            return;
        }, tempo);
    });
}



// Promise.all - Promise-race Promise.resolve Promise.reject

// O promise.all resolve tudo de uma vez, mas se der erro, ele vai aprensentar apenas o erro.
const promises = [
    // 'Primeiro valor',
    esperaAi("Promise 1", 3000),
    esperaAi("Promise 2", 500),
    esperaAi("Promise 3", 1000),
    // esperaAi(5555, 1000),
    // "Outro valor"
];

// Promise.all(promises)
// .then(valor => {
//     console.log(valor)
// }).catch(error => {
//     console.log(error)
// });

// ELe é como uma corrida, o primeiro que ser executado, ele retorna.
Promise.race(promises)
.then(valor => {
    console.log(valor)
}).catch(error => {
    console.log(error)
});