//Código de cuadrado
console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm.");

function perimetroCuadrado(lado) {
    return lado * 4;
}
 
perimetroCuadrado()

//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm.");

//const areaCuadrado = ladoCuadrado*ladoCuadrado;
//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2.");

function areaCuadrado(lado){
    return lado*lado;
}

areaCuadrado()

console.groupEnd();

//Código del triángulo
console.group("Triángulo");
//const ladoTriangulo1 = 5;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 6;
//const alturaTriangulo = 5.5;

//console.log("La altura del triangulo mide: " + alturaTriangulo + "cm.");

/*console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm." 
    );*/

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

/*console.log(
    "El perímetro del triangulo es: " 
    + perimetroTriangulo 
    + "cm."
    );*/

//const areaTriangulo = (baseTriangulo * alturaTriangulo / 2);

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}


//console.log("El área del triángulo es: " + areaTriangulo + "cm^2.");
console.groupEnd();

//Código de círculo
console.group("Círculo");
//const radioCírculo = 5;
//const diametroCirculo = radioCírculo * 2;
//const PI = Math.PI;

//console.log("El radio del círculo mide: " + radioCírculo + "cm.");

//const perimetroCirculo = PI * diametroCirculo;
//console.log("El perímetro del circulo es: " + perimetroCirculo + "cm.");
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return Math.PI *diametro;
}

function diametroCirculo (radio){
    return radio*2;
}

function areaCirculo(radio){
    return Math.PI * radio * radio;
}

//const areaCirculo = (radioCírculo^2) * PI;
//console.log("El área del circulo es: " + areaCirculo + "cm^2.");
console.groupEnd();

//Aquí interactuamos con el HTML
//Cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}   
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
//Triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = input1.value;

    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value;

    const input3 = document.getElementById("InputTriangulo3");
    const value3 = input3.value;

    const perimetro = perimetroTriangulo(parseInt(value1),parseInt(value2), parseInt(value3));
    alert(perimetro);
}   
function calcularAreaTriangulo(){
    const input4 = document.getElementById("InputTriangulo4");
    const value4 = input4.value;

    const input5 = document.getElementById("InputTriangulo5");
    const value5 = input5.value;

    const area = areaTriangulo(value4, value5);
    alert(area);
}
//Círculo
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}   
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}