const express = require("express");
const  router = express.Router();

router.get("/", readtask);
router.get("/:id",readtaskbyId);
router.post("/", createtask);
router.put("/:id",updatetask);
router.delete("/:id",deletetask);


module.exports= router ;