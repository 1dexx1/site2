import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'polxr',
  description:
    'my website yay',
  href: 'https://polxxrity.xyz',
  author: 'polaar',
  member: "",
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  { href: '/', label: 'главная'},
  { href: '/about', label: 'о себе' },
  { href: '/blog', label: 'блог' },
  { href: '/tags', label: 'теги' },
  { href: '/work', label: 'проекты'},
  { href: '/authors', label: 'авторы' },
  { href: '/members', label: 'учасники'},
  // { href: '/links', label: 'ссылки'},
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/personwholovesflowers',
    label: 'GitHub',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
  Discord: 'lucide:circle-user',
}
