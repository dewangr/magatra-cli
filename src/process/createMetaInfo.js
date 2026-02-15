import { siteUrl } from "@/types/consts";
import { useHead } from "@unhead/vue";

export function createMetaInfo({title, description, imagePath}) {
const imageUrl = new URL(`${siteUrl}/public/photos/metaInfo/${imagePath}`, import.meta.url).href;
  useHead({
    title: title,
    meta: [
      { property: "og:title", content: title, key: "og:title" },
      { property: "og:description", content: description, key: "og:description" },
      { property: "og:image", content: imageUrl, key: "og:image" }
    ]
  },{ 
    tagPriority: 'critical' 
  });
}