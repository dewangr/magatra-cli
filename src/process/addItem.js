import axios from "axios";
import { API_URL } from "../types/consts.js";
import { getRsvpData } from "./getRsvpData.js";

export async function addItem(namaTamu, ucapan, akanHadir) {
const endpoint = `${API_URL}/rsvps`;

  try {
    const response = await axios.post(
      endpoint,
      {
        nama_tamu: namaTamu.value,
        ucapan: ucapan.value,
        kehadiran: akanHadir ? akanHadir.value : null,
      }
    );
    console.log(response);
  } catch (err) {
    console.error("There has been a problem with your fetch operation: ", err);
  }

  await getRsvpData(); // Refresh data after adding new item
}