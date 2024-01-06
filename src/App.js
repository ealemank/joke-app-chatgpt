import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/Any')
      .then(response => response.json())
      .then(data => {
        setJoke(data.setup ? `${data.setup} ${data.delivery}` : data.joke);
      })
      .catch(error => {
        console.error('Error fetching joke:', error);
        setJoke('Oops! Something went wrong.');
      });
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Joke of the Day</h1>
      </header>
      <main className="joke-container">
        <p>{joke}</p>
      </main>
    </div>
  );
}

export default App;
