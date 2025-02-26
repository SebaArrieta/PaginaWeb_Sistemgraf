const db = require('../config/database');
const { getObjectSignedUrl } = require('../config/S3');

// Get service by id
const getService = async (req, res) => {
    try {
        const ID = req.body.ID;
        if (!ID) return res.status(400).json({ error: "ID de servicio requerido" });

        db.query("SELECT * FROM Services WHERE ID = ?", [ID], async (err, results) => {
            if (err) {
                console.log('Error en la consulta:', err);
                return res.status(500).json({ error: 'Error en la consulta' });
            }

            if (results[0]["Img"].startsWith("services")) {
                try {
                    results[0]["Img"] = await getObjectSignedUrl(results[0]["Img"]);
                } catch (error) {
                    console.log('Error:', error);
                    return res.status(500).json({ error: 'Error al obtener la imagen' });
                }
            }

            return res.status(200).json(results);
        });
    } catch (error) {
        console.error("Error en getService:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};

// Get all services
const getServices = async (req, res) => {
    try {
        db.query("SELECT * FROM Services", async (err, results) => {
            if (err) return res.status(500).json({ error: "Error en la consulta" });

            for (let s in results) {
                if (results[s]["Img"].startsWith("services")) {
                    results[s]["Img"] = await getObjectSignedUrl(results[s]["Img"]);
                }
            }

            return res.status(200).json(results);
        });
    } catch (error) {
        console.error("Error en getServices:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};

module.exports = { getService, getServices };