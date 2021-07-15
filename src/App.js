import React from 'react';
import './style.css';

export default function App() {
  return (
    <div className="container">
      <section className="sidebar">Left Panel </section>

      <section className="content">
        <div className="content-title">
          Right Panel <br />
          <h1>Hello StackBlitz!</h1>
          <p>Start editing to see some magic happen :)</p>
        </div>

        <div className="card">
          <div>I am a card 1</div>
          <div>Loreum ipsum, bla bla data</div>
        </div>
        <div className="card">I am a card 2</div>
        <div className="card">I am a card 3</div>
        <div className="card">I am a card 4</div>
        <div className="card">I am a card 5</div>
      </section>
    </div>
  );
}
