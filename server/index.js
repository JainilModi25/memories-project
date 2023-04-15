import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from "./routes/posts.js"

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended:true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended:true }));
app.use(cors());
app.use('/posts', postRoutes);

const CONNECTION_URL =
  "mongodb+srv://jainilrmodi2013:250702Jai@cluster0.jbrnt0c.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> app.listen(PORT,()=> console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message))




// // const { MongoClient, ServerApiVersion } = require("mongodb");
// import { MongoClient, ServerApiVersion } from "mongodb"
// const uri =
//   "mongodb+srv://jainilrmodi2013:250702Jai@cluster0.jbrnt0c.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// mongoose.set('useFindAndModify', true);

