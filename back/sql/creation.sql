

DROP TABLE IF EXISTS favourites;
DROP TABLE IF EXISTS purchases;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS products;



CREATE EXTENSION IF NOT EXISTS "uuid-ossp";



CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL,
    password TEXT NOT NULL
);



CREATE TABLE IF NOT EXISTS products (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    brand TEXT NOT NULL,
    model TEXT NOT NULL,
    size TEXT NOT NULL,
    images TEXT NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    quantity NUMERIC NOT NULL
);


CREATE TABLE favourites (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    favourite_date DATE DEFAULT NOW(),
    user_id UUID REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
    product_id UUID REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE,
    UNIQUE (user_id, product_id)
);



CREATE TABLE IF NOT EXISTS purchases (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    purchase_date DATE DEFAULT NOW(),
    user_id uuid REFERENCES users(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    product_id uuid REFERENCES products(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);
