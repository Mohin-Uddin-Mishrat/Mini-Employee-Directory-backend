
import mongoose from "mongoose";
import app from "./app";
import { configs } from "./app/configs";

async function main() {
    if (!configs.db_url) {
        throw new Error("DB_URL is missing from environment variables.");
    }

    await mongoose.connect(configs.db_url);
    app.listen(configs.port, () => {
        console.log(`Server listening on port ${configs.port}`);
    });
}

main().catch(err => {
    console.error("Failed to start server.");

    if (err instanceof Error) {
        console.error(err.message);
    } else {
        console.error(err);
    }
});
