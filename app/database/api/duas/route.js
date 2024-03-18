import path from 'path';
import { open } from "sqlite";
import sqlite3 from "sqlite3";

let db = null;
const dbFilePath = path.join(process.cwd(), 'app', 'database', 'dua_main.sqlite');

export async function GET(req, res) {
  try {
    
    if (!db) {
      db = await open({
        filename: dbFilePath, 
        driver: sqlite3.Database,
      });
    }

    const duas = await db.all("SELECT * FROM dua");
  
    return new Response(JSON.stringify(duas), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    console.error("Error during database operation:", error);

    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}

