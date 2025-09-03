const express = require("express");
require("dotenv").config();

// import routes
const todoRoutes = require("./routes/todoRoutes");

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());

// Routes
app.use("/todos", todoRoutes); // all todo routes start with /todos


// START SERVER
app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
});
