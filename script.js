let salarios = [];
let gastos = [];

function adicionarSalario() {
  let valor = parseFloat(document.getElementById("salario").value);
  if (!isNaN(valor) && valor > 0) {
    salarios.push(valor);
    atualizarResumo();
  }
}

function adicionarGasto() {
  let descricao = document.getElementById("descricao").value;
  let valor = parseFloat(document.getElementById("valor").value);
  if (descricao && !isNaN(valor) && valor > 0) {
    gastos.push({descricao, valor});
    atualizarResumo();
    atualizarLista();
  }
}

function atualizarResumo() {
  let totalSalarios = salarios.reduce((a, b) => a + b, 0);
  let totalGastos = gastos.reduce((a, b) => a + b.valor, 0);
  let saldo = totalSalarios - totalGastos;

  document.getElementById("totalSalarios").textContent = totalSalarios.toFixed(2);
  document.getElementById("totalGastos").textContent = totalGastos.toFixed(2);
  document.getElementById("saldo").textContent = saldo.toFixed(2);

  document.getElementById("saldo").className = saldo >= 0 ? "positivo" : "negativo";
}

function atualizarLista() {
  let lista = document.getElementById("listaGastos");
  lista.innerHTML = "";
  gastos.forEach(g => {
    let item = document.createElement("li");
    item.textContent = `${g.descricao}: R$ ${g.valor.toFixed(2)}`;
    lista.appendChild(item);
  });
}
