function clearAll () {
    const memesContainer = document.querySelector('.memes-content');
    const jokesContainer = document.querySelector('.jokes-content');
    const quotesContainer = document.querySelector('.quotes-content');
    const riddleContainer = document.querySelector('.riddle-content');

    memesContainer.innerHTML = '';
    jokesContainer.innerHTML = '';
    quotesContainer.innerHTML = '';
    riddleContainer.innerHTML = '';
}

// Showing a random Meme

function showMemes () {
    const randomMeme = getRandomData(memeE);

    const memesContainer = document.querySelector('.memes-content');
    const newImg = document.createElement('img');
    newImg.setAttribute('src', randomMeme);

    clearAll ();
    
    memesContainer.appendChild(newImg);
};

// Showing a random Joke

function showJokes () {
    const randomJoke = getRandomData(jokeE);

    const jokesContainer = document.querySelector('.jokes-content');
    const newJokeElement = document.createElement('img');
    newJokeElement.setAttribute('src', randomJoke);

    clearAll ();

    jokesContainer.appendChild(newJokeElement);
};

// Showing a random Quote

function showQuotes () {
    const randomQuote = getRandomData(quoteE);
    const quotesContainer = document.querySelector('.quotes-content');
    
    const newQuoteElement = document.createElement('p');
    const newAuthorElement = document.createElement('p');
    newQuoteElement.textContent =  randomQuote.quote;
    newAuthorElement.textContent = "-" + randomQuote.author;
    
    clearAll ();

    quotesContainer.appendChild(newQuoteElement);
    quotesContainer.appendChild(newAuthorElement);
};

// Showing a random Riddle

function showRiddle () {
    const randomRiddle = getRandomData(riddleE);
    const riddleContainer = document.querySelector('.riddle-content');
    
    const newRiddleElement = document.createElement('p');
    const newAnswerElement = document.createElement('p');
    
    newRiddleElement.textContent =  randomRiddle.question;
    newAnswerElement.textContent = randomRiddle.answer;

    newAnswerElement.setAttribute('id', 'answer-id');
    newAnswerElement.hidden = true;
    
    clearAll ();

    riddleContainer.appendChild(newRiddleElement);
    riddleContainer.appendChild(newAnswerElement);

};

// Reavealing the answer of the random Riddle

function revealAnwser () {
    const newContainer = document.querySelector('.riddle-content');
    // const newRiddle = document.querySelector('p'); not usefull there
    const newAnswer = document.querySelector('#answer-id');

    if (newContainer.innerHTML != '' && newAnswer.hidden) {
        newAnswer.hidden = false;
    } else if (newContainer.innerHTML != '') {
        alert("Answer already there!");
    } else {
        alert('Please select a riddle first');
    };
};
// Returning the random index of type array
function getRandomData (type) {
    return type[rn(type.length)];
};

// This will render a rendom number using len value.
function rn(len) {
    return Math.floor(Math.random() * len);
};

// some Meme for programmers
const memeE = [
    'https://th.bing.com/th?id=OIP.pB7yxuGo_7qOfWcd2D9tqAHaEJ&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
    'https://th.bing.com/th?id=OIP.sxy4Qy5WgSY-AXWVJvaH4gHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
    'https://th.bing.com/th?id=OIP.lb2d1NWAZBaWirQ-rtpWlgHaD3&w=345&h=180&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
    'https://th.bing.com/th/id/R.c9d496d0786bd3c3ba2ea880f80ba9a0?rik=W8UmmD9HM%2fxhYw&pid=ImgRaw&r=0',
    'https://qph.fs.quoracdn.net/main-qimg-2991cd8e228bf229c34fbe48cf926a83',
    'https://th.bing.com/th/id/R.8463c3973d8c93e3e96ec48b4f958475?rik=JTnJsub%2b636IUg&riu=http%3a%2f%2fwww.quickmeme.com%2fimg%2f13%2f1336b1bff538493fa0cd70e74bd195f8d9c9e52eb55f42a0108f9202e97f7091.jpg&ehk=ZA9OcH4s%2bOeWaTtax0Hfvvxi%2fWOzIdfUEzvk3m19Ovk%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
    'https://i.pinimg.com/originals/50/3d/fb/503dfb61dc3ebcf78bd953a8fb2b38e8.jpg',
    'https://www.bemyaficionado.com/wp-content/uploads/2020/11/image.png',
    'https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-37.png',
    'https://tutorial.eyehunts.com/wp-content/uploads/2021/07/204345477_4051421284906719_581670105375622163_n-768x775.jpg'
];

// Some jokes in image
const jokeE = [
    'https://www.rd.com/wp-content/uploads/2018/06/01-Short-Jokes-Anyone-Can-Remember-nicole-fornabaio-rd.com_.jpg?resize=1024,683',
    'https://www.rd.com/wp-content/uploads/2018/06/02-Short-Jokes-Anyone-Can-Remember-nicole-fornabaio-rd.com_.jpg?resize=1024,683',
    'https://www.rd.com/wp-content/uploads/2018/06/03-Short-Jokes-Anyone-Can-Remember-nicole-fornabaio-rd.com_.jpg?resize=1024,683',
    'https://www.rd.com/wp-content/uploads/2018/06/04-Short-Jokes-Anyone-Can-Remember-nicole-fornabaio-rd.com_.jpg?resize=1024,683',
    'https://www.rd.com/wp-content/uploads/2018/06/07-Short-Jokes-Anyone-Can-Remember-nicole-fornabaio-rd.com_.jpg?resize=1024,683',
    'https://www.rd.com/wp-content/uploads/2018/06/08-Short-Jokes-Anyone-Can-Remember-nicole-fornabaio-rd.com_.jpg?resize=1024,683',
    'https://www.rd.com/wp-content/uploads/2018/06/09-Short-Jokes-Anyone-Can-Remember-nicole-fornabaio-rd.com_.jpg?resize=1024,683',
    'https://www.rd.com/wp-content/uploads/2018/06/10-Short-Jokes-Anyone-Can-Remember-nicole-fornabaio-rd.com_.jpg?resize=1024,683',
    'https://www.rd.com/wp-content/uploads/2018/06/17-Short-Jokes-Anyone-Can-Remember-nicole-fornabaio-rd.com_.jpg?resize=1024,683'
];

// Array of quote objects: some quotes
const quoteE = [
    {
        quote: 'Programms must be writen for people to read and only incidantelly for machines to execute.',
        author: 'Harold Abelson'
    },
    {
        quote: `“There are only two ways to live your life. \n One is as though nothing is a miracle. \n The other is as though everything is a miracle.”`,
        author: 'Albert Einstein'
    },
    {
        quote: "Imperfection is beauty, madness is genius " +
                "and it's better to be absolutely ridiculous than absolutely boring.",
        author: ''
    },
    {
        quote: 'We accept the love we think we deserve.',
        author: 'Stephen Chbosky'
    },
    {
        quote: 'Darkness cannot drive out darkness: only light can do that.'
               + '\n Hate cannot drive out hate: only love can do that.',
        author: 'Martin Luther King Jr'
    },
    {
        quote: 'Be the change that you wish to see in the world.',
        author: 'Mahatma Gandhi'
    },
    {
        quote: "You've gotta dance like there's nobody watching,"
                + "\n Love like you'll never be hurt, "
                + "\n Sing like there's nobody listening,"
                + "\n And live like it's heaven on earth.",
        author: 'William W. Purkey'
    },
    {
        quote: `Any fool can write a code that computer can understant. Good programmers write code that humans understand.`,
        author: 'Martin Fowler'
    },
    {
        quote: 'Be yourself; everyone else is already taken.',
        author: 'Oscar Wilde'
    }
];
// Array of riddle object : some riddle
const riddleE = [
    {
        question: 'What English word has three consecutive double letters? ',
        answer: 'Bookkeeper.'
    },
    {
        question: 'A woman shoots her husband, then holds him underwater for five minutes. \n ' +
                'Next, she hangs him. \n ' + 
                'Right after, they enjoy a lovely dinner. \n ' +
                'Explain.',
        answer: 'She took a picture of him and developed it in her darkroom.'
    },
    {
        question: 'A girl has as many brothers as sisters, \n ' +
                'but each brother has only half as many brothers as sisters. \n ' +
                'How many brothers and sisters are there in the family?',
        answer: 'Four sisters and three brothers.'
    },
    {
        question: 'What disappears as soon as you say its name?',
        answer: 'Silence.'
    },
    {
        question: 'What word in the English language does the following: \n ' + 
                'the first two letters signify a male, \n ' +
                'the first three letters signify a female, \n ' +
                'the first four letters signify a great, \n ' + 
                'while the entire world signifies a great woman. \n' +
                'What is the word? ',
        answer: 'Heroine.'
    },
    {
        question: "You see a boat filled with people. It has not sunk, but when you look again you don't see a single person on the boat. Why?",
        answer: 'All the people were married.'
    },
    {
        question: "What is seen in the middle of March and April that can't be seen at the beginning or end of either month?",
        answer: 'The letter "R."'
    },
    {
        question: 'I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?',
        answer: 'A map.'
    },
    {
        question: "You measure my life in hours and I serve you by expiring. I'm quick when I'm thin and slow when I'm fat. The wind is my enemy. ",
        answer: 'A candle.'
    },
    {
        question: 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I? ',
        answer: ' An echo'
    }
];

const data = {
 memeE,
 jokeE,
 quoteE,
 riddleE
};