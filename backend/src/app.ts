import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import watchlistRoutes from "./routes/watchlist.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/watchlist", watchlistRoutes);

export default app;
