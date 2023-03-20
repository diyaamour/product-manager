const express = require("express");

const { 
  handleCreateProduct, 
  handleGetAllProducts ,
  handleGetProductById,
  handleUpdateProductByid,
  handleDeleteProductById
} = require("../controllers/product.controller");

const router = express.Router();

router.post("/", handleCreateProduct);
router.get("/", handleGetAllProducts);
router.get("/:id", handleGetProductById);
router.put("/:id", handleUpdateProductByid);
router.delete('/:id', handleDeleteProductById);


module.exports = {
  productRouter: router,
};
