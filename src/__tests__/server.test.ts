/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import request from "supertest";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

import { app } from "../server.js"; // Update with your actual file path

describe("Express App", () => {
    let server: any;

    beforeAll(() => {
        vi.stubEnv("PORT", "0"); // Use 0 to get a random port
        server = app.listen(0);
    });

    afterAll(() => {
        server.close();
        vi.unstubAllEnvs();
    });

    describe("GET /", () => {
        it('should return "Hello World!"', async () => {
            const response = await request(app).get("/");
            expect(response.status).toBe(200);
            expect(response.text).toBe("Hello World!");
        });

        it('should log "Response takis sent 2"', async () => {
            const consoleSpy = vi.spyOn(console, "log");
            await request(app).get("/");
            expect(consoleSpy).toHaveBeenCalledWith("Response takis sent");
            consoleSpy.mockRestore();
        });
    });
});
