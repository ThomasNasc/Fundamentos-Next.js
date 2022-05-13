import React from 'react';
import { useState } from 'react';
import Layout from '../components/Layout';

function Estado(props) {
    const [numero,setNumero] = useState(0)
    function Incrementar(){
       setNumero(numero + 1)
    }
    return (
        <Layout titulo='Componente com estado'>
            <h1>{numero}</h1>
            <button onClick={Incrementar}>Incrementar</button>
        </Layout>
    );
}

export default Estado;