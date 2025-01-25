// self invoke function

(function () {
    console.log('I am self invoked function');
})();

((num1, num2) => console.log(num1 + num2))(10, 20);

// https://dummyjson.com/products/1

(() => {
 const productUrl = 'https://dummyjson.com/products/1';
 const productContainer = document.getElementById('product-container');
    fetch(productUrl)
    .then(response => response.json())
    .then(product => {
        console.log(product);
        productContainer.innerHTML = `
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p>${product.price}</p>
        `;
    })
})();

(function sayHello(name) {
    console.log(`Hello ${name}`);
})('John');
