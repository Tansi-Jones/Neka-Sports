// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { name, email, subject, message } = req.body;

  console.log(name, email, subject, message);
  res.status(200).json({ name: "John Doe" });
}
