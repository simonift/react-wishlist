import React, {useState} from 'react';
import './App.css';

import WishInput from './WishInput';
import WishList from './WishList';

const initialWishes = [
    { text: 'Viajar a la luna', done: false},
    { text: 'Pagar el gimnasio', done: true},
    { text: 'Ir al gimnasio', done: false},
];

const App = () => {
    const [wishes, setWishes] = useState(initialWishes);
    return (
        <div className="app">
            <h1>Mi lista de deseos</h1>
            <WishInput onNewWish={wish => setWishes([wish, ...wishes])}/>
            <WishList wishes={wishes} />
            <button className="wish-clear" type="button">
                Archivo Hecho
            </button>
        </div>
    );
};
export default App;