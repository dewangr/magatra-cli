import axios from "axios";
import { ref } from "vue";
import { API_URL } from "../types/consts.js";

export async function getRsvpData() {
  const rspvData = ref([]);
  const endpoint = `${API_URL}/rsvps`;
  console.log("Fetching RSVP data from:", endpoint);

  try {
    const response = await axios.get(endpoint);
    console.log("RSVP data fetched:", response.data);
    rspvData.value = response.data.data;
    console.log("RSVP data assigned to rspvData:", rspvData.value);

    return rspvData;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}
