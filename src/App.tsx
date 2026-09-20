import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BouquetChoice from "./bouquetChoice";
import BouquetCollection from "./BouquetCollection";

const bouquets = [
  {
    name: "Romantic Roses",
    price: "₹899",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Garden Bloom",
    price: "₹1,199",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Blush Bouquet",
    price: "₹999",
    image:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=85",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

function App() {
  const [showBouquetChoice, setShowBouquetChoice] =
    useState(false);

  const [selectedBouquetType, setSelectedBouquetType] =
    useState<"big" | "small" | null>(null);

  // SPECIAL SERVICES
  const services = [
    {
      title: "WEDDING VARMALA",
      description:
        "Beautiful varmala arrangements for your special day.",
      icon: "✿",
    },
    {
      title: "CAR DECORATION",
      description:
        "Elegant floral decorations for weddings & celebrations.",
      icon: "❋",
    },
    {
      title: "HOME WARMING",
      description:
        "Beautiful flowers for your new beginning.",
      icon: "❀",
    },
  ];

  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(
        (current) => (current + 1) % services.length
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // Open selected bouquet collection
  const handleBouquetSelect = (type: "big" | "small") => {
    console.log(`${type} bouquet selected`);

    setShowBouquetChoice(false);
    setSelectedBouquetType(type);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Back from collection to landing page
  const closeCollection = () => {
    setSelectedBouquetType(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // IMPORTANT:
  // When a bouquet type is selected, show the collection
  // instead of the landing page.
  if (selectedBouquetType) {
    return (
      <div className="site">
        <BouquetCollection
          type={selectedBouquetType}
          onBack={closeCollection}
        />
      </div>
    );
  }

  return (
    <div className="site">

      {/* BOUQUET CHOICE OVERLAY */}
      {showBouquetChoice && (
        <BouquetChoice
          onClose={() => setShowBouquetChoice(false)}
          onSelect={handleBouquetSelect}
        />
      )}

      {/* NAVBAR */}
      <motion.nav
        className="navbar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="brand">
          <span className="brand-mark">✿</span>
          <span>LAKSHMI FLOWERS</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#collection">Bouquets</a>
          <a href="#delivery">Delivery</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Order Flowers
        </a>
      </motion.nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />

        <div className="botanical botanical-one">❋</div>
        <div className="botanical botanical-two">✽</div>
        <div className="botanical botanical-three">❀</div>

        <div className="hero-content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            HANDCRAFTED WITH LOVE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 1 }}
          >
            Flowers that
            <br />
            <em>speak</em> from
            <br />
            the heart.
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
          >
            Beautiful bouquets, thoughtfully crafted for every
            <br />
            feeling, celebration and special moment.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
          >
            <button
              type="button"
              className="primary-button"
              onClick={() => setShowBouquetChoice(true)}
            >
              Explore Bouquets
              <span>→</span>
            </button>

            <a href="#contact" className="secondary-button">
              Contact Us
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-flower"
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.45,
            duration: 1.2,
          }}
        >
          <div className="flower-frame">
            <img
              src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=90"
              alt="Beautiful floral arrangement"
            />
          </div>

          <motion.div
            className="floating-note"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            <span>✿</span>
            Every bouquet,
            <br />
            a little story.
          </motion.div>
        </motion.div>

        <div className="scroll-indicator">
          <span>SCROLL TO DISCOVER</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* SPECIAL SERVICES */}
      <motion.section
        className="special-services"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        style={{
          padding: "90px 30px",
          textAlign: "center",
          background:
            "linear-gradient(180deg, #f8f3ed 0%, #fdfaf7 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              letterSpacing: "3px",
              color: "#9a7158",
            }}
          >
            MORE THAN JUST BOUQUETS
          </span>

          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              marginTop: "22px",
            }}
          >
            <div
              style={{
                fontSize: "28px",
                marginBottom: "14px",
              }}
            >
              {services[activeService].icon}
            </div>

            <h2
              style={{
                margin: 0,
                fontFamily: "inherit",
                fontSize: "clamp(30px, 5vw, 52px)",
                fontWeight: 400,
                letterSpacing: "1px",
              }}
            >
              {services[activeService].title}
            </h2>

            <p
              style={{
                marginTop: "16px",
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#6f625a",
              }}
            >
              {services[activeService].description}
            </p>
          </motion.div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginTop: "30px",
            }}
          >
            {services.map((_, index) => (
              <span
                key={index}
                style={{
                  width:
                    index === activeService ? "28px" : "7px",
                  height: "7px",
                  borderRadius: "20px",
                  background:
                    index === activeService
                      ? "#8f624b"
                      : "#d8c8bd",
                  transition: "all 0.4s ease",
                }}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* INTRO */}
      <section className="intro" id="about">
        <motion.div
          className="intro-content"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-label">
            THE LAKSHMI FLOWERS STORY
          </span>

          <h2>
            Made with flowers.
            <br />
            <em>Made with love.</em>
          </h2>

          <p>
            At Lakshmi Flowers, every arrangement is created to make a
            moment feel a little more beautiful. From quiet gestures of love
            to grand celebrations, our bouquets are thoughtfully put together
            with care.
          </p>
        </motion.div>
      </section>

      {/* COLLECTION */}
      <section className="collection" id="collection">
        <motion.div
          className="section-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <span className="section-label">
              OUR COLLECTION
            </span>

            <h2>
              Flowers for every feeling.
            </h2>
          </div>

          <p>
            A glimpse of our handcrafted bouquets.
            <br />
            More beautiful arrangements coming soon.
          </p>
        </motion.div>

        <div className="bouquet-grid">
          {bouquets.map((bouquet, index) => (
            <motion.article
              className="bouquet-card"
              key={bouquet.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{ y: -10 }}
            >
              <div className="bouquet-image">
                <img
                  src={bouquet.image}
                  alt={bouquet.name}
                />

                <div className="image-overlay">
                  <span>
                    View Bouquet →
                  </span>
                </div>
              </div>

              <div className="bouquet-info">
                <div>
                  <h3>{bouquet.name}</h3>
                  <p>
                    Handcrafted floral arrangement
                  </p>
                </div>

                <strong>
                  {bouquet.price}
                </strong>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* DELIVERY AREAS + SHOP ADDRESS */}
      <motion.section
        id="delivery"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        style={{
          padding: "100px 30px",
          background:
            "linear-gradient(180deg, #fdfaf7 0%, #f5eee8 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "55px",
            }}
          >
            <span
              className="section-label"
              style={{
                display: "inline-block",
              }}
            >
              WE DELIVER ACROSS VASAI–VIRAR
            </span>

            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 55px)",
                fontWeight: 400,
                margin: "18px 0 12px",
              }}
            >
              Flowers delivered to your doorstep.
            </h2>

            <p
              style={{
                color: "#6f625a",
                fontSize: "16px",
                lineHeight: 1.7,
                maxWidth: "650px",
                margin: "0 auto",
              }}
            >
              From everyday celebrations to weddings and special occasions,
              we deliver beautiful flowers across Vasai–Virar.
            </p>
          </div>

          {/* DELIVERY AREAS */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "65px",
            }}
          >
            {[
              "Vasai East",
              "Vasai West",
              "Naigaon East",
              "Naigaon West",
              "Nalasopara East",
              "Nalasopara West",
              "Virar East",
              "Virar West",
              "Arnala",
              "Rajodi",
            ].map((area) => (
              <motion.div
                key={area}
                whileHover={{ y: -4, scale: 1.02 }}
                style={{
                  padding: "14px 22px",
                  background: "#ffffff",
                  border: "1px solid #e4d6cc",
                  borderRadius: "30px",
                  color: "#5d4d44",
                  fontSize: "14px",
                  boxShadow:
                    "0 8px 25px rgba(80, 55, 40, 0.06)",
                }}
              >
                <span style={{ marginRight: "8px" }}>
                  ✿
                </span>
                {area}
              </motion.div>
            ))}
          </div>

          {/* SHOP ADDRESS CARD */}
          <div
            style={{
              maxWidth: "850px",
              margin: "0 auto",
              padding: "45px 35px",
              background: "#ffffff",
              borderRadius: "24px",
              textAlign: "center",
              boxShadow:
                "0 20px 60px rgba(80, 55, 40, 0.08)",
              border: "1px solid #eaded6",
            }}
          >
            <div
              style={{
                fontSize: "34px",
                marginBottom: "15px",
              }}
            >
              📍
            </div>

            <span
              className="section-label"
              style={{
                display: "inline-block",
              }}
            >
              VISIT OUR STORE
            </span>

            <h3
              style={{
                margin: "18px 0",
                fontSize: "26px",
                fontWeight: 500,
                color: "#4e4038",
              }}
            >
              Lakshmi Flowers
            </h3>

            <p
              style={{
                color: "#6f625a",
                fontSize: "16px",
                lineHeight: 1.9,
                margin: "0 auto 28px",
                maxWidth: "650px",
              }}
            >
              Shop No. 01, VVMC Bhaji Market,
              <br />
              Opp. Croma Showroom, Near D-Mart,
              <br />
              Sant Nagar, 90 Feet Road,
              <br />
              Nalasopara Link Road, Virar East – 401305
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Shop+No+01+VVMC+Bhaji+Market+Opp+Croma+Showroom+Near+D-Mart+Sant+Nagar+90+Feet+Road+Nalasopara+Link+Road+Virar+East+401305"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
              style={{
                display: "inline-flex",
                textDecoration: "none",
              }}
            >
              Get Directions
              <span>→</span>
            </a>
          </div>
        </div>
      </motion.section>

      {/* CONTACT CTA */}
      <section
        className="contact-section"
        id="contact"
      >
        <div className="contact-decoration">
          ✿
        </div>

        <motion.div
          className="contact-content"
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">
            LET'S MAKE IT SPECIAL
          </span>

          <h2>
            Have a moment
            <br />
            worth <em>celebrating?</em>
          </h2>

          <p>
            Tell us what you're looking for and we'll help you find
            the perfect flowers.
          </p>

          <div className="contact-buttons">
            <a
              href="tel:+919999999999"
              className="primary-button"
            >
              Call Us <span>→</span>
            </a>

            <a
              href="https://wa.me/919999999999"
              className="whatsapp-button"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          <span className="brand-mark">
            ✿
          </span>

          <strong>
            LAKSHMI FLOWERS
          </strong>

          <p>
            Flowers for every feeling.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#collection">Bouquets</a>
          <a href="#delivery">Delivery</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-bottom">
          © 2026 Lakshmi Flowers. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default App;