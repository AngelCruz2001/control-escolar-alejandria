export const types = {

    authCheckingStart: '[auth] Start checking login state',
    authCheckingFinish: '[auth] Finish checking login state',
    authStartLogin: '[auth] Start login',
    authLogin: '[auth] Login',
    authStartRegister: '[auth] Start Register',
    authStartTokenRenew: '[auth] Start token renew',
    authLogout: '[auth] Logout',

    uiSetError: '[UI] Set Error',
    uiSetCorrect: '[UI] Set Correct',
    uiRemoveError: '[UI] Remove Error',
    uiStartLoading: '[UI] Start loading',
    uiFinishLoading: '[UI] Finish loading',
    uiSetCurrent: '[UI] Set current component',
    uiIsModalOpen: '[UI]Change modal open',

    studentSetActive: '[student] Set active',
    studentClearData: '[student] Clear data',

    requestSetRequests: '[request] Set requests',
    requestDeleteRequest: '[request] Delete request',

    gradesSetGrades: '[grades] Set grades',
    gradesSetSpecificGrades: '[grades] Set specific grades',

    documentSetDocument: '[document] Set Document',
    documentClearActive: '[document] Clear Active',
    documentClearData: '[document] Clear document data',
    documentSetHistory: '[document] Set History',

    expenseSetTypeExpenses: '[expense] Set type expenses',
    expensesSetExpenses: '[expense] Set expenses',
    expensesSetDataInputs: '[expense] Set data inputs',
    expensesClearData: '[expense] Clear data',
}

export const typesExpenses = [
    "Transporte",
    "Artículos de limpieza",
    "Artículos de oficina",
    "Servicios básicos",
    "Comida",
    "Pagos a maestros",
    "Pagos a personal adminisativo",
    "Pagos al sistema",
    "Pagos a servicios extras",
    "Pagos para evento",
]

export const typesDocuments = [
    "Constancia de estudios",
    "Constancia de estudios con calificaciones",
    "Carta maestrante",
    "Credencial",
    "Certificado de maestría",
    "Certificado de licenciatura",
    "Titulo de maestri",
    "Titulo de licenciatura",
    "Acta de examen",
    "Constancia de titulo en progreso",
]