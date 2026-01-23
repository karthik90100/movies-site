import { Request, Response } from "express";
import { pool } from "../db/db";

export const addToWatchlist = async (req: Request, res: Response) => {
    const { user_id, movie_id, title, poster } = req.body;

    await pool.query(
        "INSERT INTO watchlist (user_id, movie_id, title, poster) VALUES ($1,$2,$3,$4)",
        [user_id, movie_id, title, poster]
    );

    res.json({ message: "Movie added to watchlist" });
};

export const getWatchlist = async (req: Request, res: Response) => {
    const { userId } = req.params;

    const result = await pool.query(
        "SELECT * FROM watchlist WHERE user_id=$1",
        [userId]
    );

    res.json(result.rows);
};

export const removeFromWatchlist = async (req: Request, res: Response) => {
    const { id } = req.params;

    await pool.query("DELETE FROM watchlist WHERE id=$1", [id]);

    res.json({ message: "Removed from watchlist" });
};
