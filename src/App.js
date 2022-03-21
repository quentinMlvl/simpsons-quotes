import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import QuoteCard from './components/QuoteCard';

// const quote = {
//   quote:"Oh Yeah!",
//   character:"Duffman",
//   image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FDuffman.png?1497567511709",
//   characterDirection:"Left"
// }


function App() {
  const [ quote, setQuote ] = useState(null);
  
  function getRandomQuote() {
    axios.get("https://simpsons-quotes-api.herokuapp.com/quotes")
         .then((res) => res.data)
         .then((data) => {
           setQuote(data[0])
         })
  }
  
  useEffect(() => getRandomQuote(), []);

  return (
    <div className="App">
      <header><h1>Simpsons Quotes</h1></header>
      <section className="buttonSection">
        <button onClick={() => getRandomQuote()}>Draw another quote</button>
      </section>
      <section className="quoteSection">
        {
          quote &&
          <QuoteCard quote={quote}/>
        }
      </section>
    </div>
  );
}

export default App;
