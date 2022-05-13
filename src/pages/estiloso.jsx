
import Layout from "../components/Layout";
import styles from "../styles/Estiloso.module.css";
export default function Estiloso() {
  return (
    <Layout titulo='Mais um css modularizado'>
      <div className={styles.roxo}>
        <h1>Estilo usando modulos</h1>
      </div>
    </Layout>
  );
}
