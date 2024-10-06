import express, { Express, Request, Response } from "express";
import transactionRoutes from "./routes/transactions";

const app: Express = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// basic route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to VISA");
});

// routes
app.use("/api", transactionRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
