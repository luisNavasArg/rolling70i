const {Router} =require("express");
const router = Router();

router.get("/",function (req,res) {
        res.send("Users petición GET");
});

module.exports=router;