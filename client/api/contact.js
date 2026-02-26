const nodemailer = require("nodemailer");

const setCors = (res, origin) => {
  res.setHeader("Access-Control-Allow-Origin", origin || "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
};

module.exports = async (req, res) => {
  const origin = req.headers.origin || "*";
  setCors(res, origin);

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  // Parse JSON body safely
  const rawBody = typeof req.body === "string" ? req.body : JSON.stringify(req.body || {});
  let body;
  try {
    body = typeof req.body === "object" && req.body !== null ? req.body : JSON.parse(rawBody || "{}");
  } catch (_err) {
    return res.status(400).json({ ok: false, message: "Invalid JSON" });
  }

  const { name, email, message, honeypot } = body || {};

  if (honeypot && String(honeypot).trim().length > 0) {
    return res.status(200).json({ ok: true });
  }

  if (!name || !String(name).trim()) {
    return res.status(400).json({ ok: false, message: "Name is required" });
  }
  if (!email || !String(email).trim()) {
    return res.status(400).json({ ok: false, message: "Email is required" });
  }
  if (!message || !String(message).trim()) {
    return res.status(400).json({ ok: false, message: "Message is required" });
  }

  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;
  const MAIL_TO = process.env.MAIL_TO;
  const MAIL_FROM = process.env.MAIL_FROM || SMTP_USER;

  if (!SMTP_USER || !SMTP_PASS || !MAIL_TO) {
    return res.status(500).json({ ok: false, message: "Email is not configured" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const mailOptions = {
    from: MAIL_FROM,
    to: MAIL_TO,
    replyTo: email,
    subject: "New Contact Message",
    text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Vercel contact send failed:", err);
    return res.status(500).json({ ok: false, message: "Failed to send message" });
  }
};
