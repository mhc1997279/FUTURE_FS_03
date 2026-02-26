import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import { z } from "zod";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const PORT = Number(process.env.PORT) || 5000;

// CORS allowlist
const prodOrigin = "https://shining-star-website-mocha.vercel.app";
const allowedOrigins = [prodOrigin];

const isAllowedOrigin = (origin: string): boolean => {
  try {
    const hostname = new URL(origin).hostname;
    if (hostname.endsWith(".vercel.app")) return true; // allow any Vercel preview
  } catch (_err) {
    // If URL parsing fails, fall through to explicit allowlist check
  }
  return allowedOrigins.includes(origin);
};

const corsOptions: Parameters<typeof cors>[0] = {
  origin: (requestOrigin, callback) => {
    if (!requestOrigin) return callback(null, true); // allow non-browser tools
    if (isAllowedOrigin(requestOrigin)) return callback(null, true);
    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
  optionsSuccessStatus: 204,
};

// SMTP configuration (warn but do not crash if missing)
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_TO = process.env.SMTP_TO || process.env.MAIL_TO || SMTP_USER;
const SMTP_FROM = process.env.MAIL_FROM || SMTP_USER;

const smtpConfigured = Boolean(SMTP_USER && SMTP_PASS && SMTP_TO);
if (!smtpConfigured) {
  console.warn("[WARN] SMTP not fully configured (missing SMTP_USER/SMTP_PASS/SMTP_TO). Contact emails will return 500 until set.");
}

const transporter = smtpConfigured
  ? nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })
  : null;

if (transporter) {
  transporter.verify().catch((err) => {
    console.error("Error configuring mail transporter:", err);
  });
}

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required."),
  phone: z.string().trim().min(1, "Phone is required."),
  email: z.string().trim().email("Valid email is required."),
  message: z.string().trim().min(1, "Message is required."),
  product: z.string().trim().optional(),
  category: z.string().trim().optional(),
  website: z.string().trim().optional(), // honeypot
});

const app = express();

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());

const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (_req, res) => {
    res.status(429).json({ ok: false, message: "Too many requests. Please try again later." });
  },
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", contactLimiter, async (req: Request, res: Response, next: NextFunction) => {
  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    const message = parsed.error.errors[0]?.message || "Invalid input.";
    return res.status(400).json({ ok: false, message });
  }

  const { name, email, phone, message, product, category, website } = parsed.data;

  // Honeypot: silently accept bots
  if (website && website.trim().length > 0) {
    return res.status(200).json({ ok: true });
  }

  if (!smtpConfigured || !transporter) {
    return res.status(500).json({ ok: false, message: "Server error. Please try again later." });
  }

  const mailOptions = {
    from: SMTP_FROM,
    to: SMTP_TO,
    replyTo: email,
    subject: "New Quote Inquiry - Shining Star",
    text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nProduct: ${product || "-"}\nCategory: ${category || "-"}\n\nMessage:\n${message}\n\nTimestamp: ${new Date().toISOString()}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ ok: true });
  } catch (error) {
    return next(error);
  }
});

// Global error handler
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ ok: false, message: "Server error. Please try again later." });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
