
import Navegador from "../components/Navegador";
export default function Inicio() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexWrap: "wrap",
      }}
    >
      <Navegador destino="/estiloso" texto="Estiloso" cor="red" />
      <Navegador destino="/exemplo" texto="Exemplo" cor="blue" />
      <Navegador destino="/navegacao" texto="Navegação 01" cor="green" />
      <Navegador destino="/cliente/sp-2/123" texto="Navegação 02" cor="black" />
      <Navegador destino="/estado" texto="Estado" cor="#9b8900" />
      <Navegador destino="/integracao1" texto="Integração com api " cor="gray" />
      <Navegador destino="/estatico" texto="Conteudo estatico " cor="#fa054a" />
    </div>
  );
}
