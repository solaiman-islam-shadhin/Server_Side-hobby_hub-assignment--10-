import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const encodedPassword = encodeURIComponent(process.env.DB_PASSWORD);
const uri = `mongodb+srv://${process.env.DB_USER}:${encodedPassword}@assignmetn-10.is3vjll.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        const GrouopData = client.db("hobby_hub").collection("createdGroup");
        const userCollection = client.db("hobby_hub").collection("users");

        app.get("/groups", async (req, res) => {
            const result = await GrouopData.find().toArray();

            res.send(result);
        })
        app.get("/group-details/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await GrouopData.findOne(query)
            res.send(result);
        })


        app.get("/my-groups/:email", async (req, res) => {
            const email = req.params.email;
            const query = { email: email }
            const result = await GrouopData.find(query).toArray();
            res.send(result);
        })

        app.post("/createGroup", async (req, res) => {
            const group = req.body;
            console.log(group)
            const result = await GrouopData.insertOne(group);
            res.send(result);
        })
        app.delete("/group/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await GrouopData.deleteOne(query)
            res.send(result);
        })

        app.put("/group-details/:id", async (req, res) => {
            const id = req.params.id;
            const data = req.body;
            const filter = { _id: new ObjectId(id) }
            const UpdatedDoc = {
                $set: data
            }
            const options = { upsert: true };
            const result = await GrouopData.updateOne(filter, UpdatedDoc, options);
            res.send(result);
        })

        //user related api
        app.get("/users/:email", async (req, res) => {
            const email = req.params.email;

            const query = { email: email }
            const result = await userCollection.findOne(query);
            res.send(result);
        })

        app.post("/users", async (req, res) => {
            const userData = req.body;
            const result = await userCollection.insertOne(userData)
            res.send(result);
        })





        // await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");



    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}
run();

app.get("/", (req, res) => {
    res.send("Assignment 10 server is running");
}
);
app.listen(port, () => {
    console.log(`Assignment 10 server is running on port: ${port}`);
});