const handler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const events = await Event.find({});

        res.status(200).json({ success: true, data: events });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const event = await Event.create(req.body);
        console.log(req.body);
        res.status(201).json({ success: true, data: event });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default handler;
