export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'dexx b1o',
  DESCRIPTION:
    'тута моя биография вся.',
  EMAIL: '',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://site2-weld-eight.vercel.app',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'блог' },
  { href: '/about', label: 'о себе' },
  { href: '/authors', label: 'авторы' },
  { href: '/tags', label: 'теги' },
]

export const SOCIAL_LINKS: Link[] = [

]
