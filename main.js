// Incrementing Item1
const incrementItem1 = document.getElementById('increaseItem1');
incrementItem1.addEventListener('click', function(){
    increaseQuantityPrice("item1", "itemPrice1");
})

// Decrementing Item1 
const decrementItem1 = document.getElementById('decreaseItem1');
decrementItem1.addEventListener('click', function(){
    decreaseQuantityPrice("item1", "itemPrice1");
})

// Incrementing Item2
const incrementItem2 = document.getElementById('increaseItem2');
incrementItem2.addEventListener('click', function() {
    increaseQuantityPrice("item2", "itemPrice2");
})

// Decrementing Item2 
const decrementItem2 = document.getElementById('decreaseItem2');
decrementItem2.addEventListener('click', function(){
    decreaseQuantityPrice("item2", "itemPrice2");
})

function increaseQuantityPrice(id, price) {
    // Calculating ItemQuantity
    const itemQuantity = document.getElementById(id).value;
    const newItemQuantity = parseInt(itemQuantity) + 1;
    document.getElementById(id).value = newItemQuantity;

    // Calculating itemPrice
    const itemPrice = document.getElementById(price).innerText;
    const actualItemPrice = parseInt(itemPrice) / itemQuantity;
    document.getElementById(price).innerText = actualItemPrice * newItemQuantity;
    updateTotal();
}

function decreaseQuantityPrice(id, price) {
    // Calculating ItemQuantity & Price
    const itemQuantity = document.getElementById(id).value;
    const newItemQuantity = parseInt(itemQuantity) - 1;
    const itemPrice = document.getElementById(price).innerText;
    const actualItemPrice = parseInt(itemPrice) / itemQuantity;
    if (newItemQuantity <= 1) {
        document.getElementById(id).value = 1;
        document.getElementById(price).innerText = actualItemPrice;
    } else {
        document.getElementById(id).value = newItemQuantity;
        document.getElementById(price).innerText = actualItemPrice * newItemQuantity;
    } 
    updateTotal();
}

function updateTotal() {
    // Calculating Subtotal
    const itemPrice1 = document.getElementById('itemPrice1').innerText;
    const itemPrice2 = document.getElementById('itemPrice2').innerText;
    const subTotalCalc = parseInt(itemPrice1) + parseInt(itemPrice2);
    document.getElementById('subtotal').innerText = subTotalCalc;
    // Calculating Tax
    const taxCalc = subTotalCalc * 15 / 100;
    document.getElementById('tax').innerText = taxCalc;
    // Calculating total 
    document.getElementById('total').innerText = subTotalCalc + taxCalc;
}

const removeBtn1 = document.getElementById('removeItem1');
removeBtn1.addEventListener('click', function(){
    document.getElementById("item1").value = 1;
    document.getElementById("itemPrice1").innerText = "1219";
    updateTotal();
});

const removeBtn2 = document.getElementById('removeItem2');
removeBtn2.addEventListener('click', function() {
    document.getElementById("item2").value = 1;
    document.getElementById("itemPrice2").innerText = "59";
    updateTotal();
})

const checkout = document.getElementById('checkout');
checkout.addEventListener('click', function(){
    document.querySelector('.container').style.display = "none";
    document.getElementById('congrat-img').style.display = "block";
})
