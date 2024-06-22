import { Request, Response } from "express";
import { MongoClient } from "mongodb";

export const deleteData = (req: Request, res: Response) => {

    MongoClient.connect("", {  }).then((client) => {
        client.db("").createCollection("kclass").then(dbo => {
            dbo.deleteOne({  })
        })
    })



};
