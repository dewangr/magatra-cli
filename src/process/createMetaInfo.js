import { useHead } from "@unhead/vue";

export function createMetaInfo({title, description, imagePath}) {
const imageUrl = new URL(`../assets/photo/${imagePath}`, import.meta.url).href;
  useHead({
    title: title,
    meta: [
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: imageUrl },
      { name: "twitter:card", content: "summary_large_image" }
    ]
  });
}