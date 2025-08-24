// app/tag/[slug]/page.js
import { supabase } from "../../../lib/supabaseClient";
import ContentFeed from "../../../components/Content";

// --- Generate static paths for all tag slugs ---
export async function generateStaticParams() {
  const { data, error } = await supabase.from("tags").select("slug");

  if (error) {
    console.error("Error fetching tags:", error);
    return [];
  }

  // Filter out null/invalid and force to string
  return (data || [])
    .filter((tag) => typeof tag.slug === "string" && tag.slug.trim() !== "")
    .map((tag) => ({ slug: String(tag.slug) }));
}

// --- Metadata for each tag page ---
export async function generateMetadata({ params }) {
  const { slug } = params;

  const { data: tag } = await supabase
    .from("tags")
    .select("name")
    .eq("slug", slug)
    .single();

  return {
    title: tag ? `Posts tagged ${tag.name}` : "Tag",
    description: tag
      ? `Posts categorized under ${tag.name}`
      : "Tagged posts",
  };
}

// --- Actual page for a tag ---
export default async function TagPage({ params }) {
  const { slug } = params;

  // 1. look up the tag by slug
  const { data: tag, error: tagError } = await supabase
    .from("tags")
    .select("id, name")
    .eq("slug", slug)
    .single();

  if (tagError || !tag) {
    console.error("Error fetching tag:", tagError);
    return <p>Tag not found.</p>;
  }

  // 2. fetch posts with matching tag_id
  const { data: posts, error: postsError } = await supabase
    .from("content")
    .select("*, tags(name, hyperlink)")
    .eq("tag_id", tag.id)
    .order("date", { ascending: false });

  if (postsError) {
    console.error("Error fetching posts:", postsError);
    return <p>Error loading posts for {tag.name}.</p>;
  }

  return (
    <section style={{ maxWidth: "700px", margin: "auto" }}>
      <h1>Posts tagged “{tag.name}”</h1>
      {posts.length === 0 ? (
        <p>No posts found for this tag.</p>
      ) : (
        <ContentFeed contentItems={posts} filterTagId={tag.id} />
      )}
    </section>
  );
}

