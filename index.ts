import  express  from "express";
import cors from "cors";
import { Request, Response } from "express";
import pool from "./db";
import user_routes from "./routes/user_routes";
import driver_routes from "./routes/driver_routes";
import admin_routes from "./routes/admin_routes";


const app = express()
const port = 8000
app.use(express.json({ limit: '50mb' }));
// app.use(express.bodyParser({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(express.json());
app.use(cors());

app.use('/api/users',user_routes);
app.use('/api/drivers',driver_routes);
app.use('/api/admin',admin_routes);

app.get('/',(req:Request, res:Response)=>{
    console.log("first");
    res.send("hello");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

