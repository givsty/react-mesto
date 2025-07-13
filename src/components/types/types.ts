export interface Places {
  createdAt: string,
  likes: Likes[],
  link: string,
  name: string,
  owner: Likes[],
  _id: string
}

export interface Likes {
  about: string,
  avatar: string
  cohort: string,
  name: string,
  _id: string
}