import React from 'react';
import { sumar } from './libs/functions';
import { URL_IMAGE } from './config';
import foto from './images/foto.jpg';
import Heading from './components/Heading';
import Lista from './components/Lista';
import ElementoLista from './components/ElementoLista';

const App = () => {
    return (
        <>
            <h1>El resultado de la suma de 10 + 10 es: {sumar(10, 10)}</h1>
            <img src={URL_IMAGE} />
            <img src={foto} width={400} height={400} />
            <input type='text' name='name' id='name' placeholder='Insert Name' />
            <Heading className="text-primary" id="titulo" texto="Hola desde React h1" type="h1" />
            <Heading className="text-primary" id="titulo" texto="Hola desde React h2" type="h2"  />
            <Heading className="text-primary" id="titulo" texto="Hola desde React h3" type="h3"  />
            <Heading className="text-primary" id="titulo" texto="Hola desde React h4" type="h4"  />
            <Heading className="text-primary" id="titulo" texto="Hola desde React h4" type="h5"  />

            <Lista id="frontend">
                <ElementoLista>HTML</ElementoLista>
                <ElementoLista>CSS</ElementoLista>
                <ElementoLista>JAVASCRIPT</ElementoLista>
                <ElementoLista>REACT</ElementoLista>
            </Lista>


            <Lista id="backend">
                <ElementoLista>PYTHON</ElementoLista>
                <ElementoLista>SQL</ElementoLista>
                <ElementoLista>MYSQL</ElementoLista>
                <ElementoLista>FLASK</ElementoLista>
            </Lista>


        </>
    )
}

export default App;