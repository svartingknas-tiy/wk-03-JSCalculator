alert("welcome to calculator");

function AddDigit(value) {
  document.getElementById("display").value += value;
}

// function result(){
//   document.getElementById("Display").value = eval(document.getElementById("Display").value);
// }

function reset(){
  document.getElementById("Display").value = " ";
}

function plus(a, b){
  return Number(a) + Number(b);
}

function sub(a, b){
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
