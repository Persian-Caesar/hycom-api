import {
  AuthorPostsResponse,
  ExploreResponse,
  ExploreSortParametr,
  QrCodeResponse,
  SiteInformation,
  WebSiteInformationResponse,
  SortParametr,
  TagsResponse,
  TopAuthorResponse
} from "./types";

/*
{
  "success": true,
  "data": [
    {
      "endpoint": "/api/",
      "method": "GET",
      "description": "Returns this API help documentation.",
      "authentication": "None",
      "parameters": [],
      "example_response": {
        "success": true,
        "data": [
          {
            "endpoint": "/api/",
            "method": "GET",
            "description": "API help documentation",
            "authentication": "None"
          }
        ]
      }
    },
    {
      "endpoint": "/api/top-authors/",
      "method": "GET",
      "parameters": [
        {
          "name": "limit",
          "type": "integer",
          "default": 10,
          "description": "Number of authors to return (1-50)"
        }
      ],
      "description": "Returns top authors sorted by total views"
    },
    {
      "endpoint": "/api/author-posts/{display_name}/",
      "method": "GET",
      "parameters": [
        {
          "name": "display_name",
          "type": "string",
          "description": "Author display name and profile ID (format: name-code)"
        },
        {
          "name": "limit",
          "type": "integer",
          "default": 10,
          "description": "Number of posts to return (1-50)"
        },
        {
          "name": "sort",
          "type": "string",
          "default": "newest",
          "description": "Sort order (newest, most_viewed)"
        }
      ],
      "description": "Returns published posts by a specific author"
    },
    {
      "endpoint": "/api/tags/",
      "method": "GET",
      "parameters": [
        {
          "name": "limit",
          "type": "integer",
          "default": 20,
          "description": "Number of tags to return (1-100)"
        }
      ],
      "description": "Returns tags with their post counts"
    },
    {
      "endpoint": "/api/explore/",
      "method": "GET",
      "parameters": [
        {
          "name": "search",
          "type": "string",
          "default": "",
          "description": "Search query for title, tags, or author"
        },
        {
          "name": "page",
          "type": "integer",
          "default": 1,
          "description": "Page number for pagination"
        },
        {
          "name": "limit",
          "type": "integer",
          "default": 12,
          "description": "Number of posts per page (1-50)"
        },
        {
          "name": "sort",
          "type": "string",
          "default": "recommended",
          "description": "Sort order (recommended, newest, most_viewed)"
        },
        {
          "name": "tag",
          "type": "string",
          "default": "",
          "description": "Filter by tag slug"
        }
      ],
      "description": "Returns a paginated list of published articles with filtering and sorting"
    },
    {
      "endpoint": "/api/site-info/",
      "method": "GET",
      "parameters": [],
      "description": "Returns site statistics including last post, total views, total posts, and total authors"
    },
    {
      "endpoint": "/api/qr-code/",
      "method": "GET",
      "parameters": [
        {
          "name": "url",
          "type": "string",
          "required": true,
          "description": "URL to encode in QR code"
        }
      ],
      "description": "Generates a QR code for the provided URL"
    },
    {
      "endpoint": "/api/compress-image/",
      "method": "POST",
      "description": "Compresses an uploaded image with specified quality and format, returning the image file.",
      "authentication": "Required (Django session or token)",
      "parameters": [
        {
          "name": "image",
          "type": "file",
          "required": true,
          "description": "Image file to compress (jpg, jpeg, png, webp)"
        },
        {
          "name": "quality",
          "type": "integer",
          "required": false,
          "description": "Compression quality (0-10, default: 0)"
        },
        {
          "name": "format",
          "type": "string",
          "required": false,
          "description": "Output format (jpg, png, webp, default: same as input)"
        }
      ],
      "example_response": "Binary image file"
    }
  ]
}
 */
const hycom = {
  url: "https://hycom.ir",
  topAuthor: "/api/top-authors",
  authorPosts: "/api/author-posts",
  tags: "/api/tags",
  explore: "/api/explore",
  siteInformation: "/api/site-info",
  lastPosts: "/api/last-posts",
  searchPosts: "/api/search-posts",
  qrCode: "/api/qr-code"
};

/**
 * Returns top authors sorted by total views.
 * 
 * @param limit Number of authors to return. (1-50)
 */
async function topAuthors(limit: number = 10) {
  try {
    const response = await fetch(hycom.url + hycom.topAuthor + `?limit=${limit}`);
    const data: TopAuthorResponse = await response.json();

    return data.data.map(a => {
      a.tag = a.display_name + "-" + a.profile_id
      return a;
    });
  } catch {
    return null;
  }
}

/**
 * Returns published posts by a specific author.
 * 
 * @param tag Author display name and profile ID. (format: name-code)
 * @param limit Number of authors to return. (1-50)
 * @param sort Sort order. (newest, most_viewed)
 */
async function authorPosts(tag: string, limit: number = 10, sort: SortParametr = "newest") {
  try {
    const response = await fetch(hycom.url + hycom.authorPosts + `/${tag}?limit=${limit}&sort=${sort}`);
    const data: AuthorPostsResponse = await response.json();

    return data.data;
  } catch {
    return null;
  }
}

/**
 * Returns tags with their post counts.
 * 
 * @param limit Number of tags to return. (1-100)
 */
async function getTags(limit: number = 20) {
  try {
    const response = await fetch(hycom.url + hycom.tags + `?limit=${limit}`);
    const data: TagsResponse = await response.json();

    return data.data;
  } catch {
    return null;
  }
}

/**
 * Returns a paginated list of published articles with filtering and sorting.
 * 
 * @param page Page number for pagination.
 * @param limit Number of posts per page. (1-50)
 * @param search Search query for title, tags, or author.
 * @param sort Sort order. (recommended, newest, most_viewed)
 * @param tag Filter by tag slug.
 */
async function explore(search: string = "", page: number = 1, limit: number = 12, sort: ExploreSortParametr = "newest", tag: string = "") {
  try {
    const response = await fetch(hycom.url + hycom.explore + `?search=${search}&page=${page}&limit=${limit}&sort=${sort}&tag=${tag}`);
    const data: ExploreResponse = await response.json();

    return data.data;
  } catch {
    return null;
  }
}

/**
 * Returns site statistics including last post, total views, total posts, and total authors.
 */
async function websiteInformation() {
  try {
    const now = Date.now();
    const response = await fetch(hycom.url + hycom.siteInformation);
    const data: WebSiteInformationResponse = await response.json();
    const siteInfo = data.data as any as SiteInformation;

    siteInfo.ping = Date.now() - now;
    siteInfo.last_post = (await lastPosts(1))![0];
    return siteInfo;
  } catch {
    return null;
  }
}

/**
 * Returns the most recent published posts.
 * 
 * @param limit Number of posts to return. (1-50)
 */
async function lastPosts(limit: number = 10) {
  try {
    const response = await fetch(hycom.url + hycom.explore + `?page=1&limit=${limit}&sort=newest`);
    const data: ExploreResponse = await response.json();

    return data.data;
  } catch {
    return null;
  }
}

/**
 * Generates a QR code for the provided URL.
 * 
 * @param url URL to encode in QR code.
 */
async function qrCode(url: string) {
  try {
    const response = await fetch(hycom.url + hycom.qrCode + `?url=${url}`);
    const data: QrCodeResponse = await response.json();

    return Buffer.from(
      data.data.qr_code
        .replace(/^data:image\/png;base64,/, ''),
      "base64"
    );
  } catch {
    return null;
  }
}

export {
  topAuthors,
  authorPosts,
  getTags,
  explore,
  websiteInformation,
  lastPosts,
  qrCode
}
/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */