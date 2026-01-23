import { Pool } from "pg";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: "./src/.env" });

// Create PostgreSQL connection pool
const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
export default pool;