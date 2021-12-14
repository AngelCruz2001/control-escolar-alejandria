import { types } from '../types/types'
import Swal from 'sweetalert2'
import { fetchConToken } from '../helpers/fetch';
import { uiStartLoading, uiFinishLoading, uiSetCurrent } from './ui';
import { studentClearData } from './student';




const documentClearActiveDocument = () => ({ type: types.documentClearActive })

export const documentSetDocument = (idDocument) => ({ type: types.documentSetDocument, payload: idDocument })

export const documentClearData = () => ({ type: types.documentClearData })
