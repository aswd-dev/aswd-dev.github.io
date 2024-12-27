let elements = document.querySelectorAll('p, h1, h3');
elements.forEach(element => {
    element.textContent = 'Hello World!';
});