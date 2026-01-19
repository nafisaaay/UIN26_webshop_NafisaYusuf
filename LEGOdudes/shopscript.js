document.getElementById("cart-button").addEventListener("click", function() {
    document.getElementById("cart").classList.toggle("hidden")
})

//funksjon for produktopplisting:
function fetchProducts() {
    let productHTML = ""

    products.map(p => productHTML += `<article class="product-card">
                <img src="website_images/PROD_${p.imagefile}" alt="${p.title}" />
                <a href="#">${p.category}</a>
                <h3>${p.title}</h3>
                <p>Kr. ${p.price},-</p>
                <button onClick="addToCart(${p.prodid})">Legg til handlevogn</button>
            </article>`)

    document.getElementById("product-list").innerHTML = productHTML
}

fetchProducts()

//Generer handlevogn 

function showCart(){
    //unike produkter 
    let uniqueItems = new Set(cart) //lager nytt sett hvor hvert unikt set vises 
    let uniqueArray = [...uniqueItems] //... sprer ut verdier inn i en array 
    //oversikt over antall per produkt 
    let cartItems = []
    //går gjennom hele arrayen og filtrerer, og tar vare på lengden, og setter det inn i en ny array kalt cartItems, for å regne ut sum og vise antall
    uniqueArray.map(item => {
        cartItems.push({prodid: item, quantity: cart.filter(i => i === item).length})
    })
    //sjekker om dette blir rikitg 
    //console.log(cartItems). --> brukes for å sjekke om ting funker i konsollen, fjernes når alt funker 

    //gå gjennom cartItems for å lage HTML til handlekurv og renge totalpris 

    let cartHTML = ""
    let totalPrice = 0

    cartItems.map(ci => {
        //hente produktinformasjon 
        //ci er produktid-en til arrayen vi hadde laget også sammenlignes det med produkt id-en
        let product = products.find(i => i.prodid === ci.prodid)
        //skrive HTML
        cartHTML += `<tr>
                        <td class="title">${product.title}</td>
                        <td class="price">${product.price}</td>
                        <td class="quantity">${ci.quantity}</td>
                        <td class="delete"><button onClick="deleteFromCart(${product.prodid})">X</button></td>
                    </tr>`

        //summere totalprisen
        totalPrice += Number(product.price) * Number(ci.quantity)
    })

    if(cart.length === 0){
        cartHTML += "<tr><td>Ingen varer i handlevogn</td></tr>"
    }

    //henter id fra html og mater den inn i cart items
    document.getElementById("cart-items").innerHTML = cartHTML
    document.getElementById("total-price").innerHTML = totalPrice
    document.getElementById("cart-quantity").innerHTML = cart.length
}

//slette fra handlevogn
function deleteFromCart(prodid){
    let deleteIndex = cart.indexOf(prodid)
    if (deleteIndex > -1){
        cart.splice(deleteIndex, 1)//sletter ett element fra den indeksen 
    }
    //oppdatere handlevogn utskrift 
    showCart()
}

//Legg til i handlevogn
function addToCart(prodid) {
    console.log("Legg til produkt med id: " + prodid)
    cart.push(prodid)
    console.log(cart)

    //oppdaterer handlevogn visning 
    showCart()
}