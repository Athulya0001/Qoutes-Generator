document.getElementById('btn').addEventListener('click', async () => {
    const response = await fetch('https://dummyjson.com/quotes');
    const data = await response.json();
    
    if (data && data.quotes && data.quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.quotes.length);
      const randomQuote = data.quotes[randomIndex];

      document.getElementById('quote').textContent = `"${randomQuote.quote}"`;
      document.getElementById('author').textContent = `- ${randomQuote.author}`;
    }
});