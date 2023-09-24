import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//ROUTERS
import chatDataRoutes from "./routes/chatdata.js";
import engagementRoutes from "./routes/engagement.js";

//ROUTES
app.use("/api/chatdata", chatDataRoutes);
app.use("/api/engagementdata", engagementRoutes);

//MONGOOSE SETUP
const PORT = process.env.PORT || 9000;
mongoose.connect("mongodb://127.0.0.1:27017/chatanalysis", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
