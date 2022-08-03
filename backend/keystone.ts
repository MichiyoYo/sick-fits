import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost:27017/keystone-sick-fits';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET,
};

export default config({
  // ts-ignore
  server: {
    cors: {
      origin: process.env.FRONTEND_URL,
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
  },
  lists: createSchema({
    // schema items go here
  }),
  ui: {
    // TODO change this for roles
    isAccessControlEnabled: () => true,
  },
  // TODO add session values here
});
