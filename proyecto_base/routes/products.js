const {Router} =require("express");
const router = Router();

const {
    createProduct,
    productDelete,
    productUpdate,
    productsGet
}=require("../controllers/productosController");


router.get("/",productsGet);
router.post("/createProduct",createProduct)
router.put("/updateProduct/:id",productUpdate)
router.delete("/deleteProdut/:id",productDelete);

module.exports=router;