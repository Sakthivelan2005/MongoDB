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

        // Inserting data
        const insert = await students.insertOne({name: "Sakthi", "Age": 21, course: "BCA"})
        console.log("Insert: ", insert)

        // Selecting the particular data using query and Projection
        const data = await students.find({name: "Sakthi"},{projection: {course:true, _id: false}}).toArray()

        //Displaying the data
        console.log("Data: ", data)
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