export function getStartTime(timeEvent) {
    // the incoming time range looks like "07.00 - Selesai" or "09.00 - 11.00"
    // we only need the start portion and we want a colon-separated time for dayjs
    let splitTime = timeEvent.split("-");
    let startTime = splitTime[0].trim();

    // normalize dots to colons so dayjs can parse it with HH:mm
    return startTime;
}