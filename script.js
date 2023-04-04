const estadosUF = [];
const select = document.getElementById("select");

async function obterEstado() {
  const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
  const resposta = await fetch(url);
  const estados = await resposta.json();
  estados.forEach(item => estadosUF.push(item.sigla));
  console.log(estadosUF);
  mostraLista();
}

function mostraLista() {
  estadosUF.sort();
  for (i = 0; i < estadosUF.length; i++) {
    console.log("for iniciado");
    var option = document.createElement("OPTION");
    var txt = document.createTextNode(estadosUF[i]);
    option.appendChild(txt);
    select.insertBefore(option, select.lastChild);
  }
}

obterEstado();