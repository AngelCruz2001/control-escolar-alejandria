import React from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { Texture } from "./texture/Texture";
import { Navbar } from "./navbar/Navbar";

import { RequestDocument } from "../requests/RequestScreen";
import { RequestGrades } from "../requestGrades/RequestGrades";
import { FertilizerPay } from "../fertilizerPay/FertilizerPay";
import { MakePay } from "../makePay/MakePay";
import { CheckStatePay } from "../checkStatePay/CheckStatePay";
import { RequestHistory } from "../requests/RequestHistory";
import { InformationScreen } from "../checkStatePay/InformationScreen";

const itemsMenu = [
  {
    name: "Solicitud de documento",
    icon: "fas fa-file",
    css: { transform: "rotate(90deg) scaleX(-1)" },
  },
  { name: "Consulta de calificaciones", icon: "fas fa-folder-open", css: {} },
  { name: "Registro de gastos", icon: "fas fa-ticket-alt", css: {} },
  { name: "Realizar pago", icon: "fas fa-money-bill", css: {} },
  { name: "Abonos", icon: "fas fa-coins", css: {} },
  { name: "Consultar estado de pago", icon: "fas fa-money-check-alt", css: {} },
];

export const Main = () => {
  //Borrar de aqui
  // const {active} = useSelector(state => state.document)

  // const history = useHistory();
  // console.log(history);
  // const lastPath = localStorage.getItem("lastPath");
  // console.log(lastPath);
  // const h = () =>{
  //   history.replace(lastPath);
  // }

  return (
    <div>
      <Texture />
      <Navbar />
      <section>
        <div className="general">
          <div className="general__menu">
            {itemsMenu.map((item, index) => (
              <NavLink
                className="general__menu__item"
                activeClassName="active"
                to={`/${item.name.replaceAll(" ", "_").toLowerCase()}`}
                key={index}
              >
                <i className={`${item.icon}`} style={item.css}></i>
                <p>{item.name}</p>
              </NavLink>
            ))}
          </div>
          <div className="general__overtexture">
            <Switch>
              <Route
                exact
                path="/solicitud_de_documento"
                component={RequestDocument}
              />

              <Route
                exact
                path="/solicitud_de_documento/historial"
                component={RequestHistory}
              />

              <Route
                path="/consulta_de_calificaciones"
                component={RequestGrades}
              />
              <Route path="/realizar_pago" component={MakePay} />
              <Route path="/abonos" component={FertilizerPay} />
              <Route
                exact
                path="/consultar_estado_de_pago"
                component={CheckStatePay}
              />
              <Route
                exact
                path="/consultar_estado_de_pago/informacion"
                component={InformationScreen}
              />
        
              <Redirect to="/consultar_estado_de_pago" />
            </Switch>
          </div>
        </div>
      </section>
    </div>
  );
};
