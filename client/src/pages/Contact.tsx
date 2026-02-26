import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "../config/business";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const productParam = searchParams.get("product") || "";
  const categoryParam = searchParams.get("category") || "";
  const prefillMessage = useMemo(() => {
    if (!productParam && !categoryParam) return "";
    const productText = productParam || "this product";
    const categoryText = categoryParam ? ` (Category: ${categoryParam})` : "";
    return `Hello, I’m inquiring about: ${productText}${categoryText}.`;
  }, [productParam, categoryParam]);

  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [prefillApplied, setPrefillApplied] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (prefillApplied || !prefillMessage) return;
    setFormData((prev) => ({ ...prev, message: prev.message || prefillMessage }));
    setPrefillApplied(true);
  }, [prefillApplied, prefillMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          product: productParam || undefined,
          category: categoryParam || undefined,
        }),
      });

      let data: { ok?: boolean; message?: string } | null = null;
      try {
        data = await res.json();
      } catch (parseErr) {
        console.warn("Contact response parse failed", parseErr);
      }

      if (res.ok && data?.ok) {
        setStatus("success");
        setErrorMessage("");
        setFormData({ name: "", phone: "", email: "", message: prefillMessage });
        setTimeout(() => setStatus("idle"), 5000);
        return;
      }

      if (res.status === 429) {
        setStatus("error");
        setErrorMessage("Too many requests. Please wait a few minutes and try again.");
        return;
      }

      if (res.status === 403) {
        setStatus("error");
        setErrorMessage("Request blocked. Please refresh the page and try again.");
        return;
      }

      const fallback = "Something went wrong. Please try again or call us directly.";
      setStatus("error");
      setErrorMessage(data?.message || fallback);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or call us directly.");
    }
  };

  return (
    <div className="flex-grow bg-[var(--bg)] min-h-screen">
      <section className="bg-slate-100 border-b">
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold text-gray-900">Contact Us</h1>
          <p className="text-sm text-gray-600 mt-2">Let us know what you need—we reply quickly with pricing and availability.</p>
        </div>
      </section>

      <div className="container-custom py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-[var(--muted)]">
            <h2 className="text-2xl font-bold mb-6 text-slate-800">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[var(--muted)] p-3 rounded-full text-[var(--primary)]">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Phone & WhatsApp</h3>
                  <p className="text-slate-600 mb-1">For urgent orders and support</p>
                  <a href="tel:0524174000" className="text-lg font-semibold text-[var(--primary)] block hover:underline">052 417 4000</a>
                  <a href="tel:0523841183" className="text-lg font-semibold text-[var(--primary)] block hover:underline">052 384 1183</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[var(--muted)] p-3 rounded-full text-[var(--primary)]">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email</h3>
                  <p className="text-slate-600 mb-1">For official quotes and catalogs</p>
                  <a href={BUSINESS_INFO.emailUrl} className="text-lg font-medium text-slate-800 hover:text-[var(--primary)] transition-colors">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-100 p-3 rounded-full text-slate-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Address</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Near National Paint,<br />
                    Sharjah Industrial Area 11,<br />
                    Warehouse No. 17
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[var(--primary)]">
          <h2 className="text-2xl font-bold mb-2 text-slate-900">Send a Message</h2>
          <p className="text-slate-500 mb-8">We usually respond within 24 hours.</p>
          
          {status === "success" && (
            <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6 text-sm font-medium">
              Message sent successfully! We will contact you shortly.
            </div>
          )}

          {status === "error" && (
            <div className="bg-red-100 text-red-800 p-4 rounded-lg mb-6 text-sm font-medium">
              {errorMessage || "Something went wrong. Please try again or call us directly."}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
              <input
                type="text" id="name" required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] outline-none"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
              <input
                type="tel" id="phone" required
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] outline-none"
                placeholder="052 417 4000"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input
                type="email" id="email" required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] outline-none"
                placeholder="you@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea
                id="message" required rows={4}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] outline-none resize-none"
                placeholder="I need a quote for..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === "submitting"}
              className="w-full bg-[var(--accent)] hover:bg-[#d26c24] text-white font-bold py-4 rounded-lg shadow-md transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
