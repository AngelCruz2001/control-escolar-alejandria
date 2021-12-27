import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { payStartGetAllPayments } from "../../actions/pay";
import { Searchbar } from "../ui/Searchbar";
import { Table } from "../ui/Table";
import { buildDataStateGroup } from "../../helpers/buildDataTables";
import { isACoincidenceSearch } from "../../helpers/isACoincidence";
import { CheckStatePayGroup } from "./CheckStatePayGroup";
import { FilterMajor } from "../ui/filterMajorBnt/FilterMajor";

export const CheckStatePayScreen = () => {
  const headers = [
    {
      title: "Todos los grupos",
      textAlign: "center",
    },
    {
      title: "Total",
      textAlign: "center",
    },
    {
      title: "Total pagado",
      textAlign: "center",
    },
    {
      title: "Total adeudo",
      textAlign: "center",
    },
    {
      title: "Ver",
      textAlign: "center",
    },
  ];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(payStartGetAllPayments());
  }, []);

  const { ui, pay } = useSelector((state) => state);

  const [isAGrouptActive, setIsAGrouptActive] = useState(false);
  const [valueSearchFilter, setValueSearchFilter] = useState({
    searchWord: "",
  });
  const [dataGroup, setDataGroup] = useState({});
  const [dataShow, setDataShow] = useState([]);
  const { loading } = ui;

  const handleClickSetActiveGroup = (data) => {
    setIsAGrouptActive(true);
    setDataGroup(data);
  };

  const generateData = () => {
    const dataToShow = [];
    const { searchWord } = valueSearchFilter;
    pay.payments.forEach(
      ({ id_group, name_group, money_exp, money, missing }) => {
        const coincidence = isACoincidenceSearch(
          [name_group, money_exp, money, missing],
          searchWord
        );

        const dataBuilded = buildDataStateGroup(
          id_group,
          name_group,
          money_exp,
          money,
          missing,
          handleClickSetActiveGroup,
          coincidence
        );
        if (searchWord === "") {
          dataToShow.push(dataBuilded);
        } else if (coincidence.includes(true)) {
          dataToShow.push(dataBuilded);
        }
      }
    );
    setDataShow(dataToShow);
  };

  useEffect(() => {
    generateData();
  }, [loading, valueSearchFilter]);

  return (
    <div className="gra__container">
      {isAGrouptActive ? (
        <CheckStatePayGroup
          dataGroup={dataGroup}
          setIsAGrouptActive={setIsAGrouptActive}
        />
      ) : (
        <>
          <div className="checkState__headers">
            <Searchbar
              checkState={true}
              placeholder="Buscar por grupo"
              setValueSearchFilter={setValueSearchFilter}
              valueSearchFilter={valueSearchFilter}
            />
            <FilterMajor />
          </div>

          <Table
            headers={headers}
            sizesColumns={[49, 15, 15, 15, 5]}
            data={dataShow}
            checkState={true}
          />
        </>
      )}
    </div>
  );
};
