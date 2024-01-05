const express = require("express")

const router = express.Router()

const upload = require("./helpers/upload");

const { createMemory, getMemories, getMemoryById } = require("./controllers/MemoryController")

router.post(
    "/",
    upload.single("image"),
    (req, res, next) => {
        const image = req.file;
        if (!image) {
            return res.status(400).json({ msg: "Por favor, envie um arquivo." });
        }
        next();
    },
    (req, res) => createMemory(req, res)
);

router.get("/", (req, res) => getMemories(req, res))

router.get("/:id", (req, res) => getMemoryById(req, res))


module.exports = router