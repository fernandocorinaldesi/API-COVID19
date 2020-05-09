import React, { Component } from "react";
import TableModel from "./components/TableModel";
import TableModelTotal from "./components/TableModelTotales";

class App extends Component {
  state = {
    paises: [],
    cont_muertos : 0,
    cont_contagiados : 0,
    cont_recuperados : 0
  };

  componentDidMount() {
    this.apiPaises();
  }

  apiPaises = async () => {
    try {
      const datos = await fetch("https://corona.lmao.ninja/v2/countries?yesterday=&sort=", {
        method: "GET",
      });
      const paises = await datos.json();
      this.setState({ paises: paises,
        cont_recuperados :paises.map((e) =>e.recovered).reduce((acum,e)=>acum+e,0),
        cont_contagiados :paises.map((e) =>e.cases).reduce((acum,e)=>acum+e,0),
        cont_muertos :paises.map((e) =>e.deaths).reduce((acum,e)=>acum+e,0)});
    } catch (err) {
      alert("Se produjo el siguiente error: " + err);
      this.setState( { paises : [] } )
    }
  };

  render() {
    const { paises,cont_muertos,cont_recuperados,cont_contagiados } = this.state;
    return (
      <div className="App">
        <TableModelTotal totalmuertes={cont_muertos} totalrecuperados={cont_recuperados} 
        totalcontagiados={cont_contagiados}/>
        <TableModel listaCoronavirus={paises} tituloTabla="Listado por Pais" />
      </div>
    );
  }
}

export default App;