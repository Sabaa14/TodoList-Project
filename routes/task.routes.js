const { readtask, readtaskbyId, createtask, updatetask, deletetask } = require("../controllers/task.controllers");
const express = require("express");
const LoginAuth = require("../middleware/auth");
const  router = express.Router();

router.get("/", LoginAuth , readtask);
router.get("/:id", LoginAuth ,readtaskbyId);
router.post("/", LoginAuth ,createtask);
router.put("/:id", LoginAuth ,updatetask);
router.delete("/:id", LoginAuth ,deletetask);


module.exports = router ; 