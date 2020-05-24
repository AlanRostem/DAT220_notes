Transaction Management~

# Transaction Management

## The ACID Properties

- **Atomicity** − This property states that a transaction must be treated as an atomic
unit, that is, either all of its operations are executed or none. There must be no 
state in a database where a transaction is left partially completed. States should be
defined either before the execution of the transaction or after the execution/abortion/
failure of the transaction.

- **Consistency** − The database must remain in a consistent state after any 
transaction. No transaction should have any adverse effect on the data residing in the
 database. If the database was in a consistent state before the execution of a 
 transaction, it must remain consistent after the execution of the transaction as well.

- **Durability** − The database should be durable enough to hold all its latest updates
even if the system fails or restarts. If a transaction updates a chunk of data in a 
database and commits, then the database will hold the modified data. If a transaction
commits but the system fails before the data could be written on to the disk, then that
data will be updated once the system springs back into action.

- **Isolation** − In a database system where more than one transaction are being 
executed simultaneously and in parallel, the property of isolation states that all the
transactions will be carried out and executed as if it is the only transaction in the 
system. No transaction will affect the existence of any other transaction.

## Scheduling Transactions

- **Schedule**: A chronological execution sequence of a transaction is called a schedule.
 A schedule can have many transactions in it, each comprising of a number of 
 instructions/tasks.

- **Serial Schedule**: It is a schedule in which transactions are aligned in such a way
that one transaction is executed first. When the first transaction completes its cycle,
then the next transaction is executed. Transactions are ordered one after the other. 
This type of schedule is called a serial schedule, as transactions are executed in a 
serial manner.

- **Equivalent Schedule**: For any database state, the effect (on the set of objects in
the database) of executing the first schedule identical to the effect of executing the
second schedule.