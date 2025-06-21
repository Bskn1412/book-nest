// const express = require("express");
// const app = express();
// const {MongoClient} = require("mongodb")
// const client = new MongoClient("mongodb://localhost:27017/");
// try {
//     client.connect();
//     console.log("Connected")
// }
// catch(e){
//     console.log("Error")
// }

// app.get("/", async (req, res) => {
//     const db = 'bookstore';
//     const collection = 'books';
  
//     try {
      
//       const insertResult = await collection.insertOne({name: "", age: 30, city: "New York"});
//       console.log("Data inserted:", insertResult);

//     //   const readData = await collection.find().toArray();
//     //   console.log("Read data:", readData);
        
//     //   const up = await collection.updateOne({"name": "John Doe"}, {$set: {"age": 31}})
//     //   console.log("Updated data:", up);

//     //   const del = await collection.deleteMany({"name": "John Doe", "age":30})
//     //   console.log("Deleted data:", del);

//     //  res.send("<h1>Insert Success</h1><br> <h1>Read Success</h1><br> <h1>Update Success</h1><br> <h1>Delete Success</h1><br>");

//     } 
//     catch (error) {
//         console.log(error);
//     }
    
//   });
//   app.listen(3000, () => {
//     console.log("Server running on http://localhost:3000");
//   });
  

