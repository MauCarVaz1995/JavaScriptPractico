//const precioOriginal = 120;
//const descuento = 18;

//const porcentajePrecioConDescuento = 100 - descuento;
//const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,

});*/

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return  precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const valuePrice = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const valueDiscount = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(valuePrice,valueDiscount);

    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El resultado del precio con descuento es: " + precioConDescuento + ".";

}
