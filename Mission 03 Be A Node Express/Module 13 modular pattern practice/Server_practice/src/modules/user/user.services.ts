import { pool } from "../../config/db"

const createUser = async (payload: Record<string, unknown>) => {
    const columns = Object.keys(payload).filter(key => key !== 'id' && key !== 'created_at' && key !== 'updated_at');
    const columnNames = columns.join(', ');
    console.log(columnNames);  // [name, email, photo_url, is_admin, is_premium]

    const valuesPlaceholders = columns.map((_, index) => `$${index + 1}`).join(', ');
    console.log(valuesPlaceholders); //
    const values = columns.map(key => payload[key]); // $1, $2, $3, $4, $5

    const queryText = `
        INSERT INTO express_users(${columnNames})
        VALUES(${valuesPlaceholders})
        RETURNING *;
    `;

    const result = await pool.query(queryText, values);
    return result;

};

export const userServices = {
    createUser
};