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
  POSTS_PER_PAGE: 5,
  SITEURL: 'https://site2-weld-eight.vercel.app',
}

export const NAV_LINKS: Link[] = [
  { href: '/', label: 'главная'},
  { href: '/about', label: 'о себе' },
  { href: '/blog', label: 'блог' },
  { href: '/tags', label: 'теги' },
  { href: '/work', label: 'проекты'},
  { href: '/authors', label: 'авторы' },
  { href: '/members', label: 'учасники'},
]

export const SOCIAL_LINKS: Link[] = [

]
