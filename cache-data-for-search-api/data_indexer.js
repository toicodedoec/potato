const fs = require("fs");
const matter = require("gray-matter");
const path = require("path");
const yaml = require("js-yaml");

const postsDirectory = path.join(process.cwd(), "content/posts");

function fetchPostContent() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((it) => it.endsWith(".mdx"))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
        },
      });
      const matterData = matterResult.data;
      matterData.fullPath = fullPath;

      const slug = fileName.replace(/\.mdx$/, "");

      if (!matterData.slug) {
        matterData.slug = slug;
      }

      // Validate slug string
      if (matterData.slug !== slug) {
        throw new Error(
          "slug field not match with the path of its content source"
        );
      }

      return matterData;
    });
  // Sort posts by date
  postCache = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  return postCache;
}

fs.writeFile(
  "cache-data-for-search-api/data.ts",
  `export const notes = ${JSON.stringify(fetchPostContent())}`,
  { flag: "w" },
  (err) => {
    if (err) return console.log(err);
    console.log("Notes cached.");
  }
);