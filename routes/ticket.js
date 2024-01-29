const router = require("express").Router();

const { createTambolaTickets, getTambolaTickets} = require('../controllers/tickets')

router.post("/create-tickets",  createTambolaTickets);
router.get('/get-tickets',getTambolaTickets)


module.exports = router;
