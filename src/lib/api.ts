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

// Gets media from gallery with description that includes specified string.
export const getSpecificMedia = async(description: string): Promise<[string, string, string][]> => {
  const res = await fetch(`${API_URL}/media?search=${description}`);
  const json = await res.json();
  const parsed = json.map((media: any) => [
    media.source_url,
    media.caption.rendered,
    media.description.rendered
  ]);
  return parsed;
}

const removeFrontpage = (pages: any) => {
  return pages.filter((page: any) => page.slug !== "frontpage");
}