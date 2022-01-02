import { ExpenseRecord } from '../components/expenseRecord/ExpenseRecord'
import { Feed } from '../components/feedData/Feed'
import { FertilizerPay } from '../components/fertilizerPay/FertilizerPay'
import { Documents } from '../components/generateDocument/Documents'
import { MakePay } from '../components/makePayment/MakePay'
import { RequestDocument } from '../components/requestDocument/RequestDocument'
import { RequestGrades } from '../components/requestGrades/RequestGrades'
import { RequestGradesAdmin } from '../components/requestGrades/RequestsGradesAdmin'

export const itemsMenu = [
    {
        permissions: [
            11,
            14,
            1
        ],
        name: "Solicitud de documento",
        icon: "fas fa-file",
        css: {
            "transform": "rotate(90deg) scaleX(-1)"
        },
        path: "/solicitud_de_documento",
        component: RequestDocument,
        subMenu: []
    },
    {
        "permissions": [
            11,
        ],
        name: "Consulta de calificaciones",
        icon: "fas fa-folder-open",
        css: {},
        path: "/consulta_de_calificaciones",
        component: RequestGrades,
        subMenu: []
    },
    { //ADMINISTRATIVO
        permissions: [
            2,
            3,
            4,
            1
        ],
        name: "Consulta de calificaciones",
        icon: "fas fa-folder-open",
        css: {},
        path: "/consulta_de_calificaciones",
        component: RequestGradesAdmin,
        subMenu: []
    },
    {
        permissions: [
            1
        ],
        name: "Registro de gastos",
        icon: "fas fa-ticket-alt",
        css: {},
        path: "/registro_de_gastos",
        component: ExpenseRecord,
        subMenu: []
    },
    {
        permissions: [
            1,
            2,
        ],
        name: "Realizar pago",
        icon: "fas fa-money-bill",
        css: {},
        path: "/realizar_pago",
        component: MakePay,
        subMenu: []
    },
    {
        permissions: [
            1,
            2,
        ],
        name: "Abonos",
        icon: "fas fa-coins",
        css: {},
        path: "/abonos",
        component: FertilizerPay,
        subMenu: []
    },
    {
        permissions: [
            1,
            2,
        ],
        name: "Generar documento",
        icon: "fas fa-file",
        css: {
            transform: "rotate(90deg) scaleX(-1)"
        },
        path: "/generar_documento",
        component: Documents,
        subMenu: []
    },
    {
        permissions: [
            1,
            2,
        ],
        name: "Captura de datos",
        icon: "fas fa-database",
        css: {
        },
        path: "/captura_de_datos",
        component: Feed,
        subMenu: [
            {
                name: "Alumnos",
                icon: "fas fa-user-graduate",
                css: {},
                path: "/captura_de_datos/alumnos",
            },
            {
                name: "Grupos",
                icon: "fas fa-id-badge",
                css: {},
                path: "/captura_de_datos/grupos",
            },
            {
                name: "Materias",
                icon: "fas fa-book-open",
                css: {},
                path: "/captura_de_datos/materias",
            },
            {
                name: "Carreras",
                icon: "fas fa-graduation-cap",
                css: {},
                path: "/captura_de_datos/carreras",
            },
        ]
    }
]