import { getEntry } from 'astro:content'

export async function parseAuthors(authors: string[]) {
  if (!authors || authors.length === 0) return []

  const parseAuthor = async (id: string) => {
    try {
      const author = await getEntry('authors', id)
      return {
        id,
        name: author?.data?.name || id,
        avatar: author?.data?.avatar || '/static/logo.png',
        isRegistered: !!author,
      }
    } catch (error) {
      console.error(`Error fetching author with id ${id}:`, error)
      return {
        id,
        name: id,
        avatar: '/static/logo.png',
        isRegistered: false,
      }
    }
  }

  return await Promise.all(authors.map(parseAuthor))
}

export async function parseMembers(members: string[]) {
  if (!members || members.length === 0) return []

  const parseMembers = async (id: string) => {
    try {
      const member = await getEntry('members', id)
      return {
        id,
        name: member?.data?.name || id,
        avatar: member?.data?.avatar || '/static/logo.png',
        isRegistered: !!member,
      }
    } catch (error) {
      console.error(`Error fetching member with id ${id}:`, error)
      return {
        id,
        name: id,
        avatar: '/static/logo.png',
        isRegistered: false,
      }
    }
  }

  return await Promise.all(members.map(parseMembers))
}
