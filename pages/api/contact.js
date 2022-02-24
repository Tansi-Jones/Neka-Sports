// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sanityClient from "@sanity/client";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2021-08-31",
};

const client = sanityClient(config);

export default async function handler(req, res) {
  const { name, email, subject, message } = req.body;

  try {
    await client.create({
      _type: "contact",
      name,
      email,
      subject,
      message,
    });

    res.send("✅ Message sent");
  } catch (error) {
    return res.send("❌ Failed to send");
  }

  res.send("Hello from the backend");
}
