import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();

connectDB();

// import express from "express";
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

//     app.on("error", (error) => {
//       console.log("Error: ", error);
//     });

//     app.listen(process.env.MONGODB_URL, () => {
//       console.log(`App is listening on port:${process.env.MONGODB_URL}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// })();
