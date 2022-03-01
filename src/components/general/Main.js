import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { NavLink, Route, Switch } from "react-router-dom";
import { payClearFertilizers, payClearModalData } from "../../actions/pay";
import { studentClearData } from "../../actions/student";
import { uiSetCurrent } from "../../actions/ui";
import { CheckStateDetails } from "../checkStatePay/CheckStateDetails";
import { CheckStatePayScreen } from "../checkStatePay/CheckStatePayScreen";
import { ExpenseRecord } from "../expenseRecord/ExpenseRecord";
import { FertilizerPay } from "../fertilizerPay/FertilizerPay.js";
import { MakePay } from "../makePayment/MakePay";
import { RequestDocument } from "../requestDocument/RequestDocument";
import { RequestGrades } from "../requestGrades/RequestGrades";
import { Modal } from "../ui/Modal";
import { Navbar } from "./navbar/Navbar";
import { Texture } from "./texture/Texture";

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
  const state = useSelector((state) => state);
  const { isModalOpen } = state.ui;
  const { idPayment } = state.pay;
  const history = useHistory();
  const { location } = history;
  const dispatch = useDispatch();

  // console.log(location.pathname);

  useEffect(() => {
    if (location.pathname !== `/realizar_pago/${idPayment}`) {
      dispatch(uiSetCurrent(0));
      dispatch(studentClearData());
      dispatch(payClearModalData());
      dispatch(payClearFertilizers() )
    } 
  }, [location.pathname, dispatch]);

  return (
    <div className={`${isModalOpen ? "filterModal" : ""}`}>
      {/* <div className={`${ expenses && 'blackFilter'}`}></div> */}

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
                path="/solicitud_de_documento"
                component={RequestDocument}
              />
              <Route
                path="/consulta_de_calificaciones"
                component={RequestGrades}
              />
              <Route path="/registro_de_gastos" component={ExpenseRecord} />
              <Route path="/realizar_pago/:id?" component={MakePay} />
              <Route path="/abonos" component={FertilizerPay} />
              <Route
                path="/consultar_estado_de_pago"
                component={CheckStatePayScreen}
              />

              {/* <Route path="/consultar_estado_de_pago/grupo" component={CheckStatePayScreen} /> */}
              {/* <Redirect to="/solicitud_de_documento" /> */}
            </Switch>
            {isModalOpen && <Modal />}
          </div>
        </div>
      </section>
    </div>
  );
};
