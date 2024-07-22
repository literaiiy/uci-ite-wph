const API_URL = "https://sites.uci.edu/irvineite/wp-json/wp/v2";

import axios from "axios";

export const getPages = async () => {
  const res = await axios.get(`${API_URL}/pages`);
  return res.data;
}

export const getPageBySlug = async (slug: string) => {
  const res = await axios.get(`${API_URL}/pages`, { params: { slug } });
  return res.data[0];
}