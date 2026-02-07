import dayjs from 'dayjs';

export function updateCommentsTimestamp(timestampKomentar) {
  const now = dayjs();
  const diff = now.diff(dayjs(timestampKomentar), "minute");
  let hours = 0;
  let minutes = 0;
  let days = 0;
  let text = "";

  if (diff > 59) {
    hours = Math.floor(diff / 60);
    minutes = diff % 60;
    days = Math.floor(hours / 24);
    if (days > 0) {
      text = `${days} hari  yang lalu`;
    } else {
      text = `${hours} jam ${minutes} menit yang lalu`;
    }
  } else {
    text = `${diff} menit yang lalu`;
  }
  return text;
}