import { Router } from "express";
import { createData, deleteData, getData, updateData } from "../handler";

export const crudRouter = Router();

crudRouter.route("/get-data").get(getData);
crudRouter.route("/create-data").post(createData);
crudRouter.route("/update-data").patch(updateData);
crudRouter.route("/delete-data").delete(deleteData);
