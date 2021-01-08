export const ROUTES = [
  { path: '/dashboard', title: 'Home', icon: 'home', children: null },
  { path: 'profile', title: 'User Profile', icon: 'person', children: null },
  {
    path: '#component', id: 'component', title: 'Component', icon: 'apps', children: [
      { path: 'components/price-table', title: 'Price Table', icon: 'PT' },
      { path: 'components/panels', title: 'Panels', icon: 'P' },
      { path: 'components/wizard', title: 'Wizard', icon: 'W' },
    ]
  },
  {
    path: '#member-list',id: 'member-list' ,title: 'Members', icon: 'group', children: [
      { path: 'members', title: 'List of Members', icon: 'PT' },
      { path: 'members/publications', title: 'publications', icon: 'PT' },
      { path: 'members/tools', title: 'tools', icon: 'PT' },
      { path: 'members/events', title: 'events', icon: 'PT' },

    ],
  },
    { path: 'publications', title: 'Publication', icon: 'bookmarks', children: null },
  { path: 'tools', title: 'Tools', icon: 'notifications', children: null },
  { path: 'events', title: 'Events', icon: 'event', children: null },




];
