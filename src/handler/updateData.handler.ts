import { Request, Response } from "express";
import { MongoClient } from "mongodb";

export const updateData = (req: Request, res: Response) => {
    MongoClient.connect("", {  }).then((client) => {
        client.db("").createCollection("kclass").then(dbo => {
            dbo.updateOne({  })
        })
    })



};
