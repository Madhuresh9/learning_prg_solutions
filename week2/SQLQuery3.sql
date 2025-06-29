DROP PROCEDURE IF EXISTS GetEmployeeCountByDepartment;
DROP TABLE IF EXISTS Employees;
DROP TABLE IF EXISTS Departments;

CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName NVARCHAR(100)
);

CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName NVARCHAR(50),
    LastName NVARCHAR(50),
    DepartmentID INT,
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);

INSERT INTO Departments (DepartmentID, DepartmentName)
VALUES (1, 'HR'), (2, 'IT'), (3, 'Finance');

INSERT INTO Employees (EmployeeID, FirstName, LastName, DepartmentID)
VALUES
(1, 'Alice', 'Smith', 2),
(2, 'Bob', 'Johnson', 2),
(3, 'Charlie', 'Williams', 2),
(4, 'Diana', 'Brown', 1),
(5, 'Ethan', 'Jones', 3);

Go
CREATE PROCEDURE GetEmployeeCountByDepartment
    @deptID INT
AS
BEGIN
    SELECT COUNT(*) AS EmployeeCount
    FROM Employees
    WHERE DepartmentID = @deptID;
END;

Go
EXEC GetEmployeeCountByDepartment @deptID = 2;
