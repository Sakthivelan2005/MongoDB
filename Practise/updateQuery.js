const {MongoClient} = require("mongodb")
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect()
        console.log("Connected..!")

        //Dropping the collection for testing as many times to avoid repetation
        const drop = await client.db("shopdb").collection("products").drop();
        console.log("Deleted collection: ", drop);

        //Creating database
        const db = await client.db("shopdb")

        //Creating collection (like Table in SQL)
        const products = await db.createCollection("products")
        
        const insert = await products.insertMany([
            {
                item: "pen",
            price: 20,
            qty: 50,
            category: "stationery",
            tags: ["school", "writing"]
        },
        {
            item: "pencil",
            qty: 10
        },
        {
            item: "notebook",
            price: 10,
            tags: ["paper", "school", "paper"]
        },
        {
            item: "mouse",
            price: 800
        },
        {
            item: "laptop",
            tags: ["computer", "gaming", "office"]
        }
    ]);
    
    console.log("Test data inserted successfully: ", insert);
    // const data = await products.find().toArray();
    // console.log("products data: ", data)
    
    // UPDATE QUERIES
    
        // 1. set
        const set = await products.updateOne(
            {
            item: "pen"
        },{
            $set: {
                category: "Writing Accessories"
            }
        })

        console.log("Set category from 'stationery' To 'Writing Accessories': ", set)
        
        // 2. increase
        const inc = await products.updateOne(
            {
            item: "pen"
        },{
            $inc: {
                price: 1
            }
        })

        console.log("Increased Age by 1': ", inc)
        
        // 2. decrease
        const decrease = await products.updateOne(
            {
            item: "pen"
        },{
            $inc: {
                price: -1
            }
        })

        console.log("Decreased Age by 1': ", decrease)
        
        // 3. multiply
        const mul = await products.updateOne(
            {
            item: "notebook"
        },{
            $mul: {
                price: 10
            }
        })

        console.log("Notebook price increase by X10: ", mul)
        
        // 4. minimum
        const min = await products.updateOne(
            {
            item: "pen"
        },{
            $min: {
                price: 15
            }
        })

        console.log("Minimum Price of pen should be 15: ", min)
        
        // 5. Maximum
        const max = await products.updateOne(
            {
            item: "notebook"
        },{
            $max: {
                price: 150
            }
        })

        console.log("Maximum Price of notebook should be 150: ", max)
       
        // 6. Rename
        const rename = await products.updateOne(
            {
            item: "pen"
        },{
            $rename: {
                qty: "quantity"
            }
        })

        console.log("Reanamed 'qty' to 'quantity': ", rename)

        //7. currentDate
         const currentDate = await products.updateOne(
            {
            item: "pen"
        },{
            $currentDate: {
                UpdatedAt: true
            }
        })
        
        console.log("Added Current Date: ", currentDate)
        
        //8. push
        const push = await products.updateOne(
            {
                item: "notebook"
            },{
                $push: {
                    tags: 'pen'
                }
            })
            
            console.log("Added 1 item in tags: ", push)
        
        //9. pop
        const pop = await products.updateOne(
            {
            item: "pen"
        },{
            $pop: {tags: -1}
        })

        console.log("removed many items from  the pen tags: ", pop)
                
         //10. pull
         const pull = await products.updateOne(
            {
            item: "notebook"
        },{
            $pull: {
               tags: 'paper'
            }
        })

        console.log("remove 1 item from tags: ", pull)

         //11. pullAll
         const pullAll = await products.updateOne(
            {
            item: "notebook"
        },{
            $pullAll: {
               tags: ["pen", "school"]
            }
        })

        console.log("remove many item from tags: ", pullAll)

         //12. addToSet
         const addToSet = await products.updateOne(
            {
            item: "pen"
        },{
            $addToSet: {
               tags:"refil"
            }
        })

        console.log("add many items to Noteook tags: ", addToSet)
                
         //13. addToSet + each
         const each = await products.updateOne(
            {
            item: "notebook"
        },{
            $addToSet: {
               tags: {
               $each: ["pen", "school", "school"]
                }
            }
        })

        console.log("add many items to Noteook tags by checking duplicates: ", each)
                
        
        // 14. unset
        const unset = await products.updateOne(
            {
                item: "pen"
            },
            {
                $unset:{
                    category: ""
                }
            }
        )           
        console.log("Removed 'category': ", unset)
            
        
        //15. upsert
        const upsert = await products.updateOne(
            {
            item: "usdutsdxtuxdc"
            },
            {
                $addToSet: {
                    tags: {
                    $each: ["pen", "school", "school"]
                    }
                }
            },
            {
                upsert: true
            }
        )
        
        console.log("Added unknown data: ", upsert)

        } catch (error) {
            console.log("ERROR: ", error)
        } finally{
            await client.close()
        }
    }

main()