function generateQuote() {
    const quotes = [
        {
            quote:'This is my first quote',
            author: "Me" 
        },

        {
            quote:'This is my first quote',
            author: "Me" 
        },

        {
            quote:'This is my first quote',
            author: "Me" 
        },

        {
            quote:'This is my first quote',
            author: "Me" 
        },

        {
            quote:'This is my first quote',
            author: "Me" 
        },
    ]
    

    let currentquote = Math.floor(Math.random()* quotes.length);
    //console.log(currentQuote);

    document.getElementById('quotation').innerHTML = quotes[currentQuote].quote + '&quote;';
    document.getElementById('author').innerHTML = quotes[currentQuote].author;

}
window.onload = function() {
    generateQuote();
    //document.getElementById('generate').addEventListener('Click', generateQuote);


}




