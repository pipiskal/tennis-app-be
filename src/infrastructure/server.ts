/* eslint-disable @typescript-eslint/no-unsafe-call */

import cors from "cors";
// import { sql } from "drizzle-orm";
import express from "express";

const app = express();
// const port = 4321;
const port = process.env.PORT ?? "3210";

// const test: number = '1';

// PostgreSQL connection

app.use(
    cors({
        allowedHeaders: ["Content-Type"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        origin: "http://localhost:4200",
    }),
);

// Simple route
app.get("/", (req, res) => {
    // const result = await db.execute(sql`SELECT 1+1 AS test_value`);

    // console.log(result);

    res.json({
        message: "test",
        // result: result.rows[0].test_value,
        // message: `Spyros Kalimeris ${new Date(date.rows[0].current_time)}`,
        // date: date.rows[0],
    });

    console.log("Received request at /");
});

// Start server
const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// Proper shutdown handling
process.on("SIGTERM", () => {
    server.close(() => {
        console.log("Server stopped");
    });
});

// Keep the process running
process.on("SIGINT", () => {
    server.close(() => {
        console.log("Server stopped");
        process.exit(0);
    });
});
