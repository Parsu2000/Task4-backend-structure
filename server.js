const express = require("express");
const logger = require("./middleware/logger");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 3000;

// Built-in middleware to parse incoming JSON bodies
app.use(express.json());

// Custom logger middleware
app.use(logger);

// Base application routes
app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});