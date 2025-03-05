export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    console.log("Nieuwe inzending:", { name, email, message });
    res.status(200).json({ message: "Bedankt voor je bericht!" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
