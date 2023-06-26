-- ELIMINA LAS TABLAS SI EXISTIERAN

DROP TABLE IF EXISTS favourites;
DROP TABLE IF EXISTS purchases;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS products;

-- HABILITA LA EXTENSION UUID SI NO ESTUVIERA HABILITADA

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CREACION DE LA TABLA USERS

CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL,
    password TEXT NOT NULL
);

-- CREACION DE LA TABLA PRODUCTS

CREATE TABLE IF NOT EXISTS products (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    brand TEXT NOT NULL,
    model TEXT NOT NULL,
    size TEXT NOT NULL,
    images TEXT NOT NULL,
    price NUMERIC(10,2) NOT NULL
);

-- CREACION DE LA TABLA FAVOURIES

CREATE TABLE IF NOT EXISTS favourites (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    favourite_date DATE DEFAULT NOW(),
    user_id uuid REFERENCES users(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    product_id uuid REFERENCES products(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

-- CREACION DE LA TABLA PURCHASES

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
