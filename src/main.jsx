import { createRoot } from 'react-dom/client'; // Importing es6 module
import React from 'react';

let message = 'programming with Harsh';
const flowers = ["Rose", "Dahlia", "Magnolia", "Tulip", "Daisy"];

// Without JSX
const element1 = React.createElement("h1", {}, "Programming with Harsh");
const element2 = React.createElement("ul", {}, flowers.map((item, index) => React.createElement("li", { key: index }, item)));

// With JSX
const element3 = <h1>Programming with Harsh 2+2 is {2 + 2}</h1>;
const element4 = <ul>
  {flowers.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>

createRoot(document.getElementById('root')).render(
  element4
)
