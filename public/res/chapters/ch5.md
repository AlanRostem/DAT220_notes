Relational Calculus~

# Relational Calculus

### Symbols

- {<, ≤, =, ≠ >, ≥}
- 𝑎 ∈ 𝑅: a is in R
- ⋀ and
- ⋁ or
- ¬ not
- ∃ exists
- ∀ for all

## Tuple Relational Calculus (TRC)

Tuple Relational Calculus is a non-procedural query language unlike relational algebra. Tuple
Calculus provides only the description of the query but it does not provide the methods to solve it. 
Thus, it explains what to do but not how to do. In Tuple Calculus, a query is expressed as

    {t| P(t)}

where t = resulting tuples,
P(t) = known as Predicate and these are the conditions that are used to fetch t

Thus, it generates set of all tuples t, such that Predicate P(t) is true for t.

P(t) may have various conditions logically combined with OR (∨), AND (∧), NOT(¬).
It also uses quantifiers:
∃ t ∈ r (Q(t)) = "there exists" a tuple in t in relation r such that predicate Q(t) is true.
∀ t ∈ r (Q(t)) = Q(t) is true "for all" tuples in relation r.

## Domain Relational Calculus (DRC)

In domain relational calculus, filtering is done based on the domain of the attributes and not
based on the tuple values.

Syntax:
 
    { c1, c2, c3, ..., cn | F(c1, c2, c3, ... ,cn)}

where, c1, c2... etc represents domain of attributes(columns) and F defines the formula including 
the condition for fetching the data.

For example,

    {< name, age > | ∈ Student ∧ age > 17}

The above query will return the names and ages of the students in the table Student who are 
older than 17.

### DRC Formulas

...