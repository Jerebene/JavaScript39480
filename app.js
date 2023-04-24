class Skin {
    constructor(id, nombre, precio, img, float, estado, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.float = float;
        this.estado = estado;
        this.categoria = categoria;
    }
}

// const Pistolas = document.getElementById("Pistolas")
//     Pistolas.addEventListener("click", () => {
//         let filterSkins = listaSkins.filter(skin => skin.categoria == "Pistolas")

//         console.log(filterSkins)
//     })


    const listaSkins = [
        new Skin(1, "AK47 | Legión de Anubis", 2000, "./Assets/img/ak47.png", 0.0053, " (Factory New)", "Pistolas"),
        new Skin(2, "M4A4 | Emperador", 2100, "./Assets/img/ak47.png", 0.1657, " (Field Tested)", "Rifles"),
        new Skin(3, "USP | Muerte confirmada", 2200, "./Assets/img/ak47.png", 1.9463, " (Factory New)", "Rifles"),
        new Skin(4, "AK47 | Legión de Anubis", 2000, "./Assets/img/ak47.png", 0.0053, " (Minimal Wear)","Pistolas"),
        new Skin(5, "M4A4 | Emperador", 2100, "./Assets/img/ak47.png", 0.1657, " (Well Worn)", "SubFusiles"),
        new Skin(6, "USP | Muerte confirmada", 2200, "./Assets/img/ak47.png", 1.9463, " (Battle Scarred)","Pistolas"),
]
 
let cartList

const cardContainer = document.getElementById("cardContainer")
const cartContainer = document.getElementById("cartContainer")

if (localStorage.getItem("cartList")) {
    let cartListJSON = localStorage.getItem("cartList")
    cartList = JSON.parse(cartListJSON)


    cartList.forEach(Skin => {
        cartContainer.innerHTML += `
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${Skin.img}" class="img-fluid rounded-start" alt="skin">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${Skin.nombre}${Skin.estado}</h5>
                    <p class="card-text">Precio $${Skin.precio}</p>
                    <p class="card-text">Float ${Skin.float}</p>
                </div>
            </div>
        </div>
    </div>`
    })

    
} else {
    cartList = []
}


  // Lista de productos en tienda

listaSkins.forEach(Skin => {
    cardContainer.innerHTML += `
    <div class="skinCard hide card-body ${Skin.categoria}" style="max-width: 10rem; max-height: 21.2rem">
            <img src="${Skin.img}" class="card-img-top" alt="">
            <div class=" d-flex flex-column">
                <h5 class="cardName">${Skin.nombre}${Skin.estado}</h5>
                <p class="cardPrice">$${Skin.precio}</p>
                <a href="#" id="skin-${Skin.id}" class="cardButton btn btn-outline-success w-60 m-auto mb-2 ";">Comprar</a>
            </div>
         </div>
    `
})

listaSkins.forEach(Skin => {
    const buttonCart = document.getElementById(`skin-${Skin.id}`)
    buttonCart.addEventListener("click", () => {
        
        cartList.push(Skin)

        let cartListJSON = JSON.stringify(cartList)
        localStorage.setItem("cartList", cartListJSON)

        cartContainer.innerHTML = ""
        cartList.forEach(Skin => {
            cartContainer.innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${Skin.img}" class="img-fluid rounded-start" alt="skin">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${Skin.nombre}${Skin.estado}</h5>
                        <p class="card-text">Precio $${Skin.precio}</p>
                        <p class="card-text">Float ${Skin.float}</p>
                    </div>
                </div>
            </div>
        </div>`
        })
        

        

    })
})

function filterSkins(value) {
    let buttons = document.querySelectorAll(".categoryButton")

    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active")
        } else {
            button.classList.remove("active")
        }
    })

    let elementos = document.querySelectorAll(".card-body")

    elementos.forEach((elemento) => {
        console.log(elemento)
        if (value == "Todo") {
            elemento.classList.remove("hide")
        } else {
            if (elemento.classList.contains(value)) {
                elemento.classList.remove("hide")
            } else {
                elemento.classList.add("hide")
            }

        }
    })

}

window.onload = () => {
    filterSkins("Todo")
    button.classList.remove("active")
}