export const SITE_ORIGIN = 'https://seasidefrance.com';

type BreadcrumbItem = {
  name: string;
  path: string;
};

export const toAbsoluteUrl = (path: string) => new URL(path, SITE_ORIGIN).toString();

export const buildBreadcrumbStructuredData = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: toAbsoluteUrl(item.path),
  })),
});
