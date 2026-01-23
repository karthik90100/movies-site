import { Router } from "express";
import {
    addToWatchlist,
    getWatchlist,
    removeFromWatchlist,
} from "../controllers/watchlist.controller";

const router = Router();

router.post("/", addToWatchlist);
router.get("/:userId", getWatchlist);
router.delete("/:id", removeFromWatchlist);

export default router;
