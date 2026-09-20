import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

interface BouquetCollectionProps {
  type: "big" | "small";
  onBack: () => void;
}

const bouquets = [
  // =========================
  // BIG BOUQUETS
  // =========================
  {
    image: "/images/bouquet-1.jpg",
    name: "Elegant Rose Bouquet",
    price: "₹899",
    type: "big",
  },
  {
    image: "/images/bouquet-2.jpg",
    name: "Classic Love Bouquet",
    price: "₹999",
    type: "big",
  },
  {
    image: "/images/bouquet-3.jpg",
    name: "Pink Bloom Bouquet",
    price: "₹1,099",
    type: "big",
  },
  {
    image: "/images/bouquet-4.jpg",
    name: "Royal Red Bouquet",
    price: "₹1,299",
    type: "big",
  },
  {
    image: "/images/bouquet-5.jpg",
    name: "Pastel Garden Bouquet",
    price: "₹1,199",
    type: "big",
  },
  {
    image: "/images/bouquet-6.jpg",
    name: "Premium Celebration Bouquet",
    price: "₹1,499",
    type: "big",
  },
  {
    image: "/images/bouquet-7.jpg",
    name: "Fresh Bloom Bouquet",
    price: "₹899",
    type: "big",
  },
  {
    image: "/images/bouquet-8.jpg",
    name: "Romantic Flower Basket",
    price: "₹1,399",
    type: "big",
  },
  {
    image: "/images/bouquet-9.jpg",
    name: "Signature Floral Bouquet",
    price: "₹1,599",
    type: "big",
  },
  {
    image: "/images/bouquet-10.jpg",
    name: "Luxury Rose Arrangement",
    price: "₹1,799",
    type: "big",
  },

  // =========================
  // SMALL BOUQUETS
  // =========================
  {
    image: "/images/bouquet-11.jpg",
    name: "Sweet Rose Bouquet",
    price: "₹499",
    type: "small",
  },
  {
    image: "/images/bouquet-12.jpg",
    name: "Mini Pink Bloom",
    price: "₹549",
    type: "small",
  },
  {
    image: "/images/bouquet-13.jpg",
    name: "Cute Floral Bouquet",
    price: "₹599",
    type: "small",
  },
  {
    image: "/images/bouquet-14.jpg",
    name: "Little Love Bouquet",
    price: "₹649",
    type: "small",
  },
  {
    image: "/images/bouquet-15.jpg",
    name: "Pastel Mini Bouquet",
    price: "₹699",
    type: "small",
  },
  {
    image: "/images/bouquet-16.jpg",
    name: "Fresh Mini Blooms",
    price: "₹549",
    type: "small",
  },
  {
    image: "/images/bouquet-17.jpg",
    name: "Mini Celebration Bouquet",
    price: "₹749",
    type: "small",
  },
  {
    image: "/images/bouquet-18.jpg",
    name: "Elegant Mini Roses",
    price: "₹699",
    type: "small",
  },
  {
    image: "/images/bouquet-19.jpg",
    name: "Charming Small Bouquet",
    price: "₹599",
    type: "small",
  },
];

const BouquetCollection: React.FC<BouquetCollectionProps> = ({
  type,
  onBack,
}) => {
  const [search, setSearch] = useState("");

  const filteredBouquets = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    return bouquets.filter((bouquet) => {
      const matchesType = bouquet.type === type;

      const matchesSearch =
        !searchText ||
        bouquet.name.toLowerCase().includes(searchText);

      return matchesType && matchesSearch;
    });
  }, [search, type]);

  const isBig = type === "big";

  return (
    <section className="bouquet-collection-page">

      {/* BACK BUTTON */}
      <motion.button
        type="button"
        className="collection-back-button"
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span>←</span>
        Back
      </motion.button>

      {/* HEADER */}
      <motion.div
        className="bouquet-collection-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label">
          {isBig ? "BIG BOUQUETS" : "SMALL BOUQUETS"}
        </span>

        <h1>
          {isBig ? (
            <>
              Grand flowers,
              <br />
              <em>grand moments.</em>
            </>
          ) : (
            <>
              Little flowers,
              <br />
              <em>big feelings.</em>
            </>
          )}
        </h1>

        <p>
          Explore our handcrafted collection and find something
          <br />
          beautiful for your special moment.
        </p>
      </motion.div>

      {/* SEARCH */}
      <motion.div
        className="bouquet-search-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="bouquet-search">
          <span className="search-icon">⌕</span>

          <input
            type="text"
            placeholder={
              isBig
                ? "Search big bouquets..."
                : "Search small bouquets..."
            }
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button
              type="button"
              className="clear-search"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>

        <span className="bouquet-count">
          {filteredBouquets.length}{" "}
          {filteredBouquets.length === 1 ? "bouquet" : "bouquets"}
        </span>
      </motion.div>

      {/* COLLECTION */}
      {filteredBouquets.length > 0 ? (
        <div className="bouquet-collection-grid">

          {filteredBouquets.map((bouquet, index) => (
            <motion.article
              className="collection-product-card"
              key={bouquet.image}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              whileHover={{ y: -7 }}
            >

              {/* IMAGE */}
              <div className="collection-product-image">

                <img
                  src={bouquet.image}
                  alt={bouquet.name}
                />

                <div className="collection-image-overlay">
                  <span>View Bouquet</span>
                </div>

              </div>

              {/* DETAILS */}
              <div className="collection-product-info">

                <div className="collection-product-text">
                  <h3>{bouquet.name}</h3>

                  <p>
                    Handcrafted floral arrangement
                  </p>
                </div>

                <strong>
                  {bouquet.price}
                </strong>

              </div>

              {/* ORDER BUTTON */}
              <button
                type="button"
                className="collection-order-button"
                onClick={() => {
                  const message = `Hello! 👋

I’m interested in ordering:

🌸 Bouquet: ${bouquet.name}
💰 Price: ${bouquet.price}

Please let me know about availability and delivery details.

Thank you!`;

                  const whatsappUrl =
                    `https://wa.me/917506069187?text=${encodeURIComponent(
                      message
                    )}`;

                  window.open(whatsappUrl, "_blank");
                }}
              >
                <span>Order This Bouquet</span>
                <span className="order-arrow">→</span>
              </button>

            </motion.article>
          ))}

        </div>
      ) : (
        /* NO RESULTS */
        <motion.div
          className="no-bouquets"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="no-bouquets-icon">✿</div>

          <h3>No bouquets found</h3>

          <p>
            Try searching for another bouquet name.
          </p>

          <button
            type="button"
            onClick={() => setSearch("")}
          >
            Show All Bouquets
          </button>
        </motion.div>
      )}

      {/* PAGE STYLES */}
      <style>{`

        .bouquet-collection-page {
          min-height: 100vh;
          padding: 110px 7vw 100px;
          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(220, 185, 160, 0.14),
              transparent 35%
            ),
            #f8f5f0;
          color: #2c2825;
        }

        /* BACK */

        .collection-back-button {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          border: 1px solid rgba(44, 40, 37, 0.2);
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          padding: 11px 18px;
          border-radius: 999px;
          font-family: inherit;
          font-size: 13px;
          letter-spacing: 0.04em;
          color: #302b27;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 55px;
        }

        .collection-back-button:hover {
          background: #2c2825;
          color: white;
          transform: translateX(-3px);
        }

        .collection-back-button span {
          font-size: 17px;
        }

        /* HEADER */

        .bouquet-collection-header {
          max-width: 850px;
          margin: 0 auto;
          text-align: center;
        }

        .bouquet-collection-header .section-label {
          display: inline-block;
          font-size: 11px;
          letter-spacing: 0.22em;
          font-weight: 600;
          margin-bottom: 18px;
          color: #8b6754;
        }

        .bouquet-collection-header h1 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(45px, 6vw, 78px);
          font-weight: 400;
          line-height: 0.98;
          letter-spacing: -0.04em;
        }

        .bouquet-collection-header h1 em {
          font-weight: 400;
          color: #9a6f59;
        }

        .bouquet-collection-header p {
          margin: 25px auto 0;
          color: #756d67;
          font-size: 15px;
          line-height: 1.8;
        }

        /* SEARCH */

        .bouquet-search-wrapper {
          max-width: 720px;
          margin: 55px auto 65px;
        }

        .bouquet-search {
          height: 58px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 18px;
          border: 1px solid rgba(50, 44, 39, 0.14);
          background: rgba(255, 255, 255, 0.88);
          border-radius: 999px;
          box-shadow: 0 12px 35px rgba(55, 42, 34, 0.07);
          transition: all 0.3s ease;
        }

        .bouquet-search:focus-within {
          border-color: rgba(139, 103, 84, 0.55);
          box-shadow:
            0 15px 40px rgba(55, 42, 34, 0.1),
            0 0 0 4px rgba(139, 103, 84, 0.07);
        }

        .search-icon {
          font-size: 25px;
          color: #806352;
          line-height: 1;
          transform: rotate(-20deg);
        }

        .bouquet-search input {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          font-family: inherit;
          font-size: 15px;
          color: #2c2825;
        }

        .bouquet-search input::placeholder {
          color: #9b938d;
        }

        .clear-search {
          width: 29px;
          height: 29px;
          border: none;
          border-radius: 50%;
          background: #eee8e2;
          color: #665b54;
          cursor: pointer;
          font-size: 18px;
          line-height: 1;
          transition: all 0.2s ease;
        }

        .clear-search:hover {
          background: #2c2825;
          color: white;
        }

        .bouquet-count {
          display: block;
          text-align: center;
          margin-top: 14px;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #958b83;
        }

        /* GRID */

        .bouquet-collection-grid {
          width: 100%;
          max-width: 1250px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
        }

        /* CARD */

        .collection-product-card {
          overflow: hidden;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(55, 45, 39, 0.08);
          border-radius: 18px;
          box-shadow: 0 10px 35px rgba(50, 40, 32, 0.07);
          transition:
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .collection-product-card:hover {
          box-shadow: 0 22px 55px rgba(50, 40, 32, 0.13);
          border-color: rgba(139, 103, 84, 0.2);
        }

        /* IMAGE */

        .collection-product-image {
          position: relative;
          width: 100%;
          height: 330px;
          overflow: hidden;
          background: #eee8e2;
        }

        .collection-product-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
          transition: transform 0.7s ease;
        }

        .collection-product-card:hover
        .collection-product-image img {
          transform: scale(1.055);
        }

        .collection-image-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(35, 29, 25, 0.18);
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .collection-product-card:hover
        .collection-image-overlay {
          opacity: 1;
        }

        .collection-image-overlay span {
          padding: 10px 18px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.93);
          color: #302a26;
          font-size: 12px;
          letter-spacing: 0.06em;
        }

        /* INFO */

        .collection-product-info {
          padding: 21px 21px 15px;
          display: flex;
          justify-content: space-between;
          gap: 15px;
        }

        .collection-product-text h3 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 20px;
          font-weight: 500;
          line-height: 1.2;
        }

        .collection-product-text p {
          margin: 7px 0 0;
          color: #8b8179;
          font-size: 12px;
        }

        .collection-product-info strong {
          white-space: nowrap;
          font-size: 17px;
          font-weight: 600;
          color: #76523f;
        }

        /* ORDER */

        .collection-order-button {
          width: calc(100% - 42px);
          margin: 0 21px 21px;
          padding: 13px 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid rgba(45, 38, 34, 0.14);
          border-radius: 10px;
          background: transparent;
          color: #332d29;
          font-family: inherit;
          font-size: 12px;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .collection-order-button:hover {
          background: #2d2825;
          color: white;
          border-color: #2d2825;
        }

        .order-arrow {
          font-size: 18px;
          transition: transform 0.3s ease;
        }

        .collection-order-button:hover .order-arrow {
          transform: translateX(4px);
        }

        /* NO RESULTS */

        .no-bouquets {
          max-width: 600px;
          margin: 50px auto;
          padding: 70px 30px;
          text-align: center;
          background: rgba(255, 255, 255, 0.75);
          border-radius: 20px;
          border: 1px solid rgba(50, 40, 35, 0.08);
        }

        .no-bouquets-icon {
          font-size: 35px;
          color: #9b735d;
          margin-bottom: 15px;
        }

        .no-bouquets h3 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 27px;
          font-weight: 400;
        }

        .no-bouquets p {
          color: #827870;
          font-size: 14px;
        }

        .no-bouquets button {
          margin-top: 10px;
          padding: 11px 20px;
          border: none;
          border-radius: 999px;
          background: #2d2825;
          color: white;
          cursor: pointer;
        }

        /* TABLET */

        @media (max-width: 950px) {
          .bouquet-collection-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .collection-product-image {
            height: 320px;
          }
        }

        /* MOBILE */

        @media (max-width: 650px) {

          .bouquet-collection-page {
            padding: 90px 20px 70px;
          }

          .collection-back-button {
            margin-bottom: 40px;
          }

          .bouquet-collection-header h1 {
            font-size: 47px;
          }

          .bouquet-collection-header p br {
            display: none;
          }

          .bouquet-search-wrapper {
            margin: 40px auto 45px;
          }

          .bouquet-collection-grid {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .collection-product-image {
            height: 360px;
          }

          .collection-product-info {
            padding: 20px 18px 14px;
          }

          .collection-order-button {
            width: calc(100% - 36px);
            margin-left: 18px;
            margin-right: 18px;
          }
        }

      `}</style>
    </section>
  );
};

export default BouquetCollection;