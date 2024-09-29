// import { cookies } from "next/headers";

const API_URL = "https://sites.uci.edu/irvineite/wp-json/wp/v2";

export const headers = { headers: {
  "Content-Type": "application/json",
  "Cache-Control": "no-cache"
}};

// control cache invalidation time
export const revalidate = 300; // 5 min

/**
 * Gets a list of pages, ordered by the "Order" property set in Wordpress.
 * @returns A page hierarchy.
 */
export const getPages = async(): Promise<object[]> => {
  // const _cookies = cookies()

  const res = await fetch(`${API_URL}/pages?orderby=menu_order&order=asc`, headers);
  const pages = await removeFrontpage(await res.json());
  return buildPageHierarchy(pages);
}

/**
 * Builds a hierarchical structure of pages from a flat list.
 * @param pages - The list of pages.
 * @returns The hierarchical structure of pages.
 */
const buildPageHierarchy = (pages: any[]): object[] => {
  const pageMap: { [key: number]: any } = {};
  const rootPages: any[] = [];

  // First, create a map of pages by ID
  pages.forEach(page => {
    page.children = []; // Initialize children array
    pageMap[page.id] = page;
  });

  // Then, build the hierarchy
  pages.forEach(page => {
    if (page.parent === 0) {
      // Root page
      rootPages.push(page);
    } else {
      // Child page
      const parentPage = pageMap[page.parent];
      if (parentPage) {
        parentPage.children.push(page);
      }
    }
  });

  return rootPages;
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
  // return pages;
  return pages.filter((page: any) => page.slug !== "frontpage");
}