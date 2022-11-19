import axios from "axios";

export async function loadPosts() {
  // Call an external API endpoint to get posts
  const res = axios.get("http://localhost/gateway-service/public/pegawai");

  return res;
}
