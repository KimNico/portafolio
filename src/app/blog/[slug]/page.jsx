import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const filePath = path.join(process.cwd(), 'posts', `${params.slug}.mdx`);
  try {
    const source = await fs.readFile(filePath, 'utf8');
    const { data } = matter(source);
    return {
      title: `${data.title} | Blog | Portafolio de Tu Nombre`,
      description: data.summary,
    };
  } catch {
    return { title: 'Post no encontrado' };
  }
}

export default async function BlogPostPage({ params }) {
  let PostMDX;
  try {
    PostMDX = (await import(`../../../../../posts/${params.slug}.mdx`)).default;
  } catch {
    return notFound();
  }
  return (
    <section className="py-12 max-w-2xl mx-auto">
      <article className="prose dark:prose-invert max-w-none">
        <PostMDX />
      </article>
      <p className="mt-8">
        <a href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">← Volver al blog</a>
      </p>
    </section>
  );
} 