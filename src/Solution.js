import { useState } from "react";

const apiUrl = 'https://quote-garden.herokuapp.com/api/v3/quotes';

const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json()
  return data;
}

function App() {
  const [quote, setQuote] = useState({quote: '', author: ''});

  return (
    <div>
      <h1>Woah cool react app!</h1>
      <h3>Need a quote?</h3>
      <button onClick={async () => {
        const serverResposne = await getData(apiUrl)
        setQuote({quote: serverResposne.data[0].quoteText, author: serverResposne.data[0].quoteAuthor});
        }}>Quote please</button>
      <p>Quote: <strong>{quote.quote}</strong></p>
      <p>Author: {quote.author}</p>
    </div>
  );
}

export default App;
