import React, { Component } from "react";
import "../css/table.css";

class TableModel extends Component {
  render() {
    const { listaCoronavirus, tituloTabla } = this.props;
      return (
      <div>
        <table>
        {/* <caption>Muertes totales : {listaCoronavirus.map((e) =>e.deaths).reduce((acum,e)=>acum+e,0)}</caption>
        <caption>Infectados totales : {listaCoronavirus.map((e) =>e.cases).reduce((acum,e)=>acum+e,0)}</caption>
        <caption>Recuperados totales : {listaCoronavirus.map((e) =>e.recovered).reduce((acum,e)=>acum+e,0)}</caption> */}
          <caption>{tituloTabla}</caption>
          <thead>
            <tr>
              <th>Pais</th>
              <th>Total de infectados</th>
              <th>Total de muertos</th>
              <th>Total de recuperados</th>
              <th>Bandera</th>
            </tr>
          </thead>
          <tbody>
            {listaCoronavirus.map((e) => (
              <tr key={e.country}>
                <td>{e.country}</td>
                <td>{e.cases}</td>
                <td>{e.deaths}</td>
                <td>{e.recovered}</td>
                <td>
                  <img src={e.countryInfo.flag} height={35} alt={55} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default TableModel;
