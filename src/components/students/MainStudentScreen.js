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
import { StudentPassword } from "./StudentPassword";
import { StudentSelect } from "./StudentSelect";
import { StudentReqDoc } from "./StudentReqDoc";
import { StudentsSubmenu } from "./StudentsSubmenu";
import { StudetsFooter } from "./StudetsFooter";
import { StudentHistoryScreen } from "./StudentHistoryScreen";
import { useWindowResize } from "../../hooks/useWindowResize";
import { StudentDesktopModal } from "./StudentDesktopModal";

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

  console.log(documentSelected);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(studentStartGetStudentByMatricula("CODG202111001 "));
    dispatch(gradesStartGetGradesByMatricula("CODG202111001 "));
  }, []);

  const handleRequestDocument = (id) => {
    console.log("hecho");
    dispatch(documentSetDocument(id));
    dispatch(requestStartRequestDocument());
    setDocumentSelected("");
  };

  const generateData = () => {
    const dataToShow = [];
    const { searchWord } = valueSearchFilter;
    grades.activeStudentGrade.forEach(
      ({
        key,
        course,
        teacher,
        grade,
        date,
        status = grade >= 7 ? "Aprobado" : "Reprobado",
        type,
      }) => {
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

  //Funciones para hacer Toggle entre pestanias mobile
  const [activeScreen, setActiveScreen] = useState(0);
  const [historyDocScreen, setHistoryDocScreen] = useState(false);

  //Funciones para hacer Toggle del modal desktop
  const [activeModal, setActiveModal] = useState({
    showModal: true,
    idModal: ''
  });

  const {showModal, idModal} = activeModal;


  //funcion para saber el width
  const [widthSize] = useWindowResize();


  console.log(dataShow);

  return (
    <>
      <StudentsNavbar
        widthSize={widthSize}
        setActiveScreen={setActiveScreen}
        activeScreen={activeScreen}
        setActiveModal={setActiveModal}
      />

      <main>
        <div className="mainStudent">
          {((activeScreen === 0 && widthSize < 768) || widthSize >= 768) && (
            <>
              <div className="mainStudent__topContent">
                <div className="mainStudent__infoStu">
                  <StudentInformation studentInformation={dataInformation} />
                </div>

                {widthSize > 768 && (
                  <div className="mainStudent__selectDocument">
                    <StudentSelect
                      handleRequestDocument={handleRequestDocument}
                      documentSelected={documentSelected}
                      setDocumentSelected={setDocumentSelected}
                      setActiveModal={setActiveModal}
                    />
                  </div>
                )}
              </div>

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

              {widthSize < 768 && <StudetsFooter />}

              {!showModal && (
                <StudentDesktopModal  idModal={idModal} setActiveModal={setActiveModal} />
              )}
            </>
          )}

          {activeScreen === 1 && widthSize <= 768 && (
            <div className="studentReqDoc">
              {!historyDocScreen ? (
                <StudentReqDoc
                  documentSelected={documentSelected}
                  setDocumentSelected={setDocumentSelected}
                  handleRequestDocument={handleRequestDocument}
                  setHistoryDocScreen={setHistoryDocScreen}
                  historyDocScreen={historyDocScreen}
                />
              ) : (
                <StudentHistoryScreen
                  setHistoryDocScreen={setHistoryDocScreen}
                />
              )}
            </div>
          )}

          {activeScreen === 2 && widthSize <= 768 && <StudentPassword />}
        </div>
      </main>
    </>
  );
};
