import { Sequelize } from "sequelize";
import { initModels } from "../../db/models/init-models";


export function sqlconnect() {
    try {
        const USER_DATABASE = new Sequelize(process.env.POSTGRES_URL as string, {
            pool: {
                max: 3,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        });
        initModels(USER_DATABASE);
        console.log("Connected to Postgres");
    } catch (error) {
        console.log("Connection to sql failed:", error)
    }
}
