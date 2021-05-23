const router = require("express").Router()

// Routes imports
const users = require("./user.routes")
const neas = require("./nea.routes")
const phas = require("./pha.routes")
const clients = require("./client.routes")

// Baseline route definition
router.use("/users", users)
router.use("/neas", neas)
router.use("/phas", phas)
router.use("/clients", clients)

// Init API
router.use("/", (req, res) =>
    res.send("HTS V2 API")
)

module.exports = router
