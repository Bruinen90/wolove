const quotes = [
    {
        quote: 'Hard work should be rewarded by good food',
        author: 'Ken Follett',
    },
    {
        quote: 'Eat clean to stay fit; have a burger to stay sane.',
        author: 'Gigi Hadid',
    },
    {
        quote: 'People who love to eat are always the best people',
        author: 'Julia Child',
    },
    {
        quote: 'Ask not what you can do for your country. Ask what’s for lunch.',
        author: 'Orson Welles',
    },
    {
        quote: 'One cannot think well, love well, sleep well, if one has not dined well.',
        author: 'Virginia Woolf',
    },
    {
        quote: "After a good dinner one can forgive anybody, even one's own relations.",
        author: 'Oscar Wilde',
    },
    {
        quote: 'There is no love sincerer than the love of food.',
        author: 'George Bernard Shaw',
    },
    {
        quote: "Humor keeps us alive. Humor and food. Don't forget food. You can go a week without laughing.",
        author: 'Joss Whedon',
    },
    {
        quote: "The only time to eat diet food is while you're waiting for the burger to cook.",
        author: 'Julia Child',
    },
]

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

document.querySelector('.quotes__quote').innerHTML = randomQuote.quote;
document.querySelector('.quotes__author').innerHTML = randomQuote.author;

let basicFontSize = Math.floor(window.innerHeight/30);

if(randomQuote.quote.length > 75) {
    document.querySelector('.quotes__quote').style.fontSize = basicFontSize-4+'px';
} else {
    document.querySelector('.quotes__quote').style.fontSize = basicFontSize+'px';
}

const scrollHandler = () => {
    if(window.scrollY !== 0) {
        document.querySelector('.mouseIcon').classList.add('mouseIcon--hidden');
    }
}

window.addEventListener('scroll', scrollHandler);
window.addEventListener('load', scrollHandler)
