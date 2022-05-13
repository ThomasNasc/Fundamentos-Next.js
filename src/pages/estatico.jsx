import React from "react";
import Layout from "../components/Layout";



export function getStaticProps() {
  return {
    props: {
      numero: Math.random(),
    },
  };
}


function Estatico(props) {
  return (
    <Layout titulo="Conteudo Estatico">
      <div>{props.numero}</div>
    </Layout>
  );
}

export default Estatico;
