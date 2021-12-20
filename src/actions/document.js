import { types } from '../types/types';




const documentClearActiveDocument = () => ({ type: types.documentClearActive })

export const documentSetDocument = (idDocument) => ({ type: types.documentSetDocument, payload: idDocument })

export const documentClearData = () => ({ type: types.documentClearData })
