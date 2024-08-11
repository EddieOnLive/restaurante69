import express from "express";
import cors from "cors";
import { Puerto } from "./config.js";
import inicioRoutes from "./routes/inicio.routes.js";
import mesasRoutes from "./routes/mesas.routes.js";
import menuRoutes from "./routes/menu.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(inicioRoutes);
app.use(mesasRoutes);
app.use(menuRoutes);

app.listen(Puerto);
console.log(`SERVER IS RUNNING ON ${Puerto}`);
