const API_URL = "https://sites.uci.edu/irvineite/wp-json/wp/v2";

export const getPages = async() => {
  const res = await fetch(`${API_URL}/pages`);
  return res.json();
}

export const getPageBySlug = async(slug: string) => {
  const res = await fetch(`${API_URL}/pages?slug=${slug}`);
  return res.json();
}