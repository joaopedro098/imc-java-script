let peso = prompt("informe seu peso");
let altura = prompt("informe altura");
let imc = peso * (altura * altura);
if (imc <= 18.5) {
  alert("você esta abaixo do peso");
} else if (imc <= 24.9) {
  alert(`seu peso está normal ${imc}`);
} else if (imc <= 29.9) {
  alert(`você está com sobre peso ${imc}`);
} else if (imc <= 34.9) {
  alert(`você está com obesidade  ${imc}`);
} else if (imc <= 39.0) {
  alert(`você está com obesidade severa ${imc}`);
} else {
  alert(`voçê está com obesidade morbita ${imc}`);
}
