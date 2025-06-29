DROP TABLE IF EXISTS Products;

CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(100),
    Price DECIMAL(10, 2)
);

INSERT INTO Products (ProductID, ProductName, Category, Price)
VALUES 
(1, 'Laptop', 'Electronics', 1200.00),
(2, 'Smartphone', 'Electronics', 900.00),
(3, 'Tablet', 'Electronics', 750.00),
(4, 'Headphones', 'Electronics', 200.00),
(5, 'T-Shirt', 'Clothing', 30.00),
(6, 'Jeans', 'Clothing', 60.00),
(7, 'Jacket', 'Clothing', 90.00),
(8, 'Novel', 'Books', 25.00),
(9, 'Dictionary', 'Books', 45.00),
(10, 'Comics', 'Books', 20.00),
(11, 'Notebook', 'Books', 35.00);

WITH RankedProducts AS (
    SELECT 
        ProductID,
        ProductName,
        Category,
        Price,
        ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum,
        RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS RankNum,
        DENSE_RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS DenseRankNum
    FROM Products
)
SELECT 
    ProductID,
    ProductName,
    Category,
    Price,
    RowNum,
    RankNum,
    DenseRankNum
FROM RankedProducts
WHERE RowNum <= 3 OR RankNum <= 3 OR DenseRankNum <= 3;
