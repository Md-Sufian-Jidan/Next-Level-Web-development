import { pool } from "../../config/db";

const createUser = async (payload: Record<string, unknown>) => {
    const { name, email, photo_url, is_admin, is_premium, biodata } = payload;
    const result = await pool.query(`
    INSERT INTO users(name, email, photo_url, is_admin, is_premium, biodata) VALUES($1, $2, $3, $4, $5, $6) RETURNING *
    `, [name, email, photo_url, is_admin, is_premium, biodata]);

    return result;
};

const getUsers = async () => {
    const result = await pool.query(`SELECT * FROM users`);
    return result;
};

const getSingleUser = async (id: string) => {
    const result = await pool.query(`SELECT * FROM users WHERE id=$1`, [id]);
    return result;
};

const updateUser = async (payload: Record<string, unknown>) => {
    // ami aii jaigai user er data pass korbo. data holo ekta object
    // const {name, email} = payload;
    // const result = await pool.query(`UPDATE users SET name=$1, email=$2, WHERE id=$3 RETURNING *`, []);
    // return result;
    return { rows: [{}] };
};

const deleteUser = async (id: string) => {
    const result = await pool.query(`DELETE FROM users WHERE id=$1`, [id]);
    return result;
};

export const userServices = {
    createUser,
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser
};