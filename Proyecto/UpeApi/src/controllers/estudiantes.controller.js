import { getConnection } from '../database/connection.js'

export const getEstudiantes = async (req, res) => {
    const con = await getConnection();
    const resp= await con.request().query("SELECT * FROM Vendedor");
    res.json(resp.recordset)
}

