import axios from "axios";
import { ref } from "vue";
import { API_URL } from "../types/consts.js";

export async function getRsvpData() {
  const rspvData = ref([]);
  const endpoint = `${API_URL}/rsvps`;
  console.log("Fetching RSVP data from:", endpoint);

  try {
    const response = await axios.get(endpoint);
    rspvData.value = response.data.data;
    return rspvData;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}
