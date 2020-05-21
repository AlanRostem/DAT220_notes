SQL Cheat sheet~

# SQL Cheat sheet

```sql

```

### Table creation

```sql
CREATE TABLE Students
    (sid: char(20),
    name: char(20),
    login: char(10),
    age: int,
    gpa: real);
```

### Table Deletion

```sql
DROP TABLE Students;
```

### Table Updating

```sql
ALTER TABLE Students
    ADD COLUMN firstYear: int;
```

### Tuple Insertion 

```sql
INSERT INTO Students (sid, name, login, age, gpa)
VALUES (53688, "Smith", "smith@ee", 18, 3.2);
```

### Conditional Tuple Deletion


```sql
DELETE FROM Students
WHERE name = "Smith";
```

### Referential Integrity

```sql
CREATE TABLE Enrolled
    (sid CHAR(20),
    cid CHAR(20),
    grade CHAR(2),
    PRIMARY KEY (sid,cid),
    FOREIGN KEY (sid)
    REFERENCES Students
        ON DELETE CASCADE
        ON UPDATE SET DEFAULT) -- What occurs when the tuple is altered or deleted
```

### Weak Entities

This entity is also a relationship to Employees and gets deleted when a tuple from Employees is deleted.

```sql
CREATE TABLE Dep_Policy (
    pname CHAR(20),
    age INTEGER,
    cost REAL,
    ssn CHAR(11) NOT NULL,
    PRIMARY KEY (pname, ssn),
    FOREIGN KEY (ssn) REFERENCES Employees,
        ON DELETE CASCADE);
```

### Views

In SQL, a view is a virtual table based on the result-set of an SQL statement.

```sql
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

### Range Variables

A range variable is just a shortened name for a reference to a table. 

```sql
SELECT S.sname
FROM Sailors S, Reserves R
WHERE S.sid=R.sid AND bid=103;
```

### Union Operator

The `UNION` operator is used to combine the result set of two or more SELECT statements.

- Each SELECT statement within UNION must have the same number of columns
- The columns must also have similar data types
- The columns in each SELECT statement must also be in the same order

```sql
SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;
```

#### `UNION ALL` allows duplicate values: 

```sql
SELECT column_name(s) FROM table1
UNION ALL
SELECT column_name(s) FROM table2;
```

