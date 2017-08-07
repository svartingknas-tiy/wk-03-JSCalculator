alert("welcome to calculator");

var calcInput = [];
var inputString = "";

function AddDigit(value) {
  document.getElementById("display").value += value;
}

// function result(){
//   document.getElementById("display").value = eval(document.getElementById("display").value);
// }

function reset(){
  document.getElementById("display").value = " ";
}

function plus(a, b){
  return Number(a) + Number(b);
}

function subs(a, b){
  return Number(a) - Number(b);
}

function mult(a, b){
  return Number(a) * Number(b);;
}

function div(a, b){
  return Number(a) / Number(b);
}

function mod(a, b){
  return Number(a) % Number(b);
}
