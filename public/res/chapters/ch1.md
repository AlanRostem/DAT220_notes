Basics~
# Basics

Learn the basic concepts here. 

## Keywords
  
**Data Model**: A collection of concepts describing data. It is an abstract model that organizes
elements of data and standardizes how they relate to one another and to the properties of 
real-world entities.

**Schema**:  A description of a collection of data. In a database management system, this is a blueprint 
of how the database is constructed with a set of formulas.

**Relational Model**: A representation of how data is stored in relational databases. A relational 
database stores data in form of tables. Every relation has a schema which describes the columns. 

**Transaction**: A single unit of logic or task, sometimes made up of multiple operations. Any logical 
calculation done in a consistent mode in a database is known as a transaction. A transaction in a 
database must maintain atomicity, consistency, isolation and durability: 

**Atomicity**: This property states that a transaction must be treated as an atomic unit, that is, 
either all of its operations are executed or none. There must be no state in a database where a 
transaction is left partially completed. States should be defined either before the execution of 
the transaction or after the execution/abortion/failure of the transaction.

----

### Entity Relation Model

**Relationship**: A relationship type represents the association between entity types. A relationship is
uniquely identified by the participating entities.  

**Key constraints**: A limit on number of possible entities in a relationship based on the *key* attribute.

**Participation constraints**: A requirement for number of possible entities in a relationship.

**Weak entity**: Weak entity is an entity that depends on another entity. Weak entity doesn't have any 
key attribute of its own:

<img src="https://www.studytonight.com/dbms/images/weak-entity-example.jpg"></img>

**Aggregation**: A process when a relationship between two entities is treated as **one** entity: 

<img src="https://www.studytonight.com/dbms/images/aggregration.jpg"></img>


**Binary relationship**: Binary Relationship means a relation between two Entities. There exists more
variants of this type of relationship: one-to-one, one-to-many and many-to-many. 

**Recursive relationship**: When an entity is related to itself: 

<img src="https://www.studytonight.com/dbms/images/recursive-relationship.jpg"></img>