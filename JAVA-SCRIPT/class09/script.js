$(document).ready(function(){
    // Selectors in jQuery

    let allElements = $("*");   // Selects all elements from the dom

    let mainTitle = $("#mainTitle");   // Selects the element with id main-title

    let innerWrapperElements = $(".innerWrapper");   // Selects all elements with class inner-wrapper
    
    console.log(allElements);
    console.log(mainTitle[0].innerText);
    console.log(innerWrapperElements);

    let elementsByMultipleSelectors = $(".innerWrapper, .wrapper, #mainTitle"); // Selects all elements with class inner-wrapper, class wrapper and id main-title
    console.log(elementsByMultipleSelectors);
    
    let paragraphs = $("p"); // Selects all paragraph elements
    console.log(paragraphs);

    let firstParagraph = $("p:first"); // Selects the first paragraph element

    let lastParagraph = $("p:last"); // Selects the last paragraph element

    console.log(firstParagraph);
    console.log(lastParagraph);
    
    let firstChldren = $("h3:first-child"); // Selects the first child of h3 elements
    console.log(firstChldren);

    let lastChildren = $("p:last-child"); // Selects the last child of p elements
    console.log(lastChildren);
    
    let secondChildren = $("p:nth-child(2)"); // Selects the second child of p elements
    console.log(secondChildren);
    

    // DOM vs jQuery

    let firstParagraphDOM = paragraphs[0]; // DOM
    console.log(firstParagraphDOM);
    console.log(firstParagraphDOM.innerText);
    console.log(firstParagraphDOM.innerHTML);
    
    let firstParagraphjQuery = paragraphs.first(); // jQuery
    console.log(firstParagraphjQuery.text());
    console.log(firstParagraphjQuery.html());
    

    paragraphs.last().text("Hello from Qinshift"); // Change the text of the last paragraph element
    
    let secondParagraph = paragraphs.get(1); // Get the second paragraph element
    console.log(secondParagraph);

    let prevSibling = paragraphs.last().prev().text();
    console.log(prevSibling);
    
    let inputs = $("input");
    console.log(inputs);

    let inputText = $("input[value='Cool']");
    console.log(inputText.val());

    inputText.val("This is the new Cool Value!");
    
    inputText.hide(); // Hide the input element with value Cool
    inputText.show(); // Show the input element with value Cool

    paragraphs.last().css("background-color", "red"); // Change the background color of the last paragraph element
    paragraphs.last().css("color", "white"); // Change the text color of the last paragraph element

    paragraphs.last().after("<h1>WooooW!</h1>"); // Add a new h1 element after the last paragraph element
    paragraphs.last().before("<h1>WooooW!</h1>"); // Add a new h1 element before the last paragraph element

});