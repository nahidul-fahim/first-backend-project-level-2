import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config, () => {
      console.log(`Practice project is running on port ${config.port}`);
    });
  } catch (error) {
    console.log("Error from main:", error);
  }
}

main();
