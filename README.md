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
- Replaces the value of a field or creates it if it is missing.

```javascript
await products.updateOne({ item: "pen" }, { $set: { price: 15 } });

// Before: { item: "pen" }
// After:  { item: "pen", price: 15 }

```

**2. $inc**
- Increases a number. 

```javascript
await products.updateOne({ item: "pen" }, { $inc: { qty: 20 } });

// Before: { item: "pen", qty: 30 }
// After:  { item: "pen", qty: 50 }

```

- Decreases a number. 

```javascript
await products.updateOne({ item: "pen" }, { $inc: { qty: 10 } });

// Before: { item: "pen", qty: 50 }
// After:  { item: "pen", qty: 40 }

```

**3. $mul**
- Multiplies a number by a specific value.

```javascript
await products.updateOne({ item: "notebook" }, { $mul: { price: 2 } });

// Before: { item: "notebook", price: 10 }
// After:  { item: "notebook", price: 20 }

```

**4. $min**
- Updates the field **only** if the new value is smaller than the current value.

```javascript
await products.updateOne({ item: "mouse" }, { $min: { price: 600 } });

// Before: { item: "mouse", price: 800 }
// After:  { item: "mouse", price: 600 }

```

**5. $max**
- Updates the field **only** if the new value is greater than the current value.

```javascript
await products.updateOne({ item: "mouse" }, { $max: { price: 900 } });

// Before: { item: "mouse", price: 800 }
// After:  { item: "mouse", price: 900 }

```

**7. $rename**
- Changes the name of the field itself. The data stays the same.

```javascript
await products.updateOne({ item: "pencil" }, { $rename: { qty: "quantity" } });

// Before: { item: "pencil", qty: 10 }
// After:  { item: "pencil", quantity: 10 }

```

**8. $currentDate**
- Sets the field to the exact current date and time.

```javascript
await products.updateOne({ item: "laptop" }, { $currentDate: { updatedAt: true } });

// Before: { item: "laptop" }
// After:  { item: "laptop", updatedAt: ISODate("2026-09-18T03:20:00.000Z") }

```

**10. $addToSet**
- Adds an item to an array **only** if it is not already there. **No duplicates.**

```javascript
await products.updateOne({ item: "pen" }, { $addToSet: { tags: "school" } });

// Before: { item: "pen", tags: ["school"] }
// After:  { item: "pen", tags: ["school"] }

```

**11. $each**
- Used inside `$push` or `$addToSet` to add multiple items at the same time.

```javascript
await products.updateOne({ item: "pen" }, { 
  $addToSet: { tags: { $each: ["office", "new"] } } 
});

// Before: { item: "pen", tags: ["school"] }
// After:  { item: "pen", tags: ["school", "office", "new"] }

```

**9. $push**
- Adds an item to the end of an array. **Duplicates are allowed.**

```javascript
await products.updateOne({ item: "pen" }, { $push: { tags: "writing" } });

// Before: { item: "pen", tags: ["writing"] }
// After:  { item: "pen", tags: ["writing", "writing"] }

```

**12. $pop**
- Removes the first or last item from an array. `1` removes the last item. `-1` removes the first item.

```javascript
await products.updateOne({ item: "pen" }, { $pop: { tags: -1 } });

// Before: { item: "pen", tags: ["school", "office", "new"] }
// After:  { item: "pen", tags: ["office", "new"] }

```

**13. $pull**
- Removes **all** items in an array that match a specific value.

```javascript
await products.updateOne({ item: "notebook" }, { $pull: { tags: "paper" } });

// Before: { item: "notebook", tags: ["paper", "school", "paper"] }
// After:  { item: "notebook", tags: ["school"] }

```

**14. $pullAll**
- Removes multiple specific values from an array in one single step.

```javascript
await products.updateOne({ item: "laptop" }, { $pullAll: { tags: ["computer", "office"] } });

// Before: { item: "laptop", tags: ["computer", "gaming", "office"] }
// After:  { item: "laptop", tags: ["gaming"] }

```

**6. $unset**
- Completely removes a field and its value from the document.

```javascript
await products.updateOne({ item: "pen" }, { $unset: { category: "" } });

// Before: { item: "pen", category: "stationery" }
// After:  { item: "pen" }

```

**15. upsert: true**
- This is an option, not an operator. If the database does not find the item, it builds a brand new one using your search and update data.

```javascript
await products.updateOne(
  { item: "marker" }, 
  { $set: { price: 20 } }, 
  { upsert: true }
);

// Before: No "marker" item exists in the database.
// After:  { _id: ObjectId("..."), item: "marker", price: 20 }

```