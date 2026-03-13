import axios from "axios";
import { API_URL } from "../../types/consts.js";
import { getDataRsvpByOwner } from "./getDataRsvpByOwner.js";
import { unref } from "vue";

export async function addItemRsvpCarousel(ownerName, ceremonyType, guestName, guestMessage, guestAttendance) {
  const endpoint = `${API_URL}/carousels`;

  // allow passing either refs or plain values
  const data = {
    ownerName: unref(ownerName),
    ceremonyType: unref(ceremonyType),
    guestName: unref(guestName),
    guestMessage: unref(guestMessage),
    guestAttendance: guestAttendance != null ? unref(guestAttendance) : null,
  };

  try {
    await axios.post(endpoint, data);
  } catch (err) {
    // Show error details from server for easier debugging
    console.error("There has been a problem with your fetch operation: ", err);
    if (err.response) {
      console.error("response data:", err.response.data);
    }
  }

  // pass a plain value when refreshing
  await getDataRsvpByOwner(unref(ownerName)); // Refresh data after adding new item
}