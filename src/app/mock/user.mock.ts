interface User {
  id: number;
  name: string;
  avatar: string;
  mail: string;
  role: string;
}

export const USER: User[] = [
  {
    id: 1,
    name: 'Anik Ishaan',
    avatar: '/assets/img/user/avatar2.png',
    mail: 'anikishaan@yahoo.com',
    role: 'Admin',
  },
  {
    id: 2,
    name: 'Ashrafunneca',
    avatar: '/assets/img/user/avatar1.png',
    mail: 'ashrafunneca@yahoo.com',
    role: 'editor',
  },
];
