const fraseeautor = (quote=result) => {
    const frase = document.getElementById ("frase");
    frase.innerHTML = `"${quote.quoteText}"`;

    const autor = document.getElementById ("autor");
    autor.innerHTML = quote.quoteAuthor;
}

const urlfrase = () => {
    const url = `https://quote-garden.herokuapp.com/api/v2/quotes/random`;
    return url;
}

const iniciar = async () => {
    const url = urlfrase();
    const response = await fetch(url);
    const result = await response.json();
    fraseeautor(result.quote);
}

document.addEventListener('DOMContentLoaded', iniciar);