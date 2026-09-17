# MongoDB

MongoDB is a source-available Cross-platform, document-oriented Database program classified as a NoSQL Database.
Instead of using talbles with rigid rows and c like traditional Relational Databases, MongoDB stores data in highly fliexible, JSON like Documents called BSON (Binary JSON).

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
```javascript
show dbs
```
(OR)

```javascript
show databases
```

2. To use particular Database
- Syntax
```javascript
use <database_Name>
```

-Example:
```javascript
use userdb
```

3. To display available collections (like ***Table*** in SQL)
```javascript
show collections
```

4. To display all the data in a table.
-  Basic Syntax:
```javascript
db.<collection_name>.find()
```
- Example:
```javascript
db.inventory.find()
```

5. To create a database: 
-  Basic Syntax:
```javascript
use <database_name>
```
- Example:
```javascript
use college
```

6. To create a collection (like ***Table*** in SQL):
-  Basic Syntax:
```javascript
db.createCollection(<collection_name>)
```
- Example:
```javascript
db.createCollection("admin")
```

7. To delete the collection:
-  Basic Syntax:
```javascript
db.<collection_name>.drop();
```
- Example:
```javascript
db.admin.drop();
```

8. To retrieve  Particular data with particular value from collection
-  Basic Syntax:
```javascript
db.<collection_name>.find(<Query>, <projection>)
```

**Query** - If the value is match that particular whole data will get as output.

**Projection** - What are the values we need from that whole data retrieved in the Query will give as output. 

Example:
```javascript
db.inventory.find({item: "pen"}, {quantity: 1, _id: False})

// Here, {quantity: 1} represent true value. We can say it true or 1
// Then in projection if we projection any key vale the _ObjectID: will display by default. That why I put _id: false or we say 0.
```

-  Basic Syntax:
```javascript
db.<collection_name>.findOne(<condition>)
```
- Example:
```javascript
db.inventory.findOne({name: "Sakthi"})
```

9. To insert a value into a collection.
-  Basic Syntax:
```javascript
db.<collection_name>.insertOne(<data>)
```
- Example:
```javascript
db.inventory.insertOne({name: "Sakthi"})
```

10. To insert many values into a collection.
-  Basic Syntax:
```javascript
db.<collection_name>.insertMany(<data>)
```
- Example:
```javascript
db.inventory.insertMany({name: "Sakthi"})
```


# MongoDB Query Operators

## `I` comparison operators

1. ### `$gt`
- **Input Type:** `{}` Object
```json
{ "price": { "$gt": 100 } }
```

2. ### `$gte`
- **Input Type:** `{}` Object
```json
{ "price": { "$gte": 100 } }
```

3. ### `$lt`
- **Input Type:** `{}` Object
```json
{ "price": { "$lt": 500 } }
```

4. ### `$lte`
- **Input Type:** `{}` Object
```json
{ "price": { "$lte": 500 } }
```

5. ### `$eq`
- **Input Type:** `{}` Object
```json
{ "status": { "$eq": "active" } }
```

6. ### `$ne`
- **Input Type:** `{}` Object
```json
{ "status": { "$ne": "archived" } }
```

---

## `II` Element Operators

1. ### `$exists`
- **Input Type:** `{}` Object
```json
{ "brand": { "$exists": true } }
```

2. ### `$type`
- **Input Type:** `{}` Object
```json
{ "price": { "$type": "number" } }
```

---

## `III` Logical Operators

1. ### `$and`
- **Input Type:** `[]` Array
```json
{ 
    "$and": [
        { "price": { "$gt": 100 } },
        { "status": "active" } 
    ]
 }
```

2. ### `$or`
- **Input Type:** `[]` Array
```json
{
    "$or": [ 
        { "category": "electronics" }, 
        { "status": "active" }
    ] 
}
```

3. ### `$nor`
- **Input Type:** `[]` Array
```json
{ 
    "$nor": [ 
        { "price": { "$gt": 100 } }, 
        { "status": "inactive" }
    ] 
}
```

4. ### `$not`
- **Input Type:** `{}` Object
```json
{ "price": { "$not": { "$gt": 100 } } }
```

# UPDATE Queries

**1. $set**
- Replaces the value of a field or creates it if missing.

```javascript
db.users.updateOne({ _id: 1 }, { $set: { status: "active" } });

// Output
// Before: { _id: 1 }
// After:  { _id: 1, status: "active" }

```

**2. $inc**
- Increases a number. 

```javascript
db.users.updateOne({ _id: 1 }, { $inc: { score: 20 } });

// Output
// Before: { _id: 1, score: 30 }
// After:  { _id: 1, score: 50 }

```
- Decreases a number.

```javascript
db.users.updateOne({ _id: 1 }, { $inc: { score: -10 } });

// Output
// Before: { _id: 1, score: 50 }
// After:  { _id: 1, score: 40 }

```

**3. $min**
- Updates the field **only** if the new value is lower than the current value.

```javascript
db.users.updateOne({ _id: 1 }, { $min: { score: 45 } });

// Output
// Before: { _id: 1, score: 50 }
// After:  { _id: 1, score: 45 } 

```

**4. $max**
- Updates the field **only** if the new value is higher than the current value.

```javascript
db.users.updateOne({ _id: 1 }, { $max: { score: 90 } });

// Output
// Before: { _id: 1, score: 50 }
// After:  { _id: 1, score: 90 }

```

**5. $unset**
- Completely deletes the key and its value from the document.

```javascript
db.users.updateOne({ _id: 1 }, { $unset: { tempKey: "" } });

// Output
// Before: { _id: 1, tempKey: "junk_data" }
// After:  { _id: 1 }

```

**6. $rename**
- Changes the field name itself, keeping the existing data intact.

```javascript
db.users.updateOne({ _id: 1 }, { $rename: { oldKey: "newKey" } });

// Output
// Before: { _id: 1, oldKey: "data" }
// After:  { _id: 1, newKey: "data" }

```

**7. $currentDate**
- Sets the field to the current ISODate timestamp.

```javascript
db.users.updateOne({ _id: 1 }, { $currentDate: { updatedAt: true } });

// Output
// Before: { _id: 1 }
// After:  { _id: 1, updatedAt: ISODate("2026-09-18T03:00:04.000Z") }

```

**8. $push**
- Adds an item to the end of an array. **Blindly allows duplicates.**

```javascript
db.users.updateOne({ _id: 1 }, { $push: { tags: "react" } });

// Output
// Before: { _id: 1, tags: ["react"] }
// After:  { _id: 1, tags: ["react", "react"] }

```

**9. $addToSet**
- Adds an item to an array **only** if it doesn't already exist. Prevents duplicates.

```javascript
db.users.updateOne({ _id: 1 }, { $addToSet: { tags: "react" } });

// Output
// Before: { _id: 1, tags: ["react"] }
// After:  { _id: 1, tags: ["react"] } 

```

**10. $each**
- Used inside `$push` or `$addToSet` to apply the operation to multiple items at once.

```javascript
db.users.updateOne({ _id: 1 }, { 
  $push: { tags: { $each: ["node", "mongo"] } } 
});

// Output
// Before: { _id: 1, tags: ["react"] }
// After:  { _id: 1, tags: ["react", "node", "mongo"] }

```

**11. $pull**
- Removes **all** instances of a specific value from an array.

```javascript
db.users.updateOne({ _id: 1 }, { $pull: { tags: "bug" } });

// Output
// Before: { _id: 1, tags: ["bug", "react", "bug"] }
// After:  { _id: 1, tags: ["react"] }

```

**12. $pullAll**
- Removes multiple exact values from an array in one single command.

```javascript
db.users.updateOne({ _id: 1 }, { $pullAll: { tags: ["bug", "error"] } });

// Output
// Before: { _id: 1, tags: ["bug", "react", "error"] }
// After:  { _id: 1, tags: ["react"] }

```

**13. upsert: true**
- An option object (3rd parameter). If it doesn't find the document matching the search query, it builds a new one using the query and the update fields.

```javascript
db.users.updateOne(
  { email: "new@user.com" }, 
  { $set: { role: "admin" } }, 
  { upsert: true }
);

// Output
// Before: Document doesn't exist in the database
// After:  { _id: ObjectId("..."), email: "new@user.com", role: "admin" }

```