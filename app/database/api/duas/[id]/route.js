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

    const totalUrl = req.url.split("/");
    const subCategoryId = totalUrl[totalUrl.length - 1];

    const duas = await db.all("SELECT * FROM dua WHERE cat_id = ?", subCategoryId);


    if (!duas) {
      return new Response(JSON.stringify({ error: "Sub Categories not found" }), {
        headers: { "Content-Type": "application/json" },
        status: 404,
      });
    }

    
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
