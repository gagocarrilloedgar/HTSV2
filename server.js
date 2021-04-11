/**
 * ------------------ IMPORTS -----------------------
*/
require("./config/database");
require("dotenv").config();

const express = require("express");
const cors = require("cors")
const session = require("express-session");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const router = require("./routes/router");
const notFound = require("./middlewares/notFound")
const handleErrors = require("./middlewares/handleErrors");

const MongoStore = require("connect-mongo");

/**
 * ------------------ GENERAL SETUP -----------------------
*/


// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax


// Create the Express application
const app = express();
app.set("trust proxy", 1); // trust first proxy

// In order to be able to see the headers from the backend
const allowedOrigins = [
    "http://localhost:3000",
];

const corsOptions = {
    credentials: true,
    origin: allowedOrigins,
    optionsSuccessStatus: 200,
};


/**
 * ------------------ MIDDLEWARES -----------------------
*/

// Express v4.16.0 and higher
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Set security-related HTTP response headers
app.use(helmet());

// Limit 10000 requests from the same IP per hour
const limiter = rateLimit({
    max: 10000,
    windowMs: 60 * 60 * 1000,
    message: "Too many requests from this IP, please try again in an hour.",
});

app.use("/", limiter);

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());


// --------------------- SESSIONS -------------------------

// For "connect-mongo": "^4.4.1" and over
const sessionStore = MongoStore.create({
    mongoUrl: process.env.ATLAS_URI,
});


// This options need to be configured in order to be able to properly deploy and implement the API
// whit a secure connection due the new google chrome and other browsers cookies policy.
const cookieOptions = {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    secure: process.env.SECURE || true,
    httpOnly: process.env.HTTP_ONLY || true,
    sameSite: process.env.SAME_SITE || 'none'
}

// Session definition
app.use(
    session({
        name: process.env.NAME,
        secret: process.env.MONGO_SECRET,
        resave: false,
        saveUninitialized: false,
        store: sessionStore,
        cookie: cookieOptions,
    })
);

// Import and addition of all the different API routes
app.use("/", router);

// Error handling routes/middlewares
app.use(notFound);
app.use(handleErrors);


// --------------------- SERVER -------------------------


// Starts listening to the opened port
const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
    console.log("Server running on", port);
});


module.exports = { app, server };
