Normal Forms~

**Important definitions**

- Prime Attribute: Key attribute (like candidate/primary keys).

# Normal Forms

Each normal form expects you to follow the rules of the **previous** normal form.
This means 3NF follows the rules of 2NF, which in turn follows 1NF. 

## 1NF

The first normal forms expects you to follow a few simple rules: 

- **Rule 1**: Single-Valued Attributes - Each column of your table should be single valued which means they should not 
contain multiple values (like sets or lists).

- **Rule 2**: Attribute domain shouldn't change - In each column the values stored
must be of the same type. 

- **Rule 3**: Unique Name for Attributes - Each column should have a unique name.

- **Rule 4**: Order doesn't matter - The order of tuple storage shouldn't matter
for obvious reasons. 

## 2NF

The second normal form expects you to not include any *Partial Dependency*.

**Partial Dependency**: Partial Dependency occurs when a non-prime attribute is
 functionally dependent on part of a candidate key.
                        
Example:

This table

    score_id    student_id  subject_id  marks   teacher
    1           10          1           70      Java Teacher
    2           10          2           50      C++ Teacher
    3           11          1           80      C++ Teacher
    
could just be

    score_id    student_id  subject_id  marks   
    1           10          1           70      
    2           10          2           50      
    3           11          1           80      
    
while adding another table 

    subject_id  subject_name    teacher
    1           Java            Java Teacher
    2           C++             C++ Teacher
    
## 3NF

A third normal form table is a 2NF table with no *transitive dependency*.

**Transitive Dependency**: When a non-prime attribute depends on other non-prime 
attributes rather than depending upon the prime attributes or primary key.

X is not a proper subset of any key

- There exists a chain where K → X → A, (X,A) stored redundantly

- E.g., (ssn → rating → hourly_wage)

... We actually want K → (X,A)

Example:

Given the columns in a table

    Ename Ssn Bdate Addr Dno Dname Dmgr
    
we can split the columns into two tables

    Ename Ssn Bdate Addr Dno 
    
    Dno Dname Dmgr
    
where `Dno` is a foreign key between the tables

## BCNF

A Boyce-Codd Normal Form table requires that for any dependency  A → B, A should 
be a *super key*.

In simple words, it means, that for a dependency A → B, A cannot be a non-prime 
attribute (value that isn't a key), if B is a prime attribute.

This means a table like 

    student_id	subject	    professor
    101	        Java	    P.Java
    
is not valid since `subject` and `professor` should be a part of another table. 