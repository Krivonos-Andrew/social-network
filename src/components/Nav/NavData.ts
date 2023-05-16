interface links {
  id: number,
  name: string,
  path: string
}

export const LinkList: links[] = [
  {id: 0, name: 'Home', path: '/'},
  {id: 1, name: 'Profile', path: '/profile'},
  {id: 2, name: 'Messages', path: '/dialogs'},
  {id: 3, name: 'News', path: '/news'},
  {id: 4, name: 'Music', path: '/music'},
  {id: 5, name: 'Settings', path: '/settings'}
]
