import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { documentSetDocument } from "../../actions/document";
import { gradesStartGetGradesByMatricula } from "../../actions/grades";
import { requestStartRequestDocument } from "../../actions/requests";
import { studentStartGetStudentByMatricula } from "../../actions/student";
import { buildDataGradesStudent } from "../../helpers/buildDataTables";
import { isACoincidenceSearch } from "../../helpers/isACoincidence";
import { StudentsNavbar } from "../general/navbar/StudentsNavbar";
import { Searchbar } from "../ui/Searchbar";
import { StudentInformation } from "../ui/StudentInformation";
import { Table } from "../ui/Table";
import { StudentModal } from "./StudentModal";
import { StudentSelect } from "./StudentSelect";
import { StudentReqDoc } from "./StudentReqDoc";
import { StudentsSubmenu } from "./StudentsSubmenu";
import { StudetsFooter } from "./StudetsFooter";

const headers = [
  {
    title: "Clave",
    textAlign: "center",
  },
  {
    title: "Materia",
    textAlign: "center",
  },
  {
    title: "Docente",
    textAlign: "center",
  },
  {
    title: "Calificación",
    textAlign: "center",
  },
  {
    title: "Fecha de impartición",
    textAlign: "center",
  },
  {
    title: "Estatus",
    textAlign: "center",
  },
  {
    title: "Tipo curso",
    textAlign: "center",
  },
];

export const MainStudentScreen = () => {
  const { auth, student, grades, ui } = useSelector((state) => state);
  // TODO: sacar la matricula del selector y ponerla en los dispatch y sacar el promedio del usuario
  // TODO: preguntarle a retana que onda con el status de la grade
  const dataInformation = {
    headers: ["matricula", "alumno", "carrera", "campus", "promedio"],
    data: [
      student.matricula,
      student.student_name,
      student.major_name,
      student.status,
      "9.8",
    ],
  };

  const [dataShow, setDataShow] = useState([]);
  const [valueSearchFilter, setValueSearchFilter] = useState({
    searchWord: "",
  });
  const [documentSelected, setDocumentSelected] = useState("");



  console.log(documentSelected)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(studentStartGetStudentByMatricula("CODG202111001 "));
    dispatch(gradesStartGetGradesByMatricula("CODG202111001 "));
  }, []);

  const handleRequestDocument = (id) => {
    console.log('hecho')
    dispatch(documentSetDocument(id));
    dispatch(requestStartRequestDocument());
    setDocumentSelected("");
  };

  const generateData = () => {
    const dataToShow = [];
    const { searchWord } = valueSearchFilter;
    grades.activeStudentGrade.forEach(
      ({ key, course, teacher, grade, date, status = (grade >= 7) ? "Aprobado" : "Reprobad", type }) => {
        const coincidence = isACoincidenceSearch(
          [key, course, teacher, grade, date, status, type],
          searchWord
        );
        const dataBuilded = buildDataGradesStudent(
          key,
          course,
          teacher,
          grade,
          date,
          status,
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
  }, [grades]);

  //Funciones para hacer Toggle entre pestanias
  const [activeScreen, setActiveScreen] = useState(0);

  console.log(activeScreen);

  //funciones para Solicitar Documentos


  return (
    <>
      <StudentsNavbar
        setActiveScreen={setActiveScreen}
        activeScreen={activeScreen}
      />

      <main>
        <div className="mainStudent">
          {activeScreen === 0 && (
            <>
              <div className="mainStudent__infoStu">
                <StudentInformation studentInformation={dataInformation} />
              </div>

              {/* <StudentSelect
              handleRequestDocument={handleRequestDocument}
              documentSelected={documentSelected}
              setDocumentSelected={setDocumentSelected}
            /> */}

             

              <div className="mainStudent__search">
                <h3 className="mainStudent__search__title">
                  Historial de calificaciones
                </h3>
                <Searchbar />
              </div>

              <div className="mainStudent__tableContainer">
                <Table
                  headers={headers}
                  data={dataShow}
                  sizesColumns={[19, 10, 15, 35, 7, 3, 9]}
                />
              </div>

              <StudetsFooter />
            </>
          )}

          {activeScreen === 1 && (
            <div className="studentReqDoc">
              <div className="studentReqDoc">
                <StudentReqDoc
                  documentSelected={documentSelected} setDocumentSelected={setDocumentSelected} handleRequestDocument={handleRequestDocument}
                />
              </div>
            </div>
          )}

          {activeScreen === 2 && <StudentModal />}
        </div>
      </main>
    </>
  );
};
