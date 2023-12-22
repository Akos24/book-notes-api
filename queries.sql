-- Database setup
CREATE DATABASE your_database_name

-- Table setup
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    key VARCHAR(10), -- The key for Open Book Covers API
    value VARCHAR(40), -- The value for Open Book Covers API
    name TEXT -- The name of the book
)
-- Columns:
--   - key, value: Check out the Open Book Covers API Documentation https://openlibrary.org/dev/docs/api/covers
--   - name: The name of the book

-- Add values to the table
INSERT INTO books (id, key, value, name)
VALUES (1, "key", "value", "name_of_book")