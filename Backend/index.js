import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";
// import indexRouter from "./routes/index.js";
const app = express();

// DB connection
import "./models/connectDB.js";
import { kidsDetails } from "./models/kidsSchema.js";

// middleware
app.use(morgan("tiny"));
// app.use(cors({ origin: true, credentials: true }));

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: "*",
  })
);

// app.use("/", indexRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.post("/create", async (req, res) => {
//   let kids = new kidsDetails(req.body);
//   // kids.fullname = req.body.fullname;
//   // kids.phone = req.body.phone;
//   // kids.email = req.body.email;
//   const doc = await kids.save();
//   console.log(doc);
//   res.json(doc);
// });

// ***********************************
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await kidsDetails.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (error) {
    console.log(error);
  }
});

// app.post('/signup',(req,res)=>{
//   res.json("hiii signup")
// })
// app.post('/login',(req,res)=>{
//   res.json("hiii login")
// })

app.post("/signup", async (req, res) => {
  const { fullname, phone, email, password } = req.body;

  const data = {
    fullname: fullname,
    phone: phone,
    email: email,
    password: password,
  };

  try {
    const check = await kidsDetails.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      await kidsDetails.insertMany([data]);
    }
  } catch (error) {
    res.json("notexist");
    console.log(error);
  }
});
// **********************************

app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
