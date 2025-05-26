export type SortParametr = "newest" | "most_viewed";
export type ExploreSortParametr = "recommended" | SortParametr;

export interface Author {
    tag: string;
    display_name: string;
    profile_id: string;
    url: string;
    article_count: number;
    total_views: number;
    profile_image: string;
}
export interface TopAuthorResponse {
    success: boolean;
    data: Author[];
}

export interface Post {
    url: string;
    title: string;
    summary: string;
    image: string;
    view_count: number;
    like_count: number;
    created_at: string;
    tags: string[];
    reading_time: number;
}
export interface AuthorPostsResponse {
    success: boolean;
    data: Post[];
}

export interface Tag {
    name: string;
    slug: string;
    post_count: number;
}
export interface TagsResponse {
    success: boolean;
    data: Tag[];
}

export interface ExploreResponse {
    success: boolean;
    data: Post[];
}

export interface SiteInformation {
    last_post: Post,
    ping: number;
    total_tags: number;
    total_views: number;
    total_posts: number;
    total_authors: number;
}
export interface WebSiteInformationResponse {
    success: boolean;
    data: {
        total_tags: number;
        total_views: number;
        total_posts: number;
        total_authors: number;
    }
}

export interface QrCodeResponse {
    success: boolean;
    data: {
        qr_code: string;
    }
}
/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */