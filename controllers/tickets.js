const generateTickets = require("../service/generateTicket");
const Ticket = require("../models/ticket");

exports.createTambolaTickets = async (req, res) => {
  try {
    let {sets} = req.body
    let tickets;

    if (!sets || isNaN(sets) || sets <= 0) {
      return res.status(400).json({ error: "Invalid number of sets" });
    }

    for (let i = 0; i < sets; i++) {
      tickets = generateTickets();
      for (const ticket of tickets) {
        await Ticket.create({ ticket: JSON.stringify(ticket) });
      }
    }
    // console.log(tickets);
    return res.status(201).json({ message: "Tickets Created Successfully" , data :{tickets}});

  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getTambolaTickets = async (req, res) => {
  try {
   const page = +req.query.page || 1;
   const pageSize = +req.query.pageSize || 10;

   let totalTickets = await Ticket.count();

   const data = await Ticket.findAll({
     offset: (page - 1) * pageSize,
     limit: pageSize,
   });
  //  console.log(data)
   res.status(200).json({
     Tickets: data,
     totalTickets: totalTickets,
   });
  } catch (error) {
    res.status(500).json(error);
  }
};