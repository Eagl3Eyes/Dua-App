import path from 'path';
import { open } from "sqlite";
import sqlite3 from "sqlite3";


let db = null;

const dbFilePath = path.join(process.cwd(), 'app', 'database', 'dua_main.sqlite');

export async function GET(req, res) {
  try {
   
    if (!db) {
      
      db = await open({
        filename: dbFilePath, // Specify the database file path
        driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
      });
    }


    const subcategories = await db.all("SELECT * FROM sub_category");

    return new Response(JSON.stringify(subcategories), {
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

