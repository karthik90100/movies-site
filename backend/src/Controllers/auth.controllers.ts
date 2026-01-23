import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { pool } from "../db/db";

export const registerUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
        "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
        [username, email, hashedPassword]
    );

    res.status(201).json({ message: "User registered successfully" });
};
