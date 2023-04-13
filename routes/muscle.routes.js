const express = require("express");
const router = express.Router();

// GET /api/muscles
router.get("/muscles",(req,res,next)=>{
    res.json("Muscles!")
})

module.exports = router;
