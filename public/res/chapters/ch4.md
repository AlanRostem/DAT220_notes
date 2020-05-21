Relational Algebra Cheat Sheet~

# Relational Algebra Cheat Sheet

### Basic Operations

- Selection (σ) Selects a subset of rows from relation.
- Projection (π) Deletes unwanted columns from relation.
- Cross-product (×) Allows us to combine two relations.
- Set-difference (−) Tuples in reln. 1, but not in reln. 2.
- Union (∪) Tuples in reln.1 and in reln. 2.
- Intersection (∩) 
- Division (/)

### Projection

Returns a table with given columns 

π<sub>attr_1, ..., attr_n</sub>(Table)

### Selection

Just like `SELECT` in SQL. Returns a table with matching results

σ<sub>condition</sub>(Table)

Example usage: π<sub>sname, rating</sub>(σ<sub>rating > 8</sub>(S2))

### Union

A∪B where A and B are tables which satisfy the conditions: 

- A and B must have the same number of columns/attributes
- Attribute domains must be compatible
- Duplicate tuples are automatically deleted 

Example usage:
 
π<sub>author</sub>(Books) ∪ π<sub>author</sub>(Articles)
    
Projects the names of the authors who have either written a book or an article or both.

### Intersection

