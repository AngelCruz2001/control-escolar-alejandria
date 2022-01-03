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

const documentType = [
  { title: "Nombre del documento" },
  { title: "Nombre del documento" },
  { title: "Nombre del documento" },
  { title: "Nombre del documento" },
  { title: "Nombre del documento" },
  { title: "Nombre del documento" },
  { title: "Nombre del documento" },
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
  const [documentSelected, setDocumentSelected] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(studentStartGetStudentByMatricula("qwerry2"));
    dispatch(gradesStartGetGradesByMatricula("qwerry2"));
  }, []);

  const handleRequestDocument = (id) => {
    dispatch(documentSetDocument(id));
    dispatch(requestStartRequestDocument())
    setDocumentSelected('')
  }

  const generateData = () => {
    const dataToShow = [];
    const { searchWord } = valueSearchFilter;
    grades.activeStudentGrade.forEach(
      ({ key, course, teacher, grade, date, status = "Aprobado", type }) => {
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

  return (
    <>
      <StudentsNavbar />

      <main>
        <div className="mainStudent">
          <div className="mainStudent__infoStu">
            <StudentInformation studentInformation={dataInformation} />
          </div>
          <div>

            <StudentSelect
              handleRequestDocument={handleRequestDocument}
              documentSelected={documentSelected}
              setDocumentSelected={setDocumentSelected}

            />
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
          <StudetsFooter />
         

          <StudentModal/>
         

          {/* <div>
            <h3>Selecciona el documento que deseas solicitar</h3>
            <div>
              {documentType.map((doc, i) => (
                <div key={i}>
                  <p>{doc.title}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </main>
    </>
  );
};
