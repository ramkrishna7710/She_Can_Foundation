const express = require("express");

const cors = require("cors");

require("dotenv").config();

const helmet = require("helmet");

const morgan = require("morgan");

const rateLimit = require("express-rate-limit");

const connectDB = require("./config/db");

const errorHandler = require("./middleware/errorMiddleware");

connectDB();

const app = express();

app.use(
  cors({
    origin: [
      "https://shecanfoundation-5tzpndgb9-ramkrishna-s-project1.vercel.app",

      "http://localhost:5173",
    ],

    methods: ["GET", "POST", "PUT", "DELETE"],

    credentials: true,
  }),
);

app.use(express.json());

app.use(helmet());

app.use(morgan("dev"));

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,

    max: 100,
  }),
);

const authRoutes = require("./routes/authRoutes");

const formRoutes = require("./routes/formRoutes");

const adminRoutes = require("./routes/adminRoutes");

const uploadRoutes = require("./routes/uploadRoutes");

app.use("/api/upload", uploadRoutes);

app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);

app.use("/api/contact", formRoutes);

app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  "0.0.0.0",
  () => {
    console.log(`Running ${PORT}`);
  },
);
