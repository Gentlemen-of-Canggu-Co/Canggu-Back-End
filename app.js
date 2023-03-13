// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();


// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const eventRoutes = require("./routes/event.routes");
app.use("/api", eventRoutes);

const spotRoutes = require("./routes/spots.routes");
app.use("/api", spotRoutes);

const consumableRoutes = require("./routes/consumable.routes");
app.use("/api", consumableRoutes);

const toplistRoutes = require("./routes/toplist.routes")
app.use("/api", toplistRoutes)

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
