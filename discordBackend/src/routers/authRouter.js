const express=require("express")
const router=express.Router();
const {controllers}=require("../controllers/auth/authControlers");

const joi=require("joi");


const schema=require("../utils/validateSchema")
const validateMiddleware=require("../middlewares/auth/validateMiddlware")






// router.post("/login",validator.body(loginSchema),controllers.postLogin)
// router.get("/register",validator.body(registerSchema),controllers.postRegister)

router.get("/",(req,res)=>{
    res.send("hello")
})

router.post("/login",validateMiddleware(schema.loginSchema,"body"),controllers.postLogin)
router.get('*', (req, res) => {
	res.status(404).json({ msg: "URL doen't match! " });
});



module.exports=router;