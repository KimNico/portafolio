import { getAllPosts } from "@/lib/mdx";
import Card from "@/components/ui/Card";
import Link from "next/link";

export const metadata = {
  title: "Blog | Portafolio de Tu Nombre",
  description: "Artículos y publicaciones técnicas de Tu Nombre.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map(post => (
          <Card key={post.slug} className="flex flex-col h-full">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <span className="text-xs text-gray-400 mb-2">{post.date}</span>
            <p className="text-gray-600 dark:text-gray-300 mb-2 flex-1">{post.summary}</p>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 dark:text-blue-400 font-medium hover:underline mt-auto">Leer post</Link>
          </Card>
        ))}
      </div>
    </section>
  );
} 