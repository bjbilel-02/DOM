// cart
let carticon = document.querySelector("#cart-icon");
let cart = document.querySelector(".carte");
let closecart = document.querySelector('#close-cart');
// open cart
carticon.onclick = ()=>{
   cart.classList.add("active");
};
// close cart
closecart.onclick = ()=>{
    cart.classList.remove("active");
};

// cart working
if(document.readyState=="loading"){
    document.addEventListener("DOMContentLoaded",ready);
} else {
    ready();
}

// making function
function ready(){
    // remove items from cart
    var removeCartbuttons = document.getElementsByClassName("cart-remove");
    console.log(removeCartbuttons);
    for(var i = 0; i < removeCartbuttons.length ; i++){
        var button = removeCartbuttons[i];
        button.addEventListener("click",  removeCartitems);
    }
    // quantity change
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for ( var i=0 ; i < quantityInputs.length; i++){
        var input=quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
}
// remove items from cart
function removeCartitems(event){
    var buttonclicked = event.target;
    buttonclicked.parentElement.remove();
    updatetotal();
}
// quantity changes
function quantityChanged(event){
    var input=event.target;
    if (isNaN(input.value) || input.value <=0 ){
        input.value = 1;
    }
    updatetotal();
}

// update total
function updatetotal(){
    var cartContet = document.getElementsByClassName("cart-content");
    var cartBoxes = cartContet.getElementsByClassName("cart-box");
    var total = 0;
    var priceElement = Array.from( cartBoxe.getElementsByClassName("cart-price"));
    var quantityElement = Array.from(cartBoxe.getElementsByClassName("cart-quantity"));
    for(var i = 0; i < cartBoxes.length ; i++){
        var cartBoxe = cartBoxes[i];
        var quantity = quantityElement.value;
        var price = parseFloat(priceElement.innerText.replace("$","")); 
        total = total + (price[i] * quantity[i]);
        document.getElementsByClassName("total-price").innerText = "$" + total;
    }
}
