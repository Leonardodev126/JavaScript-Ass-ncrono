
function rand(min=0, max=3) {
    min *= 1000;
    max *= 2000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== "string") {
                reject("Erro");
                return;
            }

            resolve(msg);
            return;
        }, tempo)
    });
}

// esperaAi("Fase 1", rand(0, 3))
// .then(resposta => { console.log(resposta); return esperaAi('Fase 2', rand())})
// .then(fase => { console.log(fase); return esperaAi(22, rand())})
// .then(fase => { console.log(fase)})
// .catch(erro => console.log(erro));

async function executa() {
    try {
    const fase1 =  esperaAi("Fase 1", 1000);
    console.log(fase1)
    
    setTimeout(() => {
        console.log("Essa promise estava pendente", fase1)
    }, 1100);


    const fase2 = await esperaAi("Fase 2", rand());
    console.log(fase2)
    const fase3 = await esperaAi(222, rand());
    console.log(fase3)
    console.log("Terminamos na fase:", fase3);

    } catch(error) {
        console.log(error);
    }
}

executa();