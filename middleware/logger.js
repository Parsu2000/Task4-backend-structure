const logger = (req, res, next) => {
  console.log(`Request: ${req.method} ${req.originalUrl}`);
  next(); // Pass control to the next handler/controller
};

module.exports = logger;