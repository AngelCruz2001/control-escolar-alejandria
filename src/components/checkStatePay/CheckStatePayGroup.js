import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  payClearStudents,
  payStartGetFertilizerPay,
  payStartGetStudentsByGroup,
} from "../../actions/pay";
import { studentStartGetStudentByMatricula } from "../../actions/student";
import { buildDataStateGroupByStudent } from "../../helpers/buildDataTables";
import { isACoincidenceSearch } from "../../helpers/isACoincidence";
import { FilterMajor } from "../ui/filterMajorBnt/FilterMajor";
import { Searchbar } from "../ui/Searchbar";
import { Table } from "../ui/Table";
import { CheckStateDetails } from "./CheckStateDetails";

export const CheckStatePayGroup = ({
  dataGroup,
  setIsAGrouptActive,
  handleClick,
  sortBy,
  setSortBy,
  sortBy2,
  setSortBy2,
  handleValueSortBy,
}) => {
  const { name_group } = dataGroup;

  const headers = [
    {
      title: `${name_group}`,
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

  useEffect(() => {
    dispatch(payStartGetStudentsByGroup(dataGroup.id_group));
  }, []);

  const { ui, pay } = useSelector((state) => state);

  const { students } = pay;

  const [isAStudenttActive, setIsAStudenttActive] = useState(false);
  const [valueSearchFilter, setValueSearchFilter] = useState({
    searchWord: "",
  });
  const [dataShow, setDataShow] = useState([]);

  const { loading } = ui;

  const handleClickSetActiveGroupByStudent = ({ matricula }) => {
    dispatch(payStartGetFertilizerPay(matricula));
    dispatch(studentStartGetStudentByMatricula(matricula));
    setIsAStudenttActive(true);
  };

  const handleBackCleanData = () => {
    setIsAGrouptActive(false);
    dispatch(payClearStudents());
  };

  const generateData = () => {
    const dataToShow = [];
    const { searchWord } = valueSearchFilter;
    students.forEach(
      ({ id_student, student_name, money_exp, money, missing, matricula }) => {
        const coincidence = isACoincidenceSearch(
          [id_student, student_name, money_exp, money, missing],
          searchWord
        );

        const dataBuilded = buildDataStateGroupByStudent(
          matricula,
          student_name,
          money_exp,
          money,
          missing,
          handleClickSetActiveGroupByStudent,
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

  useLayoutEffect(() => {
    if (students.length !== 0) generateData();
  }, [loading, valueSearchFilter]);

  return (
    <>
      {isAStudenttActive ? (
        <CheckStateDetails setIsAStudenttActive={setIsAStudenttActive} />
      ) : (
        <>
          <div className="checkState__headers">
            <div className="checkState__headers-search">
              <Searchbar
                placeholder="Buscar alumno"
                setValueSearchFilter={setValueSearchFilter}
                valueSearchFilter={valueSearchFilter}
              />
            </div>
            {/* <FilterMajor /> */}
            <button
              className="btn btn__back checkState__headers-back"
              onClick={() => handleBackCleanData()}
            >
              <i className="fas fa-arrow-left"></i>
            </button>
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
    </>
  );
};
