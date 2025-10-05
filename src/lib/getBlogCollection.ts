import { getCollection } from "astro:content";

const collection = "blog";

export default async (url: string) => {
  const posts = await getCollection(collection);

  return posts.map((post) => ({
    ...post,
    data: {
      ...post.data,
      ogImage: post.data.heroImage || `${url}og/${collection}/${post.id}.png`,
    },
  }));
};
