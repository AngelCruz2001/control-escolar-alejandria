import { types } from "../types/types";
import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { uiStartLoading, uiFinishLoading } from "./ui";

export const requestStartGetStudentByMatricula = (matricula) => {
  return async (dispatch) => {
    dispatch(uiStartLoading());
    // dispatch(requestClearActiverequest())
    // dispatch(requestC)
    try {
      const res = await fetchConToken(`students/${matricula}`, "GET");
      const body = await res.json();
      const student = body.student;
      console.log(body.student);
      if (body.ok) {
        dispatch(requestSetStudent(student));
      } else {
        console.log(body);
        Swal.fire({
          title: "¡Oops!",
          text: body.msg,
          icon: "question",
        });
      }
      dispatch(uiFinishLoading());
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "Hablar con el administrador", "error");
    }
  };
};

export const requestStartRequest = () => {
  return async (dispatch, getState) => {
    const { matricula } = getState().request.active;
    const { idRequest } = getState().request;
    console.log(getState().request);

    try {
      const res = await fetchConToken(
        "requests",
        {
          matricula,
          id_department: 5,
          document_type: idRequest,
        },
        "POST"
      );
      const body = await res.json();
      if (body.ok) {
        console.log(body);
        dispatch(requestClearData());
        Swal.fire({
          title: "",
          text: body.msg,
          icon: "success",
        });
      } else {
        console.log(body);
        Swal.fire({
          title: "¡Oops!",
          text: body.msg,
          icon: "question",
        });
      }
      dispatch(uiFinishLoading());
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "Hablar con el administrador", "error");
    }
  };
};

export const requestStartGetAllRequest = () => {
  return async (dispatch) => {
    try {
      dispatch(uiStartLoading());
      const res = await fetchConToken("requests?date=all", "GET");
      const body = await res.json();
      const req = body.requests;
      if (body.ok) {
        dispatch(requestHistoryActive(req));
      } else {
        console.log(body);
        Swal.fire({
          title: "¡Oops!",
          text: body.msg,
          icon: "question",
        });
      }
      dispatch(uiFinishLoading());
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "Hablar con el administrador", "error");
    }
  };
};

export const requestStartDeletingSingleRequest = (id) => {
  return async (dispatch) => {
    try {
      console.log(id);
      dispatch(uiStartLoading());
      const res = await fetchConToken(`requests/${id}`,{}, "DELETE");
      const body = await res.json();
      console.log(body);
      // const req = body.requests;
      if (body.ok) {
        dispatch(requestDelete(id));
        Swal.fire({
          title: "",
          text: body.msg,
          icon: "success",
        });
      } else {
        console.log(body);
        Swal.fire({
          title: "¡Oops!",
          text: body.msg,
          icon: "question",
        });
      }
      dispatch(uiFinishLoading());
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "Hablar con el administrador", "error");
    }
  };
};

export const requestSetActive = (idRequest) => ({
  type: types.requestSetActive,
  payload: idRequest,
});

const requestHistoryActive = (req) => ({
  type: types.requestSetHistory,
  payload: req,
});

const requestDelete = (idReq) => ({
  type: types.requestDelete,
  payload: idReq
});

// const requestClearActiverequest = () => ({ type: types.requestClearActive });

const requestSetStudent = (student) => ({
  type: types.requestSetStudent,
  payload: student,
});

export const requestClearData = () => ({ type: types.requestClearData });
