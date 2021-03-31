let router = require("express").Router();
const controller = require("../controllers/client.controller");

// Create Methods
router.post("/add", controller.add);
router.post("/addList", controller.addList);

// Read Methods
router.get("/findAll", controller.findAll);
router.get("/find/:id", controller.find); // Standar find By Id method 

// Update Methods
router.patch("/update/:id", controller.update); // Standar update By Id method

// Delete Methods
router.delete("/delete/:id", controller.delete); // Standar delte By Id method

module.exports = router;



