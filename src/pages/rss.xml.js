import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Ποιητικές σκέψεις',
    description: 'Κάποιες από τις σκέψεις μου...',
    site: 'https://poeticthoughts.gr',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>el</language>`,
  });
}
