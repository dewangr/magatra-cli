

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

// configure dayjs one time
 dayjs.extend(customParseFormat);

export function generateTargetDate(tglAcara, waktuMulai) {
    // ensure the time portion uses colons so dayjs can parse it correctly
    return dayjs(tglAcara + " " + waktuMulai, "DD/MM/YYYY HH:mm").format("YYYY-MM-DDTHH:mm:ss");
}