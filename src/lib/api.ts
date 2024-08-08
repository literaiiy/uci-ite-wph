const API_URL = "https://sites.uci.edu/irvineite/wp-json/wp/v2";

export const headers = { headers: {
  "Content-Type": "application/json",
  "Cache-Control": "no-cache"
}};

/**
 * Gets a list of pages, ordered by the "Order" property set in Wordpress.
 */
export const getPages = async(): Promise<object[]> => {
  const res = await fetch(`${API_URL}/pages?orderby=menu_order&order=asc`, headers);
  return await removeFrontpage(await res.json());
}

/**
  * Gets page by slug.
  * 
  * @param slug - The slug of the page to get.
  * @returns The page with the specified slug.
  */
export const getPageBySlug = async(slug: string): Promise<any> => {
  const res = await fetch(`${API_URL}/pages?slug=${slug}`, headers);
  return res.json();
}

/**
 * Gets media from gallery with description that includes specified string.
 */
export const getSpecificMedia = async(description: string): Promise<[string, string, string][]> => {
  const res = await fetch(`${API_URL}/media?search=${description}`, headers);
  const json = await res.json();
  const parsed = json.map((media: any) => [
    media.source_url,
    media.caption.rendered,
    media.description.rendered
  ]);
  return parsed;
}

/**
 * Removes the frontpage from the list of pages.
 * *Necessary for the current implementation of the carousel
 */
const removeFrontpage = (pages: any) => {
  return pages.filter((page: any) => page.slug !== "frontpage");
}