import React from "react";
import { useState } from "react";
import Layout from "../components/Layout";
function Integracao(props) {
  const [cliente, setCliente] = useState({});
  const [codigo, setCodigo] = useState(1);

  async function obterCliente() {
    const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`);
    const dados = await resp.json();
    setCliente(dados);
  }

  return (
    <Layout>
      <div>
        <input
          type="number"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />
        <button onClick={obterCliente}>Obter Clientes</button>
      </div>
      <ul>
        <li>Codigo: {cliente.id} </li>
        <li>Nome: {cliente.nome} </li>
        <li>Idade: {cliente.idade} </li>
      </ul>
    </Layout>
  );
}

export default Integracao;
