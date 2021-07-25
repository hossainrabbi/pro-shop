import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Hossain',
    email: 'hossain@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Ashiq',
    email: 'ashiq@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
