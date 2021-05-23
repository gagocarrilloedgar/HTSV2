const router = require("express").Router()
const controller = require("../controllers/pha.controller")

// Create methods
router.post("/add", controller.add)
router.post("/addList", controller.addList)

// Read methods
router.get("/findAll", controller.findAll)
router.get("/find/:id", controller.find) // Standar find By Id method

// Update methods
router.put("/update/:id", controller.update) // Standar update By Id method
router.put("/propagateLatLong", controller.propagateLatLong)

// Delete methods
router.delete("/delete/:id", controller.delete) // Standar delte By Id method

module.exports = router
