import express from 'express'

const router = express.Router();

router.get("/", (req,res) => {
    res.send("Hello from backend!");
});
router.get("/register", (req,res) => {
    res.send("Subscribe");
});

export default router;