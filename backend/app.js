const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const errorMiddleware = require("./middleware/error");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");

//Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

app.use(
  cors({
    origin: "http://localhost:3000", // your frontend origin
    credentials: true, // if using cookies or auth headers
  })
);

// Use Helmet for Content Security Policy (CSP) headers
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"], // Allow Google Fonts
      styleSrc: ["'self'", "https://fonts.googleapis.com", "'unsafe-inline'"], // Allow Google Fonts styles
      scriptSrc: ["'self'"],
      imgSrc: ["'self'"],
    },
  })
);

//Route imports

const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });

// Middleware for Errors

app.use(errorMiddleware);

module.exports = app;
