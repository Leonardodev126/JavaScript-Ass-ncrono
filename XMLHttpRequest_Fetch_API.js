// Usando o modelo antigo para fazer requisições com XMLHttpRequest

// Função responsável por fazer a requisição das páginas
// const request = (obj) => {
//     return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true); // (Verbo http, URL, assincrono ou não)
//     xhr.send();

//     xhr.addEventListener("load", () => {
//         if(xhr.status >= 200 && xhr.status < 300) {
//             resolve(xhr.responseText);
//         } else {
//             reject(xhr.statusText)
//         }
//     });
//     })
// }

document.addEventListener("click", (event) => {
    const el = event.target;
    const tag = el.tagName.toLowerCase();

    if(tag === "a") {
        event.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    try {
    const href = el.getAttribute('href');

    const response = await fetch(href);

    if(response.status !== 200) throw new Error("ERRO 404");

    const html = await response.text();
    carregaResultado(html)

    } catch(error) {
        console.log(error)
    }

//     fetch(href)
//     .then(response => {
//         if(response.status !== 200) throw new Error("ERRO 404");
//         return response.text();
//     })
//     .then(html => carregaResultado(html))
//     .catch(error => console.log(error))
}

function carregaResultado(response) {
    const resultado = document.querySelector(".resultado");
    resultado.innerHTML = response;
}

/* Usando o novo modelo para fazer requisições - Fetch API  */

// fetch("pagina4.html")
// .then(resposta => {
//     if(resposta.status !== 200) throw new Error("Erro 404");
//     return resposta.text(); // Pega o HTML da página requisitada (Nota: precisa passar then após retornar o html, para que ele seja impresso)
// }).then(html => console.log(html))
// .catch(erro => console.error(erro));
