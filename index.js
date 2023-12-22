import 'dotenv/config'
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const API_URL = "https://covers.openlibrary.org/b/";

const db = new pg.Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});
db.connect();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    const result = await db.query("SELECT * FROM books");
    const books = result.rows;
    res.render("index.ejs", { books: books, API_URL: API_URL });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
});