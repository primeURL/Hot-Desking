const router = require("express").Router();
const Room = require("../models/Room");


router.get("/", async (req, res) => {
	try {
        const resp = await Room.find({})
        res.status(200).send(resp)
    } catch (error) {
        console.log('errr',error);
        res.status(500).send(error)
    }
});
router.post("/", async (req, res) => {
	try {
        console.log(req.body);
        const resp = await Room.find()
        console.log('resp',resp);
        res.status(200).send(resp)
    } catch (error) {
        console.log('errr',error);
        res.status(500).send(error)
    }
});


module.exports = router;