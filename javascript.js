class Skin {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    // sumarIva () {
    //     this.precio = this.precio * 0.21;
    // }
} 

class Compra {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}


const skins = []
skins.push(new Skin("AK47 | Legión de Anubis", "2000"));
skins.push(new Skin("M4A4 | Emperador", "2100"));
skins.push(new Skin("USP | Muerte confirmada", "2200"));
skins.push(new Skin("AWP | Hiperbestia", "2300"));
skins.push(new Skin("Glock-18 | Esmeralda", "2400"));
skins.push(new Skin("Cuchillo talón", "2500"));
skins.push(new Skin("Cuchillo de supervivencia | Tela escarlata", "2600"));
skins.push(new Skin("Guantes de especialista | Kimono carmesí", "2700"));
skins.push(new Skin("MAC-10 | Acechador", "2800"));
skins.push(new Skin("Nova | Anaranjado barroco", "2900"));
skins.push(new Skin("Nova StatTrak™ | Hiperbestia", "3000"));

const miCompra = []

let categoria = parseInt(prompt("Seleccione una categoria.\n 0. Finalizar compra.\n 1. Pistolas.\n 2. Escopetas.\n 3. Sub fusiles.\n 4. Rifles.\n 5. Cuchillos.\n 6. Guantes. "));

while(categoria != "0" ){
   switch (categoria) {
       case 1:
        cat1 = parseInt(prompt("seleccione un item que desee agregar al carrito\n 1. USP | Muerte confirmada\n 2. Glock-18 | Esmeralda"));
        while(cat1 != "0" ){
            switch (cat1) {
                case 1:
                    skins.find ( Skin => { 
                        if (Skin.nombre == "USP | Muerte confirmada") {
                            nombreSkin = Skin.nombre
                            resultado = Skin.precio
                            miCompra.push(new Compra("USP | Muerte confirmada", "2200"));
                            console.log(miCompra)
                            console.log(nombreSkin + " $" + resultado)
                            alert("* agregaste " + nombreSkin + " de $" + resultado + " pesos");
                            return;
                        }
                     })
                     break;
                 case 2:
                    skins.find ( Skin => { 
                        if (Skin.nombre == "Glock-18 | Esmeralda") {
                            nombreSkin = Skin.nombre
                            resultado = Skin.precio
                            miCompra.push(new Compra("Glock-18 | Esmeralda", "2400"));
                            console.log(miCompra)
                            console.log(nombreSkin + " $" + resultado)
                            alert("* agregaste " + nombreSkin + " de $" + resultado + " pesos");
                            return;
                        }
                     })
                     break;
                default:
                    alert("elegi un numero")
                    break;
            }
            cat1 = parseInt(prompt("seleccione un item que desee agregar al carrito\n 0. Volver atras\n 1. USP | Muerte confirmada\n 2. Glock-18 | Esmeralda"));
        }
        break;
        
        case 2:
            cat2 = parseInt(prompt("seleccione un item que desee agregar al carrito\n 0. Volver atras\n 1. Nova | Anaranjado barroco\n 2. Nova StatTrak™ | Hiperbestia"));
        while(cat2 != "0" ){
            switch (cat2) {
                case 1:
                    skins.find ( Skin => { 
                        if (Skin.nombre == "Nova | Anaranjado barroco") {
                            nombreSkin = Skin.nombre
                            resultado = Skin.precio
                            miCompra.push(new Compra("Nova | Anaranjado barroco", "2900"));
                            console.log(miCompra)
                            console.log(nombreSkin + " $" + resultado)
                            alert("* agregaste " + nombreSkin + " de $" + resultado + " pesos");
                            return;
                        }
                     })
                     break;
                 case 2:
                    skins.find ( Skin => { 
                        if (Skin.nombre == "Nova StatTrak™ | Hiperbestia") {
                            nombreSkin = Skin.nombre
                            resultado = Skin.precio
                            miCompra.push(new Compra("Nova StatTrak™ | Hiperbestia", "3000"));
                            console.log(miCompra)
                            console.log(nombreSkin + " $" + resultado)
                            alert("* agregaste " + nombreSkin + " de $" + resultado + " pesos");
                            return;
                        }
                     })
                     break;

                default:
                    alert("elegi un numero")
                    break;
            }
            cat2 = parseInt(prompt("seleccione un item que desee agregar al carrito\n 0. Volver atras\n 1. Nova | Anaranjado barroco\n 2. Nova StatTrak™ | Hiperbestia"));
        }
        break;

        case 3:
            cat3 = parseInt(prompt("seleccione un item que desee agregar al carrito\n 0. Volver atras\n 1. MAC-10 | Acechador"));
        while(cat3 != "0" ){
            switch (cat3) {
                case 1:
                    skins.find ( Skin => { 
                        if (Skin.nombre == "MAC-10 | Acechador") {
                            nombreSkin = Skin.nombre
                            resultado = Skin.precio
                            miCompra.push(new Compra("MAC-10 | Acechador", "2800"));
                            console.log(miCompra)
                            console.log(nombreSkin + " $" + resultado)
                            alert("* agregaste " + nombreSkin + " de $" + resultado + " pesos");
                            return;
                        }
                     })
                     break;

                default:
                    alert("elegi un numero")
                    break;
            }
            cat3 = parseInt(prompt("seleccione un item que desee agregar al carrito\n 0. Volver atras\n 1. MAC-10 | Acechador"));
        }
        break;

        case 4:
            cat4 = parseInt(prompt("seleccione un item que desee agregar al carrito\n 0. Volver atras\n 1. Cuchillo talón\n 2. Cuchillo de supervivencia | Tela escarlata\n 3. AWP | Hiperbestia"));
        while(cat4 != "0" ){
            switch (cat4) {
                case 1:
                    skins.find ( Skin => { 
                        if (Skin.nombre == "AK47 | Legión de Anubis") {
                            nombreSkin = Skin.nombre
                            resultado = Skin.precio
                            miCompra.push(new Compra("AK47 | Legión de Anubis", "2000"));
                            console.log(miCompra)
                            console.log(nombreSkin + " $" + resultado)
                            alert("* agregaste " + nombreSkin + " de $" + resultado + " pesos");
                            return;
                        }
                     })
                     break;
                case 2:
                    skins.find ( Skin => { 
                        if (Skin.nombre == "M4A4 | Emperador") {
                            nombreSkin = Skin.nombre
                            resultado = Skin.precio
                            miCompra.push(new Compra("M4A4 | Emperador", "2100"));
                            console.log(miCompra)
                            console.log(nombreSkin + " $" + resultado)
                            alert("* agregaste " + nombreSkin + " de $" + resultado + " pesos");
                            return;
                        }
                     })
                     break;
                     case 3:
                        skins.find ( Skin => { 
                            if (Skin.nombre == "AWP | Hiperbestia") {
                                nombreSkin = Skin.nombre
                                resultado = Skin.precio
                                miCompra.push(new Compra("AWP | Hiperbestia", "2300"));
                                console.log(miCompra)
                                console.log(nombreSkin + " $" + resultado)
                                alert("* agregaste " + nombreSkin + " de $" + resultado + " pesos");
                                return;
                            }
                         })
                         break;

                default:
                    alert("elegi un numero")
                    break;
            }
            cat4 = parseInt(prompt("seleccione un item que desee agregar al carrito\n 0. Volver atras\n 1. Cuchillo talón\n 2. Cuchillo de supervivencia | Tela escarlata\n 3. AWP | Hiperbestia"));
        }
        break;

        case 5:
            cat5 = parseInt(prompt("seleccione un item que desee agregar al carrito\n 0. Volver atras\n 1. Cuchillo talón\n 2. Cuchillo de supervivencia | Tela escarlata"));
        while(cat5 != "0" ){
            switch (cat5) {
                case 1:
                    skins.find ( Skin => { 
                        if (Skin.nombre == "Cuchillo talón") {
                            nombreSkin = Skin.nombre
                            resultado = Skin.precio
                            miCompra.push(new Compra("Cuchillo talón", "2500"));
                            console.log(miCompra)
                            console.log(nombreSkin + " $" + resultado)
                            alert("* agregaste " + nombreSkin + " de $" + resultado + " pesos");
                            return;
                        }
                     })
                     break;
                case 2:
                    skins.find ( Skin => { 
                        if (Skin.nombre == "Cuchillo de supervivencia | Tela escarlata") {
                            nombreSkin = Skin.nombre
                            resultado = Skin.precio
                            miCompra.push(new Compra("Cuchillo de supervivencia | Tela escarlata", "2600"));
                            console.log(miCompra)
                            console.log(nombreSkin + " $" + resultado)
                            alert("* agregaste " + nombreSkin + " de $" + resultado + " pesos");
                            return;
                        }
                     })
                     break;

                default:
                    alert("elegi un numero")
                    break;
            }
            cat5 = parseInt(prompt("seleccione un item que desee agregar al carrito\n 0. Volver atras\n 1. Cuchillo talón\n 2. Cuchillo de supervivencia | Tela escarlata"));
        }
        break;

        case 6:
            cat6 = parseInt(prompt("seleccione un item que desee agregar al carrito\n 0. Volver atras\n 1. Guantes de especialista | Kimono carmesí"));
        while(cat6 != "0" ){
            switch (cat6) {
                case 1:
                    skins.find ( Skin => { 
                        if (Skin.nombre == "Guantes de especialista | Kimono carmesí") {
                            nombreSkin = Skin.nombre
                            resultado = Skin.precio
                            miCompra.push(new Compra("Guantes de especialista | Kimono carmesí", "2700"));
                            console.log(miCompra)
                            console.log(nombreSkin + " $" + resultado)
                            alert("* agregaste " + nombreSkin + " de $" + resultado + " pesos");
                            return;
                        }
                     })
                     break;

                default:
                    alert("elegi un numero")
                    break;
            }
            cat6 = parseInt(prompt("seleccione un item que desee agregar al carrito\n 0. Volver atras\n 1. Guantes de especialista | Kimono carmesí"));
        }
        break;

       default:
           alert("no sos un numero")
           break;
   }
   categoria = parseInt(prompt("Seleccione una categoria.\n 0. Finalizar compra.\n 1. Pistolas.\n 2. Escopetas.\n 3. Sub fusiles.\n 4. Rifles.\n 5. Cuchillos.\n 6. Guantes. "));
}


const total = miCompra.reduce((acc, el) => acc + parseInt(el.precio), 0)
console.log("el total a pagar es de $" + total);














class Consulta {
    constructor (nombre, email, mensaje) {
        this.nombre = nombre;
        this.precio = email;
        this.mensaje = mensaje;
    }
}

const consultas = []


 let formConsulta = document.getElementById("formulario");

formConsulta.addEventListener("submit", enviarForm);

function enviarForm (e) {
    e.preventDefault();

    let formulario = e.target
    consultas.push(new Consulta(((formulario.children[0]).children[1].value), ((formulario.children[1]).children[1].value), ((formulario.children[2]).children[1].value)));

    // Devuelve por consola la descripcion total del formulario
    console.log(((formulario.children[0]).children[0].innerHTML) + ": " + ((formulario.children[0]).children[1].value));
    console.log(((formulario.children[1]).children[0].innerHTML) + ": " + ((formulario.children[1]).children[1].value));
    console.log(((formulario.children[2]).children[0].innerHTML) + ": " + ((formulario.children[2]).children[1].value));
    
    // Devuelve un array de todas las consultas hechas
    console.log(consultas);

}

let boton = document.getElementById("boton");
boton.addEventListener("click", mandarForm)

function mandarForm () {
    let nombre = (formulario.children[0]).children[1].value;
     console.log("Consulta de " + nombre);
} 


const arrayStorage = (valor1, valor2, valor3) => { localStorage.setItem(valor1, valor2, valor3) };


// almacenar array completo
arrayStorage("listaConsultas", JSON.stringify(consultas));

const arrayConsultas = JSON.parse(localStorage.getItem("listaConsultas"));
console.log(arrayConsultas);
