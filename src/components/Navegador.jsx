import React from "react";
import Link from "next/dist/client/link";
import styles from "../styles/navegador.module.css";
function Navegador(props) {
  return (
    <div
      className={styles.navegador}
      style={{ backgroundColor: props.cor ?? "dodgerblue" }}
    >
      <Link href={props.destino}>{props.texto}</Link>
    </div>
  );
}

export default Navegador;
