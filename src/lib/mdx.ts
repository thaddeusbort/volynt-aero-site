import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import { serialize } from "next-mdx-remote/serialize";
// import { get } from "http";

const CONTENT_PATH = path.join(process.cwd(), "content/pages");

function getContent(filename:string) {
  const filePath = path.join(CONTENT_PATH, filename);
  const source = fs.readFileSync(filePath, "utf-8");

  const { content, data } = matter(source);
  // const mdxSource = await serialize(content, { scope: data });

  return {
    frontMatter: data,
  };
}

// export async function getConfig() {
//   return getContent("config.json");
// }

export async function getHomePageContent() {
  return getContent("home.mdx");
}

export async function getTeamPageContent() {
  return getContent("team.mdx");
}

export async function getSolutionsPageContent() {
  return getContent("solutions.mdx");
}

export async function getContactPageContent() {
  return getContent("contact.mdx");
}


