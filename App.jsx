import React from "react";
import "./App.css";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/cards";

const logos = [
  { name: "Coventry University", file: "/logos/coventry.png.png" },
  { name: "Navitas", file: "/logos/navitas.png.jpeg" },
  { name: "University of Salford", file: "/logos/Salford.png.png" },
  { name: "University of East London", file: "/logos/UEL.png.jpeg" },
  { name: "University of Hertfordshire", file: "/logos/UH.png.png" },
  { name: "University of Aberdeen", file: "/logos/Aberdeen University.png" },
];

// Unsplash sample gallery images (royalty-free placeholders)
const gallery = [
  "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=60",
];

export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900">
      {/* HERO */}
      <header
        style={{
          backgroundImage: `linear-gradient(rgba(6, 12, 34, 0.55), rgba(6, 12, 34, 0.55)), url('https://images.unsplash.com/photo-1522184216315-5f51f1ee8f0e?auto=format&fit=crop&w=1600&q=60')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="text-white py-24 relative"
      >
        {/* Marg Logo */}
        <div className="logo-container">
          <img src="/logos/marg-logo.png" alt="Marg Education Logo" className="marg logo.png" />
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: "2.35rem", marginBottom: 12, fontWeight: 700 }}
          >
            Meet Top Global Universities in Port Harcourt
          </motion.h1>
          <p style={{ fontSize: "1.05rem", marginBottom: 18 }}>
            Marg Education International Exhibition & Open Day —{" "}
            <strong>March 2026 • Hotel Presidential, Port Harcourt</strong>
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500"
              onClick={() => {
                const elm = document.getElementById("registration");
                if (elm) elm.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Register Free Now
            </Button>
            <Button
              size="md"
              className="bg-white text-black"
              onClick={() => {
                const elm = document.getElementById("details");
                if (elm) elm.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Event Details
            </Button>
          </div>
        </div>
      </header>

      {/* EVENT DETAILS */}
      <motion.section
        id="details"
        className="event-details-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="event-details-container">
          <h2 className="event-details-title">Event Information</h2>
          <div className="event-details-grid">
            <div className="event-card">
              <h3>📅 Date</h3>
              <p>March 2026</p>
            </div>
            <div className="event-card">
              <h3>📍 Venue</h3>
              <p>Hotel Presidential, Port Harcourt</p>
            </div>
            <div className="event-card">
              <h3>⏰ Time</h3>
              <p>10:00 AM — 4:00 PM</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* WHY ATTEND */}
      <section className="why-attend-section">
        <div className="why-attend-container">
          <h3 className="why-attend-title">Why Attend?</h3>
          <ul className="why-attend-list">
            <li>
              <strong>🎓 Meet Top Universities:</strong> Discover programmes and entry routes across multiple countries.
            </li>
            <li>
              <strong>🤝 1-on-1 Counselling:</strong> Pre-book private meetings with admissions officers.
            </li>
            <li>
              <strong>💰 Scholarship Guidance:</strong> Learn how to access scholarships and funding options.
            </li>
            <li>
              <strong>🛂 Visa & Application Clinic:</strong> Get live visa updates and application support during the event.
            </li>
          </ul>
        </div>
      </section>

      {/* REGISTRATION */}
      <section id="registration" style={{ padding: "42px 20px", background: "#f8fafc", textAlign: "center" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <h3 style={{ fontSize: "1.4rem", marginBottom: 12 }}>Register Now — It's Free</h3>
          <p style={{ color: "#475569", marginBottom: 18 }}>
            Fill the quick form below to reserve your seat. We recommend booking a 1:1 counselling slot after registration.
          </p>

          <div
            style={{
              width: "100%",
              maxWidth: "900px",
              height: "500px",
              margin: "0 auto",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 6px 20px rgba(2,6,23,0.08)",
            }}
          >
            <iframe
              title="Marg Education Registration Form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSfZ7itudnwsf8tluhTGnTdqUiJS99LRDGdIU2lX_-M68n66WA/viewform?usp=header"
              style={{
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          </div>
        </div>
      </section>
      <p style={{ marginTop: 10, color: "#64748b", fontSize: ".9rem", textAlign: "center" }}>
        After submission, check your email for event updates and your personalized counselling slot.
      </p>

      {/* DOCUMENT CHECKLIST */}
      <section className="section checklist-section">
        <div className="checklist-container">
          <h3 className="checklist-title">What to Bring</h3>
          <ul className="checklist-list">
            <li>Academic transcript / WAEC / BSc certificate</li>
            <li>Passport data page (or valid ID)</li>
            <li>Personal statement & updated CV</li>
            <li>Any scholarship or funding documents (if available)</li>
          </ul>
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ padding: "36px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h3 style={{ fontSize: "1.4rem", marginBottom: 14 }}>Event Gallery (Preview)</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: 12 }}>
            {gallery.map((src, i) => (
              <div key={i} style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 6px 18px rgba(15,23,42,0.06)" }}>
                <img src={src} alt={`gallery-${i}`} style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "28px 20px", background: "#071033", color: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <strong>Marg Education International Limited</strong>
          <div style={{ marginTop: 8 }}>
            Hotel Presidential, Port Harcourt • admission@margeducation.co.uk • +234 903 110 7149
          </div>
          <div style={{ marginTop: 8, fontSize: ".85rem", color: "#94a3b8" }}>
            © {new Date().getFullYear()} Marg Education International Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
