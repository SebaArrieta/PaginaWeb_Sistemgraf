const express = require("express");
const router = express.Router();
const ServiceController = require("../controllers/serviceController");
const BlogController = require("../controllers/blogController");
const mailController = require("../controllers/mailController");



// 📑 Servicios
router.get("/services/getService", ServiceController.getService);              
router.get("/services/getServices", ServiceController.getServices);

// 🗃️ Entradas a Blog
router.get("/blog/getBlog", BlogController.getBlog);              
router.get("/blog/getBlogs", BlogController.getBlogs); 

router.post("/send-email", mailController.sendMail);
//router.get("/mail/sendmail", BlogController.sendMail); 

module.exports = router;