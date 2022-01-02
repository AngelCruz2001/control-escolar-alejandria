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
      title: "Total",
      titleDown: "pagado",
      icon: "fas fa-sort-amount-down-alt",
      textAlign: "center",
    },
    {
      title: "Total",
      titleDown: "adeudo",
      icon: "fas fa-sort-amount-down-alt",
      textAlign: "center",
    },
    {
      title: "Ver",
      textAlign: "center",
    },
  ];

  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(payStartGetAllPayments());
  }, []);

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

  const [sortBy, setSortBy] = useState(false);
  const [sortBy2, setSortBy2] = useState(false);

  const handleClick = (index) => {
    if (index === 2) {
      setSortBy(!sortBy);
      setSortBy2(false);
    } else {
      setSortBy2(!sortBy2);
      setSortBy(false);
    }
  };

  useEffect(() => {
    pay.students.length >= 1 && setIsAGrouptActive(true);
  }, [pay]);

  const [titleActive, setTitleActive] = useState("Todos los grupos");
  const [filter, setFilter] = useState(false);
  console.log(titleActive);

  const toggleTitleActive = (title) => {
    if (title === titleActive) return;
    setTitleActive(title);
    setFilter(!filter);
    dispatch(
      payStartGetAllPayments({
        title,
      })
    );
  };

  const handleValueSortBy = (id, param) => {
    console.log(id, param);
    dispatch(
      payStartGetAllPayments({
        title: titleActive,
        id,
        param,
      })
    );
  };

  return (
    <div className="gra__container checkState__">
      {isAGrouptActive ? (
        <CheckStatePayGroup
          dataGroup={dataGroup}
          setIsAGrouptActive={setIsAGrouptActive}
          handleClick={handleClick}
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortBy2={sortBy2}
          setSortBy2={setSortBy2}
          handleValueSortBy={handleValueSortBy}
        />
      ) : (
        <>
          <div className="checkState__headers">
            <div className="checkState__headers-search">
              <Searchbar
                placeholder="Buscar por grupo"
                setValueSearchFilter={setValueSearchFilter}
                valueSearchFilter={valueSearchFilter}
              />
            </div>
            <FilterMajor
              setFilter={setFilter}
              filter={filter}
              titleActive={titleActive}
              setTitleActive={setTitleActive}
              toggleTitleActive={toggleTitleActive}
            />
          </div>

          <Table
            headers={headers}
            sizesColumns={[49, 15, 15, 15, 5]}
            data={dataShow}
            handleClick={handleClick}
            sortBy={sortBy}
            setSortBy={setSortBy}
            sortBy2={sortBy2}
            setSortBy2={setSortBy2}
            handleValueSortBy={handleValueSortBy}
          />
        </>
      )}
    </div>
  );
};
