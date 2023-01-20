import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
  
  const [greeting, setGreeting] = useState(randomMessage());

  const buttonStyle = {
    padding: "0.5rem 1rem",
    color: "white",
    backgroundColor: "#4c1d95",
    textDecoration: "none",
}

  return (
    <div> 
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())} style={buttonStyle}>
        New Greeting
      </button>
    </div>
  );
}