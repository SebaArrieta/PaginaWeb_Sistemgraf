import axios from "axios";
/* 
router.post("/services/createServices", verifyToken, ServiceController.createServices);  // Crear servicio
router.get("/services/getService", verifyToken, ServiceController.getService);              
router.get("/services/getServices", ServiceController.getServices);
router.put("/services/modifyService", verifyToken, ServiceController.modifyService); 
router.delete("/services/deleteService/:id", verifyToken, ServiceController.deleteService);  
*/

const getServices = () =>
    axios
        .get(`http://localhost:5000/services/getServices`)
        .then((res) => res.data);

const getBlogs = () =>
    axios
        .get(`http://localhost:5000/blog/getBlogs`)
        .then((res) => res.data);

export {getBlogs, getServices}