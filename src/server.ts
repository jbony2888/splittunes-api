// src/server.ts

import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Simple test route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello from TypeScript + Express!" });
});

// Example POST route
app.post("/echo", (req: Request, res: Response) => {
  const { body } = req;
  res.json({ received: body });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
