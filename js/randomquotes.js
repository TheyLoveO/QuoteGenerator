function generatequote() {
    const quotes = [
        {
            quote:'I can take it. The tougher it gets, the cooler I get.',
            author: "Richard M. Nixon" 
        },

        {
            quote:'Forget the failures. Keep the lessons.',
            author: "Dalai Lama" 
        },

        {
            quote:'I never made a mistake in my life. I thought I did once, but I was wrong.',
            author: "Charles M. Schulz" 
        },

        {
            quote:"I'd like to live like a poor man-only with lots of money.",
            author: "Pablo Picasso" 
        },

        {
            quote:"I'm not superstitious but I am a little stitous",
            author: "Michael Scott" 
        }
    ]
    

    let currentquote = Math.floor(Math.random()* quotes.length);
    console.log(currentquote);

    document.getElementById('quotation').innerHTML = quotes[currentquote].quote + '&quote;';
    document.getElementById('author').innerHTML = quotes[currentquote].author;

}
window.onload = function() {
    generatequote();
    document.getElementById('generate').addEventListener('Click', generatequote);
}




