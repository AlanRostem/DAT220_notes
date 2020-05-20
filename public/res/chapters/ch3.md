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

