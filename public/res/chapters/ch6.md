Schema Refinement~

# Schema Refinement

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

### Armstrong’s Axioms

#### Reflexivity

Show: 
    
    if Y ⊆ X, then X → Y

Given 

    X = {S,N}, Y = {N}

Solution:

    Y ⊆ X: {N} ⊆ {S,N}
    
#### Augmentation

Show: 

    if X → Y, then XZ → YZ

Given 

    X = {S}, Y = {N}, Z = {L}

Solution:

    X → Y: {S} → {Ν}
    ⟹ XZ → YZ: {S,L} → {N,L}

#### Transitivity

Show: 

    if X → Y and Y → Z, then X → Z

Given 

    X = {S}, Y = {R}, Z = {W}

Solution:
    
    X → Y : {S} → {R}
    Y → Z : {R} → {W}
    ⟹ X → Z : {S} → {W}

## Decomposition

- Decomposition is the process of breaking down in parts or elements.

- It replaces a relation with a collection of smaller relations.

- It breaks the table into multiple tables in a database.

- It should always be lossless, because it confirms that the information in 
the original relation can be accurately reconstructed based on the decomposed relations.

- If there is no proper decomposition of the relation, then it may lead to problems like 
loss of information.

## Lossless-Join Decomposition

A lossless-join decomposition is a decomposition of a relation into relations, such 
that a natural join of the two smaller relations yields back the original relation.

π<sub>X</sub>(r) ⋈ π <sub>Y</sub> (r) = r 

## Dependency-Preserving Decomposition

If we decompose a relation R into relations R1 and R2, All dependencies of R
either must be a part of R1 or R2 or must be derivable from combination of 
FD’s of R1 and R2.

