const API_URL = "https://sites.uci.edu/irvineite/wp-json/wp/v2";

export const revalidate = 60; // sec?

export const getPages = async(): Promise<object[]> => {
  const res = await fetch(`${API_URL}/pages`);
  return await removeFrontpage(await res.json());
}

export const getPageBySlug = async(slug: string): Promise<object[]> => {
  const res = await fetch(`${API_URL}/pages?slug=${slug}`);
  return res.json();
}

const removeFrontpage = (pages: any) => {
  return pages.filter((page: any) => page.slug !== "frontpage");
}