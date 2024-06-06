import { Router } from "express";
import { createData, getData, updateData } from "../handler";

export const crudRouter = Router();

crudRouter.route("/get-data").get(getData);
crudRouter.route("/create-data").post(createData);
crudRouter.route("/update-data").patch(updateData);
