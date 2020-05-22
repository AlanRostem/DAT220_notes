DBMS Normalization~

# DBMS Normalization

## Functional Dependencies

A functional dependency is an integrity constraint. Let A, B, C, D and E be columns
of a table. 

A → B,    A → C,    A → D,    A → E

- It also follows that  A →BC  (or any other subset of ABCDE).
- This can be summarized as   A → BCDE.
- From our understanding of primary keys, A is a primary key. 

**Armstrong’s Axioms (X, Y, Z are sets of attributes)**:
- **Reflexivity**: If X ⊆ Y, then Y → X
- **Augmentation**: If X → Y, then XZ → YZ for any Z
- **Transitivity**: If X → Y and Y → Z, then X → Z
- These are sound and complete inference rules for FDs!
- They are applied repeatedly to infer F<sup>+</sup>

**Couple of additional rules (that follow from AA)**:
- __Union__: If X → Y and X → Z, then X → YZ
- __Decomposition__: If X → YZ, then X → Y and X → Z

## Decomposition

- Decomposition is the process of breaking down in parts or elements.

- It replaces a relation with a collection of smaller relations.

- It breaks the table into multiple tables in a database.

- It should always be lossless, because it confirms that the information in 
the original relation can be accurately reconstructed based on the decomposed relations.

- If there is no proper decomposition of the relation, then it may lead to problems like 
loss of information.
