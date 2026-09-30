// 1- Crie uma função que receba um número e retorne o dobro.
function nu(a ){
    return a * 2;
}
console.log(nu(20))

// 2- Crie uma função que receba um número e retorne o triplo.
function num(a ){
    return a * 3;
}
console.log(num(30))

// 3- Crie uma função que receba dois números e retorne a soma.
function soma(a, b ){
    return a + b;
}
console.log(soma (23,43))

// 4- Crie uma função que receba dois números e retorne a multiplicação.
function multiplicação(a, b){
    return a * b;
}
console.log(multiplicação (2,4))

// 5- Crie uma função que receba um salário e calcule aumento de 10%. 
function aumento(sa){
    return (sa * 0.10) + sa;
}
console.log(aumento (2000))

// 6 - Crie uma função que imprima números de 1 até 10.
function imprimir(nume = 1) {
    if (nume > 10) return; 
    console.log(nume);
    imprimir(nume + 1); 
}
imprimir()


// 7- Crie uma função que some todos os números até 10.
function somar(num = 1) {
    if (num > 10) return 0;
    return num + somar(num + 1);
}

console.log(somar()); 
