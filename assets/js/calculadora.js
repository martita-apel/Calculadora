function add(value) {
  document.getElementById("resultado").innerHTML += value;
}

function calcular() {
  var operacion = eval(document.getElementById("resultado").innerHTML);
  document.getElementById("resultado").innerHTML = operacion;
}

function borrar() {
  document.getElementById("resultado").innerHTML = "";
}
