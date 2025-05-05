import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

// Define a type for the expected frontmatter data
interface PostFrontmatter {
  date: string;
  title: string;
  author?: string; // Optional author
  image?: string;  // Optional image
  tags?: string[]; // Optional tags
  summary?: string; // Optional summary for the blog list page
}

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md')) // Ensure only markdown files are processed
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id, using the PostFrontmatter type
      return {
        id,
        ...(matterResult.data as PostFrontmatter), // Use the defined interface
      };
    });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    // Ensure date exists before comparing
    if (a.date && b.date) {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    }
    return 0; // Keep order if dates are missing
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md')) // Ensure only markdown files are processed
    .map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.md$/, ''), // Use 'slug' to match the dynamic route parameter
        },
      };
    });
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  let fileContents;
  try {
    fileContents = fs.readFileSync(fullPath, 'utf8');
  } catch (err) {
    console.error(`Error reading post file: ${fullPath}`, err);
    return null;
  }

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml, using the PostFrontmatter type
  return {
    slug,
    contentHtml,
    ...(matterResult.data as PostFrontmatter), // Use the defined interface
  };
}

