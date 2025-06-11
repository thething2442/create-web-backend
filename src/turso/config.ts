import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import 'dotenv/config'
const client = createClient({ 
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_TOKEN!
});

const db = drizzle({ client });

export default db