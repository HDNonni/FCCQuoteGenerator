let quotes = ["If a man does his best, what else is there?", "Smile, it's free therapy free", "The art of simplicity is a puzzle of complexity",
    "Drive slow and enjoy the scenery - drive fast and join the scenery", "Life is good when we think it's good. Life is bad when we don't think.",
    "Growing old is not growing up.", "Together we can change the world, just one random act of kindness at a time.", "Nothing worth having comes easy."]
let authors = ["Gen. George S. Patton", "Douglas Horton0", "Douglas Horton1", "Douglas Horton2", "Douglas Horton3", "Douglas Horton4", "Ron Hall", "Theodore Roosevelt"]
let colors = ["pink", "green", "purple", "blue", "tan", "yellow", "orange"]
let fonts = ["Georgia, serif", "Times New Roman", "Arial", "Comic Sans MS", "Impact", "Verdana", "Lucida Console"]
let textDeco = ["none", "underline", "overline", "line-through"];

function getRandomNumber(low, high) {
    let randomNumberBetweenLowAndHigh = Math.floor(Math.random() * (high - low) + low);
    console.log(randomNumberBetweenLowAndHigh)
    return randomNumberBetweenLowAndHigh
}

function getQuoteAtIndex(index) {
    let singleQuote = quotes[index]
    console.log(singleQuote);
    return singleQuote;
}

function displayQuote(oneQuote) {
    let quotesDisplayed = document.getElementById("text")
    quotesDisplayed.innerHTML = oneQuote;

}
function displayAuthor(index) {
    let authorsQuote = document.getElementById("author");
    authorsQuote.innerHTML = authors[index];
}

function changeBackgroundColor(backgroundColor){
     document.body.style.backgroundColor = backgroundColor;
}

function changeFont(font){
    let fontChange = document.getElementById("text");
    fontChange.style.fontFamily = font
    console.log(font)
}

function changeFontSize(size){
    let fontSize = document.getElementById("author");
    fontSize.style.fontSize = size
}

function changeTextDeco(deco){
    let textDeco = document.getElementById("text");
    textDeco.style.textDecoration = deco
}

function displayRandomQuote() {

    //On first load, my quote machine displays a random quote in the element with id="text".

    let index = getRandomNumber(0, quotes.length);
    console.log(index);

    let backgroundColorIndex = getRandomNumber(0, colors.length);
    let color = colors[backgroundColorIndex]
    changeBackgroundColor(color);

    let fontColorIndex = getRandomNumber(0, fonts.length);
    let font = fonts[fontColorIndex];
    changeFont(font);

    let fontSizeIndex = getRandomNumber(12, 30);
    let size = fontSizeIndex + "px";
    changeFontSize(size);

    let textDecoIndex = getRandomNumber(0, textDeco.length);
    let deco = textDeco[textDecoIndex];
    changeTextDeco(deco);

    let oneQuote = getQuoteAtIndex(index);

    displayQuote(oneQuote);

    displayAuthor(index);
}


displayRandomQuote();

let newQuoteButton = document.getElementById("new-quote");
newQuoteButton.onclick = function (event) {
    console.log("button click")
    displayRandomQuote();
};


//let btn = document.querySelector('button');


// btn.onlcick = function(){
//     console.log("clicked")
//     getRandomNumber();
//     getRandomQuote();
//     displayQuote();
//     displayAuthor();
// }

// function buttonClick(){
//     let quote = document.getElementsByClassName("quoteText");
//     quote.onclick = getRandomQuote;


// }
// buttonClick()




    // TODO: 
    //clear quotes and author when button clicked
    //same amount of quotes as author
    //set author when button clicked



    // $("#new-quote").click(function () {
    //  //$("#text").append(quotes[getRandomQuote(0,quotes.length)]);
    //  $("#text").append(quotes[displayQuote(0,quotes.length)]);

    // })
    // document.getElementById("new-quote").addEventListener("click", function(){
    //     document.getElementById("text").innerHTML = [getRandomQuote(0,quotes.length)]
    // })

    //$("#author").append(author);