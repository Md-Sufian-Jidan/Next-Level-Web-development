import { Pool } from 'pg';
import config from '.';

export const pool = new Pool({
    connectionString: config.connection_str
});

export const initDB = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(200) NOT NULL,
        email VARCHAR(200) UNIQUE NOT NULL,
        photo_url TEXT NOT NULL,
        is_admin BOOLEAN DEFAULT false,
        is_premium BOOLEAN DEFAULT false,
        biodata JSONB,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        )
        `);
};
// await pool.query(`
//     CREATE TABLE IF NOT EXISTS biodatas(
//     id SERIAL PRIMARY KEY,
//     user_id INT REFERENCES users(id) ON DELETE CASCADE,
//     )
//     `)
