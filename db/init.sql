CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25),
    price INT,
    img TEXT
);

INSERT INTO products (name, price, img)
VALUES
('EricName1', 12, 'Sample image text'),
('JordanName2', 22, 'Sample image text 2'),
('DerekName3', 12, 'Sample image text 3'),
('KennyName4', 12, 'Sample image text 4');

INSERT INTO products (name, price, img)
VALUES
($1, $2, $3);

UPDATE products
SET name = $1,
price = $2,
img = $3
WHERE 
id = $4;