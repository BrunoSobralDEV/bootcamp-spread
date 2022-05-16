export const getQuote = () => fetch('http://localhost:3333/quotes')
.then(response => response.json())