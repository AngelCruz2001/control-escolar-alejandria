import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { teacherStartGetCoursesById } from "../../actions/teachers";

import {
  buiidDataTeacherCouses,
  buildDataGradesStudent,
} from "../../helpers/buildDataTables";
import { isACoincidenceSearch } from "../../helpers/isACoincidence";
import { useWindowResize } from "../../hooks/useWindowResize";
import { StudentsNavbar } from "../general/navbar/StudentsNavbar";
import { StudentDesktopModal } from "../students/StudentDesktopModal";
import { Table } from "../ui/Table";
import { TeacherFooter } from "./TeacherFooter";
import { TeacherNavigation } from "./TeacherNavigation";
import { TeacherSearchbar } from "./TeacherSearchbar";

const headers = [
  {
    title: "Tipo",
    // textAlign: "center",
  },
  {
    title: "Nombre",
    // textAlign: "center",
  },
  {
    title: "Estatus",
    // textAlign: "center",
  },
  {
    title: "Grupo",
    // textAlign: "center",
  },
  {
    title: "Periodo",
    // textAlign: "center",
  },
];

export const MainTeacherScreen = () => {
  const { teacher } = useSelector((state) => state);
  // console.log(teacher.courses);

  const [dataShow, setDataShow] = useState([]);

  const [valueSearchFilter, setValueSearchFilter] = useState({
    searchWord: "",
  });

  //Funciones para hacer Toggle del modal desktop
  const [activeModal, setActiveModal] = useState({
    showModal: true,
    idModal: "",
  });

  const { showModal, idModal } = activeModal;

  const [activeCourseScreen, setActiveCourseScreen] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    //cambiar la el id del maestro por dinamica
      dispatch(teacherStartGetCoursesById("ale134163", activeCourseScreen === 0 ?  1 : undefined));
    // dispatch(teacherStartGetCoursesById("ale109188"));
  }, [activeCourseScreen]);

  const generateData = () => {
    const dataToShow = [];
    const { searchWord } = valueSearchFilter;

    teacher.courses.forEach(
      ({
        id_course,
        course_name,
        group_name,
        status,
        start_date,
        end_date,
        type,
      }) => {
        const coincidence = isACoincidenceSearch(
          [course_name, group_name, status, start_date, end_date, type],
          searchWord
        );

        const dataBuilded = buiidDataTeacherCouses(
          id_course,
          course_name,
          group_name,
          status,
          start_date,
          end_date,
          type,
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
  }, [teacher, valueSearchFilter]);

  const [widthSize] = useWindowResize();

  return (
    <>
      <StudentsNavbar widthSize={widthSize} setActiveModal={setActiveModal} />

      <main>
        <div className="mainStudent teacher">
          <TeacherNavigation
            activeCourseScreen={activeCourseScreen}
            setActiveCourseScreen={setActiveCourseScreen}
          />

          <TeacherSearchbar
            activeCourseScreen={activeCourseScreen}
            widthSize={widthSize}
            valueSearchFilter={valueSearchFilter}
            setValueSearchFilter={setValueSearchFilter}
          />

          <div className="teacherTable__activeCourses">
            <Table
              headers={headers}
              data={dataShow}
              sizesColumns={[12, 35.5, 7, 24, 21.5]}
            />
          </div>
        </div>

        {!showModal && widthSize >= 768 && (
          <StudentDesktopModal
            idModal={idModal}
            setActiveModal={setActiveModal}
          />
        )}
      </main>
      {activeCourseScreen === 0 && widthSize <= 768 && <TeacherFooter />}
    </>
  );
};
