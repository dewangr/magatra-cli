export function convertCeremonyNameToEnum(ceremonyName) {
    ceremonyName = ceremonyName.toLowerCase();
    let ceremonyEnum = "0"; // Default to "0" for "Pawiwahan"
    if (ceremonyName === "mepandes" || ceremonyName === "metatah" || ceremonyName === "mesangih") {
        ceremonyEnum = "1";
    } if (ceremonyName === "tigabulanan" || ceremonyName === "telubulanan" ) {
        ceremonyEnum = "2";
    }
    return ceremonyEnum;
}