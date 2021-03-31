const router = require("express").Router();

// Routes imports
const users = require("./user.routes");
const neas = require("./nea.routes");

// Baseline route definition
router.use("/users", users);
router.use("/neas", neas);


// Init API 
router.use("/", (req, res) =>
    res.send("HTS V2 API")
);


module.exports = router;
