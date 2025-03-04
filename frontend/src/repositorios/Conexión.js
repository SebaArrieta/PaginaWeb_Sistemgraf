import axios from "axios";
/* 
router.post("/services/createServices", verifyToken, ServiceController.createServices);  // Crear servicio
router.get("/services/getService", verifyToken, ServiceController.getService);              
router.get("/services/getServices", ServiceController.getServices);
router.put("/services/modifyService", verifyToken, ServiceController.modifyService); 
router.delete("/services/deleteService/:id", verifyToken, ServiceController.deleteService);  
*/
const API_URL = process.env.REACT_APP_API_URL; //

const getServices = () =>
    axios
        .get(`${API_URL}/services/getServices`)
        .then((res) => res.data);

const getBlogs = () =>
    axios
        .get(`${API_URL}/blog/getBlogs`)
        .then((res) => res.data);

const getBlog = async (id) =>{
    const response = await axios.get(`${API_URL}/blog/getBlog`, {
        params: {
          ID: id,
        },
      })
    return response?.data
}
const sendEmail = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/send-email`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Email sent successfully:", response.data);
  } catch (error) {
    console.error("Error sending email:", error.response ? error.response.data : error.message);
  }
};
export {getBlogs, getServices, getBlog, sendEmail}