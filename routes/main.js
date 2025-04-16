const express = require("express")
const router = express.Router();
const post = require("../models/post");

//Home Page
router.get("/", async (req, res)=> {
    const locals = {
        title: "NOdeJs Blog",
        description: "A Blog template application that will be used for your own use.",
    };

    try{
        const data=await post.find().sort({createdAt: "desc"});
        res.render("index", {locals, data});
    } catch(error) {
        console.log(error)
    }
})

module.exports = router;