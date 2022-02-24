// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { name, email, subject, message } = req.body;

  res.send("Hello from the backend");
}
