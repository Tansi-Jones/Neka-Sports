const handler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const news = await News.find({});

        res.status(200).json({ success: true, data: news });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        // const news = await News.create(req.body);

        console.log(req.body);
        res.status(201).json({ success: true, data: "" });
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
