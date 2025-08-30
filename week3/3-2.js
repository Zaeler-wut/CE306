let productPrice = 1000;
let discount = 10;

let discountPrice = productPrice-((productPrice*discount)/100);

if (discountPrice <= 0) {
    console.log("0")
}else if (discountPrice <= 500) {
    discountPrice += 50
    console.log(discountPrice)
}else {
    discountPrice *= 0.9
    console.log(discountPrice)
}