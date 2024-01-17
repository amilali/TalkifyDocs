import type { Config } from 'drizzle-kit';
import * as dotnev from 'dotenv';
dotnev.config({path: '.env'});

export default {
    driver: 'pg',
    schema: './src/lib/db/schema.ts',

    dbCredentials: {
        connectionString: process.env.NEXT_PUBLIC_DATABASE_URL!,
    },
} satisfies Config;