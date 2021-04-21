import React from 'react';
import './App.css';
import classNames from 'classnames';

const wishes = [
    { text: 'Viajar a la luna', done: false},
    { text: 'Pagar el gimnasio', done: true},
    { text: 'Ir al gimnasio', done: false},
];

const App = () => (
    <div className="app">
        <h1>Mi lista de deseos</h1>
        <fieldset className="wish-input">
            <legend className="wish-input__label">Nuevos deseos</legend>
            <input className="wish-input_field" placeholder="Ingresa tu deseos aquí" />
        </fieldset>
        <ul className="wish-list">
            {wishes.map(({ done, text }, i) => (
                <li key={text} className={classNames('wish-list__item', { 'wish-list__item--done' : done })}>
                    
                    <input id={`wish${i}`} type="checkbox" checked={done} />
                    <label htmlFor={`wish${i}`}>{text}</label>       
                </li>
            ))}
        </ul>
        <button className="wish-clear" type="button">Archivo Done</button>
    </div>
);

export default App;