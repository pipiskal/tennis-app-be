// import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
// import { Pool, PoolConfig } from "pg";

// class Database {
//     private static instance: Database;
//     private db!: NodePgDatabase; // initialized later
//     private pool: Pool;

//     private constructor(poolConfig: PoolConfig) {
//         this.pool = new Pool(poolConfig);
//     }

//     public static async init(poolConfig: PoolConfig): Promise<Database> {
//         if (!Database.instance) {
//             const instance = new Database(poolConfig);

//             try {
//                 await instance.testConnection();
//                 console.log("Database connected successfully");

//                 console.log("Initializing drizzle database...");
//                 instance.db = drizzle(instance.pool);

//                 Database.instance = instance;
//             } catch (err) {
//                 console.error("Database connection failed", err);
//                 process.exit(1);
//             }
//         }

//         return Database.instance;
//     }

//     public getDb(): NodePgDatabase {
//         return this.db;
//     }

//     public getPool(): Pool {
//         return this.pool;
//     }

//     private async testConnection(): Promise<void> {
//         const client = await this.pool.connect();
//         client.release();
//     }
// }

// const poolConfig: PoolConfig = {
//     connectionTimeoutMillis: 2000,
//     database: process.env.DB_NAME || "mydb",
//     host: process.env.NODE_ENV === "production" ? "postgres" : "localhost",
//     idleTimeoutMillis: 30000,
//     max: 20,
//     password: process.env.DB_PASSWORD || "mypassword",
//     port: 5432,
//     user: process.env.DB_USER || "myuser",
// };

// const database = await Database.init(poolConfig);

// // Cleanup
// process.on("SIGINT", async () => {
//     await database.getPool().end();
//     process.exit(0);
// });

// const db = database.getDb();

// export default db;
