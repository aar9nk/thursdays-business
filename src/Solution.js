import { useState } from 'react';

const apiUrl = 'https://quote-garden.herokuapp.com/api/v3/quotes';

const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function AsyncQuote() {
  const [quote, setQuote] = useState({
    quoteText: '',
    quoteAuthor: '',
  });

  console.log("QUOTE",quote);

  return (
    <div>
      <h1>Woah cool react app!</h1>
      <h3>Need a quote?</h3>
      <button onClick={async () => {
        const serverResponse = await getData(apiUrl);
        console.log(serverResponse);
        setQuote({
          quoteText: serverResponse.data[0].quoteText,
          quoteAuthor: serverResponse.data[0].quoteAuthor,
        });
      }} >Quote please</button>
      <p>Quote:  <strong>{quote.quoteText}</strong></p>
      <p>Author: {quote.quoteAuthor} </p>
    </div>
  );
}

export default AsyncQuote;
