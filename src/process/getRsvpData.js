import axios from "axios";
import { ref } from "vue";
import { API_URL } from "../types/consts.js";

export async function getRsvpData() {
  const rspvData = ref([]);

  try {
    const response = await axios.get(`${API_URL}/rsvps`);
    rspvData.value = response.data.data;
    return rspvData;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}
