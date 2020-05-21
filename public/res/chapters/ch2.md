Relational Database~

# Relational Database

### Integrity constraints

An integrity constraint is a condition that must be true for any instance of the database; e.g 
*domain constraints*.
- ICs are specified when a schema is defined
- ICs are checked when relations are modified 
 
## Keys

**Candidate Key**: A column, or set of columns, in a table that can uniquely identify any database 
record without referring to any other data within the record. A candidate key can be referred to as a 
*primary* key.

**Foreign key**: A column, or group of columns, that provides a link between data in two tables. It 
acts as a cross-reference between tables because it references the *primary key* of another table,
thereby establishing a link between them. 

## Referential Integrity

Referential integrity is a property of data stating that all its references are **valid**. It requires
that if a value of one attribute (column) of a relation (table) references a value of another attribute,
the reference value **must** exist. 

### Enforcing Referential Integrity

**Definition**: If a row with a reference to table A is created in table B, but the value is non-existent in table A, the
creation is rejected. 

Possible enforcements when deleting a row with reference to table A from table B:
- Delete all tuples in table A that refer to it.
- Disallow deletion of a tuple in table B that is referred to.
- Set the foreign key in table A to a default value (null or other valid flag value). 

## Logical DB Design

In logical database design any form of a **set** is considered a table (in SQL). This means a set of
**entities** is considered a table where the columns are the attributes. The same is applied to a set
of **relationships**; it becomes a table with **foreign keys** that describe the entity types related 
to each other along with data about the relationship. 

## Translating Weak Entity Sets

A weak entity set and the corresponding relationship are both translated into a table where
both are combined. Both the data about the weak entity and foreign keys that link it to the
corresponding table is set into one table. 

## ISA Hierarchies

An ISA (or is-a) hierarchy involves creating an entity set with base attributes that other different
entities inherit those attributes along with having additional ones based on their different
application (kind of like inheritance in Java). This is accomplished by having other weak entities 
containing the additional attributes or by a relationship table. 

## Views and Security

Views can be used to present necessary information (or a summary) while hiding details in underlying 
relations.  