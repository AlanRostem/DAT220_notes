Relational Algebra~

# Relational Algebra

### Basic Operations

- Selection (σ) Selects a subset of rows from relation.
- Projection (π) Deletes unwanted columns from relation.
- Cross-product (×) Allows us to combine two relations.
- Set-difference (−) Tuples in reln. 1, but not in reln. 2.
- Union (∪) Tuples in reln.1 and in reln. 2.
- Intersection (∩) 
- Division (/)
- Natural Join (⋈)
- Rename (ρ)

### Projection

Returns a table with given columns 

π<sub>attr_1, ..., attr_n</sub>(Table)

### Selection

Just like `SELECT` in SQL. Returns a table with matching results

σ<sub>condition</sub>(Table)

Example usage: π<sub>sname, rating</sub>(σ<sub>rating > 8</sub>(S2))

### Union

Example usage:
 
π<sub>author</sub>(Books) ∪ π<sub>author</sub>(Articles)
    
Projects the names of the authors who have either written a book or an article or both.

### Intersection

A ∩ B
 
Returns the duplicate rows that appear in both A and B

### Set-Difference 

A - B 

Returns the tuples present in A and in both A and B but discards the ones in B not present in A. 

### Cross-product

A × B 

Returns all the attributes of A followed by each attribute of B. Each record of A pairs with every
record of B. 

### Renaming

ρ<sub>a</sub>(A)

Rename is a unary operation used for renaming attributes of a relation.

### Condition join

R⋈<sub>c</sub>S = σ<sub>c</sub>(R × S)

### Equi-Join

A special case of condition join where the condition *c* contains only equalities

S1 ⋈ <sub>sid</sub>R1

### Natural join

Natural join is a binary operator. Natural join between two or more relations will
result set of all combination of tuples where they have equal common attribute.

### Division

A / B 

Any columns from B present in A will return tuples next to it.  