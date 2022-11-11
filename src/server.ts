import { app } from "./app";
import * as dotenv from "dotenv";
import "reflect-metadata";
import "./database";

dotenv.config({path:`.env.${process.env.NODE_ENV}`});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🚀[SERVER]: Server running at http://localost:${port} `);
});
