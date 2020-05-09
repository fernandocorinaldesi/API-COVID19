import React, { Component } from "react";
import "../css/table.css";

export default class TableModelTotales extends Component {
  render() {
    const { totalmuertes, totalrecuperados, totalcontagiados } = this.props;
    return (
      <div>
        <table>
          <caption>Totales</caption>
          <thead>
            <tr>
              <th>Total de infectados</th>
              <th>Total de muertos</th>
              <th>Total de recuperados</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td  id="normal">{totalcontagiados}</td>
              <td>{totalmuertes}</td>
              <td>{totalrecuperados}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
