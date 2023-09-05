
let lista= JSON.parse(localStorage.getItem('listaProdutos'));
if (!lista) {
    lista = [];    
}
let continua = '';

const input = document.getElementById("input");
const mostrar = document.getElementById("mostrar");
const div = document.getElementById("div");
