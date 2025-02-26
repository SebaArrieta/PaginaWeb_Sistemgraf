const express = require("express");
const router = express.Router();
const ServiceController = require("../controllers/serviceController");
const BlogController = require("../controllers/blogController");

// 📑 Servicios
router.get("/services/getService", ServiceController.getService);              
router.get("/services/getServices", ServiceController.getServices);

// 🗃️ Entradas a Blog
router.get("/blog/getBlog", BlogController.getBlog);              
router.get("/blog/getBlogs", BlogController.getBlogs); 

module.exports = router;