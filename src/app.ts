import express from "express";
import cors from "cors";
import { mongoClient } from "./database";

const app = express();

app.use(cors());
app.use(express.json());

const startServer = async () => {
  try {
    await mongoClient.connect();

    app.listen(5000, () => {
      console.log("CrudArch server started successfully on port 5000");
    });
  } catch (err) {
    console.log("Failed to start server", err);
  }
};

startServer();
