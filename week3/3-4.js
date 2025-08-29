let products = [
    {price: 100, discount: 10},
    {price: 250, discount: 15},
    {price: 300, discount: 20},
    {price: 450, discount: 25},
    {price: 500, discount: 30},
]

function calculateTotal() {
    let totalPrice = 0;
    products.forEach(product => {
        let discountPrice = product.price - ((product.price*product.discount)/100);
        totalPrice += discountPrice;
    });
    console.log("Total Price:", totalPrice);
}

calculateTotal();