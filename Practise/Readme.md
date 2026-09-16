# Practised code:
```javascript
const {MongoClient} = require("mongodb")
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
    try {
        //Connnecting with mongoDB database
        await client.connect();
        console.log("Connected");

        // Database Creation
        const db = client.db("college");
        const students = await db.createCollection("student")

        // // Inserting data
        // const insert = await students.insertOne({name: "Sakthi", "Age": 21, course: "BCA"})
        // console.log("Insert: ", insert)

        // Inserting many data
        const student = [
            { name: "Sakthi", Age: 21, course: "BCA" },
            { name: "Priya", Age: 20, course: "BSc" },
            { name: "Rahul", Age: 22, course: "MCA" },
            { name: "Divya", Age: 21, course: "BCA" },
            { name: "Karthik", Age: 23, course: "BTech" },
            { name: "Ananya", Age: 20, course: "BCA" },
            { name: "Vijay", Age: 22, course: "BCom" },
            { name: "Sneha", Age: 21, course: "BCA" }
        ];

        // const insert = await students.insertMany(student)
        // console.log("Inserted: ", insert)

        // // Selecting the particular data using query and Projection
        // const data = await students.find({name: "Sakthi"},{projection: {course:true, _id: false}}).toArray()
        // //Displaying the data
        // console.log("Data: ", data)

        // // Selecting single data
        //  const data1 = await students.findOne()
        //  console.log("Data1: ", data1)

        //Comparison operators

        //1. Greater than
        const gt = await students.find({
            Age: { $gt : 20 }
        }).toArray()

        console.log("greater Than 20: ", gt)

        //2. Greater than or equal
        const gte = await students.find({
            Age: { $gte : 20 }
        }).toArray()

        console.log("greater Than or equal to 20: ", gte)

        //3. less than
        const lt = await students.find({
            Age: { $lt : 22 }
        }).toArray()

        console.log("less Than 22: ", lt)

        //4. less than or equal 
        const lte = await students.find({
            Age: { $lte : 21 }
        }).toArray()

        console.log("less Than or equal to 21: ", lte)

        //5. Equal
        const eq = await students.find({
            Age: { $eq : 20 }
        }).toArray()

        console.log("Equal to 20:  ", eq)

        //6. Not Equal
        const ne = await students.find({
            Age: { $ne : 20 }
        }).toArray()

        console.log("Not Equal to 20: ", ne)

        
        
        // Elemental operators

        //1. Exists
        const Exists = await students.find({
            Age: { $exists : true }
        }).toArray()

        console.log("Exisits 'Age': ", Exists)

        //2. Type
        const type = await students.find({
            Age: { $type : "number" }
        }).toArray()

        console.log("Type Number: ", type)   

        

        // Logical Operators
        //1. and
        const and = await students.find({
            $and: [
                { Age : {
                    $gte: 20
                } },
                {
                    name: "Sakthi"
                }

            ]
        }).toArray()

        console.log("And: ", and)  
        //2. OR
        const Or = await students.find({
            $or: [
                { Age : {
                    $gte: 20
                } },
                {
                    name: "Sakthi"
                }

            ]
        }).toArray()

        console.log("OR: ", Or)  

        //3. Nor
        const nor = await students.find({
            $nor: [
                { Age : {
                    $lte: 21
                } },
                {
                    name: "Sakthi"
                }

            ]
        }).toArray()

        console.log("nor: ", nor)  

        //1. not
        const not = await students.find({
            Age : { 
                $not: {
                    $lte: 21
                } 
            }
        }).toArray()

        console.log("not: ", not)  
        
        

       
    } catch (error) {
        console.log(error)
    }
    finally{

        // Finally close the connection with MongoDB database.
        await client.close()
    }
}

// Runs the function
main()
```