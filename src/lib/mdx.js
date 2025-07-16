import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const POSTS_PATH = path.join(process.cwd(), 'posts');

export async function getAllPosts() {
  const files = await fs.readdir(POSTS_PATH);
  const posts = await Promise.all(
    files.filter(f => f.endsWith('.mdx')).map(async (filename) => {
      const filePath = path.join(POSTS_PATH, filename);
      const source = await fs.readFile(filePath, 'utf8');
      const { data } = matter(source);
      return {
        slug: filename.replace(/\.mdx$/, ''),
        ...data,
      };
    })
  );
  // Ordenar por fecha descendente
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPostBySlug(slug) {
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = await fs.readFile(filePath, 'utf8');
  const { data, content } = matter(source);
  return { slug, ...data, content };
} 