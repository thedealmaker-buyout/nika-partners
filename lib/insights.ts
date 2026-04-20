import fs from "fs";
import path from "path";
import matter from "gray-matter";

const insightsDirectory = path.join(process.cwd(), "content/insights");

export interface InsightFrontmatter {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readingTime: string;
  slug: string;
  number?: number;
}

export interface Insight {
  slug: string;
  frontmatter: InsightFrontmatter;
  content: string;
}

export function getAllInsights(): Insight[] {
  const files = fs.readdirSync(insightsDirectory);
  const insights = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(insightsDirectory, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      const slug = file.replace(/\.mdx$/, "");
      return {
        slug,
        frontmatter: { ...data, slug } as InsightFrontmatter,
        content,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
  return insights;
}

export function getInsightBySlug(slug: string): Insight | undefined {
  const filePath = path.join(insightsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    slug,
    frontmatter: { ...data, slug } as InsightFrontmatter,
    content,
  };
}
