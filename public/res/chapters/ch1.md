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

- Atomicity: This property states that a transaction must be treated as an atomic unit, that is, 
either all of its operations are executed or none. There must be no state in a database where a 
transaction is left partially completed. States should be defined either before the execution of 
the transaction or after the execution/abortion/failure of the transaction.

- Consistency: The database must remain in a consistent state after any transaction. No transaction 
should have any adverse effect on the data residing in the database. If the database was in a consistent
state before the execution of a transaction, it must remain consistent after the execution of the 
transaction as well.

- Durability: The database should be durable enough to hold all its latest updates even if the system
fails or restarts. If a transaction updates a chunk of data in a database and commits, then the database
will hold the modified data. If a transaction commits but the system fails before the data could be
written on to the disk, then that data will be updated once the system springs back into action.

- Isolation: In a database system where more than one transaction are being executed simultaneously and
in parallel, the property of isolation states that all the transactions will be carried out and executed
as if it is the only transaction in the system. No transaction will affect the existence of any other
transaction.