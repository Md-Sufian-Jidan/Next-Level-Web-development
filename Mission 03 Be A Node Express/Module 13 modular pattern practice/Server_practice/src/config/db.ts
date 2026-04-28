import { Pool } from 'pg';
import config from '.';

export const pool = new Pool({
    connectionString: config.connection_string
});

const initDB = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS express_users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(200) NOT NULL,
        email VARCHAR(200) UNIQUE NOT NULL,
        photo_url TEXT NOT NULL,
        is_admin BOOLEAN DEFAULT false,
        is_premium BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        )
        `)
};

export default initDB;