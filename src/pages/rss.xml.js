import rss, { pagesGlobalRssItems } from "@astrojs/rss";

export async function GET(context) {
    return rss({
        title:'Astro Learner | Blog',
        description: 'My journey learning Astro',
        site: context.site,
        item: await pagesGlobalRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`,
    });
}