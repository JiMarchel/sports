import 'dotenv/config';
import { drizzle } from 'drizzle-orm/bun-sql';
import pg from "pg"

if(!process.env.DATABASE_URL){
    throw new Error("DATABSE_URL is not defined")
}

export const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL
}) 

export const db = drizzle