import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/id';

// configure dayjs once
 dayjs.extend(customParseFormat);
 dayjs.locale('id');

export function formatEventDate(tglAcara) {
    return dayjs(tglAcara, "DD/MM/YYYY").format("dddd, DD MMMM YYYY");
}