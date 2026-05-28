const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorMiddleware");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

connectDB();
const app = express();

app.use(
  cors({
    origin: [
      "https://shecanfoundation-4j6oe8c1y-ramkrishna-s-project1.vercel.app/",
    ],

    credentials: true,
  }),
);

app.use(express.json());
app.use(errorHandler);

app.use(helmet());
app.use(morgan("dev"));
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,

    max: 100,
  }),
);

//routes
const authRoutes = require("./routes/authRoutes");
const formRoutes = require("./routes/formRoutes");
const adminRoutes = require("./routes/adminRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

app.use("/api/upload", uploadRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/auth", authRoutes);
app.use("/api/contact", formRoutes);
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(PORT, () => {
  console.log(`Running ${PORT}`);
});
