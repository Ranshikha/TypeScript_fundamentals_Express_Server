import Router from "express"
const router =Router(); 

router.get("/home",(req,res)=>{
    res.send({received:true,
    data:"this is a Home Page",
});
});

router.get("/profile",(req,res)=>{
    res.send({received:true,
    data:"this is a Profile Page",
});
});

router.get("/cart",(req,res)=>{
    res.send({received:true, 
    data:"this is a cart Page",
});
});

 
export {router}