class Persona {
    constructor(i, n, a, e) {
        this.id = i;
        this.nombre = n;
        this.apellido = a;
        this.edad = e;
    }
}

let menu = Boolean;
let id = 0;
let personas = [];

do {

    let nomb = "";
    let apell = "";
    let eda = 0;

    nomb = prompt("Ingrese su Nombre");
    apell = prompt("Ingrese su Apellido");
    eda = parseInt(prompt("Ingrese su edad"));

    id++;

    personas.push(usuario = new Persona(id, nomb, apell, eda));

    menu = confirm("Desea agregar otra persona?");

} while (menu);

personas.forEach((element) => console.log(element));