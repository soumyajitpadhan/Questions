let product = ['Apple', 'Banana', 'Orange'];
let price = [2.5, 1.2, 1.0];
let quantity = [5, 3, 4];

let map = {};

for (let i = 0; i < product.length; i++) {
    map[product[i]] = (price[i] * quantity[i]).toFixed(2);
}

for (let key in map) {
    console.log(key + " - " + map[key]);
}