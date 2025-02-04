const API_URL = "https://sites.uci.edu/irvineite/wp-json/wp/v2";

// Control cache invalidation time (in seconds)
export const revalidate = 300; // 5 minutes

/**
 * Gets a list of pages, ordered by the "Order" property set in WordPress.
 * @returns A hierarchical structure of pages.
 */
export const getPages = async (): Promise<object[]> => {
  const res = await fetch(`${API_URL}/pages?orderby=menu_order&order=asc`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate },
  });
  const pages = await res.json();
  const filteredPages = removeFrontpage(pages);
  return buildPageHierarchy(filteredPages);
};

/**
 * Builds a hierarchical structure of pages from a flat list.
 * @param pages - The list of pages.
 * @returns The hierarchical structure of pages.
 */
const buildPageHierarchy = (pages: any[]): object[] => {
  const pageMap: { [key: number]: any } = {};
  const rootPages: any[] = [];

  // Create a map of pages by ID and initialize a children array on each page
  pages.forEach(page => {
    page.children = [];
    pageMap[page.id] = page;
  });

  // Build the hierarchy by assigning children to their parent pages
  pages.forEach(page => {
    if (page.parent === 0) {
      // This is a root page
      rootPages.push(page);
    } else {
      // This is a child page; add it to its parent's children array
      const parentPage = pageMap[page.parent];
      if (parentPage) {
        parentPage.children.push(page);
      }
    }
  });

  return rootPages;
};

/**
 * Gets a page by its slug.
 *
 * @param slug - The slug of the page to get.
 * @returns The page with the specified slug.
 */
export const getPageBySlug = async (slug: string): Promise<any> => {
  const res = await fetch(`${API_URL}/pages?slug=${slug}`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate },
  });
  return res.json();
};

/**
 * Gets media from the gallery whose description includes a specified string.
 *
 * @param description - The string to search for in media descriptions.
 * @returns An array of tuples containing the media's source URL, caption, and description.
 */
export const getSpecificMedia = async (description: string): Promise<[string, string, string][]> => {
  const res = await fetch(`${API_URL}/media?search=${description}`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate },
  });
  const json = await res.json();
  const parsed = json.map((media: any) => [
    media.source_url,
    media.caption.rendered,
    media.description.rendered,
  ]);
  return parsed;
};

/**
 * Removes the frontpage from the list of pages.
 * This is necessary for the current implementation of the carousel.
 *
 * @param pages - The list of pages.
 * @returns The list of pages without the frontpage.
 */
const removeFrontpage = (pages: any) => {
  return pages.filter((page: any) => page.slug !== "frontpage");
};
