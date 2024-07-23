var tipo_hambur = "";
var precio_hambur = 0;
var monto_total = 0;
var indice = 0;

function precio_tabla(num) {

    switch (num) { //suma al precio total segun la hamburgesa
        case 1: tipo_hambur = "Hamburguesa simple";
            precio_hambur = 10;
            monto_total =  monto_total + precio_hambur; break;
        case 2: tipo_hambur = "Hamburguesa doble";
            precio_hambur = 15;
            monto_total = monto_total + precio_hambur; break;
        case 3: tipo_hambur = "Hamburguesa triple";
            precio_hambur = 30;
            monto_total =  monto_total + precio_hambur; break;
        default: ; break;
    }

    indice++

    let lugar_tbb = document.getElementById("t_body"); //voy creando los elementos de la tabla

    let elemento_tr = document.createElement("tr");
    elemento_tr.id = "tr" + indice;
    lugar_tbb.appendChild(elemento_tr);

    let fila = document.getElementById("tr" + indice);

    let elmento_td = document.createElement("td");
    elmento_td.innerHTML = tipo_hambur ;
    fila.appendChild(elmento_td);

    let elmento_td2 = document.createElement("td");
    elmento_td2.innerHTML = precio_hambur + "$";
    fila.appendChild(elmento_td2);

    let precio_total = document.getElementById("boton_precio");
    precio_total.innerHTML = "Pagar " + monto_total + "$";
}

function confirmar(){ //recargar pagina
    location.reload();
}

function recalcular_precio(){ //recalculo precio con o sin impuesto

    let medio_pago = document.getElementById("mediopago");
    let precio_total = document.getElementById("boton_precio");
    let precio_calculo;   

    if (medio_pago.checked == true){
        precio_calculo = monto_total * 1.50;
        precio_total.innerHTML = "Pagar " + precio_calculo + "$";
    } else{
        precio_total.innerHTML = "Pagar " + monto_total + "$";
    }
    precio_calculo = 0;
}