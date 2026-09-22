Task 4 – Basic Backend Structure + Postman 🚀

A lightweight Node.js and Express REST API demonstrating a clean **Layered Architecture** (Separation of Concerns) and request lifecycle flow without direct database coupling.

---

## 🔹 Architecture & Request Flow

Every incoming HTTP request follows this decoupled lifecycle:

```text
Client / Postman
      ↓
    Route       (routes/userRoutes.js)
      ↓
  Middleware    (middleware/logger.js)
      ↓
  Controller    (controllers/userController.js)
      ↓
   Service      (services/userService.js)
      ↓
    Model       (models/userModel.js - prepared for future DB integration)
      ↓
  Database
