# MongoDB

- MongoDB is a source-available Cross-platform, document-oriented Database program classified as a NoSQL Database.
- Instead of using talbles with rigid rows and c like traditional Relational Databases, MongoDB stores data in highly fliexible, JSON like Documents called BSON (Binary JSON).

## SQL VS NoSQL

| **FEATURES**      | **RELATIONAL (SQL)**      | **NON-RELATIONAL (NOSQL)** |
|-------------------|---------------------------|------------------------------------------------|
|1. Data Format     | Tabular (Row and Column)  | Documents, Key-value,  Graph, Wide-column|
|2. Schema          | Rigid and Predefined      | Dynamic andn Flexible|
|3. Scaling         | Vertical (CPU/RAM)        | Horizontal (add more servers)|
|4. Transactions    | Strict ACID Compilance    | BASE properties (Eventual consistency)|
|5. Query Language  | Standardized SQL          | Custom APIs, JSON, or Unique Syntax|


## Syntax: 
1. To display all the availble databases.
```mongosh
show dbs
```
(OR)

```mongosh
show databases
```

2. To use particular Database
- Syntax
```mongosh
use <dbs-Name>
```

-Example:
```mongosh
use userdb
```

3. To display available collections (like Tables in SQL)
```mongosh
show collections
```

4. To display all the data in a table.
-  Basic Syntax:
```mongosh
db.<collection-name>.find()
```
- Example:
```mongosh
db.inventory.find()
```

