// select the container
const container = document.getElementById('container');

const firstName = 'ola';
const lastName = 'Nordmann';
// Create a href 
const newLink = document.createElement('a');
console.log(newLink);
newLink.href = `https://www.example.com/?firstName=${firstName}&lastName=${lastName}`;
newLink.textContent = 'Submit';

container.appendChild(newLink);
console.log(window.location.search);

const parameterString = window.location.search;

const searchParams = new URLSearchParams(parameterString);
console.log(searchParams.get("firstName"));
console.log(searchParams.get("lastName"));