**HyCom API**

A lightweight TypeScript client for the [HyCom](https://hycom.ir) public API. This package provides convenient functions to fetch authors, posts, tags, site statistics, and QR codes, handling all network requests internally.

---

## Features

* Fetch top authors by views
* Retrieve posts by author
* List popular tags
* Explore and search posts with pagination and sorting
* Get site-wide statistics
* Generate QR codes for any URL

---

## Installation

Install via npm or yarn:

```bash
npm install @persian-caesar/hycom-api
# or
yarn add @persian-caesar/hycom-api
```

---

## Quick Start

```ts
import {
  topAuthors,
  authorPosts,
  getTags,
  explore,
  websiteInformation,
  lastPosts,
  qrCode
} from '@persian-caesar/hycom-api';

async function main() {
  // 1. Get top 5 authors by view count
  const authors = await topAuthors(5);
  console.log('Top Authors:', authors);

  // 2. Retrieve latest posts by a specific author
  const postsByAuthor = await authorPosts('SobhanSRZA-1637', 10, 'newest');
  console.log("John Doe's Posts:", postsByAuthor);

  // 3. List 15 most popular tags
  const tags = await getTags(15);
  console.log('Tags:', tags);

  // 4. Explore posts: page 2, sorted by most viewed, filtered by 'javascript'
  const exploreResults = await explore('', 2, 12, 'most_viewed', 'javascript');
  console.log('Explore Results:', exploreResults);

  // 5. Fetch site information
  const siteInfo = await websiteInformation();
  console.log('Site Information:', siteInfo);

  // 6. Get the 8 most recent posts
  const recent = await lastPosts(8);
  console.log('Recent Posts:', recent);

  // 7. Generate a QR code for a URL
  const qrBuffer = await qrCode('https://example.com');
  // Save the QR buffer to disk in Node.js
  import * as fs from 'fs';
  fs.writeFileSync('qrcode.png', qrBuffer);
  console.log('QR code saved!');
}

main().catch(console.error);
```

## Usage in JavaScript

If you're using plain JavaScript (CommonJS), import and use the library like this:

```js
const {
  topAuthors,
  authorPosts,
  getTags,
  explore,
  websiteInformation,
  lastPosts,
  qrCode
} = require('@persian-caesar/hycom-api');

(async () => {
  try {
    // Example: fetch top 3 authors
    const authors = await topAuthors(3);
    console.log('Top 3 Authors:', authors);

    // Fetch posts by author 'jane-doe-456'
    const posts = await authorPosts('jane-doe-456', 5, 'most_viewed');
    console.log("Jane Doe's Posts:", posts);

    // List tags
    const tags = await getTags(10);
    console.log('Popular Tags:', tags);

    // Explore articles with pagination
    const exploreResults = await explore('javascript', 1, 8, 'recommended', 'nodejs');
    console.log('Explore Results:', exploreResults);

    // Site information
    const info = await websiteInformation();
    console.log('Site Info:', info);

    // Last posts
    const recent = await lastPosts(6);
    console.log('Recent Posts:', recent);

    // Generate QR code
    const qrBuffer = await qrCode('https://example.com');
    const fs = require('fs');
    fs.writeFileSync('qrcode_js.png', qrBuffer);
    console.log('QR code saved as qrcode_js.png');
  } catch (error) {
    console.error('Error:', error);
  }
})();
```

---

## API Reference

| Function                                       | Description                                                          | Parameters                                                                                                                                                                  | Returns           |
| ---------------------------------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `topAuthors(limit?)`                           | Fetches authors sorted by total views                                | `limit` (number, default `10`): number of authors to return (1–50)                                                                                                          | `Author[]`        |
| `authorPosts(tag, limit?, sort?)`              | Retrieves published posts by a given author                          | `tag` (string): display name and profile ID (e.g., "jane-doe-123")<br>`limit` (number, default `10`)<br>`sort` ("newest", "most\_viewed", default "newest")                 | `Post[]`          |
| `getTags(limit?)`                              | Returns tags with their associated post counts                       | `limit` (number, default `20`): number of tags (1–100)                                                                                                                      | `Tag[]`           |
| `explore(search?, page?, limit?, sort?, tag?)` | Paginated list of articles with filtering and sorting                | `search` (string)<br>`page` (number, default `1`)<br>`limit` (number, default `12`)<br>`sort` ("recommended", "newest", "most\_viewed", default "newest")<br>`tag` (string) | `Post[]`          |
| `websiteInformation()`                         | Site statistics including last post, total views, posts, and authors | `---`                                                                                                                                                                       | `SiteInformation` |
| `lastPosts(limit?)`                            | Fetches the most recent published posts                              | `limit` (number, default `10`)                                                                                                                                              | `Post[]`          |
| `qrCode(url)`                                  | Generates a QR code image buffer for the specified URL               | `url` (string): URL to encode                                                                                                                                               | `Buffer`          |

---

## Types

All response data types are defined in `types.ts`. Key interfaces include:

* `Author`: metadata about an author (name, profile ID, views)
* `Post`: article information (title, summary, image, stats)
* `Tag`: tag slug and post count
* `WebSiteInformation`: overall site metrics
* `QrCodeResponse`: raw Base64 QR code string

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

⌨️ Built with ❤️ by **Persian-Caesar**. Don’t forget to ⭐️ the repo!



## Contact
<div align="center">
  <a href="https://srza.ir" target="_blank">
   <img align="left" src="https://raw.githubusercontent.com/Sobhan-SRZA/Sobhan-SRZA/refs/heads/main/images/social.png" alt="Sobhan-SRZA social" width=400px>
  </a>

  <a href="https://t.me/d_opa_mine" target="_blank">
   <img alt="Telegram"
    src="https://raw.githubusercontent.com/Sobhan-SRZA/Sobhan-SRZA/refs/heads/main/images/telegram-ch.svg"
    height="30" />
  </a>

  <a href="https://t.me/Sobhan_SRZA" target="_blank">
   <img alt="Telegram"
    src="https://raw.githubusercontent.com/Sobhan-SRZA/Sobhan-SRZA/refs/heads/main/images/telegram-ac.svg"
    height="30" />
  </a>

  <a href="https://www.instagram.com/mr.sinre?igsh=cWk1aHdhaGRnOGg%3D&utm_source=qr" target="_blank">
   <img alt="Instagram"
    src="https://raw.githubusercontent.com/Sobhan-SRZA/Sobhan-SRZA/refs/heads/main/images/instagram.svg"
    height="30" />
  </a>

  <a href="https://www.twitch.tv/sobhan_srza" target="_blank">
   <img alt="Twitch"
    src="https://raw.githubusercontent.com/Sobhan-SRZA/Sobhan-SRZA/refs/heads/main/images/twitch.svg"
    height="30" />
  </a>

  <a href="https://www.youtube.com/@mr_sinre?app=desktop&sub_confirmation=1" target="_blank">
   <img alt="YouTube"
    src="https://raw.githubusercontent.com/Sobhan-SRZA/Sobhan-SRZA/refs/heads/main/images/youtube.svg"
    height="30" />
  </a>
  
  <a href="https://github.com/Sobhan-SRZA" target="_blank">
   <img alt="Github"
    src="https://raw.githubusercontent.com/Sobhan-SRZA/Sobhan-SRZA/refs/heads/main/images/github.svg"
    height="30" />
  </a>
  
  <p align="left">
   <a href="https://discord.gg/xh2S2h67UW" target="_blank">
    <img src="https://discord.com/api/guilds/1054814674979409940/widget.png?style=banner2" alt="pc-development.png">
   </a>
  </p>

  <p align="right">
   <a href="https://discord.gg/54zDNTAymF" target="_blank">
    <img src="https://discord.com/api/guilds/1181764925874507836/widget.png?style=banner2" alt="pc-club.png">
   </a>
  </p>

  <div align="center">
   <a href="https://discord.com/users/865630940361785345" target="_blank">
    <img alt="My Discord Account" src="https://discord.c99.nl/widget/theme-1/865630940361785345.png" />
   </a>
    <a href="https://discord.com/users/986314682547716117" target="_blank" align="right">
    <img alt="Team Discord Account" src="https://discord.c99.nl/widget/theme-1/986314682547716117.png" />
   </a>
  </div>

 </div>

</div>