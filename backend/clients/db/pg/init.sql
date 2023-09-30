CREATE TABLE IF NOT EXISTS shopping_list (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    quantity INTEGER,
    purchased BOOLEAN
);
