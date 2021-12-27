import moment from 'moment';
import 'moment/locale/es';
export const getDate = (fecha) => {
    moment.locale('es');
    return moment(fecha).format("MMMM - D - YYYY").toUpperCase();
    
}
